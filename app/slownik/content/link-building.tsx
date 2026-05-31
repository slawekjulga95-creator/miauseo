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

export default function LinkBuilding() {
  return (
    <div className="prose-blog">
      <h2>Czym jest link building?</h2>
      <p>
        <strong>Link building</strong> to zestaw działań mających na celu pozyskiwanie wartościowych
        linków zewnętrznych (<Link href="/backlink">backlinków</Link>) prowadzących do Twojej witryny.
        W ekosystemie SEO linki pełnią rolę głosów zaufania — każdy link z wiarygodnej domeny informuje
        Google, że Twoja strona jest godna cytowania. Im silniejsze i trafniejsze tematycznie domeny
        do Ciebie linkują, tym wyższy autorytet Twojej witryny i tym lepsze pozycje w organicznych
        wynikach wyszukiwania.
      </p>
      <p>
        Link building jest jednym z najtrudniejszych i najdroższych elementów SEO —
        bo wymaga działań poza własną stroną, zależnych od decyzji innych wydawców.
        Jednocześnie pozostaje jednym z najsilniejszych sygnałów rankingowych Google,
        obok treści i sygnałów technicznych.
      </p>

      <h2>Metody link buildingu</h2>
      <p>
        <strong>Guest posting (artykuły gościnne)</strong> — pisanie wartościowych artykułów dla branżowych
        portali w zamian za link do własnej domeny. Kluczowe: trafność tematyczna domeny linkującej i realna
        wartość artykułu dla czytelników — nie tylko pretekst do umieszczenia linka.
      </p>
      <p>
        <strong>Digital PR i dane własne</strong> — publikowanie raportów z unikalnymi danymi, badań,
        infografik lub narzędzi online. Treści, które dziennikarze i blogerzy chętnie cytują,
        generują <Link href="/natural-link">naturalne linki</Link> bez aktywnego outreachu.
      </p>
      <p>
        <strong>Broken link building</strong> — identyfikowanie stron linkujących do niedziałających
        adresów i proponowanie własnej treści jako zamiennika. Obie strony zyskują: wydawca naprawia
        UX, Ty zdobywasz kontekstualny backlink.
      </p>
      <p>
        <strong>Resource pages i roundupy</strong> — strony zbierające najlepsze zasoby na dany temat.
        Jeśli masz treść wartą wymienienia, bezpośredni outreach do autorów takich list ma wysoką
        skuteczność przy relatywnie niskim nakładzie czasu.
      </p>
      <p>
        <strong>HARO / Connectively</strong> — platformy łączące ekspertów z dziennikarzami szukającymi
        źródeł do artykułów. Jeden dobrze napisany komentarz ekspercki może przynieść link z portalu
        o <Link href="/domain-authority">Domain Authority</Link> 70+.
      </p>

      <h2>Czego unikać — black hat link building</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Technika</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Ryzyko</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Kupowanie linków</td><td className="p-4 text-zinc-600">Bezpośrednie naruszenie wytycznych Google — penalizacja algorytmem <Link href="/penguin">Penguin</Link> lub ręczna akcja</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Farmy linków / PBN</td><td className="p-4 text-zinc-600">Sieci prywatnych blogów tworzone wyłącznie do linkowania — Google aktywnie je deindeksuje</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Komentarze spamowe</td><td className="p-4 text-zinc-600">Linki nofollow bez wartości, reputacyjnie szkodliwe</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Nadmierna wymiana linków</td><td className="p-4 text-zinc-600">Wzajemne linkowanie na masową skalę — interpretowane jako manipulacja</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Tempo ma znaczenie:</strong> Nagły skok liczby backlinków — szczególnie z niezwiązanych tematycznie domen — jest sygnałem alarmowym dla algorytmu Penguin. Naturalny profil linków rośnie stopniowo. Jeśli prowadzisz kampanię link buildingową, rozłóż ją w czasie i monitoruj profil przez <Link href="/google-search-console">Google Search Console</Link> lub Ahrefs.
      </InfoBox>

      <h2>FAQ — Link Building</h2>

      <h3>Ile kosztuje link building?</h3>
      <p>
        Zakres cenowy jest ogromny. Publikacja artykułu gościnnego na polskim portalu branżowym
        kosztuje od kilkuset do kilku tysięcy złotych netto za domenę, w zależności od DR i ruchu.
        Własne działania content marketingowe (digital PR, linkable assets) wymagają inwestycji
        w treść i outreach, ale generują linki trwale i bez ryzyka penalizacji.
      </p>

      <h3>Jak ocenić jakość domeny linkującej?</h3>
      <p>
        Kluczowe metryki: <strong>Domain Rating (DR) / Domain Authority (DA)</strong> — siła profilu
        linków domeny; <strong>ruch organiczny</strong> — czy strona faktycznie rankuje i ma czytelników;
        <strong>trafność tematyczna</strong> — czy treść domeny pokrywa się z Twoją branżą;
        <strong>wiek domeny i historia</strong> — nowe domeny lub domeny z historią penalizacji
        są warte mniej. Unikaj domen z wysokim DR, ale zerowym ruchem — to sygnał PBN.
      </p>

      <h3>Czy link building jest nadal potrzebny w 2025 roku?</h3>
      <p>
        Tak. Pomimo rozwoju algorytmów AI i coraz lepszego rozumienia treści przez Google,
        linki pozostają jednym z trzech głównych sygnałów rankingowych. Zmienił się jednak
        model jakościowy — liczy się trafność, kontekst i autorytet, nie ilość.
        10 dobrych linków z branżowych portali bije 1000 linków z farm.
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
                "name": "Czym jest link building?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Link building to działania mające na celu pozyskiwanie wartościowych linków zewnętrznych (backlinków) do witryny. Linki są sygnałem zaufania dla Google i jednym z najsilniejszych czynników rankingowych."
                }
              },
              {
                "@type": "Question",
                "name": "Czy link building jest nadal potrzebny?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tak — linki pozostają jednym z trzech głównych sygnałów rankingowych Google. Zmienił się model jakościowy: liczy się trafność i autorytet, nie ilość. 10 dobrych linków z branżowych portali jest skuteczniejsze niż 1000 z farm linkowych."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
