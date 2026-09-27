/**
 * 4dsu OS — CV.PDF
 * Currículum vitae en pantalla en format document amb notificacions honestes.
 * Sense fitxer extern ni dades acadèmiques inventades.
 */

import { PORTFOLIO_DATA } from "../data/portfolio-data.js";
import { getIcon } from "../icons.js";

export const cvApp = {
  id: "cv",
  title: PORTFOLIO_DATA.cv.windowTitle || "CV.PDF — Currículum Vitae",
  iconName: "cv",
  badge: PORTFOLIO_DATA.cv.badge || "PERFIL CURRICULAR",
  isDocument: true,
  statusLeft: "CURRÍCULUM // LECTURA",
  statusRight: "PÀGINES: 1 DE 1",

  render(winBody) {
    const { cv } = PORTFOLIO_DATA;
    winBody.innerHTML = `
      <article class="document-case-study cv-document">
        <header class="cv-header">
          <div class="cv-doc-meta">
            <span class="sys-tag sys-tag-success">DOCUMENT EN PANTALLA</span>
            <span class="cv-doc-filename"><code>CV.PDF // READ-ONLY</code></span>
          </div>
          <h2 class="cv-name">${cv.name}</h2>
          <p class="cv-title">${cv.title}</p>
          <p class="cv-summary">${cv.summary}</p>
        </header>

        <hr class="doc-rule" />

        <section class="doc-section" aria-labelledby="cv-edu-heading">
          <h3 class="doc-heading" id="cv-edu-heading">Formació Acadèmica</h3>
          ${cv.education.map(edu => `
            <div class="cv-entry">
              <div class="cv-entry-head">
                <strong>${edu.degree}</strong>
                <span class="sys-tag">${edu.period}</span>
              </div>
              ${edu.institution ? `
                <div class="cv-institution-row">
                  <span class="cv-institution">${edu.institution}</span>
                </div>
              ` : ""}
              ${edu.description ? `<p class="cv-entry-desc">${edu.description}</p>` : ""}
            </div>
          `).join("")}
        </section>

        <section class="doc-section" aria-labelledby="cv-skills-heading">
          <h3 class="doc-heading" id="cv-skills-heading">Competències Tècniques</h3>
          <div class="cv-skills-grid">
            ${cv.skills.map(group => `
              <div class="cv-skill-group">
                <h4 class="cv-skill-category">${group.category}</h4>
                <ul class="cv-skill-list">
                  ${group.items.map(item => `<li><span class="skill-bullet" aria-hidden="true">[■]</span> <span>${item}</span></li>`).join("")}
                </ul>
              </div>
            `).join("")}
          </div>
        </section>

        <div class="doc-banner-info">
          <div class="doc-banner-head">
            <span class="sys-tag sys-tag-alert">AVÍS DE LECTURA</span>
            <strong>Document natiu en pantalla</strong>
          </div>
          <p>${cv.downloadNote}</p>
          <div class="doc-banner-actions">
            <button type="button" class="sys-btn sys-btn-primary" data-open-app="projects">
              ${getIcon("folder")} Veure directori PROJECTS/
            </button>
            <button type="button" class="sys-btn" data-open-app="contact">
              ${getIcon("contact")} Contactar (CONTACT.EXE)
            </button>
          </div>
        </div>
      </article>
    `;
  }
};
