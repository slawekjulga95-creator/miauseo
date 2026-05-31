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

export default function Permalink() {
  return (
    <div className="prose-blog">
      <h2>Czym jest permalink?</h2>
      <p>
        <strong>Permalink</strong> (permanent link, stały adres URL) to trwały adres URL
        przypisany do konkretnej strony, wpisu blogowego lub zasobu sieciowego.
        Słowo „permanent" jest kluczowe — permalink nie zmienia się w czasie,
        co pozwala innym stronom i użytkownikom bezpiecznie odwoływać się do niego
        przez miesiące i lata. Zmiana permalinka bez przekierowania 301 to jedna
        z najkosztowniejszych decyzji SEO — powoduje utratę backlinków, rankingów
        i ruchu z organicznych wyników.
      </p>
      <p>
        W systemach CMS takich jak WordPress, permalink jest konfigurowalny i może przyjmować
        różne formaty: oparty na ID (<code>/p=123</code>), dacie (<code>/2024/06/15/tytul/</code>),
        tytule (<code>/tytul-wpisu/</code>) lub strukturze kategorii (<code>/kategoria/tytul/</code>).
        Z perspektywy SEO istotny jest wybór i konsekwentne stosowanie jednego formatu.
      </p>

      <h2>Cechy dobrego permalinka SEO</h2>
      <p>
        <strong>Krótki i opisowy</strong> — idealny permalink ma 3–5 słów bezpośrednio
        opisujących temat strony. „/pozycjonowanie-lokalne" jest lepsze niż
        „/jak-dziala-pozycjonowanie-lokalne-i-dlaczego-warto-je-stosowac".
      </p>
      <p>
        <strong>Zawiera słowo kluczowe</strong> — główna fraza kluczowa w URL jest słabym,
        ale wciąż aktywnym sygnałem <Link href="/on-page-seo">on-page SEO</Link>.
        Google pogrubia frazy kluczowe z URL w snippecie SERP, co zwiększa <Link href="/ctr">CTR</Link>.
      </p>
      <p>
        <strong>Bez polskich znaków</strong> — URL powinien zawierać wyłącznie litery ASCII.
        Polskie znaki (ą, ę, ś, ż) są enkodowane jako ciągi procentowe (%C4%85),
        co wydłuża URL i utrudnia udostępnianie.
      </p>
      <p>
        <strong>Myślniki zamiast podkreśleń</strong> — Google traktuje myślnik jako separator słów,
        podkreślnik jako część słowa. „pozycjonowanie-lokalne" to dwa słowa;
        „pozycjonowanie_lokalne" to jedno.
      </p>
      <p>
        <strong>Małe litery</strong> — URL jest case-sensitive; „/SEO" i „/seo" to dwie różne
        strony. Zawsze używaj małych liter, żeby uniknąć problemów z duplikowaniem.
      </p>

      <h2>Kiedy wolno zmienić permalink?</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Sytuacja</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Zalecenie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Nowa strona, brak backlinków</td><td className="p-4 text-zinc-600">Można zmieniać bez konsekwencji SEO</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Strona z backlinkami i rankingiem</td><td className="p-4 text-zinc-600">Zmiana tylko z przekierowaniem 301 — i tylko jeśli zmiana jest konieczna</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Migracja CMS lub redesign</td><td className="p-4 text-zinc-600">Mapowanie 1:1 starych URL do nowych + przekierowania 301 dla wszystkich</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Zmiana struktury kategorii</td><td className="p-4 text-zinc-600">Przekierowania + aktualizacja internal linków + sitemap</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Zasada: im starsza strona, tym drożej zmienić permalink.</strong> Strona blogowa
        z 50 backlinkami i wysoką pozycją organiczną traci lata budowanego autorytetu
        przy każdej zmianie URL bez przekierowania. Wyjątek: jeśli stary permalink zawiera
        datę lub nieprzydatne słowa, zmiana z 301 na URL z frazą kluczową może poprawić
        pozycje i CTR — ale tylko wtedy, gdy różnica jest znacząca.
      </InfoBox>

      <h2>FAQ — Permalink</h2>

      <h3>Czy przekierowanie 301 zachowuje SEO po zmianie permalinka?</h3>
      <p>
        Zdecydowaną większość — tak. Przekierowanie 301 przekazuje większość wartości
        linkowej i rankingowej do nowego URL. Google zwykle reimplementuje ranking
        w ciągu kilku tygodni. Jednak backlinkujące strony nadal wskazują na stary URL —
        dlatego ideałem jest zaktualizowanie kluczowych backlinków u wydawców,
        jeśli to możliwe.
      </p>

      <h3>Czy warto skracać długie permalinki istniejących stron?</h3>
      <p>
        Tylko jeśli różnica jest znacząca i uzasadnia ryzyko. Skrócenie
        „/jak-zrobic-seo-dla-malej-firmy-w-krakowie" do „/seo-dla-malej-firmy"
        z przekierowaniem 301 jest uzasadnione — poprawi CTR i da czystszy URL.
        Zmiana „/pozycjonowanie-lokalne" na „/local-seo" to zbędne ryzyko
        bez wymiernej korzyści.
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
                "name": "Czym jest permalink?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Permalink to stały adres URL strony. Dobry permalink jest krótki, zawiera słowo kluczowe, używa myślników i małych liter. Zmiana permalinka bez przekierowania 301 niszczy rankingi i backlinki."
                }
              },
              {
                "@type": "Question",
                "name": "Czy można zmienić permalink po opublikowaniu strony?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tak, ale tylko z przekierowaniem 301. Bez przekierowania tracisz wszystkie backlinki i rankingi. Im starsza strona i więcej backlinków, tym drożej kosztuje zmiana URL."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
