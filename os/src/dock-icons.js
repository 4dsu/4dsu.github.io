/**
 * 4dsu.me — Sprites del Dock
 *
 * A diferència de src/icons.js (peces monocromes de 16×16 que hereten
 * currentColor i viuen dins de barres i menús), aquestes són il·lustracions
 * de 16×16 amb paleta pròpia: al Dock la icona és l'objecte, no un símbol.
 *
 * Regles: graella de 16, només <rect>, cap degradat i cap corba. Els colors
 * són literals perquè cada peça té la seva identitat i no ha de seguir el
 * color del text que l'envolta.
 */

const S = (body) =>
  `<svg class="dock-sprite" viewBox="0 0 16 16" width="16" height="16" shape-rendering="crispEdges" aria-hidden="true">${body}</svg>`;

export const DOCK_ICONS = {
  // Finder: carpeta blava oberta amb pestanya
  finder: S(`
    <rect x="0" y="3" width="16" height="11" fill="#2f5f9e"/>
    <rect x="0" y="2" width="7" height="2" fill="#7fb0f0"/>
    <rect x="1" y="5" width="14" height="8" fill="#4d8ce0"/>
    <rect x="0" y="3" width="16" height="1" fill="#7fb0f0"/>
    <rect x="1" y="12" width="14" height="1" fill="#1d3f73"/>
  `),

  // Projectes: finestra de codi
  projects: S(`
    <rect x="1" y="2" width="14" height="12" fill="#242836"/>
    <rect x="1" y="2" width="14" height="2" fill="#434a5c"/>
    <rect x="2" y="3" width="1" height="1" fill="#e4645a"/>
    <rect x="4" y="3" width="1" height="1" fill="#e0a030"/>
    <rect x="6" y="3" width="1" height="1" fill="#6cc47a"/>
    <rect x="3" y="6" width="4" height="1" fill="#4d8ce0"/>
    <rect x="3" y="8" width="7" height="1" fill="#b3b9c9"/>
    <rect x="3" y="10" width="5" height="1" fill="#b3b9c9"/>
    <rect x="11" y="6" width="2" height="5" fill="#2c5a96"/>
  `),

  // Fotografia: paisatge dins d'un marc
  photos: S(`
    <rect x="1" y="2" width="14" height="12" fill="#e8ebf2"/>
    <rect x="2" y="3" width="12" height="10" fill="#1b2033"/>
    <rect x="11" y="4" width="2" height="2" fill="#e0a030"/>
    <rect x="3" y="9" width="10" height="4" fill="#2f8f5c"/>
    <rect x="4" y="7" width="4" height="2" fill="#6cc47a"/>
    <rect x="8" y="8" width="3" height="1" fill="#6cc47a"/>
  `),

  // Laboratori: matràs
  lab: S(`
    <rect x="6" y="2" width="4" height="4" fill="#b3b9c9"/>
    <rect x="6" y="1" width="4" height="1" fill="#e8ebf2"/>
    <rect x="5" y="6" width="6" height="2" fill="#b3b9c9"/>
    <rect x="4" y="8" width="8" height="6" fill="#b3b9c9"/>
    <rect x="5" y="10" width="6" height="3" fill="#9a6ad0"/>
    <rect x="6" y="11" width="2" height="1" fill="#c7a4f0"/>
  `),

  // Currículum: document amb capçalera
  cv: S(`
    <rect x="2" y="1" width="12" height="14" fill="#e8ebf2"/>
    <rect x="2" y="1" width="12" height="3" fill="#4d8ce0"/>
    <rect x="4" y="6" width="8" height="1" fill="#878ea1"/>
    <rect x="4" y="8" width="8" height="1" fill="#878ea1"/>
    <rect x="4" y="10" width="5" height="1" fill="#878ea1"/>
    <rect x="4" y="12" width="6" height="1" fill="#878ea1"/>
  `),

  // Notes: bloc amb espiral
  notes: S(`
    <rect x="3" y="1" width="11" height="14" fill="#f2e9c8"/>
    <rect x="2" y="1" width="2" height="14" fill="#e0a030"/>
    <rect x="5" y="5" width="7" height="1" fill="#878ea1"/>
    <rect x="5" y="7" width="7" height="1" fill="#878ea1"/>
    <rect x="5" y="9" width="4" height="1" fill="#878ea1"/>
  `),

  // Correu: sobre
  mail: S(`
    <rect x="1" y="4" width="14" height="9" fill="#e8ebf2"/>
    <rect x="1" y="4" width="14" height="1" fill="#ffffff"/>
    <rect x="2" y="5" width="12" height="4" fill="#b3b9c9"/>
    <rect x="4" y="7" width="8" height="2" fill="#878ea1"/>
    <rect x="1" y="12" width="14" height="1" fill="#878ea1"/>
  `),

  // Navegador: finestra amb barra d'adreces
  browser: S(`
    <rect x="1" y="2" width="14" height="12" fill="#242836"/>
    <rect x="1" y="2" width="14" height="3" fill="#434a5c"/>
    <rect x="3" y="3" width="9" height="1" fill="#b3b9c9"/>
    <rect x="2" y="6" width="12" height="7" fill="#1b2033"/>
    <rect x="4" y="8" width="8" height="1" fill="#4d8ce0"/>
    <rect x="4" y="10" width="5" height="1" fill="#878ea1"/>
  `),

  // Cerca: lupa
  search: S(`
    <rect x="4" y="2" width="6" height="1" fill="#b3b9c9"/>
    <rect x="3" y="3" width="1" height="6" fill="#b3b9c9"/>
    <rect x="10" y="3" width="1" height="6" fill="#b3b9c9"/>
    <rect x="4" y="9" width="6" height="1" fill="#b3b9c9"/>
    <rect x="4" y="3" width="6" height="6" fill="#4d8ce0"/>
    <rect x="5" y="4" width="2" height="2" fill="#7fb0f0"/>
    <rect x="10" y="10" width="2" height="2" fill="#878ea1"/>
    <rect x="12" y="12" width="2" height="2" fill="#878ea1"/>
  `),

  // Paperera: cistella metàl·lica
  trash: S(`
    <rect x="5" y="2" width="6" height="1" fill="#b3b9c9"/>
    <rect x="3" y="4" width="10" height="1" fill="#b3b9c9"/>
    <rect x="4" y="5" width="8" height="9" fill="#878ea1"/>
    <rect x="6" y="7" width="1" height="5" fill="#2c303d"/>
    <rect x="9" y="7" width="1" height="5" fill="#2c303d"/>
    <rect x="4" y="5" width="1" height="9" fill="#b3b9c9"/>
  `)
};

export function getDockIcon(name, size = 48) {
  const sprite = DOCK_ICONS[name] || DOCK_ICONS.finder;
  return sprite.replace('width="16" height="16"', `width="${size}" height="${size}"`);
}
