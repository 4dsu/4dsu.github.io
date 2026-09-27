/**
 * 4dsu OS — Mascot Data & Knowledge Engine
 * Font de coneixement estricta i sense al·lucinacions basada exclusivament en PORTFOLIO_DATA.
 * 
 * Principis d'honestedat i seguretat (AGENTS.md & PRODUCT.md):
 * - Mai inventar projectes, mètriques, universitats o dades de contacte fictícies.
 * - Respostes deterministes locals (offline-first).
 * - Arquitectura preparada per a endpoint serverless segur en el futur.
 */

import { PORTFOLIO_DATA } from "../data/portfolio-data.js";

export const MASCOT_META = {
  id: "process_4dsu",
  fileName: "PROCESS_4DSU.EXE",
  displayName: "DSU.EXE",
  fullTitle: "PROCESS_4DSU.EXE — Terminal de Procés",
  pid: "042",
  version: "v1.0.4",
  statusOk: "ESTAT: CONNECTAT [LOCAL_MOCK]",
  statusMode: "BASE DE DADES: PORTFOLIO_DATA (VERIFICAT)"
};

/**
 * Normalització de text per a cerca semàntica bàsica
 */
function normalizeText(text) {
  return (text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // treure accents
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function hasKeyword(query, ...patterns) {
  const words = query.split(/\s+/);
  return patterns.some(pat => {
    if (pat.includes(" ")) {
      return query.includes(pat);
    }
    return words.includes(pat) || new RegExp(`\\b${pat}\\b`, "i").test(query);
  });
}

/**
 * Respostes estructurades deterministes basades en PORTFOLIO_DATA
 */
export function getLocalMascotResponse(rawInput) {
  const query = normalizeText(rawInput);
  // Els textos surten de PORTFOLIO_DATA.mascotDialogue.topics (scripts/os-dades.mjs els
  // deriva de src/content): DSU.EXE no afirma res que no sigui al portfolio.
  const t = PORTFOLIO_DATA.mascotDialogue.topics;

  // 1. Salutació / Presentació del procés
  if (
    !query ||
    hasKeyword(query, "hola", "bon dia", "bona tarda", "bones", "que ets", "qui ets", "ajuda", "help", "dsu exe", "mascota")
  ) {
    return {
      text: `Hola! Sóc DSU.EXE (PID 042), un petit procés de sistema resident a 4dsu OS. Puc respondre preguntes objectives sobre el perfil de 4dsu, els projectes, el currículum, les notes o el contacte.`,
      actions: [
        { label: "Sobre 4dsu", appId: "about" },
        { label: "Projectes", appId: "projects" },
        { label: "Currículum", appId: "cv" }
      ]
    };
  }

  // 2. Sobre mi / Perfil / 4dsu
  if (
    hasKeyword(query, "qui es 4dsu", "sobre mi", "perfil", "bio", "qui es", "a que es dedica", "interessos", "principis")
  ) {
    return {
      text: t.profile,
      actions: [
        { label: "Obrir ABOUT.EXE", appId: "about" },
        { label: "Veure CV.PDF", appId: "cv" }
      ]
    };
  }

  // 3. Projectes / Portfolio / Treball
  if (
    hasKeyword(query, "projecte", "projectes", "treball", "portfolio", "demos", "codi", "github")
  ) {
    return {
      text: t.projects,
      actions: [
        { label: "Obrir PROJECTS/", appId: "projects" },
        { label: "Llegir NOTES.TXT", appId: "notes" }
      ]
    };
  }

  // 4. Estudis / CV / Formació / Universitat
  if (
    hasKeyword(query, "cv", "curriculum", "estudis", "universitat", "carrera", "grau", "formacio", "educacio", "telecos")
  ) {
    return {
      text: t.education,
      actions: [
        { label: "Obrir CV.PDF", appId: "cv" }
      ]
    };
  }

  // 5. Tecnologies / Stack / Programació / Habilitats / Llenguatges
  if (
    hasKeyword(query, "tecnologia", "tecnologies", "stack", "llenguatge", "llenguatges", "c", "linux", "posix", "tcp", "skills", "habilitats", "idiomes", "llengues")
  ) {
    return {
      text: t.skills,
      actions: [
        { label: "Obrir CV.PDF", appId: "cv" }
      ]
    };
  }

  // 6. Notes / Apunts / Reflexions / Filosofia
  if (
    hasKeyword(query, "notes", "apunts", "articles", "idees", "reflexions", "filosofia")
  ) {
    return {
      text: t.notes,
      actions: [
        { label: "Obrir NOTES.TXT", appId: "notes" }
      ]
    };
  }

  // 7. Contacte / Correu / Xarxes
  if (
    hasKeyword(query, "contacte", "contactar", "correu", "email", "mail", "xarxes", "social", "missatge", "parlar")
  ) {
    return {
      text: t.contact,
      actions: [
        { label: "Obrir CONTACT.EXE", appId: "contact" }
      ]
    };
  }

  // 8. Sistema / 4dsu OS / Metàfora retro
  if (
    hasKeyword(query, "sistema operatiu", "sistema", "retro", "os", "per que retro", "workstation", "fosfor", "pantalla")
  ) {
    return {
      text: t.system,
      actions: [
        { label: "Obrir BENVINGUDA.EXE", appId: "welcome" },
        { label: "Obrir NOTES.TXT", appId: "notes" }
      ]
    };
  }

  // 9. Fallback segur: sense al·lucinacions
  return {
    text: `Aquest tema no consta als registres verificats de 4dsu OS. Com a procés del sistema, només puc donar informació confirmada sobre ABOUT.EXE (perfil), PROJECTS/ (projectes), CV.PDF (estudis i habilitats), NOTES.TXT (apunts) o CONTACT.EXE.`,
    actions: [
      { label: "Obrir Sobre mi", appId: "about" },
      { label: "Obrir Projectes", appId: "projects" },
      { label: "Obrir Contacte", appId: "contact" }
    ]
  };
}

/**
 * Consulta asíncrona amb suport per a endpoint serverless futur
 * i fallback local immediat i determinista.
 */
export async function queryMascot(input, options = {}) {
  const { endpoint = window.__4DSU_API_ENDPOINT__ || null, timeoutMs = 4000 } = options;

  if (endpoint && typeof fetch === "function") {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
        signal: controller.signal
      });
      clearTimeout(timer);

      if (response.ok) {
        const data = await response.json();
        if (data && typeof data.reply === "string") {
          return {
            text: data.reply,
            source: "remote",
            actions: Array.isArray(data.actions) ? data.actions : []
          };
        }
      }
    } catch (err) {
      // Fallback silent cap al motor local
    }
  }

  // Simular un temps de resposta curt i mecànic (120ms - 200ms) per credibilitat retro
  await new Promise(r => setTimeout(r, 150));
  const localRes = getLocalMascotResponse(input);
  return {
    ...localRes,
    source: "local"
  };
}
