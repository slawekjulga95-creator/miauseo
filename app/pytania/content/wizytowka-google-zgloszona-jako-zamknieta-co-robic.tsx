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

export default function WizytowkaGoogleZgloszonaJakoZamknietaCoRobic() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Firma działa normalnie, a w Google pojawia się etykieta „Prawdopodobnie trwale zamknięta" lub „Zgłoszona jako zamknięta". Klienci widzą to jako czerwony sygnał i omijają. Skąd to się bierze i jak to naprawić — szybko.
      </p>

      <h2>Dlaczego Google oznaczyło profil jako zamknięty</h2>
      <p>Google może oznaczyć profil jako zamknięty na podstawie kilku źródeł. Użytkownicy Google Maps mogą zgłaszać przez opcję „Zasugeruj zmianę" że firma jest zamknięta — jeśli wystarczająco dużo osób zgłosi to samo, Google automatycznie lub po weryfikacji dodaje etykietę. Algorytm Google może samodzielnie wnioskować o zamknięciu na podstawie sygnałów: brak aktywności właściciela przez długi czas, brak nowych opinii przez rok lub dłużej, informacje o zamknięciu z innych źródeł w sieci. Konkurencja może celowo zgłaszać firmy jako zamknięte — to niestety praktykowany nieczysta zagrywka.</p>
      <p>Etykieta „Prawdopodobnie trwale zamknięta" jest łagodniejsza niż faktyczne zawieszenie — profil wciąż istnieje i jest widoczny, ale zniechęcająca etykieta redukuje kliknięcia i telefony. To musi być naprawione natychmiast.</p>

      <h2>Jak usunąć etykietę zamknięcia</h2>
      <p>Najszybsza ścieżka to działanie bezpośrednio przez panel Google Business Profile. Po zalogowaniu znajdź w panelu powiadomienie o oznaczeniu lub przejdź do sekcji edycji statusu firmy. Będzie tam opcja oznaczenia firmy jako „Otwarta" lub zakwestionowania sugestii zamknięcia. Google wyśle Ci powiadomienie z prośbą o potwierdzenie statusu — potwierdź klikając w link lub przez panel.</p>
      <p>Alternatywna ścieżka: wyszukaj nazwę firmy w Google jako zalogowany właściciel. W panelu zarządzania profilem powinien pojawić się komunikat o oznaczeniu i możliwość odpowiedzi na nie. Kliknij „Firma nadal działa" lub odpowiednik i poczekaj na weryfikację — zazwyczaj zmiana jest widoczna w ciągu 1–3 dni.</p>

      <InfoBox>
        <strong>Jeśli nie masz dostępu do panelu:</strong> jeśli to ktoś inny zarządza profilem lub straciłeś dostęp do konta Google, musisz najpierw odzyskać własność profilu przez proces weryfikacji. Jak przenieść lub przejąć własność profilu: <Link href="/pytania/jak-przeniesc-wlasnosc-wizytowki-google">jak przenieść własność wizytówki Google</Link>.
      </InfoBox>

      <h2>Jak zapobiegać powtórzeniu problemu</h2>
      <p>Etykieta zamknięcia pojawia się znacznie rzadziej przy profilach, które są regularnie aktywne — właściciel odpowiada na opinie, dodaje posty, aktualizuje dane. Profil, który przez rok nie ma żadnej aktywności po stronie właściciela, wygląda dla algorytmu Google jak porzucony. Regularne posty — raz na dwa tygodnie — to wystarczające minimum żeby profil wyglądał aktywnie. Jak posty chronią profil i rozszerzają zasięg: <Link href="/pytania/posty-google-my-business-jak-dzialaja">posty Google My Business — jak działają</Link>.</p>
      <p>Jeśli masz podejrzenie że to konkurencja celowo oznacza profil jako zamknięty, możesz zgłosić to do Google przez centrum pomocy Business Profile z opisem sytuacji. Google prowadzi dochodzenia w przypadku podejrzanej aktywności i może podjąć działania wobec kont celowo nadsyłających fałszywe zgłoszenia. Dokumentuj daty pojawiania się etykiety i daty jej usunięcia — to będzie przydatne jeśli problem się powtarza.</p>
    </div>
  );
}
