// Zbiera prawdziwe daty ostatniej zmiany podstron z historii gita i zapisuje je
// do app/sitemap-lastmod.json, z którego korzysta app/sitemap.ts.
//
// Uruchamiać lokalnie przed wdrożeniem, gdy zmieniła się treść stron:
//   npm run sitemap:lastmod
// Na Vercelu repozytorium jest klonowane płytko, więc historia gita tam nie wystarcza.
// Dlatego plik JSON jest commitowany razem z kodem.

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

/** data ostatniego commitu, który zmienił plik (ISO), albo null gdy pliku nie ma w historii */
function gitDate(file) {
  if (!fs.existsSync(path.join(root, file))) return null;
  const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', file], { cwd: root, encoding: 'utf8' }).trim();
  return out || null;
}

const result = {};

// strony statyczne: adres → plik strony
const staticUrls = [
  '/', '/uslugi', '/uslugi/wizytowka-google', '/uslugi/pozycjonowanie-strony', '/uslugi/google-ads',
  '/uslugi/meta-ads', '/uslugi/tiktok-ads', '/strony-internetowe', '/referencje', '/opinie', '/o-nas',
  '/kontakt', '/checklista-wizytowki-google', '/gbp-score', '/profil-firmy-w-google', '/blog', '/pytania', '/slownik',
];
for (const url of staticUrls) {
  const file = url === '/' ? 'app/page.tsx' : `app${url}/page.tsx`;
  const date = gitDate(file);
  if (date) result[url] = date;
  else console.warn('brak pliku strony dla', url);
}

// hasła słownika: osobny plik treści, a gdy go nie ma, data listy haseł
const termsFile = 'app/slownik/terms.ts';
const termsDate = gitDate(termsFile);
const termSlugs = [...fs.readFileSync(path.join(root, termsFile), 'utf8').matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
for (const slug of termSlugs) {
  result[`/${slug}`] = gitDate(`app/slownik/content/${slug}.tsx`) ?? termsDate;
}

// pytania: każdy plik w app/pytania/content to jedna podstrona
for (const f of fs.readdirSync(path.join(root, 'app/pytania/content')).filter((f) => f.endsWith('.tsx'))) {
  const slug = f.replace(/\.tsx$/, '');
  result[`/pytania/${slug}`] = gitDate(`app/pytania/content/${f}`);
}

const out = path.join(root, 'app/sitemap-lastmod.json');
fs.writeFileSync(out, JSON.stringify(result, null, 2) + '\n');
console.log(`Zapisano ${Object.keys(result).length} dat do ${path.relative(root, out)}`);
