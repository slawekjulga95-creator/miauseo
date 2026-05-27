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

export default function JakZwiekszycZasiegWizytowkiGoogle() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Zasięg wizytówki Google to geograficzny obszar, w którym profil firmy jest widoczny w wynikach wyszukiwania. Domyślnie algorytm Google pokazuje firmę głównie osobom znajdującym się blisko jej fizycznej lokalizacji. Ale „blisko" to relatywne pojęcie — i można na nie wpływać. Oto jak.
      </p>

      <h2>Jak Google definiuje zasięg profilu firmy?</h2>
      <p>Zasięg wizytówki nie jest prostą stałą odległością od adresu. Google Maps używa algorytmu, który bierze pod uwagę kilka zmiennych: jak silny jest profil firmy, jak duże jest natężenie konkurencji w danym obszarze i jak daleko od firmy szuka użytkownik. W praktyce: silna wizytówka z dużą liczbą opinii może wygrywać wyniki dla użytkowników znajdującym się 10–15 km od siedziby, podczas gdy słaba wizytówka jest niewidoczna nawet dla kogoś w tej samej dzielnicy.</p>
      <p>Dla firm obsługujących klientów na ich terenie — hydraulicy, opieka domowa, dostawcy — Google pozwala ustawić obszar obsługi. Ten obszar nie zastępuje algorytmu odległości, ale informuje Google w jakim regionie firma aktywnie działa. Jak to skonfigurować: <Link href="/pytania/wizytowka-google-a-obszar-obslugi-jak-ustawic">wizytówka Google a obszar obsługi — jak ustawić</Link>.</p>

      <h2>Opinie — najszybsza droga do większego zasięgu</h2>
      <p>Im silniejszy profil, tym większy geograficzny zasięg. A jednym z najsilniejszych sygnałów siły profilu są opinie klientów. Firma z pięćdziesięcioma opiniami ze średnią 4,6 będzie pojawiać się w wynikach dla osób szukających ze znacznie większej odległości niż firma z trzema opiniami. To efekt uboczny rankingowego działania opinii — wysoka pozycja w wynikach dla konkretnego zapytania niejako „rozszerza" zasięg geograficzny profilu. Jak systematycznie budować bazę opinii: <Link href="/pytania/jak-zdobyc-wiecej-opinii-google">jak zdobyć więcej opinii w Google</Link>.</p>

      <h2>Słowa kluczowe w profilu a zasięg tematyczny</h2>
      <p>Zasięg wizytówki to nie tylko geografia — to też zakres fraz, dla których profil się pojawia. Firma, która uzupełniła sekcję usług o konkretne usługi z opisami, pojawia się przy znacznie szerszym spektrum zapytań niż firma mająca tylko nazwę i adres. Każda dodana usługa to potencjalnie nowe słowa kluczowe, przy których Google może wyświetlić profil. Hydraulik z uzupełnioną listą: wymiana kranów, usuwanie awarii, montaż baterii, czyszczenie rur — pojawia się przy każdym z tych zapytań osobno, a nie tylko przy ogólnym „hydraulik".</p>
      <p>Gdzie i jak umieszczać słowa kluczowe w profilu: <Link href="/pytania/slowa-kluczowe-w-wizytowce-google-gdzie-umieszczac">słowa kluczowe w wizytówce Google — gdzie umieszczać</Link>. Co do zasady: naturalne, precyzyjne opisy usług poszerzają zasięg tematyczny skuteczniej niż sztuczne upychanie słów kluczowych do nazwy firmy.</p>

      <InfoBox>
        <strong>Czego nie robić:</strong> dodawanie nazw miast do nazwy firmy (np. „Mechanik Warszawa Kowalski") jest niezgodne z wytycznymi Google i może skutkować zawieszeniem profilu. Zasięg geograficzny budujesz przez siłę profilu, a nie przez keyword stuffing w nazwie.
      </InfoBox>

      <h2>Posty Google — aktywność, która rozszerza zasięg</h2>
      <p>Regularne publikowanie postów w profilu to jeden z mało znanych sposobów na zwiększenie zasięgu. Google traktuje aktywność właściciela jako sygnał że profil jest żywy i aktualny. Profile aktywnie zarządzane dostają wyższy ranking — a wyższy ranking oznacza widoczność dla większego kręgu geograficznego. Post raz w tygodniu lub raz na dwa tygodnie to wystarczające minimum. Jak posty wpływają na profil: <Link href="/pytania/posty-google-my-business-jak-dzialaja">posty Google My Business — jak działają</Link>.</p>

      <h2>Kiedy zasięg nie wzrośnie mimo starań?</h2>
      <p>Jest jeden czynnik, na który nie masz wpływu: odległość fizyczna. Jeśli szukasz widoczności w mieście oddalonym o 50 km od siedziby firmy i nie masz tam żadnej fizycznej obecności — algorytm Google będzie konsekwentnie preferować firmy bliżej tego miasta. W takiej sytuacji jedynym rozwiązaniem jest otwarcie oddziału lub znalezienie partnera lokalnego. Samo SEO nie zastąpi fizycznej bliskości w lokalnym algorytmie Google. Jeśli mimo to chcesz rozszerzyć zasięg na sąsiednie miejscowości, skontaktuj się z nami przez <Link href="/kontakt">stronę kontaktową</Link> — omówimy realność takiego celu dla Twojej branży i lokalizacji.</p>
    </div>
  );
}
