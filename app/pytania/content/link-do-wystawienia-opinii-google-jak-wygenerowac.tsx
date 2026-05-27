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

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="my-5 flex gap-4 not-prose">
      <div className="shrink-0 w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white text-sm font-bold">
        {n}
      </div>
      <div className="pt-1 text-zinc-700 leading-relaxed text-sm">{children}</div>
    </div>
  );
}

export default function LinkDoWystawieniaOpinieGoogleJakWygenerowac() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Bezpośredni link do formularza opinii w Google to jeden z najprostszych sposób na zwiększenie liczby recenzji. Zamiast prosić klientów żeby „znaleźli firmę w Google i zostawili opinię", dajesz im link, który od razu otwiera gotowy formularz. Mniej kroków — więcej recenzji.
      </p>

      <h2>Skąd wziąć link do opinii — dwie drogi</h2>
      <p>Pierwsza i najszybsza metoda to bezpośredni link z panelu Google Business Profile. Po zalogowaniu wejdź do panelu zarządzania profilem — możesz to zrobić przez wyszukanie nazwy swojej firmy w Google (jeśli jesteś zalogowany na konto właściciela, po prawej stronie pojawi się panel zarządzania). W menu bocznym lub w widoku głównym profilu znajdziesz sekcję „Prośba o opinie" lub „Zdobądź więcej recenzji". Kliknij przycisk i Google wygeneruje gotowy, skrócony link.</p>
      <p>Druga metoda — ręczna — działa nawet jeśli nie masz dostępu do panelu w danej chwili. Wejdź na Google Maps, wyszukaj swoją firmę, otwórz jej profil i skopiuj adres URL strony. Następnie zamień fragment URL na format, który otwiera bezpośrednio sekcję recenzji. Metoda z panelu jest wygodniejsza i daje od razu gotowy, czytelny link.</p>

      <h2>Krok po kroku — link przez panel Google Business Profile</h2>

      <Step n={1}>Zaloguj się na swoje konto Google, które jest właścicielem profilu firmy.</Step>
      <Step n={2}>Wyszukaj w Google nazwę swojej firmy. W prawym górnym rogu wyników pojawi się panel zarządzania profilem z przyciskami „Edytuj profil", „Wyświetl w Google Maps" itp.</Step>
      <Step n={3}>Kliknij opcję „Prośba o opinie" lub znajdź ją w menu „Więcej" — ikona z trzema kropkami. W zależności od wersji interfejsu może być też widoczna bezpośrednio na ekranie głównym jako „Zdobądź więcej recenzji".</Step>
      <Step n={4}>Google wyświetli okienko z gotowym linkiem do skopiowania. Skopiuj go i zapisz — to jest Twój bezpośredni link do formularza wystawienia opinii.</Step>
      <Step n={5}>Przetestuj link w trybie incognito przeglądarki lub na innym urządzeniu, żeby upewnić się że otwiera formularz recenzji bez konieczności szukania firmy.</Step>

      <InfoBox>
        <strong>Skróć link przed wysyłką:</strong> link wygenerowany przez Google jest często długi i nieestetyczny przy wysyłaniu SMS-em. Użyj darmowych skracarek linków (bit.ly, tinyurl.com) żeby skrócić go do czytelnego formatu. Skrócony link wygląda lepiej i jest łatwiejszy do kliknięcia na urządzeniu mobilnym.
      </InfoBox>

      <h2>Gdzie używać wygenerowanego linku</h2>
      <p>Kiedy masz link, możesz go umieścić w wielu miejscach jednocześnie. W SMS-ach wysyłanych klientom po zakończeniu usługi, w mailach podsumowujących współpracę lub zlecenie, w stopce e-maila, na wizytówce papierowej (jako QR kod), na stronie internetowej w sekcji „Opinie" lub „Kontakt", na paragonie lub potwierdzeniu zamówienia, w bio lub opisie profilu w mediach społecznościowych.</p>
      <p>Najtańsze i najskuteczniejsze zastosowanie to QR kod wydrukowany na małej kartce lub naklejce, umieszczonej przy kasie lub na ladzie. Klient widzi „Jeśli byłeś zadowolony — zeskanuj i wystaw nam opinię" i może to zrobić od razu, bez czekania na wiadomość. Jak prosić klientów skutecznie przez różne kanały: <Link href="/pytania/jak-prosic-klientow-o-opinie-google">jak prosić klientów o opinie w Google</Link>.</p>

      <h2>Jeden link dla wielu lokalizacji</h2>
      <p>Jeśli firma ma kilka oddziałów z oddzielnymi profilami Google, każdy profil ma swój własny link do opinii. Nie mieszaj linków — klient, który odwiedził oddział w Krakowie i kliknie link do profilu warszawskiego, może się zdezorientować lub zostawić opinię przy złym profilu. Generuj oddzielny link dla każdej lokalizacji i przypisuj je do odpowiednich kanałów komunikacji z klientami tego konkretnego oddziału. Zarządzanie wieloma lokalizacjami w Google: <Link href="/pytania/kilka-lokalizacji-firmy-google-jak-zarzadzac">kilka lokalizacji firmy Google — jak zarządzać</Link>.</p>
    </div>
  );
}
