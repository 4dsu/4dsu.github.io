/**
 * 4dsu OS — SYSTEM PROPERTIES
 * Especificacions tècniques de l'estació de treball retro 4dsu:
 * Processador RISC, memòria RAM 64MB, pantalla CRT d'ambre, POSIX VFS i xarxa.
 */

import { PORTFOLIO_DATA } from "../data/portfolio-data.js";
import { getIcon } from "../icons.js";

export const syspropsApp = {
  id: "sysprops",
  title: PORTFOLIO_DATA.systemProps.windowTitle || "SYSTEM PROPERTIES — Especificacions",
  iconName: "system",
  badge: PORTFOLIO_DATA.systemProps.badge || "ESTAT DE MÀQUINA",
  isDocument: false,
  statusLeft: "MAQUINARI: 4DSU-X90",
  statusRight: "STATUS: OK",

  render(winBody) {
    const sp = PORTFOLIO_DATA.systemProps;
    const sys = PORTFOLIO_DATA.system;

    winBody.innerHTML = `
      <div class="sysprops-container">
        <header class="sysprops-header">
          <div class="sysprops-brand-row">
            <span class="sys-tag sys-tag-alert">${sp.badge}</span>
            <span class="sysprops-kernel"><code>${sp.kernel}</code></span>
          </div>
          <h3 class="sysprops-title">${sys.osName} ${sys.osVersion}</h3>
          <p class="sysprops-arch">${sys.architecture}</p>
        </header>

        <nav class="sysprops-tabs-bar" aria-label="Seccions d'especificacions del sistema">
          <div class="sysprops-tabs-list" role="tablist">
            <button type="button" class="sys-btn sysprops-tab-btn is-active" role="tab" aria-selected="true" data-tab="general">
              General
            </button>
            <button type="button" class="sys-btn sysprops-tab-btn" role="tab" aria-selected="false" data-tab="hardware">
              Maquinari
            </button>
            <button type="button" class="sys-btn sysprops-tab-btn" role="tab" aria-selected="false" data-tab="storage">
              Emmagatzematge
            </button>
            <button type="button" class="sys-btn sysprops-tab-btn" role="tab" aria-selected="false" data-tab="network">
              Xarxa & Estat
            </button>
          </div>
        </nav>

        <main class="sysprops-content">
          <!-- Panell 1: General -->
          <section class="sysprops-panel is-active" data-panel="general" role="tabpanel">
            <h4 class="sysprops-panel-title">Informació del Sistema</h4>
            <div class="sysprops-specs-table">
              <div class="sysprops-row">
                <span class="sysprops-key">Sistema Operatiu:</span>
                <span class="sysprops-val"><code>${sys.osName} (${sys.osVersion})</code></span>
              </div>
              <div class="sysprops-row">
                <span class="sysprops-key">Host de Sistema:</span>
                <span class="sysprops-val"><code>${sp.host}</code></span>
              </div>
              <div class="sysprops-row">
                <span class="sysprops-key">Edició & Arquitectura:</span>
                <span class="sysprops-val">${sys.architecture}</span>
              </div>
              <div class="sysprops-row">
                <span class="sysprops-key">Marca d'aigua:</span>
                <span class="sysprops-val"><code>${sys.statusWatermark || "4DSU WORKSTATION // READY"}</code></span>
              </div>
              <div class="sysprops-row">
                <span class="sysprops-key">Data de compilació:</span>
                <span class="sysprops-val">${sys.buildDate || "2026-09"}</span>
              </div>
              <div class="sysprops-row">
                <span class="sysprops-key">Estat global:</span>
                <span class="sysprops-val"><span class="sys-tag sys-tag-success">${sp.status}</span></span>
              </div>
            </div>
          </section>

          <!-- Panell 2: Maquinari -->
          <section class="sysprops-panel" data-panel="hardware" role="tabpanel" hidden>
            <h4 class="sysprops-panel-title">Components de Maquinari</h4>
            <div class="sysprops-specs-table">
              <div class="sysprops-row">
                <span class="sysprops-key">Processador:</span>
                <span class="sysprops-val"><code>${sys.specs.processor}</code></span>
              </div>
              <div class="sysprops-row">
                <span class="sysprops-key">Memòria RAM total:</span>
                <span class="sysprops-val"><code>${sp.memoryTotal}</code></span>
              </div>
              <div class="sysprops-row">
                <span class="sysprops-key">Memòria disponible:</span>
                <span class="sysprops-val"><code>${sp.memoryFree}</code></span>
              </div>
              <div class="sysprops-row">
                <span class="sysprops-key">Pantalla:</span>
                <span class="sysprops-val">${sys.specs.video || sp.display}</span>
              </div>
              <div class="sysprops-row">
                <span class="sysprops-key">Controlador d'àudio:</span>
                <span class="sysprops-val">${sys.specs.audio || "Piezo Speaker (Desactivat per defecte)"}</span>
              </div>
            </div>
          </section>

          <!-- Panell 3: Emmagatzematge -->
          <section class="sysprops-panel" data-panel="storage" role="tabpanel" hidden>
            <h4 class="sysprops-panel-title">Unitats i Sistema de Fitxers</h4>
            <div class="sysprops-specs-table">
              <div class="sysprops-row">
                <span class="sysprops-key">Volum arrel (VFS):</span>
                <span class="sysprops-val"><code>/4dsu/root/ (Muntat en mode només lectura)</code></span>
              </div>
              <div class="sysprops-row">
                <span class="sysprops-key">Tipus de sistema:</span>
                <span class="sysprops-val"><code>${sp.filesystem}</code></span>
              </div>
              <div class="sysprops-row">
                <span class="sysprops-key">Capacitat muntada:</span>
                <span class="sysprops-val"><code>${sys.storage}</code></span>
              </div>
              <div class="sysprops-row">
                <span class="sysprops-key">Integritat:</span>
                <span class="sysprops-val"><span class="sys-tag sys-tag-success">VERIFICADA // 100% OK</span></span>
              </div>
            </div>
          </section>

          <!-- Panell 4: Xarxa & Estat -->
          <section class="sysprops-panel" data-panel="network" role="tabpanel" hidden>
            <h4 class="sysprops-panel-title">Connexió i Privacitat</h4>
            <div class="sysprops-specs-table">
              <div class="sysprops-row">
                <span class="sysprops-key">Pila de xarxa:</span>
                <span class="sysprops-val"><code>${sys.specs.network}</code></span>
              </div>
              <div class="sysprops-row">
                <span class="sysprops-key">Seguretat i telemetria:</span>
                <span class="sysprops-val"><span class="sys-tag sys-tag-success">SENSE TELEMETRIA // ZERO COOKIES</span></span>
              </div>
              <div class="sysprops-row">
                <span class="sysprops-key">Temps d'activitat:</span>
                <span class="sysprops-val"><code id="sysprops-uptime">00:00:00</code></span>
              </div>
            </div>
          </section>
        </main>

        <footer class="sysprops-actions">
          <button type="button" class="sys-btn sys-btn-primary" data-open-app="welcome">
            ${getIcon("welcome")} Tornar a Benvinguda
          </button>
          <button type="button" class="sys-btn" data-open-app="files">
            ${getIcon("files")} Explorar fitxers (FILES.EXE)
          </button>
        </footer>
      </div>
    `;
  },

  onMount(winEl) {
    const tabBtns = winEl.querySelectorAll(".sysprops-tab-btn");
    const panels = winEl.querySelectorAll(".sysprops-panel");
    const uptimeEl = winEl.querySelector("#sysprops-uptime");

    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        tabBtns.forEach(b => {
          b.classList.remove("is-active");
          b.setAttribute("aria-selected", "false");
        });
        btn.classList.add("is-active");
        btn.setAttribute("aria-selected", "true");

        const targetTab = btn.getAttribute("data-tab");
        panels.forEach(p => {
          const isTarget = p.getAttribute("data-panel") === targetTab;
          p.hidden = !isTarget;
          p.classList.toggle("is-active", isTarget);
        });
      });
    });

    // Rellotge d'uptime simulat
    let startTime = Date.now();
    const interval = setInterval(() => {
      if (!winEl.isConnected) {
        clearInterval(interval);
        return;
      }
      if (uptimeEl) {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const hrs = String(Math.floor(elapsed / 3600)).padStart(2, "0");
        const mins = String(Math.floor((elapsed % 3600) / 60)).padStart(2, "0");
        const secs = String(elapsed % 60).padStart(2, "0");
        uptimeEl.textContent = `${hrs}:${mins}:${secs}`;
      }
    }, 1000);
  }
};
