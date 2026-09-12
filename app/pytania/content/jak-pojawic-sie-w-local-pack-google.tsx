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

export default function JakPojawicSieWLocalPackGoogle() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Local Pack to trzy firmy, które Google pokazuje nad organicznymi wynikami wyszukiwania dla zapytań lokalnych. Być w tej trójce albo nie być — nie ma środka. Badania pokazują, że ponad 70% kliknięć przy zapytaniach lokalnych trafia właśnie do tych trzech pozycji. To najważniejsza nieruchomość w lokalnym SEO i poniżej wyjaśniamy jak się w niej znaleźć.
      </p>

      <h2>Czym dokładnie jest Local Pack?</h2>
      <p>Local Pack (znany też jako Map Pack lub 3-Pack) to blok wyników wyszukiwania Google zawierający mapę z pinezkami i listę trzech lokalnych firm. Pojawia się przy zapytaniach z wyraźną intencją lokalną — gdy ktoś wpisuje „fryzjer Gdańsk", „restauracja w pobliżu" albo „hydraulik pilnie". Google wyświetla go ponad standardowymi wynikami organicznymi, co sprawia że jest pierwszą rzeczą, którą widzi użytkownik po reklamy.</p>
      <p>Każdy wpis w Local Pack zawiera nazwę firmy, ocenę gwiazdkową z liczbą opinii, adres lub odległość, godziny otwarcia i kategorie. Kliknięcie w nazwę otwiera pełny profil w Google Maps. Kliknięcie w numer telefonu (na urządzeniach mobilnych) od razu inicjuje połączenie. Ta bezpośredniość sprawia, że Local Pack generuje znacznie więcej telefonów niż standardowe wyniki organiczne.</p>

      <Img alt="Local Pack Google dla zapytania dentysta Wrocław – trzy firmy na mapie z ocenami, adresami i przyciskami zadzwoń" caption="Local Pack pojawia się ponad wynikami organicznymi i jest pierwszym miejscem gdzie klienci szukają lokalnych firm" />

      <h2>Co decyduje o tym kto trafia do top 3?</h2>
      <p>Google nie ujawnia pełnego algorytmu Local Pack, ale z badań SEO i praktyki wynika że kluczowe są trzy rzeczy. Po pierwsze trafność profilu — czy kategoria firmy, opis, słowa kluczowe w sekcji usług i aktywność postami pasują do tego czego szuka użytkownik. Po drugie odległość — Google domyślnie premiuje firmy bliżej lokalizacji wyszukującego, choć przy silnym profilu można wygrywać z firmami bliżej geograficznie. Po trzecie wyróżnienie — liczba i jakość opinii, obecność cytowań lokalnych, linki przychodzące i ogólna rozpoznawalność firmy w internecie. Szczegółowy opis tych czynników znajdziesz w artykule <Link href="/pytania/czynniki-rankingu-wizytowki-google">czynniki rankingu wizytówki Google</Link>.</p>

      <h2>Dlaczego dobra pozycja w wynikach organicznych nie gwarantuje miejsca w Local Pack?</h2>
      <p>To częste nieporozumienie. Algorytm Local Pack jest odrębny od algorytmu organicznych wyników wyszukiwania. Firma może mieć świetnie zoptymalizowaną stronę internetową, pojawiającą się na pierwszej stronie dla wielu fraz — i jednocześnie być niewidoczna w Local Pack, bo jej profil Google jest słaby. I odwrotnie — firma z minimalistyczną stroną lub bez niej może dominować w Local Pack dzięki silnemu profilowi i dużej liczbie opinii. Jak obie formy widoczności się uzupełniają wyjaśniamy tutaj: <Link href="/pytania/wizytowka-google-a-wyniki-organiczne-roznica">wizytówka Google a wyniki organiczne — jaka różnica</Link>.</p>

      <h2>Jak szybko można się dostać do Local Pack?</h2>
      <p>To zależy od konkurencji w Twojej kategorii i lokalizacji. W małych miastach i niszowych kategoriach dobrze skonfigurowany profil z kilkunastoma opiniami może trafić do top 3 w ciągu 2–3 miesięcy. W dużych miastach z silną konkurencją — Warszawa, Kraków, Wrocław — osiągnięcie stałej pozycji w Local Pack może zajmować rok lub dłużej i wymagać systematycznej pracy nad profilami, opiniami i cytowaniami. Realny harmonogram działań opisujemy w poradniku <Link href="/pytania/jak-wypozycjonowac-wizytowke-google">jak wypozycjonować wizytówkę Google</Link>.</p>

      <h2>Co zrobić żeby zwiększyć szansę na wejście do top 3?</h2>
      <p>Przede wszystkim: uzupełnij profil w 100% z precyzyjną kategorią główną i rozbudowaną sekcją usług. Zbieraj opinie systematycznie i odpowiadaj na każdą z nich. Zadbaj o spójność danych NAP we wszystkich katalogach gdzie Twoja firma jest wymieniona — <Link href="/pytania/nap-consistency-co-to-jest">NAP consistency</Link> to fundament lokalnego SEO. Dodawaj zdjęcia regularnie, nie jednorazowo. Publikuj posty z aktualnościami co tydzień lub dwa tygodnie. I buduj cytowania lokalne w wiarygodnych katalogach branżowych. Żadne z tych działań osobno nie wystarczy — Local Pack zdobywają firmy, które robią wszystko solidnie przez dłuższy czas. Jeśli potrzebujesz wsparcia w tym procesie, zapraszamy do kontaktu przez stronę <Link href="/uslugi/wizytowka-google">pozycjonowania wizytówki Google</Link>.</p>
    </div>
  );
}
