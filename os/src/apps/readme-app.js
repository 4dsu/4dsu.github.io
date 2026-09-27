/**
 * 4dsu OS — README.TXT / BENVINGUDA.EXE
 * Finestra d'orientació inicial i guia ràpida del sistema.
 */

import { PORTFOLIO_DATA } from "../data/portfolio-data.js";
import { getIcon } from "../icons.js";

export const readmeApp = {
  id: "welcome",
  title: PORTFOLIO_DATA.welcome.windowTitle,
  iconName: "welcome",
  badge: PORTFOLIO_DATA.welcome.badge,
  isDocument: false,
  statusLeft: "README.TXT // GUIA DEL SISTEMA",
  statusRight: "4dsu OS",

  render(winBody) {
    const { welcome } = PORTFOLIO_DATA;
    winBody.innerHTML = `
      <div class="welcome-box">
        <div class="welcome-pitch">
          <h3 class="welcome-heading">${welcome.pitchHeading}</h3>
          <p class="welcome-lead"><strong>${welcome.pitchSummary}</strong></p>
          <p class="welcome-subtext">${welcome.explanation}</p>
        </div>

        <div class="welcome-help-note">
          <span class="welcome-help-pip" aria-hidden="true">[i]</span>
          <p class="welcome-help-text">${welcome.helpText || "Selecciona una aplicació i prem Enter per obrir-la."}</p>
        </div>

        <div class="welcome-primary-action">
          <button type="button" class="sys-btn sys-btn-primary welcome-main-btn" id="btn-welcome-open-projects" data-open-app="projects">
            ${getIcon("folder")} OBRIR PROJECTES
          </button>
        </div>

        <div class="welcome-subordinated-block">
          <span class="welcome-subordinated-title">Altres fitxers del sistema:</span>
          <div class="welcome-subordinated-list">
            <button type="button" class="sys-btn sys-btn-subordinated" data-open-app="about">
              ${getIcon("about")} ABOUT.EXE
            </button>
            <button type="button" class="sys-btn sys-btn-subordinated" data-open-app="cv">
              ${getIcon("cv")} CV.PDF
            </button>
            <button type="button" class="sys-btn sys-btn-subordinated" data-open-app="photos">
              ${getIcon("camera")} PHOTOS/
            </button>
            <button type="button" class="sys-btn sys-btn-subordinated" data-open-app="notes">
              ${getIcon("notes")} NOTES.TXT
            </button>
            <button type="button" class="sys-btn sys-btn-subordinated" data-open-app="lab">
              ${getIcon("lab")} LAB/
            </button>
            <button type="button" class="sys-btn sys-btn-subordinated" data-open-app="contact">
              ${getIcon("contact")} CONTACT.EXE
            </button>
            <button type="button" class="sys-btn sys-btn-subordinated" data-open-app="mail">
              ${getIcon("mail")} MAIL.EXE
            </button>
            <button type="button" class="sys-btn sys-btn-subordinated" data-open-app="search">
              ${getIcon("search")} SEARCH.EXE
            </button>
            <button type="button" class="sys-btn sys-btn-subordinated" data-open-app="sysprops">
              ${getIcon("system")} SPECS
            </button>
          </div>
        </div>

        <div class="welcome-footer-note">
          <p class="welcome-note-text">
            <span class="sys-tag">CONSELL</span> Pots canviar a la <strong>Vista Lineal Accessible</strong> en qualsevol moment des de la barra superior.
          </p>
        </div>
      </div>
    `;
  }
};
