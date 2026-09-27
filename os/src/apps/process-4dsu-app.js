/**
 * 4dsu OS — PROCESS_4DSU.EXE
 * Finestra de conversa retro i diàleg amb la mascota DSU.EXE del sistema.
 */

import { MASCOT_META } from "../mascot/mascot-data.js";
import { getMascotWindowContent } from "../mascot/mascot-view.js";

export const process4dsuApp = {
  id: "process_4dsu",
  title: MASCOT_META.fileName,
  iconName: "system",
  badge: `PID_${MASCOT_META.pid}`,
  isDocument: false,
  statusLeft: MASCOT_META.statusOk,
  statusRight: MASCOT_META.statusMode,

  render(winBody) {
    const content = getMascotWindowContent();
    winBody.innerHTML = content.bodyHtml;

    setTimeout(() => {
      const input = winBody.querySelector("#mascot-input-field");
      if (input) input.focus();
    }, 120);
  }
};
