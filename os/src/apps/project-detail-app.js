/**
 * 4dsu OS — PROJECT.EXE
 * Visor de casos d'estudi detallats d'enginyeria segons docs/CONTENT-MODEL.md.
 * Estructura: Problema, Paper, Procés, Resultats, Pila tecnològica i Enllaços.
 */

import { PORTFOLIO_DATA } from "../data/portfolio-data.js";
import { getIcon } from "../icons.js";
import { escapeHtml, sanitizeUrl } from "../utils/security.js";

export const projectDetailApp = {
  id: "project",
  title: "PROJECT.EXE — Cas d'Estudi",
  iconName: "document",
  badge: "CAS D'ESTUDI",
  isDocument: true,
  statusLeft: "CAS D'ESTUDI // DETALL",
  statusRight: "VERIFICAT",

  render(winBody, wm, params = {}) {
    const { projects } = PORTFOLIO_DATA;
    const projectId = params?.projectId || params?.id || null;
    const project = projectId && projects?.items ? projects.items.find(p => p.id === projectId) : null;

    if (project) {
      winBody.innerHTML = `
        <article class="document-case-study project-case-study">
          <header class="doc-header">
            <div class="doc-meta-bar">
              <span class="sys-tag sys-tag-success">${escapeHtml(project.badge || "PROJECTE VERIFICAT")}</span>
              <span class="doc-meta-filename"><code>${escapeHtml(project.fileName || "PROJECT.EXE")}</code></span>
            </div>
            <h2 class="doc-title">${escapeHtml(project.title)}</h2>
            <p class="doc-lead">${escapeHtml(project.summary)}</p>
          </header>

          <hr class="doc-rule" />

          <section class="doc-section">
            <h3 class="doc-heading">1. Problema o necessitat</h3>
            <p class="doc-paragraph">${escapeHtml(project.problem)}</p>
          </section>

          <section class="doc-section">
            <h3 class="doc-heading">2. El meu paper</h3>
            <p class="doc-paragraph">${escapeHtml(project.role)}</p>
          </section>

          <section class="doc-section">
            <h3 class="doc-heading">3. Procés i decisions tècniques</h3>
            <ol class="case-study-steps">
              ${(project.process || []).map(step => `
                <li class="case-study-step">
                  <p>${escapeHtml(step)}</p>
                </li>
              `).join("")}
            </ol>
          </section>

          <section class="doc-section">
            <h3 class="doc-heading">4. Resultats i aprenentatges</h3>
            <p class="doc-paragraph">${escapeHtml(project.result)}</p>
          </section>

          <section class="doc-section">
            <h3 class="doc-heading">5. Pila tecnològica</h3>
            <div class="case-study-stack">
              ${(project.stack || []).map(tech => `<span class="sys-chip">${escapeHtml(tech)}</span>`).join("")}
            </div>
          </section>

          ${project.media && project.media.length > 0 ? `
            <section class="doc-section">
              <h3 class="doc-heading">6. Material gràfic i esquemes</h3>
              <div class="case-study-media-grid">
                ${project.media.map(m => `
                  <figure class="case-study-figure">
                    <img src="${escapeHtml(sanitizeUrl(m.src))}" alt="${escapeHtml(m.alt)}" class="case-study-img" loading="lazy" />
                    <figcaption class="case-study-caption">${escapeHtml(m.alt)}</figcaption>
                  </figure>
                `).join("")}
              </div>
            </section>
          ` : ""}

          ${project.links && (project.links.demo || project.links.repository) ? `
            <section class="doc-section case-study-links-section">
              <h3 class="doc-heading">7. Enllaços i dipòsit</h3>
              <div class="case-study-actions">
                ${project.links.demo ? `
                  <a href="${escapeHtml(sanitizeUrl(project.links.demo))}" class="sys-btn sys-btn-primary" target="_blank" rel="noopener noreferrer">
                    Obrir demo externa ${getIcon("arrowRight")}
                  </a>
                ` : ""}
                ${project.links.repository ? `
                  <a href="${escapeHtml(sanitizeUrl(project.links.repository))}" class="sys-btn" target="_blank" rel="noopener noreferrer">
                    ${getIcon("code")} Dipòsit de codi
                  </a>
                ` : ""}
              </div>
            </section>
          ` : ""}

          <footer class="doc-footer">
            <button type="button" class="sys-btn" data-open-app="projects">
              ${getIcon("folder")} ← Tornar a PROJECTS/
            </button>
          </footer>
        </article>
      `;
    } else {
      // Estat honest de documentació d'especificació de casos d'estudi
      winBody.innerHTML = `
        <article class="document-case-study project-case-study">
          <header class="doc-header">
            <div class="doc-meta-bar">
              <span class="sys-tag sys-tag-alert">ESPECIFICACIÓ DE SISTEMA</span>
              <span class="doc-meta-filename"><code>PROJECT.EXE // MODEL DE CAS D'ESTUDI</code></span>
            </div>
            <h2 class="doc-title">PROJECT.EXE — Visor de Casos d'Estudi</h2>
            <p class="doc-lead">
              Estructura formal per a la documentació exhaustiva i honesta de projectes d'enginyeria a 4dsu OS.
            </p>
          </header>

          <hr class="doc-rule" />

          <section class="doc-section">
            <h3 class="doc-heading">Metodologia de documentació</h3>
            <p class="doc-paragraph">
              A 4dsu OS, cada projecte presentat com a cas d'estudi ha de complir els principis de claredat, rigor tècnic i absència d'artificis. No es publiquen llistes de tecnologies desconnectades de la realitat; cada document respon a cinc preguntes clau:
            </p>
          </section>

          <div class="spec-sections-list">
            <div class="spec-section-card">
              <div class="spec-section-num">[01]</div>
              <div class="spec-section-content">
                <h4 class="spec-section-title">Definició del problema</h4>
                <p class="spec-section-text">
                  Descripció concreta del context, el coll d'ampolla o la necessitat real abans de seleccionar cap eina o llenguatge.
                </p>
              </div>
            </div>

            <div class="spec-section-card">
              <div class="spec-section-num">[02]</div>
              <div class="spec-section-content">
                <h4 class="spec-section-title">Paper i responsabilitat</h4>
                <p class="spec-section-text">
                  Atribució honesta: què va fer 4dsu exactament (arquitectura, implementació en C, optimització, protocols) i quines parts van ser externes.
                </p>
              </div>
            </div>

            <div class="spec-section-card">
              <div class="spec-section-num">[03]</div>
              <div class="spec-section-content">
                <h4 class="spec-section-title">Procés i decisions tècniques</h4>
                <p class="spec-section-text">
                  Lògica pas a pas, compromisos d'enginyeria (trade-offs) avaluats, hipòtesis inicials i canvis de rumb justificats.
                </p>
              </div>
            </div>

            <div class="spec-section-card">
              <div class="spec-section-num">[04]</div>
              <div class="spec-section-content">
                <h4 class="spec-section-title">Resultats concrets i aprenentatges</h4>
                <p class="spec-section-text">
                  Dades verificades, rendiment mesurat i lliçons apreses aplicables a futurs projectes de sistemes.
                </p>
              </div>
            </div>

            <div class="spec-section-card">
              <div class="spec-section-num">[05]</div>
              <div class="spec-section-content">
                <h4 class="spec-section-title">Pila tecnològica i codi font</h4>
                <p class="spec-section-text">
                  Llenguatges, biblioteques i entorns d'execució estrictament necessaris, amb enllaços als dipòsits públics verificats.
                </p>
              </div>
            </div>
          </div>

          <div class="doc-banner-info">
            <div class="doc-banner-header">
              <span class="sys-tag sys-tag-success">ESTAT ACTUAL</span>
              <strong>Carpeta PROJECTS/ en preparació</strong>
            </div>
            <p>
              Els projectes reals s'estan redactant seguint aquest estàndard abans de publicar-se. Pots consultar el directori complet a PROJECTS/.
            </p>
            <div class="doc-banner-actions">
              <button type="button" class="sys-btn sys-btn-primary" data-open-app="projects">
                ${getIcon("folder")} Obrir directori PROJECTS/
              </button>
              <button type="button" class="sys-btn" data-open-app="welcome">
                ${getIcon("welcome")} Tornar a Benvinguda
              </button>
            </div>
          </div>
        </article>
      `;
    }
  }
};
