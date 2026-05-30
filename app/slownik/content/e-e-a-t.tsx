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

export default function EEat() {
  return (
    <div className="prose-blog">

      <h2>Historia: od E-A-T do E-E-A-T</h2>
      <p>
        Pojęcie E-A-T (Expertise, Authoritativeness, Trustworthiness) pojawiło się po raz pierwszy
        w wytycznych Google Quality Raters Guidelines w 2014 roku jako framework oceny jakości treści
        przez ludzkich recenzentów zatrudnianych przez Google. Nie był to formalny czynnik rankingowy —
        ale Quality Raters używali E-A-T do oceny stron, a ich feedback wpływał na trenowanie algorytmów.
        W grudniu 2022 roku Google dodało czwarty element — <strong>Experience</strong> (Doświadczenie) —
        tworząc akronim <strong>E-E-A-T</strong>. Zmiana była odpowiedzią na rosnące znaczenie contentu
        opartego na pierwszoosobowym doświadczeniu, szczególnie w dobie treści generowanych przez AI.
      </p>

      <h2>Czym jest E-E-A-T?</h2>
      <p>
        <strong>E-E-A-T</strong> to framework Google służący do oceny jakości treści i wiarygodności stron.
        Skrót rozwijany jest jako: Experience (Doświadczenie), Expertise (Ekspertyza),
        Authoritativeness (Autorytatywność), Trustworthiness (Wiarygodność).
        Google nie potwierdza, że E-E-A-T jest bezpośrednim czynnikiem rankingowym —
        ale sygnały, które na niego składają się, bez wątpienia wpływają na algorytm.
        Najlepszym dowodem jest powiązanie E-E-A-T z aktualizacjami Helpful Content
        i Core Updates, które konsekwentnie premiują treści eksperckie kosztem treści generycznych.
      </p>

      <h2>Cztery komponenty E-E-A-T w szczegółach</h2>

      <h3>Experience — Doświadczenie</h3>
      <p>
        Doświadczenie to najnowszy i jednocześnie najtrudniejszy do podrobienia element E-E-A-T.
        Google pyta: <em>czy autor ma bezpośrednie, osobiste doświadczenie z tematem, o którym pisze?</em>
        Recenzja produktu napisana przez kogoś, kto go faktycznie używał, ma inną jakość niż recenzja
        skompilowana z cudzych opinii. Relacja z podróży osoby, która faktycznie tam była, różni się
        od artykułu napisanego na podstawie zdjęć z Google Maps. Google szuka sygnałów pierwszoosobowości:
        konkretnych szczegółów, zdjęć z własnej kolekcji, dat i kontekstów niemożliwych do sfabrykowania.
      </p>

      <h3>Expertise — Ekspertyza</h3>
      <p>
        Ekspertyza to zakres wiedzy i umiejętności autora w omawianej dziedzinie.
        W tematach YMYL (Your Money Your Life — zdrowie, finanse, prawo, bezpieczeństwo)
        Google stawia najwyższe wymagania: artykuł o leczeniu powinien być napisany przez lekarza,
        a porada prawna przez prawnika. Sygnałami ekspertyzy są: kwalifikacje i certyfikaty autora,
        głębokość i precyzja merytoryczna treści, cytowanie wiarygodnych źródeł naukowych i branżowych,
        używanie właściwej terminologii w kontekście.
      </p>

      <h3>Authoritativeness — Autorytatywność</h3>
      <p>
        Autorytet to postrzeganie danej osoby lub domeny jako uznanego źródła wiedzy w swojej dziedzinie —
        przez innych ekspertów, media i użytkowników. Mierzy się go m.in. przez: cytowania w innych
        wartościowych źródłach, wzmianki w mediach branżowych i ogólnych, liczbę i jakość
        <Link href="/backlink">backlinków</Link> zewnętrznych, licencje i akredytacje (dla instytucji),
        aktywność na profesjonalnych platformach (Google Scholar, LinkedIn, konferencje branżowe).
      </p>

      <h3>Trustworthiness — Wiarygodność</h3>
      <p>
        Wiarygodność jest przez Google traktowana jako <strong>najważniejszy element E-E-A-T</strong>.
        Obejmuje: bezpieczeństwo strony (HTTPS), transparentność (kto jest autorem, kto stoi za serwisem,
        dane kontaktowe), dokładność i aktualność informacji, brak celowego wprowadzenia w błąd,
        jasną politykę prywatności i politykę redakcyjną (szczególnie dla serwisów newsowych),
        a także pozytywne recenzje i reputację w internecie.
      </p>

      <InfoBox>
        <strong>YMYL i E-E-A-T:</strong> Strony z kategorii Your Money Your Life (medycyna, finanse, prawo, bezpieczeństwo) podlegają najsurowszej ocenie E-E-A-T. Dla tych tematów Google wymaga autentycznej ekspertyzy — anonimowe artykuły bez autora lub treści pisane przez copywriterów bez przygotowania merytorycznego mogą skutkować niskim rankingiem, nawet jeśli są technicznie poprawnie zoptymalizowane.
      </InfoBox>

      <h2>Jak budować E-E-A-T w praktyce?</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Element</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Sygnały do budowania</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Narzędzia i miejsca</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-medium text-ink">Experience</td>
              <td className="p-4 text-zinc-600">Własne zdjęcia, case studies, konkretne daty i liczby</td>
              <td className="p-4 text-zinc-600">Blog, portfolio, wideo, media społecznościowe</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Expertise</td>
              <td className="p-4 text-zinc-600">Strona „O autorze", certyfikaty, publikacje, biosy</td>
              <td className="p-4 text-zinc-600">Schema markup Person/Author, LinkedIn, Google Scholar</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Authoritativeness</td>
              <td className="p-4 text-zinc-600">Wzmianki w mediach, backlinki z autorytatywnych domen</td>
              <td className="p-4 text-zinc-600">Digital PR, guest posting, HARO/Connectively</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Trustworthiness</td>
              <td className="p-4 text-zinc-600">HTTPS, dane firmy, polityki, recenzje, aktualne treści</td>
              <td className="p-4 text-zinc-600">Google Business Profile, Trustpilot, aktualizacje</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>FAQ — E-E-A-T</h2>

      <h3>Czy E-E-A-T jest bezpośrednim czynnikiem rankingowym Google?</h3>
      <p>
        Google nie potwierdza E-E-A-T jako pojedynczego algorytmicznego sygnału rankingowego.
        E-E-A-T to framework oceny stosowany przez Quality Raters. Jednak sygnały wchodzące w jego skład
        — profil linków, sygnały autorytetu, bezpieczeństwo strony, reputacja — są bezpośrednio mierzone
        przez algorytm. Core Updates konsekwentnie premiują strony z silnym E-E-A-T i degradują te bez niego.
      </p>

      <h3>Jak E-E-A-T wpływa na strony lokalne i małe firmy?</h3>
      <p>
        Małe firmy mogą budować E-E-A-T lokalnie: Google Business Profile z opiniami klientów
        buduje Trustworthiness, aktywna obecność w lokalnych mediach buduje Authoritativeness,
        dokładna dokumentacja wykonanych prac z prawdziwymi zdjęciami — Experience.
        E-E-A-T nie jest tylko dla dużych brandów — jest dostępny dla każdego,
        kto autentycznie dokumentuje swoją wiedzę i doświadczenie.
      </p>

      <h3>Czym różni się E-E-A-T od E-A-T?</h3>
      <p>
        Pierwsze E (Experience — Doświadczenie) zostało dodane w grudniu 2022 roku.
        Zmiana podkreśla, że sama ekspertyza akademicka nie wystarczy — Google chce treści
        tworzonych przez osoby z osobistym, praktycznym doświadczeniem w temacie.
        To odpowiedź na zalewającą internet treść AI, która może demonstrować „ekspertyzę"
        w formie, ale brakuje jej pierwszoosobowego doświadczenia.
      </p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Co oznacza E-E-A-T?",
            "acceptedAnswer": { "@type": "Answer", "text": "E-E-A-T to skrót od Experience (Doświadczenie), Expertise (Ekspertyza), Authoritativeness (Autorytatywność) i Trustworthiness (Wiarygodność). To framework Google do oceny jakości treści stosowany przez Quality Raters." } },
          { "@type": "Question", "name": "Jak budować E-E-A-T?",
            "acceptedAnswer": { "@type": "Answer", "text": "Buduj strony autorów z kwalifikacjami, używaj własnych zdjęć i danych z pierwszej ręki, pozyskuj wzmianki w mediach branżowych, zadbaj o HTTPS i transparentność firmy, regularnie aktualizuj treści i zbieraj opinie klientów." } },
          { "@type": "Question", "name": "Dlaczego Google dodało drugie E do E-A-T?",
            "acceptedAnswer": { "@type": "Answer", "text": "Experience (Doświadczenie) zostało dodane w grudniu 2022 roku, żeby odróżnić treści tworzone przez osoby z praktycznym, bezpośrednim doświadczeniem od treści kompilujących cudze informacje. To odpowiedź na rosnącą ilość treści AI bez autentycznego pierwszoosobowego kontekstu." } }
        ]
      }) }} />
    </div>
  );
}
