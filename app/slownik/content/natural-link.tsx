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

export default function NaturalLink() {
  return (
    <div className="prose-blog">
      <h2>Czym jest natural link?</h2>
      <p>
        <strong>Natural link</strong> (link naturalny, organiczny backlink) to hiperłącze pozyskane
        bez żadnych aktywnych działań <Link href="/link-building">link buildingowych</Link> —
        bo inna strona lub autor uznała Twoją treść za wartościową i zdecydowała się do niej
        odwołać z własnej inicjatywy. Nikt jej o to nie prosił, nic jej nie zapłaciłeś,
        nie wymieniłeś się linkami — link pojawił się, bo zasłużyłeś na niego jakością.
      </p>
      <p>
        Naturalne linki są szczytem piramidy w ocenie jakości profilu linkowego przez Google.
        Algorytm <Link href="/penguin">Penguin</Link> od 2012 roku stara się odróżnić linki
        naturalne od sztucznych i nagradza profile złożone z redakcyjnych, tematycznych,
        niezamawianych odniesień.
      </p>

      <h2>Cechy natural linka</h2>
      <p>
        <strong>Redakcyjny kontekst</strong> — link pojawia się w środku artykułu lub treści,
        gdzie autor cytuje dane, narzędzie lub źródło jako uzasadnione odwołanie.
        Nie w stopce, sidebarze ani w bloku reklamowym.
      </p>
      <p>
        <strong>Zróżnicowany <Link href="/anchor-text">anchor text</Link></strong> — naturalne linki
        mają różnorodne kotwice: nazwę marki, URL, ogólne zwroty („kliknij tutaj", „więcej informacji"),
        fragmenty zdań z contextualnym opisem. Profil złożony wyłącznie z exact-match anchors
        („pozycjonowanie Kraków") jest sygnałem manipulacji.
      </p>
      <p>
        <strong>Trafność tematyczna</strong> — link pochodzi ze strony poruszającej pokrewny temat.
        Artykuł o marketingu cyfrowym linkujący do agencji SEO to naturalny kontekst.
        Portal kulinarny linkujący do tej samej agencji — mniej naturalny.
      </p>
      <p>
        <strong>Organiczne tempo pojawiania się</strong> — naturalne linki pojawiają się stopniowo,
        bez nagłych skoków. Kampania link buildingowa, która daje 200 linków w tydzień,
        wygląda nienaturalnie nawet jeśli każdy link jest „dobry".
      </p>

      <InfoBox>
        <strong>Nie możesz „kupić" naturalnych linków, ale możesz na nie zasłużyć:</strong> Strategie,
        które konsekwentnie generują natural links, to: oryginalne badania z własnymi danymi,
        darmowe narzędzia online (kalkulatory, generatory, checklisty), ekskluzywne raporty
        branżowe, kontrowersyjne lub odkrywcze artykuły, które dziennikarze chcą cytować.
        To tzw. linkable assets — treści stworzone z myślą o tym, że są warte cytowania.
      </InfoBox>

      <h2>FAQ — Natural Link</h2>

      <h3>Jak odróżnić natural link od sztucznego?</h3>
      <p>
        Google analizuje kombinację sygnałów: kontekst, anchor text, tempo pojawiania się,
        trafność domenową, historię strony linkującej. Dla właściciela witryny naturalne linki
        widać w GSC — pojawiają się z portali, z którymi nie miałeś kontaktu, z różnorodnymi
        anchorami, z artykułów traktujących o tematycznie powiązanych zagadnieniach.
      </p>

      <h3>Czy natural links można „skalować"?</h3>
      <p>
        Pośrednio — przez systematyczne inwestowanie w jakość treści i digital PR. Narzędzia
        jak HARO, Connectively i platformy współpracy z dziennikarzami pozwalają tworzyć
        sytuacje, w których media chcą Cię cytować. To nie kupowanie linków — to zarabianie na nich
        przez dostarczanie wartości, choć z aktywnym wysiłkiem po stronie nadawcy.
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
                "name": "Czym jest natural link?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Natural link (link naturalny) to backlink pozyskany bez aktywnych działań link buildingowych — bo inna strona uznała Twoją treść za wartościową. Naturalne linki mają redakcyjny kontekst, zróżnicowane anchory i organiczne tempo pojawiania się. Google ocenia je najwyżej."
                }
              },
              {
                "@type": "Question",
                "name": "Jak zdobywać naturalne linki?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Przez tworzenie treści wartych cytowania (linkable assets): oryginalne badania, raporty z danymi, darmowe narzędzia, odkrywcze artykuły. Digital PR i obecność w mediach branżowych systematycznie generują naturalne backlinki."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
