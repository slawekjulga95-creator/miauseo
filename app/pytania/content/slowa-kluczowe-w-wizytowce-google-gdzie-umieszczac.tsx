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

export default function SlowaKluczowrWWizytowceGoogleGdzieUmieszczac() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Google Business Profile nie ma pola „słowa kluczowe" — ale słowa kluczowe są obecne w każdym polu, które wypełniasz. Pytanie brzmi: w których polach Google bierze je pod uwagę przy rankingowaniu, a w których nie. Odpowiedź nie jest taka sama dla każdego elementu profilu.
      </p>

      <h2>Kategoria firmy — najsilniejszy sygnał trafności</h2>
      <p>Jeśli miałbyś wybrać tylko jeden element profilu do optymalizacji pod kątem słów kluczowych, byłaby to kategoria główna. Google używa kategorii jako fundamentalnego sygnału do określenia trafności profilu dla danego zapytania. Klient wpisujący „fotograf Wrocław" dostanie Local Pack z firmami, których kategoria główna to „Fotograf" lub „Studio fotograficzne" — nie z firmami, które tylko wspominają fotografię w opisie. Szczegółowy przewodnik po wyborze kategorii: <Link href="/pytania/kategoria-firmy-google-jak-wybrac">jak wybrać kategorię firmy w Google</Link>.</p>

      <h2>Sekcja Usług — precyzyjne rozszerzanie zakresu fraz</h2>
      <p>Sekcja usług jest drugim co do siły miejscem dla słów kluczowych. Nazwy i opisy usług są indeksowane przez Google i brane pod uwagę przy dopasowywaniu do zapytań. Mechanik, który dodał usługę „wymiana klocków hamulcowych" z opisem, może pojawić się przy tym konkretnym zapytaniu — nawet jeśli jego kategoria główna to ogólnie „Warsztat naprawy samochodów". To tematyczne rozszerzenie zasięgu zapytań bez zmiany kategorii głównej. Jak dodać usługi do profilu: <Link href="/pytania/produkty-i-uslugi-w-wizytowce-google-jak-dodac">jak dodać produkty i usługi w wizytówce Google</Link>.</p>

      <h2>Opis firmy — ważny, ale nie rankingowo</h2>
      <p>Opis firmy (750 znaków) jest parsowany przez Google i wpływa na rozumienie kontekstu profilu, ale jego bezpośredni wpływ na ranking jest słabszy niż kategorii i usług. Warto naturalnie umieszczać w opisie frazy związane z usługą i lokalizacją — nie jako keyword stuffing, ale jako naturalne opisanie czym firma się zajmuje i dla kogo. Opis ma jednak silniejszy wpływ na konwersję niż na ranking — to tekst, który przekonuje klienta który już zobaczył profil. Jak pisać opis który działa: <Link href="/pytania/opis-firmy-w-wizytowce-google-jak-napisac">jak napisać opis firmy w wizytówce Google</Link>.</p>

      <InfoBox>
        <strong>Gdzie absolutnie nie wstawiać słów kluczowych:</strong> w nazwie firmy. Google zakazuje dodawania słów kluczowych do nazwy firmy (np. „Hydraulik Warszawa Marek Kowalski" zamiast po prostu „Hydraulik Kowalski"). Naruszenie tej zasady grozi zawieszeniem profilu. Nazwa w profilu musi być identyczna z prawdziwą nazwą firmy — tak jak na szyldzie, w umowach, na fakturach.
      </InfoBox>

      <h2>Posty Google — tematyczny sygnał aktywności</h2>
      <p>Treść postów publikowanych w profilu jest indeksowana przez Google. Regularne posty opisujące konkretne usługi, realizacje lub oferty zawierają naturalne słowa kluczowe i wzmacniają tematyczny kontekst profilu. Efekt pojedynczego posta jest mały, ale kumulatywnie — po miesiącach regularnego postowania — profil ma bogatszy kontekst tematyczny niż konkurencja niepostująca wcale. Jak efektywnie korzystać z postów: <Link href="/pytania/posty-google-my-business-jak-dzialaja">posty Google My Business — jak działają</Link>.</p>

      <h2>Odpowiedzi na opinie — niespodziewane miejsce na frazy</h2>
      <p>Odpowiedzi właściciela na recenzje są indeksowane przez Google. Odpowiadając na opinie, możesz naturalnie umieszczać nazwy usług i lokalizację — nie w sposób sztuczny i reklamowy, ale jako naturalne podziękowanie i nawiązanie do tego o czym klient pisał. Klient napisał o naprawie wentylatora grzewczego — możesz w odpowiedzi użyć tej frazy. Google to przeczyta i zinterpretuje jako dodatkowy kontekst dla profilu. To subtelna technika, ale bezkosztowa i bez ryzyka.</p>

      <h2>Odpowiedzi na pytania Q&A</h2>
      <p>Sekcja pytań i odpowiedzi w profilu jest w pełni indeksowana przez Google i wyszukiwalna. Pytania które właściciel sam dodaje do profilu (i na które odpowiada) mogą zawierać frazy, na które firma chce być widoczna. To jedno z mniej znanych miejsc w profilu, gdzie naturalne słowa kluczowe mają realny efekt. Jak zarządzać sekcją Q&A: <Link href="/pytania/qa-wizytowka-google-jak-zarzadzac">Q&amp;A w wizytówce Google — jak zarządzać</Link>.</p>
    </div>
  );
}
