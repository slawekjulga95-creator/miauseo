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

export default function OutboundLink() {
  return (
    <div className="prose-blog">
      <h2>Czym jest outbound link?</h2>
      <p>
        <strong>Outbound link</strong> (link wychodzący, link zewnętrzny wychodzący) to hiperłącze
        prowadzące z Twojej strony do witryny znajdującej się w innej domenie. Jest przeciwieństwem
        <Link href="/backlink"> backlinku</Link> — tamten prowadzi do Ciebie z zewnątrz,
        outbound link wychodzi od Ciebie na zewnątrz. Linki wewnętrzne (między stronami
        tej samej domeny) nie są outbound linkami.
      </p>
      <p>
        Outbound linki do wartościowych, wiarygodnych źródeł są naturalnym elementem
        każdej eksperckiej treści — tak jak artykuł naukowy cytuje inne prace.
        Google rozumie tę analogię i pozytywnie ocenia strony, które linkują
        do autorytatywnych, tematycznie powiązanych źródeł.
      </p>

      <h2>Czy outbound linki wpływają na SEO?</h2>
      <p>
        Tak — pośrednio i pozytywnie, jeśli są stosowane właściwie. Linkowanie do wiarygodnych
        źródeł zewnętrznych sygnalizuje Google kontekst tematyczny strony, poprawia jej
        trafność semantyczną i wzmacnia <Link href="/e-e-a-t">E-E-A-T</Link> —
        bo eksperci i wiarygodne strony naturalnie odwołują się do innych ekspertów
        i wiarygodnych źródeł.
      </p>
      <p>
        Powszechny mit SEO głosi, że outbound linki „tracą" autorytet domeny — jakby
        każdy link wychodzący osłabiał stronę. Nie ma na to dowodów w oficjalnych
        komunikatach Google. Linkowanie do źródeł o wysokim <Link href="/domain-authority">Domain Authority</Link>{" "}
        nie obniża Twojego autorytetu; może go wzmacniać przez asocjację tematyczną.
      </p>

      <h2>Kiedy używać nofollow przy outbound linkach?</h2>
      <p>
        <strong>Linki płatne i sponsorowane</strong> — wymagają atrybutu <code>rel="sponsored"</code>.
        <strong>Linki do treści niepewnej jakości</strong> — jeśli linkujesz do źródła,
        za które nie ręczysz, <Link href="/nofollow">nofollow</Link> jest odpowiednie.
        <strong>Linki afiliacyjne</strong> — <code>rel="sponsored"</code> to standard i wymóg wytycznych Google.
        <strong>Linki redakcyjne do wiarygodnych źródeł</strong> — nie wymagają nofollow;
        naturalny dofollow link do autorytetu branżowego jest właściwą praktyką.
      </p>

      <h2>Dobre praktyki stosowania outbound linków</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Praktyka</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Uzasadnienie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Linkuj do autorytatywnych źródeł</td><td className="p-4 text-zinc-600">Google, PubMed, raporty branżowe, uznane media — wzmacniają trafność tematyczną</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Otwieraj w nowej karcie (target="_blank")</td><td className="p-4 text-zinc-600">Użytkownik nie opuszcza Twojej strony, co poprawia czas sesji</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Dodaj rel="noopener noreferrer"</td><td className="p-4 text-zinc-600">Bezpieczeństwo — zapobiega atakom przez window.opener przy target="_blank"</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Regularnie sprawdzaj martwe linki</td><td className="p-4 text-zinc-600">Broken links obniżają UX i wysyłają błędy 404 — narzędzia: Screaming Frog, Ahrefs</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Liczba outbound linków ma znaczenie:</strong> Strona z dziesiątkami linków zewnętrznych
        na jednej podstronie wygląda jak katalog, nie jak ekspercka treść. Stosuj outbound linki
        selektywnie — tam, gdzie naprawdę dodają wartość dla czytelnika jako weryfikacja
        lub rozszerzenie informacji, nie jako ozdobnik czy próba manipulacji.
      </InfoBox>

      <h2>FAQ — Outbound Link</h2>

      <h3>Czy linkowanie do konkurencji jest błędem?</h3>
      <p>
        Nie — jeśli treść konkurenta jest naprawdę najlepszym źródłem dla czytelnika,
        linkowanie do niej jest uczciwe i korzystne dla UX. Google ceni strony,
        które priorytetyzują jakość doświadczenia użytkownika ponad ochronę przed konkurencją.
        Eksperci linkują do najlepszych źródeł, nie do własnych.
      </p>

      <h3>Jak sprawdzić, czy mam martwe linki wychodzące?</h3>
      <p>
        Screaming Frog (tryb Spider → raport „Response Codes" → filtr 4xx) crawluje wszystkie
        outbound linki i flaguje błędy 404. Ahrefs Site Audit identyfikuje broken external links
        w pełnym audycie technicznym. Regularne sprawdzanie raz na kwartał to dobra praktyka
        dla stron z dużą ilością treści linkującej.
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
                "name": "Czym jest outbound link?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Outbound link (link wychodzący) to hiperłącze prowadzące z Twojej strony do innej domeny. Linkowanie do wiarygodnych, tematycznie powiązanych źródeł pozytywnie wpływa na trafność semantyczną strony i E-E-A-T."
                }
              },
              {
                "@type": "Question",
                "name": "Czy outbound linki osłabiają SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nie — to mit. Linkowanie do autorytatywnych źródeł wzmacnia trafność tematyczną i E-E-A-T. Google pozytywnie ocenia strony, które odnoszą się do wiarygodnych zewnętrznych źródeł, tak jak ekspert cytuje inne prace."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
