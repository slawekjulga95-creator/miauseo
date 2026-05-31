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

export default function LocalPack() {
  return (
    <div className="prose-blog">
      <h2>Czym jest Local Pack?</h2>
      <p>
        <strong>Local Pack</strong> (znany też jako „Map Pack" lub „top 3") to wyróżniony blok
        wyświetlany w wynikach Google dla zapytań z intencją lokalną — zawiera mapę oraz listę
        trzech firm spełniających kryteria wyszukiwania. Pojawia się nad organicznymi wynikami
        lub tuż pod reklamami, zajmując najbardziej eksponowane miejsce na stronie wyników.
      </p>
      <p>
        Dla firm z fizyczną lokalizacją lub obsługujących konkretny obszar geograficzny znalezienie
        się w Local Pack jest priorytetem SEO — często ważniejszym niż pozycje w klasycznych
        wynikach organicznych. Badania pokazują, że Local Pack przyciąga od 30 do 50% kliknięć
        przy zapytaniach lokalnych.
      </p>

      <h2>Co Google bierze pod uwagę przy wyborze top 3?</h2>
      <p>
        Google opiera decyzję o wyświetleniu firmy w Local Pack na trzech głównych czynnikach.
      </p>
      <p>
        <strong>Trafność (Relevance)</strong> — jak dobrze profil firmy odpowiada zapytaniu użytkownika.
        Decyduje pełność profilu <Link href="/google-business-profile">Google Business Profile</Link>,
        kategorie działalności, opis i zawartość treści na stronie docelowej.
      </p>
      <p>
        <strong>Odległość (Distance)</strong> — jak daleko firma znajduje się od lokalizacji szukającego
        (lub od lokalizacji wpisanej w zapytaniu). Nie zawsze wygrywa najbliższa firma —
        przy silnym profilu możesz pojawiać się w wynikach kilku miast.
      </p>
      <p>
        <strong>Rozgłos (Prominence)</strong> — jak znana i wiarygodna jest firma w sieci.
        Wpływają na to: liczba i ocena recenzji Google, cytowania <Link href="/nap">NAP</Link>{" "}
        w katalogach, linki do witryny, wzmianki w mediach lokalnych.
      </p>

      <h2>Jak zoptymalizować się pod Local Pack?</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Działanie</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Wpływ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Weryfikacja i uzupełnienie GBP</td><td className="p-4 text-zinc-600">Fundament — bez zweryfikowanego profilu nie możesz pojawić się w Local Pack</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Zbieranie recenzji Google</td><td className="p-4 text-zinc-600">Liczba i ocena recenzji to jeden z najsilniejszych sygnałów prominence</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Spójność NAP w sieci</td><td className="p-4 text-zinc-600">Rozbieżności w adresie lub numerze telefonu osłabiają zaufanie Google</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Cytowania w katalogach lokalnych</td><td className="p-4 text-zinc-600">Obecność w Panoramie Firm, Yelp, branżowych katalogach buduje prominence</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Posty i zdjęcia w GBP</td><td className="p-4 text-zinc-600">Aktywność profilu sygnalizuje Google, że firma jest aktualna i zaangażowana</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Local Pack ≠ pozycje organiczne:</strong> Algorytmy Local Pack i klasycznego SEO działają
        niezależnie. Możesz zajmować pozycję 1 organicznie i nie pojawiać się w top 3, albo odwrotnie —
        mieć słabą stronę, ale silny profil GBP i dominować mapach. Pełna strategia{" "}
        <Link href="/local-seo">local SEO</Link> łączy oba podejścia.
      </InfoBox>

      <h2>FAQ — Local Pack</h2>

      <h3>Czy można wypaść z Local Pack?</h3>
      <p>
        Tak. Zawieszenie profilu GBP, nagły spadek oceny recenzji, pojawienie się konkurenta z silniejszym
        profilem lub zmiana algorytmu Google może spowodować wypadnięcie z top 3. Regularne monitorowanie
        widoczności (np. przez Bright Local lub Local Viking) pozwala szybko reagować na zmiany.
      </p>

      <h3>Czy płatne reklamy wpływają na pozycję w Local Pack?</h3>
      <p>
        Nie bezpośrednio. Local Pack to wynik organiczny — pozycja zależy od trafności, odległości
        i prominence, nie od budżetu reklamowego. Google oferuje jednak osobny format —
        Local Services Ads (LSA) — który pojawia się nad Local Pack i jest oznaczony jako reklama.
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
                "name": "Czym jest Local Pack?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Local Pack to wyróżniony blok w wynikach Google zawierający mapę i listę trzech firm lokalnych. Pojawia się dla zapytań z intencją lokalną i przyciąga 30–50% kliknięć. Google bierze pod uwagę trafność, odległość i rozgłos firmy."
                }
              },
              {
                "@type": "Question",
                "name": "Jak dostać się do Local Pack?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Kluczowe działania to: uzupełnienie i weryfikacja Google Business Profile, zbieranie recenzji Google, spójność danych NAP w sieci, cytowania w lokalnych katalogach i aktywność profilu (posty, zdjęcia)."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
