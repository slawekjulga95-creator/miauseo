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

export default function ZasiegOrganiczny() {
  return (
    <div className="prose-blog">
      <h2>Czym jest zasięg organiczny?</h2>
      <p>
        <strong>Zasięg organiczny</strong> to liczba unikalnych użytkowników, do których
        dociera Twoja treść bez płatnej promocji — przez bezpłatne wyniki wyszukiwania
        (SEO), organiczne posty w mediach społecznościowych, bezpośrednie wejścia
        lub referral z innych stron. Jest miernikiem naturalnej dystrybucji treści
        w przeciwieństwie do płatnego zasięgu osiąganego przez reklamy.
      </p>
      <p>
        W kontekście SEO zasięg organiczny jest często tożsamy z{" "}
        <Link href="/organic-traffic">ruchem organicznym</Link> — liczbą użytkowników
        docierających przez Google. W kontekście social media oznacza użytkowników,
        którzy zobaczyli post bez płatnej amplifikacji.
      </p>

      <h2>Zasięg organiczny w SEO vs. social media</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Kanał</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Czynniki zasięgu</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Trend</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Google (SEO)</td><td className="p-4 text-zinc-600">Pozycje w SERP, wolumen fraz, CTR</td><td className="p-4 text-zinc-600">Stabilny przy dobrym SEO; zagrożony przez AI Overviews</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Facebook</td><td className="p-4 text-zinc-600">Algorytm feedu, zaangażowanie, czas</td><td className="p-4 text-zinc-600">Dramatycznie spada od 2012 — dziś 1–5% followersów</td></tr>
            <tr><td className="p-4 font-semibold text-ink">LinkedIn</td><td className="p-4 text-zinc-600">Relevance, early engagement, format (tekst vs. link)</td><td className="p-4 text-zinc-600">Wyższy niż FB; posty tekstowe mają przewagę</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Instagram</td><td className="p-4 text-zinc-600">Reels, saves, shares, czas oglądania</td><td className="p-4 text-zinc-600">Spada dla zwykłych postów, rośnie dla Reels</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Jak zwiększyć zasięg organiczny?</h2>
      <p>
        <strong>W SEO</strong> — systematyczna rozbudowa treści na nowe frazy,{" "}
        <Link href="/link-building">link building</Link>, optymalizacja{" "}
        <Link href="/ctr">CTR</Link> przez meta tagi, poprawa pozycji dla fraz
        na pozycjach 4–10. Zasięg organiczny w Google jest bezpośrednio proporcjonalny
        do widoczności dla wartościowych fraz.
      </p>
      <p>
        <strong>W social media</strong> — tworzenie treści generujących zaangażowanie
        (komentarze, udostępnienia) w pierwszych godzinach po publikacji, użycie formatów
        preferowanych przez algorytm (Reels na Instagram, posty tekstowe na LinkedIn),
        regularność publikacji sygnalizująca algorytmowi aktywność profilu.
      </p>

      <InfoBox>
        <strong>Zasięg organiczny jest aktywem długoterminowym:</strong> Artykuł blogowy
        publikowany dziś może generować zasięg organiczny przez 3–5 lat przy odpowiedniej
        optymalizacji SEO. Post w social mediach ma zasięg przez 24–48 godzin.
        Inwestowanie w treści SEO buduje kumulujący się zasięg, podczas gdy treści
        social wymagają ciągłego wysiłku dla utrzymania widoczności.
      </InfoBox>

      <h2>FAQ — Zasięg Organiczny</h2>

      <h3>Dlaczego zasięg organiczny w social media spada?</h3>
      <p>
        Platformy social media celowo ograniczają organiczny zasięg, aby skłonić firmy
        do płatnej promocji. Facebook zredukował zasięg organiczny stron z ok. 16%
        followersów w 2012 roku do 1–5% w 2024. To strukturalna zmiana modelu biznesowego
        platform — nie czasowy problem techniczny. Dlatego strategia obecności w social media
        powinna opierać się na kombinacji organicznej treści budującej społeczność
        i płatnych kampanii dla amplifikacji.
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
                "name": "Czym jest zasięg organiczny?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Zasięg organiczny to liczba unikalnych użytkowników docierających do treści bez płatnej promocji — przez SEO, organiczne posty w social media lub direct. W SEO jest tożsamy z ruchem organicznym. Zasięg organiczny w social media dramatycznie spada od lat."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
