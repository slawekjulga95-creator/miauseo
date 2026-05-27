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

export default function WizytowkaGoogleAPozycjaWWyszukiwarce() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Wielu właścicieli firm myli dwa odrębne pojęcia: pozycję strony internetowej w wynikach wyszukiwania i pozycję wizytówki Google w Maps. To nie to samo — mają inne algorytmy, inne czynniki rankingowe i inne efekty dla biznesu. Rozumienie tej różnicy jest punktem wyjścia do sensownego planowania lokalnego marketingu.
      </p>

      <h2>Dwa systemy, jeden Google</h2>
      <p>Kiedy wpisujesz coś w wyszukiwarkę Google, widzisz zazwyczaj kilka rodzajów wyników. Reklamy Google Ads na górze i dole strony. Local Pack — blok z mapą i trzema firmami. Organiczne wyniki wyszukiwania — niebieskie linki prowadzące do stron internetowych. Każdy z tych bloków rządzi się innymi zasadami. Local Pack to wyniki z Profilu Firmy w Google, indeksowane przez algorytm lokalny. Organiczne linki to wyniki indeksowania stron internetowych przez algorytm ogólny. To dwa osobne systemy działające równolegle.</p>
      <p>Konsekwencja jest ważna: dobra pozycja Twojej strony w organicznych wynikach wyszukiwania nie przekłada się automatycznie na dobrą pozycję w Local Pack — i odwrotnie. Można mieć wybitnie zoptymalizowaną stronę i słaby profil Google, albo silny profil bez żadnej strony. Oba scenariusze są realne i często spotykane.</p>

      <Img alt="Porównanie strony wyników Google z zaznaczonymi oddzielnie: reklamami, Local Pack i wynikami organicznymi – trzy odrębne strefy" caption="Wyniki wyszukiwania Google dzielą się na trzy niezależne strefy – każda ma własny algorytm i wymagania" />

      <h2>Jak wizytówka wpływa na pozycję w wyszukiwarce organicznej?</h2>
      <p>Profil firmy w Google ma pewien pośredni wpływ na organiczną widoczność strony. Kiedy wizytówka jest dobrze skonfigurowana i zweryfikowana, Google lepiej rozumie kontekst lokalny firmy — co pomaga stronom z lokalną treścią pojawiać się wyżej dla zapytań geograficznych. Spójność danych NAP między profilem a stroną (ten sam adres, telefon i nazwa) jest sygnałem wiarygodności, który pomaga indeksowaniu.</p>
      <p>Odwrotna relacja też działa: strona internetowa zoptymalizowana pod local SEO — z nazwą miasta w tytułach, lokalną treścią i poprawnym schema.org LocalBusiness — wzmacnia sygnały, na podstawie których Google buduje Local Pack. Te dwa systemy są odrębne, ale nie izolowane — wymieniają sygnały. Firma, która dba o oba kanały jednocześnie, ma znaczącą przewagę nad tą, która koncentruje się tylko na jednym.</p>

      <h2>Kiedy warto skupić się na wizytówce, a kiedy na stronie?</h2>
      <p>To zależy od etapu rozwoju firmy i charakteru Twojej działalności. Dla nowej, lokalnej firmy bez historii w Google, priorytetem jest wizytówka — bo daje widoczność szybciej i przy mniejszym nakładzie pracy. Strona internetowa buduje autorytet wolniej, ale jest bardziej wszechstronna i nie jest ograniczona geograficznie tak jak Local Pack.</p>
      <p>Jeśli Twoi klienci szukają Cię przez telefon i szukają w Google Maps, wizytówka ma dla nich bezpośrednie znaczenie. Jeśli klienci robią research przez dłuższy czas i porównują oferty, strona internetowa z treścią odpowiadającą na ich pytania będzie ważniejsza. W praktyce najsilniejsza jest kombinacja obu — mocna wizytówka generująca leady telefoniczne, wspierana przez stronę budującą zaufanie i zbierającą ruch na długi ogon fraz.</p>

      <h2>Jak mierzyć widoczność w obu kanałach?</h2>
      <p>Widoczność wizytówki mierzysz przez statystyki w Google Business Profile — wyświetlenia, kliknięcia w telefon, zapytania o trasę. Jak je odczytywać: <Link href="/pytania/jak-sprawdzic-statystyki-wizytowki-google">jak sprawdzić statystyki wizytówki Google</Link>. Widoczność strony internetowej mierzysz przez Google Search Console — kliknięcia i wyświetlenia organiczne. Oba narzędzia są bezpłatne i dają obraz dwóch różnych kanałów, które razem tworzą pełną lokalną obecność w Google.</p>
      <p>Jeśli chcesz rozwinąć oba kanały jednocześnie, sprawdź nasze usługi: <Link href="/uslugi/wizytowka-google">pozycjonowanie wizytówki Google</Link> i <Link href="/uslugi/pozycjonowanie-strony">pozycjonowanie strony internetowej</Link>.</p>
    </div>
  );
}
