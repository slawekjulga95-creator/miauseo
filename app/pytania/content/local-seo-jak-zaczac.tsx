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

export default function LocalSeoJakZaczac() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Najczęstszy błąd osób zaczynających przygodę z local SEO to próba robienia wszystkiego naraz. Setki narzędzi, dziesiątki poradników, sprzeczne rady — i w efekcie paraliż decyzyjny. Tymczasem dobrze zaplanowany start w lokalnym SEO sprowadza się do kilku konkretnych kroków, wykonanych w odpowiedniej kolejności.
      </p>

      <h2>Zacznij od tego co bezpłatne i najważniejsze</h2>
      <p>Pierwszym i absolutnie obowiązkowym krokiem jest założenie i weryfikacja Profilu Firmy w Google. Bez tego żadne inne działania local SEO nie mają sensu — to fundament, na którym wszystko inne się opiera. Jeśli profil już masz, ale jest słabo uzupełniony — zacznij od jego pełnej konfiguracji: kategoria, opis, godziny, usługi, zdjęcia. Jak to zrobić dobrze od początku opisujemy w artykule <Link href="/pytania/profil-firmy-w-google-jak-skonfigurowac">profil firmy w Google — jak skonfigurować</Link>.</p>
      <p>Kiedy profil jest gotowy, sprawdź spójność swoich danych kontaktowych. Twoja nazwa firmy, adres i numer telefonu powinny być identyczne wszędzie w internecie — na stronie www, Facebooku, w katalogach branżowych, na Yelp, w serwisach z recenzjami. Jakakolwiek rozbieżność działa jak drobny szum informacyjny, który z czasem kumuluje się i obniża Twoją pozycję. Czym jest NAP consistency i dlaczego jest ważna wyjaśniamy tutaj: <Link href="/pytania/nap-consistency-co-to-jest">NAP consistency — co to jest</Link>.</p>

      <Img alt="Schemat ekosystemu local SEO – wizytówka Google w centrum, otoczona przez stronę www, katalogi lokalne, opinie i social media" caption="Local SEO to ekosystem powiązanych sygnałów – profil w Google jest centrum, ale musi być wspierany przez inne elementy" />

      <h2>Strona internetowa jako wsparcie dla profilu lokalnego</h2>
      <p>Strona internetowa nie jest obowiązkowa do działania w Google Maps — profil może generować klientów bez niej. Jednak jej obecność znacząco wzmacnia sygnały lokalne. Google szuka spójności między danymi w profilu a danymi na stronie: czy adres jest ten sam, czy numer telefonu się zgadza, czy treść strony sugeruje że firma działa w danym miejscu. Strona z dedykowaną podstroną lokalizacyjną, z nazwą miasta w tytule i opisem usług, pracuje razem z profilem jako wzmocnienie sygnałów lokalnych.</p>
      <p>Jeśli prowadzisz stronę, zadbaj o to żeby była zindeksowana w Google Search Console i żeby dane kontaktowe były wyraźnie widoczne — najlepiej zapisane w schemacie schema.org LocalBusiness, który Google rozumie automatycznie. Jak strona internetowa wpływa na pozycję wizytówki opisujemy w artykule <Link href="/pytania/wizytowka-google-a-pozycja-w-wyszukiwarce">wizytówka Google a pozycja w wyszukiwarce</Link>.</p>

      <h2>Opinie — zbieraj je systematycznie od pierwszego dnia</h2>
      <p>Nie czekaj aż profil będzie „gotowy" żeby zacząć prosić o opinie. Zacznij od razu po weryfikacji. Pierwsze opinie są najtrudniejsze do zdobycia i jednocześnie mają największy względny wpływ — przejście z zera do dziesięciu opinii poprawia pozycję bardziej niż przejście z pięćdziesięciu do sześćdziesięciu. Poproś swoich obecnych, zadowolonych klientów. Wyślij SMS lub email z bezpośrednim linkiem do wystawienia opinii — usuwasz w ten sposób tarcie które sprawia że klienci zapominają albo rezygnują. Jak wygenerować taki link: <Link href="/pytania/link-do-wystawienia-opinii-google-jak-wygenerowac">link do wystawienia opinii Google — jak wygenerować</Link>.</p>

      <h2>Cytowania lokalne — kolejny szczebel drabiny</h2>
      <p>Kiedy profil jest gotowy i pierwsze opinie napływają, czas na cytowania lokalne. To obecność nazwy, adresu i telefonu Twojej firmy w zewnętrznych katalogach i bazach danych. Nie chodzi o masowe dodawanie do setek przypadkowych katalogów — chodzi o strategiczny wybór tych, które Google uznaje za wiarygodne: Panorama Firm, Targeo, Yelp, branżowe katalogi, lokalne portale informacyjne. Każde wiarygodne cytowanie to sygnał dla Google że firma istnieje i jest rozpoznawana. Jak budować te cytowania krok po kroku: <Link href="/pytania/cytowania-lokalne-seo-jak-budowac">cytowania lokalne SEO — jak budować</Link>.</p>

      <h2>Kiedy oczekiwać pierwszych efektów?</h2>
      <p>Local SEO nie przynosi efektów z dnia na dzień. Pierwsze zmiany w widoczności zazwyczaj pojawiają się po 4–8 tygodniach od kompleksowej konfiguracji profilu. Wyraźny wzrost pozycji i liczby wyświetleń jest widoczny po 3–6 miesiącach regularnej pracy. Jeśli działasz na rynku z silną lokalną konkurencją, osiągnięcie top 3 może potrwać rok lub dłużej. To normalne — local SEO to inwestycja długoterminowa, nie kampania reklamowa z natychmiastowym efektem. Jak podejść do pozycjonowania strategicznie i czego się spodziewać na każdym etapie opisujemy w artykule <Link href="/pytania/jak-wypozycjonowac-wizytowke-google">jak wypozycjonować wizytówkę Google</Link>. Jeśli wolisz powierzyć ten temat specjaliście, sprawdź naszą ofertę: <Link href="/uslugi/wizytowka-google">pozycjonowanie wizytówki Google</Link>.</p>
    </div>
  );
}
