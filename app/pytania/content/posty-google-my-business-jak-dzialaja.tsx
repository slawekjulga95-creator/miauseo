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

export default function PostyGoogleMyBusinessJakDzialaja() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Posty w Google Business Profile istnieją od 2016 roku i do dziś są jedną z najmniej używanych funkcji przez właścicieli firm lokalnych. A szkoda — bo to darmowy kanał dotarcia do klientów, którzy właśnie szukają Twojej usługi w Google, i jednocześnie sygnał aktywności, który Google bierze pod uwagę przy rankingowaniu.
      </p>

      <h2>Czym są posty Google Business i gdzie się wyświetlają</h2>
      <p>Posty to krótkie aktualizacje publikowane bezpośrednio w profilu firmy — widoczne w panelu wiedzy (knowledge panel) po prawej stronie wyników wyszukiwania dla marki oraz w zakładce „Aktualizacje" profilu w Google Maps. Post może zawierać tekst (do 1500 znaków), zdjęcie, przycisk CTA (Zadzwoń, Dowiedz się więcej, Kup, Zarezerwuj) i datę ważności dla ofert czasowych.</p>
      <p>Kiedy klient szuka konkretnie Twojej firmy po nazwie — na przykład wpisując „Kawiarnia Mleczna Droga Warszawa" — w wynikach po prawej pojawia się rozbudowany panel z opiniami, zdjęciami, godzinami, a pod nimi właśnie najnowsze posty. To moment bardzo wysokiej intencji — klient już wie że chce trafić do Ciebie — i post może być elementem, który go przekona do konkretnego działania.</p>

      <h2>Jak posty wpływają na pozycję — realnie</h2>
      <p>Google nie potwierdza bezpośredniego rankingowego wpływu postów na pozycję w Local Pack — to znaczy że sam fakt opublikowania posta nie przesuwa profilu w górę listy wyników. Wpływ jest pośredni, ale realny. Po pierwsze: regularność postowania jest sygnałem aktywności właściciela, który razem z innymi sygnałami (aktualność zdjęć, odpowiedzi na opinie, uzupełnione pola profilu) buduje ogólny wskaźnik engagement profilu. Profile aktywne są traktowane przez Google jako bardziej wiarygodne i aktualne.</p>
      <p>Po drugie: posty mogą zawierać słowa kluczowe, które pojawiają się w treści indeksowanej przez Google. Post opisujący konkretną usługę lub promocję poszerza zakres kontekstu, w jakim algorytm rozumie profil. To subtelny, ale kumulatywny efekt. Jak posty wpisują się w szerszą strategię widoczności: <Link href="/pytania/jak-zwiekszyc-zasieg-wizytowki-google">jak zwiększyć zasięg wizytówki Google</Link>.</p>

      <h2>Rodzaje postów i kiedy je używać</h2>
      <p>Google Business oferuje kilka typów postów. Aktualizacja (dawniej Post) — najogólniejszy typ, do informowania o nowościach, zmianach, bieżących wydarzeniach. Oferta — post z terminem ważności, idealny dla sezonowych promocji, zniżek, akcji ograniczonych w czasie. Wydarzenie — dla warsztatów, webinarów, dni otwartych, eventów branżowych. Produkt — pozwala wyróżnić konkretny produkt lub usługę ze zdjęciem i ceną.</p>
      <p>Typ posta ma znaczenie dlatego, że Google wyświetla je nieco różnie — oferty mają wyraźny termin ważności widoczny w wizytówce, zdarzenia mają daty które są widoczne w panelu wiedzy. Dopasuj typ do tego co komunikujesz, a nie do tego co jest najłatwiejsze do wypełnienia.</p>

      <InfoBox>
        <strong>Żywotność postów:</strong> standardowe posty (Aktualizacje) są widoczne przez 7 dni, po czym znikają z widoku głównego profilu — trafiają do archiwum zakładki „Aktualizacje". Posty typu Oferta i Wydarzenie wyświetlają się do daty zakończenia. Dlatego żeby profil wyglądał aktywnie, potrzebujesz postować co najmniej raz w tygodniu lub co dwa tygodnie.
      </InfoBox>

      <h2>Co pisać w postach — pomysły na tematy</h2>
      <p>Najczęstsze blokady przy postach to brak pomysłu na co pisać. Tymczasem materiału nie brakuje nigdy. Nowa usługa lub produkt — krótki opis i zdjęcie. Sezonowa oferta — promocja na dany miesiąc. Odpowiedź na często zadawane pytanie — to samo pytanie pojawia się w sekcji Q&A i w zapytaniach telefonicznych. Zmiana godzin otwarcia lub chwilowe zamknięcie. Nagroda lub certyfikat. Realizacja — zdjęcie z ostatniego projektu. Tip lub porada branżowa — coś co klient może zrobić sam albo co pomoże mu podjąć decyzję.</p>
      <p>Posty nie muszą być długie. Trzy zdania, jedno zdjęcie, przycisk CTA — to wystarczy. Ważniejsza jest regularność niż długość. Profil z krótkim postem co tydzień wygląda zdrowiej niż profil z jednym długim postem raz na trzy miesiące. W kontekście kompletnej optymalizacji profilu: <Link href="/pytania/jak-uzupelnic-wizytowke-google-zeby-byla-skuteczna">jak uzupełnić wizytówkę Google żeby była skuteczna</Link>.</p>
    </div>
  );
}
