import Link from "next/link";

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex gap-4 bg-orange-50 border border-orange-100 rounded-2xl p-5">
      <div className="shrink-0 w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center mt-0.5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      </div>
      <div className="text-sm text-orange-900 leading-relaxed">{children}</div>
    </div>
  );
}

export default function ZaufanieDomeny() {
  return (
    <div className="prose-blog">
      <h2>Czym jest zaufanie domeny?</h2>
      <p>
        <strong>Zaufanie domeny</strong> (Trust Flow, Domain Trust, wiarygodność domeny)
        to ocena wiarygodności i autorytetu witryny w oczach wyszukiwarek, budowana
        latami przez jakościowy content, silny profil linków i pozytywną historię domeny.
        Jest pokrewnym pojęciem do <Link href="/trustrank">TrustRank</Link> i składnikiem
        <Link href="/e-e-a-t"> E-E-A-T</Link> (szczególnie Trustworthiness — zaufanie).
      </p>
      <p>
        Zaufanie domeny nie jest jednym, mierzalnym wskaźnikiem — to agregat wielu sygnałów,
        które Google ocenia łącznie. Narzędzia SEO przybliżają je przez własne metryki:
        Trust Flow (Majestic), Authority Score (Semrush) czy <Link href="/domain-authority">Domain Authority</Link> (Moz).
      </p>

      <h2>Sygnały budujące zaufanie domeny</h2>
      <p>
        <strong>Profil backlinków</strong> — jakościowe linki z wiarygodnych, tematycznie
        powiązanych domen (media, uczelnie, instytucje, liderzy branżowi) to najsilniejszy
        sygnał zaufania. Linki z autorytatywnych źródeł „przenoszą" zaufanie.
      </p>
      <p>
        <strong>Wiek i historia domeny</strong> — starsza domena bez kar algorytmicznych
        i z ciągłą aktywnością jest traktowana jako bardziej wiarygodna.
        Nowe domeny muszą zbudować autorytet od zera.
      </p>
      <p>
        <strong>Transparentność</strong> — wyraźne informacje o firmie (strona About, dane kontaktowe,
        KRS/NIP), autorach treści z bio i linkami do profili, polityka prywatności,
        regulamin — sygnalizują Google prawdziwą organizację, nie anonimowy serwis.
      </p>
      <p>
        <strong>Brak kar algorytmicznych</strong> — historia penalizacji przez{" "}
        <Link href="/panda">Pandę</Link> lub <Link href="/penguin">Penguina</Link>
        obniża zaufanie domeny na długi czas, nawet po naprawieniu problemu.
      </p>
      <p>
        <strong>HTTPS i bezpieczeństwo</strong> — certyfikat SSL to minimum techniczne.
        Strony HTTP są flagowane przez Chrome jako „Niezabezpieczone".
      </p>

      <InfoBox>
        <strong>Zaufanie domeny buduje się latami — traci szybciej:</strong>
        Jedna skuteczna kampania spamu linkowego, masowe publikowanie thin content
        lub penalizacja algorytmiczna może zniszczyć zaufanie budowane przez lata.
        Ochrona reputacji domeny jest tak samo ważna jak jej budowanie.
        Regularnie monitoruj profil backlinków, stan techniczny i sygnały GSC.
      </InfoBox>

      <h2>FAQ — Zaufanie Domeny</h2>

      <h3>Czy można kupić domenę z historią, żeby zyskać zaufanie?</h3>
      <p>
        Strategia znana jako aged domain SEO — kupowanie starych domen z historią.
        Może działać, jeśli domena ma czyste backlinki i brak historii penalizacji.
        Jednak Google jest coraz lepszy w identyfikowaniu zmiany właściciela domeny
        i zeruje jej historię, jeśli nowa treść nie jest powiązana z poprzednią tematyką.
        Jest to ryzykowna i kosztowna strategia wymagająca szczegółowego audytu historii domeny.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Czym jest zaufanie domeny?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Zaufanie domeny to ocena wiarygodności witryny przez Google, budowana przez jakościowe backlinki, wiek domeny, transparentność, brak kar algorytmicznych i HTTPS. Składnik E-E-A-T (Trustworthiness). Buduje się latami — traci szybciej."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
