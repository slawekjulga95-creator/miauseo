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

export default function JakUsunacWizytowkeGoogle() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Zanim usuniesz wizytówkę Google, warto zadać sobie jedno pytanie: czy na pewno o to Ci chodzi? W większości sytuacji, w których właściciele chcą „usunąć" profil, lepszym rozwiązaniem jest jego modyfikacja lub oznaczenie jako zamknięty — bo usunięcie ma konsekwencje, których nie da się łatwo cofnąć.
      </p>

      <h2>Kiedy usunięcie wizytówki ma sens, a kiedy nie?</h2>
      <p>Są sytuacje, w których usunięcie profilu jest właściwą decyzją: firma definitywnie zakończyła działalność i nie ma żadnego następcy, przeprowadzasz się w inne miejsce i nie chcesz żeby stary profil wprowadzał klientów w błąd (choć wtedy lepiej zaktualizować adres), albo profil przejął ktoś nieuprawniony i nie możesz odzyskać dostępu. To są uzasadnione przypadki.</p>
      <p>Z drugiej strony — wiele osób chce usunąć profil z powodów, które da się rozwiązać inaczej. Negatywne opinie nie są powodem do usunięcia — opinie zostaną powiązane z nowym profilem jeśli założysz go ponownie pod tym samym adresem. Tymczasowe zamknięcie firmy nie wymaga usunięcia — wystarczy oznaczyć profil jako tymczasowo zamknięty lub zaktualizować godziny. Zmiana lokalizacji nie wymaga usunięcia — zmieniasz adres. Zmiana nazwy firmy też nie — edytujesz profil.</p>

      <InfoBox>
        <strong>Ważne:</strong> profil usuniętej firmy może nadal pojawiać się w Google przez pewien czas po usunięciu. Google nie kasuje danych natychmiastowo — cache wyszukiwarki aktualizuje się stopniowo. Jeśli zależy Ci na szybkim zniknięciu z wyników, lepsze może być oznaczenie profilu jako „Firma trwale zamknięta".
      </InfoBox>

      <h2>Jak oznaczenie jako zamknięta różni się od usunięcia?</h2>
      <p>Oznaczenie profilu jako trwale zamknięty sprawia, że Google wyświetla informację „Trwale zamknięte" obok nazwy firmy w wynikach. Profil nadal istnieje w bazie Google, ale jest wyraźnie oznaczony jako nieaktywny. Klienci widzą że firma nie działa, ale historyczne informacje, zdjęcia i opinie pozostają. To bardziej eleganckie rozwiązanie niż nagłe zniknięcie z map, szczególnie jeśli firma miała lojalną bazę klientów. Możesz też oznaczyć profil jako tymczasowo zamknięty — wtedy po jakimś czasie możesz go reaktywować bez utraty historii.</p>

      <h2>Jak usunąć profil firmy — procedura krok po kroku</h2>
      <p>Zaloguj się na business.google.com i wybierz profil, który chcesz usunąć. Przejdź do ustawień profilu (ikona koła zębatego lub menu z trzema kropkami). Znajdź opcję „Usuń profil firmy" lub „Usuń konto". Google może poprosić o potwierdzenie i wyjaśnienie powodu usunięcia. Po zatwierdzeniu profil trafia do kolejki usunięcia — może to potrwać kilka dni zanim zniknie z widocznych wyników.</p>
      <p>Jeśli zarządzasz wieloma profilami, upewnij się że wybierasz właściwy. Usunięcie jest trudne do cofnięcia — Google nie oferuje prostego przycisku „przywróć". Możesz próbować reaktywować profil przez formularz pomocy, ale nie ma gwarancji że się to uda i że dane zostaną zachowane.</p>

      <h2>Jak usunąć profil, który należy do kogoś innego?</h2>
      <p>Jeśli w Google Maps widzisz nieaktualny lub błędny profil firmy, który nie należy do Ciebie i nie możesz się z jego właścicielem skontaktować, możesz zgłosić go do Google jako nieistniejący lub błędny. W Google Maps kliknij na profil, wybierz „Zasugeruj zmianę" i zaznacz „Miejsce nie istnieje". Google weryfikuje takie zgłoszenia ręcznie — może to potrwać kilka tygodni.</p>
      <p>Jeśli problem dotyczy duplikatu Twojego własnego profilu, który nie jest przez Ciebie zarządzany, polecamy lekturę artykułu <Link href="/pytania/duplikaty-wizytowek-google-jak-usunac">duplikaty wizytówek Google — jak usunąć</Link>.</p>

      <h2>Po usunięciu — co jeśli zmienisz zdanie?</h2>
      <p>Reaktywacja usuniętego profilu jest możliwa, ale nie jest prosta. Musisz założyć nowy profil od zera — co oznacza nową weryfikację — i liczyć się z tym, że historyczne opinie mogą nie zostać odzyskane. Google łączy czasem nowy profil ze starymi danymi jeśli adres i nazwa są identyczne, ale nie jest to gwarantowane. Dlatego przed usunięciem warto dokładnie przemyśleć czy nie wystarczy zmiana statusu lub modyfikacja danych. Jak edytować aktywny profil tłumaczymy w artykule <Link href="/pytania/jak-edytowac-wizytowke-google">jak edytować wizytówkę Google</Link>.</p>
    </div>
  );
}
