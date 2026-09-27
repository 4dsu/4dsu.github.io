/**
 * 4dsu OS — Vista Lineal Accessible
 * Proporciona una lectura seqüencial i accessible de tot el portfolio segons WCAG 2.2 AA.
 * Estètica integrada de sistema retro (panels de treball, rètols tècnics, documents clars).
 * Icones vectorials retro en SVG (sense emojis).
 */

import { PORTFOLIO_DATA } from "../data/portfolio-data.js";
import { getIcon } from "../icons.js";

export function generateLinearHtml(data = PORTFOLIO_DATA) {
  const { welcome, about, projects, cv, notes, contact, system } = data;

  return `
    <header class="linear-header" role="banner">
      <div class="linear-container">
        <div class="linear-brand">
          <span class="linear-logo" aria-hidden="true">${getIcon("system", 22)} 4DSU OS // LECTURA</span>
          <div>
            <h1 class="linear-site-title">4dsu.me</h1>
            <p class="linear-site-tagline">${system.tagline}</p>
          </div>
        </div>
        <div class="linear-controls">
          <button type="button" class="sys-btn sys-btn-primary btn-switch-desktop" id="btn-return-desktop">
            ${getIcon("desktop")} Tornar a l'escriptori
          </button>
        </div>
      </div>
      <nav class="linear-nav" aria-label="Navegació de la vista lineal">
        <div class="linear-container">
          <ul class="linear-nav-list" role="list">
            <li><a href="#linear-welcome" class="linear-nav-link" aria-current="location"><span class="nav-idx">[01]</span> Inici</a></li>
            <li><a href="#linear-about" class="linear-nav-link"><span class="nav-idx">[02]</span> Sobre mi</a></li>
            <li><a href="#linear-projects" class="linear-nav-link"><span class="nav-idx">[03]</span> Projectes</a></li>
            <li><a href="#linear-cv" class="linear-nav-link"><span class="nav-idx">[04]</span> Currículum</a></li>
            <li><a href="#linear-notes" class="linear-nav-link"><span class="nav-idx">[05]</span> Notes</a></li>
            <li><a href="#linear-contact" class="linear-nav-link"><span class="nav-idx">[06]</span> Contacte</a></li>
          </ul>
        </div>
      </nav>
    </header>

    <main class="linear-main" id="linear-content" tabindex="-1">
      <div class="linear-container">
        
        <!-- Benvinguda / Pitch de 10 segons -->
        <section id="linear-welcome" class="linear-section linear-sys-panel linear-hero" aria-labelledby="linear-welcome-title">
          <div class="linear-panel-header">
            <span class="linear-sys-badge">${welcome.badge}</span>
            <span class="linear-panel-meta">GUIA_INICI // 4dsu OS</span>
          </div>
          <div class="linear-panel-body">
            <h2 id="linear-welcome-title" class="linear-hero-title">${welcome.pitchHeading}</h2>
            <p class="linear-hero-pitch">${welcome.pitchSummary}</p>
            <p class="linear-hero-subtext">${welcome.explanation}</p>
            <div class="linear-hero-actions">
              <a href="#linear-projects" class="sys-btn sys-btn-primary">
                ${getIcon("folder")} Explorar projectes
              </a>
              <a href="#linear-about" class="sys-btn">
                ${getIcon("about")} Llegir perfil
              </a>
              <a href="#linear-contact" class="sys-btn">
                ${getIcon("contact")} Contactar
              </a>
            </div>

            <aside class="linear-mascot-callout" aria-label="Assistent de conversa DSU.EXE">
              <p class="linear-mascot-pitch">Vols fer preguntes interactives sobre el portfolio al procés resident DSU.EXE?</p>
              <button type="button" class="sys-btn sys-btn-primary" data-mascot-action="talk">
                ${getIcon("system")} Parlar amb la mascota (DSU.EXE)
              </button>
            </aside>
          </div>
        </section>

        <!-- Sobre mi -->
        <section id="linear-about" class="linear-section linear-sys-panel" aria-labelledby="linear-about-title">
          <div class="linear-panel-header">
            <span class="linear-sys-badge">${about.fileName}</span>
            <span class="linear-panel-meta">[■ NOMÉS LECTURA]</span>
          </div>
          <div class="linear-panel-body">
            <div class="linear-section-title-wrap">
              <h2 id="linear-about-title" class="linear-section-title">${about.windowTitle}</h2>
              <p class="linear-lead-role">${about.role}</p>
            </div>
            
            <div class="linear-prose">
              ${about.bio.map(p => `<p>${p}</p>`).join("")}
            </div>

            <div class="linear-subblock">
              <h3 class="linear-subheading">Pilars d'interès tècnic</h3>
              <div class="linear-grid-pillars">
                ${about.pillars.map(p => `
                  <div class="linear-pillar-box">
                    <h4 class="linear-pillar-title">${p.title}</h4>
                    <p class="linear-pillar-body">${p.description}</p>
                  </div>
                `).join("")}
              </div>
            </div>

            <div class="linear-subblock">
              <h3 class="linear-subheading">Principis de treball</h3>
              <ul class="linear-principles-list">
                ${about.principles.map(item => `<li><span class="linear-bullet" aria-hidden="true">[▶]</span> <span>${item}</span></li>`).join("")}
              </ul>
            </div>
          </div>
        </section>

        <!-- Projectes -->
        <section id="linear-projects" class="linear-section linear-sys-panel" aria-labelledby="linear-projects-title">
          <div class="linear-panel-header">
            <span class="linear-sys-badge">${projects.fileName}</span>
            <span class="linear-panel-meta">${projects.emptyState.statusText}</span>
          </div>
          <div class="linear-panel-body">
            <div class="linear-section-title-wrap">
              <h2 id="linear-projects-title" class="linear-section-title">${projects.windowTitle}</h2>
              <p class="linear-lead-role">${projects.intro}</p>
            </div>

            ${projects.items.length > 0 ? `
              <div class="linear-projects-list">
                ${projects.items.map(item => `
                  <article class="linear-project-case" aria-labelledby="case-${item.id}-title">
                    <div class="linear-project-header">
                      <span class="sys-tag-alert">${item.badge}</span>
                      <h3 id="case-${item.id}-title" class="linear-project-title">${item.title} (${item.fileName})</h3>
                      <p class="linear-project-summary">${item.summary}</p>
                    </div>
                  </article>
                `).join("")}
              </div>
            ` : `
              <div class="linear-empty-state">
                <div class="linear-empty-header">
                  <span class="linear-empty-icon" aria-hidden="true">${getIcon("folder", 28)}</span>
                  <div>
                    <h3 class="linear-empty-title">${projects.emptyState.title}</h3>
                    <span class="sys-tag sys-tag-success">${projects.emptyState.statusText}</span>
                  </div>
                </div>
                <p class="linear-empty-message">${projects.emptyState.message}</p>
                <div class="linear-empty-actions">
                  <a href="#linear-about" class="sys-btn">${getIcon("about")} Sobre mi</a>
                  <a href="#linear-cv" class="sys-btn">${getIcon("cv")} Currículum</a>
                  <a href="#linear-contact" class="sys-btn">${getIcon("contact")} Contactar</a>
                </div>
              </div>
            `}
          </div>
        </section>

        <!-- Currículum -->
        <section id="linear-cv" class="linear-section linear-sys-panel linear-doc-paper" aria-labelledby="linear-cv-title">
          <div class="linear-panel-header">
            <span class="linear-sys-badge">${cv.fileName}</span>
            <span class="linear-panel-meta">${cv.badge}</span>
          </div>
          <div class="linear-paper-sheet">
            <div class="linear-cv-header">
              <div class="linear-cv-title-block">
                <h2 id="linear-cv-title" class="linear-paper-title">${cv.name}</h2>
                <p class="linear-paper-subtitle">${cv.title}</p>
              </div>
              <span class="linear-stamp" aria-hidden="true">CONSULTA // EN REVISIÓ</span>
            </div>
            
            <p class="linear-paper-summary">${cv.summary}</p>

            <hr class="linear-paper-rule" />

            <div class="linear-paper-section">
              <h3 class="linear-paper-heading">Formació Acadèmica</h3>
              <div class="linear-paper-entries">
                ${cv.education.map(edu => `
                  <div class="linear-edu-item">
                    <div class="linear-edu-top">
                      <strong class="linear-degree-name">${edu.degree}</strong>
                      <span class="linear-period-tag">${edu.period}</span>
                    </div>
                    ${edu.institution ? `<div class="linear-institution-notice">${edu.institution}</div>` : ""}
                    ${edu.description ? `<p class="linear-edu-desc">${edu.description}</p>` : ""}
                  </div>
                `).join("")}
              </div>
            </div>

            <hr class="linear-paper-rule" />

            <div class="linear-paper-section">
              <h3 class="linear-paper-heading">Competències Tècniques</h3>
              <div class="linear-skills-grid">
                ${cv.skills.map(group => `
                  <div class="linear-skill-box">
                    <h4 class="linear-skill-category">${group.category}</h4>
                    <ul class="linear-skill-list">
                      ${group.items.map(item => `<li>${item}</li>`).join("")}
                    </ul>
                  </div>
                `).join("")}
              </div>
            </div>

            <div class="linear-paper-footer">
              <p class="linear-paper-note">${cv.downloadNote}</p>
            </div>
          </div>
        </section>

        <!-- Notes -->
        <section id="linear-notes" class="linear-section linear-sys-panel" aria-labelledby="linear-notes-title">
          <div class="linear-panel-header">
            <span class="linear-sys-badge">${notes.fileName}</span>
            <span class="linear-panel-meta">${notes.entries.length} APUNTS REGISTRATS</span>
          </div>
          <div class="linear-panel-body">
            <div class="linear-section-title-wrap">
              <h2 id="linear-notes-title" class="linear-section-title">${notes.windowTitle}</h2>
              <p class="linear-lead-role">${notes.intro}</p>
            </div>

            <div class="linear-notes-stack">
              ${notes.entries.map(note => `
                <article class="linear-note-entry">
                  <div class="linear-note-header">
                    <time class="sys-timestamp">[${note.date}]</time>
                    <h3 class="linear-note-title">${note.title}</h3>
                  </div>
                  <p class="linear-note-content">${note.content}</p>
                </article>
              `).join("")}
            </div>
          </div>
        </section>

        <!-- Contacte -->
        <section id="linear-contact" class="linear-section linear-sys-panel" aria-labelledby="linear-contact-title">
          <div class="linear-panel-header">
            <span class="linear-sys-badge">${contact.fileName}</span>
            <span class="linear-panel-meta">${contact.badge}</span>
          </div>
          <div class="linear-panel-body">
            <div class="linear-section-title-wrap">
              <h2 id="linear-contact-title" class="linear-section-title">${contact.windowTitle}</h2>
              <p class="linear-lead-role">${contact.intro}</p>
              ${contact.statusNote ? `<div class="contact-unconfirmed-notice"><span class="sys-tag sys-tag-alert">AVÍS</span> ${contact.statusNote}</div>` : ""}
            </div>

            <div class="linear-contact-grid">
              ${contact.links.map(link => `
                <div class="linear-contact-card">
                  <div class="linear-contact-icon" aria-hidden="true">${getIcon(link.label.includes("Correu") ? "contact" : "code", 24)}</div>
                  <div class="linear-contact-body">
                    <span class="linear-contact-label">${link.label}</span>
                    ${link.href ? `
                      <a href="${link.href}" class="linear-contact-value" ${link.href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}>
                        ${link.value}
                      </a>
                    ` : `
                      <span class="linear-contact-value is-unconfirmed">${link.value}</span>
                    `}
                    ${link.note ? `<span class="linear-text-muted">${link.note}</span>` : ""}
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </section>

      </div>
    </main>

    <footer class="linear-footer" role="contentinfo">
      <div class="linear-container linear-footer-content">
        <p>© 2026 4dsu.me — ${system.osName} ${system.osVersion}</p>
        <div class="linear-footer-links">
          <a href="#linear-welcome">Pujar a l'inici ↑</a>
          <button type="button" class="btn-link btn-switch-desktop">Canviar a l'escriptori interactiu</button>
        </div>
      </div>
    </footer>
  `;
}

export function renderLinearView(containerElement, onSwitchToDesktop) {
  if (!containerElement) return;

  // Si el contenidor està buit o no conté l'estructura completa, renderitzar
  if (containerElement.children.length === 0 || !containerElement.querySelector(".linear-header")) {
    containerElement.innerHTML = generateLinearHtml();
  }

  // Connectar esdeveniments per tornar al mode escriptori
  const switchBtns = containerElement.querySelectorAll(".btn-switch-desktop");
  switchBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (typeof onSwitchToDesktop === "function") {
        onSwitchToDesktop();
      }
    });
  });

  // Gestió d'aria-current i selecció activa a la navegació lineal
  const navLinks = containerElement.querySelectorAll(".linear-nav-link");
  const sections = Array.from(containerElement.querySelectorAll("section[id^='linear-']"));

  function setActiveNav(targetId) {
    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      const isTarget = href === `#${targetId}`;
      if (isTarget) {
        link.setAttribute("aria-current", "location");
        link.classList.add("is-active");
      } else {
        link.removeAttribute("aria-current");
        link.classList.remove("is-active");
      }
    });
  }

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const targetId = link.getAttribute("href")?.replace("#", "");
      if (targetId) setActiveNav(targetId);
    });
  });

  if ("IntersectionObserver" in window && sections.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveNav(entry.target.id);
        }
      });
    }, {
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0.1
    });

    sections.forEach(sec => observer.observe(sec));
  }
}
