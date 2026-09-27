/**
 * 4dsu OS — AppRegistry
 * Registre extensible d'aplicacions del sistema per desacoblar
 * el cicle de vida de les finestres del contingut HTML.
 */

import { finderApp } from "./finder-app.js";
import { readmeApp } from "./readme-app.js";
import { aboutApp } from "./about-app.js";
import { projectsApp } from "./projects-app.js";
import { cvApp } from "./cv-app.js";
import { notesApp } from "./notes-app.js";
import { contactApp } from "./contact-app.js";
import { sysErrorApp } from "./syserror-app.js";
import { emkeniaApp } from "./emkenia-app.js";
import { mailApp } from "./mail-app.js";
import { browserApp } from "./browser-app.js";
import { photosApp } from "./photos-app.js";
import { labApp } from "./lab-app.js";
import { searchApp } from "./search-app.js";
import { syspropsApp } from "./sysprops-app.js";
import { projectDetailApp } from "./project-detail-app.js";
import { process4dsuApp } from "./process-4dsu-app.js";

export class AppRegistry {
  constructor() {
    this.apps = new Map();
  }

  register(id, definition) {
    if (!id || !definition) return;
    this.apps.set(id, {
      id,
      ...definition
    });
  }

  get(id, params = {}) {
    const app = this.apps.get(id);
    if (!app) {
      return this.apps.get("system_error") || null;
    }
    return app;
  }

  has(id) {
    return this.apps.has(id);
  }

  getAll() {
    return Array.from(this.apps.values());
  }

  unregister(id) {
    return this.apps.delete(id);
  }
}

export function createDefaultAppRegistry() {
  const registry = new AppRegistry();

  registry.register("finder", finderApp);
  registry.register("welcome", readmeApp);
  registry.register("about", aboutApp);
  registry.register("projects", projectsApp);
  registry.register("cv", cvApp);
  registry.register("notes", notesApp);
  registry.register("contact", contactApp);
  registry.register("system_error", sysErrorApp);
  registry.register("emkenia", emkeniaApp);
  registry.register("mail", mailApp);
  registry.register("browser", browserApp);
  registry.register("photos", photosApp);
  registry.register("lab", labApp);
  registry.register("search", searchApp);
  registry.register("sysprops", syspropsApp);
  registry.register("project", projectDetailApp);
  registry.register("project_detail", projectDetailApp);
  registry.register("process_4dsu", process4dsuApp);
  registry.register("dsu", process4dsuApp);

  return registry;
}
