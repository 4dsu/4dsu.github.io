/**
 * 4dsu OS — EMKENIA.EXE
 * La feina (surt de src/content/feina via scripts/os-dades.mjs).
 */

import { PORTFOLIO_DATA } from "../data/portfolio-data.js";
import { getIcon } from "../icons.js";

export const emkeniaApp = {
  id: "emkenia",
  title: PORTFOLIO_DATA.experience.windowTitle,
  iconName: "company",
  badge: PORTFOLIO_DATA.experience.badge,
  isDocument: false,
  statusLeft: "EMKENIA // FEINA",
  statusRight: "4dsu OS",

  render(winBody) {
    const exp = PORTFOLIO_DATA.experience;
    winBody.innerHTML = `
      <div class="emkenia-container">
        <div class="emkenia-header">
          ${exp.published ? "" : `<span class="sys-tag sys-tag-alert">EN OBRES</span>`}
          <h3 class="emkenia-company">${exp.companyName}</h3>
          <p class="emkenia-intro">${exp.intro}</p>
        </div>

        ${exp.role ? `
          <div class="emkenia-role-card">
            <span class="sys-tag">${exp.roleLabel}</span>
            <p class="emkenia-role-text">${exp.role}${exp.period ? ` · ${exp.period}` : ""}</p>
          </div>
        ` : ""}

        ${(exp.paragraphs || []).length ? `
          <div class="emkenia-highlights">
            ${exp.paragraphs.map(p => `<p class="emkenia-highlight-body">${p}</p>`).join("")}
          </div>
        ` : ""}

        ${exp.website ? `
          <p class="emkenia-intro">
            <a href="${exp.website.href}" target="_blank" rel="noopener noreferrer">${exp.website.label}: ${exp.website.value}</a>
          </p>
        ` : ""}

        <div class="emkenia-actions">
          <button type="button" class="sys-btn sys-btn-primary" data-open-app="projects">
            ${getIcon("folder")} Veure projectes
          </button>
          <button type="button" class="sys-btn" data-open-app="contact">
            ${getIcon("contact")} Contactar
          </button>
        </div>
      </div>
    `;
  }
};
