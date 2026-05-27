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

export default function JakSprawdzicStatystykiWizytowkiGoogle() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Google Business Profile zbiera dane o tym jak klienci znajdują i wchodzą w interakcję z Twoim profilem. Te dane — dostępne bezpłatnie w panelu — pozwalają ocenić czy działania optymalizacyjne przynoszą efekty i które elementy profilu generują największy ruch. Wiedzieć co działa to podstawa świadomego SEO.
      </p>

      <h2>Gdzie znaleźć statystyki profilu</h2>
      <p>Statystyki Google Business Profile są dostępne w panelu zarządzania. Po zalogowaniu wyszukaj nazwę firmy w Google — jako właściciel zobaczysz panel zarządzania profilem z przyciskami i skróconym widokiem danych. Kliknij „Wyświetl statystyki" lub przejdź do pełnego panelu Business Profile i wybierz zakładkę „Wyniki" lub „Statystyki" w lewym menu. Dane są agregowane zazwyczaj za ostatnie 28 dni lub 6 miesięcy — możesz przełączać zakresy dat.</p>

      <h2>Jakie dane pokazuje panel i co z nich odczytać</h2>
      <p>Wyświetlenia w wyszukiwarce i mapach — ile razy profil pojawił się w wynikach wyszukiwania i w Google Maps. To miernik zasięgu. Jeśli wyświetlenia rosną po działaniach optymalizacyjnych — np. po dodaniu nowych usług lub opiniach — widać że optymalizacja działa. Jeśli wyświetlenia stoją w miejscu przez miesiące, to sygnał że profil potrzebuje intensywniejszej pracy.</p>
      <p>Interakcje — kliknięcia w numer telefonu, kliknięcia w stronę internetową, prośby o wskazówki dojazdu, wiadomości wysłane przez profil. To są faktyczne leady wygenerowane przez Google Maps. Kliknięcia w telefon są dla większości firm lokalnych ważniejszym wskaźnikiem niż same wyświetlenia — bo oznaczają klienta, który był gotowy zadzwonić. Wzrost liczby połączeń po optymalizacji profilu to jeden z najwyraźniejszych dowodów skuteczności działań SEO.</p>
      <p>Zapytania użytkowników — panel pokazuje jakie frazy wpisywali użytkownicy kiedy trafiali na Twój profil. To bezcenna informacja o tym jak klienci faktycznie szukają Twojej firmy lub usługi. Jeśli widzisz że dużo osób trafia przez frazę „naprawa butów ekspresowo" — a Ty oferujesz ekspresową naprawę — to sygnał żeby uwydatnić tę usługę w profilu.</p>

      <InfoBox>
        <strong>Wyświetlenia bezpośrednie vs. odkrywcze:</strong> panel rozróżnia dwa źródła wyświetleń. Bezpośrednie — ktoś wpisał konkretną nazwę Twojej firmy. Odkrywcze — ktoś szukał ogólnej frazy (np. „mechanik Poznań") i Twój profil pojawił się w wynikach. Wyświetlenia odkrywcze są cenniejsze z perspektywy SEO, bo pokazują że docierasz do nowych klientów którzy Cię jeszcze nie znali.
      </InfoBox>

      <h2>Jak używać statystyk do podejmowania decyzji</h2>
      <p>Statystyki profilu mają sens gdy patrzysz na trendy, nie na pojedyncze tygodnie. Porównaj obecny miesiąc z poprzednim, lub ten sam miesiąc rok temu. Wzrost liczby interakcji przy stałych lub rosnących wyświetleniach to dobry sygnał — oznacza że profil nie tylko jest widoczny ale też skłania do działania. Spadek wyświetleń przy stałych interakcjach może oznaczać że stałych klientów jest więcej, ale nowych mniej — warto sprawdzić pozycję w Local Pack dla kluczowych fraz. Jak sprawdzić pozycję i co na nią wpływa: <Link href="/pytania/czynniki-rankingu-wizytowki-google">czynniki rankingu wizytówki Google</Link>.</p>
      <p>Dane o zapytaniach użytkowników powinny bezpośrednio informować co dodajesz do profilu — usługi, posty, opis. Klienci mówią Ci przez wyszukiwarkę co ich interesuje. Słuchaj ich i odzwierciedlaj to w treści profilu. Cały cykl optymalizacji: <Link href="/pytania/jak-wypozycjonowac-wizytowke-google">jak wypozycjonować wizytówkę Google</Link>.</p>
    </div>
  );
}
