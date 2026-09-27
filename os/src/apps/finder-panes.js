/**
 * 4dsu.me — Mapa de panells del Finder.
 *
 * Les aplicacions llistades aquí NO obren finestra pròpia: es munten com a
 * panells dins de la finestra del Finder. La resta (MAIL, BROWSER, SEARCH,
 * SYSPROPS, el detall de projecte, l'error de sistema i la paperera)
 * conserven finestra flotant perquè tenen estat de formulari, roben focus
 * o són diàlegs.
 *
 * Aquest fitxer només conté dades: el WindowManager l'importa per poder
 * redirigir cap al Finder fins i tot abans que el Finder existeixi.
 */

/** Seccions de la barra lateral, en ordre de presentació. */
export const FINDER_SECTIONS = [
  {
    label: "DISPOSITIUS",
    items: [
      { app: "welcome", label: "4DSU_HD", icon: "system" }
    ]
  },
  {
    label: "LLOCS",
    items: [
      { app: "projects", label: "Projectes", icon: "folder" },
      { app: "photos", label: "Fotografia", icon: "camera" },
      { app: "lab", label: "Laboratori", icon: "lab" },
      { app: "emkenia", label: "Emkenia", icon: "company" }
    ]
  },
  {
    label: "DOCUMENTS",
    items: [
      { app: "about", label: "Sobre mi", icon: "about" },
      { app: "cv", label: "Currículum", icon: "document" },
      { app: "notes", label: "Notes", icon: "notes" },
      { app: "contact", label: "Contacte", icon: "mail" }
    ]
  }
];

/** Identificadors que el Finder amfitriona com a panell. */
export const FINDER_PANES = new Set(
  FINDER_SECTIONS.flatMap(section => section.items.map(item => item.app))
);

/** Panell inicial en obrir el Finder sense cap ruta. */
export const FINDER_DEFAULT_PANE = "welcome";

/**
 * Identificadors històrics que ja no tenen finestra pròpia.
 * FILES.EXE era un llistat de les mateixes seccions que ara ocupa
 * la barra lateral: els seus enllaços profunds es conserven vius.
 */
export const FINDER_ALIASES = {
  files: FINDER_DEFAULT_PANE,
  finder: FINDER_DEFAULT_PANE
};

/** Resol un identificador d'aplicació al panell corresponent, si n'hi ha. */
export function resolveFinderPane(appId) {
  const target = FINDER_ALIASES[appId] || appId;
  return FINDER_PANES.has(target) ? target : null;
}
