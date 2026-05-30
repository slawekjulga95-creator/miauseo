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

export default function Cloaking() {
  return (
    <div className="prose-blog">

      <h2>Czym jest Cloaking?</h2>
      <p>
        <strong>Cloaking</strong> to technika <Link href="/black-hat-seo">black hat SEO</Link> polegająca na
        świadomym serwowaniu różnej treści robotom wyszukiwarek i zwykłym użytkownikom.
        Googlebot odwiedzający stronę widzi inną wersję — zoptymalizowaną pod słowa kluczowe,
        pełną trafnych fraz, prawidłowo ustrukturyzowaną — niż człowiek, który kliknął w wynik wyszukiwania.
        Użytkownik po kliknięciu trafia na treść, która nie ma nic wspólnego z tym, czego szukał:
        stronę z reklamami, przekierowanie do niezwiązanej witryny lub agresywny landing page.
      </p>
      <p>
        Google wprost klasyfikuje cloaking jako poważne naruszenie swoich wytycznych.
        W dokumentacji Google Search Essentials czytamy: „Google może podjąć działania manualne wobec strony
        korzystającej z cloakingu, łącznie z wykluczeniem jej z indeksu".
        To jedna z nielicznych technik, przy których Google nie stosuje stopniowej degradacji pozycji —
        kara może być natychmiastowa i absolutna.
      </p>

      <h2>Jak Cloaking jest technicznie realizowany?</h2>
      <p>
        Mechanizmy cloakingu opierają się na identyfikacji nadawcy zapytania do serwera.
        Serwer sprawdza adres IP żądającego (Google utrzymuje publiczne listy adresów IP swoich botów)
        lub analizuje nagłówek User-Agent (Googlebot identyfikuje się jako
        <em>„Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"</em>).
        Na podstawie tej detekcji serwer zwraca jedną z dwóch wersji strony — zoptymalizowaną dla bota
        lub właściwą dla człowieka.
      </p>
      <p>
        Innym wariantem jest cloaking oparty na JavaScript: Googlebot w trybie podstawowym (bez pełnego renderowania JS)
        widzi treść serwowaną przez serwer, podczas gdy przeglądarka użytkownika pobiera i renderuje zupełnie inne elementy.
        Google radzi sobie z tym coraz skuteczniej, bo <Link href="/googlebot">Googlebot</Link> renderuje JavaScript
        — ale istnieje okno czasowe między crawlowaniem HTML a renderowaniem JS, które cloaking może wykorzystywać.
      </p>

      <h2>Przykłady cloakingu w praktyce</h2>
      <p>
        <strong>Farmы treści z cloakingiem</strong> — strony generujące tysiące stron „SEO" z wypełnionym
        słowami kluczowymi tekstem dla Googlebota, podczas gdy użytkownik trafia na stronę z agresywną
        reklamą lub przekierowanie afiliacyjne. Przez lata był to jeden z popularniejszych modeli
        monetyzacji ruchu organicznego bez wartości dla użytkownika.
      </p>
      <p>
        <strong>Cloaking na urządzeniach mobilnych</strong> — serwowanie innej treści na mobile i desktop
        nie jest samo w sobie cloakingiem (responsive design jest poprawny), ale gdy wersja mobilna
        pokazuje Googlebotowi coś innego niż użytkownicy mobile — to naruszenie.
        W erze <Link href="/mobile-first-indexing">mobile-first indexing</Link> jest to szczególnie ryzykowne.
      </p>
      <p>
        <strong>JavaScript cloaking</strong> — strona serwuje szkielet HTML z treścią SEO, a JavaScript
        nadpisuje go kompletnie innym interfejsem. Googlebot widzi szkielet, użytkownik widzi produkt.
        Stosowany przez część operatorów kasyn online, suplementów diety i innych branż z restrykcyjnymi regułami reklamowymi.
      </p>

      <InfoBox>
        <strong>Nie każda personalizacja to cloaking.</strong> Geolokalizacja (inne ceny dla różnych krajów), personalizacja dla zalogowanych użytkowników, A/B testing — to nie jest cloaking, pod warunkiem że Googlebot widzi reprezentatywną wersję treści. Kluczowy test: czy to, co widzi Google, odzwierciedla to, co zobaczy użytkownik który kliknie w wynik wyszukiwania?
      </InfoBox>

      <h2>Konsekwencje stosowania cloakingu</h2>
      <p>
        Kara za cloaking jest zwykle manualna — nakładana przez pracowników Google Quality Team
        po zgłoszeniu lub audycie. Widnieje w Google Search Console w sekcji „Działania manualne"
        jako <em>„Ręcznie nałożona kara za cloaking lub przekierowania"</em>.
        Efektem jest zazwyczaj całkowite usunięcie dotkniętych stron — lub całej domeny — z indeksu Google.
      </p>
      <p>
        Odbudowa po tego rodzaju karze jest możliwa, ale wymaga: usunięcia mechanizmu cloakingu,
        gruntownego audytu i dokumentacji zmian, a następnie złożenia prośby o ponowne rozpatrzenie
        (reconsideration request) w GSC. Proces może trwać od kilku tygodni do kilku miesięcy —
        i nie ma gwarancji pozytywnego rozstrzygnięcia, szczególnie przy historii celowego naruszenia.
      </p>

      <h2>Cloaking a legalne techniki personalizacji — granica</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Praktyka</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Klasyfikacja</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Dlaczego?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-medium text-ink">Inne ceny dla różnych krajów</td>
              <td className="p-4 text-green-600 font-semibold">Dozwolone</td>
              <td className="p-4 text-zinc-600">Google widzi lokalizowaną wersję — użytkownik też</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">A/B testing (właściwie wdrożony)</td>
              <td className="p-4 text-green-600 font-semibold">Dozwolone</td>
              <td className="p-4 text-zinc-600">Google widzi jedną z wersji — tak samo jak część użytkowników</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Paywall (treść dla subskrybentów)</td>
              <td className="p-4 text-green-600 font-semibold">Dozwolone (FlexSampling)</td>
              <td className="p-4 text-zinc-600">Google widzi pełną treść dzięki programowi FlexSampling</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Inna treść dla Googlebota niż dla użytkownika</td>
              <td className="p-4 text-red-500 font-semibold">Cloaking</td>
              <td className="p-4 text-zinc-600">Celowe ukrywanie — naruszenie wytycznych</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">JS nadpisuje treść HTML widzianą przez bota</td>
              <td className="p-4 text-red-500 font-semibold">Cloaking</td>
              <td className="p-4 text-zinc-600">Bot widzi szkielet, człowiek widzi inny produkt</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>FAQ — Cloaking</h2>

      <h3>Jak Google wykrywa cloaking?</h3>
      <p>
        Google stosuje kilka metod: porównanie treści widocznej dla Googlebota z treścią renderowaną przez
        przeglądarkę (Google używa własnych narzędzi do renderowania stron jak zwykły użytkownik),
        analizę sygnałów użytkownika (szybkie powroty do SERP sygnalizują rozbieżność między obietnicą a treścią),
        manualne audyty stron zgłoszonych przez użytkowników oraz automatyczne systemy wykrywania manipulacji.
      </p>

      <h3>Czy zmiana treści w zależności od urządzenia to cloaking?</h3>
      <p>
        Nie — responsive design i adaptacyjna obsługa urządzeń są prawidłowe.
        Problemem jest sytuacja, gdy Googlebot (który crawluje w trybie mobile-first)
        widzi inną treść niż użytkownik mobilny. Jeśli wersja mobilna serwowana Googlebotowi
        jest pełnowartościowa i odzwierciedla to, co zobaczy użytkownik — nie ma naruszenia.
      </p>

      <h3>Czy istnieje „dobry" cloaking?</h3>
      <p>
        Nie w rozumieniu Google. Każda technika serwowania innej treści botom niż użytkownikom,
        z zamiarem manipulacji rankingiem, jest cloakingiem bez względu na to, jak ją nazwiemy.
        Jedynym wyjątkiem akceptowanym przez Google jest model FlexSampling dla paywalli,
        który działa według ściśle określonych zasad dokumentowanych przez Google.
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
                "name": "Jak Google wykrywa cloaking?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Google porównuje treść widoczną dla Googlebota z treścią renderowaną przez przeglądarkę, analizuje sygnały użytkownika oraz przeprowadza manualne audyty stron zgłoszonych przez użytkowników."
                }
              },
              {
                "@type": "Question",
                "name": "Jakie są konsekwencje stosowania cloakingu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Manualna kara od Google Quality Team, zazwyczaj skutkująca całkowitym usunięciem stron lub domeny z indeksu. Widnieje w Google Search Console jako 'Ręcznie nałożona kara za cloaking'."
                }
              },
              {
                "@type": "Question",
                "name": "Czy A/B testing to cloaking?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nie — o ile jest właściwie wdrożony. Google widzi jedną z testowanych wersji, tak samo jak część użytkowników. Cloakingiem byłoby pokazanie Googlebotowi wersji specjalnej, której żaden użytkownik nie widzi."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
