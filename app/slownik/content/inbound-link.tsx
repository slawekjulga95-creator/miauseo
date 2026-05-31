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
export default function InboundLink() {
  return (
    <div className="prose-blog">
      <h2>Czym jest Inbound Link?</h2>
      <p>
        <strong>Inbound link</strong> (link przychodzący) to hiperłącze na zewnętrznej stronie prowadzące
        do Twojej witryny. Jest synonimem terminu <Link href="/backlink">backlink</Link> — oba pojęcia
        oznaczają dokładnie to samo i używane są zamiennie w branży SEO. Perspektywa jest tylko różna:
        backlink opisuje link z punktu widzenia strony źródłowej (ona „daje" link),
        inbound link opisuje go z punktu widzenia strony docelowej (ona „otrzymuje" link przychodzący).
      </p>
      <p>
        Linki przychodzące są jednym z fundamentów algorytmu Google — wywodzącym się bezpośrednio
        z koncepcji <Link href="/pagerank">PageRank</Link>. Każdy inbound link to głos zaufania:
        inna strona zdecydowała, że Twoja treść jest warta odnotowania. Im więcej wartościowych głosów,
        tym wyższy autorytet domeny i tym silniejsza pozycja w wynikach wyszukiwania.
      </p>

      <h2>Co decyduje o wartości inbound linka?</h2>
      <p>
        Nie wszystkie linki przychodzące są równe. <strong>Autorytet domeny linkującej</strong> — link
        z portalu o wysokim <Link href="/domain-rating">Domain Rating</Link> jest wart więcej niż kilkanaście
        linków z anonimowych blogów. <strong>Trafność tematyczna</strong> — link z branżowego portalu SEO
        do strony o pozycjonowaniu jest silniejszy niż link z portalu kulinarnego do tej samej strony.
        <strong>Atrybut dofollow/nofollow</strong> — <Link href="/dofollow">dofollow</Link> przekazuje
        autorytet bezpośrednio, <Link href="/nofollow">nofollow</Link> nie gwarantuje przekazania.
        <strong>Anchor text</strong> — <Link href="/anchor-text">tekst kotwicy</Link> informuje Google
        o tematyce strony docelowej. <strong>Umiejscowienie w treści</strong> — link w ciele artykułu
        jest cenniejszy niż link w stopce lub sidebarze.
      </p>

      <InfoBox>
        <strong>Inbound links a natural link profile:</strong> Naturalny profil linków przychodzących obejmuje różnorodność: linki z różnych typów domen (portale newsowe, blogi, katalogi, fora), różne typy anchor textów (brandowy, genericowy, tematyczny), różne docelowe URL (strona główna i podstrony). Jednorodny profil — np. wszystkie linki prowadzą do strony głównej z identycznym anchortext — wygląda nienaturalnie i może być sygnałem manipulacji dla algorytmu <Link href="/penguin">Penguin</Link>.
      </InfoBox>

      <h2>FAQ — Inbound Link</h2>
      <h3>Jaka jest różnica między inbound linkiem a backlinkiem?</h3>
      <p>
        Żadna — to synonimy. Inbound link = backlink = link przychodzący = link zewnętrzny prowadzący
        do Twojej witryny. Termin używany zależy od kontekstu i preferencji autora.
        W Google Search Console funkcja nazywa się „Linki zewnętrzne", w Ahrefs „Backlinks".
      </p>
      <h3>Ile inbound linków potrzebuję żeby dobrze rankować?</h3>
      <p>
        Nie ma jednej liczby — zależy od frazy i konkurencji. Sprawdź w Ahrefs liczbę referring domains
        dla stron zajmujących top 3 dla Twojej frazy docelowej. To jest Twój benchmark.
        Jakość zawsze wygrywa z ilością — jeden link z DR 60 wart jest więcej niż sto z DR 10.
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Czym jest inbound link?", "acceptedAnswer": { "@type": "Answer", "text": "Inbound link (link przychodzący) to synonim backlinku — hiperłącze z zewnętrznej strony prowadzące do Twojej witryny. Jeden z głównych czynników rankingowych Google, oparty na algorytmie PageRank." } }] }) }} />
    </div>
  );
}
