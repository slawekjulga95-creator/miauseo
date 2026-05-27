import type { Metadata } from "next";
import Link from "next/link";
import CatWatermark from "@/components/ui/CatWatermark";

export const metadata: Metadata = {
  title: "Google Ads – kampanie reklamowe | MiauSEO",
  description: "Kampanie Google Ads dla firm lokalnych i e-commerce. Płacisz tylko za kliknięcia, które mają sens. Bez przepalania budżetu, bez umów na rok.",
};

const steps = [
  {
    n: "01",
    title: "Audyt i analiza konkurencji",
    desc: "Zanim wydasz złotówkę, sprawdzamy co robi konkurencja, jakie frazy konwertują w Twojej branży i ile realnie kosztuje kliknięcie od gotowego do zakupu użytkownika.",
  },
  {
    n: "02",
    title: "Struktura kampanii i dobór słów",
    desc: "Budujemy kampanię opartą na intencji zakupowej. Wykluczamy frazy informacyjne, które klikają ciekawscy — kierujemy ruch od tych, którzy mają portfel w ręku.",
  },
  {
    n: "03",
    title: "Kreacje reklamowe i landing page",
    desc: "Piszemy nagłówki, które zatrzymują wzrok. Sprawdzamy czy strona docelowa ma szansę konwertować. Jeśli nie — mówimy o tym wprost, zanim wydasz pieniądze.",
  },
  {
    n: "04",
    title: "Uruchomienie i pierwsze dane",
    desc: "Kampania startuje z konserwatywnym budżetem. Przez pierwsze dwa tygodnie zbieramy dane — które słowa kluczowe przynoszą zapytania, a które tylko przepalają budżet.",
  },
  {
    n: "05",
    title: "Optymalizacja i skalowanie",
    desc: "Na podstawie danych ograniczamy to co nie działa i przesuwamy budżet tam gdzie konwersje są najtańsze. Miesięczny raport z konkretnymi liczbami — bez marketingowego języka.",
  },
];

const included = [
  { title: "Kampanie w sieci wyszukiwania", desc: "Reklamy tekstowe wyświetlane dokładnie wtedy, gdy ktoś szuka Twojej usługi lub produktu." },
  { title: "Kampanie Performance Max", desc: "Automatyczne kampanie Google na wszystkich powierzchniach reklamowych — wyszukiwarka, YouTube, Gmail, Display." },
  { title: "Remarketing", desc: "Docieramy ponownie do osób które odwiedziły Twoją stronę ale nie dokonały zakupu lub kontaktu." },
  { title: "Kampanie lokalne", desc: "Reklamy skierowane do osób w Twojej okolicy — idealne dla firm z fizyczną lokalizacją." },
  { title: "Śledzenie konwersji", desc: "Konfigurujemy mierzenie wyników: połączeń telefonicznych, formularzy, zakupów. Wiesz co przynosi efekty." },
  { title: "Miesięczny raport", desc: "Pełne zestawienie wydatków, kliknięć, konwersji i kosztu pozyskania klienta. Bez ściemy." },
];

const faqs = [
  {
    q: "Ile mogę wydać na start?",
    a: "Minimalny sensowny budżet na kampanie Google Ads to 1500–2000 zł miesięcznie. Poniżej tej kwoty algorytm Google nie ma wystarczająco danych żeby się optymalizować — efekty są mierne i drogie. Optymalne budżety startowe dla firm lokalnych to 2000–5000 zł/miesiąc.",
  },
  {
    q: "Kiedy zobaczę pierwsze efekty?",
    a: "Pierwsze kliknięcia i zapytania pojawiają się zazwyczaj w ciągu 24–72 godzin od uruchomienia kampanii. Pełna optymalizacja trwa 4–8 tygodni — tyle potrzebuje algorytm Google żeby zebrać dane i zacząć pokazywać reklamy dokładniejszej grupie.",
  },
  {
    q: "Czy muszę mieć własną stronę internetową?",
    a: "Tak. Google Ads bez strony docelowej nie działa — kliknięcie musi gdzieś prowadzić. Jeśli nie masz strony lub jest słaba, możemy zaproponować prostą stronę lądowania zanim uruchomimy kampanię.",
  },
  {
    q: "Jak wyglądają opłaty za zarządzanie?",
    a: "Pobieramy stałą miesięczną opłatę za zarządzanie kampanią, niezależną od wydanego budżetu. Budżet reklamowy trafia bezpośrednio do Google — nie przechodzimy przez nas. Transparentność jest tu kluczowa.",
  },
];

export default function GoogleAdsPage() {
  return (
    <main className="pt-20">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white py-20 px-6">
        <CatWatermark />
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">
            {/* Left — heading */}
            <div className="lg:w-5/12 shrink-0">
              <p className="text-brand font-bold text-sm uppercase tracking-widest mb-4">Google Ads</p>
              <h1 className="text-4xl md:text-5xl font-bold text-ink leading-tight mb-8">
                <span className="bg-brand text-white px-2 py-0.5 rounded-md">Reklamy Google,</span><br />
                które <span className="text-brand">sprzedają.</span>
              </h1>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kontakt"
                  className="inline-block bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl transition-colors duration-200"
                >
                  Bezpłatna konsultacja
                </Link>
                <Link
                  href="#etapy"
                  className="inline-block border border-border text-ink hover:border-brand hover:text-brand font-semibold px-8 py-4 rounded-xl transition-colors duration-200"
                >
                  Jak działamy
                </Link>
              </div>
            </div>

            {/* Right — text */}
            <div className="lg:w-7/12 space-y-5 text-zinc-600 text-[17px] leading-relaxed border-l-0 lg:border-l-2 lg:border-brand/20 lg:pl-14">
              <p>
                Płacisz za każde kliknięcie — sens ma tylko wtedy, gdy kliknięcie zamienia się w klienta. Budujemy kampanie oparte na <strong className="text-ink font-semibold">intencji zakupowej</strong>, nie na samym ruchu.
              </p>
              <p>
                Zanim wydasz złotówkę, sprawdzamy co robi konkurencja i ile realnie kosztuje kliknięcie od gotowego do zakupu użytkownika. <strong className="text-ink font-semibold">Budżet trafia bezpośrednio do Google</strong> — bez prowizji od wydatków.
              </p>
              <p>
                Elastyczna umowa miesięczna, <strong className="text-ink font-semibold">pełne śledzenie konwersji</strong> i miesięczny raport z konkretnymi liczbami. Wiesz dokładnie, co przynosi efekt — bez marketingowego języka.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Dla kogo ── */}
      <section className="py-20 px-6 bg-white border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
            <div className="lg:w-5/12">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand mb-4">Dla kogo</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug mb-6">
                Google Ads działa, gdy masz co sprzedać i wiesz komu.
              </h2>
              <p className="text-zinc-500 leading-relaxed">
                Kampania Google to nie magiczny przełącznik. To precyzyjne narzędzie, które działa świetnie jeśli oferta jest konkretna, strona docelowa konwertuje i budżet jest wystarczający na zebranie danych. Jeśli te warunki nie są spełnione — powiemy o tym przed podpisaniem umowy, nie po.
              </p>
            </div>
            <div className="lg:w-7/12 space-y-4">
              {[
                { match: true, text: "Firma lokalna szukająca klientów z konkretnego obszaru geograficznego" },
                { match: true, text: "Sklep internetowy z jasno zdefiniowanym produktem i marżą" },
                { match: true, text: "Usługi o wysokiej wartości: prawnicy, dentyści, firmy budowlane, szkoły" },
                { match: false, text: "Startupy bez product-market fit szukające szybkiego wzrostu na małym budżecie" },
                { match: false, text: "Firmy bez strony internetowej lub z konwertującą stroną" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-border">
                  <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${item.match ? "bg-green-100" : "bg-red-50"}`}>
                    {item.match
                      ? <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      : <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    }
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Etapy ── */}
      <section id="etapy" className="py-20 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand mb-4">Etapy współpracy</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug">
              Od pierwszej rozmowy do pierwszego klienta.
            </h2>
          </div>
          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.n} className="flex gap-6 bg-white border border-border rounded-2xl p-6 hover:border-brand/30 transition-colors duration-200">
                <span className="text-4xl font-black text-brand/15 shrink-0 leading-none">{step.n}</span>
                <div>
                  <h3 className="font-bold text-ink text-lg mb-1">{step.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Co wchodzi w zakres ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand mb-4">Zakres usługi</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug">Co dostajesz w ramach współpracy.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {included.map((item) => (
              <div key={item.title} className="border border-border rounded-2xl p-6 hover:border-brand/30 hover:bg-orange-50/40 transition-all duration-200">
                <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 className="font-bold text-ink mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand mb-4">FAQ</span>
            <h2 className="text-3xl font-bold text-ink">Pytania, które zawsze padają.</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="bg-white border border-border rounded-2xl p-6">
                <h3 className="font-bold text-ink mb-3 flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-brand/10 text-brand text-xs font-black flex items-center justify-center mt-0.5">?</span>
                  {item.q}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed pl-9">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-brand">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Zacznijmy od liczb, nie od deklaracji.
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Bezpłatna konsultacja: sprawdzimy potencjał Google Ads dla Twojej branży i lokalizacji, zanim zdecydujesz się na współpracę.
          </p>
          <Link href="/kontakt" className="inline-block bg-white text-brand font-bold px-10 py-4 rounded-xl hover:bg-orange-50 transition-colors duration-200">
            Umów bezpłatną konsultację
          </Link>
        </div>
      </section>

    </main>
  );
}
