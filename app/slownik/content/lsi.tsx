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

export default function Lsi() {
  return (
    <div className="prose-blog">
      <h2>Czym jest LSI?</h2>
      <p>
        <strong>LSI</strong> (Latent Semantic Indexing, utajone indeksowanie semantyczne) to technika
        analizy języka naturalnego, która identyfikuje związki i powiązania między słowami w danym kontekście.
        W SEO terminem „słowa LSI" określa się wyrazy i frazy semantycznie powiązane z głównym tematem strony —
        synonimy, pojęcia pokrewne, terminy branżowe, które pojawiają się naturalnie w tekstach
        traktujących o danym zagadnieniu.
      </p>
      <p>
        Artykuł o pozycjonowaniu stron będzie naturalnie zawierał słowa takie jak „ranking", „frazy kluczowe",
        „algorytm Google", „backlinki", „SERP" — nie dlatego, że autor je wybrał, ale dlatego, że temat
        semantycznie je implikuje. Właśnie ta semantyczna spójność jest sygnałem dla Google, że treść
        jest autorska, ekspercka i kompleksowo traktuje temat.
      </p>

      <h2>Czy Google używa LSI?</h2>
      <p>
        Termin „LSI keywords" jest w środowisku SEO popularny, ale technicznie nieścisły — Google oficjalnie
        zaprzecza stosowaniu klasycznego algorytmu LSI. W rzeczywistości Google używa znacznie bardziej
        zaawansowanych modeli językowych: <strong>BERT</strong> (Bidirectional Encoder Representations
        from Transformers), <strong>MUM</strong> i <strong>Gemini</strong>, które rozumieją semantykę,
        intencję i kontekst w sposób daleko wykraczający poza klasyczne LSI.
      </p>
      <p>
        Mimo tej nieścisłości, praktyczne zalecenie pozostaje aktualne: treści bogate w powiązane
        semantycznie słownictwo lepiej odpowiadają na{" "}
        <Link href="/intencja-wyszukiwania">intencję wyszukiwania</Link> i są oceniane przez Google
        jako bardziej wyczerpujące. Niezależnie od nazwy mechanizmu — semantyczna głębia treści ma znaczenie.
      </p>

      <h2>Jak stosować słowa LSI w praktyce?</h2>
      <p>
        <strong>Pisz jak ekspert, nie jak robot SEO</strong> — ekspert poruszając temat naturalnie używa
        odpowiedniego słownictwa branżowego. Zamiast upychać jedno słowo kluczowe, pisz wyczerpująco
        o temacie, a semantyczne słownictwo pojawi się organicznie.
      </p>
      <p>
        <strong>Analizuj top 10 wyników</strong> — strony rankujące na Twoje główne słowo kluczowe
        używają określonego zestawu słownictwa. Narzędzia jak Surfer SEO lub Clearscope analizują
        ten wzorzec i sugerują brakujące terminy, które powinny pojawić się w Twojej treści.
      </p>
      <p>
        <strong>Korzystaj z sekcji „Powiązane wyszukiwania"</strong> — podpowiedzi na dole strony wyników
        Google to bezpłatne źródło semantycznie powiązanych fraz. Sekcja „People Also Ask" dostarcza
        pytań, które warto uwzględnić w treści jako nagłówki H2/H3.
      </p>

      <InfoBox>
        <strong>Słowa LSI ≠ synonimy głównego słowa kluczowego:</strong> To szersze pojęcie — obejmuje
        terminy współwystępujące w danym kontekście, niekoniecznie będące synonimami. Artykuł
        o espresso naturalnie zawiera słowa „crema", „tamper", „portafilter", „ekstrakcja" —
        nie są to synonimy espresso, ale ich obecność sygnalizuje Google głębię tematyczną artykułu.
      </InfoBox>

      <h2>FAQ — LSI</h2>

      <h3>Ile słów LSI powinno być w artykule?</h3>
      <p>
        Nie ma optymalnej liczby — to pytanie z fałszywych założeń. Celem nie jest osiągnięcie
        konkretnej gęstości semantycznej, lecz pisanie wyczerpująco o temacie. Artykuł ekspercki
        naturalnie zawiera odpowiednie słownictwo; ręczne dodawanie „słów LSI" dla liczby
        zamiast treści jest stratą czasu i może pogorszyć czytelność.
      </p>

      <h3>Jakie narzędzia pomagają znaleźć słowa LSI?</h3>
      <p>
        <strong>Surfer SEO</strong> — analizuje top wyniki i podpowiada brakujące terminy.
        <strong>Clearscope / MarketMuse</strong> — narzędzia content intelligence z oceną semantyczną treści.
        <strong>Google Autocomplete i People Also Ask</strong> — bezpłatne, oparte na realnych danych wyszukiwania.
        <strong>LSIGraph.com</strong> — bezpłatne narzędzie do generowania powiązanych terminów.
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
                "name": "Czym są słowa LSI w SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Słowa LSI (Latent Semantic Indexing) to terminy semantycznie powiązane z głównym tematem strony — synonimy, pojęcia pokrewne i słownictwo branżowe, które naturalnie współwystępują z danym tematem. Treści bogate w semantyczne słownictwo lepiej odpowiadają na intencję wyszukiwania."
                }
              },
              {
                "@type": "Question",
                "name": "Czy Google naprawdę używa LSI?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Google oficjalnie zaprzecza stosowaniu klasycznego algorytmu LSI. Używa bardziej zaawansowanych modeli BERT, MUM i Gemini. Jednak praktyczna zasada jest taka sama: semantycznie bogate treści lepiej rankują, bo lepiej odpowiadają na intencję wyszukiwania."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
