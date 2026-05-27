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

export default function JakZdobycWiecejOpiniiGoogle() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Opinie w Google nie zbierają się same — przynajmniej nie w tempie, które realnie poprawia pozycję w wynikach lokalnych. Właściciele firm, którzy mają ich dużo, zazwyczaj mają jeden wspólny mianownik: aktywnie o nie proszą. Ale to jak prosisz ma znaczenie.
      </p>

      <h2>Dlaczego większość firm ma tak mało opinii?</h2>
      <p>Zadowolony klient rzadko samoczynnie wystawia opinię. Niezadowolony — bardzo często. To psychologiczna asymetria, która dotyka każdej firmy bez wyjątku. Klient, który wrócił do domu z udaną naprawą samochodu, podziękowałby chętnie, ale nie pomyślał, żeby to gdziekolwiek zapisać. Ten sam klient, któremu coś poszło nie tak, siedzi już przy klawiaturze. Efekt: profile Google z kilkoma opiniami i średnią 3,9 to często firmy, które faktycznie robią dobrą robotę, ale nigdy o nic nie prosiły.</p>
      <p>Kluczowy błąd to założenie, że link do profilu Google umieszczony gdzieś w stopce maila wystarczy. Nie wystarczy. Prośba o opinię musi być bezpośrednia, spersonalizowana i pojawić się w odpowiednim momencie — zaraz po zakończeniu usługi, kiedy klient jest jeszcze w emocji pozytywnego doświadczenia. Jak ten moment wykorzystać: <Link href="/pytania/jak-prosic-klientow-o-opinie-google">jak prosić klientów o opinie w Google</Link>.</p>

      <h2>Bezpośredni link — fundament każdej strategii</h2>
      <p>Pierwszą rzeczą, którą powinieneś zrobić, jest wygenerowanie bezpośredniego linku do formularza wystawienia opinii w Google. To nie jest link do profilu firmy — to link, który po kliknięciu od razu otwiera okno z gwiazdkami. Skraca drogę klienta z „muszę kiedyś wystawić opinię" do faktycznego wystawienia jej z kilku sekund do kilku minut. Jak wygenerować taki link krok po kroku: <Link href="/pytania/link-do-wystawienia-opinii-google-jak-wygenerowac">jak wygenerować link do wystawienia opinii Google</Link>.</p>
      <p>Kiedy masz link, możesz go umieścić wszędzie tam, gdzie masz kontakt z klientem: w wiadomości SMS po zakończeniu usługi, w mailu podsumowującym zlecenie, na wizytówce fizycznej, na paragonie, w podpisie maila. Im mniej kroków dzieli klienta od wystawienia opinii, tym większe prawdopodobieństwo, że to zrobi.</p>

      <h2>Prośba w odpowiednim momencie robi całą różnicę</h2>
      <p>Mechanik, który pyta o opinię tuż po odbiorze samochodu, kiedy klient widzi czystą szybę, ma znacznie wyższy wskaźnik konwersji niż ten, który wysyła maila tydzień później. Fryzjer pytający przy kasie, kiedy klient patrzy w lustro i jest zadowolony z efektu, wraca z opiniami szybciej niż ten, który czeka aż klient wyjdzie. Czas między pozytywnym doświadczeniem a prośbą ma ogromne znaczenie — im krótszy, tym skuteczniej.</p>
      <p>W usługach rozciągniętych w czasie — remonty, projekty IT, obsługa prawna — najlepsza chwila to moment zakończenia projektu i przekazania efektów. Nie po wystawieniu faktury. Nie po otrzymaniu płatności. Po tym, jak klient zobaczył i zaakceptował rezultat swojej pracy z Tobą.</p>

      <InfoBox>
        <strong>Czego absolutnie nie robić:</strong> Google wprost zakazuje oferowania jakichkolwiek nagród w zamian za opinie — zniżek, darmowych usług, prezentów. Takie opinie są uznawane za nieautentyczne i mogą skutkować zawieszeniem profilu. Prośba musi być prośbą, nie transakcją. Dlaczego kupowanie opinii to zły pomysł: <Link href="/pytania/kupowanie-opinii-google-ryzyko">kupowanie opinii Google — ryzyko</Link>.
      </InfoBox>

      <h2>Jak prosić — konkretne kanały i ich skuteczność</h2>
      <p>SMS działa najlepiej w branżach z jednorazową lub rzadką usługą — mechanicy, fryzjerzy, gabinety kosmetyczne, dentyści. Krótka wiadomość z bezpośrednim linkiem, wysłana maksymalnie godzinę po zakończeniu usługi, osiąga najwyższe wskaźniki konwersji ze wszystkich metod. Ludzie otwierają SMS-y w ciągu kilku minut od otrzymania.</p>
      <p>Mail działa lepiej w branżach B2B i przy usługach o wyższej wartości — agencje, prawnicy, architekci, firmy remontowe. Klient oczekuje dokumentacji po projekcie, więc dodatkowy element w formie prośby o opinię nie jest zaskoczeniem. Wiadomość powinna być krótka, bezpośrednia i zawierać imię klienta — personalizacja zwiększa open rate i klikalność.</p>
      <p>Aplikacje do zarządzania wizytami (Booksy, Calendly, dedykowane systemy) często mają wbudowaną funkcję automatycznych wiadomości po wizycie. Jeśli korzystasz z takiego systemu, ustaw automatyczną prośbę o opinię na 30–60 minut po zakończeniu wizyty. Raz skonfigurowane, działa bez Twojego udziału.</p>

      <h2>Systematyczność ponad jednorazowe akcje</h2>
      <p>Firmy, które zdobywają opinie regularnie i konsekwentnie, wyglądają w Google wiarygodniej niż firmy, które mają serię opinii z jednego miesiąca, a potem ciszę przez rok. Google bierze pod uwagę nie tylko liczbę i średnią ocen, ale też częstotliwość i aktualność opinii. Kilka opinii miesięcznie przez cały rok wygląda zdrowiej i wpływa na ranking lepiej niż trzydzieści opinii naraz po intensywnej kampanii. Jak opinie przekładają się na widoczność: <Link href="/pytania/opinie-google-wplyw-na-pozycjonowanie">wpływ opinii Google na pozycjonowanie</Link>.</p>
      <p>Stwórz rutynę — codziennie, tygodniowo albo po każdym zamkniętym zleceniu wysyłasz link. Nie czekaj na „dobry moment". Każdy zamknięty projekt to potencjalna opinia, każdy zadowolony klient to szansa, którą możesz wykorzystać albo zmarnować.</p>
    </div>
  );
}
