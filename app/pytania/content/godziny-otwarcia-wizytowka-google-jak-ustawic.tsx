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

export default function GodzinyOtwarciWizytowkaGoogleJakUstawic() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Godziny otwarcia w Google to jedno z pól, które wprost przekłada się na realne doświadczenie klienta i na jego decyzję czy do Ciebie pojechać. Nieaktualne godziny generują jeden z najczęstszych powodów negatywnych opinii — „przyjechałem i było zamknięte". Ustawiasz je raz, ale musisz o nich pamiętać gdy cokolwiek się zmienia.
      </p>

      <h2>Jak ustawić godziny otwarcia — panel i wyszukiwarka</h2>
      <p>Godziny otwarcia możesz edytować na dwa sposoby. Pierwszy: przez panel Google Business Profile — po zalogowaniu w menu bocznym znajdź sekcję „Godziny" lub „Informacje". Możesz tam ustawić godziny dla każdego dnia tygodnia oddzielnie, zaznaczyć dni wolne (brak godzin = zamknięte) lub ustawić „Otwarte całą dobę". Drugi sposób: po wyszukaniu nazwy firmy w Google jako zalogowany właściciel, kliknij przycisk „Edytuj profil" i przejdź do sekcji godzin bezpośrednio z wyników wyszukiwania — to szybsza ścieżka dla drobnych aktualizacji.</p>
      <p>Zmiany godzin zazwyczaj są widoczne publicznie w ciągu kilku godzin, czasem do 24 godzin. Google może poprosić o weryfikację zmiany jeśli data jest podejrzana lub odbiega znacznie od poprzednich godzin.</p>

      <h2>Godziny specjalne na święta — planuj z wyprzedzeniem</h2>
      <p>Google umożliwia ustawienie godzin specjalnych (Special Hours) dla konkretnych dat — świąt, dni wolnych, urlopów, imprez. Warto to zrobić z wyprzedzeniem, bo użytkownicy często sprawdzają czy firma jest otwarta w danym dniu jeszcze zanim do niej pojadą. Jeśli profil mówi „otwarte 9:00–18:00" a firma jest zamknięta na Wielkanoc — klient rozczaruje się i prawdopodobnie wystawi negatywną opinię.</p>
      <p>Panel pozwala dodawać godziny specjalne na cały rok — możesz ustawić święta państwowe z wyprzedzeniem jednorazowo, a potem w razie potrzeby korygować. Google sam sugeruje aktualizację godzin specjalnych przed zbliżającymi się świętami — system wysyła powiadomienie do właścicieli profili kilka dni przed dniem wolnym. Warto na te powiadomienia reagować.</p>

      <InfoBox>
        <strong>Godziny więcej niż jedne — dodatkowe godziny obsługi:</strong> Google pozwala też ustawić odrębne godziny dla specyficznych usług — na przykład restauracja może mieć osobne godziny dla serwowania śniadań, lunchy i kolacji. Gabinet lekarski może mieć oddzielne godziny przyjęć i godziny telefoniczne. Te dodatkowe godziny pojawiają się w profilu jako rozwinięcie i informują klientów precyzyjniej o dostępności konkretnych usług.
      </InfoBox>

      <h2>Co zrobić gdy firma jest chwilowo zamknięta</h2>
      <p>Jeśli firma jest zamknięta tymczasowo — remont, urlop, choroba właściciela — możesz oznaczyć profil jako „tymczasowo zamknięty". To inna opcja niż zaznaczenie wszystkich dni jako wolnych, bo nie sugeruje likwidacji firmy. Google wyświetla wtedy informację „tymczasowo zamknięte" przy nazwie profilu, co jest dla klientów jasnym sygnałem. Unikaj sytuacji gdy profil mówi że jesteś otwarty a faktycznie nie ma Cię w firmie — to bezpośrednia droga do negatywnych opinii.</p>

      <h2>Wpływ godzin otwarcia na wyniki wyszukiwania</h2>
      <p>Google bierze pod uwagę godziny otwarcia przy wynikach wyszukiwania — szczególnie gdy zapytanie zawiera czasowy kontekst. Klient wpisujący „hydraulik w okolicy" o godzinie 22:00 może widzieć tylko firmy z ustawionymi całodobowymi godzinami lub wyraźnie pracującymi po godzinach. Profile bez ustawionych godzin mogą być depriorytetyzowane w wynikach gdy system nie jest pewny czy firma jest aktualnie dostępna.</p>
      <p>Dokładne godziny to też sygnał wiarygodności — firma która podaje precyzyjne godziny dla każdego dnia tygodnia wygląda bardziej profesjonalnie niż ta bez żadnych godzin lub z „zawsze otwarte" bez żadnych szczegółów. W kontekście kompleksowej optymalizacji profilu: <Link href="/pytania/jak-uzupelnic-wizytowke-google-zeby-byla-skuteczna">jak uzupełnić wizytówkę Google żeby była skuteczna</Link>.</p>
    </div>
  );
}
