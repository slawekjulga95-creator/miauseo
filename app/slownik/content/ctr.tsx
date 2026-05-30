import Link from "next/link";

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex gap-4 bg-orange-50 border border-orange-100 rounded-2xl p-5">
      <div className="shrink-0 w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center mt-0.5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <div className="text-sm text-orange-900 leading-relaxed">{children}</div>
    </div>
  );
}

export default function Ctr() {
  return (
    <div className="prose-blog">

      <h2>Czym jest CTR?</h2>
      <p>
        <strong>CTR</strong> (Click-Through Rate, wskaźnik klikalności) to stosunek liczby kliknięć
        do liczby wyświetleń, wyrażony w procentach.
        Formuła: CTR = (kliknięcia / wyświetlenia) × 100%.
        Jeśli Twój wynik w <Link href="/serp">Google SERP</Link> wyświetlił się 10 000 razy i uzyskał 350 kliknięć,
        CTR wynosi 3,5%.
      </p>
      <p>
        CTR to wskaźnik stosowany w wielu kontekstach — wynikach organicznych, reklamach Google Ads,
        email marketingu, banerach display, linkach w mediach społecznościowych — ale jego interpretacja
        i benchmarki różnią się znacząco między kanałami.
        Wspólny mianownik jest jeden: CTR mierzy, jak skutecznie Twój wynik lub reklama przyciąga uwagę
        i zachęca do kliknięcia.
      </p>

      <h2>CTR w wynikach organicznych (SEO)</h2>
      <p>
        W kontekście <Link href="/seo">SEO</Link>, CTR organiczny mierzony jest przez
        <Link href="/google-search-console"> Google Search Console</Link> na poziomie każdej frazy kluczowej
        i każdej strony. Wysoki CTR organiczny jest sygnałem, że Twój wynik w SERP jest atrakcyjny
        dla użytkowników — co Google może traktować jako pośredni sygnał jakości.
      </p>
      <p>
        Na CTR organiczny wpływa kilka elementów jednocześnie. <strong>Pozycja w SERP</strong> — wyniki
        na pozycji 1 mają CTR około 25–28%, pozycja 3 to 10–11%, pozycja 10 to 2–3%.
        Każde przesunięcie w górę znacząco zwiększa kliknięcia — to tzw. krzywa CTR (CTR curve).
        <strong>Meta title</strong> — <Link href="/meta-title">tytuł strony</Link> jest głównym elementem
        decydującym o kliknięciu; musi być dokładny, atrakcyjny i zawierać słowo kluczowe.
        <strong>Meta description</strong> — <Link href="/meta-description">opis</Link> nie wpływa bezpośrednio
        na ranking, ale jest „reklamą" Twojego wyniku organicznego — słabo napisana meta description
        obniża CTR nawet przy wysokiej pozycji.
        <strong>Rich snippets</strong> — <Link href="/rich-snippet">rozszerzone wyniki</Link> z gwiazdkami,
        cenami, datami czy FAQ przyciągają wzrok i podnoszą CTR o 20–30%.
        <strong>URL</strong> — czytelny, krótki URL z naturalnym słowem kluczowym buduje zaufanie.
      </p>

      <h2>CTR w kampaniach Google Ads</h2>
      <p>
        W reklamach płatnych CTR ma znaczenie zarówno jako metryka efektywności, jak i składnik
        <Link href="/quality-score"> Quality Score</Link>. Oczekiwany CTR to jeden z trzech komponentów QS —
        Google szacuje, jak często Twoja reklama będzie klikana w porównaniu do innych reklam
        przy tym samym słowie kluczowym. Wyższy oczekiwany CTR = wyższy QS = niższy
        <Link href="/cpc">CPC</Link> i wyższy <Link href="/adrank">AdRank</Link>.
      </p>
      <p>
        Oznacza to, że inwestycja w copywriting reklam — lepsze nagłówki, bardziej precyzyjne CTA,
        trafniejsze obietnice — bezpośrednio obniża koszty kampanii. Reklama z CTR 8% jest nie tylko
        dwa razy skuteczniejsza niż ta z CTR 4% — jest też tańsza w aukcji, bo wyższy CTR
        przekłada się na wyższy QS.
      </p>

      <h2>Benchmarki CTR — co to jest dobry wynik?</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Kanał / Kontekst</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Dobry CTR</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Uwaga</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-medium text-ink">Wyniki organiczne — pozycja 1</td>
              <td className="p-4 text-zinc-600">25–32%</td>
              <td className="p-4 text-zinc-600">Zależy od branded vs non-branded</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Wyniki organiczne — pozycja 3</td>
              <td className="p-4 text-zinc-600">10–12%</td>
              <td className="p-4 text-zinc-600">Rich snippets mogą podwoić wynik</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Wyniki organiczne — pozycja 10</td>
              <td className="p-4 text-zinc-600">2–3%</td>
              <td className="p-4 text-zinc-600">Mocne słowo w title może poprawić</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Google Ads — wyszukiwarka</td>
              <td className="p-4 text-zinc-600">3–10%</td>
              <td className="p-4 text-zinc-600">Branded kampanie: 20–50%+</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Google Ads — Display / GDN</td>
              <td className="p-4 text-zinc-600">0,1–0,5%</td>
              <td className="p-4 text-zinc-600">Remarketing: wyraźnie wyższy</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Email marketing</td>
              <td className="p-4 text-zinc-600">2–5% (click rate)</td>
              <td className="p-4 text-zinc-600">Zależy od jakości listy i branży</td>
            </tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>CTR w SERP a ranking — pytanie o korelację:</strong> Ujawnione w 2024 roku dokumenty wewnętrzne Google sugerują, że CTR organiczny ma wpływ na ranking przez mechanizm tzw. „NavBoost" — system który wzmacnia strony klikane częściej dla danej frazy. Google oficjalnie nie potwierdza tej zależności, ale wyższy CTR prowadzi do wyższego ruchu, który jest bezpośrednio mierzalny — niezależnie od kwestii rankingowej.
      </InfoBox>

      <h2>Jak poprawić CTR w wynikach organicznych?</h2>
      <p>
        <strong>Optymalizuj meta title</strong> — tytuł powinien zawierać słowo kluczowe blisko początku,
        mieć 50–60 znaków i dawać konkretną obietnicę wartości lub wzbudzać ciekawość.
        Testuj różne warianty dla kluczowych stron — GSC pozwala śledzić CTR per strona i fraza.
      </p>
      <p>
        <strong>Pisz meta description jak reklamę</strong> — nie powtarzaj tego, co jest w tytule.
        Opisz w 140–160 znakach, co zyska użytkownik klikając Twój wynik. Zawrzyj CTA:
        „Sprawdź", „Dowiedz się", „Pobierz bezpłatnie". Google nie gwarantuje, że wyświetli Twoją meta description
        (często generuje własną na podstawie treści), ale dobra opis zwiększa szansę na jej użycie.
      </p>
      <p>
        <strong>Wdróż dane strukturalne</strong> — <Link href="/schema-markup">Schema Markup</Link>
        generuje rich snippets: gwiazdki opinii, ceny produktów, breadcrumby, daty artykułów.
        Te elementy zwiększają powierzchnię Twojego wyniku w SERP i przyciągają wzrok —
        co bezpośrednio przekłada się na wyższy CTR.
      </p>
      <p>
        <strong>Celuj w featured snippets</strong> — <Link href="/featured-snippet">Featured snippet</Link>
        w pozycji zero generuje bardzo różne CTR: dla prostych odpowiedzi (definicji, obliczeń)
        często obniża CTR, bo użytkownik dostaje odpowiedź bez kliknięcia. Dla złożonych tematów
        (przewodniki, instrukcje krok po kroku) featured snippet zwiększa CTR przez wzrost widoczności.
      </p>

      <h2>FAQ — CTR</h2>

      <h3>Czy niski CTR organiczny wpływa na pozycje w Google?</h3>
      <p>
        Google oficjalnie zaprzecza, by CTR z Google Search Console był bezpośrednim czynnikiem rankingowym.
        Ujawnione dokumenty sugerują istnienie systemu NavBoost, który może uwzględniać sygnały kliknięć.
        Praktycznie: niski CTR obniża ruch — co sprawdzasz w GSC. Niezależnie od debaty SEO,
        poprawa CTR jest zawsze warta inwestycji, bo bezpośrednio przekłada się na więcej odwiedzin.
      </p>

      <h3>Jak sprawdzić CTR w Google Search Console?</h3>
      <p>
        Zaloguj się do GSC → Wyniki wyszukiwania (lub Performance) → włącz kolumny Kliknięcia,
        Wyświetlenia, CTR, Pozycja. Możesz filtrować po stronie, zapytaniu, urządzeniu i kraju.
        Frazy z dużą liczbą wyświetleń i niskim CTR to priorytet do optymalizacji — masz już widoczność,
        brakuje tylko kliknięć.
      </p>

      <h3>Czym różni się CTR od Open Rate w email marketingu?</h3>
      <p>
        Open Rate (wskaźnik otwarć) mierzy, ile osób otworzyło email — to odpowiednik wyświetleń w SERP.
        CTR w emailu (Click Rate lub Click-to-Open Rate) mierzy, ile osób kliknęło link w emailu.
        Click-to-Open Rate = kliknięcia / otwarcia × 100% — mierzy skuteczność treści emaila niezależnie
        od skuteczności tematu wiadomości.
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
                "name": "Jak obliczyć CTR?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "CTR = (kliknięcia / wyświetlenia) × 100%. Przykład: 350 kliknięć i 10 000 wyświetleń = CTR 3,5%. W Google Ads i Search Console CTR jest obliczany i wyświetlany automatycznie."
                }
              },
              {
                "@type": "Question",
                "name": "Jaki CTR organiczny jest dobry?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Zależy od pozycji: pozycja 1 osiąga 25–32% CTR, pozycja 3 — 10–12%, pozycja 10 — 2–3%. Rich snippets i atrakcyjny meta title mogą znacząco poprawić CTR powyżej tych średnich."
                }
              },
              {
                "@type": "Question",
                "name": "Jak CTR wpływa na Quality Score w Google Ads?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oczekiwany CTR to jeden z trzech składników Quality Score. Wyższy CTR = wyższy QS = niższy CPC i lepszy AdRank. Inwestycja w copywriting reklam bezpośrednio obniża koszty kampanii przez mechanizm aukcji."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
