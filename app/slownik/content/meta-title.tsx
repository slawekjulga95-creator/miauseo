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

export default function MetaTitle() {
  return (
    <div className="prose-blog">
      <h2>Czym jest meta title?</h2>
      <p>
        <strong>Meta title</strong> (tag tytułu, title tag) to tytuł strony zdefiniowany w tagu
        <code>&lt;title&gt;</code> w sekcji <code>&lt;head&gt;</code> dokumentu HTML.
        Wyświetla się w trzech miejscach: jako klikalny niebieski link w wynikach wyszukiwania Google (SERP),
        jako nazwa zakładki w przeglądarce oraz jako domyślny tytuł przy udostępnianiu strony
        w mediach społecznościowych.
      </p>
      <p>
        Meta title to jeden z najsilniejszych sygnałów on-page SEO — bezpośrednio wpływa
        na ranking dla docelowych fraz kluczowych. Tytuł informuje algorytm Google,
        o czym jest strona, zanim ten zaindeksuje jej treść. Jednocześnie decyduje o <Link href="/ctr">CTR</Link> —
        to pierwszy tekst, który użytkownik widzi w wynikach i na podstawie którego podejmuje
        decyzję o kliknięciu.
      </p>

      <h2>Zasady pisania skutecznego meta title</h2>
      <p>
        <strong>Optymalna długość: 50–60 znaków</strong> — Google obcina tytuły dłuższe niż ok. 600 px
        (co odpowiada mniej więcej 55–60 znakom). Tytuł skrócony wielokropkiem wygląda nieprofesjonalnie
        i traci siłę perswazji.
      </p>
      <p>
        <strong>Fraza kluczowa na początku</strong> — słowa na początku tytułu mają większą wagę
        SEO niż te na końcu. „Pozycjonowanie lokalne Kraków | MiauSEO" jest lepsze
        niż „MiauSEO | Kraków, pozycjonowanie lokalne".
      </p>
      <p>
        <strong>Unikalność każdego tytułu</strong> — duplikaty title tagów sygnalizują Google
        brak architektury informacji i utrudniają indeksowanie. Każda podstrona powinna mieć
        tytuł opisujący dokładnie jej zawartość.
      </p>
      <p>
        <strong>Marka na końcu</strong> — konwencja „[Fraza kluczowa] | [Nazwa marki]" jest standardem.
        Marka na początku ma sens tylko wtedy, gdy jest bardzo rozpoznawalna lub gdy strona jest
        dedykowana brandowi.
      </p>

      <h2>Czy Google zmienia moje tytuły?</h2>
      <p>
        Tak — od 2021 roku Google zastrzega sobie prawo do generowania alternatywnych tytułów
        (Search Generated Titles), jeśli uzna Twój title za nieodpowiedni. Dzieje się to gdy:
        tytuł jest zbyt długi, zbyt krótki, wypełniony frazami (keyword stuffing),
        niezgodny z treścią strony lub taki sam jak H1. Google bierze wtedy fragment H1,
        H2 lub innego elementu strony. Wpływ na to ma jakość i spójność Twoich tytułów —
        im lepiej napisane, tym rzadziej Google je nadpisuje.
      </p>

      <InfoBox>
        <strong>Title a H1 — różne role, nie duplikaty:</strong> Meta title i <Link href="/heading-tags">H1</Link>{" "}
        mogą się różnić — i często powinny. Title optymalizuje się pod wyszukiwarkę i CTR,
        H1 pod czytelnika na stronie. Np. title: „Pozycjonowanie Lokalne Kraków | MiauSEO",
        H1: „Zdobądź klientów z Twojego miasta — local SEO dla małych firm". Oba są poprawne
        i komplementarne.
      </InfoBox>

      <h2>FAQ — Meta Title</h2>

      <h3>Co się stanie, jeśli nie ustawię meta title?</h3>
      <p>
        Google użyje domyślnego tekstu z tagu <code>&lt;title&gt;</code> w kodzie strony, a jeśli go
        nie ma — wygeneruje tytuł na podstawie H1 lub innego widocznego tekstu na stronie.
        Taki wygenerowany tytuł rzadko jest optymalny pod SEO i CTR. Każda ważna podstrona
        powinna mieć ręcznie ustawiony, zoptymalizowany title.
      </p>

      <h3>Jak sprawdzić, czy moje meta title są poprawne?</h3>
      <p>
        Narzędzia do audytu SEO jak <Link href="/google-search-console">Google Search Console</Link>
        (raport „Strony" → problemy z tytułami), Screaming Frog, Ahrefs Site Audit lub Semrush
        Site Audit identyfikują brakujące, zduplikowane lub zbyt długie title tagi.
        Screaming Frog w bezpłatnej wersji crawluje do 500 URL i pokazuje wszystkie title tagi
        z flagami problematycznych przypadków.
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
                "name": "Czym jest meta title?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Meta title to tytuł strony wyświetlany jako klikalny link w wynikach Google, w zakładce przeglądarki i przy udostępnianiu. Jest jednym z najsilniejszych sygnałów on-page SEO i bezpośrednio wpływa na ranking i CTR."
                }
              },
              {
                "@type": "Question",
                "name": "Jaka jest optymalna długość meta title?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Optymalna długość to 50–60 znaków (ok. 600 px). Tytuły dłuższe są obcinane przez Google. Fraza kluczowa powinna być na początku, nazwa marki na końcu."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
