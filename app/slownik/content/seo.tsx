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

export default function Seo() {
  return (
    <div className="prose-blog">
      <h2>Czym jest SEO?</h2>
      <p>
        <strong>SEO</strong> (Search Engine Optimization — optymalizacja pod kątem wyszukiwarek)
        to zestaw działań technicznych, treściowych i linkowych, których celem jest poprawa
        pozycji strony w organicznych — bezpłatnych — wynikach wyszukiwania Google i innych
        wyszukiwarek. Wyższe pozycje przekładają się na więcej{" "}
        <Link href="/organic-traffic">ruchu organicznego</Link>, nowych klientów
        i przychodu — bez płacenia za każde kliknięcie.
      </p>
      <p>
        SEO w języku polskim funkcjonuje też jako{" "}
        <Link href="/pozycjonowanie">pozycjonowanie</Link>. Oba terminy opisują to samo
        zjawisko — różnią się tylko językiem oryginu (angielski vs. polski branżowy slang).
        W praktyce agencji i specjalistów terminy używane są wymiennie.
      </p>

      <h2>Trzy filary SEO</h2>
      <p>
        <strong><Link href="/on-page-seo">On-page SEO</Link></strong> — optymalizacja
        elementów na stronie: <Link href="/meta-title">meta tytułów</Link>,
        nagłówków, treści, struktury URL, szybkości i{" "}
        <Link href="/internal-linking">linkowania wewnętrznego</Link>.
        Fundament, bez którego inne działania tracą sens.
      </p>
      <p>
        <strong><Link href="/off-page-seo">Off-page SEO</Link></strong> — budowanie
        autorytetu domeny przez pozyskiwanie wartościowych{" "}
        <Link href="/backlink">backlinków</Link> z zewnętrznych, wiarygodnych źródeł.
        Linki pozostają jednym z trzech najsilniejszych sygnałów rankingowych.
      </p>
      <p>
        <strong>Techniczne SEO</strong> — zapewnienie poprawnego{" "}
        <Link href="/crawlowanie">crawlowania</Link>,{" "}
        <Link href="/indeksowanie">indeksowania</Link>, szybkości ({" "}
        <Link href="/core-web-vitals">Core Web Vitals</Link>), HTTPS
        i <Link href="/mobile-first-indexing">Mobile-First Indexing</Link>.
      </p>

      <h2>Jak Google ocenia strony?</h2>
      <p>
        Google używa ponad 200 sygnałów rankingowych. Wśród najważniejszych: jakość
        i trafność treści, profil backlinków i autorytet domeny, szybkość strony
        i sygnały UX, <Link href="/e-e-a-t">E-E-A-T</Link> (Expertise, Experience,
        Authoritativeness, Trustworthiness) i dopasowanie do{" "}
        <Link href="/search-intent">intencji wyszukiwania</Link>.
        Algorytm jest aktualizowany kilkaset razy rocznie — SEO to ciągły proces,
        nie jednorazowa optymalizacja.
      </p>

      <InfoBox>
        <strong>SEO vs reklamy — kluczowa różnica:</strong> Reklamy (<Link href="/ppc">PPC</Link>)
        dają natychmiastowy ruch, ale kosztują za każde kliknięcie i znikają po zatrzymaniu
        budżetu. SEO wymaga czasu (3–12 miesięcy do efektów), ale zbudowana widoczność
        organiczna pracuje bezpłatnie przez lata. Najlepsze strategie łączą oba podejścia.
      </InfoBox>

      <h2>FAQ — SEO</h2>

      <h3>Ile trwa SEO?</h3>
      <p>
        Pierwsze efekty widoczne są po 3–4 miesiącach (wzrost widoczności dla{" "}
        <Link href="/long-tail-keyword">long-tail keywords</Link>). Stabilne pozycje
        dla głównych fraz — zwykle po 6–12 miesiącach. SEO to inwestycja długoterminowa:
        efekty kumulują się z czasem, a dobrze zbudowana widoczność organiczna
        jest trwałym aktywem biznesu.
      </p>

      <h3>Czy mogę zrobić SEO samodzielnie?</h3>
      <p>
        Podstawowe on-page SEO (meta tagi, struktura treści, szybkość) można wdrożyć
        samodzielnie, korzystając z <Link href="/google-search-console">Google Search Console</Link>
        i dokumentacji Google. Zaawansowane działania — strategia treści, link building,
        audyty techniczne dużych serwisów — wymagają doświadczenia i specjalistycznych narzędzi.
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
                "name": "Czym jest SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SEO (Search Engine Optimization) to optymalizacja strony pod kątem wyszukiwarek, mająca na celu poprawę pozycji w organicznych wynikach Google. Składa się z on-page SEO, off-page SEO (link building) i technicznego SEO."
                }
              },
              {
                "@type": "Question",
                "name": "Ile trwa SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pierwsze efekty widoczne są po 3–4 miesiącach, stabilne pozycje dla głównych fraz po 6–12 miesiącach. SEO to długoterminowa inwestycja — efekty kumulują się z czasem."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
