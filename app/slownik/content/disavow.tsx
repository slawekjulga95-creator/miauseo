import Link from "next/link";

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex gap-4 bg-orange-50 border border-orange-100 rounded-2xl p-5">
      <div className="shrink-0 w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center mt-0.5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <div className="text-sm text-orange-900 leading-relaxed">{children}</div>
    </div>
  );
}

export default function Disavow() {
  return (
    <div className="prose-blog">

      <h2>Problem: toksyczne linki, których nie możesz usunąć</h2>
      <p>
        Każda witryna z historią może mieć <Link href="/backlink">backlinki</Link> z niechcianych źródeł —
        spamowe katalogi z ery przed algorytmem <Link href="/penguin">Penguin</Link>, farmy linków
        z których nie pamiętasz korzystania, linki z serwisów hazardowych czy farmaceutycznych
        wstrzykiwane przez włamania (tzw. link injection), a nawet celowe ataki negatywnego SEO
        ze strony konkurencji. Pierwszym krokiem jest zawsze próba kontaktu z właścicielem serwisu
        i prośba o usunięcie linku. Ale co zrobić, gdy witryna jest porzucona, właściciel nie odpowiada
        lub link pochodzi z serwisu, którego administratorzy z zasady ignorują takie prośby?
        Odpowiedzią jest narzędzie Disavow.
      </p>

      <h2>Czym jest Disavow?</h2>
      <p>
        <strong>Disavow</strong> (pol. odrzucenie, zrzeczenie się) to narzędzie dostępne w
        <Link href="/google-search-console"> Google Search Console</Link>, pozwalające poinformować Google,
        że nie chcesz, żeby określone linki zewnętrzne były brane pod uwagę przy ocenie Twojej witryny.
        Przesyłasz plik tekstowy z listą domen lub konkretnych URL, a Google traktuje je jako odrzucone —
        jakby tych linków nie było.
      </p>
      <p>
        Narzędzie zostało wprowadzone przez Google w 2012 roku, w odpowiedzi na rosnący problem
        z toksycznymi profilami linków — zarówno budowanymi celowo przez <Link href="/black-hat-seo">black hat SEO</Link>,
        jak i wynikającymi z negatywnego SEO. Przed jego wprowadzeniem jedyną drogą pozbycia się
        problematycznych linków była bezpośrednia prośba do ich właściciela.
      </p>

      <h2>Kiedy używać Disavow — a kiedy nie</h2>
      <p>
        Google wyraźnie przestrzega: <strong>Disavow to narzędzie dla zaawansowanych użytkowników</strong>.
        Błędne odrzucenie wartościowych linków może poważnie zaszkodzić rankingom. Narzędzie ma sens
        w kilku konkretnych sytuacjach.
      </p>
      <p>
        <strong>Manualna kara za nienaturalne linki</strong> — jeśli w sekcji „Działania manualne" w GSC
        widnieje kara za nienaturalne linki przychodzące, disavow jest krokiem wymaganym przed złożeniem
        reconsideration request. Bez oczyszczenia profilu linków Google nie cofnie kary.
      </p>
      <p>
        <strong>Duży udział linków spamowych w profilu</strong> — jeśli audyt w Ahrefs lub Semrush pokazuje,
        że znaczna część backlinków pochodzi z serwisów o cechach spamu (niskie DR, masowe wyniki,
        niezwiązana tematyka, podejrzane anchor texty), a bezpośredni outreach do właścicieli jest
        niemożliwy — disavow jest wskazany.
      </p>
      <p>
        <strong>Atak negatywnego SEO</strong> — jeśli obserwujesz nagły wzrost liczby linków
        z podejrzanych źródeł i jednoczesny spadek pozycji, może to być atak negatywnego SEO.
        Szybkie odrzucenie toksycznych domen ogranicza ryzyko penalizacji algorytmicznej.
      </p>
      <p>
        Kiedy <strong>nie używać</strong> Disavow: przy naturalnych linkach niskiej jakości (np. link z małego
        lokalnego katalogu bez historii spamu), przy normalnym profilu linków bez oznak problemów,
        jako rutynowe działanie prewencyjne. Google od 2016 roku skutecznie ignoruje większość spamowych linków
        samodzielnie — nie każdy słaby link wymaga ręcznego odrzucenia.
      </p>

      <InfoBox>
        <strong>Zasada ostrożności:</strong> Przed odrzuceniem jakiejkolwiek domeny upewnij się, że faktycznie zasługuje na odrzucenie. Sprawdź w GSC i Ahrefs, czy ta domena nie ma też wartościowych linków do Twojej witryny. Odrzucenie domeny na poziomie domeny (domain:example.com) blokuje wszystkie linki z tej domeny — w tym te ewentualnie wartościowe.
      </InfoBox>

      <h2>Jak stworzyć i przesłać plik Disavow</h2>
      <p>
        Plik disavow to zwykły plik tekstowy (.txt) z listą URL lub domen do odrzucenia.
        Każda domena lub URL to osobna linia. Komentarze zaczynają się od znaku <code>#</code>.
        Odrzucenie na poziomie domeny (<code>domain:example.com</code>) jest bezpieczniejsze i szersze
        niż odrzucanie pojedynczych URL — blokuje wszystkie obecne i przyszłe linki z tej domeny.
      </p>
      <pre className="not-prose bg-zinc-900 text-zinc-100 rounded-xl p-4 text-sm font-mono overflow-x-auto my-6">
{`# Plik disavow - aktualizacja 2026-01-15
# Linki ze spamowych katalogów
domain:spamowy-katalog.pl
domain:linkfarm-przyklad.com

# Konkretne URL z tematycznie niezwiązanych stron
https://casino-links.example.com/strona-z-linkiem/
https://pharma-spam.net/artykul/`}
      </pre>
      <p>
        Gotowy plik przesyłasz przez narzędzie Disavow Links dostępne pod adresem
        <em> search.google.com/search-console/disavow-links</em>.
        Wybierasz właściwość (domenę), wczytujesz plik i potwierdzasz.
        Google przetwarza plik w ciągu kilku tygodni — efekty widać zazwyczaj po następnej recrawl danej domeny.
      </p>

      <h2>Jak zidentyfikować linki do odrzucenia?</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Cecha toksycznego linku</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Jak sprawdzić</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-medium text-ink">Bardzo niski DR / DA (poniżej 5)</td>
              <td className="p-4 text-zinc-600">Ahrefs, Moz lub Semrush — raport backlinków</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Spam Score Moz powyżej 30%</td>
              <td className="p-4 text-zinc-600">Moz Link Explorer</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Brak tematycznego powiązania z Twoją branżą</td>
              <td className="p-4 text-zinc-600">Ręczna weryfikacja strony linkującej</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Anchor text z niezwiązanymi frazami (hazard, farmacja)</td>
              <td className="p-4 text-zinc-600">Raport anchor textów w Ahrefs</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Masowe linki pojawiające się jednocześnie</td>
              <td className="p-4 text-zinc-600">Raport nowych backlinków — filtr „New"</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>FAQ — Disavow</h2>

      <h3>Czy Disavow jest konieczny jeśli nie mam kary manualnej?</h3>
      <p>
        Niekoniecznie. Google od lat skutecznie samodzielnie ignoruje większość spamowych linków.
        Jeśli nie masz kary manualnej ani symptomów algorytmicznej penalizacji (nagły spadek pozycji
        korelujący z aktualizacją Penguin), a profil linków wygląda typowo — disavow nie jest pilny.
        Użyj go gdy audyt pokazuje wyraźny problem lub gdy masz manualną karę do cofnięcia.
      </p>

      <h3>Jak długo Google przetwarza plik Disavow?</h3>
      <p>
        Google przetwarza plik stosunkowo szybko (kilka dni do tygodnia), ale efekty widać dopiero gdy
        Googlebot ponownie crawluje domeny z listy. W praktyce pierwsze efekty obserwuje się po 4–8 tygodniach.
        Jeśli masz karę manualną, czas liczysz od dnia złożenia reconsideration request — nie od wgrania pliku.
      </p>

      <h3>Czy mogę odwołać Disavow?</h3>
      <p>
        Tak — możesz zaktualizować plik (usunąć wpisy, które chcesz cofnąć) i przesłać go ponownie,
        lub całkowicie wycofać plik disavow dla danej właściwości. Google przywraca ocenę odrzuconych
        linków po ponownym crawlowaniu. Aktualizacja pliku disavow jest standardową procedurą —
        warto go przeglądać co kilka miesięcy.
      </p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Czym jest narzędzie Disavow w Google Search Console?",
            "acceptedAnswer": { "@type": "Answer", "text": "Disavow to narzędzie Google Search Console pozwalające poinformować Google, że nie chcesz żeby określone linki zewnętrzne były brane pod uwagę przy ocenie Twojej witryny. Przesyłasz plik tekstowy z listą domen lub URL do odrzucenia." } },
          { "@type": "Question", "name": "Kiedy używać narzędzia Disavow?",
            "acceptedAnswer": { "@type": "Answer", "text": "Gdy masz manualną karę za nienaturalne linki, gdy audyt pokazuje duży udział spamowych backlinków których nie możesz usunąć, lub gdy podejrzewasz atak negatywnego SEO. Google radzi nie używać go prewencyjnie bez wyraźnego problemu." } },
          { "@type": "Question", "name": "Jak stworzyć plik Disavow?",
            "acceptedAnswer": { "@type": "Answer", "text": "Plik disavow to zwykły plik .txt. Każda linia to domena (domain:example.com) lub konkretny URL do odrzucenia. Komentarze zaczynają się od #. Przesyłasz go przez narzędzie Disavow Links w Google Search Console." } }
        ]
      }) }} />
    </div>
  );
}
