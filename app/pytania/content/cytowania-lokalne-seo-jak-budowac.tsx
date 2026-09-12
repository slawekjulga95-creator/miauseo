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

export default function CytowaniaLokalneSeoJakBudowac() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Cytowania lokalne to każde miejsce w internecie, gdzie pojawia się nazwa Twojej firmy razem z adresem i/lub numerem telefonu. Dla Google to sygnał że firma istnieje, działa i jest rozpoznawana — i ten sygnał ma realny wpływ na pozycję w Google Maps. Jak go budować, żeby faktycznie pomagał a nie szkodził?
      </p>

      <h2>Czym jest cytowanie lokalne i skąd pochodzi?</h2>
      <p>W terminologii local SEO cytowanie (citation) to wzmianka o firmie zawierająca jej dane kontaktowe — najczęściej nazwę, adres i telefon (NAP). Cytowania pojawiają się w katalogach firm, portalach branżowych, serwisach z recenzjami, lokalnych bazach danych i agregatorach informacji. Część z nich tworzysz sam, rejestrując firmę. Część tworzą automatycznie agregatory danych, które zbierają informacje z innych źródeł i replikują je w różnych bazach.</p>
      <p>Google używa cytowań jako jednego ze sposobów weryfikacji że firma naprawdę istnieje pod danym adresem. Im więcej wiarygodnych i spójnych cytowań, tym silniejszy sygnał wyróżnienia — jednego z trzech oficjalnych czynników rankingowych. Czym jest ten sygnał i jak działa w szerszym kontekście: <Link href="/pytania/czynniki-rankingu-wizytowki-google">czynniki rankingu wizytówki Google</Link>.</p>

      <Img alt="Lista cytowań firmy w narzędziu BrightLocal – nazwy katalogów, status cytowania, zgodność danych NAP i ocena jakości źródła" caption="Narzędzia do audytu cytowań pokazują gdzie firma jest wymieniona, czy dane są zgodne i jak ważne jest źródło" />

      <h2>Cytowania ze strukturą NAP kontra wzmianki</h2>
      <p>Istnieją dwa typy cytowań: strukturowane (structured) i niestrukturowane (unstructured). Strukturowane to wpisy w katalogach firm, gdzie jest dedykowane pole na adres, telefon i kategorię — Panorama Firm, Google Business Profile, Yelp, Złote Strony. Niestrukturowane to wzmianki o firmie w artykułach, postach na blogu, lokalnych serwisach informacyjnych — bez formalnego pola adresowego, ale zawierające dane firmy w treści.</p>
      <p>Oba typy mają wartość, ale strukturowane cytowania w wiarygodnych katalogach są łatwiejsze do zbudowania i mają bardziej przewidywalny wpływ na pozycję. Zanim jednak zaczniesz budować nowe cytowania, upewnij się że istniejące są spójne — bo niespójne NAP szkodzi bardziej niż brak cytowań. Więcej o tym: <Link href="/pytania/nap-consistency-co-to-jest">NAP consistency — co to jest</Link>.</p>

      <h2>Od czego zacząć budowanie cytowań?</h2>
      <p>Zacznij od tzw. core citations — podstawowych katalogów, które Google uznaje za wiarygodne i które mają duże zasięgi. W Polsce są to przede wszystkim: Panorama Firm, Targeo, Yelp, Złote Strony, Aleo, Kompass, GoWork, MojeOsiedle. Każdy z tych katalogów pozwala na bezpłatne podstawowe wpisy. Uzupełnij je identycznymi danymi — ten sam format nazwy, ten sam adres, ten sam numer telefonu — zanim przejdziesz do katalogów niszowych.</p>
      <p>Następnie szukaj cytowań branżowych. Mechanik samochodowy powinien być w bazach warsztatów, fizjoterapeuta w katalogach gabinetów zdrowia, restauracja w serwisach kulinarnych i rezerwacyjnych. Te cytowania mają dodatkowy wymiar — nie tylko potwierdzają istnienie firmy, ale też kontekstualizują ją w odpowiedniej branży, co wzmacnia trafność profilu dla branżowych zapytań.</p>

      <h2>Ile cytowań potrzebujesz?</h2>
      <p>Nie ma jednej właściwej liczby — to zależy od Twojej lokalizacji i konkurencji. W małym mieście z niską konkurencją 20–30 solidnych cytowań może wystarczyć do dominacji w wynikach lokalnych. W dużym mieście z silną konkurencją i wieloma graczami na rynku potrzeba znacznie więcej — i ważniejsza staje się jakość i autorytet źródeł niż sama liczba. Sprawdź ile cytowań mają firmy wyżej od Ciebie w wynikach — to da Ci punkt odniesienia.</p>
      <p>Masowe dodawanie do setek bezwartościowych katalogów nie pomaga i może zaszkodzić. Google ocenia jakość źródeł — wpis w zaufanym branżowym katalogu jest wart więcej niż dziesięć wpisów w anonimowych agregatorsach bez ruchu.</p>

      <h2>Jak monitorować cytowania?</h2>
      <p>Cytowania raz zbudowane nie wymagają codziennego monitorowania, ale warto raz na kwartał sprawdzić czy dane w kluczowych katalogach są aktualne — szczególnie po zmianie numeru telefonu lub adresu. Narzędzia takie jak BrightLocal, Moz Local czy Whitespark pozwalają na automatyczny audyt cytowań i pokazują gdzie dane są niezgodne z profilem głównym. Jeśli szukasz kompleksowego wsparcia w budowaniu lokalnej widoczności, sprawdź naszą ofertę <Link href="/uslugi/wizytowka-google">pozycjonowania wizytówki Google</Link>.</p>
    </div>
  );
}
