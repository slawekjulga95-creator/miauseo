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

export default function QaWizytowkaGoogleJakZarzadzac() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Sekcja Q&A w profilu Google Business — pytania i odpowiedzi — to jedna z tych funkcji, o których właściciele firm wiedzą że istnieje, ale prawie nikt jej aktywnie nie zarządza. Tymczasem to bezpłatna przestrzeń na publiczne FAQ, widoczna w profilu i indeksowana przez Google. A brak zarządzania nią niesie konkretne ryzyko.
      </p>

      <h2>Jak działa sekcja Q&A w Google Business</h2>
      <p>Każdy zalogowany użytkownik Google może zadać pytanie przy dowolnym profilu firmy — nie tylko właściciel, ale jakikolwiek anonimowy użytkownik. Pytania pojawiają się publicznie w profilu i są widoczne dla wszystkich. Co gorsza — na pytania mogą też odpowiadać inni użytkownicy, nie tylko właściciel. To oznacza że jeśli nie zarządzasz tym miejscem, ktoś inny robi to za Ciebie — i niekoniecznie w Twoim interesie.</p>
      <p>Odpowiedzi właściciela są wyróżniane jako „odpowiedź właściciela" — mają wyższy autorytet i są wyświetlane wyżej niż odpowiedzi użytkowników. Właściciel może też zgłaszać nieodpowiednie pytania lub odpowiedzi do usunięcia. Ale tylko jeśli aktywnie śledzi co pojawia się w sekcji.</p>

      <h2>Jak monitorować pytania i skonfigurować powiadomienia</h2>
      <p>Google wysyła powiadomienia email o nowych pytaniach — ale tylko jeśli masz włączone powiadomienia w ustawieniach Google Business Profile. Sprawdź w panelu → Ustawienia → Powiadomienia czy masz zaznaczoną opcję powiadomień o nowych pytaniach. Jeśli nie — włącz. Bez powiadomień nowe pytanie może czekać bez odpowiedzi tygodniami, a użytkownicy mogą w tym czasie odpowiadać na własną rękę.</p>
      <p>Możesz też regularnie — raz w tygodniu lub raz na dwa tygodnie — manualnie wchodzić w profil i sprawdzać sekcję Q&A. To zajmuje dosłownie minutę i gwarantuje że nie przegapisz niczego istotnego.</p>

      <InfoBox>
        <strong>Niebezpieczeństwo nieodpowiedzianych pytań:</strong> pytania bez odpowiedzi są odpowiadane przez innych użytkowników Google. Ci użytkownicy mogą nie mieć aktualnej wiedzy o Twojej firmie, mogą mylić Cię z konkurencją albo dawać dezinformujące odpowiedzi. Potencjalny klient widzący błędną odpowiedź od „lokalnego eksperta" na Twój profil może podjąć złą decyzję — i pojechać do Ciebie nieprzygotowany lub w ogóle zrezygnować.
      </InfoBox>

      <h2>Właściciel dodaje pytania sam — strategiczne Q&A</h2>
      <p>To mniej oczywista, ale bardzo skuteczna taktyka. Właściciel może sam dodawać pytania do własnego profilu — i sam na nie odpowiadać. To pozwala stworzyć proaktywne FAQ: najczęściej zadawane pytania telefonicznie i mailowo, wątpliwości które klienci mają przed skorzystaniem z usługi, pytania o ceny, czas realizacji, dostępność, parkingi, przyjmowane płatności.</p>
      <p>Takie pytania i odpowiedzi są w pełni indeksowane przez Google — oznacza to że mogą pojawiać się w wynikach wyszukiwania dla konkretnych zapytań. Gabinet dentystyczny z pytaniem „Czy przyjmujecie pacjentów na NFZ?" i odpowiedzią może pojawić się w wynikach dla tego zapytania — bo Google widzi ten tekst jako treść związaną z profilem. To naturalne umieszczanie słów kluczowych w kontekście, który pomaga zarówno algorytmowi jak i użytkownikom. Jak inne miejsca w profilu przyjmują słowa kluczowe: <Link href="/pytania/slowa-kluczowe-w-wizytowce-google-gdzie-umieszczac">gdzie umieszczać słowa kluczowe w wizytówce Google</Link>.</p>

      <h2>Moderacja i zgłaszanie nieodpowiednich treści</h2>
      <p>Jeśli w sekcji Q&A pojawi się pytanie zawierające treści obraźliwe, spam lub dezinformację — możesz je zgłosić do Google z prośbą o usunięcie. Procedura jest analogiczna do zgłaszania opinii: przy pytaniu kliknij „Zgłoś" i wybierz powód. Google ma kilka dni na weryfikację zgłoszenia. Podobnie możesz zgłaszać odpowiedzi innych użytkowników, które są nieprawdziwe lub nieodpowiednie.</p>
      <p>Warto podchodzić do sekcji Q&A jako do publicznego narzędzia komunikacji — tak samo jak do odpowiedzi na opinie. Profil, gdzie właściciel aktywnie odpowiada zarówno na recenzje jak i na pytania, buduje wizerunek firmy otwartej na dialog. Jak podejść do odpowiadania na opinie: <Link href="/pytania/jak-odpowiadac-na-opinie-w-google">jak odpowiadać na opinie w Google</Link>. Pełna strategia aktywnego zarządzania profilem: <Link href="/pytania/jak-uzupelnic-wizytowke-google-zeby-byla-skuteczna">jak uzupełnić wizytówkę Google żeby była skuteczna</Link>.</p>
    </div>
  );
}
