/**
 * 4dsu OS — SYSTEM_ERROR.EXE
 * Diàleg de recuperació d'errors de ruta 404 del sistema operatiu retro.
 */

import { PORTFOLIO_DATA } from "../data/portfolio-data.js";
import { getIcon } from "../icons.js";
import { escapeHtml } from "../utils/security.js";

export const sysErrorApp = {
  id: "system_error",
  title: PORTFOLIO_DATA.systemError.windowTitle,
  iconName: "warning",
  badge: PORTFOLIO_DATA.systemError.badge,
  isDocument: false,
  statusLeft: PORTFOLIO_DATA.systemError.statusLeft,
  statusRight: PORTFOLIO_DATA.systemError.statusRight,

  render(winBody, wm, params = {}) {
    const err = PORTFOLIO_DATA.systemError;
    const targetRoute = params?.route || wm?.lastUnknownRoute || "desconeguda";
    const displayRoute = targetRoute.startsWith("#") || targetRoute.startsWith("/")
      ? targetRoute
      : (targetRoute.startsWith("app=") ? `#${targetRoute}` : `#app=${encodeURIComponent(targetRoute)}`);

    winBody.innerHTML = `
      <div class="system-error-box">
        <div class="system-error-banner">
          <span class="system-error-icon" aria-hidden="true">${getIcon("warning", 32)}</span>
          <div class="system-error-header-text">
            <h3 class="system-error-headline">${escapeHtml(err.headline)}</h3>
            <p class="system-error-code">${escapeHtml(err.code)}</p>
          </div>
        </div>
        <p class="system-error-desc">${escapeHtml(err.message)}</p>
        <div class="system-error-details system-error-diag">
          <p><strong>Ruta sol·licitada:</strong> <code>${escapeHtml(displayRoute)}</code></p>
          <p><strong>Diagnòstic:</strong> L'adreça o aplicació especificada no està registrada en aquest microordinador.</p>
        </div>
        <div class="system-error-actions">
          <button type="button" class="sys-btn sys-btn-primary" data-open-app="welcome" data-action="open-app" data-app="welcome">
            ${getIcon("welcome")} OBRIR BENVINGUDA
          </button>
          <button type="button" class="sys-btn" data-open-app="projects" data-action="open-app" data-app="projects">
            ${getIcon("folder")} OBRIR PROJECTES
          </button>
          <button type="button" class="sys-btn" data-action="switch-linear">
            ${getIcon("linear")} VISTA ACCESSIBLE
          </button>
        </div>
      </div>
    `;
  }
};
