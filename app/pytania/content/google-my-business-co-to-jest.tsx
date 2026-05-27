import Link from "next/link";

function Img({ alt, caption }: { alt: string; caption: string }) {
  return (
    <figure className="my-8" role="img" aria-label={alt}>
      <div className="rounded-2xl bg-zinc-50 border border-border h-56 flex items-center justify-center">
        <div className="text-center px-8">
          <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-3">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
            </svg>
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
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <div className="text-sm text-orange-900 leading-relaxed">{children}</div>
    </div>
  );
}

export default function GoogleMyBusinessCoToJest() {
  return (
    <div className="prose-blog">

      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Google My Business to narzędzie, które przez lata funkcjonowało pod tą właśnie nazwą – dziś Google używa nazwy <strong>Profil Firmy w Google</strong> (Google Business Profile). To bezpłatna usługa, dzięki której firma lokalna może zaistnieć w wyszukiwarce Google i Google Maps. Jeśli nigdy o tym nie słyszałeś, ten artykuł wyjaśni Ci co to jest, jak działa i dlaczego każda firma lokalna powinna to mieć.
      </p>

      <h2>Skąd pochodzi nazwa Google My Business?</h2>

      <p>
        Google My Business (w Polsce funkcjonujące jako „Google Moja Firma") to nazwa, której Google używało od 2014 do 2022 roku. Przez te osiem lat pod tą marką działał panel zarządzania profilami firm lokalnych, dedykowana aplikacja mobilna i strona internetowa. W 2022 roku Google zdecydowało o rebrandingu – usługę przemianowano na <strong>Google Business Profile</strong>, czyli po polsku Profil Firmy w Google.
      </p>

      <p>
        Zmiana nazwy nie oznaczała zmiany funkcji. Wszystko czego nauczyłeś się o Google My Business nadal obowiązuje – zmieniły się wyłącznie etykiety i interfejs. Jeśli ktoś dziś pisze o „Google Moja Firma", ma na myśli dokładnie to samo co Google Business Profile. Obie nazwy są wciąż powszechnie używane, więc warto je znać.
      </p>

      <InfoBox>
        Aplikacja mobilna Google My Business została wycofana ze sklepów w 2022 roku. Zarządzanie profilem przeniosło się bezpośrednio do Google Search i Google Maps. Jeśli masz starą aplikację na telefonie – nie jest już aktualizowana. Używaj <strong>business.google.com</strong> lub zarządzaj profilem bezpośrednio przez wyszukiwarkę.
      </InfoBox>

      <h2>Czym w praktyce jest Profil Firmy w Google?</h2>

      <Img
        alt="Panel boczny wyników Google z profilem firmy – widoczna nazwa, adres, godziny, ocena gwiazdkowa, zdjęcia i przyciski akcji"
        caption="Profil firmy wyświetla się jako panel boczny w Google i jako karta w Google Maps"
      />

      <p>
        Profil Firmy w Google to zestaw informacji o Twojej firmie wyświetlany bezpośrednio w wynikach Google. Kiedy ktoś wyszukuje Twoją firmę po nazwie, po lewej lub na górze strony pojawia się karta z nazwą, adresem, godzinami otwarcia, numerem telefonu, ocenami klientów i zdjęciami. Ta karta pochodzi właśnie z Twojego profilu.
      </p>

      <p>
        Kiedy ktoś szuka usług w Twojej okolicy – „dentysta Wrocław" albo „pizza blisko mnie" – Google wyświetla lokalne wyniki w formie mapy z pinami i listy firm. Ten blok wyników nazywa się <strong>Local Pack</strong> i jest najbardziej eksponowanym miejscem w Google dla firm lokalnych. Żeby w nim się pojawić, Twoja firma musi mieć aktywny i dobrze uzupełniony profil. Jak dostać się do Local Pack opisujemy tu: <Link href="/pytania/jak-pojawic-sie-w-local-pack-google">jak pojawić się w Local Pack Google</Link>.
      </p>

      <h2>Co możesz zrobić przez Profil Firmy w Google?</h2>

      <p>
        Panel daje Ci możliwość zarządzania wszystkimi informacjami o firmie, które Google pokazuje klientom. Możesz ustawić godziny otwarcia i zmienić je przy okazji świąt, dodać lub edytować numer telefonu, adres i stronę internetową. Możesz opisać swoją firmę, wybrać kategorie, dodać listę świadczonych usług lub sprzedawanych produktów z cenami. Możesz dodawać zdjęcia – wnętrza, zewnętrza, zespołu, realizacji.
      </p>

      <p>
        Profil umożliwia też publikowanie postów – krótkich aktualizacji widocznych bezpośrednio w wynikach wyszukiwania, podobnych do postów na Facebooku. Możesz przez nie informować o promocjach, nowych usługach, wydarzeniach lub nowościach. Posty znikają po siedmiu dniach, więc wymagają regularnej aktualizacji. Jak je efektywnie wykorzystać tłumaczymy w artykule <Link href="/pytania/posty-google-my-business-jak-dzialaja">posty Google My Business – jak działają</Link>.
      </p>

      <p>
        Bardzo ważną funkcją jest zarządzanie opiniami klientów. Przez panel odpowiadasz na recenzje – zarówno pozytywne jak i negatywne. Odpowiedzi są publiczne i widoczne dla każdego kto przegląda profil. Google premiuje właścicieli aktywnie angażujących się w opinie, a klienci czytają odpowiedzi firmy zanim podejmą decyzję o kontakcie.
      </p>

      <h2>Google My Business a Google Ads – jaka różnica?</h2>

      <Img
        alt="Porównanie organicznego profilu firmy i reklamy Google Ads w wynikach wyszukiwania – oznaczenia reklama i wyniki lokalne"
        caption="Profil firmy generuje bezpłatny ruch organiczny – Google Ads to płatne reklamy wyświetlane ponad wynikami"
      />

      <p>
        To pytanie pojawia się często. Google My Business (Profil Firmy) i Google Ads to dwa zupełnie różne produkty. Profil Firmy jest <strong>bezpłatny</strong> i generuje tzw. ruch organiczny – pojawia się w wynikach wyszukiwania i na mapach bez żadnych opłat, na podstawie jakości profilu i algorytmu lokalnego. Im lepiej uzupełniony profil i im więcej pozytywnych opinii, tym wyżej trafia w wynikach.
      </p>

      <p>
        Google Ads to system reklamowy, w którym płacisz za kliknięcia. Reklamy pojawiają się nad wynikami organicznymi i są oznaczone etykietą „Reklama". Działają szybko – uruchamiasz kampanię i od razu jesteś widoczny – ale kosztują i znikają gdy przestajesz płacić. Profil Firmy buduje obecność, która zostaje i rośnie z czasem. W praktyce obie metody dobrze się uzupełniają, ale profil jest absolutnie podstawowy i powinien poprzedzać wszelkie działania reklamowe.
      </p>

      <h2>Dla kogo jest Profil Firmy w Google?</h2>

      <p>
        Profil jest stworzony z myślą o firmach lokalnych – takich, które mają bezpośredni kontakt z klientami w konkretnym miejscu lub obsługują określony obszar geograficzny. Sklep, restauracja, gabinet lekarski, warsztat, salon fryzjerski, firma sprzątająca, hydraulik, prawnik przyjmujący klientów w biurze – to właśnie użytkownicy, dla których to narzędzie zostało stworzone.
      </p>

      <p>
        Firmy działające wyłącznie online, bez żadnego fizycznego kontaktu z klientem, nie kwalifikują się do profilu lokalnego. Google aktywnie weryfikuje profile i usuwa te, które nie spełniają kryteriów. Warto upewnić się że rozumiesz zasady zanim zainwestujesz czas w konfigurację. Szczegóły wymagań opisujemy w artykule <Link href="/pytania/wizytowka-google-moja-firma-jak-zalozyc">wizytówka Google Moja Firma – jak założyć</Link>.
      </p>

      <h2>Ile kosztuje Google My Business?</h2>

      <p>
        Profil Firmy w Google jest całkowicie bezpłatny. Google nie pobiera żadnych opłat za założenie, weryfikację ani utrzymanie profilu. Funkcje podstawowe – informacje o firmie, zdjęcia, opinie, posty, statystyki – są dostępne bez żadnych ograniczeń i bez konieczności wykupienia jakiegokolwiek planu. Jeśli ktokolwiek prosi Cię o opłatę za „rejestrację w Google Maps" lub „zakup wizytówki Google" – to próba wyłudzenia, nie mają z Google nic wspólnego.
      </p>

      <p>
        Kosztem są ewentualnie czas i praca potrzebna do prawidłowego skonfigurowania i utrzymania profilu. Możesz zrobić to samodzielnie lub zlecić specjaliście. Jeśli chcesz osiągnąć konkretne efekty w postaci wyższej pozycji w mapach i większego ruchu klientów, warto rozważyć profesjonalną usługę <Link href="/uslugi/wizytowka-google">pozycjonowania wizytówki Google</Link>.
      </p>

      <h2>Podsumowanie</h2>

      <p>
        Google My Business to historyczna nazwa narzędzia, które dziś funkcjonuje jako Profil Firmy w Google (Google Business Profile). To bezpłatna usługa umożliwiająca firmom lokalnym zarządzanie swoją obecnością w wyszukiwarce Google i Google Maps. Daje dostęp do profilu z informacjami o firmie, sekcji opinii, statystyk wyświetleń i kliknięć, postów oraz listy usług. Jest podstawą lokalnego marketingu cyfrowego i powinna być pierwszym krokiem każdej firmy lokalnej wchodzącej do internetu. Jak ją założyć krok po kroku opisujemy w artykule <Link href="/pytania/jak-dodac-firme-do-google">jak dodać firmę do Google</Link>.
      </p>

    </div>
  );
}
