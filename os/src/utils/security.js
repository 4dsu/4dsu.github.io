/**
 * 4dsu OS — Security & Sanitization Utilities
 * Centralized defense-in-depth functions to prevent DOM-based XSS,
 * attribute breakout, and malicious URL protocol execution.
 */

/**
 * Escapes unsafe HTML characters in a string to prevent XSS injection.
 * Conforms to OWASP Top 10 recommendations for HTML entity encoding.
 * 
 * @param {unknown} str - Value to escape (coerced to string; null/undefined becomes "")
 * @returns {string} Escaped HTML string safe for interpolation
 */
export function escapeHtml(str) {
  if (str == null) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Sanitizes a URL against an allowed protocol whitelist.
 * Neutralizes javascript:, vbscript:, data:, and other dangerous execution vectors.
 * Safe for use in browser DOM and Node.js headless testing environments.
 * 
 * @param {string} url - Target URL or path
 * @param {string[]} [allowedProtocols=["http:", "https:", "mailto:", "tel:"]] - Permitted protocols
 * @returns {string} Cleaned URL if valid, or "#" if invalid or disallowed
 */
export function sanitizeUrl(url, allowedProtocols = ["http:", "https:", "mailto:", "tel:"]) {
  if (!url || typeof url !== "string") return "#";

  const trimmed = url.trim();
  if (!trimmed) return "#";

  // Pre-filter: strip invisible control characters and null bytes that attackers
  // use to obfuscate pseudo-protocols in legacy browser parsers.
  const cleaned = trimmed.replace(/[\x00-\x1F\x7F]/g, "");
  if (/^(?:javascript|vbscript|data):/i.test(cleaned)) {
    return "#";
  }

  try {
    // Determine origin base: fallback to https://4dsu.me if executed in Node.js test suites
    const base = typeof window !== "undefined" && window.location?.origin
      ? window.location.origin
      : "https://4dsu.me";

    const parsed = new URL(trimmed, base);
    return allowedProtocols.includes(parsed.protocol) ? trimmed : "#";
  } catch {
    return "#";
  }
}
