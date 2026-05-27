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

export default function JakWypascWyzejWGoogleMaps() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Jeśli jesteś na pozycji 6–10 w Google Maps i chcesz wskoczyć wyżej, masz dwie opcje: albo zrobić coś czego konkurencja nie robi, albo robić to samo lepiej i konsekwentniej. W praktyce zwykle chodzi o to drugie — bo większość firm nie robi nawet podstaw dobrze.
      </p>

      <h2>Zanim zaczniesz — sprawdź co robi konkurencja</h2>
      <p>Wpisz w Google Maps frazy, na które chcesz być widoczny, i przejrzyj profile firm, które są wyżej od Ciebie. Ile mają opinii? Jak dawno była ostatnia? Czy właściciel odpowiada? Ile mają zdjęć? Czy ich sekcja usług jest uzupełniona? Ten prosty audyt konkurencji zajmuje 20 minut i zazwyczaj wskazuje dokładnie gdzie jest luka — coś, co tamte firmy robią, a Ty jeszcze nie. Zamiast zgadywać, działaj na podstawie danych.</p>

      <h2>Kategoria główna — sprawdź czy na pewno wybrałeś dobrze</h2>
      <p>Kategoria to jeden z najsilniejszych sygnałów rankingowych i jednocześnie jeden z najczęstszych błędów. Jeśli wybrałeś zbyt ogólną kategorię (np. „Sklep" zamiast „Sklep z elektroniką"), tracisz widoczność na frazy, które faktycznie przynoszą klientów. Sprawdź jaką kategorię mają firmy wyżej od Ciebie — to nierzadko wyjaśnia różnicę w pozycji. Jak wybrać precyzyjną kategorię: <Link href="/pytania/kategoria-firmy-google-jak-wybrac">kategoria firmy Google — jak wybrać</Link>.</p>

      <h2>Słowa kluczowe w profilu — gdzie je umieszczać</h2>
      <p>Google analizuje treść profilu pod kątem relevantności do zapytania. Słowa kluczowe warto umieszczać w opisie firmy, w nazwach usług i ich opisach, a także w odpowiedziach na opinie — bo Google indeksuje te treści. Nie chodzi o upychanie słów kluczowych na siłę — chodzi o naturalne opisanie tego czym się zajmujesz, używając języka, którym mówią Twoi klienci. Gdzie dokładnie umieszczać słowa kluczowe w wizytówce: <Link href="/pytania/slowa-kluczowe-w-wizytowce-google-gdzie-umieszczac">słowa kluczowe w wizytówce Google — gdzie umieszczać</Link>.</p>

      <h2>Opinie — liczby i tempo mają znaczenie</h2>
      <p>Algorytm Google nie patrzy tylko na łączną liczbę opinii. Liczy się też tempo — ile opinii pojawia się miesięcznie. Profil z pięćdziesięcioma opiniami, z których ostatnia była rok temu, może przegrywać z profilem mającym trzydzieści opinii, gdzie nowe pojawiają się regularnie co tydzień. Google traktuje to jako sygnał że firma aktywnie działa i że klienci wciąż ją odwiedzają. Jak utrzymać stały napływ opinii: <Link href="/pytania/jak-zdobyc-wiecej-opinii-google">jak zdobyć więcej opinii w Google</Link>.</p>

      <InfoBox>
        Odpowiadanie na opinie ma dwojaki efekt — po pierwsze sygnalizuje Google aktywność właściciela, po drugie jest czytane przez przyszłych klientów i wpływa na ich decyzję. Profil, który odpowiada nawet na negatywne opinie spokojnie i profesjonalnie, wzbudza więcej zaufania niż ten ignorujący komentarze — niezależnie od oceny.
      </InfoBox>

      <h2>Zdjęcia — regularność ważniejsza niż liczba</h2>
      <p>Jednorazowe wrzucenie dwudziestu zdjęć na początku i zapomnienie o nich na rok działa gorzej niż systematyczne dodawanie jednego–dwóch zdjęć co tydzień. Google rejestruje daty dodania zdjęć i traktuje regularną aktywność jako pozytywny sygnał. Jeśli dawno nic nie dodawałeś — zacznij od dziś. Nawet jedno zdjęcie tygodniowo wyraźnie poprawia aktywność profilu w oczach algorytmu.</p>

      <h2>Cytowania — cicha robota, która procentuje</h2>
      <p>Jeśli Twoja firma jest wymieniona w wiarygodnych zewnętrznych katalogach — Panorama Firm, Targeo, branżowe portale — Google traktuje to jako potwierdzenie że firma istnieje i jest rozpoznawana. Im więcej spójnych cytowań, tym silniejszy sygnał wyróżnienia. Jednocześnie rozbieżne dane w tych katalogach (inny numer telefonu, różne formy nazwy) działają jak szum informacyjny, który obniża wiarygodność. Zanim dodasz nowe cytowania, sprawdź czy istniejące są poprawne — <Link href="/pytania/nap-consistency-co-to-jest">NAP consistency</Link> to punkt startu. Jak budować cytowania od podstaw: <Link href="/pytania/cytowania-lokalne-seo-jak-budowac">cytowania lokalne SEO — jak budować</Link>.</p>

      <h2>Jak długo czekać na efekty zmian?</h2>
      <p>Zmiany w profilu są widoczne natychmiast w panelu zarządzania, ale algorytm Google Map potrzebuje czasu na przeliczenie pozycji. Zazwyczaj pierwsze efekty optymalizacji widać po 4–6 tygodniach. Jeśli działania dotyczą tylko profilu — efekty przyjdą szybciej. Jeśli zaczynasz budować cytowania i zbierać opinie od zera — licz na 3–6 miesięcy. Taki jest rytm local SEO i żadna agencja, która mówi inaczej, nie mówi prawdy. Pełna strategia pozycjonowania: <Link href="/pytania/jak-wypozycjonowac-wizytowke-google">jak wypozycjonować wizytówkę Google</Link>.</p>
    </div>
  );
}
