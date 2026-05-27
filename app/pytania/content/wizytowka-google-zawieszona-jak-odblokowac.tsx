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

export default function WizytowkaGoogleZawieszonaJakOdblokowac() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Zawieszony profil Google to jeden z najbardziej stresujących scenariuszy dla właściciela firmy lokalnej — z dnia na dzień firma znika z Google Maps i wyników wyszukiwania. Google nie zawsze informuje dlaczego to zrobił. Ale przyczyny zawieszenia są zazwyczaj przewidywalne i — w większości przypadków — odwracalne.
      </p>

      <h2>Rodzaje zawieszenia — miękkie i twarde</h2>
      <p>Google rozróżnia dwa rodzaje zawieszenia profilu. Zawieszenie miękkie (soft suspension) oznacza, że profil nadal istnieje i można nim zarządzać, ale nie pojawia się w wynikach wyszukiwania ani Google Maps dla użytkowników. Właściciel widzi w panelu normalny dostęp, ale firma jest niewidoczna publicznie. Ten rodzaj zawieszenia jest częstszy i zwykle łatwiejszy do odwołania.</p>
      <p>Zawieszenie twarde (hard suspension) jest poważniejsze — profil zostaje całkowicie wyłączony, właściciel traci dostęp do panelu i firma jest niewidoczna publicznie. Dzieje się tak zazwyczaj po powtarzającym się naruszeniu zasad lub po poważnym naruszeniu jednorazowym. Twarde zawieszenie jest trudniejsze do odwołania i wymaga szczegółowego uzasadnienia.</p>

      <h2>Najczęstsze przyczyny zawieszenia</h2>
      <p>Google zawiesza profile z kilku konkretnych powodów. Keyword stuffing w nazwie firmy — dodanie słów kluczowych lub lokalizacji do nazwy, która nie odpowiada realnej nazwie prawnej. To jedna z najczęstszych przyczyn, bo wiele firm próbuje tej techniki i nie wie że to naruszenie zasad. Podejrzana weryfikacja — jeśli Google ma wątpliwości co do autentyczności adresu lub właściciela. Niezgodność adresu — adres w profilu nie pasuje do dokumentów rejestrowych firmy lub do fizycznej lokalizacji. Zbyt duża liczba profilów z tego samego adresu — szczególnie problem dla coworkingów, biur wirtualnych i adresów shared office. Aktywność wyglądająca jak spam — nagłe masy zmian danych, wiele profili zarządzanych przez jedno konto, podejrzane wzorce aktywności.</p>

      <InfoBox>
        <strong>Biuro wirtualne a zawieszenie:</strong> Google ma politykę zakazującą rejestracji profilu pod adresem biura wirtualnego, jeśli firma nie ma tam stałej fizycznej obecności i klientów, których obsługuje na miejscu. Wiele firm korzystających z wirtualnych adresów doświadcza zawieszenia przy pierwszej weryfikacji. Jedynym rozwiązaniem jest rejestracja pod adresem rzeczywistej działalności.
      </InfoBox>

      <h2>Jak złożyć odwołanie od zawieszenia</h2>
      <p>Jeśli profil jest zawieszony, w panelu Google Business Profile pojawi się powiadomienie z możliwością złożenia odwołania. Kliknij w formularz odwołania i przygotuj dokumenty potwierdzające autentyczność firmy: wypis z KRS lub CEIDG, fakturę za media lub czynsz na adres firmy, zdjęcia witryny lub szyldu firmy, skan licencji zawodowej jeśli dotyczy. Przesyłasz je przez formularz i czekasz na decyzję Google — czas rozpatrzenia wynosi od kilku dni do kilku tygodni.</p>
      <p>Kluczem do skutecznego odwołania jest dostarczenie maksymalnie wielu dokumentów potwierdzających że firma naprawdę istnieje pod podanym adresem. Google chce mieć pewność — daj mu tę pewność konkretnymi dowodami, nie wyjaśnieniami tekstowymi.</p>

      <h2>Co zrobić przed złożeniem odwołania</h2>
      <p>Zanim złożysz odwołanie, upewnij się że wiesz jaka była przyczyna zawieszenia i że ją usunąłeś. Jeśli zawieszenie nastąpiło przez keyword stuffing w nazwie — zmień nazwę na zgodną z zasadami przed złożeniem odwołania. Odwołanie bez usunięcia przyczyny zwykle kończy się odmową. Google zazwyczaj nie podaje dokładnej przyczyny w powiadomieniu, więc przejdź przez profil i sprawdź czy cokolwiek mogło naruszać zasady: nazwa, adres, kategoria, opis. Porównaj to z wytycznymi Google Business Profile dostępnymi publicznie w centrum pomocy.</p>
      <p>Jeśli profil jest w dobrej kondycji po odblokowaniu, zadbaj o systematyczne budowanie jego siły — opinie, aktualizacje, kompletność danych. Profil po odblokowaniu może tymczasowo wypaść z wyników — silna wizytówka wróci szybciej. Jak budować silny profil: <Link href="/pytania/jak-wypozycjonowac-wizytowke-google">jak wypozycjonować wizytówkę Google</Link>.</p>
    </div>
  );
}
