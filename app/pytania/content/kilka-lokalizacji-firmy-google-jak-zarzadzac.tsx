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

export default function KilkaLokalizacjiFirmyGoogleJakZarzadzac() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Dwa salony fryzjerskie, trzy gabinety fizjoterapii, sieć warsztatów samochodowych — każda lokalizacja w Google Maps to oddzielny profil, który wymaga oddzielnej weryfikacji, oddzielnych opinii i oddzielnej optymalizacji. Google oferuje narzędzia do zarządzania wieloma profilami z jednego miejsca, ale efektywne zarządzanie wymaga jeszcze czegoś więcej.
      </p>

      <h2>Jak technicznie zarządzać wieloma profilami</h2>
      <p>Google Business Profile pozwala zarządzać wieloma lokalizacjami z jednego konta — przez widok Business Group (dawniej Location Group). Jeśli masz więcej niż dziesięć lokalizacji, możesz ubiegać się o dostęp do zarządzania zbiorczego przez API lub przez konsola zarządzania. Przy mniejszej liczbie lokalizacji wystarczy standardowy panel: każda lokalizacja to oddzielny profil, ale wszystkie są widoczne w jednym panelu po zalogowaniu na konto właściciela.</p>
      <p>Dodawanie menedżerów: możesz dodać tę samą osobę lub agencję jako menedżera do wszystkich lokalizacji — albo mieć oddzielnych menedżerów dla każdej. Drugie rozwiązanie jest lepsze gdy każda lokalizacja ma inne godziny, personel i charakter — menedżer lokalny reaguje szybciej na pytania i opinie klientów z konkretnego miejsca.</p>

      <h2>Co każda lokalizacja musi mieć oddzielne</h2>
      <p>Każdy profil lokalizacyjny musi mieć unikalny adres, numer telefonu dla tej lokalizacji (nie centralki), godziny otwarcia właściwe dla tego oddziału, zdjęcia wnętrza i otoczenia tej konkretnej lokalizacji. Opinie są przypisane do konkretnej lokalizacji — klient który odwiedził oddział w Krakowie wystawia opinię temu profilowi, nie warszawskiemu. Dlatego każda lokalizacja musi aktywnie zbierać opinie od swoich klientów. Jak zbierać opinie dla konkretnej lokalizacji: <Link href="/pytania/jak-zdobyc-wiecej-opinii-google">jak zdobyć więcej opinii w Google</Link>.</p>

      <InfoBox>
        <strong>Oddzielne linki do opinii dla każdej lokalizacji:</strong> wygeneruj osobny link do wystawienia opinii dla każdej lokalizacji i przypisz go do komunikacji z klientami tego konkretnego oddziału. Klient z Gdańska klikający link z lokalizacją Gdańsk wystawia opinię przy gdańskim profilu — nie przy centralnym lub warszawskim. Jak generować te linki: <Link href="/pytania/link-do-wystawienia-opinii-google-jak-wygenerowac">jak wygenerować link do wystawienia opinii Google</Link>.
      </InfoBox>

      <h2>Nazwa i brand spójność między lokalizacjami</h2>
      <p>Wszystkie lokalizacje tej samej marki powinny mieć tę samą nazwę — z ewentualnym dookreśleniem lokalizacji jeśli jest to potrzebne do odróżnienia (np. „Salon X — Kraków Centrum" vs „Salon X — Kraków Nowa Huta"). Google zezwala na takie dookreślenia gdy firma faktycznie ma wiele oddziałów. Nie wolno jednak dodawać dookreśleń będących słowami kluczowymi — „Salon X fryzjer Kraków" to naruszenie zasad i ryzyko zawieszenia wszystkich profili powiązanych z kontem.</p>
      <p>Opis firmy może być podobny dla wszystkich lokalizacji (brand story, wartości) ale powinien zawierać unikalne elementy dla każdej — co wyróżnia ten konkretny oddział, specjalizacja danego zespołu, unikalne godziny lub usługi dostępne tylko w tej lokalizacji. To buduje trafność każdego profilu z osobna i zapobiega sytuacji gdy Google traktuje je jako zduplikowane treści.</p>

      <h2>Strateg lokalny vs. centralny — jak rozdzielić odpowiedzialności</h2>
      <p>Przy większej sieci lokalizacji warto jasno rozdzielić co jest zarządzane centralnie (brand, kategorie, bazowy opis, atrybuty marki) a co lokalnie (godziny, zdjęcia lokalizacji, odpowiedzi na opinie, posty o lokalnych wydarzeniach). Centralne zarządzanie gwarantuje spójność marki. Lokalne zarządzanie gwarantuje aktualność i autentyczność. Brak lokalnego zaangażowania — kiedy oddział z Gdańska ma przez rok te same posty co centralny profil z Warszawy — wygląda źle i jest nieefektywne. Jak posty pomagają każdej lokalizacji z osobna: <Link href="/pytania/posty-google-my-business-jak-dzialaja">posty Google My Business — jak działają</Link>.</p>
    </div>
  );
}
