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
export default function JavascriptSeo() {
  return (
    <div className="prose-blog">
      <h2>Problem: Google musi renderować JavaScript żeby zobaczyć treść</h2>
      <p>
        Tradycyjne strony zwracały kompletny HTML — <Link href="/googlebot">Googlebot</Link> pobierał stronę
        i od razu widział pełną treść. Strony oparte na frameworkach JavaScript (React, Vue, Angular, Next.js)
        często zwracają pusty lub minimalny HTML, a całą treść renderują przez JavaScript w przeglądarce.
        Problem: Googlebot musi przetworzyć JavaScript żeby zobaczyć treść — a to jest kosztowne obliczeniowo
        i opóźnione w czasie.
      </p>
      <p>
        <strong>JavaScript SEO</strong> to zestaw praktyk zapewniających, że strony budowane na JS
        są poprawnie crawlowane, renderowane i indeksowane przez wyszukiwarki.
        W erze dominacji React i Next.js, JavaScript SEO stało się jedną z kluczowych kompetencji
        w <Link href="/technical-seo">technical SEO</Link>.
      </p>

      <h2>Jak Google renderuje JavaScript — dwuetapowy proces</h2>
      <p>
        Google przetwarza strony JS w dwóch fazach. <strong>Faza 1 (crawlowanie HTML)</strong> — Googlebot
        pobiera HTML i szybko przetwarza treść dostępną bez JS. Strony bez SSR wyglądają na tym etapie
        jak puste — tylko szkielet bez zawartości. <strong>Faza 2 (renderowanie JS)</strong> — strona
        trafia do kolejki renderowania (Rendering Queue) gdzie Google uruchamia Chromium, wykonuje JS
        i przetwarza wygenerowaną treść. Opóźnienie między fazą 1 a 2 może wynosić kilka sekund
        do kilku dni. To oznacza, że nowa treść dostępna tylko przez JS może nie być zindeksowana
        przez długi czas po publikacji.
      </p>

      <h2>Strategie renderowania i ich wpływ na SEO</h2>
      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Strategia</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Opis</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">SEO</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">CSR (Client-Side Rendering)</td><td className="p-4 text-zinc-600">HTML minimalny, treść przez JS w przeglądarce</td><td className="p-4 text-red-500 font-medium">Ryzykowne — wymaga renderowania</td></tr>
            <tr><td className="p-4 font-semibold text-ink">SSR (Server-Side Rendering)</td><td className="p-4 text-zinc-600">Serwer generuje pełny HTML przy każdym żądaniu</td><td className="p-4 text-green-600 font-semibold">Doskonałe — Googlebot widzi pełną treść</td></tr>
            <tr><td className="p-4 font-semibold text-ink">SSG (Static Site Generation)</td><td className="p-4 text-zinc-600">HTML generowany przy buildzie, serwowany statycznie</td><td className="p-4 text-green-600 font-semibold">Doskonałe — szybkie i gotowe dla crawlera</td></tr>
            <tr><td className="p-4 font-semibold text-ink">ISR (Incremental Static Regeneration)</td><td className="p-4 text-zinc-600">SSG z możliwością odświeżania wybranych stron</td><td className="p-4 text-green-600 font-semibold">Doskonałe — Next.js standard</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Dynamic Rendering</td><td className="p-4 text-zinc-600">Botom serwowany pre-renderowany HTML, użytkownikom CSR</td><td className="p-4 text-yellow-600 font-medium">Ryzykowne — balansuje na granicy cloakingu</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Next.js to domyślne SEO-friendly:</strong> Next.js (framework używany m.in. przez tę stronę) obsługuje SSR i SSG natywnie — strony generowane przez Next.js są domyślnie czytelne dla Googlebota bez konieczności czekania na renderowanie JS. To jeden z powodów, dla których Next.js stał się standardem dla stron wymagających dobrego SEO przy bogatym UI JavaScript.
      </InfoBox>

      <h2>Jak sprawdzić, co Googlebot widzi na stronie JS?</h2>
      <p>
        <strong>GSC → Sprawdź URL</strong> — wpisz adres strony i kliknij „Test na żywo". GSC pokaże
        zarenderowaną wersję strony i screenshota jak ją widzi Google. Jeśli treść jest pusta lub niepełna —
        masz problem z renderowaniem.
        <strong>Chrome DevTools → Wyłącz JavaScript</strong> — otwórz DevTools → Settings → Debugger →
        zaznacz „Disable JavaScript". Przeładuj stronę — to przybliżenie tego, co Googlebot widzi w fazie 1.
        <strong>Fetch as Googlebot</strong> przez dowolny proxy emulujący User-Agent Googlebota.
      </p>

      <h2>FAQ — JavaScript SEO</h2>
      <h3>Czy Google radzi sobie z JavaScript?</h3>
      <p>
        Tak, ale z opóźnieniem i ograniczeniami. Google renderuje JavaScript, ale nie gwarantuje
        renderowania wszystkich skryptów i nie robi tego natychmiastowo. Dla SEO kluczowe treści
        powinny być dostępne w HTML bez renderowania JS — albo przez SSR/SSG,
        albo przez zapewnienie, że JS tylko wzbogaca, a nie zastępuje treść HTML.
      </p>
      <h3>Czy lazy loading treści (ładowanie przy scrollowaniu) jest problemem dla SEO?</h3>
      <p>
        Lazy loading obrazów — nie (Google obsługuje go poprawnie). Lazy loading treści tekstowej
        i ważnych linków — może być problemem, jeśli Googlebot nie scrolluje wystarczająco głęboko.
        Kluczowe linki wewnętrzne i ważne treści powinny być dostępne bez scrollowania lub przez HTML
        (nie tylko JS-triggered lazy loading).
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Czym jest JavaScript SEO?", "acceptedAnswer": { "@type": "Answer", "text": "JavaScript SEO to optymalizacja stron opartych na frameworkach JS (React, Vue, Angular) tak, żeby Googlebot mógł poprawnie je renderować i indeksować. Zalecane strategie: SSR lub SSG zamiast CSR." } }] }) }} />
    </div>
  );
}
