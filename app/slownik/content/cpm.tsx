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

export default function Cpm() {
  return (
    <div className="prose-blog">

      <h2>Czym jest CPM?</h2>
      <p>
        <strong>CPM</strong> (Cost Per Mille, koszt za tysiąc — od łacińskiego <em>mille</em> = tysiąc)
        to model rozliczeń w reklamie, w którym reklamodawca płaci za każde 1000 wyświetleń reklamy,
        niezależnie od tego czy ktokolwiek w nią kliknął. To najstarszy model w reklamie internetowej —
        wywodzi się wprost z mediów tradycyjnych, gdzie „tysiąc odbiorców" było standardową jednostką
        rozliczeń prasowych i telewizyjnych.
      </p>
      <p>
        Formuła: CPM = (całkowity koszt / liczba wyświetleń) × 1000.
        Jeśli zapłaciłeś 500 zł za kampanię, która wygenerowała 200 000 wyświetleń,
        Twój CPM wynosi 2,50 zł. Odwrotnie — jeśli znasz CPM i budżet, możesz oszacować zasięg:
        przy CPM 5 zł i budżecie 1 000 zł osiągniesz 200 000 wyświetleń.
      </p>

      <h2>Gdzie stosuje się model CPM?</h2>
      <p>
        CPM dominuje wszędzie tam, gdzie celem jest widoczność i zasięg, a nie bezpośrednia akcja.
        <strong>Reklamy display</strong> w Google Display Network (GDN), baner na portalu informacyjnym,
        <strong>reklamy YouTube</strong> (przed filmem, w trakcie), programmatic display przez DSP,
        <strong>reklamy Meta</strong> przy kampaniach zasięgowych i świadomości marki —
        wszystkie te formaty mogą być rozliczane w modelu CPM. Wydawcy treści (portale, YouTube, serwisy informacyjne)
        wolą CPM, bo zarabiają za samo wyświetlenie reklamy, niezależnie od zachowania użytkownika.
      </p>

      <h2>CPM vs CPC vs CPA — kiedy co wybrać?</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Kryterium</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">CPM</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400"><Link href="/cpc">CPC</Link></th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400"><Link href="/cpa">CPA</Link></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-medium text-ink">Cel kampanii</td>
              <td className="p-4 text-zinc-600">Zasięg, brand awareness</td>
              <td className="p-4 text-zinc-600">Ruch, zainteresowanie</td>
              <td className="p-4 text-zinc-600">Konwersje, leady, sprzedaż</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Płacisz za</td>
              <td className="p-4 text-zinc-600">1000 wyświetleń</td>
              <td className="p-4 text-zinc-600">Kliknięcie</td>
              <td className="p-4 text-zinc-600">Konwersję</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Gwarancja</td>
              <td className="p-4 text-zinc-600">Wyświetlenia</td>
              <td className="p-4 text-zinc-600">Ruch na stronę</td>
              <td className="p-4 text-zinc-600">Żadnej — zależy od CR</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Etap lejka</td>
              <td className="p-4 text-zinc-600">TOFU (świadomość)</td>
              <td className="p-4 text-zinc-600">TOFU/MOFU</td>
              <td className="p-4 text-zinc-600">BOFU (konwersja)</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Ryzyko dla reklamodawcy</td>
              <td className="p-4 text-zinc-600">Brak kliknięć mimo wydatków</td>
              <td className="p-4 text-zinc-600">Ruch bez konwersji</td>
              <td className="p-4 text-zinc-600">Wymaga historii i danych</td>
            </tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>CPM a widoczność (viewability):</strong> Wyświetlenie w sensie CPM nie musi oznaczać, że użytkownik faktycznie <em>zobaczył</em> reklamę. IAB i Google definiują viewable impression jako reklamę widoczną w co najmniej 50% przez min. 1 sekundę (display) lub 2 sekundy (wideo). Platformy jak Google Ads oferują rozliczenie vCPM (viewable CPM), gdzie płacisz tylko za widoczne wyświetlenia — to bardziej uczciwa miara niż surowy CPM.
      </InfoBox>

      <h2>Jak interpretować CPM — co to jest dobra wartość?</h2>
      <p>
        CPM silnie zależy od branży, platformy, formatu reklamy i precyzji targetowania.
        Im węższe targetowanie, tym wyższy CPM — bo docieram do cenniejszej, bardziej trafnej grupy.
        Kampania retargetingowa (<Link href="/remarketing">remarketing</Link>) do użytkowników, którzy
        porzucili koszyk, ma wyższy CPM niż kampania do wszystkich użytkowników w Polsce —
        ale konwertuje wielokrotnie lepiej.
      </p>
      <p>
        Orientacyjne wartości CPM w Polsce (2025/2026): reklamy display Google GDN — 1–6 zł,
        YouTube pre-roll — 4–15 zł, Meta (Facebook/Instagram) — 8–25 zł przy precyzyjnym targetowaniu,
        premium portale newsowe — 20–60 zł. Wysoki CPM sam w sobie nie jest zły — jest zły
        tylko wtedy, gdy nie przekłada się na realny efekt biznesowy.
      </p>

      <h2>eCPM — efektywny CPM</h2>
      <p>
        <strong>eCPM</strong> (effective CPM) to wskaźnik porównawczy — pozwala zestawić kampanie
        rozliczane w różnych modelach (CPC, CPA, CPM) na wspólnej skali.
        eCPM = (całkowity przychód / liczba wyświetleń) × 1000.
        Dla wydawców (serwisów z reklamami) eCPM mówi ile zarabiają na tysiącu odsłon —
        niezależnie od modelu rozliczeń z reklamodawcami.
        Dla reklamodawców eCPM pozwala porównać koszt dotarcia do 1000 osób w kampaniach CPC i CPM.
      </p>

      <h2>FAQ — CPM</h2>

      <h3>Czy CPM ma sens w kampaniach performance?</h3>
      <p>
        Rzadko — model CPM nie jest zorientowany na akcję użytkownika. Jeśli zależy Ci na konwersjach,
        leadach lub ruchu na stronę, modele CPC lub CPA są bardziej odpowiednie.
        CPM ma sens przy celach zasięgowych: wprowadzenie nowego produktu, budowanie rozpoznawalności marki,
        <Link href="/remarketing">remarketing</Link> w sieci display do szerokiej grupy.
      </p>

      <h3>Co to jest vCPM i czy jest lepszy od CPM?</h3>
      <p>
        vCPM (viewable CPM) to model, w którym płacisz tylko za reklamy spełniające standard widoczności
        (min. 50% powierzchni w zasięgu wzroku przez min. 1 sekundę). Jest bardziej precyzyjny niż CPM
        — eliminuje płatności za reklamy poniżej linii ekranu, których użytkownik nigdy nie widział.
        Google Display Network oferuje opcję rozliczeń vCPM.
      </p>

      <h3>Jak CPM wpływa na częstotliwość (frequency)?</h3>
      <p>
        <Link href="/frequency">Frequency</Link> (częstotliwość) to średnia liczba wyświetleń reklamy
        dla jednego użytkownika. Przy wysokim CPM i ograniczonym budżecie ryzyko jest takie,
        że ta sama reklama wyświetla się tym samym użytkownikom zbyt wiele razy (banner blindness —
        zjawisko ślepoty na banery). Platformy pozwalają ustawiać cap częstotliwości (frequency cap),
        żeby ograniczyć liczbę wyświetleń dla jednego użytkownika.
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
                "name": "Jak obliczyć CPM?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "CPM = (całkowity koszt / liczba wyświetleń) × 1000. Przykład: 500 zł za 200 000 wyświetleń = CPM 2,50 zł. Odwrotnie: przy CPM 5 zł i budżecie 1000 zł osiągniesz 200 000 wyświetleń."
                }
              },
              {
                "@type": "Question",
                "name": "Kiedy wybrać CPM zamiast CPC?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "CPM sprawdza się przy kampaniach zasięgowych i brand awareness — gdy celem jest widoczność, nie kliknięcia. CPC jest lepszy gdy chcesz generować ruch i konwersje, bo płacisz tylko za faktyczne zainteresowanie."
                }
              },
              {
                "@type": "Question",
                "name": "Co to jest vCPM?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "vCPM (viewable CPM) to model, w którym płacisz tylko za reklamy faktycznie widoczne dla użytkownika (min. 50% powierzchni przez min. 1 sekundę). Jest dokładniejszy niż klasyczny CPM i eliminuje płatności za reklamy poza zasięgiem wzroku."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
