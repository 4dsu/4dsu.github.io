/**
 * 4dsu OS — Mascot View & Pixel Art Sprites
 * Gràfics vectorials pixel-native sobre graella estricta de 24×24.
 * Sense gradients, respectant la paleta d'estació de treball 4dsu OS.
 */

import { MASCOT_META } from "./mascot-data.js";
import { getIcon } from "../icons.js";
import { escapeHtml } from "../utils/security.js";

/**
 * SVGs Pixel-Native (24×24, shape-rendering="crispEdges")
 * Paleta:
 * - Grafit xassís: #242836, Bisell clar: #434a5c, Ombra dura: #000000
 * - Pantalla fons enfonsat: #0d0f1a
 * - Fòsfor ambre ulls/boca: #4d8ce0, Ambre intens: #7fb0f0
 * - LED antena: verd #4a9c5d (idle/walk) o ambre #7fb0f0 (react)
 * - Peus mecànics: #2c303d / #1b1d26
 */

export const MASCOT_SPRITES = {
  // 1. Estat observant / esperant (Idle)
  idle: `
    <svg class="mascot-svg mascot-svg-idle" viewBox="0 0 24 24" width="48" height="48" shape-rendering="crispEdges" aria-hidden="true">
      <!-- Antena i LED verd -->
      <rect x="11" y="1" width="2" height="2" fill="#4a9c5d" />
      <rect x="11" y="3" width="2" height="2" fill="#2c303d" />
      <rect x="10" y="5" width="4" height="1" fill="#434a5c" />

      <!-- Xassís de grafit (bisell raised 3D) -->
      <rect x="4" y="6" width="16" height="1" fill="#434a5c" />
      <rect x="4" y="7" width="1" height="10" fill="#434a5c" />
      <rect x="19" y="7" width="1" height="10" fill="#000000" />
      <rect x="4" y="17" width="16" height="1" fill="#000000" />
      <rect x="5" y="7" width="14" height="10" fill="#242836" />

      <!-- Pantalla CRT enfonsada -->
      <rect x="6" y="8" width="12" height="7" fill="#0d0f1a" />
      <rect x="6" y="8" width="12" height="1" fill="#000000" />
      <rect x="6" y="8" width="1" height="7" fill="#000000" />

      <!-- Ulls de fòsfor ambre -->
      <rect x="8" y="10" width="2" height="2" fill="#4d8ce0" />
      <rect x="8" y="10" width="1" height="1" fill="#7fb0f0" />
      <rect x="14" y="10" width="2" height="2" fill="#4d8ce0" />
      <rect x="14" y="10" width="1" height="1" fill="#7fb0f0" />

      <!-- Glif / ranura central -->
      <rect x="11" y="13" width="2" height="1" fill="#2c5a96" />

      <!-- Peus mecànics estables -->
      <rect x="5" y="18" width="3" height="2" fill="#2c303d" />
      <rect x="5" y="20" width="3" height="1" fill="#000000" />
      <rect x="16" y="18" width="3" height="2" fill="#2c303d" />
      <rect x="16" y="20" width="3" height="1" fill="#000000" />
    </svg>
  `,

  // 1B. Estat observant mirant al costat / parpelleig (Microanimació)
  observing: `
    <svg class="mascot-svg mascot-svg-observing" viewBox="0 0 24 24" width="48" height="48" shape-rendering="crispEdges" aria-hidden="true">
      <!-- Antena LED verd viu -->
      <rect x="11" y="1" width="2" height="2" fill="#5ec475" />
      <rect x="11" y="3" width="2" height="2" fill="#2c303d" />
      <rect x="10" y="5" width="4" height="1" fill="#434a5c" />

      <!-- Xassís -->
      <rect x="4" y="6" width="16" height="1" fill="#434a5c" />
      <rect x="4" y="7" width="1" height="10" fill="#434a5c" />
      <rect x="19" y="7" width="1" height="10" fill="#000000" />
      <rect x="4" y="17" width="16" height="1" fill="#000000" />
      <rect x="5" y="7" width="14" height="10" fill="#242836" />

      <!-- Pantalla CRT -->
      <rect x="6" y="8" width="12" height="7" fill="#0d0f1a" />
      <rect x="6" y="8" width="12" height="1" fill="#000000" />
      <rect x="6" y="8" width="1" height="7" fill="#000000" />

      <!-- Ulls desplaçats (mirant a la dreta) -->
      <rect x="9" y="10" width="2" height="2" fill="#4d8ce0" />
      <rect x="10" y="10" width="1" height="1" fill="#7fb0f0" />
      <rect x="15" y="10" width="2" height="2" fill="#4d8ce0" />
      <rect x="16" y="10" width="1" height="1" fill="#7fb0f0" />

      <rect x="12" y="13" width="2" height="1" fill="#2c5a96" />

      <!-- Peus -->
      <rect x="5" y="18" width="3" height="2" fill="#2c303d" />
      <rect x="5" y="20" width="3" height="1" fill="#000000" />
      <rect x="16" y="18" width="3" height="2" fill="#2c303d" />
      <rect x="16" y="20" width="3" height="1" fill="#000000" />
    </svg>
  `,

  // 2A. Caminant Pas A (Walk 1)
  walk1: `
    <svg class="mascot-svg mascot-svg-walk1" viewBox="0 0 24 24" width="48" height="48" shape-rendering="crispEdges" aria-hidden="true">
      <rect x="11" y="1" width="2" height="2" fill="#4a9c5d" />
      <rect x="11" y="3" width="2" height="2" fill="#2c303d" />
      <rect x="10" y="5" width="4" height="1" fill="#434a5c" />

      <rect x="4" y="6" width="16" height="1" fill="#434a5c" />
      <rect x="4" y="7" width="1" height="10" fill="#434a5c" />
      <rect x="19" y="7" width="1" height="10" fill="#000000" />
      <rect x="4" y="17" width="16" height="1" fill="#000000" />
      <rect x="5" y="7" width="14" height="10" fill="#242836" />

      <rect x="6" y="8" width="12" height="7" fill="#0d0f1a" />
      <rect x="6" y="8" width="12" height="1" fill="#000000" />
      <rect x="6" y="8" width="1" height="7" fill="#000000" />

      <!-- Ulls cap endavant -->
      <rect x="9" y="10" width="2" height="2" fill="#4d8ce0" />
      <rect x="9" y="10" width="1" height="1" fill="#7fb0f0" />
      <rect x="15" y="10" width="2" height="2" fill="#4d8ce0" />
      <rect x="15" y="10" width="1" height="1" fill="#7fb0f0" />
      <rect x="12" y="13" width="2" height="1" fill="#2c5a96" />

      <!-- Peu esquerre avançat, peu dret alçat mecànic -->
      <rect x="4" y="18" width="4" height="2" fill="#2c303d" />
      <rect x="4" y="20" width="4" height="1" fill="#000000" />
      <rect x="17" y="18" width="2" height="1" fill="#434a5c" />
    </svg>
  `,

  // 2B. Caminant Pas B (Walk 2)
  walk2: `
    <svg class="mascot-svg mascot-svg-walk2" viewBox="0 0 24 24" width="48" height="48" shape-rendering="crispEdges" aria-hidden="true">
      <rect x="11" y="2" width="2" height="2" fill="#4a9c5d" />
      <rect x="11" y="4" width="2" height="2" fill="#2c303d" />
      <rect x="10" y="6" width="4" height="1" fill="#434a5c" />

      <!-- Xassís amb petit salt de 1px -->
      <rect x="4" y="7" width="16" height="1" fill="#434a5c" />
      <rect x="4" y="8" width="1" height="10" fill="#434a5c" />
      <rect x="19" y="8" width="1" height="10" fill="#000000" />
      <rect x="4" y="18" width="16" height="1" fill="#000000" />
      <rect x="5" y="8" width="14" height="10" fill="#242836" />

      <rect x="6" y="9" width="12" height="7" fill="#0d0f1a" />
      <rect x="6" y="9" width="12" height="1" fill="#000000" />
      <rect x="6" y="9" width="1" height="7" fill="#000000" />

      <rect x="9" y="11" width="2" height="2" fill="#4d8ce0" />
      <rect x="9" y="11" width="1" height="1" fill="#7fb0f0" />
      <rect x="15" y="11" width="2" height="2" fill="#4d8ce0" />
      <rect x="15" y="11" width="1" height="1" fill="#7fb0f0" />
      <rect x="12" y="14" width="2" height="1" fill="#2c5a96" />

      <!-- Peu dret avançat, peu esquerre alçat -->
      <rect x="5" y="19" width="2" height="1" fill="#434a5c" />
      <rect x="16" y="19" width="4" height="2" fill="#2c303d" />
      <rect x="16" y="21" width="4" height="1" fill="#000000" />
    </svg>
  `,

  // 3. Estat parlant / reaccionant (Reacting / Talking)
  react: `
    <svg class="mascot-svg mascot-svg-react" viewBox="0 0 24 24" width="48" height="48" shape-rendering="crispEdges" aria-hidden="true">
      <!-- Antena amb LED ambre brillant en transmissió -->
      <rect x="11" y="1" width="2" height="2" fill="#7fb0f0" />
      <rect x="10" y="0" width="4" height="1" fill="#2c5a96" />
      <rect x="11" y="3" width="2" height="2" fill="#2c303d" />
      <rect x="10" y="5" width="4" height="1" fill="#434a5c" />

      <rect x="4" y="6" width="16" height="1" fill="#434a5c" />
      <rect x="4" y="7" width="1" height="10" fill="#434a5c" />
      <rect x="19" y="7" width="1" height="10" fill="#000000" />
      <rect x="4" y="17" width="16" height="1" fill="#000000" />
      <rect x="5" y="7" width="14" height="10" fill="#242836" />

      <rect x="6" y="8" width="12" height="7" fill="#0d0f1a" />
      <rect x="6" y="8" width="12" height="1" fill="#000000" />
      <rect x="6" y="8" width="1" height="7" fill="#000000" />

      <!-- Ulls amples/atents de fòsfor -->
      <rect x="8" y="9" width="3" height="3" fill="#4d8ce0" />
      <rect x="8" y="9" width="2" height="2" fill="#7fb0f0" />
      <rect x="13" y="9" width="3" height="3" fill="#4d8ce0" />
      <rect x="13" y="9" width="2" height="2" fill="#7fb0f0" />

      <!-- Boca digital transmetent dades -->
      <rect x="11" y="13" width="2" height="2" fill="#7fb0f0" />

      <!-- Peus -->
      <rect x="5" y="18" width="3" height="2" fill="#2c303d" />
      <rect x="5" y="20" width="3" height="1" fill="#000000" />
      <rect x="16" y="18" width="3" height="2" fill="#2c303d" />
      <rect x="16" y="20" width="3" height="1" fill="#000000" />
    </svg>
  `
};

/**
 * Crea l'element DOM interactiu de la mascota de l'escriptori
 */
export function createMascotElement() {
  const el = document.createElement("div");
  el.id = "desktop-mascot";
  el.className = "desktop-mascot is-idle";
  el.setAttribute("role", "button");
  el.setAttribute("tabindex", "0");
  el.setAttribute("aria-label", "Mascota DSU.EXE del sistema — Prem Enter per parlar");
  el.setAttribute("aria-haspopup", "dialog");

  el.innerHTML = `
    <div class="mascot-speech-bubble" aria-hidden="true">[ 4DSU ]</div>
    <div class="mascot-sprite-wrap">
      ${MASCOT_SPRITES.idle}
    </div>
    <span class="visually-hidden">Mascota del sistema 4dsu OS. Prem Enter o fes clic per obrir el terminal de conversa PROCESS_4DSU.EXE.</span>
  `;

  return el;
}

/**
 * Actualitza l'estat visual de la mascota (SVG i orientació)
 */
export function renderMascotVisualState(element, { state = "idle", facing = "right", speechText = null }) {
  if (!element) return;

  const spriteWrap = element.querySelector(".mascot-sprite-wrap");
  const bubble = element.querySelector(".mascot-speech-bubble");

  let spriteHtml = MASCOT_SPRITES.idle;
  if (state === "walk1") spriteHtml = MASCOT_SPRITES.walk1;
  else if (state === "walk2") spriteHtml = MASCOT_SPRITES.walk2;
  else if (state === "observing") spriteHtml = MASCOT_SPRITES.observing;
  else if (state === "react") spriteHtml = MASCOT_SPRITES.react;

  if (spriteWrap && spriteWrap.innerHTML !== spriteHtml) {
    spriteWrap.innerHTML = spriteHtml;
  }

  element.classList.toggle("is-facing-left", facing === "left");
  element.classList.toggle("is-reacting", state === "react");

  if (bubble) {
    if (speechText) {
      bubble.textContent = speechText;
      bubble.classList.add("is-visible");
    } else if (state === "react") {
      bubble.textContent = "[ 4DSU ]";
      bubble.classList.add("is-visible");
    } else {
      bubble.classList.remove("is-visible");
    }
  }
}

/**
 * Contingut estructurat per a la finestra PROCESS_4DSU.EXE de WindowManager
 */
export function getMascotWindowContent() {
  return {
    title: MASCOT_META.fileName,
    iconName: "system",
    badge: `PID_${MASCOT_META.pid}`,
    isDocument: false,
    statusLeft: MASCOT_META.statusOk,
    statusRight: MASCOT_META.statusMode,
    bodyHtml: `
      <div class="mascot-chat-box">
        <header class="mascot-chat-banner">
          <div class="mascot-chat-banner-left">
            <span class="mascot-chat-avatar" aria-hidden="true">${MASCOT_SPRITES.idle}</span>
            <div class="mascot-chat-meta">
              <span class="mascot-chat-procname">${MASCOT_META.displayName} // TERMINAL DE CONVERSA</span>
              <span class="mascot-chat-desc">Procés resident de 4dsu OS. Consulta el contingut del portfolio amb dades verificades.</span>
            </div>
          </div>
          <span class="sys-tag sys-tag-success mascot-status-tag">ONLINE</span>
        </header>

        <div class="mascot-prompts-tray" aria-label="Preguntes ràpides recomanades">
          <span class="mascot-prompts-label">Preguntes ràpides:</span>
          <div class="mascot-chips-row">
            <button type="button" class="sys-btn sys-btn-chip mascot-chip" data-prompt="Qui és 4dsu?">Qui és 4dsu?</button>
            <button type="button" class="sys-btn sys-btn-chip mascot-chip" data-prompt="Quins projectes hi ha?">Projectes?</button>
            <button type="button" class="sys-btn sys-btn-chip mascot-chip" data-prompt="Quina formació i estudis té?">Estudis & CV?</button>
            <button type="button" class="sys-btn sys-btn-chip mascot-chip" data-prompt="Quines tecnologies domina?">Tecnologies?</button>
            <button type="button" class="sys-btn sys-btn-chip mascot-chip" data-prompt="Com puc contactar?">Contacte?</button>
            <button type="button" class="sys-btn sys-btn-chip mascot-chip" data-prompt="Per què un sistema operatiu retro?">Per què retro?</button>
          </div>
        </div>

        <div id="mascot-chat-messages" class="mascot-chat-stream" role="log" aria-live="polite" aria-label="Historial de missatges">
          <article class="mascot-msg mascot-msg-system">
            <div class="msg-header">
              <span class="msg-author">[DSU.EXE]</span>
              <time class="msg-time">00:00:00</time>
            </div>
            <div class="msg-bubble">
              <p>Hola! Sóc DSU.EXE, el procés resident de l'escriptori. Puc respondre qualsevol dubte sobre el perfil de 4dsu, els projectes, el currículum, les notes o les formes de contacte.</p>
            </div>
          </article>
        </div>

        <form id="mascot-chat-form" class="mascot-chat-input-bar">
          <div class="mascot-input-wrap">
            <label for="mascot-input-field" class="visually-hidden">Escriu una pregunta per a DSU.EXE</label>
            <input type="text" id="mascot-input-field" class="sys-input mascot-input" placeholder="Pregunta sobre 4dsu, projectes, CV..." maxlength="200" autocomplete="off" />
            <button type="submit" id="btn-mascot-send" class="sys-btn sys-btn-primary mascot-btn-send">
              <span>Enviar [↵]</span>
            </button>
          </div>
        </form>
      </div>
    `
  };
}

/**
 * Afegeix un missatge a l'historial del xat
 */
export function appendChatMessage(container, { sender = "DSU.EXE", text = "", actions = [], isUser = false }) {
  if (!container) return;

  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;

  const msgEl = document.createElement("article");
  msgEl.className = `mascot-msg ${isUser ? "mascot-msg-user" : "mascot-msg-assistant"}`;

  let actionsHtml = "";
  if (Array.isArray(actions) && actions.length > 0) {
    actionsHtml = `
      <div class="msg-actions">
        ${actions.map(act => `
          <button type="button" class="sys-btn sys-btn-subordinated msg-action-btn" data-open-app="${escapeHtml(act.appId)}">
            ${getIcon(act.appId || "document", 16)} ${escapeHtml(act.label)}
          </button>
        `).join("")}
      </div>
    `;
  }

  msgEl.innerHTML = `
    <div class="msg-header">
      <span class="msg-author">[${escapeHtml(sender)}]</span>
      <time class="msg-time">${timeStr}</time>
    </div>
    <div class="msg-bubble">
      <p>${escapeHtml(text)}</p>
      ${actionsHtml}
    </div>
  `;

  container.appendChild(msgEl);
  container.scrollTop = container.scrollHeight;
}
