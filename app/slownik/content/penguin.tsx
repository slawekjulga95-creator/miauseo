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

export default function Penguin() {
  return (
    <div className="prose-blog">
      <h2>Czym jest algorytm Penguin?</h2>
      <p>
        <strong>Penguin</strong> to aktualizacja algorytmu Google wprowadzona w kwietniu 2012 roku,
        skierowana przeciwko nienaturalnym profilom linkowym — kupowanym, spamowym
        i manipulacyjnym backlinkom. Podczas gdy algorytm <Link href="/panda">Panda</Link>{" "}
        walczył z niską jakością treści, Penguin skupił się na próbach manipulacji rankingiem
        przez sztuczne budowanie linków.
      </p>
      <p>
        Penguin był odpowiedzią Google na dekadę wzrostu farm linkowych, sieci PBN
        (Private Blog Network) i masowego kupowania linków. W momencie premiery dotknął
        ok. 3,1% anglojęzycznych zapytań. Serwisy z nienaturalnym profilem linków
        straciły widoczność z dnia na dzień. Od 2016 roku Penguin działa w trybie ciągłym
        i jest wbudowany w główny algorytm.
      </p>

      <h2>Co penalizuje Penguin?</h2>
      <p>
        <strong>Kupowanie linków</strong> — płatne backlinki z farm linkowych lub sieci PBN
        to bezpośrednie naruszenie wytycznych Google. Penguin identyfikuje wzorce charakterystyczne
        dla płatnych kampanii: nagłe skoki liczby linków, linki z niezwiązanych tematycznie domen,
        identyczne anchor texty w wielu linkach.
      </p>
      <p>
        <strong>Nienaturalny profil anchor textów</strong> — nadmierna koncentracja exact-match
        anchors (np. 70% linków z kotwicą „pozycjonowanie Kraków") jest sygnałem manipulacji.
        Naturalne profile mają zróżnicowane anchory: nazwa marki, URL, ogólne frazy,
        warianty i frazy z długiego ogona.
      </p>
      <p>
        <strong>Sieci PBN (Private Blog Network)</strong> — prywatne sieci blogów tworzone
        wyłącznie do generowania linków. Google identyfikuje je przez podobne szablony,
        wspólne serwery, powiązane właścicielstwo domen i brak organicznego ruchu.
      </p>
      <p>
        <strong>Linki ze spamowych lub niezwiązanych tematycznie domen</strong> —
        setki linków z katalogów artykułów, komentarzy na niezwiązanych forach
        lub stron z treściami dla dorosłych tworzą toksyczny profil linków.
      </p>

      <h2>Jak naprawić toksyczny profil linków?</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Krok</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Działanie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">1. Audyt profilu linków</td><td className="p-4 text-zinc-600">Ahrefs, Semrush lub GSC — zidentyfikuj domeny z niskim DR, zerowym ruchem i niezwiązaną tematyką</td></tr>
            <tr><td className="p-4 font-semibold text-ink">2. Próba usunięcia</td><td className="p-4 text-zinc-600">Skontaktuj się z właścicielem strony linkującej z prośbą o usunięcie linka</td></tr>
            <tr><td className="p-4 font-semibold text-ink">3. Disavow</td><td className="p-4 text-zinc-600">Prześlij plik <Link href="/disavow">Disavow</Link> do Google Search Console dla linków, których nie możesz usunąć</td></tr>
            <tr><td className="p-4 font-semibold text-ink">4. Monitoring</td><td className="p-4 text-zinc-600">Regularny monitoring profilu — nowe toksyczne linki mogą pojawiać się bez Twojej wiedzy (negative SEO)</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Negative SEO i Penguin:</strong> Niektórzy nieuczciwi konkurenci celowo budują
        toksyczne linki do Twojej strony, próbując wywołać penalizację Penguin.
        Choć Google twierdzi, że jest na to odporny, regularne monitorowanie profilu backlinków
        i szybkie disavowanie podejrzanych linków jest dobrą praktyką ochronną —
        szczególnie w konkurencyjnych branżach.
      </InfoBox>

      <h2>FAQ — Penguin</h2>

      <h3>Czy Penguin nadal jest aktywny?</h3>
      <p>
        Tak — od 2016 roku jest częścią głównego algorytmu Google i działa w czasie rzeczywistym.
        Oznacza to, że zarówno penalizacje, jak i odwrócenie penalizacji (po naprawieniu profilu
        linków) następują znacznie szybciej niż w czasach cyklicznych aktualizacji.
      </p>

      <h3>Jak odróżnić penalizację Penguin od Pandy?</h3>
      <p>
        Penguin koncentruje się na profilu linków — sprawdź, czy przed spadkiem nastąpiły
        zmiany w backlinkowaniu (nowe linki, utrata dobrych linków, kampania link buildingowa).
        Panda koncentruje się na treści — jeśli niedawno dodałeś dużo cienkiej treści lub
        masz problemy z duplikacją. Oba mogą działać jednocześnie. Diagnozę zacznij
        od analizy profilu linków w Ahrefs lub GSC i porównania z datą spadku ruchu.
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
                "name": "Czym jest algorytm Penguin?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Penguin to aktualizacja Google z 2012 roku penalizująca nienaturalne profile linkowe — kupowane backlinki, sieci PBN, spam linkowy i nadmierną koncentrację exact-match anchors. Od 2016 roku działa w trybie ciągłym jako część głównego algorytmu."
                }
              },
              {
                "@type": "Question",
                "name": "Jak naprawić penalizację Penguin?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Kroki: audyt profilu linków (Ahrefs, GSC), próba usunięcia toksycznych linków u właścicieli stron, disavow przez Google Search Console dla linków nieodpowiadających na prośby. Penguin działa w czasie rzeczywistym — poprawa profilu przynosi efekty szybciej niż w 2012 roku."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
