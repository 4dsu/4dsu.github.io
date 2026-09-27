/**
 * 4dsu OS — ABOUT.EXE
 * Perfil personal, pilars d'interès tècnic (Telecom, C & Sistemes, Eines) i principis d'enginyeria.
 */

import { PORTFOLIO_DATA } from "../data/portfolio-data.js";
import { getIcon } from "../icons.js";

export const aboutApp = {
  id: "about",
  title: PORTFOLIO_DATA.about.windowTitle || "ABOUT.EXE — Sobre 4dsu",
  iconName: "about",
  badge: PORTFOLIO_DATA.about.badge || "PERFIL DEL SISTEMA",
  isDocument: false,
  statusLeft: "FITXER: ABOUT.EXE",
  statusRight: "ESTAT: NOMÉS LECTURA",

  render(winBody) {
    const { about, profile } = PORTFOLIO_DATA;
    const pillars = profile?.pillars || about.pillars || [];

    winBody.innerHTML = `
      <div class="about-container">
        <header class="about-header-block">
          <div class="about-badge-row">
            <span class="sys-tag sys-tag-success">PERFIL CONFIRMAT</span>
            <span class="about-meta-tag"><code>IDENTIFICADOR: 4DSU // X90</code></span>
          </div>
          <h3 class="about-name">${about.name}</h3>
          <p class="about-role">${about.role}</p>
        </header>

        <section class="about-bio" aria-label="Biografia">
          ${about.bio.map(p => `<p>${p}</p>`).join("")}
        </section>

        <section class="about-pillars" aria-labelledby="pillars-heading">
          <h4 class="about-section-heading" id="pillars-heading">Pilars d'interès tècnic</h4>
          <div class="pillars-grid">
            ${pillars.map(p => `
              <article class="pillar-card">
                <h5 class="pillar-title">${p.title}</h5>
                <p class="pillar-desc">${p.description || p.summary}</p>
                ${p.tags && p.tags.length > 0 ? `
                  <div class="pillar-tags">
                    ${p.tags.map(t => `<span class="sys-chip">${t}</span>`).join("")}
                  </div>
                ` : ""}
              </article>
            `).join("")}
          </div>
        </section>

        <section class="about-principles" aria-labelledby="principles-heading">
          <h4 class="about-section-heading" id="principles-heading">Principis de treball</h4>
          <ul class="principles-list">
            ${(about.principles || []).map(item => `
              <li><span class="principle-bullet" aria-hidden="true">[▶]</span> <span>${typeof item === "string" ? item : item.description}</span></li>
            `).join("")}
          </ul>
        </section>

        <footer class="about-actions-row">
          <button type="button" class="sys-btn sys-btn-primary" data-open-app="projects">
            ${getIcon("folder")} Explorar projectes
          </button>
          <button type="button" class="sys-btn" data-open-app="cv">
            ${getIcon("cv")} Veure CV.PDF
          </button>
          <button type="button" class="sys-btn" data-open-app="contact">
            ${getIcon("contact")} Contactar
          </button>
        </footer>
      </div>
    `;
  }
};
