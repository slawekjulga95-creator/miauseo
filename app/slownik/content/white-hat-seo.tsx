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

export default function WhiteHatSeo() {
  return (
    <div className="prose-blog">
      <h2>Czym jest white hat SEO?</h2>
      <p>
        <strong>White hat SEO</strong> to podejście do optymalizacji stron internetowych
        oparte wyłącznie na technikach zgodnych z wytycznymi Google i ogólnymi zasadami
        etycznymi — skupionych na tworzeniu wartości dla użytkownika, nie manipulacji algorytmem.
        Termin pochodzi z filmów westernowych, gdzie białe kapelusze nosili „ci dobrzy".
        Przeciwieństwem jest <Link href="/black-hat-seo">black hat SEO</Link> —
        techniki manipulacyjne naruszające regulamin Google.
      </p>
      <p>
        White hat SEO jest długoterminową strategią: efekty przychodzą wolniej,
        ale są trwałe i odporne na zmiany algorytmu. Strony budowane przez white hat
        nie ryzykują kar, penalizacji algorytmicznych (<Link href="/penguin">Penguin</Link>,
        <Link href="/panda">Panda</Link>) ani ręcznych akcji Google.
      </p>

      <h2>Filary white hat SEO</h2>
      <p>
        <strong>Wartościowe treści</strong> — tworzenie eksperckich, unikalnych treści
        odpowiadających na rzeczywiste potrzeby użytkowników. Content, który istniałby
        nawet bez wyszukiwarki, bo jest genuinely użyteczny.
      </p>
      <p>
        <strong>Naturalny link building</strong> — zdobywanie{" "}
        <Link href="/natural-link">naturalnych linków</Link> przez merytorykę,
        digital PR i budowanie relacji. Linki powinny być zarabiane, nie kupowane.
      </p>
      <p>
        <strong>Techniczne SEO zgodne ze standardami</strong> — szybkość, HTTPS,
        responsywność, poprawna implementacja meta tagów i danych strukturalnych.
        Optymalizacja, która poprawia doświadczenie użytkownika, nie tylko sygnały algorytmu.
      </p>
      <p>
        <strong><Link href="/e-e-a-t">E-E-A-T</Link></strong> — transparentne autorstwo,
        ekspertyza, wiarygodność i zaufanie. Tworzenie treści przez prawdziwych ekspertów,
        z podpisem autora i weryfikowalnymi kwalifikacjami.
      </p>

      <h2>White hat vs. black hat — porównanie</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Aspekt</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">White Hat</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Black Hat</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Czas do efektów</td><td className="p-4 text-zinc-600">3–12 miesięcy</td><td className="p-4 text-zinc-600">Szybkie, ale krótkotrwałe</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Trwałość</td><td className="p-4 text-zinc-600">Długoterminowa</td><td className="p-4 text-zinc-600">Podatna na zmiany algorytmu</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Ryzyko</td><td className="p-4 text-zinc-600">Minimalne</td><td className="p-4 text-zinc-600">Penalizacja, ban z indeksu</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Cel</td><td className="p-4 text-zinc-600">Wartość dla użytkownika</td><td className="p-4 text-zinc-600">Manipulacja algorytmem</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Grey hat SEO — szara strefa:</strong> Między white i black hat istnieje
        <Link href="/gray-hat-seo"> gray hat SEO</Link> — techniki nieobjęte wprost
        zakazem Google, ale ryzykujące penalizację. Guest posting w skali przemysłowej,
        kupowanie stron z historią dla backlinków, agresywna wymiana linków.
        Granica między grey a black hat jest płynna i zmienia się z każdą aktualizacją
        wytycznych Google.
      </InfoBox>

      <h2>FAQ — White Hat SEO</h2>

      <h3>Czy white hat SEO może konkurować z black hat w krótkim terminie?</h3>
      <p>
        W krótkim terminie black hat często wygrywa — szybkie techniki manipulacyjne
        mogą dać wyniki w tygodniach, które white hat osiąga w miesiącach.
        Jednak w perspektywie roku i dłużej, strony white hat dominują, bo nie ryzykują
        penalizacji i kumulują autorytet. Dla firm z realną marką i długoterminowymi
        planami white hat jest jedyną rozsądną strategią.
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
                "name": "Czym jest white hat SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "White hat SEO to etyczne techniki SEO zgodne z wytycznymi Google — wartościowe treści, naturalny link building i techniczne SEO skupione na doświadczeniu użytkownika. Efekty są wolniejsze, ale trwałe i odporne na zmiany algorytmu."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
