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

export default function ZdjeciaWWizytowceGoogleJakiWplywNaPozycje() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Zdjęcia w profilu Google Business to jeden z tych elementów, gdzie istnieje wyraźna korelacja między ilością i jakością a widocznością. Google Business Profile w oficjalnej dokumentacji wskazuje, że profile ze zdjęciami generują więcej wizyt na stronie i połączeń telefonicznych. Ale korelacja nie jest przypadkowa — zdjęcia wpływają na kilka mechanizmów jednocześnie.
      </p>

      <h2>Jak zdjęcia wpływają na pozycję — mechanizm</h2>
      <p>Bezpośredni wpływ zdjęć na ranking w Local Pack nie jest tak silny jak opinie czy kategoria, ale pośredni jest istotny. Profile ze zdjęciami mają wyższy CTR (click-through rate) — więcej użytkowników klika w profil gdy widzi miniatury zdjęć w wynikach. Wyższy CTR Google interpretuje jako sygnał trafności i jakości profilu — co z kolei wzmacnia pozycję. To pętla pozytywna: lepsze zdjęcia → wyższy CTR → lepszy ranking → więcej wyświetleń.</p>
      <p>Drugi mechanizm: zdjęcia są sygnałem aktywności właściciela. Google śledzi kiedy ostatnio były dodawane zdjęcia przez właściciela (nie przez klientów). Profil regularnie aktualizowany zdjęciami jest traktowany jako bardziej aktywny i aktualny. To wpisuje się w szerszy sygnał engagement, który wpływa na ranking. Pełne omówienie czynników rankingowych: <Link href="/pytania/czynniki-rankingu-wizytowki-google">czynniki rankingu wizytówki Google</Link>.</p>

      <h2>Zdjęcia właściciela vs. zdjęcia klientów</h2>
      <p>W profilu Google Business pojawiają się dwa rodzaje zdjęć: uploadowane przez właściciela i dodawane przez klientów. Obu nie możesz kontrolować w równym stopniu. Zdjęcia klientów są widoczne publicznie i właściciel nie może ich usunąć (chyba że naruszają zasady platformy — np. są obraźliwe lub niezwiązane z firmą). Dlatego szczególnie ważne jest żebyś sam systematycznie dodawał zdjęcia wysokiej jakości — żeby to one dominowały w galerii, a nie przypadkowe fotki klientów zrobione w złym świetle.</p>
      <p>Google rozróżnia te dwa rodzaje zdjęć i pokazuje je w osobnych zakładkach, ale w głównej galerii profilu mix z obu źródeł. Im więcej dobrych zdjęć własnych, tym lepsza pierwsza impresja.</p>

      <h2>Co fotografować — priorytety</h2>
      <p>Logo i zdjęcie okładki to minimum absolutne — bez nich profil wygląda jak porzucony. Logo powinno być na białym lub jasnym tle, w proporcjach odpowiednich do kwadratowej miniatury. Zdjęcie okładki to poziomy baner widoczny na górze profilu — tutaj możesz pokazać flagowy produkt, wnętrze, zespół lub charakterystyczny element firmy.</p>
      <p>Zdjęcia wnętrza są kluczowe dla firm, do których klienci przyjeżdżają fizycznie: restauracje, gabinety, salony, sklepy. Pomagają klientowi podjąć decyzję zanim zadzwoni — widzi jak wygląda miejsce, czy jest schludnie, czy klimat mu odpowiada. Zdjęcia zewnętrzne — wejście, szyld, parking — pomagają klientowi fizycznie trafić do firmy. Szczególnie ważne jeśli wejście nie jest oczywiste lub firma jest w budynku biurowym.</p>
      <p>Dla usług — mechanicy, budowlańcy, styliści — świetnie sprawdzają się zdjęcia „przed i po" lub dokumentacja realizacji. Pokazują kompetencje bez słowa i budują zaufanie lepiej niż jakikolwiek opis.</p>

      <InfoBox>
        <strong>Parametry techniczne zdjęć Google:</strong> minimalna rozdzielczość 720×720 pikseli, formaty JPG lub PNG, maksymalny rozmiar 5MB. Dla zdjęcia okładki zalecane proporcje 16:9 (np. 1024×576 lub wyżej). Zdjęcia o niskiej jakości lub zbyt ciemne Google może sam odfiltrować z galerii lub pokazywać je rzadziej.
      </InfoBox>

      <h2>Regularność uploadowania — częstotliwość ma znaczenie</h2>
      <p>Jednorazowe dodanie dwudziestu zdjęć przy zakładaniu profilu jest lepsze niż nic, ale gorsza strategia niż systematyczne dodawanie jednego lub dwóch zdjęć co tydzień lub co dwa tygodnie. Google docenia aktywność rozłożoną w czasie — świadczy ona że firma działa i regularnie ją ktoś zarządza. Zdjęcia na profilu możesz też linkować z nowymi postami Google My Business — to podwójny sygnał aktywności. Jak posty wpływają na profil: <Link href="/pytania/posty-google-my-business-jak-dzialaja">posty Google My Business — jak działają</Link>.</p>
    </div>
  );
}
