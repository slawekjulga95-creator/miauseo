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

export default function Funnel() {
  return (
    <div className="prose-blog">

      <h2>Skąd pochodzi model lejka sprzedażowego?</h2>
      <p>
        Lejek sprzedażowy (sales funnel) wywodzi się z modelu AIDA — Awareness, Interest, Desire, Action —
        opracowanego przez Eliasa Lewisa w 1898 roku jako framework opisu procesu sprzedażowego.
        Metafora lejka jest prosta i trafna: na górze trafia duża liczba potencjalnych klientów,
        którzy o Tobie słyszeli lub Cię znaleźli. Z każdym kolejnym etapem część z nich odpada.
        Na dole zostaje wąski strumień — ci, którzy faktycznie kupili lub dokonali konwersji.
        Im lepiej zoptymalizowany lejek, tym więcej osób przechodzi przez każdą bramkę z minimalnym odpowiednim.
      </p>

      <h2>Czym jest Funnel (Lejek Sprzedażowy)?</h2>
      <p>
        <strong>Funnel</strong> to model opisujący drogę potencjalnego klienta od pierwszego kontaktu z marką
        do finalnej konwersji — zakupu, podpisania umowy, rejestracji. W marketingu cyfrowym termin
        rozszerzono poza sprzedaż: lejek może opisywać każdą ścieżkę prowadzącą do dowolnego
        pożądanego działania użytkownika. Jego struktura pozwala planować treści, kampanie reklamowe
        i doświadczenie użytkownika tak, żeby wspierać przejście przez kolejne etapy.
      </p>
      <p>
        Kluczowa zasada: różni użytkownicy na różnych etapach lejka potrzebują <em>różnych</em> przekazów,
        treści i kanałów. Reklama display skierowana do kogoś, kto nigdy nie słyszał o Twojej marce,
        powinna wyglądać zupełnie inaczej niż remarketing do kogoś, kto porzucił koszyk.
        Traktowanie wszystkich użytkowników jak gotowych do zakupu to jeden z najkosztowniejszych błędów
        w marketingu cyfrowym.
      </p>

      <h2>Etapy lejka i odpowiadające strategie</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Etap</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Skrót</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Cel użytkownika</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Treści i kanały</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-semibold text-ink">Świadomość (Awareness)</td>
              <td className="p-4 text-zinc-600 font-bold">TOFU</td>
              <td className="p-4 text-zinc-600">Poznaje problem lub kategorię</td>
              <td className="p-4 text-zinc-600">Blog, SEO, <Link href="/display-ads">display</Link>, video, social</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">Zainteresowanie (Interest)</td>
              <td className="p-4 text-zinc-600 font-bold">TOFU/MOFU</td>
              <td className="p-4 text-zinc-600">Szuka informacji i opcji</td>
              <td className="p-4 text-zinc-600">Poradniki, webinary, newsletter, porównania</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">Rozważanie (Consideration)</td>
              <td className="p-4 text-zinc-600 font-bold">MOFU</td>
              <td className="p-4 text-zinc-600">Ocenia konkretne rozwiązania</td>
              <td className="p-4 text-zinc-600">Case studies, demo, <Link href="/remarketing">remarketing</Link>, emaile</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">Decyzja (Decision)</td>
              <td className="p-4 text-zinc-600 font-bold">BOFU</td>
              <td className="p-4 text-zinc-600">Wybiera dostawcę / produkt</td>
              <td className="p-4 text-zinc-600">Oferty, recenzje, strony produktowe, Google Ads search</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">Działanie (Action)</td>
              <td className="p-4 text-zinc-600 font-bold">BOFU</td>
              <td className="p-4 text-zinc-600">Konwertuje — kupuje, kontaktuje się</td>
              <td className="p-4 text-zinc-600"><Link href="/landing-page">Landing page</Link>, checkout, formularz kontaktu</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>TOFU, MOFU, BOFU — skróty, które warto znać</h2>
      <p>
        <strong>TOFU</strong> (Top of Funnel — góra lejka) to etap budowania świadomości.
        Użytkownik nie zna Cię lub dopiero dowiaduje się o problemie, który rozwiązujesz.
        Treści TOFU są edukacyjne, szeroke i nastawione na duży zasięg: artykuły blogowe odpowiadające
        na ogólne pytania informacyjne, wideo wyjaśniające problem, posty w social media.
        <Link href="/ctr"> CTR</Link> i <Link href="/conversion-rate">CR</Link> na tym etapie są niskie —
        to normalne, bo użytkownik jeszcze nie jest gotowy na zakup.
      </p>
      <p>
        <strong>MOFU</strong> (Middle of Funnel — środek lejka) to etap rozważania. Użytkownik rozumie
        problem, szuka rozwiązania i porównuje opcje. Treści MOFU są bardziej szczegółowe: poradniki
        „jak wybrać X", porównania produktów, case studies, webinary, e-booki z lead magnetem.
        To tu zaczyna się zbieranie kontaktów — newsletter i lead magnet są typowymi narzędziami MOFU.
      </p>
      <p>
        <strong>BOFU</strong> (Bottom of Funnel — dół lejka) to etap decyzji i działania.
        Użytkownik jest gotowy do zakupu — potrzebuje ostatniego impulsu: dobrej ceny, gwarancji,
        dowodu społecznego, prostej ścieżki zakupu. To tu działają kampanie search z frazami transakcyjnymi,
        remarketing do porzucających koszyk i oferty z ograniczonym terminem.
        <Link href="/quality-score"> Quality Score</Link> i trafność landing page są krytyczne na tym etapie.
      </p>

      <InfoBox>
        <strong>Lejek nie jest liniowy:</strong> Rzeczywista ścieżka klienta rzadko przebiega przez etapy jeden po drugim. Użytkownik może trafić bezpośrednio do BOFU przez rekomendację znajomego. Może krążyć między MOFU i TOFU przez tygodnie. Może konwertować przy pierwszym kontakcie lub po 20 punktach styku. Model lejka to uproszczenie — przydatne do planowania, ale nie absolutna mapa podróży klienta. Analiza wielokanałowa w GA4 pokaże Ci, jak faktycznie wygląda ścieżka w Twojym biznesie.
      </InfoBox>

      <h2>Jak optymalizować lejek sprzedażowy?</h2>
      <p>
        <strong>Zidentyfikuj punkty odpadu</strong> — sprawdź w <Link href="/google-analytics">Google Analytics 4</Link>
        raporty ścieżek konwersji i analitykę lejka (funnel exploration). W którym miejscu użytkownicy
        rezygnują? Odpowiedź wskazuje, gdzie leży problem: zły ruch (TOFU), słaba treść angażująca (MOFU)
        czy trudna ścieżka zakupowa (BOFU).
      </p>
      <p>
        <strong>Dopasuj przekaz do etapu</strong> — reklama remarketingowa do osoby, która była na stronie
        raz 6 miesięcy temu, powinna wyglądać inaczej niż ta skierowana do kogoś, kto porzucił koszyk wczoraj.
        Segmentacja list remarketingowych według głębokości zaangażowania jest fundamentem efektywnej reklamy BOFU.
      </p>
      <p>
        <strong>Skróć ścieżkę gdzie to możliwe</strong> — każdy dodatkowy krok w procesie zakupu lub
        rejestracji obniża <Link href="/conversion-rate">współczynnik konwersji</Link>.
        Testuj wersje z krótszymi formularzami, opcją zakupu bez rejestracji, checkout na jednej stronie.
        <Link href="/ab-testing"> A/B testing</Link> na stronach BOFU przynosi zazwyczaj największy zwrot z inwestycji.
      </p>

      <h2>FAQ — Funnel</h2>

      <h3>Czym różni się funnel sprzedażowy od marketingowego?</h3>
      <p>
        Funnel marketingowy obejmuje całą ścieżkę od świadomości do zakupu — jest szerzej rozumiany
        i zarządzany przez marketing. Funnel sprzedażowy skupia się na etapach bliskich finalizacji
        transakcji — jest zazwyczaj własnością działu sprzedaży (w B2B: prospecting, kwalifikacja, oferta, zamknięcie).
        W małych firmach i e-commerce rozróżnienie jest umowne — jedna osoba lub jeden dział zarządza całością.
      </p>

      <h3>Jak lejek sprzedażowy łączy się z SEO?</h3>
      <p>
        <Link href="/keyword-research">Keyword research</Link> uwzględniający etapy lejka jest fundamentem
        content SEO. Frazy informacyjne (jak, co to, dlaczego) służą TOFU.
        Frazy porównawcze (X vs Y, najlepszy X do Y) obsługują MOFU.
        Frazy transakcyjne (kup X, cena X, X Kraków) to BOFU.
        Strona, która ma treści dla każdego etapu, dociera do użytkownika niezależnie od tego,
        gdzie w lejku aktualnie się znajduje — i prowadzi go do konwersji organicznie.
      </p>

      <h3>Czy model lejka jest nadal aktualny w 2026 roku?</h3>
      <p>
        Model jest uproszczony i był wielokrotnie modyfikowany (od AIDA przez RACE do flywheel HubSpot).
        Rzeczywiste ścieżki klientów są nieliniowe i wielokanałowe. Ale lejek jako framework planowania
        treści, kampanii i doświadczenia użytkownika pozostaje użyteczny — pod warunkiem traktowania go
        jako mapy orientacyjnej, nie sztywnego algorytmu. Uzupełniaj go danymi z analityki
        i regularnie weryfikuj, czy odpowiada rzeczywistemu zachowaniu Twoich klientów.
      </p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Co to jest funnel sprzedażowy?",
            "acceptedAnswer": { "@type": "Answer", "text": "Funnel (lejek sprzedażowy) to model opisujący drogę klienta od pierwszego kontaktu z marką do konwersji. Etapy: Awareness (świadomość), Interest (zainteresowanie), Consideration (rozważanie), Decision (decyzja), Action (działanie). Na każdym etapie część potencjalnych klientów odpada." } },
          { "@type": "Question", "name": "Co oznaczają skróty TOFU, MOFU, BOFU?",
            "acceptedAnswer": { "@type": "Answer", "text": "TOFU (Top of Funnel) — góra lejka, etap świadomości. MOFU (Middle of Funnel) — środek lejka, etap rozważania i porównywania. BOFU (Bottom of Funnel) — dół lejka, etap decyzji i konwersji. Każdy etap wymaga innych treści i kanałów reklamowych." } },
          { "@type": "Question", "name": "Jak SEO wpisuje się w lejek sprzedażowy?",
            "acceptedAnswer": { "@type": "Answer", "text": "Frazy informacyjne obsługują TOFU, porównawcze — MOFU, transakcyjne — BOFU. Strategia SEO obejmująca keyword research na każdym etapie lejka pozwala organicznie docierać do użytkowników niezależnie od etapu ścieżki zakupowej." } }
        ]
      }) }} />
    </div>
  );
}
