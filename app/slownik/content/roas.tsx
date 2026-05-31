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

export default function Roas() {
  return (
    <div className="prose-blog">
      <h2>Czym jest ROAS?</h2>
      <p>
        <strong>ROAS</strong> (Return on Ad Spend — zwrot z wydatków reklamowych) to wskaźnik
        mierzący, ile złotych przychodu generuje każda złotówka wydana na reklamy.
        Oblicza się go wzorem: <strong>ROAS = Przychód z reklam ÷ Koszt reklam × 100%</strong>.
        Jeśli wydałeś 1 000 zł na kampanię <Link href="/google-ads">Google Ads</Link>
        i wygenerowałeś 5 000 zł przychodu, ROAS wynosi 500% (lub 5x w notacji
        wielokrotności).
      </p>
      <p>
        ROAS jest podstawowym wskaźnikiem efektywności kampanii <Link href="/ppc">PPC</Link>
        i głównym celem strategii Smart Bidding w Google Ads (Target ROAS).
        W odróżnieniu od <Link href="/roi">ROI</Link> — który uwzględnia wszystkie koszty
        łącznie z marżą, kosztami operacyjnymi i produkcją — ROAS skupia się wyłącznie
        na relacji przychodu do kosztu kampanii reklamowej.
      </p>

      <h2>ROAS vs ROI — kluczowa różnica</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Metryka</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Wzór</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Co mierzy</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">ROAS</td><td className="p-4 text-zinc-600">Przychód / Koszt reklam × 100%</td><td className="p-4 text-zinc-600">Efektywność kampanii reklamowej</td></tr>
            <tr><td className="p-4 font-semibold text-ink"><Link href="/roi">ROI</Link></td><td className="p-4 text-zinc-600">(Zysk – Koszt) / Koszt × 100%</td><td className="p-4 text-zinc-600">Ogólna opłacalność inwestycji (z uwzględnieniem marży)</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Jaki ROAS jest dobry?</h2>
      <p>
        Nie ma uniwersalnej wartości — „dobry ROAS" zależy od marży brutto produktu.
        Firma z marżą 50% potrzebuje ROAS minimum 200%, żeby wyjść na zero na samych
        kosztach reklamy (nie licząc kosztów stałych). Firma z marżą 20% potrzebuje ROAS 500%.
      </p>
      <p>
        Orientacyjne wartości branżowe: e-commerce ogólny — ROAS 300–500% (3–5x),
        luksusowe produkty z wysoką marżą — 200–300%, usługi B2B z długim LTV klienta —
        nawet 150% może być opłacalne. Kluczowe jest obliczenie minimalnego opłacalnego ROAS
        (Break-Even ROAS) dla swojego biznesu przed ustawianiem celów kampanii.
      </p>

      <h2>Target ROAS w Google Ads</h2>
      <p>
        Strategia Smart Bidding „Docelowy ROAS" automatycznie optymalizuje stawki
        dla każdej aukcji, żeby osiągnąć zadany ROAS. Wymaga minimum 15–50 konwersji
        miesięcznie z przypisaną wartością, żeby algorytm miał wystarczające dane
        do działania. Zbyt ambitny cel ROAS (np. 1000% przy historycznym 400%)
        może spowodować znaczące ograniczenie zasięgu kampanii i drastyczny spadek ruchu.
      </p>

      <InfoBox>
        <strong>ROAS ≠ rentowność:</strong> Wysoki ROAS nie zawsze oznacza opłacalny biznes.
        Jeśli ROAS wynosi 400%, ale marża produktu to 20%, kampania generuje stratę
        po uwzględnieniu kosztów produkcji i operacyjnych. Zawsze obliczaj Break-Even ROAS
        na podstawie rzeczywistej marży — nie opieraj decyzji tylko na porównaniach
        z benchmarkami branżowymi.
      </InfoBox>

      <h2>FAQ — ROAS</h2>

      <h3>Jak obliczać ROAS w Google Ads?</h3>
      <p>
        Google Ads automatycznie oblicza ROAS, jeśli masz skonfigurowane konwersje
        z przypisaną wartością (np. wartość zakupu z e-commerce, wartość leadu z CRM).
        Bez wartości konwersji zobaczysz tylko liczbę konwersji, nie ROAS.
        Skonfiguruj śledzenie e-commerce w GA4 lub importuj wartości konwersji
        przez Google Ads Conversion Import.
      </p>

      <h3>Czy można mierzyć ROAS dla SEO?</h3>
      <p>
        Formalnie ROAS dotyczy kampanii płatnych. Dla SEO używa się analogicznego
        wskaźnika — przychód z ruchu organicznego / koszt SEO (agencja, narzędzia, treści).
        W GA4 możesz śledzić przychód przypisany do kanału Organic Search.
        Różnica: w SEO nie ma bezpośredniej „stawki" per kliknięcie — koszt jest stały,
        a efekty kumulują się w czasie.
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
                "name": "Czym jest ROAS?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ROAS (Return on Ad Spend) to zwrot z wydatków reklamowych. Wzór: Przychód z reklam / Koszt reklam × 100%. Jeśli wydałeś 1000 zł i zarobiłeś 5000 zł, ROAS = 500%. Dobry ROAS zależy od marży produktu — oblicz Break-Even ROAS dla swojego biznesu."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
