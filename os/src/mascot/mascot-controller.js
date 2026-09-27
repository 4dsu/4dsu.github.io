/**
 * 4dsu OS — Mascot Controller
 * Control de moviment mecànic discret, límits d'escriptori, zona segura de finestres
 * i accessibilitat (reduced motion, touch, teclat, WCAG 2.2 AA).
 */

import { queryMascot } from "./mascot-data.js";
import { createMascotElement, renderMascotVisualState, appendChatMessage } from "./mascot-view.js";

const STORAGE_KEY = "4dsu_mascot_enabled";
const MASCOT_WIDTH = 48;
const MASCOT_HEIGHT = 48;
const SAFE_WINDOW_BUFFER = 24; // px de distància segura al voltant de finestres obertes
const PROXIMITY_THRESHOLD = 70; // px de distància per aturar-se quan el cursor s'acosta

function readCssMetric(name, fallback) {
  const value = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue(name));
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

export class MascotController {
  constructor({ workspaceElement, windowManager, liveAnnouncerElement }) {
    this.workspace = workspaceElement;
    this.wm = windowManager;
    this.liveAnnouncer = liveAnnouncerElement;

    // Estat d'activació persistent
    const stored = localStorage.getItem(STORAGE_KEY);
    this.isEnabled = stored === "true"; // Desactivada per defecte si no s'ha guardat

    // Coordenades i posició
    this.posX = 160;
    this.posY = 200;
    this.targetX = 160;
    this.targetY = 200;
    this.facing = "right"; // "left" | "right"
    this.state = "idle"; // "idle" | "observing" | "walk1" | "walk2" | "react"

    // Temporitzadors i bucles
    this.stepTimer = null;
    this.idleTimer = null;
    this.isPaused = false;
    this.isMoving = false;
    this.walkStepToggle = false;

    // Proximitat i interacció
    this.lastPointerTime = 0;
    this.proximityPauseTimer = null;

    this.mascotEl = null;

    this._initDOM();
    this._bindEvents();

    if (this.isEnabled) {
      this.start(true);
    } else {
      this.stop(true);
    }
  }

  _announce(msg) {
    if (this.liveAnnouncer) {
      this.liveAnnouncer.textContent = msg;
    }
  }

  _initDOM() {
    this.mascotEl = createMascotElement();
    if (!this.isEnabled) {
      this.mascotEl.setAttribute("hidden", "");
      this.mascotEl.style.display = "none";
    }

    this._updateElementPosition();
    this.workspace.appendChild(this.mascotEl);
  }

  _bindEvents() {
    // Delegació de clics per als botons d'activació / desactivació de la mascota
    document.addEventListener("click", (e) => {
      const toggleBtn = e.target.closest("#btn-toggle-mascot, [data-menu-action='toggle-mascot'], #menu-btn-toggle-mascot");
      if (toggleBtn) {
        e.preventDefault();
        this.toggle();
      }
    });

    // Interacció directa amb la mascota: Clic o Enter/Espai per obrir conversa
    this.mascotEl.addEventListener("click", (e) => {
      e.stopPropagation();
      this.openConversation();
    });

    this.mascotEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        e.stopPropagation();
        this.openConversation();
      }
    });

    this.mascotEl.addEventListener("focus", () => {
      this.pauseMovement(3000);
      renderMascotVisualState(this.mascotEl, {
        state: "react",
        facing: this.facing,
        speechText: "[ ? ]"
      });
      this._announce("Mascota DSU.EXE enfocada. Prem Enter per parlar.");
    });

    this.mascotEl.addEventListener("blur", () => {
      renderMascotVisualState(this.mascotEl, {
        state: "idle",
        facing: this.facing,
        speechText: null
      });
    });

    // Cursor a prop: aturar-se i reaccionar sense cobrir
    window.addEventListener("pointermove", (e) => {
      if (!this.isEnabled || !this.mascotEl || this.mascotEl.hasAttribute("hidden")) return;

      const rect = this.mascotEl.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);

      if (dist < PROXIMITY_THRESHOLD) {
        this.facing = e.clientX < centerX ? "left" : "right";
        this.pauseMovement(2000);
        renderMascotVisualState(this.mascotEl, {
          state: "observing",
          facing: this.facing
        });
      }
    }, { passive: true });

    // Gestió de la visibilitat de la pestanya: aturar loops en segon pla
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        this._clearTimers();
      } else if (this.isEnabled) {
        this._scheduleNextAction(1000);
      }
    });

    // Redimensionament de la finestra del navegador
    window.addEventListener("resize", () => {
      this._clampPosition();
      this._updateElementPosition();
    });

    // Delegació d'esdeveniments per al xat de PROCESS_4DSU.EXE
    this.workspace.addEventListener("submit", (e) => {
      if (e.target && e.target.id === "mascot-chat-form") {
        e.preventDefault();
        this._handleChatSubmit(e.target);
      }
    });

    this.workspace.addEventListener("click", (e) => {
      const chip = e.target.closest(".mascot-chip");
      if (chip) {
        e.preventDefault();
        const promptText = chip.getAttribute("data-prompt");
        if (promptText) {
          const form = document.getElementById("mascot-chat-form");
          const input = document.getElementById("mascot-input-field");
          if (input && form) {
            input.value = promptText;
            this._handleChatSubmit(form);
          }
        }
        return;
      }

      const actionBtn = e.target.closest(".msg-action-btn");
      if (actionBtn) {
        e.preventDefault();
        const appId = actionBtn.getAttribute("data-open-app");
        if (appId && this.wm) {
          this.wm.open(appId, actionBtn);
        }
      }
    });
  }

  _clearTimers() {
    if (this.stepTimer) clearTimeout(this.stepTimer);
    if (this.idleTimer) clearTimeout(this.idleTimer);
    if (this.proximityPauseTimer) clearTimeout(this.proximityPauseTimer);
    this.stepTimer = null;
    this.idleTimer = null;
    this.proximityPauseTimer = null;
    this.isMoving = false;
  }

  pauseMovement(durationMs = 2500) {
    this.isPaused = true;
    if (this.proximityPauseTimer) clearTimeout(this.proximityPauseTimer);
    this.proximityPauseTimer = setTimeout(() => {
      this.isPaused = false;
    }, durationMs);
  }

  _updateElementPosition() {
    if (!this.mascotEl) return;
    this.mascotEl.style.left = `${Math.round(this.posX)}px`;
    this.mascotEl.style.top = `${Math.round(this.posY)}px`;
  }

  _clampPosition() {
    const wsWidth = this.workspace.clientWidth || window.innerWidth;
    const isMobile = window.innerWidth <= 768;
    const systemRail = readCssMetric("--system-rail-height", 48);
    const mobileDock = readCssMetric("--mobile-dock-height", 56);
    const workspaceEdge = readCssMetric("--workspace-edge", 24);
    const wsHeight = this.workspace.clientHeight || (window.innerHeight - systemRail - (isMobile ? mobileDock : 0));

    const dockReserve = readCssMetric("--dock-reserve", 0);
    const usableHeight = Math.max(0, wsHeight - dockReserve);

    const minX = workspaceEdge;
    const maxX = Math.max(minX, wsWidth - MASCOT_WIDTH - workspaceEdge);
    const minY = workspaceEdge;
    const maxY = Math.max(minY, usableHeight - MASCOT_HEIGHT - workspaceEdge);

    this.posX = Math.max(minX, Math.min(this.posX, maxX));
    this.posY = Math.max(minY, Math.min(this.posY, maxY));
  }

  /**
   * Obté els rectangles de col·lisió de totes les finestres obertes i no minimitzades
   */
  _getObstacleRects() {
    const rects = [];
    const openWins = document.querySelectorAll(".sys-window:not([hidden]):not(.is-minimized)");
    const wsRect = this.workspace.getBoundingClientRect();

    openWins.forEach((win) => {
      const r = win.getBoundingClientRect();
      rects.push({
        left: r.left - wsRect.left - SAFE_WINDOW_BUFFER,
        top: r.top - wsRect.top - SAFE_WINDOW_BUFFER,
        right: r.right - wsRect.left + SAFE_WINDOW_BUFFER,
        bottom: r.bottom - wsRect.top + SAFE_WINDOW_BUFFER
      });
    });

    // El bloc de llançadors és un obstacle mesurat com qualsevol altre: així la
    // mascota l'esquiva tant si és a l'esquerra com a la cantonada dreta.
    const launchers = document.getElementById("desktop-icons");
    if (launchers && typeof launchers.getBoundingClientRect === "function") {
      const r = launchers.getBoundingClientRect();
      if (r.width > 0 && r.height > 0) {
        rects.push({
          left: r.left - wsRect.left - SAFE_WINDOW_BUFFER,
          top: r.top - wsRect.top - SAFE_WINDOW_BUFFER,
          right: r.right - wsRect.left + SAFE_WINDOW_BUFFER,
          bottom: r.bottom - wsRect.top + SAFE_WINDOW_BUFFER
        });
      }
    }

    return rects;
  }

  /**
   * Comprova si una coordenada (x, y) està dins de la zona segura d'alguna finestra
   */
  _isPointInObstacle(x, y, obstacles) {
    const right = x + MASCOT_WIDTH;
    const bottom = y + MASCOT_HEIGHT;

    for (const obs of obstacles) {
      if (right >= obs.left && x <= obs.right && bottom >= obs.top && y <= obs.bottom) {
        return true;
      }
    }
    return false;
  }

  /**
   * Selecciona una destinació aleatòria lliure d'obstacles a l'escriptori
   */
  _pickNewTarget() {
    const wsWidth = this.workspace.clientWidth || window.innerWidth;
    const isMobile = window.innerWidth <= 768;
    const systemRail = readCssMetric("--system-rail-height", 48);
    const mobileDock = readCssMetric("--mobile-dock-height", 56);
    const workspaceEdge = readCssMetric("--workspace-edge", 24);
    const wsHeight = this.workspace.clientHeight || (window.innerHeight - systemRail - (isMobile ? mobileDock : 0));

    const dockReserve = readCssMetric("--dock-reserve", 0);
    const usableHeight = Math.max(0, wsHeight - dockReserve);

    const minX = workspaceEdge;
    const maxX = Math.max(minX, wsWidth - MASCOT_WIDTH - workspaceEdge);
    const minY = workspaceEdge;
    const maxY = Math.max(minY, usableHeight - MASCOT_HEIGHT - workspaceEdge);

    const obstacles = this._getObstacleRects();

    // Intentar trobar un punt lliure en fins a 15 intents
    for (let i = 0; i < 15; i++) {
      const candX = minX + Math.floor(Math.random() * (maxX - minX));
      const candY = minY + Math.floor(Math.random() * (maxY - minY));

      if (!this._isPointInObstacle(candX, candY, obstacles)) {
        this.targetX = candX;
        this.targetY = candY;
        return;
      }
    }

    // Fallback: romandre a la posició actual
    this.targetX = this.posX;
    this.targetY = this.posY;
  }

  /**
   * Executa un pas mecànic discret cap a targetX, targetY
   */
  _performDiscreteStep() {
    if (!this.isEnabled || this.isPaused || document.hidden) {
      this._scheduleNextAction(800);
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      // En mode reduced motion, no es mou automàticament! Només observació estàtica.
      this.state = "idle";
      renderMascotVisualState(this.mascotEl, { state: "idle", facing: this.facing });
      this._scheduleNextAction(4000);
      return;
    }

    const dx = this.targetX - this.posX;
    const dy = this.targetY - this.posY;
    const dist = Math.hypot(dx, dy);

    // Arribat a la destinació
    if (dist < 10) {
      this.posX = this.targetX;
      this.posY = this.targetY;
      this._updateElementPosition();
      this.isMoving = false;
      renderMascotVisualState(this.mascotEl, { state: "idle", facing: this.facing });
      // Pausa d'espera (3 a 6 segons)
      const idleDuration = 3000 + Math.random() * 3000;
      this._scheduleNextAction(idleDuration);
      return;
    }

    // Orientació de direcció
    this.facing = dx < 0 ? "left" : "right";

    // Pas discret mecànic de 8 píxels
    const stepSize = 8;
    const angle = Math.atan2(dy, dx);
    let nextX = this.posX + Math.cos(angle) * stepSize;
    let nextY = this.posY + Math.sin(angle) * stepSize;

    // Verificar que el pas no envaeixi una finestra
    const obstacles = this._getObstacleRects();
    if (this._isPointInObstacle(nextX, nextY, obstacles)) {
      // Obstacle detectat al camí: parar i canviar de destinació
      renderMascotVisualState(this.mascotEl, { state: "observing", facing: this.facing });
      this._pickNewTarget();
      this._scheduleNextAction(600);
      return;
    }

    this.posX = nextX;
    this.posY = nextY;
    this._clampPosition();
    this._updateElementPosition();

    // Alternança de fotogrames mecànics de caminar (walk1 / walk2)
    this.walkStepToggle = !this.walkStepToggle;
    const walkState = this.walkStepToggle ? "walk1" : "walk2";
    renderMascotVisualState(this.mascotEl, { state: walkState, facing: this.facing });

    // Següent pas mecànic en 320ms (ritme deliberadament retro, no fluid)
    this.stepTimer = setTimeout(() => this._performDiscreteStep(), 320);
  }

  _scheduleNextAction(delayMs = 1500) {
    this._clearTimers();
    if (!this.isEnabled) return;

    this.idleTimer = setTimeout(() => {
      if (!this.isEnabled || this.isPaused || document.hidden) {
        this._scheduleNextAction(1500);
        return;
      }

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) {
        renderMascotVisualState(this.mascotEl, { state: "observing", facing: this.facing });
        this._scheduleNextAction(5000);
        return;
      }

      // Si està en zona d'obstacle per obertura recent de finestra, buscar escapatòria
      const obstacles = this._getObstacleRects();
      if (this._isPointInObstacle(this.posX, this.posY, obstacles)) {
        this._pickNewTarget();
        this._performDiscreteStep();
        return;
      }

      // 40% probabilitat de fer microanimació observant, 60% caminar a nova destinació
      if (Math.random() < 0.4) {
        renderMascotVisualState(this.mascotEl, { state: "observing", facing: this.facing });
        this._scheduleNextAction(2500);
      } else {
        this._pickNewTarget();
        this._performDiscreteStep();
      }
    }, delayMs);
  }

  start(silent = false) {
    this.isEnabled = true;
    localStorage.setItem(STORAGE_KEY, "true");

    if (this.mascotEl) {
      this.mascotEl.removeAttribute("hidden");
      this.mascotEl.style.display = "block";
      this._clampPosition();
      this._updateElementPosition();
      renderMascotVisualState(this.mascotEl, { state: "idle", facing: this.facing });
    }

    this._updateToggleButtonsUI(true);
    if (!silent) {
      this._announce("Mascota DSU.EXE activada a l'escriptori.");
    }
    this._scheduleNextAction(1000);
  }

  stop(silent = false) {
    this.isEnabled = false;
    localStorage.setItem(STORAGE_KEY, "false");
    this._clearTimers();

    if (this.mascotEl) {
      this.mascotEl.setAttribute("hidden", "");
      this.mascotEl.style.display = "none";
    }

    this._updateToggleButtonsUI(false);
    if (!silent) {
      this._announce("Mascota DSU.EXE desactivada.");
    }
  }

  toggle() {
    if (this.isEnabled) {
      this.stop();
    } else {
      this.start();
    }
  }

  _updateToggleButtonsUI(enabled) {
    // Actualitza els botons de toggle registrats al sistema
    const toggleButtons = document.querySelectorAll("#btn-toggle-mascot, [data-menu-action='toggle-mascot']");
    toggleButtons.forEach((btn) => {
      btn.setAttribute("aria-pressed", enabled ? "true" : "false");
      const labelEl = btn.querySelector(".btn-text-label, .menu-item-text") || btn;
      if (btn.id === "btn-toggle-mascot") {
        labelEl.textContent = enabled ? "Mascota: ON" : "Mascota: OFF";
        btn.setAttribute("aria-label", enabled ? "Desactivar mascota de l'escriptori" : "Activar mascota de l'escriptori");
      } else {
        labelEl.textContent = enabled ? "Desactivar mascota (DSU.EXE)" : "Activar mascota (DSU.EXE)";
      }
    });
  }

  openConversation() {
    renderMascotVisualState(this.mascotEl, {
      state: "react",
      facing: this.facing,
      speechText: "[ 4DSU ]"
    });

    this.pauseMovement(10000);

    if (this.wm) {
      this.wm.open("process_4dsu", this.mascotEl);
    }
  }

  async _handleChatSubmit(formEl) {
    const input = formEl.querySelector("#mascot-input-field");
    const container = document.getElementById("mascot-chat-messages");
    if (!input || !container) return;

    const query = input.value.trim();
    if (!query) return;

    // Afegir missatge de l'usuari
    appendChatMessage(container, {
      sender: "USUARI",
      text: query,
      isUser: true
    });

    input.value = "";
    input.focus();

    // Indicador de càrrega mecànica
    const loadingId = "mascot-loading-pip";
    let loadingEl = document.getElementById(loadingId);
    if (!loadingEl) {
      loadingEl = document.createElement("div");
      loadingEl.id = loadingId;
      loadingEl.className = "mascot-msg-loading";
      loadingEl.innerHTML = `<span class="loading-cursor">_</span> DSU.EXE està consultant la memòria de 4dsu OS...`;
      container.appendChild(loadingEl);
      container.scrollTop = container.scrollHeight;
    }

    try {
      const response = await queryMascot(query);
      if (loadingEl && loadingEl.parentNode) {
        loadingEl.parentNode.removeChild(loadingEl);
      }

      appendChatMessage(container, {
        sender: "DSU.EXE",
        text: response.text,
        actions: response.actions,
        isUser: false
      });
    } catch (err) {
      if (loadingEl && loadingEl.parentNode) {
        loadingEl.parentNode.removeChild(loadingEl);
      }

      appendChatMessage(container, {
        sender: "DSU.EXE",
        text: "Error de lectura de procés. S'ha restablert la connexió amb la memòria local de 4dsu OS.",
        actions: [{ label: "Obrir Sobre mi", appId: "about" }],
        isUser: false
      });
    }
  }
}
