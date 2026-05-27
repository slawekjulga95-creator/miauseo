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

export default function KategoriaFirmyGoogleJakWybrac() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Kategoria firmy to jeden z najsilniejszych sygnałów rankingowych w Google Business Profile. Kiedy ktoś szuka „elektryka w Gdańsku", Google sprawdza jakie profile mają kategorię elektryka i pokazuje je wyżej niż firmy ogólnobudowlane, które tylko wspominają o elektryce w opisie. Wybór właściwej kategorii to decyzja strategiczna, nie formalność.
      </p>

      <h2>Jak kategoria wpływa na trafność w algorytmie</h2>
      <p>Trafność (Relevance) to jeden z trzech głównych czynników rankingowych Google. Określa jak dobrze profil firmy pasuje do tego czego szuka użytkownik. Kategoria jest najważniejszym elementem trafności — Google traktuje ją jako deklarację firmy: „jestem tym rodzajem biznesu". Jeśli Twoja kategoria główna precyzyjnie odpowiada intencji zapytania, masz fundamentalną przewagę nad firmami, które wybrały zbyt szeroką lub nieodpowiednią kategorię.</p>
      <p>Dla mechanika samochodowego różnica między kategorią „Warsztat naprawy samochodów" a „Firma usługowa" jest ogromna. Przy zapytaniu „mechanik Kraków" Google preferuje profile z pierwszą kategorią. Przy zapytaniu bardzo ogólnym obie mogłyby się pojawić, ale nie o ogólne zapytania chodzi w local SEO — chodzi o konkretne, z intencją zakupową.</p>

      <h2>Kategoria główna — jak ją wybrać</h2>
      <p>Kategoria główna powinna opisywać to, czym firma zajmuje się przede wszystkim i z czego generuje największe przychody. Nie to co robisz okazjonalnie, nie to co brzmi najlepiej, ale to co jest rdzeniem Twojego biznesu. Fryzjer robi też manicure i masaże — ale jeśli 70% przychodów to strzyżenie, kategoria główna to „Salon fryzjerski", nie „Salon piękności".</p>
      <p>Google oferuje tysiące kategorii i wciąż je aktualizuje. Zanim zdecydujesz, sprawdź co mają ustawione firmy widoczne wysoko w wynikach dla Twoich kluczowych zapytań — to jest praktyczny benchmark. Wyślij test: wyszukaj swój rodzaj usługi w swoim mieście, wejdź na profile trzech firm z Local Pack i sprawdź ich kategorie główne. To da Ci informację jakie kategorie algorytm preferuje w Twojej branży i lokalizacji.</p>

      <InfoBox>
        <strong>Kiedy zmieniać kategorię główną:</strong> jeśli zmieniasz profil działalności lub chcesz dominować w innym segmencie zapytań. Zmiana kategorii ma natychmiastowy efekt na trafność — może wyrzucić profil z wyników dla dotychczasowych zapytań i dodać do nowych. Zawsze testuj zmianę uważnie i monitoruj efekty przez minimum 30 dni.
      </InfoBox>

      <h2>Kategorie dodatkowe — ile i jakie</h2>
      <p>Google pozwala dodać do dziesięciu kategorii dodatkowych. Nie oznacza to, że powinieneś wszystkie zapełnić. Każda dodana kategoria rozszerza zakres zapytań, przy których profil może się pojawić — ale jednocześnie nieco rozmywa precyzję kategorii głównej. Optymalna liczba kategorii dodatkowych to zazwyczaj 2–5, wybranych pod kątem usług które faktycznie świadczysz i dla których chcesz się pojawiać.</p>
      <p>Dentysta może mieć kategorie dodatkowe: ortodonta, stomatolog dziecięcy, gabinet wybielania zębów — jeśli faktycznie te usługi wykonuje i chce pojawiać się w wynikach dla odpowiednich zapytań. Dodanie kategorii „SPA" lub „Masaż" dla gabinetu dentystycznego nic nie da, bo Google rozumie że te kategorie nie są spójne z profilem dentysty.</p>

      <h2>Kategorie a atrybuty — jak się uzupełniają</h2>
      <p>Niektóre atrybuty dostępne w profilu zależą od wybranej kategorii. Restaurant może ustawić typ kuchni, godziny serwowania śniadań, opcje dostawy. Salon fryzjerski może ustawić typy obsługiwanych włosów, płeć klientów, dostępność konkretnych usług. Te atrybuty są widoczne dla użytkowników filtrujących wyniki i dla algorytmu budującego trafność profilu. Jak korzystać z atrybutów: <Link href="/pytania/atrybut-firmy-google-co-wybrac">atrybuty firmy Google — co wybrać</Link>.</p>
      <p>Zmiana kategorii głównej może też zmienić dostępne atrybuty — po zmianie kategorii sprawdź sekcję atrybutów, bo mogą pojawić się nowe opcje które warto uzupełnić. W kontekście pełnej optymalizacji profilu: <Link href="/pytania/jak-uzupelnic-wizytowke-google-zeby-byla-skuteczna">jak uzupełnić wizytówkę Google żeby była skuteczna</Link>.</p>
    </div>
  );
}
