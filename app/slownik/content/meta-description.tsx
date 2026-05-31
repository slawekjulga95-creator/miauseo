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

export default function MetaDescription() {
  return (
    <div className="prose-blog">
      <h2>Czym jest meta description?</h2>
      <p>
        <strong>Meta description</strong> to krótki opis strony (do ok. 160 znaków) umieszczony
        w sekcji <code>&lt;head&gt;</code> dokumentu HTML. W wynikach wyszukiwania Google wyświetla się
        pod <Link href="/meta-title">meta title</Link> jako szary tekst opisu — snippet, który
        pomaga użytkownikom zdecydować, czy kliknąć dany wynik.
      </p>
      <p>
        Meta description <strong>nie jest bezpośrednim czynnikiem rankingowym</strong> Google —
        nie wpływa na to, jak wysoko strona rankuje dla danej frazy. Jej rola jest inna i równie ważna:
        decyduje o tym, ilu użytkowników kliknie wynik. Dobrze napisany opis może poprawić{" "}
        <Link href="/ctr">CTR</Link> o kilkanaście procent — co pośrednio przekłada się
        na więcej ruchu z tej samej pozycji.
      </p>

      <h2>Jak Google wyświetla meta description?</h2>
      <p>
        Google nie zawsze wyświetla Twój meta description. W ok. 30–40% przypadków (według badań
        Ahrefs i Portent) Google generuje własny snippet — wybierając fragment treści strony,
        który najlepiej odpowiada konkretnemu zapytaniu użytkownika. Dzieje się tak, gdy:
        meta description jest zbyt ogólny, za krótki, nie odpowiada intencji zapytania,
        lub gdy Google uzna inny fragment za trafniejszy.
      </p>
      <p>
        Mimo to pisanie meta descriptionów ma sens — w pozostałych 60–70% przypadków Twój tekst
        jest wyświetlany i to on decyduje o kliknięciu.
      </p>

      <h2>Jak pisać skuteczny meta description?</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Zasada</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Dobry przykład</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Zły przykład</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Zmieść się w 155–160 zn.</td><td className="p-4 text-zinc-600">Pełne zdanie kończące się w obrębie limitu</td><td className="p-4 text-zinc-600">Tekst obcięty wielokropkiem w połowie zdania...</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Zawrzyj słowo kluczowe</td><td className="p-4 text-zinc-600">Google je pogrubia w snippecie — zwiększa widoczność</td><td className="p-4 text-zinc-600">Opis bez frazy, na którą strona rankuje</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Daj powód do kliknięcia</td><td className="p-4 text-zinc-600">„Bezpłatna analiza SEO w 24h — sprawdź"</td><td className="p-4 text-zinc-600">„Witamy na stronie naszej agencji SEO."</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Odróżnij się od konkurencji</td><td className="p-4 text-zinc-600">Unikalny wyróżnik (cena, tempo, gwarancja, liczba)</td><td className="p-4 text-zinc-600">Opis brzmiący identycznie jak 5 konkurentów</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Duplikaty meta descriptionów to problem:</strong> Jeśli wiele podstron ma identyczny
        (lub brak) meta description, Google generuje własne snippety — często nieprecyzyjne i mało
        zachęcające. CMS-y jak WordPress domyślnie kopiują fragment treści lub zostawiają pole puste.
        Zadbaj o unikalne opisy dla każdej ważnej podstrony, szczególnie stron produktowych i usługowych.
      </InfoBox>

      <h2>FAQ — Meta Description</h2>

      <h3>Jaka jest optymalna długość meta description?</h3>
      <p>
        Google mierzy długość w pikselach, nie znakach, więc liczba znaków zależy od użytych liter.
        Bezpieczna długość to 140–155 znaków dla desktopa. Na mobile snippet jest krótszy —
        ok. 120 znaków. Narzędzia jak Yoast SEO, RankMath lub Screaming Frog pokazują
        podgląd snippetu i flagują zbyt długie opisy.
      </p>

      <h3>Czy meta description wpływa na ranking?</h3>
      <p>
        Bezpośrednio — nie. Google wielokrotnie to potwierdzał. Pośrednio — tak, przez CTR.
        Wyższy CTR sygnalizuje Google, że wynik jest trafny dla użytkowników, co może
        pozytywnie wpływać na pozycję w dłuższym horyzoncie. Optymalizacja meta description
        to optymalizacja konwersji w SERP, nie techniczne SEO.
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
                "name": "Czym jest meta description?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Meta description to krótki opis strony (do 160 znaków) wyświetlany pod tytułem w wynikach wyszukiwania. Nie wpływa bezpośrednio na ranking, ale dobrze napisany opis poprawia CTR — przyciągając więcej kliknięć z tej samej pozycji."
                }
              },
              {
                "@type": "Question",
                "name": "Jaka jest optymalna długość meta description?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bezpieczna długość to 140–155 znaków dla desktopa, ok. 120 znaków na mobile. Google mierzy długość w pikselach, więc liczba znaków jest przybliżona. Ważne, żeby tekst się nie obcinał w środku zdania."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
