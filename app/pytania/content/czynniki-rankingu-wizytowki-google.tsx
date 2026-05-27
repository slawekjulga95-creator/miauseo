import Link from "next/link";

function Img({ alt, caption }: { alt: string; caption: string }) {
  return (
    <figure className="my-8" role="img" aria-label={alt}>
      <div className="rounded-2xl bg-zinc-50 border border-border h-56 flex items-center justify-center">
        <div className="text-center px-8">
          <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-3">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          </div>
          <p className="text-zinc-500 text-sm font-medium">{alt}</p>
        </div>
      </div>
      {caption && <figcaption className="text-center text-xs text-zinc-400 mt-2 italic">{caption}</figcaption>}
    </figure>
  );
}

export default function CzynnikiRankinguWizytowkiGoogle() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Google nigdy nie opublikował pełnej listy czynników rankingowych dla Google Maps. To co wiemy, pochodzi z kombinacji oficjalnej dokumentacji, niezależnych badań i wieloletnich obserwacji specjalistów local SEO na całym świecie. Poniżej zebraliśmy te, które mają największy udokumentowany wpływ — bez spekulacji, tylko potwierdzone mechanizmy.
      </p>

      <h2>Trafność, odległość, wyróżnienie — oficjalny podział Google</h2>
      <p>Google oficjalnie informuje, że wyniki lokalne opierają się na trzech głównych czynnikach. Trafność (relevance) to stopień dopasowania profilu do zapytania — im bardziej profil opisuje dokładnie to czego szuka użytkownik, tym wyżej. Odległość (distance) to fizyczna bliskość firmy od lokalizacji szukającego — im bliżej, tym lepiej, choć nie jest to jedyny czynnik. Wyróżnienie (prominence) to coś w rodzaju reputacji online — jak znana i ceniona jest firma zarówno w Google, jak i poza nim.</p>
      <p>Ten podział jest uproszczeniem — w praktyce każda z tych trzech kategorii składa się z dziesiątek sygnałów. Trafność to nie tylko kategoria firmy, ale też treść opisu, słowa kluczowe w usługach, aktywność postami. Wyróżnienie to nie tylko opinie, ale też cytowania lokalne, linki do strony i historia profilu.</p>

      <Img alt="Schemat trzech filarów rankingu lokalnego Google – trafność, odległość i wyróżnienie jako trzy wektory decydujące o pozycji" caption="Google oficjalnie potwierdza trzy filary rankingu lokalnego – w praktyce każdy z nich składa się z wielu mierzalnych sygnałów" />

      <h2>Sygnały profilu — co Google czyta z Twojego konta</h2>
      <p>Kategoria główna to jeden z najsilniejszych sygnałów trafności. Google bierze ją pod uwagę ustalając przy jakich frazach w ogóle rozważyć Twój profil. Błędna lub zbyt ogólna kategoria to jak szyldarc z nieczytelnym napisem — klienci przechodzą obok. Kategorie dodatkowe rozszerzają zasięg, ale mają mniejszy wpływ niż główna. Jak wybrać najlepszą kategorię: <Link href="/pytania/kategoria-firmy-google-jak-wybrac">kategoria firmy Google — jak wybrać</Link>.</p>
      <p>Opis firmy, treść sekcji usług i produktów, odpowiedzi na opinie — to wszystko tekst, który Google analizuje. Naturalnie wplecione słowa kluczowe opisujące usługi i lokalizację wzmacniają trafność profilu dla konkretnych zapytań. Gdzie je umieszczać i jak — opisujemy w artykule <Link href="/pytania/slowa-kluczowe-w-wizytowce-google-gdzie-umieszczac">słowa kluczowe w wizytówce Google — gdzie umieszczać</Link>.</p>

      <h2>Sygnały opinii — liczba, ocena i aktywność właściciela</h2>
      <p>Opinie klientów są prawdopodobnie najsilniejszym pojedynczym sygnałem wyróżnienia. Google bierze pod uwagę łączną liczbę opinii, średnią ocenę, rozkład ocen (czy są tylko piątki czy różnorodne), częstotliwość nowych opinii i to czy właściciel odpowiada. Profil z 80 opiniami ze średnią 4,4, gdzie właściciel odpowiada na każdą w ciągu dwóch dni, zazwyczaj jest wyżej niż profil z 40 opiniami 5,0 i zerową aktywnością właściciela. Jak zbudować systematyczny napływ opinii: <Link href="/pytania/jak-zdobyc-wiecej-opinii-google">jak zdobyć więcej opinii w Google</Link>.</p>

      <h2>Sygnały zewnętrzne — cytowania i linki</h2>
      <p>Poza samym profilem Google śledzi ile razy i gdzie Twoja firma jest wymieniana w internecie. Katalogi branżowe, portale lokalne, serwisy z recenzjami, strony izb handlowych — każde spójne wymienienie nazwy, adresu i telefonu (NAP) wzmacnia sygnał wyróżnienia. Niespojna NAP — różne formy nazwy, stary numer telefonu w katalogach, różne adresy — działa odwrotnie. Jak działa NAP i dlaczego jest krytyczna: <Link href="/pytania/nap-consistency-co-to-jest">NAP consistency — co to jest</Link>. Jak budować cytowania: <Link href="/pytania/cytowania-lokalne-seo-jak-budowac">cytowania lokalne SEO — jak budować</Link>.</p>

      <h2>Sygnały behawioralne — co robią użytkownicy z Twoim profilem</h2>
      <p>Google obserwuje jak użytkownicy wchodzą w interakcję z profilem. Kliknięcia w numer telefonu, kliknięcia „Wyznacz trasę", wejścia na stronę internetową, czas spędzony na przeglądaniu zdjęć — to wszystko sygnały, że profil jest dla użytkowników atrakcyjny i relevantny. Profile, które regularnie generują te interakcje, dostają premię w rankingu. Dlatego uzupełnienie profilu zdjęciami i atrakcyjnym opisem nie tylko poprawia konwersję — pośrednio wpływa też na pozycję.</p>

      <h2>Sygnały strony internetowej — jak www wspiera Maps</h2>
      <p>Strona internetowa, choć nie jest obowiązkowa do działania w Maps, dostarcza Google dodatkowych sygnałów wiarygodności. Spójność adresu i telefonu między profilem a stroną, obecność nazwy miasta i usług w treści strony, wzmianki o lokalizacji w metadanych — to wszystko wzmacnia sygnały lokalne. Firma ze stroną zindeksowaną w Search Console i podpiętą do profilu dostaje dodatkowy punkt wiarygodności. Jak strona wpływa na pozycję wizytówki: <Link href="/pytania/wizytowka-google-a-pozycja-w-wyszukiwarce">wizytówka Google a pozycja w wyszukiwarce</Link>. Jeśli chcesz przełożyć tę wiedzę na praktykę — sprawdź naszą usługę <Link href="/uslugi/wizytowka-google">pozycjonowania wizytówki Google</Link>.</p>
    </div>
  );
}
