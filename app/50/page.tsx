'use client'

import type { Metadata } from 'next'

const Section = ({ title }: { title: string }) => (
  <div className="flex items-center gap-3 mt-6 mb-3">
    <div className="w-1 h-5 bg-[#FF6A00] rounded-full shrink-0" />
    <p className="text-xs font-bold text-[#1a2340] uppercase tracking-wider">{title}</p>
  </div>
)

const Point = ({ num, children }: { num: string; children: React.ReactNode }) => (
  <div className="flex gap-3 mb-2.5">
    <span className="text-xs font-bold text-[#FF6A00] shrink-0 w-7 pt-px">{num}</span>
    <p className="text-sm text-zinc-600 leading-relaxed">{children}</p>
  </div>
)

export default function WzorUmowyPage() {
  return (
    <div className="min-h-screen bg-zinc-50 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">

        {/* Header */}
        <div className="bg-white px-6 sm:px-10 pt-8 pb-5 border-b border-zinc-100">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <p className="text-xl sm:text-2xl font-bold text-[#1a2340] leading-tight">UMOWA O POZYCJONOWANIE</p>
              <p className="text-xl sm:text-2xl font-bold text-[#FF6A00] leading-tight">WIZYTÓWKI GOOGLE</p>
              <p className="text-xs text-zinc-400 mt-2">zawarta w ………………………, dnia ……………………………… r.</p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="MiauSEO" className="h-12 object-contain self-start" />
          </div>
          <div className="h-0.5 bg-gradient-to-r from-[#1a2340] to-zinc-300 mt-5 rounded" />
        </div>

        {/* Treść */}
        <div className="px-6 sm:px-10 pb-10">

          <Section title="§ 1. Strony umowy" />
          <p className="text-sm text-zinc-600 mb-3">Niniejsza umowa zostaje zawarta pomiędzy:</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="bg-zinc-50 rounded-xl p-4 border border-zinc-100">
              <p className="text-xs font-bold text-[#FF6A00] uppercase tracking-wide mb-2">Usługodawca</p>
              <p className="text-sm text-zinc-600 leading-relaxed">………………………………………, ………………………………………, NIP: ………………………………, zwany dalej „Usługodawcą".</p>
            </div>
            <div className="bg-zinc-50 rounded-xl p-4 border border-zinc-100">
              <p className="text-xs font-bold text-[#FF6A00] uppercase tracking-wide mb-2">Zleceniodawca</p>
              <p className="text-sm text-zinc-600 leading-relaxed">………………………………………, ………………………………………, NIP: ………………………………, reprezentowany przez ………………………………………, zwany dalej „Zleceniodawcą".</p>
            </div>
          </div>

          <Section title="§ 2. Przedmiot umowy" />
          <Point num="2.1">Usługodawca prowadzi, pozycjonuje i obsługuje ogólnodostępną wizytówkę Google (Profil Firmy w Google) Zleceniodawcy zgodnie z warunkami niniejszej umowy.</Point>
          <Point num="2.2">Zleceniodawca wskazuje 3 frazy kluczowe do pozycjonowania i może je bezpłatnie wymieniać w dowolnym momencie obowiązywania umowy.</Point>
          <Point num="2.3">Strony zgodnie ustalają, że niniejsza umowa stanowi umowę starannego działania, a nie umowę rezultatu. Usługodawca zobowiązuje się do dołożenia należytej staranności w wykonywaniu usług, lecz nie gwarantuje osiągnięcia konkretnych pozycji w wynikach wyszukiwania, określonego poziomu ruchu, liczby interakcji ani innych mierzalnych efektów, ponieważ zależą one od czynników niezależnych od Usługodawcy, w szczególności od algorytmów i polityk Google.</Point>

          <Section title="§ 3. Zakres usług (miesięcznie)" />
          <Point num="3.1">Publikacja nie mniej niż 5 nowych wpisów/postów na wizytówce Google.</Point>
          <Point num="3.2">Przygotowanie nie mniej niż 5 nowych materiałów graficznych lub aktualizacji treści profilu.</Point>
          <Point num="3.3">Podejmowanie działań mających na celu zwiększenie zasięgu, widoczności oraz interakcji potencjalnych klientów z wizytówką (połączenia telefoniczne, dojazdy, wejścia na stronę internetową).</Point>
          <Point num="3.4">Bieżące monitorowanie statystyk oraz reagowanie na zmiany algorytmu Google.</Point>
          <Point num="3.5">Optymalizacja opisu, kategorii i atrybutów profilu.</Point>

          <Section title="§ 4. Zawarcie umowy i akceptacja warunków" />
          <Point num="4.1">Przesłanie zlecenia przez Zleceniodawcę oraz udostępniony mu projekt (draft) niniejszej umowy wraz z warunkami stanowią ofertę Usługodawcy w rozumieniu art. 66 Kodeksu cywilnego.</Point>
          <Point num="4.2">Dokonanie płatności na podstawie faktury proforma wystawionej przez Usługodawcę jest równoznaczne z przyjęciem oferty i zawarciem umowy na warunkach niniejszego dokumentu, zgodnie z art. 60 Kodeksu cywilnego. Umowa zostaje zawarta z chwilą zaksięgowania płatności na rachunku Usługodawcy. Zleceniodawca potwierdza tym samym zapoznanie się z treścią oferty i akceptację wszystkich jej postanowień — bez konieczności odrębnego podpisywania i odsyłania dokumentu.</Point>
          <Point num="4.3">Cena wskazana na fakturze proforma stanowi integralną część warunków oferty. Dokonując płatności, Zleceniodawca akceptuje zarówno postanowienia niniejszej umowy, jak i wysokość wynagrodzenia wskazaną na fakturze proforma.</Point>
          <Point num="4.4">Po zaksięgowaniu wpłaty Usługodawca wystawia fakturę VAT. Egzemplarz umowy uzupełniony danymi Zleceniodawcy dostarczany jest drogą elektroniczną wyłącznie w celu potwierdzenia (utrwalenia) zawartej umowy i nie wymaga dla swej ważności podpisu którejkolwiek ze stron ani pieczęci.</Point>

          <Section title="§ 5. Wynagrodzenie i płatności" />
          <Point num="5.1">Wynagrodzenie ustalane jest indywidualnie i wskazane na fakturze proforma. Wynagrodzenie za cały okres obowiązywania umowy płatne jest jednorazowo z góry, na podstawie faktury proforma.</Point>
          <Point num="5.2">Po zaksięgowaniu płatności Zleceniodawca otrzymuje fakturę VAT stanowiącą dokument księgowy.</Point>

          <Section title="§ 6. Czas trwania umowy" />
          <Point num="6.1">Umowa zostaje zawarta na czas określony <strong>…………</strong> miesięcy, liczonych od daty dokonania pierwszej płatności.</Point>
          <Point num="6.2">Po upływie okresu obowiązywania umowa wygasa. Kontynuacja współpracy wymaga zawarcia nowego porozumienia.</Point>
          <Point num="6.3">Opłaty uiszczone z tytułu niniejszej umowy nie podlegają zwrotowi, w szczególności w przypadku rezygnacji Zleceniodawcy przed zakończeniem okresu obowiązywania umowy lub braku współdziałania, o którym mowa w § 7.</Point>

          <Section title="§ 7. Prawa, obowiązki i odpowiedzialność" />
          <Point num="7.1">Usługodawca stosuje wyłącznie legalne metody pozycjonowania zgodne z wytycznymi Google.</Point>
          <Point num="7.2">Zleceniodawca udziela Usługodawcy uprawnień menedżerskich do wizytówki Google na czas realizacji niniejszej umowy oraz zobowiązuje się je utrzymać przez cały okres jej obowiązywania.</Point>
          <Point num="7.3">Zleceniodawca zobowiązany jest do współdziałania niezbędnego do wykonania umowy, w szczególności do terminowego udzielenia i utrzymania dostępu do wizytówki oraz przekazywania niezbędnych informacji i materiałów. W przypadku braku współdziałania terminy realizacji ulegają zawieszeniu, a Usługodawca nie ponosi odpowiedzialności za brak efektów ani niewykonanie usług wynikające z takiego braku współdziałania.</Point>
          <Point num="7.4">Zleceniodawca konsultuje z Usługodawcą planowane zmiany w profilu przed ich wprowadzeniem, by nie zakłócać trwających działań optymalizacyjnych.</Point>
          <Point num="7.5">Usługodawca nie odpowiada za przestoje leżące po stronie Google Inc. ani za treści samodzielnie zamieszczone przez Zleceniodawcę.</Point>
          <Point num="7.6">Całkowita odpowiedzialność Usługodawcy z tytułu niniejszej umowy ograniczona jest do wysokości wynagrodzenia faktycznie zapłaconego przez Zleceniodawcę. Usługodawca nie odpowiada za utracone korzyści (lucrum cessans) ani za szkody pośrednie. Ograniczenia te nie dotyczą szkody wyrządzonej umyślnie.</Point>
          <Point num="7.7">Z chwilą zapłaty wynagrodzenia Usługodawca przenosi na Zleceniodawcę autorskie prawa majątkowe do materiałów graficznych i treści wytworzonych w ramach realizacji umowy, na polach eksploatacji obejmujących utrwalanie, zwielokrotnianie, publikację w wizytówce Google oraz w mediach Zleceniodawcy. Przeniesienie praw następuje pod warunkiem zapłaty całości wynagrodzenia.</Point>
          <Point num="7.8">Reklamacje składa się pisemnie lub drogą elektroniczną na adres Usługodawcy; termin rozpatrzenia wynosi 30 dni kalendarzowych.</Point>
          <Point num="7.9">Usługodawca uprawniony jest do rozwiązania umowy ze skutkiem natychmiastowym w przypadku rażącego naruszenia jej postanowień przez Zleceniodawcę, w szczególności braku współdziałania, zamieszczania treści bezprawnych lub obraźliwych albo zachowań uniemożliwiających realizację usług. Uprawnienie z § 6.3 (brak zwrotu opłat) pozostaje w mocy.</Point>

          <Section title="§ 8. Postanowienia końcowe" />
          <Point num="8.1">Wszelkie zmiany warunków wymagają zachowania formy dokumentowej (np. wiadomości e-mail) pod rygorem nieważności.</Point>
          <Point num="8.2">Dane osobowe przetwarzane są zgodnie z Rozporządzeniem RODO (UE) 2016/679.</Point>
          <Point num="8.3">Spory rozstrzygane będą polubownie, a w razie braku porozumienia — przez sąd właściwy dla siedziby Usługodawcy.</Point>
          <Point num="8.4">W sprawach nieuregulowanych niniejszą umową zastosowanie mają przepisy Kodeksu cywilnego.</Point>

          {/* Przycisk drukuj */}
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 bg-[#FF6A00] hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-xl transition-colors text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>
              </svg>
              Drukuj / Pobierz PDF
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
