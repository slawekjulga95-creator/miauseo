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

export default function Sitelinks() {
  return (
    <div className="prose-blog">
      <h2>Czym są sitelinks?</h2>
      <p>
        <strong>Sitelinks</strong> to dodatkowe linki do podstron witryny wyświetlane
        przez Google pod głównym wynikiem wyszukiwania — zazwyczaj dla zapytań brandowych
        (nazwa firmy, marki lub produktu). Mogą pojawić się w dwóch formach:
        jako sześć linków w dwóch kolumnach pod wynikiem (pełne sitelinks)
        lub jako jeden wiersz linków w tekście (one-line sitelinks).
        Google generuje je automatycznie — nie możesz ich ręcznie definiować.
      </p>
      <p>
        Sitelinks zajmują znacznie więcej przestrzeni w <Link href="/serp">SERP</Link>
        niż zwykły wynik, dominując ekran dla branded queries i zwiększając{" "}
        <Link href="/ctr">CTR</Link> o 20–50%. Sygnalizują też użytkownikowi,
        że Twoja strona jest wiarygodna i dobrze zorganizowana.
      </p>

      <h2>Kiedy Google wyświetla sitelinks?</h2>
      <p>
        Google wyświetla sitelinks, gdy uzna, że pomogą użytkownikowi szybciej dotrzeć
        do poszukiwanej sekcji witryny. Czynniki wpływające na ich pojawianie się:
        <strong>Zapytanie jest nawigacyjne lub brandowe</strong> — użytkownik szuka
        konkretnej marki lub strony.
        <strong>Witryna jest dobrze ustrukturyzowana</strong> — logiczna nawigacja,
        opisowe <Link href="/meta-title">meta tytuly</Link>, czytelna architektura informacji.
        <strong>Autorytet domeny</strong> — sitelinks częściej pojawiają się dla
        rozpoznawalnych marek z dobrze zbudowanym profilem.
      </p>

      <h2>Jak zachęcić Google do wyświetlania sitelinks?</h2>
      <p>
        Choć nie możesz wymusić sitelinks, możesz stworzyć warunki sprzyjające ich pojawieniu się.
        <strong>Czytelna nawigacja</strong> — głównemu menu powinny odpowiadać osobne,
        dobrze opisane podstrony z unikalnymi meta tytułami.
        <strong>Wyraźna strona główna jako anchor</strong> — strona główna powinna być
        jednoznacznie kojarzona z nazwą marki przez tytuł H1, meta title i treść.
        <strong>Dane strukturalne dla organizacji</strong> — schema.org Organization
        i WebSite z SearchAction pomaga Google zrozumieć strukturę marki.
        <strong>Wysoki CTR na branded queries</strong> — popularność marki w wyszukiwaniach
        przyspiesza wyświetlanie sitelinks.
      </p>

      <InfoBox>
        <strong>Nie możesz wybrać, które linki się pojawiają:</strong> Google decyduje,
        które podstrony trafiają do sitelinks na podstawie analizy nawigacji i zachowań
        użytkowników. Możesz jedynie pośrednio wpływać przez strukturę strony i meta tytuly.
        Opcja „Obniżanie pozycji sitelinków" w Google Search Console (dawna nazwa)
        pozwalała sugerować Google pominięcie konkretnych URL, ale została usunięta w 2016 roku.
      </InfoBox>

      <h2>FAQ — Sitelinks</h2>

      <h3>Czy sitelinks pojawiają się tylko dla dużych marek?</h3>
      <p>
        Nie — małe firmy z dobrze zorganizowaną stroną i wyraźną tożsamością brandową
        też mogą je mieć. Kluczowym czynnikiem jest konsekwentne używanie nazwy marki
        jako zapytania przez użytkowników i poprawna struktura witryny.
        Sitelinks są bardziej prawdopodobne, gdy masz wyraźnie wyróżniające się podstrony
        (np. cennik, blog, kontakt, o nas) z unikalnymi i opisowymi tytułami.
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
                "name": "Czym są sitelinks?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sitelinks to dodatkowe linki do podstron wyświetlane przez Google pod głównym wynikiem dla zapytań brandowych. Google generuje je automatycznie. Zwiększają CTR i widoczność w SERP. Sprzyjają im: czytelna nawigacja, unikalne meta tytuly i silna tożsamość brandowa."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
