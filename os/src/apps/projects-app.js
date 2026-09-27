/**
 * 4dsu OS — PROJECTS/
 * Directori de projectes i casos d'estudi amb filtres de categoria i estat buit curat.
 */

import { PORTFOLIO_DATA } from "../data/portfolio-data.js";
import { getIcon } from "../icons.js";

export const projectsApp = {
  id: "projects",
  title: PORTFOLIO_DATA.projects.windowTitle,
  iconName: "folder",
  badge: PORTFOLIO_DATA.projects.badge,
  isDocument: false,
  statusLeft: PORTFOLIO_DATA.projects.emptyState.statusText,
  statusRight: "DIRECTORI: /PROJECTS",

  render(winBody) {
    const { projects } = PORTFOLIO_DATA;
    const categories = [
      { id: "all", label: "Tots" },
      { id: "systems", label: "Sistemes & C" },
      { id: "telecom", label: "Telecom & Xarxes" },
      { id: "tools", label: "Eines & CLI" }
    ];

    winBody.innerHTML = `
      <div class="projects-folder">
        <div class="folder-header-bar">
          <p class="folder-intro">${projects.intro}</p>
        </div>

        <nav class="project-categories-bar" aria-label="Filtres de categories de projectes">
          <span class="category-filter-label">Filtre:</span>
          <div class="category-tabs-list" role="tablist">
            ${categories.map((cat, idx) => `
              <button type="button" class="sys-btn category-tab-btn ${idx === 0 ? "is-active" : ""}" role="tab" aria-selected="${idx === 0 ? "true" : "false"}" data-project-category="${cat.id}">
                ${cat.label}
              </button>
            `).join("")}
          </div>
        </nav>

        ${projects.items && projects.items.length > 0 ? `
          <div class="folder-file-list" role="list" aria-label="Llista de fitxers de projectes" id="projects-list-container">
            ${projects.items.map(item => `
              <article class="folder-item" role="listitem" data-category="${item.category || "all"}">
                <div class="folder-item-icon" aria-hidden="true">${getIcon("document", 24)}</div>
                <div class="folder-item-info">
                  <div class="folder-item-title-row">
                    <h3 class="folder-item-filename">${item.fileName}</h3>
                    <span class="sys-tag-alert">${item.badge}</span>
                  </div>
                  <p class="folder-item-name"><strong>${item.title}</strong></p>
                  <p class="folder-item-desc">${item.summary}</p>
                  <div class="folder-item-tags">
                    ${(item.stack || []).map(s => `<span class="sys-chip">${s}</span>`).join("")}
                  </div>
                </div>
                <div class="folder-item-action">
                  <button type="button" class="sys-btn sys-btn-primary" data-open-app="project" data-project-id="${item.id}">
                    Obrir fitxer ${getIcon("arrowRight")}
                  </button>
                </div>
              </article>
            `).join("")}
          </div>
        ` : `
          <div class="folder-empty-state">
            <div class="empty-state-graphic" aria-hidden="true">${getIcon("folder", 44)}</div>
            <div class="empty-state-content">
              <h3 class="empty-state-title">${projects.emptyState.title}</h3>
              <p class="empty-state-message">${projects.emptyState.message}</p>
              <div class="empty-state-badge">
                <span class="sys-tag sys-tag-success">${projects.emptyState.statusText}</span>
              </div>
            </div>
            <div class="empty-state-actions">
              <button type="button" class="sys-btn sys-btn-primary" data-open-app="project">
                ${getIcon("document")} Estructura de cas d'estudi (PROJECT.EXE)
              </button>
              <button type="button" class="sys-btn" data-open-app="about">
                ${getIcon("about")} Sobre mi (ABOUT.EXE)
              </button>
              <button type="button" class="sys-btn" data-open-app="cv">
                ${getIcon("cv")} Currículum (CV.PDF)
              </button>
              <button type="button" class="sys-btn" data-open-app="contact">
                ${getIcon("contact")} Contactar (CONTACT.EXE)
              </button>
            </div>
          </div>
        `}
      </div>
    `;
  },

  onMount(winEl) {
    const tabs = winEl.querySelectorAll(".category-tab-btn");
    const container = winEl.querySelector("#projects-list-container");
    if (!tabs.length || !container) return;

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => {
          t.classList.remove("is-active");
          t.setAttribute("aria-selected", "false");
        });
        tab.classList.add("is-active");
        tab.setAttribute("aria-selected", "true");

        const cat = tab.getAttribute("data-project-category");
        const items = container.querySelectorAll(".folder-item");
        items.forEach(item => {
          const itemCat = item.getAttribute("data-category");
          item.style.display = (cat === "all" || itemCat === cat) ? "" : "none";
        });
      });
    });
  }
};
