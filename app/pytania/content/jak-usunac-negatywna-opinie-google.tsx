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

export default function JakUsunacNegatywnaOpinieGoogle() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Każdy właściciel firmy prędzej czy później trafi na opinię, której by wolał nie widzieć. Część z nich jest zasłużona. Część to efekt nieporozumienia. Część pochodzi od konkurencji albo od kogoś, kto nigdy nie był Twoim klientem. Tylko ostatnia kategoria ma realne szanse na usunięcie — i to nie jest szybkie.
      </p>

      <h2>Kiedy Google usuwa opinię — a kiedy nie</h2>
      <p>Google usuwa opinie wyłącznie wtedy, gdy naruszają jego zasady dotyczące recenzji. Katalog naruszeń jest konkretny: spam i fałszywe treści (opinie od osób, które nie skorzystały z usługi), treści obraźliwe i nieodpowiednie (wulgaryzmy, mowa nienawiści), konflikty interesów (opinie od pracowników lub właściciela), treści niezwiązane z firmą, dane osobowe i materiały dotyczące nieletnich, informacje prawnie zastrzeżone. Negatywna opinia od prawdziwego klienta opisująca prawdziwe doświadczenie — nawet jeśli Twoim zdaniem niesprawiedliwa i przesadzona — nie spełnia kryteriów usunięcia i Google jej nie usunie.</p>
      <p>To jest moment, w którym wiele firm traci czas i energię na składanie zgłoszeń dla opinii, które nigdy nie zostaną usunięte. Jeśli opinia jest autentyczna, najlepszą strategią jest profesjonalna odpowiedź, a nie walka z systemem. Jak pisać odpowiedzi na negatywne recenzje: <Link href="/pytania/jak-odpowiadac-na-opinie-w-google">jak odpowiadać na opinie w Google</Link>.</p>

      <h2>Jak zgłosić opinię do usunięcia</h2>
      <p>Jeśli opinia wyraźnie narusza zasady — jest spamem, pochodzi od kogoś kto nie był klientem, zawiera treści obraźliwe lub dane osobowe — możesz ją zgłosić przez panel Google Business Profile. W sekcji Opinie kliknij trzy kropki przy konkretnej recenzji i wybierz Zgłoś jako nieodpowiednią. Google prześle zgłoszenie do weryfikacji przez swój zespół.</p>
      <p>Realność: Google rozpatruje zgłoszenia w ciągu kilku dni do kilku tygodni, a wskaźnik zaakceptowanych zgłoszeń jest niski. Jeśli po rozpatrzeniu zgłoszenia opinia zostanie — możesz złożyć odwołanie przez formularz w panelu wsparcia Google Business. Przy odwołaniu warto dołączyć dowody: dokumenty, korespondencję, potwierdzenie że dana osoba nigdy nie była Twoim klientem. Bez dowodów szanse na skuteczne odwołanie są minimalne.</p>

      <InfoBox>
        <strong>Pułapka agencji obiecujących usunięcie każdej opinii:</strong> na rynku działają firmy obiecujące gwarantowane usunięcie negatywnych opinii za opłatą. W zdecydowanej większości przypadków to niemożliwe — jeśli opinia nie narusza zasad Google, żadna agencja jej nie usunie. Jedyne co może się stać to strata pieniędzy. Unikaj takich usług.
      </InfoBox>

      <h2>Alternatywa dla usunięcia — przykrycie opiniami</h2>
      <p>Jeśli opinia spełnia zasady Google i nie zostanie usunięta, skuteczniejszą strategią od walki o usunięcie jest aktywne zbieranie nowych, pozytywnych recenzji. Jedna opinia z gwiazdką przy trzydziestu pięciogwiazdkowych ma marginalny wpływ na odbiór firmy. Ta sama opinia przy sześciu recenzjach dominuje odbiór całego profilu. Matematyka jest prosta: buduj bazę pozytywnych opinii, a negatywna straci na znaczeniu. Jak to robić systematycznie: <Link href="/pytania/jak-zdobyc-wiecej-opinii-google">jak zdobyć więcej opinii w Google</Link>.</p>
      <p>Jest tu jednak ważna granica: aktywne zbieranie opinii musi odbywać się zgodnie z zasadami Google — przez bezpośrednią prośbę do prawdziwych klientów, bez nagród, bez sugerowania treści recenzji. Próba „przykrycia" negatywnej opinii kupionym pakietem recenzji to droga do zawieszenia profilu, nie do poprawy wizerunku.</p>

      <h2>Co zrobić jeśli opinia zawiera nieprawdziwe informacje?</h2>
      <p>Jeśli recenzja zawiera kłamliwe twierdzenia o faktach — błędne daty, usługi których nie świadczysz, zdarzenia które nie miały miejsca — masz prawo do odpowiedzi prostującej fakty. Napisz spokojnie, krótko i bez agresji. Przyszłym czytelnikom wyjaśnisz sytuację, a sam fakt profesjonalnej odpowiedzi często przekonuje ich bardziej niż sama treść recenzji.</p>
      <p>W przypadku gdy opinia zawiera treści zniesławiające i masz dowody na ich nieprawdziwość, możesz rozważyć drogę prawną — ale to proces kosztowny, długi i nie zawsze kończący się usunięciem treści z Google. Warto skonsultować się z prawnikiem przed podjęciem takich kroków, szczególnie jeśli klientami są konsumenci chronieni przez przepisy o ochronie danych i swobodzie wyrażania opinii.</p>
    </div>
  );
}
