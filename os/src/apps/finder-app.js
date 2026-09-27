/**
 * 4dsu.me — FINDER
 *
 * Finestra amfitriona del portfoli: barra lateral de seccions + panell de
 * contingut. Seleccionar una secció NO obre una finestra nova: reutilitza la
 * definició d'aplicació existent i la munta dins del panell.
 *
 * Tres invariants que cal respectar si es toca aquest fitxer:
 *  1. Després de muntar un panell cal cridar wm.attachInternalActions(pane),
 *     o tots els [data-open-app] del contingut queden inerts.
 *  2. El canvi de panell substitueix l'element (replaceWith), mai buida
 *     l'innerHTML: hi ha aplicacions amb temporitzadors que només s'aturen
 *     quan el seu node es desconnecta del document.
 *  3. L'adreça canònica continua sent #app=<panell>, no #app=finder.
 */

import { getIcon } from "../icons.js";
import { FINDER_SECTIONS, FINDER_PANES, FINDER_DEFAULT_PANE } from "./finder-panes.js";

function buildSidebar() {
  return FINDER_SECTIONS.map(section => `
    <div class="finder-sidebar-group">
      <p class="finder-sidebar-label">${section.label}</p>
      <ul class="finder-sidebar-list" role="list">
        ${section.items.map(item => `
          <li role="listitem">
            <button type="button"
                    class="finder-sidebar-item"
                    data-finder-pane="${item.app}"
                    aria-current="false">
              <span class="finder-sidebar-icon" aria-hidden="true">${getIcon(item.icon)}</span>
              <span class="finder-sidebar-text">${item.label}</span>
            </button>
          </li>
        `).join("")}
      </ul>
    </div>
  `).join("");
}

export const finderApp = {
  id: "finder",
  title: "4dsu",
  iconName: "folder",
  isDocument: false,
  statusLeft: "",
  statusRight: "",

  render(winBody) {
    winBody.innerHTML = `
      <div class="finder-shell">
        <nav class="finder-sidebar" aria-label="Seccions del portfoli">
          ${buildSidebar()}
        </nav>
        <div class="finder-pane-host"></div>
      </div>
    `;
  },

  onMount(winEl, wm) {
    const host = winEl.querySelector(".finder-pane-host");
    const sidebarItems = Array.from(winEl.querySelectorAll(".finder-sidebar-item"));
    const titleEl = winEl.querySelector(".win-header-title");
    const badgeEl = winEl.querySelector(".win-header-badge");
    const statusLeftEl = winEl.querySelector(".win-status-left");
    const statusRightEl = winEl.querySelector(".win-status-right");
    if (!host) return;

    let currentPane = null;

    function syncChrome(appDef) {
      if (titleEl) titleEl.textContent = appDef.title || "4dsu";
      if (badgeEl) {
        if (appDef.badge) {
          badgeEl.textContent = appDef.badge;
          badgeEl.removeAttribute("hidden");
        } else {
          badgeEl.textContent = "";
          badgeEl.setAttribute("hidden", "");
        }
      }
      if (statusLeftEl) statusLeftEl.textContent = appDef.statusLeft || "";
      if (statusRightEl) statusRightEl.textContent = appDef.statusRight || "";
    }

    function syncSidebar(paneId) {
      sidebarItems.forEach((item) => {
        const isCurrent = item.getAttribute("data-finder-pane") === paneId;
        item.setAttribute("aria-current", isCurrent ? "page" : "false");
        item.classList.toggle("is-active", isCurrent);
      });
    }

    function select(paneId, { updateHash = true, focusPane = false } = {}) {
      if (!FINDER_PANES.has(paneId)) return false;

      const appDef = wm.appRegistry.get(paneId);
      if (!appDef) return false;

      if (currentPane !== paneId) {
        const previous = host.querySelector(".finder-pane");
        if (previous) {
          const previousDef = wm.appRegistry.get(currentPane);
          if (previousDef && typeof previousDef.onClose === "function") {
            try { previousDef.onClose(previous, wm); } catch (e) {}
          }
        }

        // Substituir l'element (i no buidar-lo) desconnecta el subarbre anterior
        // i permet que els temporitzadors amb guarda isConnected s'aturin.
        const pane = document.createElement("div");
        pane.className = "finder-pane";
        pane.dataset.paneId = paneId;
        if (previous) previous.replaceWith(pane);
        else host.appendChild(pane);

        if (typeof appDef.render === "function") {
          const result = appDef.render(pane, wm, {});
          if (typeof result === "string") pane.innerHTML = result;
        }
        wm.attachInternalActions(pane);
        if (typeof appDef.onMount === "function") {
          try { appDef.onMount(pane, wm, {}); } catch (e) {}
        }

        currentPane = paneId;
        winEl.dataset.pane = paneId;
        host.scrollTop = 0;
        syncChrome(appDef);
        syncSidebar(paneId);
        wm._announce?.(`Secció: ${appDef.title || paneId}`);
      }

      if (updateHash && window.location.hash !== `#app=${paneId}`) {
        try { history.replaceState(null, "", `#app=${paneId}`); } catch (e) {}
      }
      if (focusPane) {
        const pane = host.querySelector(".finder-pane");
        pane?.focus?.({ preventScroll: true });
      }
      return true;
    }

    sidebarItems.forEach((item) => {
      item.addEventListener("click", (event) => {
        event.preventDefault();
        select(item.getAttribute("data-finder-pane"));
      });
    });

    wm.finder = {
      hosts: (id) => FINDER_PANES.has(id),
      select,
      current: () => currentPane,
      element: winEl
    };

    select(FINDER_DEFAULT_PANE, { updateHash: false });
  }
  // Sense onClose: el WindowManager conserva l'element en tancar (només l'amaga)
  // i no torna a executar onMount en reobrir, així que l'API ha de sobreviure.
};
