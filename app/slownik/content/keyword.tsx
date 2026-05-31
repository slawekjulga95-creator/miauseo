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
export default function Keyword() {
  return (
    <div className="prose-blog">
      <h2>Czym jest słowo kluczowe?</h2>
      <p>
        <strong>Keyword</strong> (słowo kluczowe, fraza kluczowa) to wyrażenie wpisywane przez użytkownika
        w pole wyszukiwania. Może to być jedno słowo („SEO"), kilka słów („pozycjonowanie lokalne Kraków"),
        pytanie („jak poprawić CTR"), a nawet pełne zdanie w erze wyszukiwania głosowego.
        W strategii SEO słowa kluczowe definiują, na jakie zapytania chcemy być widoczni w wynikach Google —
        i jaką treść musimy stworzyć, żeby spełnić oczekiwania użytkownika.
      </p>
      <p>
        Dobór słów kluczowych to fundament każdej strategii SEO i SEM. Zła selekcja fraz —
        skupienie na słowach z dużym wolumenem, ale minimalną intencją zakupową —
        może generować ruch bez konwersji. Właściwa selekcja — frazy trafne, z odpowiednią
        <Link href="/intencja-wyszukiwania"> intencją wyszukiwania</Link> i realnym potencjałem —
        przekłada się na ruch przynoszący klientów.
      </p>

      <h2>Rodzaje słów kluczowych</h2>
      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Typ</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Charakterystyka</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Przykład</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Konkurencja</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Head term</td><td className="p-4 text-zinc-600">1–2 słowa, wysoki wolumen, ogólne</td><td className="p-4 text-zinc-600">„SEO", „buty"</td><td className="p-4 text-zinc-600">Bardzo wysoka</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Middle tail</td><td className="p-4 text-zinc-600">2–3 słowa, umiarkowany wolumen</td><td className="p-4 text-zinc-600">„pozycjonowanie stron", „buty biegowe"</td><td className="p-4 text-zinc-600">Wysoka</td></tr>
            <tr><td className="p-4 font-semibold text-ink"><Link href="/long-tail-keyword">Long-tail</Link></td><td className="p-4 text-zinc-600">3+ słów, niski wolumen, wysoka intencja</td><td className="p-4 text-zinc-600">„pozycjonowanie lokalne dla gabinetu"</td><td className="p-4 text-zinc-600">Niska</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Brandowe</td><td className="p-4 text-zinc-600">Zawierają nazwę marki</td><td className="p-4 text-zinc-600">„MiauSEO cennik"</td><td className="p-4 text-zinc-600">Minimalna</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Lokalne</td><td className="p-4 text-zinc-600">Zawierają lokalizację geograficzną</td><td className="p-4 text-zinc-600">„mechanik Kraków Prądnik"</td><td className="p-4 text-zinc-600">Średnia</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Jak dobierać słowa kluczowe?</h2>
      <p>
        Dobór fraz to proces łączący analizę danych z zrozumieniem klienta. Punkt wyjścia to zrozumienie,
        jakimi słowami Twoi potencjalni klienci opisują swój problem lub potrzebę — nie jakimi słowami
        Ty opisujesz swój produkt. Te dwa zestawy często się różnią.
      </p>
      <p>
        <strong>Wolumen wyszukiwań</strong> — ilu ludzi miesięcznie szuka danej frazy. Narzędzia:
        Google Keyword Planner, Ahrefs, Semrush, Ubersuggest. Pamiętaj: wolumen to potencjał,
        nie gwarancja ruchu.
        <strong>Keyword Difficulty (KD)</strong> — jak trudno wejść do top 10 dla danej frazy.
        Nowe domeny z DA poniżej 30 powinny celować w frazy KD poniżej 30.
        <strong><Link href="/intencja-wyszukiwania">Intencja wyszukiwania</Link></strong> — co konkretnie
        szuka osoba używająca tej frazy. Dopasowanie intencji do treści jest kluczowe.
        <strong>Business value</strong> — jak trafny jest dany ruch dla Twojego biznesu.
        Fraza z wolumenem 10 000, ale irrelewantna dla Twojej oferty, jest mniej wartościowa niż
        fraza z wolumenem 100, ale wysoko konwertująca.
      </p>

      <InfoBox>
        <strong>Jeden artykuł, wiele słów kluczowych:</strong> Strona nie musi rankować wyłącznie na jedną frazę. Artykuł pisany semantycznie poprawnie — odpowiadający na temat wyczerpująco — naturalnie rankuje na dziesiątki lub setki powiązanych fraz (<Link href="/lsi">LSI</Link>). Zamiast „optymalizować pod słowo kluczowe", myśl o „odpowiadaniu na temat" — to bardziej skuteczna strategia w erze modeli BERT i MUM.
      </InfoBox>

      <h2>FAQ — Keyword</h2>
      <h3>Ile słów kluczowych powinno być na stronie?</h3>
      <p>
        Nie istnieje optymalna liczba — to pytanie wynika z przestarzałego modelu optymalizacji.
        Nowoczesne SEO skupia się na pokryciu tematu, a nie na upychaniu konkretnej frazy określoną liczbę razy.
        Strona powinna pokrywać temat wyczerpująco, używać naturalnego języka i odpowiadać na pytania,
        które ma czytelnik. Google rozumie semantykę — fraza jest obecna przez kontekst, nie przez powtórzenia.
      </p>
      <h3>Czy słowa kluczowe nadal mają znaczenie w erze AI?</h3>
      <p>
        Tak — ale zmieniła się optymalizacja. W erze BERT, MUM i Gemini Google rozumie znaczenie,
        nie tylko dosłowne słowa. Frazy kluczowe nadal definiują tematy i intencje, ale ich rola
        w treści jest bardziej semantyczna niż techniczna. Kluczowe jest dopasowanie tematu i intencji,
        a nie mechaniczne umieszczanie konkretnych ciągów znaków.
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Czym jest słowo kluczowe?", "acceptedAnswer": { "@type": "Answer", "text": "Keyword (słowo kluczowe) to fraza wpisywana przez użytkownika w wyszukiwarkę. Dobór słów kluczowych definiuje, na jakie zapytania strona ma być widoczna. Kluczowe parametry: wolumen, trudność i intencja wyszukiwania." } }] }) }} />
    </div>
  );
}
