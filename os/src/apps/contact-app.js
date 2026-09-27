/**
 * 4dsu OS — CONTACT.EXE
 * Canals de contacte públics (surten de src/content/contacte.yaml via scripts/os-dades.mjs).
 */

import { PORTFOLIO_DATA } from "../data/portfolio-data.js";
import { getIcon } from "../icons.js";

export const contactApp = {
  id: "contact",
  title: PORTFOLIO_DATA.contact.windowTitle || "CONTACT.EXE — Contacte Directe",
  iconName: "contact",
  badge: PORTFOLIO_DATA.contact.badge || "CANAL DE COMUNICACIÓ",
  isDocument: false,
  statusLeft: "CANALS DE CONTACTE",
  statusRight: "4dsu OS",

  render(winBody) {
    const { contact, mail } = PORTFOLIO_DATA;
    const canals = contact.channels || [];
    const icona = (c) => ({ correu: "mail", github: "code", linkedin: "about", instagram: "camera", web: "browser" })[c.type] || "contact";
    winBody.innerHTML = `
      <div class="contact-box">
        <header class="contact-intro-block">
          <div class="contact-meta-header">
            <span class="sys-tag sys-tag-success">CANALS PÚBLICS</span>
            <span class="contact-meta-badge">4dsu OS // ${canals.length} ${canals.length === 1 ? "CANAL" : "CANALS"}</span>
          </div>
          <h3 class="contact-heading">${contact.headline}</h3>
          <p class="contact-intro-text">${contact.intro}</p>
        </header>

        <div class="contact-cards-grid">
          ${canals.map(c => `
            <article class="contact-card">
              <div class="contact-card-icon" aria-hidden="true">${getIcon(icona(c), 24)}</div>
              <div class="contact-card-body">
                <span class="contact-card-label">${c.label}</span>
                <a class="contact-card-value" href="${c.href}" ${c.href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}>${c.value}</a>
              </div>
            </article>
          `).join("")}

          <article class="contact-card contact-card-policy">
            <div class="contact-card-icon" aria-hidden="true">${getIcon("system", 24)}</div>
            <div class="contact-card-body">
              <span class="contact-card-label">Principis de comunicació</span>
              <p class="contact-card-note">
                Cap telemetria, rastrejador ni script de tercers. No s'envia cap dada sense que tu ho decideixis.
              </p>
            </div>
          </article>
        </div>

        <div class="contact-actions-row">
          ${mail.recipient ? `
            <button type="button" class="sys-btn sys-btn-primary" data-open-app="mail">
              ${getIcon("mail")} Obrir client MAIL.EXE
            </button>
          ` : ""}
          <button type="button" class="sys-btn" data-open-app="welcome">
            ${getIcon("welcome")} Tornar a Benvinguda
          </button>
        </div>
      </div>
    `;
  }
};
