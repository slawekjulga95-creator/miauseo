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

export default function WizytowkaGoogleWMapachNieWyswietlaSie() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Profil istnieje, jest zweryfikowany, dane wyglądają poprawnie — ale firmy nie widać w Google Maps ani w wynikach wyszukiwania. To frustrujący scenariusz z kilkoma możliwymi przyczynami. Zdiagnozowanie właściwej oszczędza czas i nerwy.
      </p>

      <h2>Czy profil jest w ogóle zweryfikowany?</h2>
      <p>Zanim przejdziesz do bardziej zaawansowanej diagnostyki, sprawdź czy profil faktycznie przeszedł przez pełny proces weryfikacji. W panelu Google Business Profile niezweryfikowane profile są oznaczone jako „Oczekujące na weryfikację" lub „Niepotwierdzony". Niezweryfikowany profil jest niewidoczny publicznie w Google Maps — dokładnie taka jest zasada Google. Jeśli profil czeka na weryfikację, ukończ ją. Jak przejść weryfikację: <Link href="/pytania/google-business-profile-weryfikacja-firmy">Google Business Profile — weryfikacja firmy</Link>.</p>

      <h2>Profil zweryfikowany ale niewidoczny — najczęstsze przyczyny</h2>
      <p>Kilka dni po weryfikacji to normalny czas propagacji danych. Google potrzebuje 3–7 dni roboczych po zakończeniu weryfikacji żeby profil pojawił się publicznie w wynikach. Jeśli minął mniej niż tydzień — czekaj. Jeśli minęło więcej — sprawdź poniższe możliwości.</p>
      <p>Profil może być zawieszony — zawieszenie miękkie sprawia że profil jest zarządzalny przez właściciela ale niewidoczny publicznie. Sprawdź w panelu czy nie ma żadnego ostrzeżenia lub powiadomienia o zawieszeniu. Jak rozwiązać zawieszenie: <Link href="/pytania/wizytowka-google-zawieszona-jak-odblokowac">wizytówka Google zawieszona — jak odblokować</Link>.</p>
      <p>Duplikat profilu — jeśli Google wykrył zduplikowany profil pod tym samym adresem lub nazwą, może wyświetlać tylko jeden z nich. Sprawdź czy w Google Maps nie ma innego profilu Twojej firmy. Jak poradzić sobie z duplikatami: <Link href="/pytania/duplikaty-wizytowek-google-jak-usunac">duplikaty wizytówek Google — jak usunąć</Link>.</p>

      <InfoBox>
        <strong>Widoczność zależy od lokalizacji szukającego:</strong> Google Maps wyświetla wyniki zależnie od tego gdzie jest użytkownik. Twój profil może pojawiać się dla osób szukających blisko siedziby firmy, ale nie dla osób szukających z odległości 20 km. Sprawdź widoczność przez narzędzie Google Business Profile Insights lub przez tryb incognito z symulacją lokalizacji w Chrome.
      </InfoBox>

      <h2>Profil widoczny w wyszukiwarce ale nie na mapie</h2>
      <p>Czasem profil pojawia się po wyszukaniu nazwy firmy w Google, ale nie pojawia się na mapie przy ogólnych zapytaniach branżowych. To nie jest awaria — to algorytm rankingowy. Profil istnieje i jest zindeksowany, ale nie wystarczająco silny żeby wygrywać wyniki dla ogólnych fraz w danej lokalizacji. To kwestia pozycjonowania, nie technicznego problemu. Jak budować widoczność w Maps: <Link href="/pytania/jak-wypozycjonowac-wizytowke-google">jak wypozycjonować wizytówkę Google</Link>.</p>

      <h2>Co sprawdzić w panelu Google Business Profile</h2>
      <p>Jeśli po tygodniu od weryfikacji profil wciąż jest niewidoczny, wejdź w panel i sprawdź po kolei: status weryfikacji (potwierdzony?), status profilu (aktywny? zawieszony?), datę ostatniej aktualizacji (Google może potrzebować czasu na indeksowanie zmian), sekcja powiadomień (czy jest jakiś komunikat wymagający działania). Jeśli wszystko wygląda poprawnie a profil nadal jest niewidoczny — skontaktuj się z pomocą techniczną Google Business przez centrum pomocy. Czas oczekiwania na odpowiedź wynosi zazwyczaj 1–5 dni roboczych.</p>
    </div>
  );
}
