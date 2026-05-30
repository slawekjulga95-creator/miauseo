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

export default function ConversionRate() {
  return (
    <div className="prose-blog">

      <h2>Czym jest Conversion Rate?</h2>
      <p>
        <strong>Conversion Rate</strong> (CR, współczynnik konwersji) to procent odwiedzających stronę,
        którzy wykonali pożądaną akcję — zakup, wypełnienie formularza, zapis na newsletter,
        pobranie pliku, telefon. Oblicza się go prosto:
        CR = (liczba konwersji / liczba sesji) × 100%.
        Jeśli na stronę weszło 1 000 osób i 23 z nich wypełniły formularz kontaktowy,
        Conversion Rate wynosi 2,3%.
      </p>
      <p>
        Warto od razu zaznaczyć, że „konwersja" to pojęcie zdefiniowane przez właściciela strony,
        nie przez algorytm. Sklep internetowy definiuje konwersję jako zakup.
        Agencja marketingowa — jako wypełniony formularz briefu. Bloger — jako zapis na newsletter.
        Kluczowe jest wyraźne zdefiniowanie celu, zanim zaczniesz mierzyć i optymalizować.
      </p>

      <h2>Makro- i mikrokonwersje</h2>
      <p>
        <strong>Makrokonwersja</strong> to główny cel strony — zakup, rejestracja konta, podpisanie umowy.
        To ona decyduje o przychodzie i jest najważniejszym wskaźnikiem efektywności.
      </p>
      <p>
        <strong>Mikrokonwersje</strong> to kroki na drodze do makrokonwersji — obejrzenie wideo produktowego,
        dodanie do koszyka, pobranie cennika, spędzenie ponad 3 minut na stronie usługi.
        Śledzenie mikrokonwersji pozwala zrozumieć, w którym miejscu <Link href="/funnel">lejka sprzedażowego</Link>
        użytkownicy rezygnują i gdzie optymalizacja przyniesie największy efekt.
      </p>

      <h2>Co wpływa na Conversion Rate?</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Czynnik</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Wpływ na CR</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Narzędzie diagnostyczne</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-medium text-ink">Dopasowanie treści do intencji</td>
              <td className="p-4 text-zinc-600">Bardzo wysokie</td>
              <td className="p-4 text-zinc-600">Analiza fraz w GSC, heatmapy</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Szybkość ładowania strony</td>
              <td className="p-4 text-zinc-600">Wysokie — każda sekunda to ~7% CR</td>
              <td className="p-4 text-zinc-600"><Link href="/core-web-vitals">Core Web Vitals</Link>, PageSpeed Insights</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Jasność i widoczność CTA</td>
              <td className="p-4 text-zinc-600">Wysokie</td>
              <td className="p-4 text-zinc-600">Nagrania sesji, A/B test</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Dowody społeczne (opinie, case studies)</td>
              <td className="p-4 text-zinc-600">Wysokie</td>
              <td className="p-4 text-zinc-600">A/B test, analiza scroll depth</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Złożoność formularza</td>
              <td className="p-4 text-zinc-600">Wysokie — każde pole to ~5% CR</td>
              <td className="p-4 text-zinc-600">Analiza porzuceń formularza (GA4)</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Jakość i źródło ruchu</td>
              <td className="p-4 text-zinc-600">Wysokie — ruch brandowy konwertuje lepiej</td>
              <td className="p-4 text-zinc-600">Raport kanałów w GA4</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">UX mobilny</td>
              <td className="p-4 text-zinc-600">Bardzo wysokie — ponad 60% ruchu to mobile</td>
              <td className="p-4 text-zinc-600">GA4 device report, nagrania mobile</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Jak interpretować Conversion Rate — benchmarki</h2>
      <p>
        „Dobry" CR to pojęcie względne — zależy od branży, modelu biznesowego, ceny produktu i źródła ruchu.
        E-commerce w Polsce osiąga średnio 1,5–3% CR — ale sklep z luksusową biżuterią przy CR 0,5%
        może być wysoce rentowny, jeśli każda transakcja to kilkadziesiąt tysięcy złotych.
        B2B SaaS z CR 5% na demo może być słabym wynikiem dla prostego narzędzia, ale znakomitym
        dla skomplikowanego oprogramowania enterprise.
      </p>
      <p>
        Zamiast porównywać się do branżowych benchmarków, skup się na <strong>poprawie własnego CR w czasie</strong>.
        Jeśli w ciągu roku podniosłeś CR z 1,8% do 2,4% — to 33% więcej konwersji
        bez zwiększania budżetu na ruch. To właśnie wartość optymalizacji współczynnika konwersji (CRO).
      </p>

      <InfoBox>
        <strong>CR a CPA — powiązanie kluczowe:</strong> Wyższy Conversion Rate bezpośrednio obniża <Link href="/cpa">koszt pozyskania konwersji (CPA)</Link>. Jeśli Twój budżet reklamowy to 5 000 zł, generujesz 1 000 kliknięć i masz CR 2% — koszt jednej konwersji to 250 zł. Podnosiąc CR do 4% przy tym samym budżecie, CPA spada do 125 zł. CRO jest często najszybszą drogą do rentowności kampanii.
      </InfoBox>

      <h2>Jak poprawić Conversion Rate — podejście systematyczne</h2>
      <p>
        <strong>Zacznij od danych, nie od przekonań</strong> — przed jakąkolwiek zmianą zbierz dane:
        <Link href="/google-analytics"> Google Analytics 4</Link> dla ścieżek konwersji i miejsc porzucenia,
        Hotjar lub Microsoft Clarity dla nagrań sesji i heatmap, Google Search Console dla fraz
        prowadzących na słabo konwertujące strony. Dane pokażą gdzie jest problem; dopiero potem szukasz rozwiązania.
      </p>
      <p>
        <strong>Testuj hipotezy przez <Link href="/ab-testing">A/B testing</Link></strong> — zmiana koloru przycisku
        CTA, skrócenie formularza z 8 do 4 pól, dodanie pieczęci bezpieczeństwa, zmiana nagłówka hero.
        Każda zmiana to hipoteza do przetestowania — nie opinia. Jedno udowodnione ulepszenie jest warte
        więcej niż dziesięć zmian wprowadzonych „bo tak wydawało się lepiej".
      </p>
      <p>
        <strong>Usuń tarcia i bariery</strong> — formularz z 10 polami, obowiązkowe zakładanie konta przed zakupem,
        niewidoczny przycisk CTA, wolne ładowanie — każda z tych barier kosztuje konwersje.
        Dobry <Link href="/user-experience">UX</Link> to przede wszystkim eliminacja przeszkód między
        użytkownikiem a celem, nie dodawanie ozdobnych elementów.
      </p>
      <p>
        <strong>Buduj zaufanie tam, gdzie użytkownik waha się</strong> — opinie klientów w pobliżu CTA,
        logotypy znanych partnerów lub mediów, gwarancja zwrotu, certyfikaty bezpieczeństwa, counter
        z liczbą obsłużonych klientów. Zaufanie redukuje wahanie i podnosi CR — szczególnie przy
        pierwszym kontakcie z marką.
      </p>

      <h2>FAQ — Conversion Rate</h2>

      <h3>Jaki CR jest dobry dla e-commerce?</h3>
      <p>
        Średnia dla e-commerce w Polsce to 1,5–3%. Poniżej 1% to sygnał ostrzegawczy — warto zbadać
        problemy z UX, szybkością strony i dopasowaniem oferty do ruchu. Powyżej 4% to wynik bardzo dobry,
        zazwyczaj osiągany przez sklepy z silnym brandem, prostą ścieżką zakupu i dużym ruchem brandowym.
      </p>

      <h3>Czy wysoki ruch zawsze oznacza wysoki CR?</h3>
      <p>
        Nie — i często jest odwrotnie. Kampanie nastawione na maksymalny zasięg (display, szerokie targetowanie)
        generują dużo ruchu o niskiej intencji zakupowej, co skutkuje niskim CR.
        Ruch brandowy (użytkownicy szukający konkretnie Twojej marki) i ruch z fraz transakcyjnych
        konwertuje wielokrotnie lepiej niż ruch z fraz informacyjnych.
      </p>

      <h3>Jak śledzić konwersje w Google Analytics 4?</h3>
      <p>
        W GA4 konwersje śledzi się przez zdarzenia (events) oznaczone jako kluczowe.
        Standardowe zdarzenia (purchase, generate_lead, form_submit) są dostępne od razu przy integracji;
        niestandardowe wymagają konfiguracji w GA4 lub wdrożenia przez <Link href="/google-tag-manager">Google Tag Manager</Link>.
        Ścieżki konwersji analizujesz w raporcie „Ścieżki" lub w sekcji „Atrybucja".
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
                "name": "Jaki Conversion Rate jest dobry dla e-commerce?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Średnia dla e-commerce w Polsce to 1,5–3%. Poniżej 1% to sygnał do zbadania problemów z UX i dopasowaniem oferty. Powyżej 4% to wynik bardzo dobry. Ważniejsza niż porównanie z benchmarkiem jest poprawa własnego CR w czasie."
                }
              },
              {
                "@type": "Question",
                "name": "Jak obliczyć Conversion Rate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "CR = (liczba konwersji / liczba sesji) × 100%. Przykład: 1000 sesji i 25 konwersji = CR 2,5%. Upewnij się, że licznik (konwersje) i mianownik (sesje lub użytkownicy) są spójne z definicją przyjętą w analityce."
                }
              },
              {
                "@type": "Question",
                "name": "Co to są mikrokonwersje?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Mikrokonwersje to kroki na drodze do głównego celu (makrokonwersji): dodanie do koszyka, obejrzenie wideo, pobranie cennika, spędzenie ponad X minut na stronie. Śledzenie mikrokonwersji pozwala zidentyfikować, gdzie użytkownicy rezygnują w lejku sprzedażowym."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
