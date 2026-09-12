import type { Metadata } from "next";
import Link from "next/link";

const URL = "https://miauseo.pl/profil-firmy-w-google";

export const metadata: Metadata = {
  title: "Profil Firmy w Google – wszystkie nazwy jednej usługi | MiauSEO",
  description:
    "Profil Firmy w Google, wizytówka Google, Google Business Profile, Google Moja Firma — to ta sama usługa pod czterema nazwami. Wyjaśniamy, która jest aktualna, skąd wzięły się pozostałe i czym profil różni się od strony WWW.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Profil Firmy w Google – wszystkie nazwy jednej usługi",
    description:
      "Która nazwa jest dziś oficjalna, co znaczy skrót GBP i dlaczego „Google Moja Firma” już nie istnieje.",
    url: URL,
    type: "article",
    locale: "pl_PL",
  },
};

/** Hub encji centralnej. Do niego linkuje pierwsze wystąpienie encji we wpisach. */
const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${URL}#strona`,
      url: URL,
      name: "Profil Firmy w Google – wszystkie nazwy jednej usługi",
      inLanguage: "pl-PL",
      mainEntity: { "@id": `${URL}#encja` },
    },
    {
      "@type": "Thing",
      "@id": `${URL}#encja`,
      name: "Profil Firmy w Google",
      alternateName: [
        "wizytówka Google",
        "Google Business Profile",
        "GBP",
        "Google Moja Firma",
        "Google My Business",
      ],
      description:
        "Bezpłatny profil firmy prowadzony przez Google, wyświetlany w Wyszukiwarce i w Mapach Google.",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${URL}#okruszki`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://miauseo.pl" },
        { "@type": "ListItem", position: 2, name: "Profil Firmy w Google", item: URL },
      ],
    },
  ],
};

const HISTORIA = [
  {
    rok: "2010",
    nazwa: "Google Places",
    opis: "Pierwsza samodzielna usługa dla firm lokalnych, wydzielona z wcześniejszego Centrum Firm Lokalnych.",
  },
  {
    rok: "2012",
    nazwa: "Google+ Local",
    opis: "Profile firm zostają wciągnięte w ekosystem Google+. Etap, który zapamiętano głównie jako zamieszanie.",
  },
  {
    rok: "2014",
    nazwa: "Google Moja Firma (Google My Business)",
    opis: "Nazwa, która przyjęła się w Polsce najmocniej i do dziś funkcjonuje w mowie potocznej — mimo że oficjalnie nie istnieje.",
  },
  {
    rok: "2021",
    nazwa: "Google Business Profile / Profil Firmy w Google",
    opis: "Listopadowa zmiana nazwy. Zarządzanie profilem przenosi się do Wyszukiwarki i Map, panel przestaje być osobnym produktem.",
  },
  {
    rok: "2022",
    nazwa: "Wygaszenie aplikacji Google Moja Firma",
    opis: "Aplikacja mobilna zostaje wycofana. Od tego momentu profil prowadzi się bezpośrednio z poziomu wyników wyszukiwania.",
  },
];

const NAZWY = [
  ["wizytówka Google", "fraza potoczna", "Nazwa, której realnie używają klienci i którą wpisują w wyszukiwarkę. Nieoficjalna, ale najczęstsza."],
  ["Profil Firmy w Google", "oficjalna nazwa polska", "Obowiązująca od listopada 2021. Tej używa Google w polskim interfejsie i w pomocy."],
  ["Google Business Profile (GBP)", "oficjalna nazwa angielska", "Ta sama usługa w dokumentacji, narzędziach i materiałach anglojęzycznych. Skrót GBP pochodzi właśnie stąd."],
  ["Google Moja Firma / Google My Business", "nazwa historyczna", "Obowiązywała w latach 2014–2021. Dziś poprawnie używana wyłącznie jako odniesienie do przeszłości."],
];

export default function ProfilFirmyWGooglePage() {
  return (
    <main className="pt-24 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      {/* Breadcrumb */}
      <div className="px-6 py-4 border-b border-border bg-surface">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-sm text-zinc-400">
          <Link href="/" className="hover:text-brand transition-colors">Strona główna</Link>
          <span>/</span>
          <span className="text-zinc-600">Profil Firmy w Google</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-12">
        <article className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-ink leading-tight mb-6">
            Profil Firmy w Google — cztery nazwy, jedna usługa
          </h1>

          <div className="prose-blog">
            {/* Odpowiedź bezpośrednia — standard wpisu, blok pod AI Overviews */}
            <p className="text-lg">
              <strong>Wizytówka Google, Profil Firmy w Google, Google Business
              Profile i Google Moja Firma to nazwy jednej i tej samej usługi.</strong>{" "}
              Aktualna nazwa polska to <strong>Profil Firmy w Google</strong>,
              angielska — <strong>Google Business Profile (GBP)</strong>. „Google
              Moja Firma" to nazwa historyczna, wycofana w 2021 roku. To bezpłatny
              profil firmy wyświetlany w Wyszukiwarce i Mapach Google, niezależny
              od strony internetowej.
            </p>

            <h2>Która nazwa jest poprawna dzisiaj</h2>
            <p>
              Wszystkie cztery opisują ten sam byt, ale nie są równoważne w użyciu.
              Poniżej to, co w praktyce oznacza każda z nich.
            </p>

            <div className="not-prose my-8 overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-2xl overflow-hidden">
                <thead className="bg-surface">
                  <tr>
                    <th className="text-left font-bold text-ink px-4 py-3">Nazwa</th>
                    <th className="text-left font-bold text-ink px-4 py-3">Status</th>
                    <th className="text-left font-bold text-ink px-4 py-3">Kiedy jej używać</th>
                  </tr>
                </thead>
                <tbody>
                  {NAZWY.map(([nazwa, status, opis]) => (
                    <tr key={nazwa} className="border-t border-border align-top">
                      <td className="px-4 py-3 font-semibold text-ink whitespace-nowrap">{nazwa}</td>
                      <td className="px-4 py-3 text-zinc-500 whitespace-nowrap">{status}</td>
                      <td className="px-4 py-3 text-zinc-600">{opis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              Rozróżnienie ma znaczenie praktyczne, nie tylko redakcyjne. Klient
              szuka „wizytówki Google", pomoc Google mówi „Profil Firmy w Google",
              a narzędzia i dokumentacja techniczna — „Google Business Profile".
              Jeśli te trzy warianty nie są ze sobą powiązane w treści, każdy z nich
              buduje osobny, słabszy sygnał zamiast jednego mocnego.
            </p>

            <h2>Skąd wzięły się wszystkie te nazwy</h2>
            <p>
              Usługa zmieniała nazwę cztery razy w kilkanaście lat, a każda zmiana
              zostawiła ślad w języku klientów. Dlatego do dziś jedna firma pyta o
              „wizytówkę", druga o „Moją Firmę", a trzecia o „GBP" — i wszystkie
              mają na myśli to samo.
            </p>

            <div className="not-prose my-8 space-y-3">
              {HISTORIA.map((h) => (
                <div key={h.rok} className="flex gap-4 border border-border rounded-2xl p-4 bg-surface">
                  <span className="font-bold text-brand shrink-0 w-14">{h.rok}</span>
                  <span>
                    <span className="block font-semibold text-ink">{h.nazwa}</span>
                    <span className="block text-sm text-zinc-600 mt-1">{h.opis}</span>
                  </span>
                </div>
              ))}
            </div>

            <h2>Czym profil różni się od strony internetowej</h2>
            <p>
              To pytanie wraca w co drugiej rozmowie i odpowiedź na nie decyduje o
              podziale budżetu. <strong>Profil jest własnością Google, strona jest
              Twoja.</strong> Profil pokazuje się w Mapach i w panelu obok wyników,
              nie wymaga hostingu ani utrzymania i jest bezpłatny. Strona daje pełną
              kontrolę nad treścią, ale sama nie wchodzi do Local Packa.
            </p>
            <p>
              W praktyce jedno bez drugiego pracuje na pół gwizdka. Profil bez strony
              nie ma się na co powołać przy trudniejszych zapytaniach, a strona bez
              profilu nie istnieje w wynikach lokalnych, które klient widzi jako
              pierwsze. Jak to wygląda w liczbach i co robić najpierw, opisujemy przy{" "}
              <Link href="/pozycjonowanie-wizytowki-google" className="text-brand hover:underline">
                prowadzeniu wizytówki Google
              </Link>
              .
            </p>

            <h2>Czego nazwa nie zmienia</h2>
            <p>
              Zmiany nazewnictwa nie zmieniły ani zasad rankingu, ani obowiązków
              właściciela profilu. Nadal liczą się te same rzeczy: prawidłowa
              kategoria, kompletne dane, spójny NAP, opinie i realna aktywność.
              Zmieniło się miejsce zarządzania — dziś profil prowadzi się z poziomu
              Wyszukiwarki i Map, a nie osobnej aplikacji.
            </p>
            <p>
              Jeśli szukasz konkretów, od czego zacząć i co realnie wpływa na
              pozycję, zebraliśmy je w opracowaniu o{" "}
              <Link href="/pozycjonowanie-wizytowki-google" className="text-brand hover:underline">
                pozycjonowaniu wizytówki Google
              </Link>{" "}
              oraz w zestawieniu{" "}
              <Link href="/czynniki-rankingowe-wizytowki-google-2026" className="text-brand hover:underline">
                czynników rankingowych profilu
              </Link>
              .
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
