/**
 * 4dsu OS — NOTES.TXT
 * Bloc de notes i reflexions breus sobre enginyeria, programació de sistemes i disseny.
 */

import { PORTFOLIO_DATA } from "../data/portfolio-data.js";
import { getIcon } from "../icons.js";

export const notesApp = {
  id: "notes",
  title: PORTFOLIO_DATA.notes.windowTitle || "NOTES.TXT — Apunts i Idees",
  iconName: "notes",
  badge: PORTFOLIO_DATA.notes.badge || "BLOC DE TEXT",
  isDocument: true,
  statusLeft: `${(PORTFOLIO_DATA.notes.entries || []).length} APUNTS REGISTRATS`,
  statusRight: "MODE: NOMÉS LECTURA",

  render(winBody) {
    const { notes } = PORTFOLIO_DATA;
    const entries = notes.entries || [];

    winBody.innerHTML = `
      <article class="document-case-study notes-document">
        <header class="notes-header">
          <div class="notes-doc-meta">
            <span class="sys-tag sys-tag-success">DIARI D'ENGINYERIA</span>
            <span class="notes-doc-filename"><code>NOTES.TXT // POSIX TEXT</code></span>
          </div>
          <h2 class="doc-title">${notes.windowTitle}</h2>
          <p class="doc-summary">${notes.intro}</p>
        </header>

        <div class="notes-filter-bar">
          <label for="notes-search-input" class="notes-search-label">${getIcon("search")} Cercar als apunts:</label>
          <input type="text" id="notes-search-input" class="sys-input notes-search-input" placeholder="Filtra per paraula clau..." aria-label="Cercar apunts" />
        </div>

        <div class="notes-stream" id="notes-stream-container">
          ${entries.map(note => `
            <article class="note-entry" data-note-text="${note.title.toLowerCase()} ${(note.content || "").toLowerCase()} ${(note.category || "").toLowerCase()}">
              <header class="note-entry-meta">
                <div class="note-entry-tag-row">
                  <span class="sys-tag sys-tag-alert">${note.category || "Enginyeria"}</span>
                  <time class="sys-timestamp">${note.date}</time>
                </div>
                <h3 class="note-entry-title">${note.title}</h3>
              </header>
              <div class="note-entry-body">
                ${(note.paragraphs || [note.content]).map(p => `<p class="note-entry-text">${p}</p>`).join("")}
              </div>
            </article>
          `).join("")}
        </div>

        <footer class="notes-footer-actions">
          <button type="button" class="sys-btn sys-btn-primary" data-open-app="projects">
            ${getIcon("folder")} Veure directori PROJECTS/
          </button>
          <button type="button" class="sys-btn" data-open-app="about">
            ${getIcon("about")} Sobre 4dsu (ABOUT.EXE)
          </button>
        </footer>
      </article>
    `;
  },

  onMount(winEl) {
    const input = winEl.querySelector("#notes-search-input");
    const container = winEl.querySelector("#notes-stream-container");
    if (!input || !container) return;

    input.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      const entries = container.querySelectorAll(".note-entry");
      entries.forEach(entry => {
        const text = entry.getAttribute("data-note-text") || "";
        entry.style.display = !q || text.includes(q) ? "" : "none";
      });
    });
  }
};
