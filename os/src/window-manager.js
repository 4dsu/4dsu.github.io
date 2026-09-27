/**
 * 4dsu OS — Window Manager Architecture
 * Gestió accessible i resilient de finestres:
 * - Cicle de vida separat del contingut HTML mitjançant AppRegistry
 * - Animacions amb transform-origin dinàmic i immunitat a condicions de cursa (AbortController)
 * - Arrossegament delimitat estrictament a l'espai de treball (mai coordenades negatives ni sota la taskbar)
 * - Trapping i restauració del focus accessible (WCAG 2.2 AA)
 * - Mode responsive per a mòbil (viewports <= 768px / <= 640px) a pantalla completa
 * - Chrome Aurora: capçalera de grafit amb semàfors a l'esquerra (tancar, minimitzar,
 *   maximitzar), pip [■] actiu i [ ] inactiu, pinstripes pixelats i barra d'estat inferior.
 */

import { createDefaultAppRegistry } from "./apps/app-registry.js";
import { resolveFinderPane } from "./apps/finder-panes.js";
import { getIcon } from "./icons.js";

export class WindowManager {
  constructor({ workspaceElement, taskbarWindowsElement, liveAnnouncerElement, appRegistry = null }) {
    this.workspace = workspaceElement;
    this.taskbarWindows = taskbarWindowsElement;
    this.liveAnnouncer = liveAnnouncerElement;
    this.appRegistry = appRegistry || createDefaultAppRegistry();

    this.windows = new Map(); // id -> windowState
    this.highestZIndex = 100;
    this.activeWindowId = null;
    this.cascadeIndex = 0;
    this.lastUnknownRoute = null;

    this._bindGlobalKeys();
  }

  registerApp(id, definition) {
    this.appRegistry.register(id, definition);
  }

  _bindGlobalKeys() {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.activeWindowId) {
        // Si qualsevol menú de la barra superior està obert, el menú té prioritat
        const openDropdown = document.querySelector(".menubar-dropdown.is-open, #system-menu-dropdown.is-open");
        if (openDropdown) {
          return;
        }
        // Tancar la finestra activa amb Escape (preventDefault: l'illa no ha de tancar l'OS)
        e.preventDefault();
        this.close(this.activeWindowId);
      }
    });

    window.addEventListener("resize", () => {
      this._handleResize();
    });
  }

  _readCssMetric(name, fallback) {
    const value = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue(name));
    return Number.isFinite(value) && value > 0 ? value : fallback;
  }

  _getLayoutMetrics() {
    const systemRail = this._readCssMetric("--system-rail-height", 48);
    return {
      systemRail,
      windowChrome: this._readCssMetric("--window-chrome-height", 44),
      mobileDock: this._readCssMetric("--mobile-dock-height", 56),
      workspaceEdge: this._readCssMetric("--workspace-edge", 24),
      launcherRail: this._readCssMetric("--desktop-launcher-rail-width", 132),
      dockReserve: this._readCssMetric("--dock-reserve", 0)
    };
  }

  /**
   * Alçada utilitzable de l'espai de treball.
   * El Dock flota per sobre de l'espai de treball i no en redueix la caixa:
   * només el WindowManager sap que hi és. Es mesura l'element real i el token
   * --dock-reserve només actua de reserva si el Dock encara no existeix.
   */
  _getUsableHeight(metrics) {
    const wsHeight = this.workspace.clientHeight || (window.innerHeight - metrics.systemRail);
    if (window.innerWidth <= 768) return wsHeight;

    const dock = document.getElementById("dock");
    if (dock && this.workspace) {
      const dockRect = dock.getBoundingClientRect();
      const wsRect = this.workspace.getBoundingClientRect();
      if (dockRect.height > 0) return Math.max(0, Math.round(dockRect.top - wsRect.top));
    }
    return Math.max(0, wsHeight - metrics.dockReserve);
  }

  _handleResize() {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;

    const metrics = this._getLayoutMetrics();
    const wsWidth = this.workspace.clientWidth || window.innerWidth;
    const wsHeight = this._getUsableHeight(metrics);

    this.windows.forEach((win) => {
      if (win.isOpen && !win.isMaximized) {
        const el = win.element;
        const currentLeft = parseInt(el.style.left, 10);
        const currentTop = parseInt(el.style.top, 10);

        if (isNaN(currentLeft) || currentLeft < 0 || isNaN(currentTop) || currentTop < 0) {
          const pos = this._calculatePosition(win.id, el);
          el.style.left = pos.left;
          el.style.top = pos.top;
          return;
        }

        const maxLeft = Math.max(metrics.workspaceEdge, wsWidth - el.offsetWidth - metrics.workspaceEdge);
        const maxTop = Math.max(metrics.workspaceEdge, wsHeight - el.offsetHeight - metrics.workspaceEdge);

        if (currentLeft > maxLeft) el.style.left = `${maxLeft}px`;
        if (currentTop > maxTop) el.style.top = `${maxTop}px`;
      }
    });
  }

  _announce(text) {
    if (this.liveAnnouncer) {
      this.liveAnnouncer.textContent = text;
    }
  }

  isOpen(id) {
    return this.windows.has(id) && this.windows.get(id).isOpen;
  }

  /**
   * Mou el focus al control principal d'una finestra.
   *
   * Es fa de manera síncrona: ajornar-ho a requestAnimationFrame deixa el focus
   * desubicat quan la pestanya no està pintant (segon pla) o quan l'usuari encadena
   * accions ràpides.
   */
  _focusWindowEntry(winState) {
    if (!winState || !winState.element) return;

    // preventScroll evita que obrir una finestra desplaci el contingut fins al botó
    // principal: el document sempre s'ha de llegir des del començament.
    const focusOptions = { preventScroll: true };
    const body = winState.element.querySelector(".win-body");

    const primaryBtn = winState.element.querySelector("#btn-welcome-open-projects, .sys-btn-primary");
    if (primaryBtn) {
      primaryBtn.focus(focusOptions);
      if (body) body.scrollTop = 0;
      return;
    }

    const titleEl = winState.element.querySelector(".win-header-title");
    if (titleEl) {
      titleEl.setAttribute("tabindex", "-1");
      titleEl.focus(focusOptions);
      if (body) body.scrollTop = 0;
    }
  }

  /**
   * Executa una animació mecànica de finestra i garanteix un estat final coherent.
   *
   * L'esdeveniment `animationend` no sempre arriba: si la pestanya està en segon pla
   * o el navegador descarta l'animació, el temporitzador de seguretat tanca igualment
   * la transició perquè cap finestra quedi a mig camí.
   */
  _runWindowAnimation(winState, className, onFinish, fallbackMs = 250) {
    const controller = new AbortController();
    winState.animController = controller;

    const element = winState.element;
    element.classList.remove("is-opening", "is-closing", "is-minimizing");
    // Reinici net de l'animació encara que la classe ja s'hagués aplicat abans
    void element.offsetWidth;
    element.classList.add(className);

    let settled = false;
    const finish = () => {
      if (settled || controller.signal.aborted) return;
      settled = true;
      window.clearTimeout(fallbackTimer);
      if (winState.animController === controller) {
        winState.animController = null;
      }
      onFinish();
    };

    const fallbackTimer = window.setTimeout(finish, fallbackMs);
    controller.signal.addEventListener("abort", () => window.clearTimeout(fallbackTimer));

    element.addEventListener("animationend", (event) => {
      if (event.target !== element) return;
      finish();
    }, { signal: controller.signal });
  }

  _applySpatialOrigin(winEl, launcherElement, id = null) {
    let launcher = launcherElement;
    if (!launcher || typeof launcher.getBoundingClientRect !== "function") {
      if (id) {
        // L'origen preferent és el punt des d'on s'ha llançat: icona de
        // l'escriptori, element del Dock i, si no n'hi ha cap, la barra.
        launcher = document.querySelector(`.desktop-icon[data-open-app="${id}"]`) ||
          document.querySelector(`.dock-item[data-dock-for="${id}"]`) ||
          document.getElementById("dock") ||
          document.getElementById("btn-system-menu");
      }
    }

    if (!launcher || typeof launcher.getBoundingClientRect !== "function") {
      winEl.style.transformOrigin = "center center";
      return;
    }

    const launcherRect = launcher.getBoundingClientRect();
    const winRect = winEl.getBoundingClientRect();

    const winLeft = winRect.width > 0 ? winRect.left : (parseInt(winEl.style.left, 10) || 0);
    const winTop = winRect.height > 0 ? winRect.top : (parseInt(winEl.style.top, 10) || 0);

    const launcherCenterX = launcherRect.left + launcherRect.width / 2;
    const launcherCenterY = launcherRect.top + launcherRect.height / 2;

    const originX = Math.round(launcherCenterX - winLeft);
    const originY = Math.round(launcherCenterY - winTop);

    winEl.style.transformOrigin = `${originX}px ${originY}px`;
  }

  open(id, launcherElement = null, options = {}) {
    const { updateHash = true, route = null, params = {} } = options;

    // Els identificadors amfitrionats pel Finder no obren finestra pròpia.
    // La guarda viu aquí perquè totes les vies (icones, Dock, menú, CTA dins
    // del contingut i encaminador) passen per open(): així és estructuralment
    // impossible que una aplicació sigui panell i finestra alhora.
    if (id !== "finder" && this.appRegistry.has("finder")) {
      const paneId = resolveFinderPane(id);
      if (paneId) {
        const finderState = this.open("finder", launcherElement, { ...options, updateHash: false });
        if (this.finder) this.finder.select(paneId, { updateHash });
        return finderState;
      }
    }

    let targetId = id;
    if (!this.appRegistry.has(targetId)) {
      route = route || targetId;
      targetId = "system_error";
    }

    if (targetId === "system_error") {
      this.lastUnknownRoute = route || this.lastUnknownRoute || "desconeguda";
      const existing = this.windows.get("system_error");
      if (existing) {
        const codeEl = existing.element.querySelector(".system-error-details code");
        if (codeEl) {
          const displayRoute = this.lastUnknownRoute.startsWith("#") || this.lastUnknownRoute.startsWith("/")
            ? this.lastUnknownRoute
            : (this.lastUnknownRoute.startsWith("app=") ? `#${this.lastUnknownRoute}` : `#app=${encodeURIComponent(this.lastUnknownRoute)}`);
          codeEl.textContent = displayRoute;
        }
      }
    }

    let winState = this.windows.get(targetId);

    if (!winState) {
      const created = this._createWindow(targetId, launcherElement, { route, ...params });
      if (!created) return null;
      winState = created;
    }

    if (launcherElement) {
      winState.launcherElement = launcherElement;
    }

    // Cancel·lar qualsevol animació pendent de tancament o minimització per evitar condicions de cursa
    if (winState.animController) {
      winState.animController.abort();
      winState.animController = null;
    }

    // Si estava minimitzada o en transició, restaurar l'estat actiu net
    winState.isMinimized = false;
    winState.isOpen = true;
    winState.element.classList.remove("is-minimized", "is-minimizing", "is-closing");
    winState.element.removeAttribute("hidden");

    // Calcular transform-origin des del botó/icona d'origen o icona de l'escriptori
    this._applySpatialOrigin(winState.element, launcherElement || winState.launcherElement, targetId);

    // Animació mecànica d'obertura (160–200ms) amb AbortController
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReducedMotion) {
      this._runWindowAnimation(winState, "is-opening", () => {
        winState.element.classList.remove("is-opening");
      });
    } else {
      winState.element.classList.remove("is-opening", "is-closing", "is-minimizing");
      winState.animController = null;
    }

    this.bringToFront(targetId);
    this._updateTaskbarButton(targetId);
    this._announce(`Finestra oberta: ${winState.title}`);

    // Moure focus al botó d'acció principal o al títol de la finestra per a lectors de pantalla
    this._focusWindowEntry(winState);

    // Actualitzar URL hash si està habilitat
    if (updateHash && window.location.hash !== `#app=${targetId}`) {
      try {
        history.replaceState(null, "", `#app=${targetId}`);
      } catch (e) {}
    }

    return winState;
  }

  close(id) {
    const winState = this.windows.get(id);
    if (!winState || !winState.isOpen) return;

    if (winState.animController) {
      winState.animController.abort();
      winState.animController = null;
    }

    const appDef = this.appRegistry.get(id);
    if (appDef && typeof appDef.onClose === "function") {
      try {
        appDef.onClose(winState.element, this);
      } catch (e) {}
    }

    winState.isOpen = false;
    winState.isMinimized = false;
    this._removeTaskbarButton(id);
    this._announce(`Finestra tancada: ${winState.title}`);
    window.dispatchEvent(new CustomEvent("4dsu:window-change", { detail: { id, action: "close" } }));

    // Determinar quina finestra queda activa
    const remainingOpen = Array.from(this.windows.values())
      .filter(w => w.isOpen && !w.isMinimized && w.id !== id)
      .sort((a, b) => b.zIndex - a.zIndex);

    if (this.activeWindowId === id) {
      this.activeWindowId = null;
      if (remainingOpen.length > 0) {
        const topWin = remainingOpen[0];
        this.bringToFront(topWin.id);
        this._focusWindowEntry(topWin);
      } else {
        if (winState.launcherElement && typeof winState.launcherElement.focus === "function") {
          winState.launcherElement.focus();
        } else {
          const defaultLauncher = document.querySelector(`.desktop-icon[data-open-app="${id}"]`) ||
            document.getElementById("btn-system-menu");
          if (defaultLauncher) defaultLauncher.focus();
        }
        document.title = "4dsu.me — 4dsu OS // Portfolio Personal";
      }
    }

    // Netejar o actualitzar el hash
    if (window.location.hash === `#app=${id}`) {
      const nextHash = remainingOpen.length > 0 ? `#app=${remainingOpen[0].id}` : window.location.pathname;
      try {
        history.replaceState(null, "", nextHash);
      } catch (e) {}
    }

    // Calcular transform-origin cap al llançador original per al tancament
    this._applySpatialOrigin(winState.element, winState.launcherElement, id);

    const finishDomRemoval = () => {
      winState.element.setAttribute("hidden", "");
      winState.element.classList.remove("is-active", "is-minimized", "is-closing", "is-minimizing");
      winState.animController = null;
    };

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReducedMotion) {
      this._runWindowAnimation(winState, "is-closing", finishDomRemoval);
    } else {
      finishDomRemoval();
    }
  }

  minimize(id) {
    const winState = this.windows.get(id);
    if (!winState || !winState.isOpen) return;

    if (winState.animController) {
      winState.animController.abort();
      winState.animController = null;
    }

    const taskbarBtn = this.taskbarWindows ? this.taskbarWindows.querySelector(`[data-taskbar-for="${id}"]`) : null;
    this._applySpatialOrigin(winState.element, taskbarBtn || winState.launcherElement, id);

    const finishMinimize = () => {
      winState.isMinimized = true;
      winState.element.classList.add("is-minimized");
      winState.element.setAttribute("hidden", "");
      winState.element.classList.remove("is-active", "is-minimizing");
      winState.animController = null;
      this._updateTaskbarButton(id);
      this._announce(`Finestra minimitzada: ${winState.title}`);
      window.dispatchEvent(new CustomEvent("4dsu:window-change", { detail: { id, action: "minimize" } }));

      if (this.activeWindowId === id) {
        this.activeWindowId = null;
        const remainingOpen = Array.from(this.windows.values())
          .filter(w => w.isOpen && !w.isMinimized)
          .sort((a, b) => b.zIndex - a.zIndex);

        if (remainingOpen.length > 0) {
          const topWin = remainingOpen[0];
          this.bringToFront(topWin.id);
          this._focusWindowEntry(topWin);
        }
      }
    };

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReducedMotion) {
      this._runWindowAnimation(winState, "is-minimizing", finishMinimize);
    } else {
      finishMinimize();
    }
  }

  toggleMaximize(id) {
    const winState = this.windows.get(id);
    if (!winState || !winState.isOpen) return;

    winState.isMaximized = !winState.isMaximized;
    winState.element.classList.toggle("is-maximized", winState.isMaximized);

    const maxBtn = winState.element.querySelector(".btn-win-maximize");
    if (maxBtn) {
      maxBtn.setAttribute("aria-label", winState.isMaximized ? `Restaurar mida de ${winState.title}` : `Maximitzar ${winState.title}`);
      maxBtn.innerHTML = winState.isMaximized ? getIcon("restore") : getIcon("maximize");
    }

    this.bringToFront(id);
  }

  toggleWindowshade(id) {
    const winState = this.windows.get(id);
    if (!winState || !winState.isOpen) return;

    winState.isWindowshaded = !winState.isWindowshaded;
    winState.element.classList.toggle("is-windowshaded", winState.isWindowshaded);

    // El cos deixa de ser accessible quan la finestra està col·lapsada com una persiana
    const body = winState.element.querySelector(".win-body");
    if (body) {
      if (winState.isWindowshaded) body.setAttribute("hidden", "");
      else body.removeAttribute("hidden");
    }

    this.bringToFront(id);
    this._announce(winState.isWindowshaded
      ? `Finestra col·lapsada: ${winState.title}`
      : `Finestra desplegada: ${winState.title}`);
    window.dispatchEvent(new CustomEvent("4dsu:window-change", { detail: { id, action: "windowshade", isWindowshaded: winState.isWindowshaded } }));
  }

  bringToFront(id) {
    const winState = this.windows.get(id);
    if (!winState) return;

    this.highestZIndex += 1;
    winState.zIndex = this.highestZIndex;
    winState.element.style.zIndex = winState.zIndex;

    // Desactivar altres finestres i actualitzar pips de procés [■] vs [ ]
    this.windows.forEach((w) => {
      const isActive = w.id === id;
      w.element.classList.toggle("is-active", isActive);

      const pip = w.element.querySelector(".win-status-pip");
      if (pip) {
        pip.textContent = isActive ? "[■]" : "[ ]";
      }
    });

    this.activeWindowId = id;
    this._updateTaskbarButton(id);

    if (winState.title) {
      document.title = `${winState.title} — 4dsu.me`;
    }

    window.dispatchEvent(new CustomEvent("4dsu:window-change", { detail: { id, action: "bringToFront" } }));
  }

  /**
   * Amplada reservada pel rail d'icones de l'escriptori (columna esquerra).
   * Es mesura el rectangle real que ocupen les icones (ara a la cantonada
   * superior dreta) i la mètrica CSS només s'usa com a reserva si encara
   * no s'han pintat. Retorna coordenades relatives a l'espai de treball.
   */
  _getLauncherRect(metrics) {
    const wsWidth = this.workspace.clientWidth || window.innerWidth;
    const fallback = {
      left: Math.max(0, wsWidth - metrics.launcherRail),
      top: 0,
      right: wsWidth,
      bottom: metrics.launcherRail * 2
    };

    const area = document.getElementById("desktop-icons");
    if (!area || !this.workspace || typeof area.getBoundingClientRect !== "function") return fallback;

    const areaRect = area.getBoundingClientRect();
    const wsRect = this.workspace.getBoundingClientRect();
    if (areaRect.width <= 0) return fallback;

    return {
      left: Math.round(areaRect.left - wsRect.left),
      top: Math.round(areaRect.top - wsRect.top),
      right: Math.round(areaRect.right - wsRect.left),
      bottom: Math.round(areaRect.bottom - wsRect.top)
    };
  }

  _calculatePosition(id, winEl = null) {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return { top: "0px", left: "0px" };

    const metrics = this._getLayoutMetrics();
    const edge = metrics.workspaceEdge;
    const wsWidth = this.workspace.clientWidth || window.innerWidth;
    const wsHeight = this._getUsableHeight(metrics);

    // Mida real de la finestra quan ja és al DOM; si no, estimació conservadora
    const winWidth = winEl && winEl.offsetWidth > 0
      ? winEl.offsetWidth
      : Math.min(620, Math.floor(wsWidth * 0.8));
    const winHeight = winEl && winEl.offsetHeight > 0
      ? winEl.offsetHeight
      : Math.min(480, Math.floor(wsHeight * 0.85));

    const maxLeft = Math.max(edge, wsWidth - winWidth - edge);
    const maxTop = Math.max(edge, wsHeight - winHeight - edge);

    // Zona lliure a l'esquerra del bloc d'icones
    const launcherRect = this._getLauncherRect(metrics);
    const areaLeft = edge;
    const areaWidth = Math.max(0, launcherRect.left - edge * 2);

    // El Finder és el punt focal centrat a la zona útil
    if (id === "finder") {
      const left = areaWidth >= winWidth
        ? areaLeft + Math.floor((areaWidth - winWidth) / 2)
        : Math.max(edge, Math.floor((wsWidth - winWidth) / 2));
      const top = Math.max(edge, Math.floor((wsHeight - winHeight) / 2));
      return {
        top: `${Math.min(top, maxTop)}px`,
        left: `${Math.max(edge, Math.min(left, maxLeft))}px`
      };
    }

    // Cascada controlada per a la resta de finestres
    const baseOffsets = [
      { top: 0, left: 0 },
      { top: 28, left: 32 },
      { top: 56, left: 64 },
      { top: 84, left: 96 },
      { top: 14, left: 128 }
    ];

    const offset = baseOffsets[this.cascadeIndex % baseOffsets.length];
    this.cascadeIndex += 1;

    const safeLeft = Math.max(edge, Math.min(areaLeft + offset.left, maxLeft));
    let safeTop = Math.max(edge, Math.min(edge + offset.top, maxTop));

    // Si la finestra es col·loca sota el bloc d'icones, baixa fins a esquivar-lo
    const overlapsLauncher = safeLeft + winWidth > launcherRect.left && safeTop < launcherRect.bottom;
    if (overlapsLauncher) {
      safeTop = Math.min(maxTop, Math.max(safeTop, launcherRect.bottom + edge));
    }

    return { top: `${safeTop}px`, left: `${safeLeft}px` };
  }

  _createWindow(id, launcherElement, params = {}) {
    const appDef = this.appRegistry.get(id, params);
    if (!appDef) return null;

    const title = typeof appDef.title === "function" ? appDef.title(params) : appDef.title;
    const badge = typeof appDef.badge === "function" ? appDef.badge(params) : (appDef.badge || "");
    const iconName = appDef.iconName || appDef.icon || "document";
    const statusLeft = typeof appDef.statusLeft === "function" ? appDef.statusLeft(params) : (appDef.statusLeft || "SISTEMA: A PUNT");
    const statusRight = typeof appDef.statusRight === "function" ? appDef.statusRight(params) : (appDef.statusRight || "4dsu OS");
    const isDocument = Boolean(appDef.isDocument);

    const winEl = document.createElement("article");
    winEl.id = `window-${id}`;
    winEl.className = `sys-window win-${id} ${isDocument ? "win-document-style" : ""}`;
    winEl.setAttribute("role", "dialog");
    winEl.setAttribute("aria-labelledby", `win-title-${id}`);
    winEl.setAttribute("aria-modal", "false");

    winEl.innerHTML = `
      <header class="win-header">
        <div class="win-header-controls">
          <button type="button" class="win-btn win-light win-light-close btn-win-close" aria-label="Tancar finestra ${title}">${getIcon("close")}</button>
          <button type="button" class="win-btn win-light win-light-min btn-win-minimize" aria-label="Minimitzar ${title}">${getIcon("minimize")}</button>
          <button type="button" class="win-btn win-light win-light-zoom btn-win-zoom btn-win-maximize" aria-label="Maximitzar ${title}">${getIcon("maximize")}</button>
        </div>
        <div class="win-title-container">
          <span class="win-status-pip" aria-hidden="true">[■]</span>
          <span class="win-title-icon" aria-hidden="true">${getIcon(iconName)}</span>
          <h2 id="win-title-${id}" class="win-header-title">${title}</h2>
          ${badge ? `<span class="win-header-badge">${badge}</span>` : ""}
        </div>
        <span class="win-header-stripes" aria-hidden="true"></span>
      </header>
      <div class="win-body" tabindex="0"></div>
      <footer class="win-statusbar">
        <span class="win-status-left">${statusLeft}</span>
        <span class="win-status-right">${statusRight}</span>
      </footer>
    `;

    const winBody = winEl.querySelector(".win-body");
    if (typeof appDef.render === "function") {
      const result = appDef.render(winBody, this, params);
      if (typeof result === "string") {
        winBody.innerHTML = result;
      }
    } else if (appDef.bodyHtml) {
      winBody.innerHTML = appDef.bodyHtml;
    }

    // Controls
    const closeBtn = winEl.querySelector(".btn-win-close");
    const minimizeBtn = winEl.querySelector(".btn-win-minimize");
    const zoomBtn = winEl.querySelector(".btn-win-zoom");
    const header = winEl.querySelector(".win-header");

    if (closeBtn) {
      closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.close(id);
      });
    }

    if (minimizeBtn) {
      minimizeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.minimize(id);
      });
    }

    if (zoomBtn) {
      zoomBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.toggleMaximize(id);
      });
    }

    if (header) {
      header.addEventListener("dblclick", (e) => {
        if (e.target.closest(".win-btn, .btn-win-close, .btn-win-zoom")) return;
        this.toggleWindowshade(id);
      });
    }

    // Clic per portar al davant
    winEl.addEventListener("mousedown", () => {
      if (this.activeWindowId !== id) {
        this.bringToFront(id);
      }
    });

    winEl.addEventListener("touchstart", () => {
      if (this.activeWindowId !== id) {
        this.bringToFront(id);
      }
    }, { passive: true });

    this._attachInternalActions(winEl);

    if (typeof appDef.onMount === "function") {
      try {
        appDef.onMount(winEl, this, params);
      } catch (err) {}
    }

    this.workspace.appendChild(winEl);

    // La posició es calcula amb la mida real, un cop la finestra ja és al DOM
    const pos = this._calculatePosition(id, winEl);
    winEl.style.top = pos.top;
    winEl.style.left = pos.left;

    const winState = {
      id,
      title,
      iconName,
      element: winEl,
      isOpen: true,
      isMinimized: false,
      isMaximized: false,
      isWindowshaded: false,
      zIndex: this.highestZIndex,
      launcherElement
    };

    this._initDraggable(winEl, winState);
    this._setupFocusTrap(winEl, winState);
    this.windows.set(id, winState);
    return winState;
  }

  _setupFocusTrap(winEl, winState) {
    winEl.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        const focusables = Array.from(
          winEl.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')
        ).filter(el => {
          return el.offsetWidth > 0 || el.offsetHeight > 0 || el === document.activeElement;
        });

        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first || !winEl.contains(document.activeElement)) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last || !winEl.contains(document.activeElement)) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    });
  }

  _initDraggable(winEl, winState) {
    const header = winEl.querySelector(".win-header");
    if (!header) return;

    let isDragging = false;
    let startPointerX = 0;
    let startPointerY = 0;
    let startWinLeft = 0;
    let startWinTop = 0;

    const onPointerMove = (e) => {
      if (!isDragging) return;

      const dx = e.clientX - startPointerX;
      const dy = e.clientY - startPointerY;

      let newLeft = startWinLeft + dx;
      let newTop = startWinTop + dy;

      const metrics = this._getLayoutMetrics();
      const wsWidth = this.workspace.clientWidth || window.innerWidth;
      const wsHeight = this._getUsableHeight(metrics);
      const winWidth = winEl.offsetWidth;
      const winHeight = winEl.offsetHeight;

      // Limita les finestres estrictament als límits de l'escriptori (no menubar superior ni fora de pantalla)
      const minTop = metrics.workspaceEdge;
      const maxLeft = Math.max(metrics.workspaceEdge, wsWidth - winWidth - metrics.workspaceEdge);
      const maxTop = Math.max(minTop, wsHeight - winHeight - metrics.workspaceEdge);

      newLeft = Math.max(metrics.workspaceEdge, Math.min(newLeft, maxLeft));
      newTop = Math.max(minTop, Math.min(newTop, maxTop));

      winEl.style.left = `${newLeft}px`;
      winEl.style.top = `${newTop}px`;
    };

    const finishDrag = (e) => {
      if (!isDragging) return;
      isDragging = false;
      winEl.classList.remove("is-dragging");
      try {
        if (header.hasPointerCapture(e.pointerId)) {
          header.releasePointerCapture(e.pointerId);
        }
      } catch (err) {}
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", finishDrag);
      window.removeEventListener("pointercancel", finishDrag);
    };

    header.addEventListener("pointerdown", (e) => {
      // Moviment opcional de finestres només en desktop
      if (window.innerWidth <= 768) return;
      if (winState.isMaximized) return;
      if (e.target.closest(".win-header-controls, .win-btn")) return;
      if (e.button !== 0) return;

      this.bringToFront(winState.id);
      isDragging = true;
      startPointerX = e.clientX;
      startPointerY = e.clientY;
      startWinLeft = parseInt(winEl.style.left, 10) || 0;
      startWinTop = parseInt(winEl.style.top, 10) || 0;

      try {
        header.setPointerCapture(e.pointerId);
      } catch (err) {}
      winEl.classList.add("is-dragging");

      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", finishDrag);
      window.addEventListener("pointercancel", finishDrag);
    });
  }

  /**
   * Cablejat de les accions internes d'un contingut (data-open-app, vista lineal).
   * És públic perquè el Finder munta panells després de crear la finestra:
   * sense aquesta crida, cada botó dins d'un panell quedaria inert.
   */
  attachInternalActions(container) {
    return this._attachInternalActions(container);
  }

  _attachInternalActions(container) {
    const isInsideError = container.classList?.contains("win-system_error") || Boolean(container.closest?.(".win-system_error"));

    const actionElements = container.querySelectorAll("[data-open-app]");
    actionElements.forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const targetApp = el.getAttribute("data-open-app");
        if (targetApp) {
          if (isInsideError) {
            this.close("system_error");
          }
          this.open(targetApp, el);
        }
      });
    });

    const actionLinearElements = container.querySelectorAll("[data-action='switch-linear']");
    actionLinearElements.forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        if (isInsideError) {
          this.close("system_error");
        }
        if (typeof window.__4dsu_switchView === "function") {
          window.__4dsu_switchView("linear");
        }
      });
    });
  }

  _updateTaskbarButton(id) {
    // Qualsevol canvi d'estat de finestra ha d'arribar al Dock.
    if (typeof this.onWindowsChanged === "function") this.onWindowsChanged();

    const winState = this.windows.get(id);
    if (!winState || !this.taskbarWindows) return;

    let btn = this.taskbarWindows.querySelector(`[data-taskbar-for="${id}"]`);

    if (!btn && winState.isOpen) {
      btn = document.createElement("button");
      btn.type = "button";
      btn.className = "taskbar-app-btn";
      btn.setAttribute("data-taskbar-for", id);
      btn.setAttribute("aria-label", `Canviar a finestra ${winState.title}`);
      btn.innerHTML = `
        <span class="taskbar-btn-icon" aria-hidden="true">${getIcon(winState.iconName)}</span>
        <span class="taskbar-btn-title">${winState.title}</span>
      `;

      btn.addEventListener("click", () => {
        if (!winState.isOpen) {
          this.open(id, btn);
        } else if (winState.isMinimized) {
          this.open(id, btn);
        } else if (this.activeWindowId === id) {
          this.minimize(id);
        } else {
          this.bringToFront(id);
        }
      });

      this.taskbarWindows.appendChild(btn);
    }

    if (btn) {
      btn.classList.toggle("is-active", this.activeWindowId === id && !winState.isMinimized);
      btn.classList.toggle("is-minimized", winState.isMinimized);
      btn.setAttribute("aria-pressed", this.activeWindowId === id ? "true" : "false");
      const titleSpan = btn.querySelector(".taskbar-btn-title");
      if (titleSpan) {
        titleSpan.textContent = winState.isMinimized ? `[${winState.title}]` : winState.title;
      }
    }
  }

  _removeTaskbarButton(id) {
    if (typeof this.onWindowsChanged === "function") this.onWindowsChanged();
    if (!this.taskbarWindows) return;
    const btn = this.taskbarWindows.querySelector(`[data-taskbar-for="${id}"]`);
    if (btn) {
      btn.remove();
    }
  }
}
