/**
 * 4dsu OS — Aplicació Principal (Entry Point)
 * Inicialitza l'escriptori, el gestor de finestres, el menú del sistema, el rellotge i el canvi de vista.
 * Icones vectorials retro en SVG (sense emojis).
 */

import { PORTFOLIO_DATA } from "./data/portfolio-data.js";
import { WindowManager } from "./window-manager.js";
import { renderLinearView } from "./views/linear-view.js";
import { MascotController } from "./mascot/mascot-controller.js";
import { resolveFinderPane } from "./apps/finder-panes.js";
import { initDock } from "./dock.js";
import { getIcon } from "./icons.js";

document.addEventListener("DOMContentLoaded", () => {
  const desktopShell = document.getElementById("desktop-shell");
  const linearView = document.getElementById("linear-view");
  const desktopWorkspace = document.getElementById("desktop-workspace");
  const workspace = document.getElementById("window-workspace");
  const taskbarWindows = document.getElementById("taskbar-windows");
  const liveAnnouncer = document.getElementById("live-announcer");
  const taskbarClock = document.getElementById("taskbar-clock");
  const systemMenuBtn = document.getElementById("btn-system-menu");
  const systemMenuDropdown = document.getElementById("system-menu-dropdown");
  const toggleViewBtn = document.getElementById("btn-toggle-view");
  const desktopIcons = document.querySelectorAll(".desktop-icon");
  const bootScreen = document.getElementById("boot-screen");
  const skipBootBtn = document.getElementById("boot-skip-btn") || document.getElementById("btn-skip-boot");
  const bootProgressFill = document.getElementById("boot-progress-fill");
  const hwLed = document.getElementById("hw-led");
  const hwPowerBtn = document.getElementById("hw-power-btn");

  // Alias support for #btn-skip-boot if queried via getElementById
  if (skipBootBtn && !document.getElementById("btn-skip-boot")) {
    const origGetById = document.getElementById.bind(document);
    document.getElementById = function(id) {
      if (id === "btn-skip-boot") return skipBootBtn;
      return origGetById(id);
    };
  }

  // 0A. Indicador LED d'activitat de maquinari
  function flashLed(durationMs = 200) {
    if (!hwLed) return;
    hwLed.classList.add("is-active");
    setTimeout(() => {
      if (hwLed) hwLed.classList.remove("is-active");
    }, durationMs);
  }

  // 0B. Gestió de la seqüència d'arrencada (POST / Happy 4DSU Boot Screen)
  let bootDismissed = false;
  let bootTimers = [];

  function dismissBoot() {
    if (bootDismissed || !bootScreen) return;
    bootDismissed = true;
    bootTimers.forEach(t => clearTimeout(t));
    bootTimers = [];

    if (hwLed) {
      hwLed.classList.remove("is-active");
    }

    bootScreen.classList.add("is-hidden");
    bootScreen.setAttribute("hidden", "");
    bootScreen.dataset.bootState = "complete";
    if (desktopShell) {
      desktopShell.removeAttribute("inert");
    }
    if (liveAnnouncer) {
      liveAnnouncer.textContent = "Sistema 4dsu OS iniciat.";
    }

    // Moure focus al control principal de la finestra de benvinguda o al primer botó accessible.
    // Es fa de manera síncrona perquè el focus mai no quedi atrapat al botó de saltar l'arrencada,
    // i es repeteix al següent frame per als casos en què encara no hi ha cap finestra oberta.
    const restoreFocus = () => {
      const welcomeBtn = document.getElementById("btn-welcome-open-projects");
      if (welcomeBtn) {
        welcomeBtn.focus();
        return;
      }
      const activeWinEl = document.querySelector(".sys-window.is-active:not([hidden])");
      if (activeWinEl) {
        const primaryBtn = activeWinEl.querySelector("#btn-welcome-open-projects, .sys-btn-primary");
        if (primaryBtn) {
          primaryBtn.focus();
          return;
        }
        const titleEl = activeWinEl.querySelector(".win-header-title");
        if (titleEl) {
          titleEl.setAttribute("tabindex", "-1");
          titleEl.focus();
          return;
        }
      }
      const firstIcon = document.querySelector(".desktop-icon");
      if (firstIcon) {
        firstIcon.focus();
      }
    };

    restoreFocus();
    requestAnimationFrame(restoreFocus);
  }

  function startBootSequence() {
    const bootLines = document.querySelectorAll(".boot-line");
    if (bootScreen) {
      bootScreen.dataset.bootState = "running";
    }
    if (desktopShell) {
      desktopShell.setAttribute("inert", "");
    }
    if (skipBootBtn) {
      skipBootBtn.focus();
    }

    bootLines.forEach(line => {
      line.style.opacity = "0";
    });
    if (bootProgressFill) {
      bootProgressFill.style.width = "0%";
    }

    const totalLines = bootLines.length || 4;
    bootLines.forEach((line, index) => {
      const delay = index * 130;
      const t = setTimeout(() => {
        line.style.opacity = "1";
        flashLed(100);
        if (bootProgressFill) {
          const pct = Math.round(((index + 1) / totalLines) * 100);
          bootProgressFill.style.width = `${pct}%`;
        }
      }, delay);
      bootTimers.push(t);
    });

    const completionDelay = totalLines * 130 + 80;
    const finalTimer = setTimeout(() => {
      if (!bootDismissed) {
        dismissBoot();
      }
    }, completionDelay);
    bootTimers.push(finalTimer);
  }

  const initialHash = window.location.hash;
  const isDeepLink = Boolean(initialHash && initialHash !== "#");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (isDeepLink || prefersReducedMotion) {
    dismissBoot();
  } else if (bootScreen) {
    if (skipBootBtn) {
      skipBootBtn.addEventListener("click", dismissBoot);
    }
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !bootDismissed) {
        e.preventDefault();
        dismissBoot();
      }
    });

    startBootSequence();
  }

  // 1. Inicialitzar gestor de finestres
  const wm = new WindowManager({
    workspaceElement: workspace,
    taskbarWindowsElement: taskbarWindows,
    liveAnnouncerElement: liveAnnouncer
  });

  // 1A-bis. Dock: llançador flotant sobre l'escriptori
  const dock = initDock(document.getElementById("dock"), wm);
  if (dock) {
    wm.onWindowsChanged = () => dock.syncRunning();
    dock.syncRunning();
  }

  // 1B. Inicialitzar subsistema de mascota opcional DSU.EXE
  const mascot = new MascotController({
    workspaceElement: desktopWorkspace,
    windowManager: wm,
    liveAnnouncerElement: liveAnnouncer
  });
  window.__4dsu_mascot = mascot;

  // 2. Inicialitzar vista lineal accessible
  renderLinearView(linearView, () => {
    switchView("desktop", { openWelcomeIfEmpty: true });
  });

  // 3. Gestió del canvi de vista (Desktop ↔ Lineal)
  // Requisit P0 & P1: Només una vista activa, capçalera visible en carregar vista lineal, deep-links nets
  let currentView = "desktop";

  function switchView(viewName, { openWelcomeIfEmpty = false, targetHash = null } = {}) {
    if (viewName === "linear") {
      currentView = "linear";
      document.title = "Vista Accessible — 4dsu.me";
      document.body.classList.add("view-linear");
      desktopShell.setAttribute("hidden", "");
      linearView.removeAttribute("hidden");

      if (toggleViewBtn) {
        toggleViewBtn.innerHTML = `${getIcon("desktop")} <span class="btn-text-label tray-btn-label">Escriptori</span>`;
        toggleViewBtn.setAttribute("aria-label", "Canviar a mode Escriptori OS");
      }

      const currentHash = targetHash || window.location.hash;
      const isLinearSectionHash = Boolean(currentHash && currentHash.startsWith("#linear-"));

      if (!isLinearSectionHash && window.location.hash !== "#view=linear") {
        try {
          history.replaceState(null, "", "#view=linear");
        } catch (e) {}
      }

      // Anunciar el canvi de vista a l'àrea aria-live existent
      if (liveAnnouncer) {
        liveAnnouncer.textContent = "Vista lineal accessible activada. Capçalera i navegació a l'inici.";
      }

      // Assegurar que la capçalera és al viewport inicial només si no es demana una secció específica
      if (!isLinearSectionHash) {
        window.scrollTo(0, 0);
        linearView.scrollTop = 0;

        requestAnimationFrame(() => {
          const returnBtn = document.getElementById("btn-return-desktop");
          if (returnBtn) {
            returnBtn.focus({ preventScroll: true });
          }
        });
      }
    } else {
      currentView = "desktop";
      document.body.classList.remove("view-linear");
      linearView.setAttribute("hidden", "");
      desktopShell.removeAttribute("hidden");

      const activeWin = wm.activeWindowId ? wm.windows.get(wm.activeWindowId) : null;
      document.title = activeWin && activeWin.title ? `${activeWin.title} — 4dsu.me` : "4dsu.me — 4dsu OS // Portfolio Personal";

      if (toggleViewBtn) {
        toggleViewBtn.innerHTML = `${getIcon("linear")} <span class="btn-text-label tray-btn-label">Vista accessible</span>`;
        toggleViewBtn.setAttribute("aria-label", "Canviar a vista lineal accessible");
      }

      if (window.location.hash === "#view=linear" || window.location.hash.startsWith("#linear-")) {
        try {
          const activeWin = wm.activeWindowId;
          if (activeWin) {
            history.replaceState(null, "", `#app=${activeWin}`);
          } else {
            history.replaceState(null, "", window.location.pathname);
          }
        } catch (e) {}
      }

      if (liveAnnouncer) {
        liveAnnouncer.textContent = "Mode escriptori OS activat.";
      }

      // En tornar de la vista lineal a l'escriptori, només obre BENVINGUDA.EXE si no hi ha cap altra finestra oberta
      if (openWelcomeIfEmpty) {
        const hasOpenWindow = Array.from(wm.windows.values()).some(w => w.isOpen && !w.isMinimized);
        if (!hasOpenWindow) {
          wm.open("welcome");
        }
      }
    }
  }

  if (toggleViewBtn) {
    toggleViewBtn.addEventListener("click", () => {
      if (currentView === "desktop") {
        switchView("linear");
      } else {
        switchView("desktop", { openWelcomeIfEmpty: true });
      }
    });
  }

  // 4. Connectar icones de l'escriptori amb selecció visual i navegació per teclat
  const iconsArray = Array.from(desktopIcons);

  function selectIcon(iconToSelect) {
    desktopIcons.forEach(ic => ic.classList.toggle("is-selected", ic === iconToSelect));
  }

  desktopIcons.forEach((icon, idx) => {
    icon.addEventListener("click", (e) => {
      selectIcon(icon);
      const targetApp = icon.getAttribute("data-open-app");
      if (targetApp) {
        wm.open(targetApp, icon);
      }
    });

    icon.addEventListener("focus", () => {
      selectIcon(icon);
    });

    icon.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const targetApp = icon.getAttribute("data-open-app");
        if (targetApp) {
          wm.open(targetApp, icon);
        }
      } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        const nextIdx = (idx + 1) % iconsArray.length;
        iconsArray[nextIdx].focus();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        const prevIdx = (idx - 1 + iconsArray.length) % iconsArray.length;
        iconsArray[prevIdx].focus();
      }
    });
  });

  // Deseleccionar icones en fer clic a l'espai de treball buit
  const workspaceEl = document.getElementById("desktop-workspace");
  if (workspaceEl) {
    workspaceEl.addEventListener("click", (e) => {
      if (e.target === workspaceEl || e.target.classList.contains("window-workspace-inner")) {
      desktopIcons.forEach(ic => ic.classList.remove("is-selected"));
      }
    });
  }

  // ============================================================================
  // 5. Barra de Menús Superior Clàssica / System 6/7 Top Menu Bar (Features 17–26)
  // ============================================================================
  const menubarEl = document.getElementById("menubar");
  const menubarTriggers = Array.from(document.querySelectorAll(".menubar-trigger"));
  const menubarDropdowns = Array.from(document.querySelectorAll(".menubar-dropdown"));
  const menubarWindowList = document.getElementById("menubar-open-windows");
  let activeMenuId = null;
  let focusoutTimer = null;

  function clearFocusoutTimer() {
    if (focusoutTimer) {
      clearTimeout(focusoutTimer);
      focusoutTimer = null;
    }
  }

  function getTrigger(menuId) {
    return menubarTriggers.find(t => t.getAttribute("data-menu-id") === menuId);
  }

  function getDropdown(menuId) {
    return menubarDropdowns.find(d => d.getAttribute("data-menu-id") === menuId);
  }

  function openMenu(menuId) {
    if (!menuId) return;
    clearFocusoutTimer();

    menubarTriggers.forEach(t => {
      const isTarget = t.getAttribute("data-menu-id") === menuId;
      t.setAttribute("aria-expanded", isTarget ? "true" : "false");
      t.classList.toggle("is-open", isTarget);
    });

    menubarDropdowns.forEach(d => {
      const isTarget = d.getAttribute("data-menu-id") === menuId;
      d.classList.toggle("is-open", isTarget);
      if (isTarget) {
        d.removeAttribute("hidden");
      } else {
        d.setAttribute("hidden", "");
      }
    });

    activeMenuId = menuId;

    if (menuId === "finestra") {
      updateFinestraWindowList();
    }
  }

  function closeActiveMenu() {
    clearFocusoutTimer();
    activeMenuId = null;

    menubarTriggers.forEach(t => {
      t.setAttribute("aria-expanded", "false");
      t.classList.remove("is-open");
    });

    menubarDropdowns.forEach(d => {
      d.classList.remove("is-open");
      d.setAttribute("hidden", "");
    });
  }

  // Finestra Menu: Llista Dinàmica de Finestres Obertes (Features 24 & 25)
  function updateFinestraWindowList() {
    if (!menubarWindowList) return;
    menubarWindowList.innerHTML = "";

    const openWins = Array.from(wm.windows.values()).filter(w => w.isOpen);

    if (openWins.length === 0) {
      const emptyLi = document.createElement("li");
      emptyLi.setAttribute("role", "none");
      emptyLi.innerHTML = `
        <span class="menubar-item is-disabled" style="opacity: 0.5; cursor: default;">
          <span class="menubar-item-text">(Cap finestra oberta)</span>
        </span>
      `;
      menubarWindowList.appendChild(emptyLi);
      return;
    }

    openWins.forEach(w => {
      const isActive = w.id === wm.activeWindowId && !w.isMinimized;
      const isMinimized = w.isMinimized;

      const li = document.createElement("li");
      li.setAttribute("role", "none");

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "menubar-item menu-item-btn";
      btn.setAttribute("role", "menuitem");
      btn.setAttribute("data-window-target", w.id);

      const checkChar = isActive ? "&#10003;" : (isMinimized ? "&#9671;" : "");
      btn.innerHTML = `
        <span class="menubar-check" aria-hidden="true">${checkChar}</span>
        <span class="menubar-item-text">${w.title}</span>
      `;

      btn.addEventListener("click", () => {
        closeActiveMenu();
        if (w.isMinimized) {
          wm.open(w.id);
        } else {
          wm.bringToFront(w.id);
        }
      });

      li.appendChild(btn);
      menubarWindowList.appendChild(li);
    });
  }

  // Escolta canvis a les finestres per sincronitzar la llista
  window.addEventListener("4dsu:window-change", () => {
    updateFinestraWindowList();
  });

  // Interaccions amb els botons disparadors de menú (Triggers)
  menubarTriggers.forEach((trigger, trigIdx) => {
    const menuId = trigger.getAttribute("data-menu-id");

    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      if (activeMenuId === menuId) {
        closeActiveMenu();
      } else {
        openMenu(menuId);
        const dropdown = getDropdown(menuId);
        if (dropdown) {
          const firstItem = dropdown.querySelector("button:not([disabled]), [role='menuitem']");
          if (firstItem) firstItem.focus();
        }
      }
    });

    // Desplaçament continu estil Macintosh (Scrubbing quan hi ha un menú obert)
    const handleScrubbing = () => {
      clearFocusoutTimer();
      if (activeMenuId !== null && activeMenuId !== menuId) {
        openMenu(menuId);
      }
    };
    trigger.addEventListener("mouseenter", handleScrubbing);
    trigger.addEventListener("pointerenter", handleScrubbing);

    // Navegació per teclat sobre els disparadors
    trigger.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        const nextIdx = (trigIdx + 1) % menubarTriggers.length;
        const nextTrig = menubarTriggers[nextIdx];
        nextTrig.focus();
        if (activeMenuId !== null) {
          openMenu(nextTrig.getAttribute("data-menu-id"));
        }
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        const prevIdx = (trigIdx - 1 + menubarTriggers.length) % menubarTriggers.length;
        const prevTrig = menubarTriggers[prevIdx];
        prevTrig.focus();
        if (activeMenuId !== null) {
          openMenu(prevTrig.getAttribute("data-menu-id"));
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        openMenu(menuId);
        const dropdown = getDropdown(menuId);
        if (dropdown) {
          const firstItem = dropdown.querySelector("button:not([disabled]), [role='menuitem']");
          if (firstItem) firstItem.focus();
        }
      } else if (e.key === "Escape") {
        if (activeMenuId !== null) {
          e.preventDefault();
          e.stopPropagation();
          closeActiveMenu();
          trigger.focus();
        }
      }
    });
  });

  // Interaccions als desplegables (Dropdowns)
  menubarDropdowns.forEach(dropdown => {
    const menuId = dropdown.getAttribute("data-menu-id");
    const trigger = getTrigger(menuId);
    const trigIdx = menubarTriggers.indexOf(trigger);

    dropdown.addEventListener("keydown", (e) => {
      const items = Array.from(dropdown.querySelectorAll("button:not([disabled]), [role='menuitem']"));
      const currentIdx = items.indexOf(document.activeElement);

      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        closeActiveMenu();
        if (trigger) trigger.focus();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        e.stopPropagation();
        if (items.length > 0) {
          const nextIdx = (currentIdx + 1) % items.length;
          items[nextIdx].focus();
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        e.stopPropagation();
        if (items.length > 0) {
          const prevIdx = (currentIdx - 1 + items.length) % items.length;
          items[prevIdx].focus();
        }
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        e.stopPropagation();
        const nextIdx = (trigIdx + 1) % menubarTriggers.length;
        const nextTrig = menubarTriggers[nextIdx];
        const nextId = nextTrig.getAttribute("data-menu-id");
        openMenu(nextId);
        const nextDropdown = getDropdown(nextId);
        if (nextDropdown) {
          const firstItem = nextDropdown.querySelector("button:not([disabled]), [role='menuitem']");
          if (firstItem) firstItem.focus();
          else nextTrig.focus();
        } else {
          nextTrig.focus();
        }
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        e.stopPropagation();
        const prevIdx = (trigIdx - 1 + menubarTriggers.length) % menubarTriggers.length;
        const prevTrig = menubarTriggers[prevIdx];
        const prevId = prevTrig.getAttribute("data-menu-id");
        openMenu(prevId);
        const prevDropdown = getDropdown(prevId);
        if (prevDropdown) {
          const firstItem = prevDropdown.querySelector("button:not([disabled]), [role='menuitem']");
          if (firstItem) firstItem.focus();
          else prevTrig.focus();
        } else {
          prevTrig.focus();
        }
      } else if (e.key === "Tab") {
        closeActiveMenu();
      }
    });

    dropdown.addEventListener("focusout", () => {
      clearFocusoutTimer();
      focusoutTimer = setTimeout(() => {
        focusoutTimer = null;
        if (activeMenuId !== menuId) return;
        const currentActive = document.activeElement;
        const menubar = document.getElementById("menubar");
        const isInside = (menubar && menubar.contains(currentActive)) ||
                         dropdown.contains(currentActive) ||
                         (trigger && trigger === currentActive);
        if (!isInside) {
          closeActiveMenu();
        }
      }, 50);
    });
  });

  // Tancar menús oberts en fer clic a fora
  document.addEventListener("pointerdown", (e) => {
    if (activeMenuId !== null && !e.target.closest("#menubar")) {
      closeActiveMenu();
    }
  });

  // Connectar accions dels menús desplegables
  document.querySelectorAll("[data-menu-action]").forEach(item => {
    item.addEventListener("click", () => {
      const action = item.getAttribute("data-menu-action");
      closeActiveMenu();

      if (action === "switch-linear") {
        switchView("linear");
      } else if (action === "close-active") {
        if (wm.activeWindowId) wm.close(wm.activeWindowId);
      } else if (action === "close-all") {
        Array.from(wm.windows.keys()).forEach(id => wm.close(id));
      } else if (action === "minimize-active") {
        if (wm.activeWindowId) wm.minimize(wm.activeWindowId);
      } else if (action === "bring-all-front") {
        Array.from(wm.windows.values()).forEach(w => {
          if (w.isOpen && w.isMinimized) wm.open(w.id);
        });
      } else if (action === "toggle-mascot") {
        // El MascotController ja escolta aquest control per delegació:
        // cridar-lo aquí també provocaria una doble commutació.
      } else if (action === "restart") {
        restartSystem();
      } else if (action === "view-icons") {
        item.setAttribute("aria-checked", "true");
        const listBtn = document.querySelector("[data-menu-action='view-list']");
        if (listBtn) listBtn.setAttribute("aria-checked", "false");
        const checkEl = item.querySelector(".menubar-check");
        if (checkEl) checkEl.textContent = "\u2713";
        const otherCheck = listBtn?.querySelector(".menubar-check");
        if (otherCheck) otherCheck.textContent = "";
      } else if (action === "view-list") {
        item.setAttribute("aria-checked", "true");
        const iconBtn = document.querySelector("[data-menu-action='view-icons']");
        if (iconBtn) iconBtn.setAttribute("aria-checked", "false");
        const checkEl = item.querySelector(".menubar-check");
        if (checkEl) checkEl.textContent = "\u2713";
        const otherCheck = iconBtn?.querySelector(".menubar-check");
        if (otherCheck) otherCheck.textContent = "";
      } else if (action === "sort-name") {
        item.setAttribute("aria-checked", "true");
        const dateBtn = document.querySelector("[data-menu-action='sort-date']");
        if (dateBtn) dateBtn.setAttribute("aria-checked", "false");
        const checkEl = item.querySelector(".menubar-check");
        if (checkEl) checkEl.textContent = "\u2713";
        const otherCheck = dateBtn?.querySelector(".menubar-check");
        if (otherCheck) otherCheck.textContent = "";
      } else if (action === "sort-date") {
        item.setAttribute("aria-checked", "true");
        const nameBtn = document.querySelector("[data-menu-action='sort-name']");
        if (nameBtn) nameBtn.setAttribute("aria-checked", "false");
        const checkEl = item.querySelector(".menubar-check");
        if (checkEl) checkEl.textContent = "\u2713";
        const otherCheck = nameBtn?.querySelector(".menubar-check");
        if (otherCheck) otherCheck.textContent = "";
      } else if (action === "copy-text") {
        try {
          navigator.clipboard.writeText(window.location.href);
        } catch (e) {}
      } else if (action === "shortcuts") {
        wm.open("notes");
      } else {
        wm.open(action, item);
      }
    });
  });

  // Registre de l'aplicació Paperera (TRASH)
  wm.registerApp("trash", {
    id: "trash",
    title: "Paperera",
    iconName: "trash",
    badge: "0 elements",
    statusLeft: "0 elements a la paperera",
    statusRight: "4dsu OS",
    render: (container) => {
      container.innerHTML = `
        <div style="padding: 24px; text-align: center; color: var(--color-ink-muted);">
          <p style="font-family: var(--font-pixel); font-size: 11px; margin-bottom: 8px;">La paperera està buida.</p>
          <p style="font-size: 10px;">Cap fitxer o registre pendent d'eliminació.</p>
        </div>
      `;
    }
  });

  // 5B. Accions accessibles de la mascota (des de la vista lineal o d'altres controls)
  document.addEventListener("click", (e) => {
    const talkBtn = e.target.closest("[data-mascot-action='talk']");
    if (talkBtn) {
      e.preventDefault();
      switchView("desktop", { openWelcomeIfEmpty: false });
      wm.open("process_4dsu");
    }
  });

  // 6. Rellotge de la barra de menús en temps real
  function updateSystemClocks() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const timeStr = `${hours}:${minutes}`;
    const isoStr = now.toISOString();

    const menubarClock = document.getElementById("menubar-clock");
    if (menubarClock) {
      menubarClock.textContent = timeStr;
      menubarClock.setAttribute("datetime", isoStr);
    }
    if (taskbarClock) {
      taskbarClock.textContent = timeStr;
      taskbarClock.setAttribute("datetime", isoStr);
    }
  }
  updateSystemClocks();
  setInterval(updateSystemClocks, 1000);

  // 7. Enrutament basat en Hash (Rutes vàlides i resposta clara per a desconegudes)
  const KNOWN_APPS = ["welcome", "about", "projects", "project", "project_detail", "cv", "notes", "contact", "emkenia", "mail", "browser", "files", "photos", "lab", "search", "sysprops", "system_error", "process_4dsu", "dsu"];

  function handleRoute(hashString, isInitial = false) {
    flashLed(150);
    const hash = typeof hashString === "string" ? hashString : window.location.hash;

    if (hash === "#view=linear" || hash.startsWith("#linear-")) {
      switchView("linear", { targetHash: hash });
      if (hash.startsWith("#linear-")) {
        requestAnimationFrame(() => {
          const targetEl = document.querySelector(hash);
          if (targetEl) {
            targetEl.scrollIntoView();
            if (targetEl.id === "linear-content") {
              targetEl.focus();
            } else {
              const heading = targetEl.querySelector("h2, h3");
              if (heading) {
                heading.setAttribute("tabindex", "-1");
                heading.focus();
              }
            }
          }
          const navLinks = document.querySelectorAll(".linear-nav-link");
          navLinks.forEach(link => {
            if (link.getAttribute("href") === hash) {
              link.setAttribute("aria-current", "location");
              link.classList.add("is-active");
            } else {
              link.removeAttribute("aria-current");
              link.classList.remove("is-active");
            }
          });
        });
      }
      return;
    }

    if (hash.startsWith("#app=")) {
      const appId = hash.replace("#app=", "").trim();
      if (appId) {
        if (currentView === "linear") switchView("desktop", { openWelcomeIfEmpty: false });
        else switchView("desktop", { openWelcomeIfEmpty: false });

        // Els panells del Finder (i els seus àlies històrics com #app=files)
        // seleccionen una secció en comptes d'obrir finestra pròpia.
        const paneId = resolveFinderPane(appId);
        if (paneId) {
          wm.open("finder", null, { updateHash: false });
          if (wm.finder) wm.finder.select(paneId, { updateHash: false });
          if (window.location.hash !== `#app=${paneId}`) {
            try { history.replaceState(null, "", `#app=${paneId}`); } catch (e) {}
          }
          return;
        }

        const isKnown = wm.appRegistry ? (wm.appRegistry.has(appId) && appId !== "system_error") : KNOWN_APPS.includes(appId);

        if (appId === "system_error") {
          wm.open("system_error", null, { route: "system_error" });
        } else if (isKnown) {
          if (!wm.isOpen(appId) || wm.activeWindowId !== appId) {
            wm.open(appId);
          }
        } else {
          // Ruta d'aplicació desconeguda: obrir SYSTEM_ERROR.EXE i normalitzar la URL
          wm.open("system_error", null, { route: appId });
          try {
            history.replaceState(null, "", "#app=system_error");
          } catch (e) {}
        }
        return;
      }
    }

    if (!hash || hash === "#") {
      if (isInitial) {
        switchView("desktop", { openWelcomeIfEmpty: false });
        wm.open("welcome", null, { updateHash: false });
      } else if (currentView === "linear") {
        switchView("desktop", { openWelcomeIfEmpty: true });
      }
      return;
    }

    // Ruta / hash desconeguda genèrica
    if (currentView === "linear") switchView("desktop", { openWelcomeIfEmpty: false });
    const rawRoute = hash.replace(/^#/, "");
    wm.open("system_error", null, { route: rawRoute });
    try {
      history.replaceState(null, "", "#app=system_error");
    } catch (e) {}
  }

  handleRoute(window.location.hash, true);

  // Escoltar canvis de hash posteriors
  window.addEventListener("hashchange", () => {
    handleRoute(window.location.hash, false);
  });

  // 8. Botó físic d'encesa / reinici del maquinari (Hardware Power Button)
  function restartSystem() {
    flashLed(350);

    if (currentView === "linear") {
      switchView("desktop", { openWelcomeIfEmpty: false });
    }

    if (wm && wm.windows) {
      Array.from(wm.windows.keys()).forEach(id => wm.close(id));
    }

    bootDismissed = false;
    bootTimers.forEach(t => clearTimeout(t));
    bootTimers = [];

    if (bootScreen) {
      bootScreen.classList.remove("is-hidden");
      bootScreen.removeAttribute("hidden");
      bootScreen.dataset.bootState = "idle";
    }
    if (desktopShell) {
      desktopShell.setAttribute("inert", "");
    }
    if (bootProgressFill) {
      bootProgressFill.style.width = "0%";
    }
    if (liveAnnouncer) {
      liveAnnouncer.textContent = "Reiniciant sistema 4dsu OS...";
    }

    startBootSequence();
  }

  if (hwPowerBtn) {
    hwPowerBtn.addEventListener("click", () => {
      restartSystem();
    });
  }

  // Exposar per a verificació i proves
  window.__4dsu_wm = wm;
  window.__4dsu_switchView = switchView;
  window.__4dsu_restartSystem = restartSystem;
});
