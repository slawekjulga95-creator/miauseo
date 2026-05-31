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
export default function GoogleAds() {
  return (
    <div className="prose-blog">
      <h2>Czym jest Google Ads?</h2>
      <p>
        <strong>Google Ads</strong> (dawniej Google AdWords, przemianowane w 2018 roku) to platforma reklamowa
        Google umożliwiająca firmom wyświetlanie reklam w wyszukiwarce Google, YouTube, Gmailu,
        sieci Display (miliony witryn partnerskich) i innych usługach Google.
        Działa w modelu aukcyjnym opartym na <Link href="/adrank">AdRank</Link> — każde wyszukiwanie
        uruchamia błyskawiczną aukcję decydującą, która reklama pojawi się i na jakiej pozycji.
        Reklamodawca płaci zazwyczaj w modelu <Link href="/cpc">CPC</Link> (za kliknięcie),
        choć dostępne są też modele CPM i rozliczenie za konwersje.
      </p>

      <h2>Typy kampanii Google Ads</h2>
      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Typ kampanii</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Gdzie wyświetlana</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Cel</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Search (wyszukiwarka)</td><td className="p-4 text-zinc-600">Wyniki Google dla konkretnych fraz</td><td className="p-4 text-zinc-600">Leady, sprzedaż, ruch — wysoka intencja</td></tr>
            <tr><td className="p-4 font-semibold text-ink"><Link href="/display-ads">Display</Link></td><td className="p-4 text-zinc-600">Miliony witryn partnerskich GDN</td><td className="p-4 text-zinc-600">Brand awareness, remarketing</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Video (YouTube)</td><td className="p-4 text-zinc-600">YouTube i sieć wideo Google</td><td className="p-4 text-zinc-600">Zasięg, świadomość marki, storytelling</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Shopping</td><td className="p-4 text-zinc-600">SERP Google z kafelkami produktowymi</td><td className="p-4 text-zinc-600">E-commerce — sprzedaż konkretnych produktów</td></tr>
            <tr><td className="p-4 font-semibold text-ink"><Link href="/performance-max">Performance Max</Link></td><td className="p-4 text-zinc-600">Wszystkie kanały Google naraz</td><td className="p-4 text-zinc-600">Maksymalizacja konwersji przez AI</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Local</td><td className="p-4 text-zinc-600">Mapy, wyszukiwarka, display</td><td className="p-4 text-zinc-600">Wizyty w sklepie / rozmowy telefoniczne</td></tr>
            <tr><td className="p-4 font-semibold text-ink">App</td><td className="p-4 text-zinc-600">Play Store, YouTube, Display, Search</td><td className="p-4 text-zinc-600">Instalacje i zaangażowanie w aplikacje</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Jak działa aukcja Google Ads?</h2>
      <p>
        Każde wyszukiwanie użytkownika uruchamia natychmiastową aukcję dla wszystkich słów kluczowych
        powiązanych z zapytaniem. Google oblicza <Link href="/adrank">AdRank</Link> dla każdego reklamodawcy —
        na podstawie stawki, <Link href="/quality-score">Quality Score</Link> i oczekiwanego wpływu zasobów reklamy.
        Reklamodawcy z wyższym AdRank wygrywają lepsze pozycje. Rzeczywisty <Link href="/cpc">CPC</Link>
        nie jest równy zadeklarowanej stawce — to minimalna kwota potrzebna do utrzymania pozycji.
        System premiuje jakość: wyższy QS = wyższa pozycja przy niższej stawce.
      </p>

      <h2>Kluczowe wskaźniki efektywności kampanii</h2>
      <p>
        <strong><Link href="/ctr">CTR</Link></strong> (Click-Through Rate) — stosunek kliknięć do wyświetleń.
        Wysoki CTR to sygnał trafności reklamy i składnik Quality Score.
        <strong><Link href="/conversion-rate">CR</Link></strong> (Conversion Rate) — procent klikających,
        którzy wykonali pożądaną akcję. Zależy od jakości <Link href="/landing-page">landing page</Link>.
        <strong><Link href="/cpa">CPA</Link></strong> (Cost Per Action) — koszt jednej konwersji.
        Kluczowy wskaźnik rentowności kampanii performance.
        <strong><Link href="/roas">ROAS</Link></strong> (Return on Ad Spend) — przychód z reklam
        podzielony przez ich koszt. Podstawowa miara efektywności w e-commerce.
      </p>

      <InfoBox>
        <strong>Google Ads vs SEO:</strong> Reklamy Google Ads dają natychmiastową widoczność — pojawia się po ustawieniu kampanii i mija, gdy kończysz budżet. <Link href="/seo">SEO</Link> buduje widoczność organiczną przez miesiące, ale trwa też po zatrzymaniu działań. Najlepsza strategia łączy obie: Ads dla szybkich wyników i drogich fraz, SEO dla trwałego, pasywnego ruchu. Dane kliknięć z Google Ads (jakie frazy konwertują) są też cennym inputem dla strategii SEO.
      </InfoBox>

      <h2>FAQ — Google Ads</h2>
      <h3>Ile kosztuje reklama w Google Ads?</h3>
      <p>
        Nie ma minimalnego budżetu — możesz zacząć od 30 zł dziennie.
        Rzeczywisty koszt zależy od konkurencyjności słów kluczowych i branży.
        <Link href="/cpc"> CPC</Link> może wynosić od 0,20 zł dla niszowych fraz do 200 zł dla sektora prawnego i finansowego.
        Miesięczny budżet efektywnej kampanii dla MŚP to zazwyczaj 1 000–5 000 zł.
      </p>
      <h3>Czym różni się Google Ads od Meta Ads?</h3>
      <p>
        Google Ads dociera do użytkowników z aktywną intencją — szukają czegoś teraz.
        Meta Ads (Facebook, Instagram) działa na użytkownikach bez aktywnej intencji — pasywnie przeglądają feed.
        Google = demand capture (przechwytywanie popytu). Meta = demand generation (tworzenie popytu).
        Obie platformy dobrze współpracują w ramach kompletnego <Link href="/funnel">lejka marketingowego</Link>.
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Czym jest Google Ads?", "acceptedAnswer": { "@type": "Answer", "text": "Google Ads to platforma reklamowa Google działająca w modelu aukcyjnym. Umożliwia wyświetlanie reklam w wyszukiwarce, YouTube, sieci Display i innych usługach Google. Płacisz zazwyczaj za kliknięcie (CPC) lub konwersję." } }] }) }} />
    </div>
  );
}
