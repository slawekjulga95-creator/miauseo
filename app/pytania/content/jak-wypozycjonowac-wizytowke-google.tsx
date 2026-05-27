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

export default function JakWypozycjonowacWizytowkeGoogle() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Pozycjonowanie wizytówki Google to nie jednorazowe działanie — to proces, który trwa i wymaga regularnej pracy. Firmy, które to rozumieją i konsekwentnie nad profilem pracują, regularnie wyprzedzają konkurencję mającą lepszą lokalizację, większy budżet i dłuższą historię. W tym artykule opisujemy jak ten proces wygląda od początku do końca.
      </p>

      <h2>Trzy filary widoczności w Google Maps</h2>
      <p>Google ocenia lokalne profile według trzech głównych kategorii: <strong>relevance</strong> (trafność — jak bardzo profil pasuje do zapytania), <strong>distance</strong> (odległość — jak daleko firma jest od osoby szukającej) i <strong>prominence</strong> (wyróżnienie — jak znana i wiarygodna jest firma w internecie). Pozycjonowanie w praktyce oznacza pracę nad pierwszym i trzecim filarem — odległości fizycznej nie zmienisz, ale trafność i wyróżnienie możesz budować.</p>
      <p>Trafność buduje się przez precyzyjny dobór kategorii, uzupełnienie wszystkich sekcji profilu, dodanie usług z opisami i słowami kluczowymi oraz przez aktywność postami i odpowiedziami. Wyróżnienie buduje się przez opinie, cytowania lokalne, linki do profilu i obecność firmy na zewnętrznych stronach. Każdy z tych elementów osobno ma ograniczony efekt — razem tworzą sygnał, który Google potrafi odróżnić od profilu nieaktywnego i pustego.</p>

      <Img alt="Wykres pozycji wizytówki Google w wynikach Maps przed i po optymalizacji – wzrost z pozycji poza top 10 do top 3" caption="Efekty pozycjonowania wizytówki są mierzalne – pozycja, wyświetlenia i kliknięcia rosną stopniowo przez pierwsze miesiące" />

      <h2>Od czego zacząć — audyt istniejącego profilu</h2>
      <p>Zanim zaczniesz cokolwiek optymalizować, zrób przegląd tego co już masz. Sprawdź czy kategoria główna jest precyzyjna i czy odpowiada temu czym faktycznie się zajmujesz. Sprawdź czy nazwa, adres i numer telefonu są identyczne z tymi na Twojej stronie internetowej i w innych katalogach — to fundament, bez którego reszta działań działa z połową efektu. Sprawdź ile masz opinii i jak dawno ostatnia była odpowiedź właściciela. Sprawdź czy masz zdjęcia i czy są aktualne. Ten prosty przegląd zazwyczaj ujawnia kilka oczywistych luk, które można wypełnić w ciągu jednego dnia. Jak działają czynniki rankingowe szczegółowo tłumaczymy w artykule <Link href="/pytania/czynniki-rankingu-wizytowki-google">czynniki rankingu wizytówki Google</Link>.</p>

      <h2>Opinie — najsilniejszy sygnał rankingowy</h2>
      <p>Żaden inny element profilu nie ma tak silnego wpływu na pozycję jak opinie. Google bierze pod uwagę ich liczbę, średnią ocenę, częstotliwość pojawiania się nowych i to czy właściciel na nie odpowiada. Firma z trzydziestoma opiniami ze średnią 4,7 i regularnymi odpowiedziami właściciela będzie prawie zawsze wyżej niż firma z pięcioma opiniami 5,0 i brakiem jakiejkolwiek aktywności. Strategia zbierania opinii powinna być elementem codziennej obsługi klienta, a nie jednorazową kampanią. Jak to zrobić bez naruszania zasad Google opisujemy w artykule <Link href="/pytania/jak-zdobyc-wiecej-opinii-google">jak zdobyć więcej opinii w Google</Link>.</p>

      <h2>Cytowania lokalne — obecność firmy poza profilem</h2>
      <p>Google ocenia wiarygodność firmy nie tylko na podstawie samego profilu, ale też na podstawie tego jak firma jest widoczna w internecie poza nim. Każde miejsce, gdzie pojawia się Twoja nazwa, adres i telefon — katalog branżowy, portal lokalny, strona izby handlowej, serwis z recenzjami — to tzw. cytowanie lokalne. Im więcej spójnych cytowań, tym silniejszy sygnał że firma naprawdę istnieje i działa. Kluczowe jest słowo „spójnych" — rozbieżności w danych działają odwrotnie. Jak budować cytowania krok po kroku: <Link href="/pytania/cytowania-lokalne-seo-jak-budowac">cytowania lokalne SEO — jak budować</Link>.</p>

      <InfoBox>
        Pozycjonowanie wizytówki Google przynosi wymierne efekty, ale wymaga czasu. Pierwsze wyraźne zmiany widać zazwyczaj po 2–3 miesiącach regularnej pracy. Efekty budują się przez kolejne miesiące — profil, nad którym pracujesz rok, jest znacznie silniejszy niż ten, który optymalizowałeś przez miesiąc.
      </InfoBox>

      <h2>Aktywność właściciela — niedoceniany sygnał</h2>
      <p>Google obserwuje czy właściciel jest aktywny na profilu. Regularne dodawanie zdjęć, odpowiadanie na opinie w ciągu kilku dni, publikowanie postów z aktualnościami — to wszystko sygnały, że profil jest żywy i aktualny. Profile porzucone po weryfikacji stopniowo tracą pozycję na rzecz aktywnie zarządzanych konkurentów, nawet jeśli kiedyś miały lepszą historię. Jak zwiększyć zasięg przez aktywność opisujemy w artykule <Link href="/pytania/jak-zwiekszyc-zasieg-wizytowki-google">jak zwiększyć zasięg wizytówki Google</Link>.</p>

      <h2>Kiedy warto zlecić pozycjonowanie specjaliście?</h2>
      <p>Samodzielne pozycjonowanie wizytówki jest możliwe — wszystkie narzędzia są bezpłatne, wiedza jest dostępna. Problem w tym że wymaga regularności i czasu, który większość właścicieli firm woli poświęcić na prowadzenie biznesu. Jeśli Twoja firma działa na rynku z realną konkurencją w Google Maps i chcesz pojawiać się w top 3, warto rozważyć profesjonalne wsparcie. Sprawdź naszą ofertę <Link href="/uslugi/wizytowka-google">pozycjonowania wizytówki Google</Link> i dowiedz się jak wygląda współpraca.</p>
    </div>
  );
}
