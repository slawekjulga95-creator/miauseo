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

export default function EEATWizytowkaGoogle() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        E-E-A-T to skrót od Experience, Expertise, Authoritativeness, Trustworthiness — doświadczenie, wiedza ekspercka, autorytet i wiarygodność. Google używa tych kryteriów do oceny jakości treści i stron internetowych, ale ich wpływ sięga dalej — do profilu firmy w Google i lokalnego SEO. Jak to działa w praktyce dla właściciela małej lub średniej firmy lokalnej?
      </p>

      <h2>Czym jest E-E-A-T i skąd pochodzi?</h2>
      <p>E-E-A-T pochodzi z dokumentu Search Quality Rater Guidelines — wewnętrznych wytycznych Google dla oceniaczy jakości wyszukiwania. To ludzie zatrudnieni przez Google, którzy ręcznie oceniają strony internetowe według określonych kryteriów. Ich oceny nie wpływają bezpośrednio na algorytm, ale pomagają Google kalibrować swoje systemy automatyczne. Czwarte E — Experience — zostało dodane w grudniu 2022 roku, rozszerzając wcześniejszy skrót E-A-T o wymiar osobistego doświadczenia autora lub firmy.</p>
      <p>Doświadczenie (Experience) oznacza że treść pochodzi od kogoś, kto osobiście zajmował się danym tematem — lekarza który leczył pacjentów, mechanika który naprawiał samochody, prawnika który prowadził sprawy. Wiedza ekspercka (Expertise) to posiadanie formalnych lub udokumentowanych kompetencji. Autorytet (Authoritativeness) to rozpoznawalność w branży. Wiarygodność (Trustworthiness) to transparentność, bezpieczeństwo i uczciwe praktyki biznesowe.</p>

      <h2>Jak E-E-A-T przekłada się na profil firmy w Google?</h2>
      <p>Google nie stosuje E-E-A-T bezpośrednio do profili w Google Maps — ten framework jest przede wszystkim narzędziem oceny treści webowej. Ale mechanizmy, które E-E-A-T opisuje, mają odpowiedniki w lokalnym SEO. Opinie klientów to wyraz Trustworthiness — im więcej pozytywnych i autentycznych recenzji, tym firma wydaje się bardziej godna zaufania. Odpowiedzi właściciela na opinie to manifestacja Experience i Authoritativeness — pokazujesz że znasz branżę i traktujesz klientów poważnie. Kompletny opis firmy z precyzyjnymi usługami to Expertise w działaniu — Google rozumie czym zajmujesz się naprawdę, a nie tylko jak się nazywasz.</p>
      <p>Jak te elementy wpływają na pozycję szczegółowo: <Link href="/pytania/czynniki-rankingu-wizytowki-google">czynniki rankingu wizytówki Google</Link>.</p>

      <InfoBox>
        <strong>E-E-A-T a YMYL:</strong> Google przykłada szczególną wagę do E-E-A-T dla stron i profili z kategorii YMYL (Your Money Your Life) — branże, gdzie błędna informacja może zaszkodzić zdrowiu lub finansom użytkownika. Należą tu: lekarze, dentyści, prawnicy, doradcy finansowi. Dla tych firm wiarygodność profilu Google — kompletne dane, opinie, odpowiedzi właściciela, linki do certyfikatów — jest szczególnie ważna.
      </InfoBox>

      <h2>Jak budować E-E-A-T przez profil i stronę internetową?</h2>
      <p>Strona internetowa to miejsce, gdzie E-E-A-T przejawia się najbardziej bezpośrednio. Strona firmy powinna zawierać: imię i nazwisko lub imiona osób prowadzących firmę z opisem doświadczenia, certyfikaty i uprawnienia jeśli branża ich wymaga, realne zdjęcia (nie stockowe) właściciela i zespołu, jasną politykę prywatności i dane kontaktowe widoczne na każdej podstronie, treści które odpowiadają na realne pytania klientów — napisane z perspektywy kogoś kto naprawdę zna branżę.</p>
      <p>Profil Google wzmacnia E-E-A-T przez spójność informacji ze stroną. Jeśli na stronie jest numer telefonu, adres i nazwa firmy identyczne z profilem Google — to sygnał wiarygodności. Opinie klientów na profilu są zewnętrznym potwierdzeniem Trustworthiness — Google traktuje je jako niezależne głosy, których nie kontroluje właściciel. Dlatego autentyczne opinie mają wartość, której nie zastąpi żaden opis napisany przez właściciela. Jak zbierać opinie nie naruszając zasad: <Link href="/pytania/jak-zdobyc-wiecej-opinii-google">jak zdobyć więcej opinii w Google</Link>.</p>

      <h2>E-E-A-T a kupowanie opinii i linków</h2>
      <p>Kupowane opinie są bezpośrednim uderzeniem w Trustworthiness. Google coraz sprawniej identyfikuje nieautentyczne recenzje — przez analizę wzorców językowych, dat, historii kont i zachowań użytkowników. Profil z dużą liczbą fałszywych opinii ryzykuje zawieszenie, usunięcie recenzji lub ręczną karę. Podobnie kupowane linki do strony internetowej — mogą krótkoterminowo poprawić pozycję, ale długoterminowo podważają Authoritativeness w oczach Google. Dlaczego kupowanie opinii jest ryzykowne: <Link href="/pytania/kupowanie-opinii-google-ryzyko">kupowanie opinii Google — ryzyko</Link>.</p>

      <h2>Praktyczne zastosowanie: co zrobić jutro?</h2>
      <p>Jeśli chcesz wzmocnić E-E-A-T swojego profilu lokalnego, zacznij od trzech rzeczy. Uzupełnij profil w 100% ze szczegółowym opisem usług napisanym językiem eksperta, a nie marketingowym bullshitem. Odpowiedz na każdą opinię, którą masz — nawet te stare, nawet te negatywne, spokojnie i merytorycznie. I zacznij zbierać opinie od obecnych klientów w sposób naturalny, bez presji i bez kupowania. To trzy działania, które bezpośrednio budują sygnały E-E-A-T dostępne dla właściciela profilu lokalnego. Resztę — cytowania, stronę, link building — budujesz z czasem. Pełna strategia: <Link href="/pytania/jak-wypozycjonowac-wizytowke-google">jak wypozycjonować wizytówkę Google</Link>.</p>
    </div>
  );
}
