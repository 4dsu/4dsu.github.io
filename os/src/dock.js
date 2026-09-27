/**
 * 4dsu.me — Dock
 *
 * Barra d'aplicacions flotant sobre l'escriptori. No reserva espai de
 * maquetació: l'espai de treball conserva tota l'alçada sota la barra de
 * menús i només el WindowManager sap que el Dock hi és (--dock-reserve).
 *
 * La magnificació és a ESCALONS discrets i múltiples de la graella de 16 px.
 * Una interpolació contínua desdibuixaria el pixel art, que és exactament el
 * que aquesta direcció visual no ha de fer mai.
 */

import { getDockIcon } from "./dock-icons.js";

/** Amplades per distància al cursor: [focus, veí, llunyà, repòs]. */
const SIZES = [80, 64, 48, 48];

const DOCK_ITEMS = [
  { app: "finder", label: "Finder", icon: "finder" },
  { app: "projects", label: "Projectes", icon: "projects" },
  { app: "photos", label: "Fotografia", icon: "photos" },
  { app: "lab", label: "Laboratori", icon: "lab" },
  { app: "cv", label: "Currículum", icon: "cv" },
  { app: "notes", label: "Notes", icon: "notes" },
  { app: "mail", label: "Correu", icon: "mail" },
  { app: "browser", label: "Navegador", icon: "browser" },
  { app: "search", label: "Cerca", icon: "search" },
  { separator: true },
  { app: "trash", label: "Paperera", icon: "trash" }
];

export function initDock(dockElement, wm) {
  if (!dockElement || !wm) return null;

  const floor = document.createElement("div");
  floor.className = "dock-floor";
  floor.setAttribute("aria-hidden", "true");
  dockElement.appendChild(floor);

  DOCK_ITEMS.forEach((entry) => {
    if (entry.separator) {
      const sep = document.createElement("div");
      sep.className = "dock-separator";
      sep.setAttribute("aria-hidden", "true");
      dockElement.appendChild(sep);
      return;
    }

    const art = getDockIcon(entry.icon, 48);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "dock-item";
    button.dataset.dockFor = entry.app;
    button.setAttribute("aria-label", `Obrir ${entry.label}`);
    button.innerHTML =
      `<span class="dock-tip" aria-hidden="true">${entry.label}</span>` +
      `<span class="dock-art" aria-hidden="true">${art}</span>` +
      `<span class="dock-reflection" aria-hidden="true">${art}</span>` +
      `<span class="dock-running" aria-hidden="true"></span>`;

    button.addEventListener("click", () => {
      wm.open(entry.app, button);
    });

    dockElement.appendChild(button);
  });

  const items = Array.from(dockElement.querySelectorAll(".dock-item"));

  function applySize(item, size) {
    const art = item.querySelector(".dock-art");
    const reflection = item.querySelector(".dock-reflection");
    if (art) {
      art.style.width = `${size}px`;
      art.style.height = `${size}px`;
    }
    if (reflection) reflection.style.width = `${size}px`;
  }

  function magnify(index) {
    items.forEach((item, position) => {
      const distance = index === null ? SIZES.length - 1 : Math.min(SIZES.length - 1, Math.abs(position - index));
      applySize(item, SIZES[distance]);
    });
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!prefersReducedMotion) {
    items.forEach((item, index) => {
      item.addEventListener("mouseenter", () => magnify(index));
      item.addEventListener("focus", () => magnify(index));
    });
    dockElement.addEventListener("mouseleave", () => magnify(null));
    dockElement.addEventListener("focusout", (event) => {
      if (!dockElement.contains(event.relatedTarget)) magnify(null);
    });
  }
  magnify(null);

  /** Marca quines aplicacions tenen finestra oberta. */
  function syncRunning() {
    items.forEach((item) => {
      const appId = item.dataset.dockFor;
      const isRunning = wm.isOpen(appId) ||
        (wm.finder && wm.finder.hosts(appId) && wm.isOpen("finder"));
      item.dataset.running = String(Boolean(isRunning));
    });
  }

  const api = { magnify, syncRunning, steps: SIZES.slice() };
  window.__4dsu_dock = api;
  return api;
}
