/**
 * 4dsu OS — BROWSER.EXE
 * Mini navegador web aïllat en sandbox per a recursos del portfolio,
 * documentació interna i enllaços externs segurs sense pèrdua de context.
 */

import { PORTFOLIO_DATA } from "../data/portfolio-data.js";
import { getIcon } from "../icons.js";

export const browserApp = {
  id: "browser",
  title: PORTFOLIO_DATA.browser.windowTitle || "BROWSER.EXE — Navegador",
  iconName: "browser",
  badge: PORTFOLIO_DATA.browser.badge || "NAVEGACIÓ WEB",
  isDocument: false,
  statusLeft: "WEB: 4DSU.ME",
  statusRight: "PORTFOLIO BROWSER // SANDBOX",

  render(winBody) {
    const { browser } = PORTFOLIO_DATA;
    const bookmarks = [
      { id: "home", label: "4dsu OS", url: "https://www.4dsu.me/os/", app: "welcome", desc: "Pàgina principal del sistema" },
      { id: "projects", label: "PROJECTS/", url: "https://www.4dsu.me/os/#app=projects", app: "projects", desc: "Directori de projectes" },
      { id: "about", label: "ABOUT.EXE", url: "https://www.4dsu.me/os/#app=about", app: "about", desc: "Perfil personal i pilars" },
      { id: "cv", label: "CV.PDF", url: "https://www.4dsu.me/os/#app=cv", app: "cv", desc: "Currículum en pantalla" },
      { id: "photos", label: "PHOTOS/", url: "https://www.4dsu.me/os/#app=photos", app: "photos", desc: "Fotografia per sèries" },
      { id: "notes", label: "NOTES.TXT", url: "https://www.4dsu.me/os/#app=notes", app: "notes", desc: "Apunts d'enginyeria" },
      { id: "lab", label: "LAB/", url: "https://www.4dsu.me/os/#app=lab", app: "lab", desc: "Experiments i prototips" },
      { id: "linear", label: "Vista Lineal", url: "https://www.4dsu.me/os/#view=linear", action: "switch-linear", desc: "Versió accessible estàtica" }
    ];

    winBody.innerHTML = `
      <div class="browser-app">
        <header class="browser-toolbar">
          <div class="browser-nav-group">
            <button type="button" class="sys-btn browser-tool-btn" id="btn-browser-back" aria-label="Pàgina anterior">
              ◀
            </button>
            <button type="button" class="sys-btn browser-tool-btn" id="btn-browser-forward" aria-label="Pàgina següent">
              ▶
            </button>
            <button type="button" class="sys-btn browser-tool-btn" id="btn-browser-reload" aria-label="Recarregar">
              ↻
            </button>
            <button type="button" class="sys-btn browser-tool-btn" id="btn-browser-home" aria-label="Pàgina d'inici">
              ${getIcon("welcome")}
            </button>
          </div>

          <form class="browser-address-form" id="browser-address-form" onsubmit="return false;">
            <div class="browser-address-bar">
              <span class="browser-lock-icon" aria-hidden="true">${getIcon("system")}</span>
              <input type="text" id="browser-url-input" class="sys-input browser-url-input" value="https://www.4dsu.me/os/" aria-label="Barra d'adreces" />
              <button type="submit" class="sys-btn browser-go-btn" id="btn-browser-go">
                Ir
              </button>
            </div>
          </form>

          <span class="sys-tag sys-tag-success browser-sandbox-badge">SANDBOX ACTIU</span>
        </header>

        <nav class="browser-bookmarks-bar" aria-label="Marcadors ràpids">
          <span class="browser-bookmarks-label">Marcadors:</span>
          <div class="browser-bookmarks-list">
            ${bookmarks.map(bm => `
              <button type="button" class="sys-btn browser-bookmark-btn" data-bm-url="${bm.url}" data-bm-app="${bm.app || ""}" data-bm-action="${bm.action || ""}">
                ${bm.label}
              </button>
            `).join("")}
          </div>
        </nav>

        <main class="browser-content-viewport" id="browser-viewport">
          <article class="browser-preview-page">
            <div class="browser-page-header">
              <div class="browser-page-badge">HTTP 200 // PORTFOLIO SANDBOX</div>
              <h3 class="browser-page-title">4dsu.me — Estació de Treball Retro</h3>
              <p class="browser-page-url" id="browser-display-url">https://www.4dsu.me/os/</p>
            </div>

            <div class="browser-page-body" id="browser-page-body">
              <p class="browser-page-lead">${browser.intro}</p>
              <div class="browser-quick-index">
                <h4>Recursos disponibles al navegador:</h4>
                <ul class="browser-resources-list">
                  <li><strong>Projectes</strong>: el problema, què vaig fer i com va acabar.</li>
                  <li><strong>Fotografia</strong>: sèries amb la càmera i la data de cada presa.</li>
                  <li><strong>Currículum</strong>: formació i temes, en pantalla.</li>
                  <li><strong>Vista lineal</strong>: tot el contingut seguit, per llegir-lo sense finestres.</li>
                </ul>
              </div>

              <div class="browser-page-actions">
                <button type="button" class="sys-btn sys-btn-primary" data-open-app="projects">
                  ${getIcon("folder")} Explorar PROJECTS/
                </button>
                <button type="button" class="sys-btn" data-open-app="photos">
                  ${getIcon("camera")} Veure PHOTO_PORTFOLIO/
                </button>
                <button type="button" class="sys-btn" data-action="switch-linear">
                  ${getIcon("linear")} Commutar a Vista Lineal
                </button>
              </div>
            </div>
          </article>
        </main>
      </div>
    `;
  },

  onMount(winEl) {
    const urlInput = winEl.querySelector("#browser-url-input");
    const displayUrl = winEl.querySelector("#browser-display-url");
    const reloadBtn = winEl.querySelector("#btn-browser-reload");
    const homeBtn = winEl.querySelector("#btn-browser-home");
    const form = winEl.querySelector("#browser-address-form");
    const bookmarkBtns = winEl.querySelectorAll(".browser-bookmark-btn");

    function setUrl(url) {
      if (urlInput) urlInput.value = url;
      if (displayUrl) displayUrl.textContent = url;
    }

    if (homeBtn) {
      homeBtn.addEventListener("click", () => {
        setUrl("https://4dsu.me/");
      });
    }

    if (reloadBtn) {
      reloadBtn.addEventListener("click", () => {
        const current = urlInput ? urlInput.value : "https://4dsu.me/";
        setUrl(current);
      });
    }

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const entered = (urlInput ? urlInput.value.trim() : "") || "https://4dsu.me/";
        setUrl(entered.startsWith("http") ? entered : `https://${entered}`);
      });
    }

    bookmarkBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const url = btn.getAttribute("data-bm-url");
        if (url) setUrl(url);
      });
    });
  }
};
