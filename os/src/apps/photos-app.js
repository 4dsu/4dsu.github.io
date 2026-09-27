/**
 * 4dsu OS — PHOTO_PORTFOLIO/ (PHOTOS/)
 * Galeria d'arxiu fotogràfic accessible amb les imatges WebP de scripts/os-dades.mjs,
 * filtres per sèries, metadades tècniques de càmera i visor accessible d'alt contrast.
 */

import { PORTFOLIO_DATA } from "../data/portfolio-data.js";
import { getIcon } from "../icons.js";

export const photosApp = {
  id: "photos",
  title: PORTFOLIO_DATA.photos.windowTitle || "PHOTO_PORTFOLIO/ — Fotografia",
  iconName: "camera",
  badge: PORTFOLIO_DATA.photos.badge || "PORTFOLIO FOTOGRÀFIC",
  isDocument: false,
  statusLeft: "12 FOTOGRAFIES // FORMAT WEBP",
  statusRight: "ARXIU: /ASSETS/PHOTOS/",

  render(winBody) {
    const { photos } = PORTFOLIO_DATA;
    const items = photos.items || [];
    const series = photos.series || [];

    function normalizePath(p) {
      if (!p) return "";
      return p.startsWith("/") ? p.slice(1) : p;
    }

    winBody.innerHTML = `
      <div class="photos-app-container">
        <header class="photos-header-bar">
          <div class="photos-title-row">
            <span class="sys-tag sys-tag-success">ARXIU CURAT</span>
            <span class="photos-path"><code>assets/photos/ (${items.length} fitxers WebP)</code></span>
          </div>
          <p class="photos-intro-text">${photos.intro}</p>
        </header>

        <nav class="photos-series-tabs" aria-label="Filtre de sèries fotogràfiques">
          <div class="series-tabs-list" role="tablist">
            <button type="button" class="sys-btn series-tab-btn is-active" role="tab" aria-selected="true" data-series-id="all">
              Totes les sèries (${items.length})
            </button>
            ${series.map(s => `
              <button type="button" class="sys-btn series-tab-btn" role="tab" aria-selected="false" data-series-id="${s.id}">
                ${s.title} (${s.count})
              </button>
            `).join("")}
          </div>
        </nav>

        <div class="photos-grid-view" role="region" aria-label="Galeria de fotografies" id="photos-grid">
          ${items.map((item, idx) => `
            <article class="photo-card" data-series-id="${item.seriesId}" data-photo-index="${idx}">
              <button type="button" class="photo-thumb-btn" data-photo-id="${item.id}" data-photo-index="${idx}" aria-label="Obrir fotografia: ${item.title} — ${[item.location, item.year].filter(Boolean).join(", ")}">
                <div class="photo-thumb-wrap">
                  <img class="photo-thumb-img" src="${normalizePath(item.thumbPath)}" alt="${item.alt}" width="160" height="120" loading="lazy" />
                  <span class="photo-thumb-expand-hint" aria-hidden="true">${getIcon("camera")} Ampliar</span>
                </div>
                <div class="photo-card-info">
                  <h4 class="photo-card-title">${item.title}</h4>
                  <div class="photo-card-meta-line">
                    ${item.location ? `<span class="photo-card-location">${item.location}</span>` : ""}
                    <span class="photo-card-year">${item.year}</span>
                  </div>
                  <div class="photo-card-tags">
                    <span class="sys-chip photo-camera-tag">${item.camera}</span>
                  </div>
                </div>
              </button>
            </article>
          `).join("")}
        </div>

        <!-- Visor Accessible / Lightbox d'alt contrast -->
        <div class="photo-lightbox-modal" role="dialog" aria-modal="true" aria-label="Visor de fotografia detallat" id="photo-lightbox" hidden>
          <div class="photo-lightbox-overlay" id="photo-lightbox-overlay"></div>
          <div class="photo-lightbox-dialog" role="document">
            <div class="photo-lightbox-header">
              <span class="photo-lightbox-counter" id="photo-viewer-counter">Fotografia 1 de 12</span>
              <button type="button" class="sys-btn photo-lightbox-close-btn" id="btn-close-photo-viewer" aria-label="Tancar visor de fotografia">
                [✕ Tancar visor]
              </button>
            </div>

            <div class="photo-lightbox-content">
              <div class="photo-lightbox-viewport">
                <img class="photo-lightbox-main-img" id="photo-viewer-img" src="" alt="" />
              </div>

              <aside class="photo-lightbox-metadata">
                <div class="photo-meta-header">
                  <h3 class="photo-meta-title" id="photo-viewer-title"></h3>
                  <span class="sys-tag sys-tag-success" id="photo-viewer-series"></span>
                </div>

                <div class="photo-meta-details-table">
                  <div class="photo-meta-row">
                    <span class="photo-meta-key">Càmera:</span>
                    <span class="photo-meta-val" id="photo-viewer-camera"></span>
                  </div>
                  <div class="photo-meta-row">
                    <span class="photo-meta-key">Òptica:</span>
                    <span class="photo-meta-val" id="photo-viewer-lens"></span>
                  </div>
                  <div class="photo-meta-row">
                    <span class="photo-meta-key">Data captura:</span>
                    <span class="photo-meta-val" id="photo-viewer-date"></span>
                  </div>
                  <div class="photo-meta-row">
                    <span class="photo-meta-key">Localització:</span>
                    <span class="photo-meta-val" id="photo-viewer-location"></span>
                  </div>
                  <div class="photo-meta-row">
                    <span class="photo-meta-key">Resolució:</span>
                    <span class="photo-meta-val" id="photo-viewer-dimensions"></span>
                  </div>
                </div>

                <div class="photo-meta-alt-box">
                  <span class="sys-tag">DESCRIPCIÓ VISUAL ACCESSIBLE</span>
                  <p class="photo-meta-alt-text" id="photo-viewer-alt"></p>
                </div>

                <div class="photo-lightbox-controls-row">
                  <button type="button" class="sys-btn photo-nav-btn" id="btn-photo-prev" aria-label="Fotografia anterior">
                    [◀ Anterior]
                  </button>
                  <button type="button" class="sys-btn sys-btn-primary photo-nav-btn" id="btn-photo-next" aria-label="Fotografia següent">
                    [Següent ▶]
                  </button>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  onMount(winEl) {
    const { photos } = PORTFOLIO_DATA;
    const items = photos.items || [];
    if (!items.length) return;

    function normalizePath(p) {
      if (!p) return "";
      return p.startsWith("/") ? p.slice(1) : p;
    }

    const seriesTabs = winEl.querySelectorAll(".series-tab-btn");
    const photoCards = winEl.querySelectorAll(".photo-card");
    const lightbox = winEl.querySelector("#photo-lightbox");
    const closeBtn = winEl.querySelector("#btn-close-photo-viewer");
    const overlay = winEl.querySelector("#photo-lightbox-overlay");
    const prevBtn = winEl.querySelector("#btn-photo-prev");
    const nextBtn = winEl.querySelector("#btn-photo-next");

    const imgEl = winEl.querySelector("#photo-viewer-img");
    const titleEl = winEl.querySelector("#photo-viewer-title");
    const seriesEl = winEl.querySelector("#photo-viewer-series");
    const cameraEl = winEl.querySelector("#photo-viewer-camera");
    const lensEl = winEl.querySelector("#photo-viewer-lens");
    const dateEl = winEl.querySelector("#photo-viewer-date");
    const locEl = winEl.querySelector("#photo-viewer-location");
    const dimEl = winEl.querySelector("#photo-viewer-dimensions");
    const altEl = winEl.querySelector("#photo-viewer-alt");
    const counterEl = winEl.querySelector("#photo-viewer-counter");

    let currentSeries = "all";
    let currentIndex = 0;
    let visibleIndices = items.map((_, i) => i);
    let lastActiveTrigger = null;

    // 1. Filtrar per sèries
    seriesTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        seriesTabs.forEach(t => {
          t.classList.remove("is-active");
          t.setAttribute("aria-selected", "false");
        });
        tab.classList.add("is-active");
        tab.setAttribute("aria-selected", "true");

        currentSeries = tab.getAttribute("data-series-id");
        visibleIndices = [];

        photoCards.forEach((card, idx) => {
          const sId = card.getAttribute("data-series-id");
          const isVisible = (currentSeries === "all" || sId === currentSeries);
          card.style.display = isVisible ? "" : "none";
          if (isVisible) {
            visibleIndices.push(idx);
          }
        });
      });
    });

    // 2. Obrir fotografia al visor
    function showPhoto(idx) {
      if (idx < 0 || idx >= items.length) return;
      currentIndex = idx;
      const photo = items[currentIndex];

      if (imgEl) {
        imgEl.src = normalizePath(photo.path);
        imgEl.alt = photo.alt;
      }
      if (titleEl) titleEl.textContent = photo.title;
      if (seriesEl) seriesEl.textContent = photo.seriesTitle || "SÈRIE CURADA";
      if (cameraEl) cameraEl.textContent = photo.camera || "No especificada";
      if (lensEl) lensEl.textContent = photo.lens || "Òptica integrada";
      if (dateEl) dateEl.textContent = `${photo.date} (${photo.year})`;
      if (locEl) locEl.textContent = photo.location || "Catalunya";
      if (dimEl) dimEl.textContent = `${photo.dimensions || "1440x1080"} WebP`;
      if (altEl) altEl.textContent = photo.alt;

      const posInVisible = visibleIndices.indexOf(currentIndex) + 1;
      const totalVisible = visibleIndices.length;
      if (counterEl) {
        counterEl.textContent = `Fotografia ${posInVisible > 0 ? posInVisible : 1} de ${totalVisible || items.length}`;
      }

      if (lightbox && lightbox.hasAttribute("hidden")) {
        lightbox.removeAttribute("hidden");
        if (closeBtn) closeBtn.focus();
      }
    }

    function closeLightbox() {
      if (!lightbox || lightbox.hasAttribute("hidden")) return;
      lightbox.setAttribute("hidden", "");
      if (lastActiveTrigger) {
        lastActiveTrigger.focus();
      }
    }

    function stepPhoto(direction) {
      if (!visibleIndices.length) return;
      const currentPos = visibleIndices.indexOf(currentIndex);
      let nextPos = currentPos + direction;
      if (nextPos < 0) nextPos = visibleIndices.length - 1;
      if (nextPos >= visibleIndices.length) nextPos = 0;
      showPhoto(visibleIndices[nextPos]);
    }

    const thumbBtns = winEl.querySelectorAll(".photo-thumb-btn");
    thumbBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        lastActiveTrigger = btn;
        const idx = parseInt(btn.getAttribute("data-photo-index"), 10);
        showPhoto(idx);
      });
    });

    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
    if (overlay) overlay.addEventListener("click", closeLightbox);

    if (prevBtn) {
      prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        stepPhoto(-1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        stepPhoto(1);
      });
    }

    // Navegació per teclat al visor: Esc per tancar, Fletxes esquerra/dreta
    lightbox.addEventListener("keydown", (e) => {
      if (lightbox.hasAttribute("hidden")) return;
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        stepPhoto(-1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        stepPhoto(1);
      }
    });
  }
};
