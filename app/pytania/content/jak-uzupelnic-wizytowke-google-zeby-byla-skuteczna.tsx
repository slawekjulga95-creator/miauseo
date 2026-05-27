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

export default function JakUzupelnicWizytowkeGoogleZebyBylaSku() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Wizytówka Google uzupełniona w 100% pojawia się w wynikach częściej niż profil niekompletny — to nie jest spekulacja, to dane z panelu Google Business Profile, który sam wyświetla wskaźnik kompletności i sugeruje co wypełnić. Ale kompletność to nie tylko odhaczenie pól. To jakość informacji w tych polach. Przejdźmy przez każde z nich.
      </p>

      <h2>Nazwa i kategoria — fundament trafności</h2>
      <p>Nazwa firmy powinna być identyczna z tą, której używasz wszędzie: na stronie, w umowach, w mediach społecznościowych. Google wyraźnie zakazuje dodawania słów kluczowych do nazwy — „Mechanik Warszawa Kowalski" zamiast „Auto Serwis Kowalski" to naruszenie zasad. Zrób to, a ryzykujesz zawieszenie profilu. Kategoria firmy jest jednym z najważniejszych czynników trafności — Google dopasowuje profil do zapytań głównie przez kategorię. Jak ją wybrać strategicznie: <Link href="/pytania/kategoria-firmy-google-jak-wybrac">jak wybrać kategorię firmy w Google</Link>.</p>
      <p>Kategorii możesz dodać kilka — jedna główna i kilka dodatkowych. Główna jest najważniejsza rankingowo, dodatkowe poszerzają zakres zapytań przy których profil może się pojawić. Nie przesadzaj z liczbą dodatkowych kategorii — nietrafiające kategorie rozmywają sygnał trafności.</p>

      <h2>Adres i obszar obsługi — dla kogo to jest</h2>
      <p>Jeśli klienci przyjeżdżają do Twojej fizycznej lokalizacji — salon, sklep, gabinet, warsztat — wypełniasz adres. Adres musi być identyczny z tym na stronie internetowej i w każdym katalogu firm — to fundament NAP consistency. Co to znaczy i dlaczego jest krytyczne: <Link href="/pytania/nap-consistency-co-to-jest">NAP consistency — co to jest</Link>.</p>
      <p>Jeśli obsługujesz klientów u nich — hydraulik, elektryk, cateringowiec — możesz ukryć adres i zamiast niego ustawić obszar obsługi. To informuje Google i użytkowników w jakim regionie działasz. Możesz też mieć oba: adres siedziby i obszar obsługi — jeśli zarówno przyjmujesz klientów w siedzibie jak i wyjeżdżasz do nich.</p>

      <h2>Opis firmy — jedyne miejsce gdzie możesz pisać otwarcie</h2>
      <p>Opis firmy (do 750 znaków) to jedyne pole w profilu, gdzie możesz swobodnie opisać czym się zajmujesz, dla kogo, co wyróżnia Cię od konkurencji. Nie jest to pole bezpośrednio rankingowe w rozumieniu algorytmu, ale Google parsuje jego treść i bierze pod uwagę przy dopasowywaniu do zapytań. Napisz opis z perspektywy klienta — jakie problemy rozwiązujesz, a nie czym się zajmujesz. Jak napisać opis który działa: <Link href="/pytania/opis-firmy-w-wizytowce-google-jak-napisac">jak napisać opis firmy w wizytówce Google</Link>.</p>

      <h2>Godziny otwarcia — i ich mniej oczywiste warianty</h2>
      <p>Godziny otwarcia to pole, które bezpośrednio wpływa na zachowanie klientów. Nieaktualne godziny to jeden z najczęstszych powodów negatywnych opinii od sfrustrowanych klientów, którzy pojechali gdy firma była zamknięta. Uzupełnij godziny dla każdego dnia tygodnia, zaznacz dni wolne. Pamiętaj o godzinach specjalnych na święta — możesz je ustawić z wyprzedzeniem dla całego roku. Szczegółowy przewodnik: <Link href="/pytania/godziny-otwarcia-wizytowka-google-jak-ustawic">jak ustawić godziny otwarcia w wizytówce Google</Link>.</p>

      <h2>Zdjęcia — co uploadować i w jakiej kolejności</h2>
      <p>Profile ze zdjęciami dostają znacznie więcej kliknięć niż profile bez nich — to potwierdzone danymi Google. Minimalne wymaganie: logo, zdjęcie okładki, kilka zdjęć wnętrza lub miejsca pracy. Optymalnie: zdjęcia zespołu, realizacji, produktów lub usług, otoczenia budynku (żeby klienci mogli Cię znaleźć fizycznie). Zdjęcia powinny być realne — nie stockowe. Jak zdjęcia wpływają na pozycję i klikalność: <Link href="/pytania/zdjecia-w-wizytowce-google-jaki-wplyw-na-pozycje">zdjęcia w wizytówce Google — jaki wpływ na pozycję</Link>.</p>

      <InfoBox>
        <strong>Usługi i produkty:</strong> sekcja usług jest często pomijana, a ma bezpośredni wpływ na trafność profilu. Każda dodana usługa z opisem rozszerza zakres fraz, przy których profil może się pojawić. Mechanik, który wpisze: wymiana opon, serwis klimatyzacji, geometria kół — pojawia się przy każdym z tych zapytań osobno. Jak dodać usługi i produkty: <Link href="/pytania/produkty-i-uslugi-w-wizytowce-google-jak-dodac">jak dodać produkty i usługi w wizytówce Google</Link>.
      </InfoBox>

      <h2>Atrybuty — szczegóły, które konwertują</h2>
      <p>Atrybuty to cechy firmy: dostępność dla osób z niepełnosprawnościami, WiFi, parking, akceptowane formy płatności, obsługa po angielsku i wiele innych. Google wyświetla je prominentnie w profilu i klienci aktywnie filtrują wyniki przez atrybuty. Uzupełniony zestaw atrybutów adekwatnych do Twojego biznesu to darmowy sposób na wyróżnienie się w Local Pack. Przewodnik po atrybutach: <Link href="/pytania/atrybut-firmy-google-co-wybrac">atrybuty firmy Google — co wybrać</Link>.</p>
    </div>
  );
}
