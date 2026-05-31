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
export default function Hyperlink() {
  return (
    <div className="prose-blog">
      <h2>Czym jest hiperłącze?</h2>
      <p>
        <strong>Hiperłącze</strong> (hyperlink, link) to klikalny element nawigacyjny w dokumencie cyfrowym,
        który po kliknięciu przenosi użytkownika do innego zasobu — innej strony, pliku, kotwicy na tej samej
        stronie lub adresu email. Tim Berners-Lee, twórca WWW, oparł całą architekturę sieci na hiperłączach —
        bez nich internet byłby zbiorem izolowanych dokumentów, a nie powiązaną siecią wiedzy.
      </p>
      <p>
        W kodzie HTML hiperłącze to element <code>&lt;a&gt;</code> (anchor) z atrybutem <code>href</code>
        wskazującym docelowy URL: <code>&lt;a href="https://example.com"&gt;tekst kotwicy&lt;/a&gt;</code>.
        Dla Google każde hiperłącze to jednostka informacji: dokąd prowadzi, jaki ma <Link href="/anchor-text">anchor text</Link>
        i czy przekazuje autorytet (<Link href="/dofollow">dofollow</Link>) czy nie (<Link href="/nofollow">nofollow</Link>).
      </p>

      <h2>Rodzaje hiperłączy w kontekście SEO</h2>
      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Rodzaj</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Kierunek</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Rola SEO</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-medium text-ink"><Link href="/internal-linking">Internal link</Link></td><td className="p-4 text-zinc-600">Między podstronami tej samej domeny</td><td className="p-4 text-zinc-600">Dystrybucja autorytetu, nawigacja, crawlowanie</td></tr>
            <tr><td className="p-4 font-medium text-ink"><Link href="/backlink">Backlink</Link> (Inbound)</td><td className="p-4 text-zinc-600">Z zewnętrznej domeny do Twojej witryny</td><td className="p-4 text-zinc-600">Budowanie autorytetu domeny, ranking</td></tr>
            <tr><td className="p-4 font-medium text-ink"><Link href="/external-link">External link</Link> (Outbound)</td><td className="p-4 text-zinc-600">Z Twojej strony do zewnętrznej domeny</td><td className="p-4 text-zinc-600">Sygnał jakości i wiarygodności treści</td></tr>
            <tr><td className="p-4 font-medium text-ink">Anchor link</td><td className="p-4 text-zinc-600">Do sekcji na tej samej stronie (#id)</td><td className="p-4 text-zinc-600">UX, FAQ Schema, featured snippets</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Hiperłącze a architektura informacji</h2>
      <p>
        Sieć hiperłączy wewnątrz witryny tworzy jej architekturę informacji — strukturę decydującą
        o tym, jak <Link href="/googlebot">Googlebot</Link> odkrywa strony, jak rozkłada się autorytet
        i jak łatwo użytkownicy nawigują. Strony bez żadnych linków wewnętrznych (<em>orphan pages</em>)
        mogą nigdy nie zostać odkryte przez robota. Strony z wieloma linkami wewnętrznymi
        trafiają do indeksu szybciej i zbierają większy autorytet wewnętrzny.
      </p>
      <p>
        Jakość hiperłącza zależy od kilku czynników jednocześnie — anchor text opisujący tematykę
        strony docelowej, umiejscowienie (w treści artykułu vs. stopka), atrybut dofollow/nofollow,
        siła autorytetu strony źródłowej oraz tematyczna powiązaność między stronami.
        Hiperłącze z autorytarnego portalu branżowego, umieszczone w treści artykułu, z trafnym anchor textem,
        jest warte wielokrotnie więcej niż setka linków ze stopek słabych blogów.
      </p>

      <InfoBox>
        <strong>Broken links (zepsute linki):</strong> Hiperłącze prowadzące do nieistniejącej strony (błąd 404) to zepsute doświadczenie użytkownika i strata <Link href="/link-juice">link juice</Link>. Regularne audyty linków wewnętrznych i zewnętrznych (Screaming Frog, Ahrefs) pozwalają identyfikować i naprawiać broken links zanim zdążą zaszkodzić UX i rankingom.
      </InfoBox>

      <h2>FAQ — Hiperłącze</h2>
      <h3>Jak hiperłącza wpływają na ranking w Google?</h3>
      <p>
        Hiperłącza zewnętrzne (backlinki) do Twojej strony są jednym z najsilniejszych sygnałów rankingowych Google —
        opartym na oryginalnym algorytmie <Link href="/pagerank">PageRank</Link>. Hiperłącza wewnętrzne
        rozkładają autorytet między podstrony witryny i ułatwiają crawlowanie, co pośrednio wpływa na ranking
        poszczególnych podstron.
      </p>
      <h3>Czy każde hiperłącze przekazuje autorytet?</h3>
      <p>
        Nie — tylko linki dofollow bez atrybutu <code>rel="nofollow"</code>, <code>rel="ugc"</code>
        lub <code>rel="sponsored"</code> przekazują autorytet bezpośrednio. Linki nofollow Google
        traktuje od 2019 roku jako wskazówkę (hint), a nie absolutny zakaz — może zdecydować o
        uwzględnieniu ich kontekstu, ale nie gwarantuje przekazania <Link href="/link-juice">link juice</Link>.
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Czym jest hiperłącze?", "acceptedAnswer": { "@type": "Answer", "text": "Hiperłącze (link) to klikalny element w HTML prowadzący do innego zasobu w sieci. Fundamentalny element architektury WWW i jeden z kluczowych czynników rankingowych w wyszukiwarkach." } }] }) }} />
    </div>
  );
}
