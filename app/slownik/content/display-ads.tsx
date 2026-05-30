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

export default function DisplayAds() {
  return (
    <div className="prose-blog">

      <h2>Czym są Display Ads?</h2>
      <p>
        <strong>Display Ads</strong> (reklamy displayowe, reklamy graficzne) to forma reklamy internetowej
        wyświetlana na stronach partnerskich sieci reklamowej — jako banery graficzne, animacje,
        reklamy wideo lub reklamy responsywne dopasowujące się do dostępnej przestrzeni.
        W ekosystemie Google Display Ads emitowane są przez <strong>Google Display Network (GDN)</strong> —
        sieć obejmującą ponad 2 miliony witryn, aplikacji i serwisów YouTube, docierającą do ponad 90%
        internautów na świecie.
      </p>
      <p>
        Display Ads funkcjonują zupełnie inaczej niż reklamy w wyszukiwarce (Search Ads).
        Reklama search pojawia się gdy użytkownik aktywnie szuka — wpisuje zapytanie w Google.
        Reklama display pojawia się pasywnie — gdy użytkownik czyta artykuł, przegląda serwis newsowy
        lub ogląda wideo, a system ocenia, że pasuje do profilu docelowego odbiorcy.
        To różnica między przerwaniem a towarzyszeniem — display tworzy kontakt z marką
        zanim użytkownik uświadomi sobie, że czegoś szuka.
      </p>

      <h2>Formaty reklam Display w Google Ads</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Format</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Opis</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Zastosowanie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-semibold text-ink">Reklamy responsywne (RDA)</td>
              <td className="p-4 text-zinc-600">Wgrywasz do 15 obrazów i 5 nagłówków — Google automatycznie tworzy kombinacje</td>
              <td className="p-4 text-zinc-600">Domyślny format — najszerszy zasięg</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">Banery statyczne (HTML5/JPG)</td>
              <td className="p-4 text-zinc-600">Gotowe pliki w standardowych rozmiarach (300×250, 728×90, 160×600)</td>
              <td className="p-4 text-zinc-600">Pełna kontrola kreatywna, premium placements</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">Reklamy wideo (YouTube)</td>
              <td className="p-4 text-zinc-600">In-stream (pomijalne/niepomijalne), bumper ads (6s), discovery</td>
              <td className="p-4 text-zinc-600">Brand awareness, zasięg, storytelling</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">Gmail Ads</td>
              <td className="p-4 text-zinc-600">Reklamy w zakładce Oferty lub Społeczność w Gmail</td>
              <td className="p-4 text-zinc-600">Targetowanie po zainteresowaniach i konkurentach</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">Reklamy aplikacji (App Campaigns)</td>
              <td className="p-4 text-zinc-600">Automatyczne reklamy we wszystkich kanałach Google</td>
              <td className="p-4 text-zinc-600">Instalacje i angażowanie użytkowników aplikacji</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Targetowanie w kampaniach Display</h2>
      <p>
        Siłą Display Ads jest precyzja targetowania — możliwość dotarcia do konkretnych grup użytkowników
        niezależnie od tego, jaką stronę aktualnie przeglądają.
      </p>
      <p>
        <strong>Targetowanie demograficzne</strong> — wiek, płeć, status rodzicielski, dochód gospodarstwa domowego.
        <strong>Zainteresowania i zwyczaje</strong> — grupy odbiorców na rynku (In-Market Audiences) szukający
        aktywnie produktów z Twojej kategorii; niestandardowe grupy odbiorców budowane na podstawie
        słów kluczowych, URL i aplikacji.
        <strong>Remarketing</strong> — <Link href="/remarketing">ponowne docieranie</Link> do osób,
        które wcześniej odwiedziły Twoją stronę, dodały produkt do koszyka lub obejrzały wideo.
        To jeden z najbardziej skutecznych typów targetowania display — konwersja z remarketingu
        bywa 2–3 razy wyższa niż z zimnego ruchu.
        <strong>Targetowanie kontekstualne</strong> — reklamy wyświetlane na stronach tematycznie powiązanych
        z Twoją ofertą (słowa kluczowe na stronie wydawcy, tematy, miejsca docelowe).
        <strong>Similar Audiences / Lookalike</strong> — grupy użytkowników o podobnym profilu
        do Twoich istniejących klientów lub odwiedzających.
      </p>

      <InfoBox>
        <strong>Display vs Search — kiedy co wybrać:</strong> Search Ads trafiają do użytkowników z aktywną intencją (szukają teraz). Display Ads budują świadomość zanim intencja się pojawi. W dobrze zbudowanej kampanii oba kanały współpracują: display buduje znajomość marki, search zamienia tę znajomość w konwersję. <Link href="/remarketing">Remarketing display</Link> domyka pętle — dociera ponownie do tych, którzy wykazali zainteresowanie, ale nie skonwertowali.
      </InfoBox>

      <h2>Kluczowe wskaźniki efektywności Display Ads</h2>
      <p>
        <strong><Link href="/cpm">CPM</Link></strong> (koszt tysiąca wyświetleń) — podstawowa miara kosztu
        zasięgu w kampaniach brand awareness. Niski CPM przy dobrej widoczności (viewability) oznacza
        efektywną kosztowo ekspozycję marki.
        <strong><Link href="/ctr">CTR</Link></strong> — wskaźnik klikalności display jest z natury niski
        (0,1–0,5%), bo użytkownicy nie szukają aktywnie i reklama ich przerywa. Wysoki CTR przy
        niskim koncie display częściej oznacza problem z przypadkowym klikaniem (szczególnie na mobile)
        niż faktyczne zainteresowanie.
        <strong>View-through conversions</strong> — konwersje przypisywane wyświetleniom reklamy display,
        po których użytkownik skonwertował przez inny kanał. Ważna miara świadcząca o asystującym
        wpływie display na finalną konwersję.
        <strong>Frequency</strong> — średnia liczba wyświetleń na użytkownika. Zbyt wysoka
        <Link href="/frequency"> częstotliwość</Link> powoduje banner blindness i irytację;
        zbyt niska może nie budować wystarczającej świadomości marki.
      </p>

      <h2>FAQ — Display Ads</h2>

      <h3>Jaki CTR jest normalny dla reklam display?</h3>
      <p>
        Średni CTR dla reklam display Google wynosi 0,1–0,3%. Wartości powyżej 1% zazwyczaj sugerują
        problemy z targetowaniem (reklamy wyświetlane na stronach, gdzie użytkownicy klikają przez przypadek)
        lub są efektem bardzo precyzyjnego remarketingu do małej, bardzo trafnej grupy.
        Dla kampanii display priorytetem nie powinien być CTR — ważniejszy jest
        <Link href="/cpa">koszt konwersji</Link> lub zasięg i <Link href="/cpm">CPM</Link>.
      </p>

      <h3>Czy Display Ads wpływają na SEO?</h3>
      <p>
        Bezpośrednio nie — Google wyraźnie oddziela wyniki organiczne od płatnych.
        Pośrednio tak: kampanie display budują świadomość marki, co zwiększa liczbę wyszukiwań brandowych —
        a te mają wyższy CTR organiczny i wyższy <Link href="/conversion-rate">współczynnik konwersji</Link>.
        Remarketing display dociera do użytkowników, którzy odwiedzili stronę organicznie,
        i zachęca do powrotu — wspierając wieloetapowe ścieżki konwersji.
      </p>

      <h3>Jak uniknąć marnowania budżetu w sieci Display?</h3>
      <p>
        Kluczowe działania to: regularne wykluczanie nieodpowiednich miejsc docelowych (kategorii stron,
        konkretnych URL, aplikacji mobilnych generujących przypadkowe kliknięcia), ustawianie
        frequency cap (np. max 3 wyświetlenia na użytkownika dziennie), zawężanie grup docelowych
        i używanie list remarketingowych jako nakładki na targetowanie kontekstualne.
      </p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Czym są Display Ads?",
            "acceptedAnswer": { "@type": "Answer", "text": "Display Ads to reklamy graficzne (banery, wideo, animacje) wyświetlane na stronach partnerskich sieci reklamowej Google (GDN) obejmującej ponad 2 miliony witryn i aplikacji. Docierają do użytkowników pasywnie — gdy przeglądają strony, nie aktywnie szukając." } },
          { "@type": "Question", "name": "Kiedy warto używać reklam Display?",
            "acceptedAnswer": { "@type": "Answer", "text": "Display sprawdza się przy budowaniu świadomości marki (TOFU), remarketingu do użytkowników którzy nie skonwertowali, kampaniach sezonowych i targetowaniu użytkowników in-market aktywnie rozważających zakup w Twojej kategorii." } }
        ]
      }) }} />
    </div>
  );
}
