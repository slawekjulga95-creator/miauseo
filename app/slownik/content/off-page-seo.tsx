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

export default function OffPageSeo() {
  return (
    <div className="prose-blog">
      <h2>Czym jest off-page SEO?</h2>
      <p>
        <strong>Off-page SEO</strong> to wszystkie działania optymalizacyjne podejmowane
        <em> poza własną stroną internetową</em>, które wpływają na jej pozycje
        w wynikach wyszukiwania. Podczas gdy <Link href="/on-page-seo">on-page SEO</Link>{" "}
        zajmuje się treścią, strukturą i technikaliami witryny, off-page SEO koncentruje się
        na budowaniu autorytetu domeny w oczach Google — przez sygnały zewnętrzne.
      </p>
      <p>
        Fundamentem off-page SEO jest <Link href="/link-building">link building</Link> —
        pozyskiwanie wartościowych <Link href="/backlink">backlinków</Link> z wiarygodnych,
        tematycznie powiązanych domen. Ale współczesne off-page SEO to znacznie więcej
        niż samo budowanie profilu linków.
      </p>

      <h2>Elementy off-page SEO</h2>
      <p>
        <strong>Link building</strong> — backlinki pozostają najsilniejszym sygnałem rankingowym.
        Liczy się jakość, trafność tematyczna i naturalność profilu, nie ilość.
      </p>
      <p>
        <strong>Cytowania lokalne (Local Citations)</strong> — dla firm lokalnych,
        spójne wpisy <Link href="/nap">NAP</Link> w katalogach branżowych i mapach
        budują autorytet lokalny i widoczność w <Link href="/local-pack">Local Pack</Link>.
      </p>
      <p>
        <strong>Wzmianki o marce (Brand Mentions)</strong> — Google rozumie wzmianki
        o marce nawet bez linku. Cytowania nazwy firmy w kontekście branżowym
        (niezakotwiczone wzmianki) mogą być uwzględniane jako sygnał autorytetu.
      </p>
      <p>
        <strong>Social signals</strong> — udostępnienia, komentarze i zaangażowanie
        w mediach społecznościowych nie są bezpośrednim czynnikiem rankingowym,
        ale amplifikują zasięg treści i zwiększają szanse na zdobycie naturalnych linków.
      </p>
      <p>
        <strong>Recenzje i opinie online</strong> — oceny w Google, Trustpilot i branżowych
        portalach wpływają na <Link href="/e-e-a-t">E-E-A-T</Link> (Expertise, Experience,
        Authoritativeness, Trustworthiness) i są szczególnie istotne dla firm lokalnych
        i stron YMYL (Your Money, Your Life).
      </p>

      <h2>Off-page vs On-page — podział odpowiedzialności</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">On-page SEO</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Off-page SEO</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 text-zinc-600">Treść i słowa kluczowe</td><td className="p-4 text-zinc-600">Backlinki i profil linków</td></tr>
            <tr><td className="p-4 text-zinc-600">Meta tagi i nagłówki</td><td className="p-4 text-zinc-600">Cytowania lokalne (NAP)</td></tr>
            <tr><td className="p-4 text-zinc-600">Szybkość i Core Web Vitals</td><td className="p-4 text-zinc-600">Wzmianki o marce</td></tr>
            <tr><td className="p-4 text-zinc-600">Internal linking</td><td className="p-4 text-zinc-600">Recenzje online</td></tr>
            <tr><td className="p-4 text-zinc-600">Dane strukturalne</td><td className="p-4 text-zinc-600">Social signals</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Off-page bez on-page to dom bez fundamentów:</strong> Nawet najsilniejszy profil
        backlinków nie pomoże, jeśli strona docelowa ma słabą treść, wolno się ładuje
        lub jest trudna w nawigacji. Optymalne wyniki osiągasz, gdy on-page i off-page
        są rozwijane równolegle. Link building do strony z thin content to zmarnowany budżet.
      </InfoBox>

      <h2>FAQ — Off-Page SEO</h2>

      <h3>Czy social media wpływają na SEO?</h3>
      <p>
        Bezpośrednio — nie. Google wielokrotnie potwierdzał, że lajki i udostępnienia
        nie są czynnikiem rankingowym. Pośrednio — tak. Popularne posty zwiększają zasięg treści,
        co prowadzi do naturalnych linków, wzmianek i wejść na stronę. Silna obecność w social media
        wzmacnia też rozpoznawalność marki, co przekłada się na wyższy CTR dla branded queries.
      </p>

      <h3>Jak mierzyć efekty off-page SEO?</h3>
      <p>
        Kluczowe metryki: wzrost liczby i jakości backlinków (Ahrefs, Semrush),
        <Link href="/domain-rating"> Domain Rating</Link> / Domain Authority w czasie,
        widoczność organiczna (liczba rankujących fraz, impressions w GSC),
        ruch z organic search. Bezpośrednim miernikiem jest ranking dla docelowych fraz
        porównywany przed i po działaniach link buildingowych.
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
                "name": "Czym jest off-page SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Off-page SEO to działania poza własną stroną wpływające na jej pozycje w Google — link building, cytowania lokalne, wzmianki o marce i recenzje online. Buduje autorytet domeny jako sygnał zewnętrzny, uzupełniając optymalizację on-page."
                }
              },
              {
                "@type": "Question",
                "name": "Czy social media wpływają na SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bezpośrednio nie — lajki i udostępnienia nie są czynnikiem rankingowym. Pośrednio tak — popularność w social media zwiększa zasięg treści, co prowadzi do naturalnych linków i wzmianek, które bezpośrednio wpływają na SEO."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
