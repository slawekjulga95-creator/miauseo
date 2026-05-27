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

export default function CzyWizytowkaGooglePomagaBezStronyInternetowej() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Pytanie zaskakująco wielu właścicieli firm: czy muszę mieć stronę internetową żeby profil Google działał? Odpowiedź jest mniej oczywista niż mogłoby się wydawać. Strona pomaga — ale profil Google bez strony może generować realne leady. Pod warunkiem że wiesz co kompensujesz jej brakiem.
      </p>

      <h2>Co profil Google daje bez strony internetowej</h2>
      <p>Google Business Profile jest de facto mini-stroną internetową dla lokalnych firm. Klient może z profilu dowiedzieć się o godzinach otwarcia, zobaczyć zdjęcia, przeczytać opinie, zadzwonić jednym kliknięciem, dostać wskazówki dojazdu i wysłać wiadomość. Dla wielu prostych usług — fryzjer, mechanik, hydraulik, szewc — te informacje w zupełności wystarczają do podjęcia decyzji o kontakcie. Klient nie musi wchodzić na stronę jeśli profil odpowiada na wszystkie pytania których szukał.</p>
      <p>Badania zachowań klientów wskazują że dla zapytań z silną intencją lokalną (szukam kogoś blisko, teraz, do konkretnej usługi), klienci klikają telefon bezpośrednio z Local Pack — bez odwiedzenia strony. To oznacza że profil Google może być głównym — albo jedynym — kanałem pozyskiwania klientów dla firm z prostą ofertą usługową.</p>

      <h2>Gdzie brak strony realnie boli</h2>
      <p>Firma bez strony internetowej jest słabsza rankingowo — i to jest fakt. Jednym z sygnałów wiarygodności (Prominence) dla algorytmu Google jest obecność w internecie poza samym profilem. Strona z odpowiednimi danymi NAP, treściami branżowymi i linkami przychodzącymi wzmacnia profil Google. Brak strony oznacza brak tych sygnałów. Ile to kosztuje rankingowo — trudno powiedzieć dokładnie, bo zależy od konkurencji. W mało konkurencyjnych lokalizacjach profil bez strony może dominować wyniki. W dużych miastach gdzie konkurencja ma strony, SEO i linki — profil bez strony będzie zazwyczaj słabszy. Jak strona i profil na siebie wpływają: <Link href="/pytania/wizytowka-google-a-pozycja-w-wyszukiwarce">wizytówka Google a pozycja w wyszukiwarce</Link>.</p>
      <p>Brak strony ogranicza też możliwość przekazania głębszych informacji. Profil Google ma limit 750 znaków opisu, nie ma miejsca na portfolio, cennik, szczegółowe opisy usług, artykuły eksperckie. Klient który potrzebuje więcej informacji przed podjęciem decyzji — szczególnie przy droższych lub bardziej skomplikowanych usługach — chętnie trafia na stronę po zobaczeniu profilu. Bez strony ten klient może wybrać konkurencję.</p>

      <InfoBox>
        <strong>Dla jakich firm profil bez strony wystarcza:</strong> bardzo prosta usługa jednorodna (szewc, fryzjer, hydraulik, krawiec), lokalizacja z niską lub średnią konkurencją, oferta którą w całości można opisać w 750 znakach i kilku zdjęciach, klienci decydujący na podstawie bliskości i ocen a nie szczegółów oferty. Im bardziej skomplikowana lub droższa usługa — tym ważniejsza strona.
      </InfoBox>

      <h2>Jak kompensować brak strony w profilu</h2>
      <p>Jeśli nie masz strony, zadbaj żeby profil pracował maksymalnie ciężko. Uzupełnij sekcję usług tak szczegółowo jak to możliwe — każda usługa z opisem i ceną (jeśli podajesz ceny) to informacja którą klient normalnie znalazłby na stronie. Opis firmy napisz tak żeby odpowiadał na pytania które klienci normalnie zadają przez telefon. Dodaj jak najwięcej zdjęć — portfolio, realizacje, wnętrze. Odpowiadaj szybko na wiadomości przez Google i pilnuj sekcji Q&A. Im bardziej profil zastępuje stronę, tym mniej klient odczuje jej brak.</p>
      <p>Długoterminowo strona internetowa — nawet prosta, wizytówkowa, kilkustronicowa — jest inwestycją, która wzmacnia profil Google i otwiera dodatkowe kanały pozyskiwania klientów. Różnica między samym profilem a profilem ze stroną staje się coraz wyraźniejsza im większa konkurencja na rynku. Jak obie rzeczy razem budują widoczność: <Link href="/pytania/wizytowka-google-a-wyniki-organiczne-roznica">wizytówka Google a wyniki organiczne — jaka różnica</Link>.</p>
    </div>
  );
}
