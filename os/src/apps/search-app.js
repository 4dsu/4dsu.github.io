/**
 * 4dsu OS — SEARCH.EXE
 * Utilitat de cerca ràpida en temps real sobre tot l'índex del sistema:
 * aplicacions, documents, competències tècniques, notes i arxiu fotogràfic.
 */

import { PORTFOLIO_DATA } from "../data/portfolio-data.js";
import { getIcon } from "../icons.js";

export const searchApp = {
  id: "search",
  title: PORTFOLIO_DATA.search.windowTitle || "SEARCH.EXE — Cerca Global",
  iconName: "search",
  badge: PORTFOLIO_DATA.search.badge || "ÍNDEX DE SISTEMA",
  isDocument: false,
  statusLeft: "ÍNDEX // 15 FITXERS REGISTRATS",
  statusRight: "READY",

  render(winBody) {
    const { search } = PORTFOLIO_DATA;
    const searchItems = [
      { id: "welcome", title: "README.TXT", cat: "apps", catLabel: "Aplicació", desc: "Guia d'orientació ràpida, pitch de 10 segons i introducció a 4dsu OS.", icon: "welcome", appId: "welcome" },
      { id: "about", title: "ABOUT.EXE", cat: "apps", catLabel: "Aplicació", desc: "Qui sóc, en què em centro i com treballo.", icon: "about", appId: "about" },
      { id: "projects", title: "PROJECTS/", cat: "apps", catLabel: "Carpeta", desc: "Projectes: el problema, què vaig fer i com va acabar.", icon: "folder", appId: "projects" },
      { id: "project", title: "PROJECT.EXE", cat: "apps", catLabel: "Aplicació", desc: "Visor de casos d'estudi detallats: problema, paper, procés i resultats.", icon: "document", appId: "project" },
      { id: "lab", title: "LAB/", cat: "apps", catLabel: "Carpeta", desc: "Experiments i prototips.", icon: "lab", appId: "lab" },
      { id: "photos", title: "PHOTOS/", cat: "photos", catLabel: "Fotografia", desc: "Fotografies per sèries, amb la càmera i la data de cada presa.", icon: "camera", appId: "photos" },
      { id: "cv", title: "CV.PDF", cat: "docs", catLabel: "Document", desc: "Currículum en pantalla: formació i temes.", icon: "cv", appId: "cv" },
      { id: "notes", title: "NOTES.TXT", cat: "notes", catLabel: "Notes", desc: "Notes breus sobre enginyeria, programació i eines.", icon: "notes", appId: "notes" },
      { id: "contact", title: "CONTACT.EXE", cat: "apps", catLabel: "Aplicació", desc: "Canals de contacte públics.", icon: "contact", appId: "contact" },
      { id: "mail", title: "MAIL.EXE", cat: "apps", catLabel: "Aplicació", desc: "Compositor local de correu electrònic (mailto, eina de còpia i contracte serverless).", icon: "mail", appId: "mail" },
      { id: "browser", title: "BROWSER.EXE", cat: "apps", catLabel: "Aplicació", desc: "Mini navegador sandboxed per navegar per recursos interns del portfolio.", icon: "browser", appId: "browser" },
      { id: "sysprops", title: "SYSTEM PROPERTIES", cat: "apps", catLabel: "Sistema", desc: "Especificacions de la màquina: 64 MB de RAM i CPU RISC de 32 bits.", icon: "system", appId: "sysprops" },
      { id: "files", title: "FILES.EXE", cat: "apps", catLabel: "Sistema", desc: "Explorador del sistema de fitxers virtual POSIX VFS muntat.", icon: "files", appId: "files" },
      { id: "emkenia", title: "EMKENIA.EXE", cat: "apps", catLabel: "Aplicació", desc: "La feina a Emkenia.", icon: "company", appId: "emkenia" },
      ...(search.items || [])
    ];

    winBody.innerHTML = `
      <div class="search-container">
        <header class="search-header-box">
          <div class="search-bar-row">
            <label for="search-input" class="search-input-label">${getIcon("search", 20)}</label>
            <input type="text" id="search-input" class="sys-input search-input" placeholder="${search.placeholder || "Escriu per cercar aplicacions, projectes o notes..."}" aria-label="Cercar al sistema" autocomplete="off" />
            <button type="button" class="sys-btn sys-btn-primary" id="btn-search-clear">
              Netejar
            </button>
          </div>

          <div class="search-categories-bar" aria-label="Filtres de categories de cerca">
            <span class="search-cat-label">Filtres:</span>
            <div class="search-cat-chips-list" role="tablist">
              <button type="button" class="sys-btn search-cat-btn is-active" data-cat="all">Tots (${searchItems.length})</button>
              <button type="button" class="sys-btn search-cat-btn" data-cat="apps">Aplicacions</button>
              <button type="button" class="sys-btn search-cat-btn" data-cat="docs">Documents</button>
              <button type="button" class="sys-btn search-cat-btn" data-cat="notes">Notes</button>
              <button type="button" class="sys-btn search-cat-btn" data-cat="skills">Competències</button>
              <button type="button" class="sys-btn search-cat-btn" data-cat="photos">Fotografia</button>
            </div>
          </div>
        </header>

        <main class="search-results-viewport" id="search-results">
          <div class="search-status-counter" id="search-count-badge">
            <span class="sys-tag sys-tag-success">ÍNDEX CARREGAT</span>
            <span id="search-count-text">Mostrant ${searchItems.length} elements indexats</span>
          </div>

          <ul class="search-results-list" id="search-items-list" role="list">
            ${searchItems.map(item => `
              <li class="search-result-item" data-cat="${item.cat}" data-keywords="${item.title.toLowerCase()} ${item.desc.toLowerCase()}">
                <button type="button" class="search-result-btn" data-open-app="${item.appId}">
                  <span class="search-item-icon" aria-hidden="true">${getIcon(item.icon, 20)}</span>
                  <div class="search-item-body">
                    <div class="search-item-top">
                      <strong class="search-item-title">${item.title}</strong>
                      <span class="sys-chip search-item-tag">${item.catLabel}</span>
                    </div>
                    <p class="search-item-desc">${item.desc}</p>
                  </div>
                  <span class="sys-btn sys-btn-sm search-action-cue">Obrir ▶</span>
                </button>
              </li>
            `).join("")}
          </ul>

          <div class="search-empty-state" id="search-empty" hidden>
            <p class="search-empty-msg">No s'ha trobat cap fitxer que coincideixi amb la consulta.</p>
            <p class="search-empty-sub">Prova amb termes com: <code>C</code>, <code>telecom</code>, <code>projectes</code>, <code>cv</code>, <code>fotos</code> o <code>notes</code>.</p>
          </div>
        </main>
      </div>
    `;
  },

  onMount(winEl) {
    const input = winEl.querySelector("#search-input");
    const clearBtn = winEl.querySelector("#btn-search-clear");
    const items = winEl.querySelectorAll(".search-result-item");
    const countText = winEl.querySelector("#search-count-text");
    const emptyBox = winEl.querySelector("#search-empty");
    const catBtns = winEl.querySelectorAll(".search-cat-btn");
    const listEl = winEl.querySelector("#search-items-list");

    let currentCat = "all";

    function filterResults() {
      const q = (input ? input.value.toLowerCase().trim() : "");
      let visibleCount = 0;

      items.forEach(item => {
        const cat = item.getAttribute("data-cat");
        const keywords = item.getAttribute("data-keywords") || "";
        const matchesCat = (currentCat === "all" || cat === currentCat);
        const matchesQuery = !q || keywords.includes(q);

        if (matchesCat && matchesQuery) {
          item.style.display = "";
          visibleCount++;
        } else {
          item.style.display = "none";
        }
      });

      if (countText) {
        countText.textContent = `${visibleCount} element${visibleCount !== 1 ? "s" : ""} trobat${visibleCount !== 1 ? "s" : ""}`;
      }

      if (emptyBox) {
        emptyBox.hidden = visibleCount > 0;
      }
      if (listEl) {
        listEl.hidden = visibleCount === 0;
      }
    }

    if (input) {
      input.addEventListener("input", filterResults);
      input.focus();
    }

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        if (input) {
          input.value = "";
          input.focus();
        }
        filterResults();
      });
    }

    catBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        catBtns.forEach(b => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        currentCat = btn.getAttribute("data-cat") || "all";
        filterResults();
      });
    });
  }
};
