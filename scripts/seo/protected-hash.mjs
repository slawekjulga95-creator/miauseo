// Snapshot / weryfikacja bloków chronionych (lista .seo-protected).
// Strony chronione NIE są osobnymi plikami — to rekordy w posts.ts i content.tsx,
// dlatego liczymy hash bloku rekordu, nie całego pliku.
import fs from "node:fs";
import crypto from "node:crypto";

export const SLUGS = [
  "miauseo-opinie-skup-aut",
  "miauseo-opinie-mobilny-masaz",
  "miauseo-opinie-skup",
  "miauseo-opinie-protetyk",
];

const h = (s) => crypto.createHash("sha256").update(s).digest("hex").slice(0, 16);

function block(file, startRe, nextRe) {
  const lines = fs.readFileSync(file, "utf8").split("\n");
  const start = lines.findIndex((l) => startRe.test(l));
  if (start < 0) return null;
  let end = start + 1;
  while (end < lines.length && !nextRe.test(lines[end])) end++;
  return lines.slice(start, end).join("\n");
}

export function snapshot() {
  const out = {};
  for (const s of SLUGS) {
    const c = block("app/blog/content.tsx", new RegExp('^  "' + s + '": \\('), /^ {2}"[a-z0-9-]+": \(/);
    const p = block("app/blog/posts.ts", new RegExp(`slug: "${s}"`), /^  \{$/);
    out[s] = {
      content: c ? { hash: h(c), linie: c.split("\n").length } : "BRAK",
      posts: p ? { hash: h(p), linie: p.split("\n").length } : "BRAK",
    };
  }
  out["/referencje"] = {
    plik: "app/referencje/page.tsx",
    hash: h(fs.readFileSync("app/referencje/page.tsx", "utf8")),
  };
  return out;
}

if (process.argv[1]?.endsWith("protected-hash.mjs")) {
  console.log(JSON.stringify(snapshot(), null, 2));
}
