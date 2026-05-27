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

export default function JakZweryfikowacFirmeWGooglePoczta() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Weryfikacja wizytówki Google pocztą — czyli wysyłka kartki z kodem na adres firmy — przez lata była jedyną dostępną metodą. Dziś w Polsce jest to opcja rzadko oferowana nowym profilom. Google zastąpiło ją szybszymi metodami: weryfikacją wideo, telefoniczną i przez Search Console. Ten artykuł wyjaśnia dlaczego tak się stało i co zrobić, jeśli mimo wszystko ta opcja Ci się pojawi.
      </p>

      <h2>Dlaczego weryfikacja pocztą praktycznie zniknęła?</h2>
      <p>Przez wiele lat karta pocztowa z kodem była standardem — Google wysyłał ją na adres firmy, właściciel wpisywał kod i profil stawał się aktywny. Brzmi prosto, ale ten system miał jedną poważną słabość: kod trafiał na adres fizyczny, co nie zapobiegało tworzeniu fałszywych profili dla nieistniejących lokali. Ktoś mógł wynająć skrzynkę pocztową albo podać adres budynku bez jakiegokolwiek związku z działalnością.</p>
      <p>Google stopniowo wdrażał bardziej rygorystyczne metody — najpierw weryfikację telefoniczną, potem przez Search Console, a od 2023 roku weryfikację nagraniem wideo jako domyślną dla wielu kategorii. Wideo jest znacznie trudniejsze do sfałszowania, bo wymaga nagrania fizycznego miejsca, oznakowania firmy i dokumentu potwierdzającego własność. Efekt: liczba fałszywych profili spadła, ale tradycyjna kartka pocztowa zniknęła z listy opcji dla większości nowych firm.</p>

      <InfoBox>
        <strong>Stan na 2026 rok:</strong> weryfikacja pocztą jest dostępna w Polsce sporadycznie — zazwyczaj jako opcja ostatniej szansy jeśli inne metody zawiodą, albo dla firm w określonych kategoriach na rynkach, gdzie Google nie ma innych możliwości weryfikacji. Jeśli ta opcja pojawi się w Twoim panelu, to znaczy że Google zdecydował, że jest odpowiednia dla Twojego profilu. Skorzystaj z niej, choć czekaj na dostawę dłużej niż kiedyś.
      </InfoBox>

      <h2>Jeśli opcja pocztowa się pojawi — jak to działa?</h2>
      <p>Proces jest prosty. W panelu wybierasz opcję weryfikacji pocztą, Google generuje kartę pocztową zaadresowaną na podany adres firmy i wysyła ją w ciągu 1–3 dni roboczych. Na terenie Polski kartka dociera zazwyczaj w ciągu 5 do 14 dni roboczych, choć zdarzają się przypadki dłuższego oczekiwania. Na kartce widnieje pięciocyfrowy kod, który wpisujesz w panelu zarządzania — w sekcji „Zweryfikuj profil".</p>
      <p>Ważne: w trakcie oczekiwania na kartę nie zmieniaj adresu firmy w profilu. Jeśli to zrobisz, Google anuluje wysłaną kartę i wyśle nową na nowy adres — zaczynasz oczekiwanie od zera. Profil możesz normalnie uzupełniać podczas oczekiwania, ale nie będzie publiczny dopóki nie wpiszesz kodu. Kod jest ważny przez 30 dni od wysyłki — jeśli go nie wpiszesz w tym czasie, musisz poprosić o nową kartę.</p>

      <h2>Kartka nie dotarła — co robić?</h2>
      <p>Po upływie 14 dni roboczych bez kartki możesz w panelu kliknąć „Wyślij ponownie". Zanim to zrobisz, upewnij się że adres w profilu jest w 100% prawidłowy — numer budynku, mieszkania czy lokalu, kod pocztowy. Nawet drobna literówka może spowodować, że kartka trafi do sąsiada albo wróci do Google bez doręczenia. Jeśli po dwóch próbach kartka nadal nie dochodzi, Google ma formularz pomocy gdzie można poprosić o rozpatrzenie sprawy ręcznie.</p>

      <h2>Czym zastąpić weryfikację pocztą jeśli jej nie masz?</h2>
      <p>Jeśli zakładasz nowy profil i opcja pocztowa się nie pojawia, sprawdź najpierw czy Twoja strona internetowa jest zweryfikowana w Google Search Console tym samym adresem email. Jeśli tak — weryfikacja przez Search Console jest natychmiastowa. Jeśli nie — przygotuj się na weryfikację wideo, czyli nagranie pokazujące Twoje miejsce działalności. Wszystkie dostępne metody opisujemy w artykule <Link href="/pytania/google-business-profile-weryfikacja-firmy">Google Business Profile — weryfikacja firmy</Link>.</p>
      <p>Sam fakt weryfikacji to dopiero początek drogi. Profil po weryfikacji warto skonfigurować kompleksowo — od kategorii przez opis po listę usług. Jak to zrobić krok po kroku: <Link href="/pytania/profil-firmy-w-google-jak-skonfigurowac">profil firmy w Google — jak skonfigurować</Link>.</p>
    </div>
  );
}
