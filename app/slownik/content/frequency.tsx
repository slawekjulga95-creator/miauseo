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

export default function Frequency() {
  return (
    <div className="prose-blog">

      <h2>Czym jest Frequency w reklamie?</h2>
      <p>
        <strong>Frequency</strong> (częstotliwość) to średnia liczba razy, ile razy reklama wyświetliła się
        temu samemu użytkownikowi w danym czasie. Oblicza się ją prosto:
        Frequency = liczba wyświetleń / liczba unikalnych użytkowników (Reach).
        Jeśli kampania wygenerowała 100 000 wyświetleń przy zasięgu 25 000 unikalnych użytkowników,
        średnia częstotliwość wynosi 4.
      </p>
      <p>
        Frequency jest kluczowym wskaźnikiem w kampaniach zasięgowych rozliczanych w modelu
        <Link href="/cpm"> CPM</Link> — wszędzie tam, gdzie celem jest wywarcie wrażenia na odbiorcy,
        nie bezpośrednia konwersja. Zbyt niska częstotliwość może oznaczać, że reklama nie wybiła się
        z szumu reklamowego. Zbyt wysoka powoduje zjawisko <strong>banner blindness</strong> i
        irytację — efekt odwrotny do zamierzonego.
      </p>

      <h2>Frequency a efektywność reklamy — teoria „trzech kontaktów"</h2>
      <p>
        Klasyczna teoria mediów Herbert Krugman z lat 60-ych sugerowała, że skuteczna ekspozycja
        na reklamę wymaga trzech kontaktów: pierwszy — ciekawość (co to jest?), drugi — rozpoznanie
        i ocena (czy mi to potrzebne?), trzeci — decyzja lub zapamiętanie (czas na działanie lub zapamiętanie marki).
        W cyfrowym środowisku ta zasada jest uproszczona i zależy mocno od kontekstu:
        kampania display w zimnym ruchu może potrzebować 5–7 kontaktów zanim brand zostanie zapamiętany,
        podczas gdy remarketing przy użytkowniku z wysoką intencją może konwertować już przy 1–2 wyświetleniach.
      </p>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Frequency</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Efekt typowy</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Ocena</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-semibold text-ink">1–2</td>
              <td className="p-4 text-zinc-600">Słaba ekspozycja, mało zapamiętania</td>
              <td className="p-4 text-yellow-600 font-medium">Za niska dla brand awareness</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">3–5</td>
              <td className="p-4 text-zinc-600">Optymalne zapamiętanie, budowanie zainteresowania</td>
              <td className="p-4 text-green-600 font-semibold">Zazwyczaj optymalny zakres</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">6–10</td>
              <td className="p-4 text-zinc-600">Malejący zwrot, ryzyko irytacji</td>
              <td className="p-4 text-yellow-600 font-medium">Akceptowalny przy remarketingu</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">10+</td>
              <td className="p-4 text-zinc-600">Banner blindness, negatywne skojarzenia z marką</td>
              <td className="p-4 text-red-500 font-semibold">Sygnał do interwencji</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Frequency Cap — jak kontrolować częstotliwość</h2>
      <p>
        <strong>Frequency cap</strong> (ograniczenie częstotliwości) to ustawienie w kampanii reklamowej
        limitujące maksymalną liczbę wyświetleń reklamy dla jednego użytkownika w określonym czasie.
        W <Link href="/google-ads">Google Ads</Link> frequency cap ustawia się na poziomie:
        dziennym (np. max 3 wyświetlenia/użytkownik/dzień), tygodniowym lub na czas trwania kampanii.
        Meta Ads, YouTube i programmatic DSP oferują analogiczne funkcje.
      </p>
      <p>
        Frequency cap jest szczególnie ważny w kampaniach <Link href="/display-ads">display</Link>
        i YouTube skierowanych do wąskich grup użytkowników.
        Mała, precyzyjnie targetowana audience przy braku frequency cap szybko osiąga wysokie
        częstotliwości — co wyczerpuje odbiorcę zanim zdąży podjąć decyzję.
      </p>

      <InfoBox>
        <strong>Frequency w remarketingu — inne reguły:</strong> W kampaniach <Link href="/remarketing">remarketingowych</Link> wyższe frequency są bardziej akceptowalne, bo docierasz do osób, które już wyraziły zainteresowanie Twoją ofertą. Ale nawet tutaj frequency powyżej 10 w krótkim czasie jest sygnałem do obniżenia cap — użytkownik widujący tę samą reklamę wielokrotnie dziennie zaczyna ją blokować (AdBlock) lub rozwijać negatywne skojarzenie z marką.
      </InfoBox>

      <h2>Jak monitorować i optymalizować Frequency?</h2>
      <p>
        W Google Ads raport Frequency dostępny jest w kolumnie „Śr. częstotliwość wyświetleń" —
        dodajesz ją do raportu kampanii lub grup reklam. W Meta Ads częstotliwość widoczna jest
        bezpośrednio w raporcie Ads Manager.
      </p>
      <p>
        Gdy obserwujesz rosnące frequency przy malejącym <Link href="/ctr">CTR</Link> i rosnącym
        <Link href="/cpc">CPC</Link> — to klasyczny sygnał „audience fatigue": ta sama grupa użytkowników
        widziała Twoją reklamę za dużo razy. Rozwiązania: odświeżenie kreacji reklamowej
        (nowe zdjęcia, nagłówki, CTA), poszerzenie grupy docelowej lub dodanie nowego segmentu,
        rotacja reklam w kampanii i obniżenie frequency cap.
      </p>

      <h2>FAQ — Frequency</h2>

      <h3>Jaka jest optymalna częstotliwość dla kampanii display?</h3>
      <p>
        Nie ma jednej universalnej odpowiedzi, ale w kampaniach brand awareness optymalne frequency
        to zazwyczaj 3–5 w ciągu tygodnia. Dla remarketingu akceptowalne jest do 7–10.
        Kluczowe: monitoruj CTR i konwersje względem wzrostu frequency — gdy CTR spada a frequency rośnie,
        masz audience fatigue.
      </p>

      <h3>Czy Frequency Cap obniża zasięg kampanii?</h3>
      <p>
        Przy ograniczonym budżecie i wąskiej grupie — tak. Frequency cap oznacza, że po osiągnięciu
        limitu wyświetleń dla danego użytkownika, Google przestaje mu pokazywać reklamę.
        Budżet jest alokowany na nowych użytkowników lub na następny dzień po resecie cap.
        W efekcie zwiększa się Reach przy niższej Frequency — zazwyczaj korzystna zamiana.
      </p>

      <h3>Jak frequency różni się między kanałami reklamowymi?</h3>
      <p>
        Email marketing mierzy frequency przez liczbę wysłanych emaili w danym czasie — za wysoka
        powoduje wypisy z listy i zgłoszenia spamu. YouTube mierzy frequency przez obejrzenia
        lub wyświetlenia reklamy przed filmem. Display liczy każde załadowanie banera w oknie przeglądarki.
        Metodologie liczenia nie są porównywalne między kanałami — frequency 5 w emailu to co innego
        niż frequency 5 w display.
      </p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Czym jest Frequency w reklamie?",
            "acceptedAnswer": { "@type": "Answer", "text": "Frequency (częstotliwość) to średnia liczba wyświetleń reklamy dla jednego użytkownika. Oblicza się ją: Frequency = wyświetlenia / unikalny zasięg. Za niska częstotliwość = słabe zapamiętanie. Za wysoka = banner blindness i irytacja." } },
          { "@type": "Question", "name": "Co to jest Frequency Cap?",
            "acceptedAnswer": { "@type": "Answer", "text": "Frequency Cap to limit wyświetleń reklamy dla jednego użytkownika w określonym czasie (dzień, tydzień, kampania). Chroni przed nadmierną ekspozycją powodującą irytację i zmęczenie reklamą (audience fatigue)." } },
          { "@type": "Question", "name": "Jaka jest optymalna częstotliwość reklam display?",
            "acceptedAnswer": { "@type": "Answer", "text": "Dla kampanii brand awareness: 3–5 wyświetleń tygodniowo. Dla remarketingu: do 7–10. Gdy CTR spada przy rosnącej frequency — to sygnał audience fatigue wymagający odświeżenia kreacji lub poszerzenia grupy docelowej." } }
        ]
      }) }} />
    </div>
  );
}
