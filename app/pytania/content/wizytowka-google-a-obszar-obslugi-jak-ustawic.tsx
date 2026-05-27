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

export default function WizytowkaGoogleAObszarObslugiJakUstawic() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Hydraulik, elektryk, firma sprzątająca, opieka domowa, fotograf eventowy — firmy, które wyjeżdżają do klientów, mają inną relację z geografią niż te, do których klienci przychodzą. Google Business Profile przewiduje ten model i daje odpowiednie narzędzie: obszar obsługi. Używanie go poprawnie ma realny wpływ na widoczność w wynikach lokalnych.
      </p>

      <h2>Czym jest obszar obsługi i jak go ustawić</h2>
      <p>Obszar obsługi (Service Area) to geograficzny zakres, w którym firma aktywnie obsługuje klientów — dojeżdża do nich, a nie przyjmuje ich w siedzibie. Google umożliwia ustawienie obszaru obsługi przez panel Business Profile w sekcji edycji adresu. Możesz dodać konkretne miejscowości, gminy, powiaty lub całe województwa — zależnie od rzeczywistego zakresu działalności. Google przetwarza tę informację i może uwzględniać ją przy wyświetlaniu profilu użytkownikom szukającym usługi w danym regionie.</p>
      <p>Przy ustawianiu obszaru obsługi możesz jednocześnie ukryć fizyczny adres firmy — to opcja dla firm, które nie przyjmują klientów w siedzibie i nie chcą publicznie pokazywać adresu domowego lub biurowego. Możesz mieć ukryty adres + widoczny obszar obsługi. Nie musisz wybierać: możesz też mieć widoczny adres i obszar obsługi jednocześnie, jeśli przyjmujesz klientów i wyjeżdżasz do nich.</p>

      <InfoBox>
        <strong>Ile miejscowości dodawać:</strong> Google pozwala na do dwudziestu obszarów obsługi. Dodawaj tylko te, w których faktycznie pracujesz — nie dodawaj całej Polski „na wszelki wypadek". Algorytm Google jest sceptyczny wobec firm deklarujących bardzo szeroki zasięg bez odpowiedniego sygnału wyróżnienia. Wiarygodny obszar obsługi 3–5 miast wokół siedziby jest silniejszy rankingowo niż deklaracja obsługi całego województwa.
      </InfoBox>

      <h2>Obszar obsługi a faktyczna widoczność w wynikach</h2>
      <p>Ważne zastrzeżenie: obszar obsługi informuje Google o zakresie działalności, ale nie zastępuje algorytmu odległości. Google nadal priorytetyzuje firmy geograficznie bliskie lokalizacji szukającego — nawet jeśli Twój obszar obsługi pokrywa cały region. Firma hydraulika z Krakowa pojawi się wyżej dla osoby szukającej hydraulika w centrum Krakowa niż dla osoby szukającej z Tarnowa — nawet jeśli Tarnów jest w obszarze obsługi. Obszar obsługi rozszerza potencjał widoczności, ale siła profilu decyduje czy ten potencjał jest faktycznie realizowany. Jak budować silny profil: <Link href="/pytania/jak-zwiekszyc-zasieg-wizytowki-google">jak zwiększyć zasięg wizytówki Google</Link>.</p>

      <h2>Aktualizacja obszaru obsługi po zmianie zasięgu</h2>
      <p>Jeśli firma rozszerza lub zawęża obszar działalności, zaktualizuj obszar obsługi w profilu. To nie jest jednorazowe ustawienie — powinno odzwierciedlać rzeczywistość. Firma, która deklaruje obsługę całego województwa ale faktycznie jeździ tylko do kilku powiatów, traci na wiarygodności w oczach klientów którzy trafiają do niej z odległego obszaru i słyszą że firma nie dojeżdża.</p>
      <p>Przy dużych zmianach w zasięgu (np. otwarcie nowego oddziału który obsługuje inny region) rozważ czy lepszym rozwiązaniem nie jest założenie oddzielnego profilu dla nowej lokalizacji zamiast rozszerzania obszaru głównego profilu. Oddzielny profil dla nowej lokalizacji ma własne opinie, własną historię i silniejszy sygnał dla użytkowników z tamtego regionu. Jak zarządzać wieloma lokalizacjami: <Link href="/pytania/kilka-lokalizacji-firmy-google-jak-zarzadzac">kilka lokalizacji firmy Google — jak zarządzać</Link>.</p>
    </div>
  );
}
