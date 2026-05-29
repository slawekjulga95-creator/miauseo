import type { Metadata } from "next";
import Link from "next/link";
import CatWatermark from "@/components/ui/CatWatermark";

export const metadata: Metadata = {
  title: "TikTok Ads – reklamy na TikToku | MiauSEO",
  description: "Kampanie reklamowe na TikToku. Docierasz do młodszej grupy z kosztem za wyświetlenie niższym niż na jakiejkolwiek innej platformie. Zanim zrobi to konkurencja.",
};

const formats = [
  {
    name: "In-Feed Ads",
    desc: 'Reklamy wplecione naturalnie w feed "Dla Ciebie". Wyglądają jak organiczny content — scroll stopper, nie banner. Pełny ekran, dźwięk, CTA.',
    best: "Zasięg i świadomość marki",
  },
  {
    name: "TopView",
    desc: "Pierwsza rzecz którą widzi użytkownik po otwarciu aplikacji. Maksymalny zasięg, premium widoczność, zarezerwowana przestrzeń.",
    best: "Premiery produktów, duże kampanie",
  },
  {
    name: "Branded Hashtag Challenge",
    desc: "Tworzysz wyzwanie, użytkownicy nagrywają swoje wideo z Twoim hashtagiem. Organiczny UGC na skalę masową.",
    best: "Zaangażowanie i viral",
  },
  {
    name: "Spark Ads",
    desc: "Promujesz istniejące organiczne wideo — własne lub twórców, którzy wspomnieli o Twojej marce. Autentyczność na skalę.",
    best: "Social proof i zasięg twórcy",
  },
  {
    name: "Shopping Ads",
    desc: "Katalog produktów bezpośrednio w TikToku. Użytkownik widzi produkt w wideo i kupuje bez wychodzenia z aplikacji.",
    best: "E-commerce i sprzedaż bezpośrednia",
  },
  {
    name: "Lead Generation Ads",
    desc: "Formularz zbierający dane kontaktowe bez wychodzenia z TikToka. Niski friction, wysokie wskaźniki wypełnienia.",
    best: "Pokolenie leadów B2C i B2B",
  },
];

const myths = [
  {
    myth: "TikTok to tylko dla nastolatków.",
    truth: "Średni wiek użytkownika TikToka w Polsce to 27–34 lata. Pokolenie Z jest tu, ale nie jest jedyną grupą. 30+ to jeden z najszybciej rosnących segmentów platformy.",
  },
  {
    myth: "Muszę tańczyć żeby to działało.",
    truth: "Edukacyjny content, opinie klientów, behind-the-scenes i demo produktu działają na TikToku świetnie — bez żadnych choreografii. Autentyczność bije profesjonalną produkcję.",
  },
  {
    myth: "Moja branża jest za poważna na TikTok.",
    truth: "Prawnicy, dentyści, księgowi i firmy B2B budują na TikToku audytorium. Klienci wolą kupować od kogoś, kto dał im wartość przed zakupem. To działa w każdej branży.",
  },
  {
    myth: "CPM na TikToku jest taki sam jak na Facebooku.",
    truth: "CPM na TikToku jest w 2025–2026 roku nadal niższy niż na Meta i Google — bo platforma jest mniej zatłoczona reklamodawcami. To okno się zamknie.",
  },
];

const steps = [
  { num: "01", head: "Analiza profilu i grupy docelowej", body: "Sprawdzamy czy TikTok to właściwy kanał dla Twojej branży i grupy demograficznej. Analizujemy co robi konkurencja, jakie formaty działają w Twojej kategorii." },
  { num: "02", head: "Strategia contentowa i briefing kreacji", body: "TikTok wymaga innego podejścia niż inne platformy. Planujemy typy wideo, hooks, CTA i harmonogram. Doradzamy czy potrzebujesz twórcy czy możesz tworzyć sam." },
  { num: "03", head: "Pixel i śledzenie konwersji", body: "Instalujemy TikTok Pixel na stronie lub konfigurujemy konwersje w aplikacji. Bez właściwego śledzenia optymalizacja jest niemożliwa." },
  { num: "04", head: "Uruchomienie i testy", body: "Startujemy z kilkoma wariantami kreacji i grup docelowych jednocześnie. TikTok faworyzuje testowanie — algorytm sam znajdzie zwycięski wariant szybciej niż zakładasz." },
  { num: "05", head: "Skalowanie i raportowanie", body: "Wygrywający kreacje dostają więcej budżetu. Miesięczny raport z wynikami i rekomendacjami. Jesteś na bieżąco co do każdej złotówki." },
];

export default function TikTokAdsPage() {
  return (
    <main className="pt-20">

      {/* ── Hero ── */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <CatWatermark />
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand mb-6">TikTok Ads</span>
              <h1 className="text-4xl sm:text-5xl font-bold text-ink leading-tight mb-6">
                Twoi klienci są na TikToku.{" "}
                <span className="text-brand">Zacznij zanim zrobi to konkurencja.</span>
              </h1>
              <p className="text-zinc-500 text-lg leading-relaxed mb-8">
                TikTok to najszybciej rosnąca platforma reklamowa świata. CPM jest tu wciąż niższy niż na Meta i Google — bo platforma jest mniej zatłoczona reklamodawcami. To okno się zamknie.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/kontakt" className="inline-block bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl transition-colors duration-200">
                  Porozmawiajmy o TikToku
                </Link>
                <Link href="#formaty" className="inline-block border border-border text-ink hover:border-brand hover:text-brand font-semibold px-8 py-4 rounded-xl transition-colors duration-200">
                  Formaty reklamowe
                </Link>
              </div>
            </div>
            <div className="bg-surface rounded-3xl p-8 border border-border">
              <p className="text-xs font-bold tracking-widest uppercase text-zinc-400 mb-6">Dlaczego TikTok Ads teraz?</p>
              <div className="space-y-5">
                {[
                  { bold: "Niższy CPM niż Meta i Google", rest: " — platforma jest mniej zatłoczona reklamodawcami. Im szybciej wejdziesz, tym taniej kupisz uwagę." },
                  { bold: "Średni wiek użytkownika 27–34 lata", rest: " — to nie tylko nastolatki. Prawnicy, dentyści i firmy B2B generują tu leady." },
                  { bold: "Algorytm faworyzuje autentyczność,", rest: " nie budżet. Dobre wideo bez wielkiej produkcji bije drogie reklamy." },
                  { bold: "Pixel i pełne śledzenie konwersji", rest: " — wiesz za każdą złotówkę co przynosi efekt. Bez zgadywania." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <p className="text-sm text-zinc-600 leading-relaxed"><strong className="text-ink">{item.bold}</strong>{item.rest}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Liczby ── */}
      <section className="py-14 px-6 bg-brand">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            { val: "1 mld+", label: "aktywnych użytkowników miesięcznie" },
            { val: "95 min", label: "dziennie spędza przeciętny użytkownik" },
            { val: "2×", label: "wyższy engagement niż Instagram Reels" },
            { val: "↓30%", label: "niższy CPM vs Meta Ads (2025–2026)" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-3xl sm:text-4xl font-black text-white mb-1">{item.val}</p>
              <p className="text-sm text-white/75">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Formaty ── */}
      <section id="formaty" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand mb-4">Formaty</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug">
              Więcej niż jeden format. Więcej niż jeden cel.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {formats.map((f) => (
              <div key={f.name} className="border border-border rounded-2xl p-6 hover:border-brand/40 hover:shadow-md transition-all duration-200 group">
                <h3 className="font-black text-ink text-lg mb-3 group-hover:text-brand transition-colors">{f.name}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-4">{f.desc}</p>
                <span className="inline-block text-xs font-semibold bg-orange-50 text-brand border border-orange-100 px-3 py-1 rounded-full">
                  Najlepszy do: {f.best}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Obalamy mity ── */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand mb-4">Mity i fakty</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug">4 rzeczy, które słyszymy o TikToku. I co jest prawdą.</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-5">
            {myths.map((item, i) => (
              <div key={i} className="bg-white border border-border rounded-2xl overflow-hidden">
                <div className="px-6 pt-5 pb-3 flex items-start gap-3 border-b border-border">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-red-50 flex items-center justify-center mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </span>
                  <p className="text-sm font-bold text-zinc-600 italic">&quot;{item.myth}&quot;</p>
                </div>
                <div className="px-6 pt-3 pb-5 flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-green-50 flex items-center justify-center mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <p className="text-sm text-zinc-600 leading-relaxed">{item.truth}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proces ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand mb-4">Etapy współpracy</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug">Od zera do kampanii w kilka tygodni.</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden lg:block" />
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-6 lg:gap-10 items-start">
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-ink text-white flex flex-col items-center justify-center font-black text-lg leading-none z-10">
                    <span className="text-brand text-xs font-bold">{step.num}</span>
                  </div>
                  <div className="flex-1 border border-border rounded-2xl p-6 hover:border-brand/30 transition-colors duration-200">
                    <h3 className="font-bold text-ink mb-2">{step.head}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 bg-surface border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-brand mb-4">Okno możliwości</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug mb-5">
            Za 2 lata TikTok będzie tak samo drogi jak Meta.<br />
            <span className="text-brand">Teraz nie jest.</span>
          </h2>
          <p className="text-zinc-500 text-lg leading-relaxed mb-8">
            Bezpłatna konsultacja: sprawdzamy czy TikTok to właściwy kanał dla Twojej branży i co potrzebujesz żeby zacząć.
          </p>
          <Link href="/kontakt" className="inline-block bg-brand hover:bg-brand-dark text-white font-bold px-10 py-4 rounded-xl transition-colors duration-200 text-lg">
            Umów rozmowę
          </Link>
        </div>
      </section>

    </main>
  );
}
