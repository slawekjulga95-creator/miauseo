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

export default function Remarketing() {
  return (
    <div className="prose-blog">
      <h2>Czym jest remarketing?</h2>
      <p>
        <strong>Remarketing</strong> (retargeting) to technika reklamowa polegająca
        na ponownym dotarciu z reklamą do użytkowników, którzy wcześniej odwiedzili
        Twoją stronę lub aplikację, ale nie wykonali pożądanej akcji — zakupu,
        wypełnienia formularza, pobrania materiału. Zamiast kierować każdą reklamę
        do zimnych odbiorców, remarketing przypomina o Twojej ofercie osobom,
        które już ją poznały i wyraziły zainteresowanie.
      </p>
      <p>
        Remarketing jest dostępny w <Link href="/google-ads">Google Ads</Link>
        (na stronach partnerów Display i w sieci wyszukiwania — RLSA),
        Meta Ads, LinkedIn Ads i większości platform reklamowych.
        Technicznie opiera się na plikach cookie lub pikselu śledzącym
        (<Link href="/google-tag-manager">Google Tag Manager</Link> + GA4/Meta Pixel)
        identyfikującym użytkownika między sesjami i witrynami.
      </p>

      <h2>Typy remarketingu</h2>
      <p>
        <strong>Remarketing standardowy</strong> — reklamy display wyświetlane użytkownikom,
        którzy odwiedzili Twoją stronę, podczas przeglądania innych witryn w sieci Google.
        Najszerszy zasięg, stosunkowo niski koszt per wyświetlenie.
      </p>
      <p>
        <strong>RLSA (Remarketing Lists for Search Ads)</strong> — remarketing w sieci
        wyszukiwania. Pozwala zmodyfikować stawki lub wyświetlać inne reklamy użytkownikom,
        którzy wcześniej byli na Twojej stronie, gdy znów wpisują powiązane zapytania.
        Wysoka intencja + znajomość marki = wysoka konwersja.
      </p>
      <p>
        <strong>Dynamiczny remarketing</strong> — automatycznie generuje reklamy
        pokazujące konkretne produkty lub usługi, które użytkownik przeglądał.
        Kluczowy dla e-commerce: ktoś, kto oglądał buty rozmiar 42 w kolorze czarnym,
        widzi dokładnie te buty w reklamie.
      </p>
      <p>
        <strong>Customer Match</strong> — upload własnej listy emaili do Google Ads
        i targetowanie tych użytkowników w wyszukiwarce, Display, YouTube.
        Łączy dane CRM z zasięgiem reklamowym.
      </p>

      <h2>Dlaczego remarketing jest tak efektywny?</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Czynnik</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Wyjaśnienie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Znajomość marki</td><td className="p-4 text-zinc-600">Użytkownik już widział ofertę — niższy próg decyzji niż przy zimnym kontakcie</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Wyższa intencja</td><td className="p-4 text-zinc-600">Osoba, która odwiedziła stronę produktu, jest bliżej zakupu niż random użytkownik</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Niższy CPC/CPM</td><td className="p-4 text-zinc-600">Mniejsze listy, ale wyższy CTR — efektywność per złotówkę wyższa niż broad targeting</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Dokończenie lejka</td><td className="p-4 text-zinc-600">Większość użytkowników nie kupuje przy pierwszej wizycie — remarketing domyka sprzedaż</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Remarketing a prywatność (cookies, ITP, Privacy Sandbox):</strong> Zmiany
        w przeglądarkach (Safari ITP, Firefox ETP) i planowane wycofanie third-party cookies
        przez Chrome zmieniają krajobraz remarketingu. Przyszłość to first-party data
        — dane zbierane bezpośrednio (email, CRM, GA4 z server-side tagging) i
        Privacy Sandbox Google. Strategie remarketingowe oparte wyłącznie na third-party
        cookies są coraz mniej skuteczne i wymagają aktualizacji.
      </InfoBox>

      <h2>FAQ — Remarketing</h2>

      <h3>Jak długo powinna trwać lista remarketingowa?</h3>
      <p>
        Zależy od cyklu zakupowego branży. E-commerce FMCG: 7–14 dni (decyzje szybkie).
        Usługi B2B, nieruchomości, edukacja: 30–90 dni (długi cykl decyzyjny).
        Maksymalny czas trwania cookie remarketingowego to 540 dni w Google Ads.
        Im dłużej użytkownik jest na liście bez konwersji, tym niżej spada jego skłonność
        do zakupu — warto dostosować stawki malejąco w czasie.
      </p>

      <h3>Czy remarketing działa bez Google Analytics?</h3>
      <p>
        Wymaga tagu remarketingowego Google Ads lub połączenia z GA4 (Audiences).
        <Link href="/google-tag-manager"> Google Tag Manager</Link> znacznie upraszcza
        wdrożenie — pozwala dodać tag bez ingerencji w kod strony.
        Bez tagowania użytkowników nie możesz budować list remarketingowych.
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
                "name": "Czym jest remarketing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Remarketing to technika reklamowa polegająca na ponownym dotarciu z reklamą do użytkowników, którzy odwiedzili Twoją stronę, ale nie dokonali konwersji. Jest dostępny w Google Ads (Display, RLSA, dynamiczny) i Meta Ads. Wyższy CTR i niższy CPA niż przy zimnym targetowaniu."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
