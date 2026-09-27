/**
 * 4dsu OS — FILES.EXE
 * Explorador del sistema de fitxers virtual (VFS POSIX) del portfolio.
 */

import { getIcon } from "../icons.js";

export const filesApp = {
  id: "files",
  title: "FILES.EXE — Explorador de Fitxers",
  iconName: "files",
  badge: "VFS // POSIX",
  isDocument: false,
  statusLeft: "VFS: 1.2 GB MOUNTED",
  statusRight: "FILES.EXE",

  render(winBody) {
    const fileItems = [
      { id: "welcome", name: "README.TXT", size: "1.4 KB", type: "document", icon: "welcome" },
      { id: "about", name: "ABOUT.EXE", size: "4.2 KB", type: "executable", icon: "about" },
      { id: "projects", name: "PROJECTS/", size: "0 B (DIR)", type: "folder", icon: "folder" },
      { id: "cv", name: "CV.PDF", size: "6.8 KB", type: "document", icon: "cv" },
      { id: "notes", name: "NOTES.TXT", size: "3.1 KB", type: "document", icon: "notes" },
      { id: "contact", name: "CONTACT.EXE", size: "2.8 KB", type: "executable", icon: "contact" },
      { id: "emkenia", name: "EMKENIA.EXE", size: "3.5 KB", type: "executable", icon: "company" },
      { id: "mail", name: "MAIL.EXE", size: "5.0 KB", type: "executable", icon: "mail" },
      { id: "browser", name: "BROWSER.EXE", size: "8.4 KB", type: "executable", icon: "browser" },
      { id: "photos", name: "PHOTO_PORTFOLIO/", size: "0 B (DIR)", type: "folder", icon: "camera" }
    ];

    winBody.innerHTML = `
      <div class="files-explorer">
        <div class="files-path-bar">
          <span class="files-path-label">Ruta:</span>
          <code class="files-path-value">/4dsu/root/portfolio/</code>
        </div>

        <table class="files-table" role="table" aria-label="Llista de fitxers del sistema">
          <thead>
            <tr>
              <th scope="col">Nom</th>
              <th scope="col">Tipus</th>
              <th scope="col">Mida</th>
              <th scope="col">Acció</th>
            </tr>
          </thead>
          <tbody>
            ${fileItems.map(item => `
              <tr>
                <td>
                  <span class="files-table-icon" aria-hidden="true">${getIcon(item.icon)}</span>
                  <strong>${item.name}</strong>
                </td>
                <td><span class="sys-chip">${item.type}</span></td>
                <td><code>${item.size}</code></td>
                <td>
                  <button type="button" class="sys-btn sys-btn-sm" data-open-app="${item.id}">
                    Obrir
                  </button>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }
};
