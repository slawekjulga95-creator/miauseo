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

export default function WizytowkaGoogleDarmowaczyPlatna() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Krótka odpowiedź: wizytówka Google jest <strong>całkowicie bezpłatna</strong>. Długa odpowiedź: jest bezpłatna, ale wokół niej narosło tyle nieporozumień i prób wyłudzenia, że to pytanie naprawdę ma sens. Wyjaśniamy co dostajesz za zero złotych, co jest opcjonalnie płatne i jak rozpoznać próbę oszustwa.
      </p>

      <h2>Co dokładnie jest darmowe?</h2>
      <p>Profil Firmy w Google — dawna Google Moja Firma — jest bezpłatny w całości swojej podstawowej funkcjonalności. Rejestracja jest bezpłatna. Weryfikacja jest bezpłatna. Edytowanie profilu, dodawanie zdjęć, odpowiadanie na opinie, publikowanie postów, dodawanie usług, wypełnianie sekcji Q&A, przeglądanie statystyk wyświetleń i kliknięć — wszystko to jest bezpłatne i nie wymaga żadnej subskrypcji ani jednorazowej opłaty.</p>
      <p>Google zarabia na reklamach. Profil firmy to dla Google narzędzie budowania bazy danych o firmach lokalnych, która sprawia że wyszukiwarka jest bardziej użyteczna — a przez to Google może wyświetlać więcej reklam. Twój profil jest dla Google wartościowy, dlatego Google nie pobiera za niego opłat.</p>

      <Img alt="Strona główna Google Business Profile z przyciskiem Zarządzaj teraz i informacją że usługa jest bezpłatna" caption="Profil Firmy w Google jest bezpłatny – rejestracja, weryfikacja i zarządzanie nie kosztują nic" />

      <h2>Skąd biorą się opłaty, o których słyszałeś?</h2>
      <p>Jeśli ktokolwiek prosi Cię o pieniądze za „rejestrację wizytówki Google", „aktywację profilu w Google Maps" albo „wpisanie do bazy Google" — to próba wyłudzenia. Google nie ma żadnych autoryzowanych pośredników pobierających opłaty za zakładanie profili. Jedyna firma, przez którą płacisz Google za cokolwiek związanego z wyszukiwarką, to Google Ads — i tam płacisz za reklamy, nie za organiczną widoczność profilu.</p>
      <p>Tego rodzaju „oferty" są szczególnie częste w telefonicznych kampaniach sprzedażowych skierowanych do właścicieli małych firm. Dzwoni ktoś, podaje się za „partnera Google", mówi że Twój profil wymaga aktualizacji i że za określoną kwotę to załatwi. To klasyczne oszustwo. Google nigdy nie dzwoni do właścicieli firm z prośbą o płatność za profil.</p>

      <InfoBox>
        <strong>Jak odróżnić prawdziwe Google od oszustwa:</strong> Google kontaktuje się z właścicielami profili wyłącznie przez powiadomienia w panelu business.google.com lub na email powiązany z kontem. Żadnych telefonów z prośbą o płatność. Jeśli ktoś dzwoni w imieniu Google i żąda pieniędzy — rozłącz się.
      </InfoBox>

      <h2>Co jest płatne w ekosystemie Google dla firm?</h2>
      <p>Są trzy rzeczy, za które faktycznie możesz płacić Google w kontekście lokalnej obecności w sieci. Pierwsza to <strong>Google Ads</strong> — reklamy w wyszukiwarce i w Maps, które pojawiają się ponad wynikami organicznymi i są oznaczone etykietą „Reklama". Płacisz za każde kliknięcie w reklamę, według stawek ustalanych przez aukcję.</p>
      <p>Druga to <strong>Local Services Ads</strong> (Reklamy Usług Lokalnych) — typ reklam dostępny w wybranych kategoriach usługowych, gdzie płacisz za leady (kontakty od klientów), a nie za kliknięcia. Ten format jest widoczny nad standardowymi wynikami i zawiera odznakę „Zweryfikowany przez Google". Różnica między profilem firmy a Google Ads jest kluczowa dla rozumienia lokalnego marketingu — opisujemy ją szczegółowo w artykule <Link href="/pytania/wizytowka-google-a-wyniki-organiczne-roznica">wizytówka Google a wyniki organiczne — jaka różnica</Link>.</p>
      <p>Trzecia to koszt pozycjonowania — nie płacisz bezpośrednio Google za wyższą pozycję w organicznych wynikach Maps, ale możesz płacić agencji lub specjaliście za optymalizację profilu, która tę pozycję poprawia. To jest właśnie to, czym zajmujemy się w MiauSEO. Sprawdź naszą usługę <Link href="/uslugi/wizytowka-google">pozycjonowania wizytówki Google</Link>.</p>

      <h2>Czy darmowy profil wystarczy do pojawiania się wysoko?</h2>
      <p>Sam profil — nawet dobrze skonfigurowany — nie gwarantuje wysokiej pozycji w Google Maps. Algorytm bierze pod uwagę dziesiątki czynników: liczbę i jakość opinii, kompletność profilu, aktywność właściciela, sygnały z zewnętrznych stron i wiele innych. Firma z profilem aktywnie zarządzanym od lat i dziesiątkami opinii będzie pojawiać się wyżej niż nowy profil, nawet jeśli ten nowy jest perfekcyjnie uzupełniony. Jak działają te mechanizmy tłumaczymy w artykule <Link href="/pytania/czynniki-rankingu-wizytowki-google">czynniki rankingu wizytówki Google</Link>.</p>
    </div>
  );
}
