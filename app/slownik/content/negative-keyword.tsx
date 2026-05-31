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

export default function NegativeKeyword() {
  return (
    <div className="prose-blog">
      <h2>Czym jest negative keyword?</h2>
      <p>
        <strong>Negative keyword</strong> (słowo kluczowe wykluczające) to fraza dodana do kampanii
        <Link href="/google-ads"> Google Ads</Link>, przy której reklama <strong>nie</strong> zostanie
        wyświetlona. Jeśli zapytanie użytkownika zawiera negatywne słowo kluczowe, Twoja reklama
        jest automatycznie blokowana — niezależnie od tego, jak dobrze pasuje do pozostałych
        fraz docelowych kampanii.
      </p>
      <p>
        Negative keywords to jeden z najważniejszych mechanizmów kontroli jakości ruchu w kampaniach
        <Link href="/ppc"> PPC</Link>. Bez właściwego wykluczenia kampania pochłania budżet
        na kliknięcia niezwiązane z ofertą — i generuje niski <Link href="/conversion-rate">conversion rate</Link>,
        pogarszając rentowność kampanii.
      </p>

      <h2>Przykłady zastosowania negative keywords</h2>
      <p>
        Agencja SEO oferująca płatne usługi wyklucza słowa: „bezpłatnie", „za darmo", „darmowe",
        „samodzielnie", „tutorial", „kurs gratis" — żeby nie wyświetlać się osobom szukającym
        darmowych materiałów edukacyjnych, a nie klientom.
      </p>
      <p>
        Sklep sprzedający nowe buty wyklucza: „używane", „second hand", „allegro", „olx" —
        żeby nie płacić za kliknięcia osób szukających rynku wtórnego.
      </p>
      <p>
        Prawnik rodzinny wyklucza: „praca", „oferty pracy", „rekrutacja" — bo fraza „prawnik"
        bez wykluczeń może matchować rekrutację na stanowisko prawnika, nie poszukiwanie usług prawnych.
      </p>

      <h2>Typy dopasowania negative keywords</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Typ</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Składnia</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Blokuje</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Broad match negative</td><td className="p-4 text-zinc-600">darmowe</td><td className="p-4 text-zinc-600">Zapytania zawierające to słowo lub jego warianty</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Phrase match negative</td><td className="p-4 text-zinc-600">"darmowe seo"</td><td className="p-4 text-zinc-600">Zapytania zawierające dokładnie tę frazę w tej kolejności</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Exact match negative</td><td className="p-4 text-zinc-600">[darmowe seo]</td><td className="p-4 text-zinc-600">Tylko to dokładne zapytanie, bez dodatkowych słów</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Listy wykluczeń na poziomie konta:</strong> Google Ads pozwala tworzyć wspólne
        listy negative keywords stosowane do wielu kampanii jednocześnie. To oszczędność czasu
        i gwarancja spójności — zamiast dodawać te same wykluczenia do każdej kampanii z osobna,
        zarządzasz jedną listą. Standardowe listy tematyczne (frazy informacyjne, frazy „praca",
        konkurencja) warto skonfigurować już na starcie każdego konta.
      </InfoBox>

      <h2>FAQ — Negative Keyword</h2>

      <h3>Jak znajdować negative keywords?</h3>
      <p>
        Główne źródło to raport <strong>Wyszukiwane hasła</strong> (Search Terms) w Google Ads —
        pokazuje dokładne zapytania, które wyzwoliły Twoje reklamy. Regularne przeglądanie
        tego raportu (minimum raz w tygodniu przy aktywnej kampanii) ujawnia niechciane dopasowania
        i pozwala budować listę wykluczeń w oparciu o realne dane, nie domysły.
      </p>

      <h3>Czy można przesadzić z negative keywords?</h3>
      <p>
        Tak — zbyt agresywne wykluczenia mogą zablokować wartościowy ruch. Szczególnie ryzykowne
        jest stosowanie broad match negativów dla ogólnych słów, które mogą wykluczyć trafne zapytania.
        Negative keywords wymagają regularnego audytu — po aktualizacjach Google Ads algorytmu
        dopasowań warto sprawdzić, czy istniejące wykluczenia nie blokują kampanii niepotrzebnie.
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
                "name": "Czym jest negative keyword?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Negative keyword (słowo wykluczające) to fraza w Google Ads, przy której reklama nie zostanie wyświetlona. Chroni budżet przed kliknięciami osób niezainteresowanych ofertą i poprawia jakość ruchu w kampaniach PPC."
                }
              },
              {
                "@type": "Question",
                "name": "Jak znajdować negative keywords?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Główne źródło to raport Wyszukiwane hasła (Search Terms) w Google Ads — pokazuje dokładne zapytania wyzwalające reklamy. Regularne przeglądanie tego raportu ujawnia niechciane dopasowania i pozwala budować listę wykluczeń."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
