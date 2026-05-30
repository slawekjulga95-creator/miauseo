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

export default function ExternalLink() {
  return (
    <div className="prose-blog">

      <h2>Czym jest External Link?</h2>
      <p>
        <strong>External link</strong> (link zewnętrzny, outbound link) to hiperłącze prowadzące z Twojej
        strony do innej domeny. Jest to przeciwieństwo <Link href="/internal-linking">linku wewnętrznego</Link>
        (internal link), który łączy strony w obrębie tej samej witryny.
        Gdy w artykule na Twoim blogu linkujesz do badania naukowego, cytowanego portalu branżowego
        czy narzędzia, które polecasz — to właśnie external link.
      </p>
      <p>
        Linki zewnętrzne pełnią podwójną rolę. Dla użytkownika — to nawigacja do dodatkowych zasobów,
        rozwinięcie tematu i potwierdzenie, że autor oparł się na wiarygodnych źródłach.
        Dla Google — sygnał, który wpływa na ocenę jakości i kontekstu strony,
        choć w inny sposób niż <Link href="/backlink">backlinki</Link> przychodzące.
      </p>

      <h2>Jak external linki wpływają na SEO?</h2>
      <p>
        Przez lata panował mit, że linkowanie do zewnętrznych stron „wycieka" autorytetu domeny
        i szkodzi SEO. Badania i wypowiedzi Google'owskich specjalistów obalają to przekonanie.
        Linkowanie do autorytatywnych, tematycznie powiązanych źródeł jest sygnałem jakości treści —
        nie stratą autorytetu.
      </p>
      <p>
        Google interpretuje linki zewnętrzne do wiarygodnych źródeł jako potwierdzenie,
        że autor weryfikował fakty i oparł się na sprawdzonych danych. Strony naukowe, rządowe,
        akademickie i uznane portale branżowe jako linki wychodzące wzmacniają sygnały
        <Link href="/e-e-a-t">E-E-A-T</Link> (szczególnie Trustworthiness — wiarygodność).
        Strona, która nigdy nie linkuje do zewnętrznych źródeł, wygląda jak zamknięta wyspa —
        co jest nienaturalne i podejrzane.
      </p>

      <h2>Dofollow vs Nofollow w linkach zewnętrznych</h2>
      <p>
        Domyślnie linki zewnętrzne są <Link href="/dofollow">dofollow</Link> — przekazują część
        autorytetu Twojej strony do strony linkowanej. W większości przypadków jest to pożądane
        (linkujesz do czegoś wartościowego, więc warto to wspierać), ale istnieją sytuacje,
        gdy należy użyć atrybutu <Link href="/nofollow">nofollow</Link> lub jego wariantów.
      </p>
      <p>
        <strong>rel="nofollow"</strong> — ogólny sygnał dla Google: nie podążaj za tym linkiem.
        Stosowany dla linków, za których wiarygodność nie chcesz ręczyć, lub dla linków
        w sekcjach generowanych przez użytkowników (komentarze, fora).
        <strong>rel="ugc"</strong> (User Generated Content) — dla linków tworzonych przez użytkowników.
        <strong>rel="sponsored"</strong> — obowiązkowy dla linków w treściach sponsorowanych, reklamowych i afiliacyjnych.
        Brak oznaczenia linku afiliacyjnego jako sponsored jest naruszeniem wytycznych Google
        i może skutkować manualną karą za ukryte linki płatne.
      </p>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Typ linku zewnętrznego</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Atrybut</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Zastosowanie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-medium text-ink">Redakcyjny do wiarygodnego źródła</td>
              <td className="p-4 text-zinc-600 font-mono">dofollow (brak atrybutu)</td>
              <td className="p-4 text-zinc-600">Cytowanie badań, norm, portali branżowych</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Afiliacyjny / płatny</td>
              <td className="p-4 text-zinc-600 font-mono">rel="sponsored"</td>
              <td className="p-4 text-zinc-600">Linki z prowizją, artykuły sponsorowane</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">UGC (komentarze, forum)</td>
              <td className="p-4 text-zinc-600 font-mono">rel="ugc"</td>
              <td className="p-4 text-zinc-600">Linki dodawane przez użytkowników</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Niezaufane / niezweryfikowane</td>
              <td className="p-4 text-zinc-600 font-mono">rel="nofollow"</td>
              <td className="p-4 text-zinc-600">Linki do źródeł za które nie ręczysz</td>
            </tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Linki wychodzące a przepływ link juice:</strong> Każdy dofollow external link oddaje część autorytetu Twojej strony do linkowanej domeny. Ale Google nie odejmuje Ci autorytetu za linkowanie do wartościowych źródeł — jego odbiór strony jako całości zależy od kontekstu i jakości linków wychodzących. Linkuj do źródeł, do których naprawdę chcesz odsyłać czytelnika — i używaj nofollow tam, gdzie nie ręczysz za jakość.
      </InfoBox>

      <h2>Dobre praktyki linkowania zewnętrznego</h2>
      <p>
        <strong>Linkuj kontekstowo i trafnie</strong> — link do źródła powinien naturalnie rozwijać
        lub dokumentować to, co zostało napisane w zdaniu. Link wstawiony na siłę jako dowód
        dla nieistotnego twierdzenia jest zbędny i zaśmieca tekst.
      </p>
      <p>
        <strong>Weryfikuj aktualność i wiarygodność źródła</strong> — link do badania z 2008 roku
        w artykule o aktualnych algorytmach może wprowadzać w błąd. Preferuj aktualne,
        recenzowane lub oficjalne źródła. Regularnie audytuj zewnętrzne linki — szczególnie te
        prowadzące do stron, które mogły zmienić właściciela lub treść.
      </p>
      <p>
        <strong>Otwieraj w nowej karcie z ostrożnością</strong> — atrybut <code>target="_blank"</code>
        otwiera link w nowej karcie, co może poprawić UX (użytkownik nie traci kontekstu strony).
        Użyj zawsze razem z <code>rel="noopener noreferrer"</code> — zabezpieczenie przed
        podatnością bezpieczeństwa (tabnapping).
      </p>
      <p>
        <strong>Nie przesadzaj z liczbą linków zewnętrznych</strong> — strona z kilkudziesięcioma
        linkami zewnętrznymi w jednym artykule wygląda jak katalog linków, a nie wartościowy tekst.
        Linkuj do zewnętrznych źródeł gdy naprawdę wnoszą wartość dla czytelnika.
      </p>

      <h2>FAQ — External Link</h2>

      <h3>Czy linkowanie do konkurencji jest złym pomysłem?</h3>
      <p>
        Niekoniecznie. Jeśli artykuł konkurenta jest genuinnie najlepszym źródłem informacji na dany temat
        i linkowanie do niego służy Twoim czytelnikom — linkuj. Troska o czytelnika jest ważniejsza
        niż unikanie wspierania konkurenta. W praktyce możesz też szukać alternatywnych, niezwiązanych
        z konkurencją źródeł (badania, niezależne portale), które pełnią tę samą rolę.
      </p>

      <h3>Ile external linków powinien mieć artykuł?</h3>
      <p>
        Nie ma idealnej liczby — zależy od długości artykułu i tematu. W typowym artykule
        2000–3000 słów naturalne są 3–8 linków zewnętrznych. Każdy powinien mieć wyraźne uzasadnienie:
        cytowanie danych, odesłanie do narzędzia, dokumentacja stwierdzenia. Zbyt wiele linków
        rozmywa uwagę czytelnika i może sugerować upychanie linków.
      </p>

      <h3>Co to jest link rot i jak go naprawić?</h3>
      <p>
        Link rot (gnicie linków) to zjawisko, gdy zewnętrzne zasoby, do których linkujesz,
        przestają istnieć (404, zmiana URL, usunięcie strony). Zepsute linki zewnętrzne psują
        doświadczenie użytkownika i mogą sygnalizować Google nieaktualność treści.
        Narzędzia jak Screaming Frog lub Ahrefs wykrywają broken links — warto audytować
        zewnętrzne linki co kilka miesięcy, szczególnie w starszych artykułach.
      </p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Czym jest external link?",
            "acceptedAnswer": { "@type": "Answer", "text": "External link (link zewnętrzny) to hiperłącze prowadzące z Twojej strony do innej domeny. W odróżnieniu od internal linku łączącego strony tej samej witryny, external link kieruje do zewnętrznego zasobu w sieci." } },
          { "@type": "Question", "name": "Czy linkowanie zewnętrzne szkodzi SEO?",
            "acceptedAnswer": { "@type": "Answer", "text": "Nie — linkowanie do wiarygodnych, tematycznie powiązanych źródeł jest sygnałem jakości i wzmacnia E-E-A-T. Linki do autorytatywnych źródeł (naukowych, rządowych, branżowych) pokazują Google, że treść jest zweryfikowana i rzetelna." } },
          { "@type": "Question", "name": "Kiedy używać rel='nofollow' w external linkach?",
            "acceptedAnswer": { "@type": "Answer", "text": "Używaj rel='nofollow' dla linków do stron, za których jakość nie chcesz ręczyć. rel='sponsored' jest obowiązkowy dla linków afiliacyjnych i płatnych. rel='ugc' stosuj dla linków tworzonych przez użytkowników (komentarze, forum)." } }
        ]
      }) }} />
    </div>
  );
}
