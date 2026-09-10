/**
 * Test regresyjny przekierowań (Etap 3).
 * Sprawdza, że każdy `from` z redirects.json odpowiada 308 na właściwy `to`,
 * a żaden `to` sam nie jest przekierowaniem (łańcuchy są zakazane).
 *
 * Użycie:  node scripts/seo/check-redirects.mjs [baseUrl]
 *          domyślnie http://localhost:3000, na produkcji: https://miauseo.pl
 */
import fs from "node:fs";

const BASE = process.argv[2] ?? "http://localhost:3000";
const redirects = JSON.parse(fs.readFileSync("redirects.json", "utf8"));

const status = async (url) => {
  const r = await fetch(url, { redirect: "manual" });
  return { kod: r.status, cel: r.headers.get("location") };
};

let bledy = 0;

for (const { from, to } of redirects) {
  const r = await status(BASE + from);
  const celOk = r.cel === to || r.cel === BASE + to;
  const kodOk = r.kod === 308 || r.kod === 301;

  // łańcuch: cel przekierowania sam nie może przekierowywać
  const rc = await status(BASE + to);
  const lancuch = rc.kod === 301 || rc.kod === 308;

  const ok = kodOk && celOk && !lancuch;
  if (!ok) bledy++;
  console.log(
    `${ok ? "[OK]  " : "[BLAD]"} ${from} → ${r.cel ?? "brak"} (${r.kod})` +
      (lancuch ? `  ŁAŃCUCH: ${to} zwraca ${rc.kod}` : "") +
      (!celOk && r.cel ? `  oczekiwano ${to}` : ""),
  );
}

console.log(`\nPrzekierowań: ${redirects.length}, błędów: ${bledy}`);
process.exit(bledy ? 1 : 0);
