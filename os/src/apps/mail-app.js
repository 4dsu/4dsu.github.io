/**
 * 4dsu OS — MAIL.EXE
 * Compositor local de missatges amb suport per a 3 modes operatius:
 * 1. Mode Configurat (generació d'enllaç mailto per a client natiu)
 * 2. Mode No Configurat (avís honest de destinatari pendent i eina de còpia al porta-retalls)
 * 3. Mode Serverless-ready (interfície preparada per a endpoint remot sense secrets al frontend)
 */

import { PORTFOLIO_DATA } from "../data/portfolio-data.js";
import { getIcon } from "../icons.js";

export const mailApp = {
  id: "mail",
  title: PORTFOLIO_DATA.mail.windowTitle || "MAIL.EXE — Escriure Missatge",
  iconName: "mail",
  badge: PORTFOLIO_DATA.mail.badge || "CANAL DE CONTACTE",
  isDocument: false,
  statusLeft: "CANAL DE CONTACTE",
  statusRight: "LOCAL MOCK / MAILTO",

  render(winBody) {
    const { mail } = PORTFOLIO_DATA;
    const isConfigured = Boolean(mail.recipient && mail.recipient.trim() !== "");
    const hasServerlessEndpoint = typeof window !== "undefined" && Boolean(window.__4DSU_API_ENDPOINT__);

    let operationalModeName = "Mode B: No Configurat (Local)";
    if (hasServerlessEndpoint) {
      operationalModeName = "Mode C: Endpoint Serverless Ready";
    } else if (isConfigured) {
      operationalModeName = "Mode A: Client de Correu Local (mailto)";
    }

    winBody.innerHTML = `
      <div class="mail-composer">
        <header class="mail-intro-bar">
          <div class="mail-mode-indicator">
            <span class="sys-tag ${isConfigured ? "sys-tag-success" : "sys-tag-alert"}">${operationalModeName}</span>
            <span class="mail-mode-desc">Zero secrets al client // 100% transparent</span>
          </div>
          <p class="mail-intro-text">${mail.intro}</p>
        </header>

        ${!isConfigured ? `
          <div class="mail-notice-box" role="status">
            <span class="sys-tag sys-tag-alert">AVÍS DE CONFIGURACIÓ</span>
            <p class="mail-notice-text">${mail.setupMessage}</p>
          </div>
        ` : ""}

        <form class="mail-form" id="mail-composer-form" onsubmit="return false;">
          <div class="mail-field-row">
            <label for="mail-input-name" class="mail-label">${mail.fields?.nameLabel || "Nom"}:</label>
            <input type="text" id="mail-input-name" class="sys-input" placeholder="El teu nom o entitat" autocomplete="name" />
          </div>

          <div class="mail-field-row">
            <label for="mail-input-email" class="mail-label">${mail.fields?.emailLabel || "El teu correu"}:</label>
            <input type="email" id="mail-input-email" class="sys-input" placeholder="correu@exemple.com" autocomplete="email" />
          </div>

          <div class="mail-field-row">
            <label for="mail-input-subject" class="mail-label">${mail.fields?.subjectLabel || "Assumpte"}:</label>
            <input type="text" id="mail-input-subject" class="sys-input" value="${mail.subjectPrefix || "Contacte des de 4dsu.me"}" />
          </div>

          <div class="mail-field-row mail-textarea-row">
            <label for="mail-input-message" class="mail-label">${mail.fields?.messageLabel || "Missatge"}:</label>
            <textarea id="mail-input-message" class="sys-textarea" rows="6" placeholder="Escriu aquí el text del teu missatge..."></textarea>
          </div>

          <div class="mail-feedback-banner" id="mail-feedback" hidden></div>

          <div class="mail-form-actions">
            <button type="button" id="btn-mail-send" class="sys-btn sys-btn-primary" ${!isConfigured && !hasServerlessEndpoint ? "disabled title='Encara no hi ha cap adreça de correu pública'" : ""}>
              ${getIcon("mail")} Generar correu (mailto)
            </button>
            <button type="button" id="btn-mail-copy" class="sys-btn">
              ${getIcon("document")} Copiar missatge al porta-retalls
            </button>
            <button type="button" class="sys-btn" data-open-app="contact">
              ${getIcon("contact")} Veure CONTACT.EXE
            </button>
          </div>
        </form>
      </div>
    `;
  },

  onMount(winEl) {
    const sendBtn = winEl.querySelector("#btn-mail-send");
    const copyBtn = winEl.querySelector("#btn-mail-copy");
    const feedbackEl = winEl.querySelector("#mail-feedback");

    function getFormData() {
      const subject = winEl.querySelector("#mail-input-subject")?.value || PORTFOLIO_DATA.mail.subjectPrefix;
      const body = winEl.querySelector("#mail-input-message")?.value || "";
      const name = winEl.querySelector("#mail-input-name")?.value || "";
      const email = winEl.querySelector("#mail-input-email")?.value || "";
      return { name, email, subject, body };
    }

    function showFeedback(text, isSuccess = true) {
      if (!feedbackEl) return;
      feedbackEl.textContent = text;
      feedbackEl.className = `mail-feedback-banner ${isSuccess ? "is-success" : "is-error"}`;
      feedbackEl.removeAttribute("hidden");
      setTimeout(() => {
        if (feedbackEl) feedbackEl.setAttribute("hidden", "");
      }, 4000);
    }

    if (sendBtn && !sendBtn.disabled) {
      sendBtn.addEventListener("click", () => {
        const { mail } = PORTFOLIO_DATA;
        const { name, email, subject, body } = getFormData();

        if (typeof window !== "undefined" && window.__4DSU_API_ENDPOINT__) {
          showFeedback("Enviament a través d'endpoint serverless no habilitat localment.", false);
          return;
        }

        if (!mail.recipient) {
          showFeedback("Encara no hi ha cap adreça de correu pública.", false);
          return;
        }

        const fullBody = `${body}\n\n---\nRemitent: ${name} <${email}>\nEnviat des de 4dsu OS`;
        const mailtoUrl = `mailto:${encodeURIComponent(mail.recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullBody)}`;
        window.location.href = mailtoUrl;
      });
    }

    if (copyBtn) {
      copyBtn.addEventListener("click", async () => {
        const { name, email, subject, body } = getFormData();
        if (!body.trim()) {
          showFeedback("Escriu un missatge abans de copiar.", false);
          return;
        }

        const fullText = `Assumpte: ${subject}\nDe: ${name} <${email}>\n\n${body}`;
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(fullText);
            showFeedback("✓ Text copiat al porta-retalls amb èxit.");
          } else {
            const textarea = document.createElement("textarea");
            textarea.value = fullText;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            showFeedback("✓ Text copiat al porta-retalls.");
          }
        } catch (e) {
          showFeedback("No s'ha pogut copiar automàticament.", false);
        }
      });
    }
  }
};
