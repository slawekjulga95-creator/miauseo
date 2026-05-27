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

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="my-5 flex gap-4 not-prose">
      <div className="shrink-0 w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white text-sm font-bold">
        {n}
      </div>
      <div className="pt-1 text-zinc-700 leading-relaxed text-sm">{children}</div>
    </div>
  );
}

export default function JakPrzenieścWlasnoscWizytowkiGoogle() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Przeniesienie własności profilu Google Business to sytuacja, która dotyczy sprzedaży firmy, przekazania zarządzania agencji, odejścia pracownika który założył profil albo przejęcia profilu od poprzedniego właściciela który nie może przekazać dostępu. Każdy scenariusz ma inną ścieżkę rozwiązania.
      </p>

      <h2>Dodanie nowego właściciela lub menedżera — kiedy masz dostęp</h2>
      <p>Jeśli masz aktualny dostęp do panelu Google Business Profile, przeniesienie własności lub dodanie dodatkowej osoby z uprawnieniami jest proste. Wejdź w panel, wybierz profil, przejdź do Ustawień → Użytkownicy. Możesz tam dodać adres email nowej osoby i przypisać jej rolę: Właściciel, Menedżer lub Menedżer lokalizacji. Właściciel ma pełne uprawnienia łącznie z usuwaniem profilu i dodawaniem innych właścicieli. Menedżer może edytować dane, odpowiadać na opinie i publikować posty — ale nie może dodawać nowych użytkowników ani usuwać właścicieli.</p>
      <p>Po dodaniu nowej osoby ona otrzymuje email z zaproszeniem i może zaakceptować dostęp do profilu. Stary właściciel może następnie sam usunąć swój dostęp — co przenosi pełną odpowiedzialność na nowego właściciela. Ważne: nie da się dodać osoby jako właściciela bez posiadania samemu roli właściciela — menedżer nie może awansować siebie do właściciela.</p>

      <h2>Przejęcie profilu gdy poprzedni właściciel nie współpracuje</h2>

      <Step n={1}>Wyszukaj firmę w Google Maps i kliknij „Przejąć tę firmę?" lub „Czy jesteś właścicielem tej firmy?" — przycisk pojawia się przy profilach niezweryfikowanych lub oznaczonych jako wymagające weryfikacji.</Step>
      <Step n={2}>Jeśli profil jest już zweryfikowany przez kogoś innego, Google poinformuje Cię o tym i zaproponuje opcję „Zażądaj dostępu". Wypełnij formularz opisując dlaczego jesteś prawnym właścicielem firmy.</Step>
      <Step n={3}>Google wyśle powiadomienie do aktualnego właściciela profilu z prośbą o odpowiedź w ciągu 7 dni. Jeśli aktualny właściciel zaakceptuje transfer lub nie odpowie w terminie, Google może przekazać Ci dostęp.</Step>
      <Step n={4}>Jeśli poprzedni właściciel odmówi lub sprawa jest sporna, możesz eskalować przez centrum pomocy Google Business z dokumentami potwierdzającymi Twoją prawną własność firmy (KRS, CEIDG, umowy).</Step>

      <InfoBox>
        <strong>Sprzedaż firmy — co zrobić z profilem:</strong> przy sprzedaży firmy nowy właściciel powinien być dodany jako właściciel profilu przed finalizacją transakcji, a stary właściciel powinien usunąć swój dostęp po przekazaniu. Profil Google z opiniami i historią ma realną wartość biznesową — nie pozwól żeby przy transferze firmy zniknął lub pozostał na koncie poprzedniego właściciela.
      </InfoBox>

      <h2>Co zrobić gdy firma ma wielu współwłaścicieli</h2>
      <p>Dla firm ze wspólnikami lub pracownikami zarządzającymi profilem, optymalna struktura to jeden właściciel (osoba odpowiedzialna za biznes) i jeden lub kilka kont menedżerskich dla osób operacyjnie zarządzających profilem. Nie dawaj roli właściciela agencji marketingowej chyba że masz z nią bardzo silną relację opartą na umowie — przy rozstaniu z agencją odzyskanie profilu może być skomplikowane. Agencja powinna mieć rolę menedżera, nie właściciela. Jeśli zarządzasz wieloma lokalizacjami przez agencję: <Link href="/pytania/kilka-lokalizacji-firmy-google-jak-zarzadzac">kilka lokalizacji firmy Google — jak zarządzać</Link>.</p>
    </div>
  );
}
