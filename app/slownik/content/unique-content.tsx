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

export default function UniqueContent() {
  return (
    <div className="prose-blog">
      <h2>Czym jest unique content?</h2>
      <p>
        <strong>Unique content</strong> (treść unikalna, oryginalna treść) to treść
        niepowielona z innych źródeł — napisana od nowa, wyrażająca własny punkt widzenia,
        dane lub podejście do tematu. Jest kluczowym wymaganiem Google: algorytm{" "}
        <Link href="/panda">Panda</Link> aktywnie penalizuje strony z{" "}
        <Link href="/duplicate-content">duplikatem treści</Link> lub{" "}
        <Link href="/thin-content">thin content</Link>, a nagradzane są serwisy
        z ekspercką, oryginalną zawartością.
      </p>
      <p>
        Unique content nie oznacza jedynie „nieplagiatowanego" — to wyżej postawiona
        poprzeczka. Tekst napisany własnymi słowami, ale całkowicie powtarzający
        informacje dostępne na dziesiątkach innych stron, jest technicznie unikalny,
        ale nie wnosi nowej wartości. Google coraz precyzyjniej identyfikuje
        treści bez oryginalnego wkładu.
      </p>

      <h2>Co czyni treść naprawdę unikalną?</h2>
      <p>
        <strong>Własne dane i badania</strong> — statystyki zebrane przez firmę,
        wyniki własnych ankiet, analizy wewnętrznych danych. Tych informacji nie ma
        nigdzie indziej — i dlatego są naturalnie cytowane przez innych.
      </p>
      <p>
        <strong>Eksperckie doświadczenie (E-E-A-T)</strong> — treść pisana przez osobę
        z realnym doświadczeniem i wiedzą w temacie. „Jak naprawić rower" napisane przez
        mechanika rowerowego jest wartościowsze niż to samo napisane przez copywritera
        bez znajomości tematu.
      </p>
      <p>
        <strong>Własny punkt widzenia</strong> — analiza, komentarz, opinia, krytyka.
        Treści, które zajmują stanowisko i je uzasadniają, są bardziej angażujące
        i chętniej cytowane niż neutralne powtórzenia faktów.
      </p>
      <p>
        <strong>Aktualność</strong> — informacje zaktualizowane o najnowsze dane,
        trendy i zmiany w branży są bardziej wartościowe niż przestarzałe treści
        powielone z artykułu sprzed 5 lat.
      </p>

      <InfoBox>
        <strong>AI a unique content:</strong> Treści generowane przez modele językowe
        bez redakcji, eksperckich uzupełnień i własnych danych są technicznie unikalne
        (nie skopiowane z konkretnej strony), ale nie wnoszą oryginalnej wartości.
        Google aktualizacje Helpful Content (2022–2023) bezpośrednio celowały w masowo
        generowane AI treści bez wartości dodanej. Zasada jest prosta: czy treść istniałaby,
        gdyby nie było wyszukiwarki? Jeśli tak — jest wartościowa.
      </InfoBox>

      <h2>FAQ — Unique Content</h2>

      <h3>Jak sprawdzić, czy moja treść nie jest duplikatem?</h3>
      <p>
        Narzędzia: Copyscape (sprawdza podobieństwo do treści w sieci), Siteliner
        (wewnętrzne duplikaty w obrębie domeny), Screaming Frog (wykrywa pary
        zduplikowanych stron przez podobieństwo meta tagów i treści).
        Google Search Console → Pokrycie indeksu może wskazać strony z problemami
        z duplikacją przez ostrzeżenie o duplikowanych meta tagach.
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
                "name": "Czym jest unique content?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Unique content to treść oryginalna, niepowielona z innych źródeł, wnosząca własną wartość przez dane, eksperckie doświadczenie lub własny punkt widzenia. Kluczowe wymaganie Google — duplikat treści jest penalizowany przez algorytm Panda."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
