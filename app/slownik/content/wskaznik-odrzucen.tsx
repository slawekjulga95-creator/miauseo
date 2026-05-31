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

export default function WskaznikOdrzucen() {
  return (
    <div className="prose-blog">
      <h2>Czym jest wskaźnik odrzuceń?</h2>
      <p>
        <strong>Wskaźnik odrzuceń</strong> (bounce rate) to procent sesji,
        w których użytkownik opuścił stronę bez wykonania żadnej dodatkowej interakcji —
        odwiedził jedną podstronę i wyszedł. W Google Analytics 4 definicja się zmieniła:
        zamiast wskaźnika odrzuceń GA4 używa pojęcia <strong>engaged sessions</strong>
        (sesje zaangażowane) — trwające ponad 10 sekund, obejmujące co najmniej jedno
        zdarzenie konwersji lub dwie odsłony. Bounce rate w GA4 to odwrotność
        engagement rate: 100% minus % sesji zaangażowanych.
      </p>
      <p>
        Wysoki wskaźnik odrzuceń może — ale nie musi — sygnalizować problemy.
        Zależy od kontekstu: strona kontaktowa z wysokim bounce rate może być
        idealna, jeśli użytkownicy znaleźli numer telefonu i zadzwonili.
        Blog informacyjny z wysokim bounce rate oznacza, że użytkownicy przeczytali
        artykuł i wyszli — co może być właściwym zachowaniem.
      </p>

      <h2>Kiedy wysoki wskaźnik odrzuceń jest problemem?</h2>
      <p>
        <strong>Landing page</strong> — wysoki bounce rate na stronie docelowej kampanii
        z niskim CTR na CTA to sygnał niedopasowania (reklama nie odpowiada treści strony
        lub treść nie spełnia oczekiwań po reklamie).
        <strong>Strona produktu</strong> — użytkownik odchodzi bez dodania do koszyka
        lub przejrzenia innych produktów to utracona sprzedaż.
        <strong>Strona główna</strong> — jeśli użytkownicy trafiają na stronę główną
        i od razu wychodzą, może to oznaczać niejasny przekaz wartości lub wolne ładowanie.
      </p>

      <h2>Jak interpretować wskaźnik odrzuceń?</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Typ strony</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Normalny zakres bounce rate</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Sygnał alarmowy</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">E-commerce</td><td className="p-4 text-zinc-600">30–55%</td><td className="p-4 text-zinc-600">&gt; 65%</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Blog / artykuły</td><td className="p-4 text-zinc-600">60–80%</td><td className="p-4 text-zinc-600">&gt; 90%</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Landing page</td><td className="p-4 text-zinc-600">40–60%</td><td className="p-4 text-zinc-600">&gt; 75%</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Strona główna</td><td className="p-4 text-zinc-600">25–50%</td><td className="p-4 text-zinc-600">&gt; 65%</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Bounce rate w GA4 vs. Universal Analytics:</strong> W Universal Analytics
        bounce rate był mierzony jako procent sesji z jedną odsłoną — jakakolwiek interakcja
        (kliknięcie, formularz) była traktowana jako „nieodrzucona". W GA4 sesja jest
        „zaangażowana" jeśli trwa ponad 10s lub zawiera zdarzenie konwersji.
        Porównuj dane GA4 z danymi UA ostrożnie — metodologia jest inna.
      </InfoBox>

      <h2>FAQ — Wskaźnik Odrzuceń</h2>

      <h3>Czy wysoki wskaźnik odrzuceń wpływa na SEO?</h3>
      <p>
        Pośrednio. Google nie używa bounce rate z GA4 jako bezpośredniego czynnika
        rankingowego (nie ma dostępu do danych GA4 każdego serwisu). Jednak{" "}
        <Link href="/user-signals">sygnały użytkownika</Link> z danych Chrome
        (pogo-sticking, dwell time) mogą korelować z bounce rate i pośrednio wpływać
        na ocenę jakości strony przez algorytm.
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
                "name": "Czym jest wskaźnik odrzuceń?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Wskaźnik odrzuceń (bounce rate) to procent sesji jednostronicowych bez interakcji. W GA4 zastąpiony przez engagement rate. Wysoki wskaźnik na landing page lub stronie produktu sygnalizuje problem UX. Na blogu może być naturalny."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
