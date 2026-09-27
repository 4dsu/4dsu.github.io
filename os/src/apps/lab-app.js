/**
 * 4dsu OS — LAB/
 * Banqueta de proves, prototips de maquinari, telecomunicacions RF, DSP i experiments en C.
 */

import { PORTFOLIO_DATA } from "../data/portfolio-data.js";
import { getIcon } from "../icons.js";

export const labApp = {
  id: "lab",
  title: PORTFOLIO_DATA.lab.windowTitle || "LAB/ — Experiments i Prototips",
  iconName: "lab",
  badge: PORTFOLIO_DATA.lab.badge || "BANQUETA DE PROVES",
  isDocument: false,
  statusLeft: PORTFOLIO_DATA.lab.emptyState.statusText,
  statusRight: "BANQUETA DE PROVES",

  render(winBody) {
    const { lab } = PORTFOLIO_DATA;
    const tracks = [
      {
        id: "rf",
        title: "Hardware de Ràdio & RF Telecom",
        tag: "RF / TELECOM",
        desc: "Banc de proves per a línies de transmissió, adaptació d'impedàncies, paràmetres S i esquemes de circuits de radiofreqüència per a telemàtica.",
        status: "EN PREPARACIÓ",
        badgeClass: "sys-tag-alert"
      },
      {
        id: "dsp",
        title: "Processament de Senyals & DSP",
        tag: "DSP / C",
        desc: "Filtres digitals FIR/IIR en C pur, anàlisi espectral per transformada de Fourier discreta (DFT/FFT) i modulacions digitals.",
        status: "PROTOTIPATGE",
        badgeClass: "sys-tag-success"
      },
      {
        id: "systems",
        title: "Sistemes de Baix Nivell & Sockets",
        tag: "POSIX / LINUX",
        desc: "Rutines d'assignació de memòria personalitzada (slab allocator), multiplexació d'E/S amb sockets POSIX i comunicació entre processos.",
        status: "COMPILACIÓ LOCAL",
        badgeClass: "sys-tag-success"
      }
    ];

    winBody.innerHTML = `
      <div class="lab-container">
        <header class="lab-header">
          <div class="lab-header-top">
            <span class="sys-tag sys-tag-alert">${lab.badge}</span>
            <span class="lab-header-meta"><code>/4dsu/bench/experimental/</code></span>
          </div>
          <p class="lab-intro">${lab.intro}</p>
        </header>

        <nav class="lab-filter-nav" aria-label="Filtre d'àmbits del laboratori">
          <div class="lab-tabs-list" role="tablist">
            <button type="button" class="sys-btn lab-tab-btn is-active" role="tab" aria-selected="true" data-track="all">
              Tots els àmbits (3 línies)
            </button>
            <button type="button" class="sys-btn lab-tab-btn" role="tab" aria-selected="false" data-track="rf">
              Hardware & RF
            </button>
            <button type="button" class="sys-btn lab-tab-btn" role="tab" aria-selected="false" data-track="dsp">
              DSP & Senyals
            </button>
            <button type="button" class="sys-btn lab-tab-btn" role="tab" aria-selected="false" data-track="systems">
              Sistemes & Sockets
            </button>
          </div>
        </nav>

        <div class="lab-tracks-grid" id="lab-tracks-container">
          ${tracks.map(t => `
            <article class="lab-track-card" data-track="${t.id}">
              <div class="lab-card-header">
                <span class="sys-tag ${t.badgeClass}">${t.tag}</span>
                <span class="lab-card-status">${t.status}</span>
              </div>
              <h4 class="lab-card-title">${t.title}</h4>
              <p class="lab-card-desc">${t.desc}</p>
              <div class="lab-card-footer">
                <span class="lab-card-scope">Estat: Circuit i codi a la banqueta de treball</span>
              </div>
            </article>
          `).join("")}
        </div>

        <div class="lab-empty-state">
          <div class="empty-state-graphic" aria-hidden="true">${getIcon("lab", 44)}</div>
          <div class="empty-state-content">
            <h3 class="empty-state-title">${lab.emptyState.title}</h3>
            <p class="empty-state-message">${lab.emptyState.message}</p>
            <div class="empty-state-badge">
              <span class="sys-tag sys-tag-success">${lab.emptyState.statusText}</span>
            </div>
          </div>
          <div class="empty-state-actions">
            <button type="button" class="sys-btn sys-btn-primary" data-open-app="projects">
              ${getIcon("folder")} Directori PROJECTS/
            </button>
            <button type="button" class="sys-btn" data-open-app="notes">
              ${getIcon("notes")} Apunts d'enginyeria (NOTES.TXT)
            </button>
            <button type="button" class="sys-btn" data-open-app="sysprops">
              ${getIcon("system")} Especificacions (SYSTEM PROPERTIES)
            </button>
          </div>
        </div>
      </div>
    `;
  },

  onMount(winEl) {
    const tabs = winEl.querySelectorAll(".lab-tab-btn");
    const cards = winEl.querySelectorAll(".lab-track-card");
    if (!tabs.length || !cards.length) return;

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => {
          t.classList.remove("is-active");
          t.setAttribute("aria-selected", "false");
        });
        tab.classList.add("is-active");
        tab.setAttribute("aria-selected", "true");

        const target = tab.getAttribute("data-track");
        cards.forEach(c => {
          c.style.display = (target === "all" || c.getAttribute("data-track") === target) ? "" : "none";
        });
      });
    });
  }
};
