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

export default function Nofollow() {
  return (
    <div className="prose-blog">
      <h2>Czym jest nofollow?</h2>
      <p>
        <strong>Nofollow</strong> to atrybut dodawany do tagu HTML hiperłącza
        (<code>rel="nofollow"</code>), który informuje roboty wyszukiwarek — w tym{" "}
        <Link href="/googlebot">Googlebot</Link> — że nie powinny przekazywać autorytetu
        rankingowego (<Link href="/link-juice">link juice</Link>) do linkowanej strony
        ani podążać za tym linkiem przy indeksowaniu. Wprowadzony przez Google w 2005 roku
        jako narzędzie walki ze spamem linkowym.
      </p>
      <p>
        Atrybut nofollow nie ukrywa linku przed użytkownikami — link nadal jest klikalny
        i widoczny. Instruuje jedynie roboty, że wydawca strony nie chce przekazywać
        rekomendacji SEO do linkowanego zasobu.
      </p>

      <h2>Nofollow a dofollow — różnica</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Typ</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Składnia HTML</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Przekazuje autorytet?</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Typowe zastosowanie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink"><Link href="/dofollow">Dofollow</Link></td><td className="p-4 text-zinc-600"><code>&lt;a href="..."&gt;</code></td><td className="p-4 text-green-600 font-medium">Tak</td><td className="p-4 text-zinc-600">Redakcyjne linki w artykułach</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Nofollow</td><td className="p-4 text-zinc-600"><code>rel="nofollow"</code></td><td className="p-4 text-zinc-600 font-medium">Nie (formalnie)</td><td className="p-4 text-zinc-600">Komentarze, linki UGC, linki do niesprawdzonych źródeł</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Sponsored</td><td className="p-4 text-zinc-600"><code>rel="sponsored"</code></td><td className="p-4 text-zinc-600 font-medium">Nie</td><td className="p-4 text-zinc-600">Artykuły sponsorowane, reklamy afiliacyjne</td></tr>
            <tr><td className="p-4 font-semibold text-ink">UGC</td><td className="p-4 text-zinc-600"><code>rel="ugc"</code></td><td className="p-4 text-zinc-600 font-medium">Nie</td><td className="p-4 text-zinc-600">Komentarze użytkowników, fora</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Czy nofollow naprawdę nie przekazuje autorytetu?</h2>
      <p>
        Formalnie — nie. Ale w 2019 roku Google zmienił traktowanie nofollow z absolutnego zakazu
        na <strong>wskazówkę</strong> (hint). Oznacza to, że algorytm może — ale nie musi —
        uwzględniać linki nofollow przy ocenie strony docelowej. W praktyce Google traktuje
        nofollow selektywnie: jeśli link pochodzi z bardzo wiarygodnego, tematycznie trafnego
        źródła, może pośrednio wpływać na ocenę linkowanej strony.
      </p>
      <p>
        Dodatkowo linki nofollow mają wartość pośrednią: generują ruch na stronie,
        budują rozpoznawalność marki i mogą prowadzić do dalszych naturalnych wzmianek
        i linków dofollow od innych wydawców.
      </p>

      <InfoBox>
        <strong>Nie używaj nofollow do internal linkingu:</strong> Dawna technika „PageRank sculpting"
        polegała na dodawaniu nofollow do linków wewnętrznych, by kierować autorytet wyłącznie
        do wybranych stron. Google wyjaśnił, że zablokowany w ten sposób link juice jest po prostu
        tracony — nie trafia do pozostałych stron. Lepiej zadbać o logiczną architekturę
        <Link href="/internal-linking"> internal linkingu</Link> niż ręcznie sterować przepływem nofollow.
      </InfoBox>

      <h2>FAQ — Nofollow</h2>

      <h3>Kiedy powinienem używać nofollow?</h3>
      <p>
        Na linkach do stron, za których jakość nie ręczysz — niezweryfikowane źródła zewnętrzne,
        linki w sekcji komentarzy, linki UGC, linki afiliacyjne i sponsorowane. Nie stosuj nofollow
        do wszystkich linków zewnętrznych — linkowanie do wartościowych, wiarygodnych źródeł
        bez nofollow to naturalne zachowanie i może wzmacniać trafność tematyczną strony.
      </p>

      <h3>Czy Wikipedia używa nofollow?</h3>
      <p>
        Tak — wszystkie zewnętrzne linki z Wikipedii mają atrybut nofollow (a dokładniej UGC).
        Mimo to link z Wikipedii do Twojej strony ma wartość: generuje ruch, buduje wiarygodność marki
        i jest silnym sygnałem autorytetu tematycznego, który Google może uwzględniać
        jako wskazówkę pośrednią.
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
                "name": "Czym jest atrybut nofollow?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nofollow to atrybut rel=\"nofollow\" dodawany do linków HTML, informujący roboty Google, że nie powinny przekazywać autorytetu do linkowanej strony. Od 2019 roku Google traktuje go jako wskazówkę, nie absolutny zakaz."
                }
              },
              {
                "@type": "Question",
                "name": "Kiedy używać nofollow?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Na linkach do niezweryfikowanych źródeł, w komentarzach, w linkach afiliacyjnych i sponsorowanych. Nie na wszystkich linkach zewnętrznych — linkowanie do wartościowych źródeł bez nofollow jest naturalnym zachowaniem SEO."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
