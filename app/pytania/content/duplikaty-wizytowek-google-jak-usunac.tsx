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

export default function DuplikatyWizytowekGoogleJakUsunac() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Zduplikowane profile Google Business to problem, który pojawia się częściej niż większość właścicieli firm podejrzewa. Opinie rozdzielają się między dwa profile, klienci trafiają na nieaktualne dane, a algorytm Google nie wie który profil jest prawdziwy. Skutek: niższa pozycja obu i zdezorientowani klienci.
      </p>

      <h2>Skąd biorą się duplikaty</h2>
      <p>Duplikaty powstają na kilka sposobów. Firma przeprowadziła się — stary adres pozostał jako osobny profil, nowy został założony przez właściciela. Pracownik lub agencja założyła drugi profil nie wiedząc że pierwszy istnieje. Google automatycznie stworzył profil na podstawie danych z innych źródeł — katalogów, stron rządowych, agregatów — i profil ten nigdy nie był zarządzany przez właściciela. Zmiana nazwy firmy — stara nazwa pozostała jako osobny profil, nowa została zarejestrowana osobno. Zmiana struktury prawnej — spółka przekształciła się w jednoosobową działalność lub odwrotnie.</p>
      <p>Warto też sprawdzić czy konkurencja nie stworzyła fałszywego profilu pod Twoją nazwą lub adresem — to rzadkie, ale zdarzające się działanie.</p>

      <h2>Jak znaleźć duplikaty swojej firmy</h2>
      <p>Najprostszy sposób: wyszukaj w Google Maps nazwę firmy i wszystkie jej warianty (ze skrótami, bez skrótów, z poprzednią nazwą) oraz adres firmy. Sprawdź też frazy branżowe z lokalizacją — czasem duplikat pojawia się tylko przy konkretnych zapytaniach, nie przy wyszukiwaniu po nazwie. Warto też sprawdzić przez narzędzie podglądu mapy przy różnych lokalizacjach szukającego — duplikat może być widoczny tylko dla użytkowników w innej części miasta.</p>
      <p>Narzędzia do audytu cytowań takie jak BrightLocal lub Moz Local często wykrywają duplikaty automatycznie — skanują bazy danych Google i wskazują rozbieżności w danych NAP które mogą sugerować zduplikowane profile. Czym jest NAP i dlaczego spójność danych ma znaczenie: <Link href="/pytania/nap-consistency-co-to-jest">NAP consistency — co to jest</Link>.</p>

      <InfoBox>
        <strong>Duplikat z opiniami — nie usuwaj pochopnie:</strong> jeśli duplikat ma opinie klientów — nawet kilka — usunięcie go spowoduje utratę tych recenzji. W takiej sytuacji lepszą opcją jest scalenie profili (merge), nie usunięcie. Google umożliwia zgłoszenie scalenia przez centrum pomocy, choć procedura jest nieco wolniejsza niż proste usunięcie.
      </InfoBox>

      <h2>Jak usunąć lub scalić duplikat</h2>
      <p>Jeśli duplikat jest własnością Twojego konta Google — możesz go oznaczyć jako zduplikowany bezpośrednio w panelu Google Business Profile lub poprosić o usunięcie przez centrum pomocy. Jeśli masz dostęp do obu profili, możesz też zażądać scalenia — skontaktuj się z pomocą techniczną Google Business i wskaż oba profile z prośbą o połączenie i przeniesienie opinii do głównego profilu.</p>
      <p>Jeśli duplikat nie należy do Twojego konta — możesz go zgłosić przez Google Maps. Znajdź duplikat na mapie, kliknij „Zasugeruj zmianę" i wybierz „To miejsce nie istnieje" lub „To duplikat innego miejsca". Google weryfikuje takie zgłoszenia, ale może to trwać kilka tygodni. Jeśli duplikat zawiera nieaktualne lub nieprawdziwe dane, możesz też poprosić Google o oznaczenie go jako nieaktualny przez formularz przesyłania opinii w Maps.</p>

      <h2>Zapobieganie duplikatom w przyszłości</h2>
      <p>Najlepszą ochroną przed duplikatami jest systematyczne monitorowanie własnego profilu i wyszukiwanie nazwy firmy co kilka miesięcy. Jeśli korzystasz z agencji do zarządzania profilem, upewnij się że komunikacja w razie zmiany danych firmy jest jasna i natychmiastowa. Każda zmiana adresu, nazwy lub formy prawnej powinna triggerować audyt profilu Google — czy stare dane nie zostały gdzieś w sieci jako zombie-profil. Spójność danych między profilem a innymi źródłami w internecie: <Link href="/pytania/cytowania-lokalne-seo-jak-budowac">cytowania lokalne SEO — jak budować</Link>.</p>
    </div>
  );
}
