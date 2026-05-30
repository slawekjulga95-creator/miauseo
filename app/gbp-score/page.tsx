"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import CatWatermark from "@/components/ui/CatWatermark";

// ─── Types & Data ─────────────────────────────────────────────────────────────

type Option = { label: string; score: number };
type Question = {
  id: number; category: string; question: string; emoji: string;
  weight: number; critical: boolean; options: Option[];
  issueLabel: string; improvementLabel: string; quickWin?: string;
};
type Phase = "intro" | "quiz" | "results";

const QUESTIONS: Question[] = [
  {
    id: 0, category: "Podstawy", emoji: "🌐", weight: 10, critical: true,
    question: "Czy Twoja firma ma stronę internetową połączoną z wizytówką Google?",
    options: [
      { label: "Tak, aktywna strona powiązana z GBP", score: 10 },
      { label: "Mam stronę, ale nie jest połączona z wizytówką", score: 5 },
      { label: "Nie mam strony internetowej", score: 0 },
    ],
    issueLabel: "Brak strony www — fundament widoczności nieobecny",
    improvementLabel: "Stwórz lub podlinkuj stronę www do wizytówki GBP",
    quickWin: "Wejdź do GBP i dodaj URL swojej strony (5 minut)",
  },
  {
    id: 1, category: "Opinie", emoji: "⭐", weight: 10, critical: true,
    question: "Ile Twoja firma ma opinii w Google?",
    options: [
      { label: "Ponad 50 opinii", score: 10 },
      { label: "21–50 opinii", score: 7 },
      { label: "5–20 opinii", score: 4 },
      { label: "Mniej niż 5 opinii", score: 0 },
    ],
    issueLabel: "Za mało opinii — profil niewidoczny dla klientów",
    improvementLabel: "Zbuduj systematyczny system pozyskiwania opinii",
    quickWin: "Wyślij link do opinii do 10 ostatnich klientów (30 minut)",
  },
  {
    id: 2, category: "Opinie", emoji: "💬", weight: 10, critical: true,
    question: "Czy regularnie odpowiadasz na opinie klientów?",
    options: [
      { label: "Tak, odpowiadam na każdą opinię w ciągu 24h", score: 10 },
      { label: "Odpowiadam, ale nie regularnie", score: 5 },
      { label: "Rzadko lub wcale nie odpowiadam", score: 0 },
    ],
    issueLabel: "Brak odpowiedzi na opinie — stracone sygnały aktywności",
    improvementLabel: "Wdróż cotygodniową rutynę odpowiadania na opinie",
    quickWin: "Odpowiedz teraz na wszystkie nieudzielone opinie",
  },
  {
    id: 3, category: "Zdjęcia", emoji: "📸", weight: 8, critical: false,
    question: "Jak często dodajesz nowe zdjęcia do wizytówki?",
    options: [
      { label: "Co tydzień lub częściej", score: 8 },
      { label: "Raz w miesiącu", score: 5 },
      { label: "Kilka razy w roku", score: 2 },
      { label: "Nie dodaję zdjęć", score: 0 },
    ],
    issueLabel: "Brak aktualnych zdjęć — niższy CTR profilu o ~35%",
    improvementLabel: "Stwórz plan regularnego dodawania zdjęć (co tydzień)",
    quickWin: "Dodaj 5–10 zdjęć firmy lub usług już dzisiaj",
  },
  {
    id: 4, category: "Posty", emoji: "📝", weight: 8, critical: false,
    question: "Czy publikujesz posty w Google Business Profile (Aktualności)?",
    options: [
      { label: "Tak, regularnie co tydzień", score: 8 },
      { label: "Raz w miesiącu", score: 4 },
      { label: "Rzadko lub wcale", score: 0 },
    ],
    issueLabel: "Brak postów Google — profil wygląda na nieaktywny",
    improvementLabel: "Zaplanuj cotygodniowe posty w Google Business",
    quickWin: "Opublikuj post z aktualną ofertą lub promocją (15 minut)",
  },
  {
    id: 5, category: "Słowa kluczowe", emoji: "🔑", weight: 10, critical: true,
    question: "Czy świadomie używasz lokalnych słów kluczowych w opisach i postach?",
    options: [
      { label: "Tak, optymalizuję treści pod konkretne frazy lokalne", score: 10 },
      { label: "Trochę, ale bez konkretnej strategii", score: 4 },
      { label: "Nie myślę o słowach kluczowych", score: 0 },
    ],
    issueLabel: "Brak lokalnych fraz kluczowych — Google nie wie co robisz",
    improvementLabel: "Stwórz listę 10–20 lokalnych fraz i wdróż w treściach GBP",
  },
  {
    id: 6, category: "Usługi", emoji: "🛠️", weight: 8, critical: false,
    question: "Czy masz uzupełnioną sekcję Usługi/Produkty w wizytówce?",
    options: [
      { label: "Tak, wszystkie usługi z opisami i cenami", score: 8 },
      { label: "Częściowo uzupełnione", score: 4 },
      { label: "Sekcja pusta lub pominięta", score: 0 },
    ],
    issueLabel: "Pusta sekcja usług — stracone frazy kluczowe long-tail",
    improvementLabel: "Uzupełnij wszystkie usługi z opisami i cenami",
    quickWin: "Dodaj 3–5 głównych usług z krótkim opisem (1 godzina)",
  },
  {
    id: 7, category: "Kategorie", emoji: "📂", weight: 10, critical: true,
    question: "Czy masz poprawnie ustawione kategorie działalności w GBP?",
    options: [
      { label: "Tak, główna + dodatkowe kategorie dopasowane do branży", score: 10 },
      { label: "Tylko kategoria główna", score: 5 },
      { label: "Nie sprawdzałem lub nie wiem czy są właściwe", score: 0 },
    ],
    issueLabel: "Nieprawidłowe kategorie — główny powód niewidoczności w Local Pack",
    improvementLabel: "Zweryfikuj i zaktualizuj kategorie w GBP",
    quickWin: "Sprawdź kategorie top 3 konkurentów i porównaj ze swoimi",
  },
  {
    id: 8, category: "FAQ", emoji: "❓", weight: 5, critical: false,
    question: "Czy masz uzupełnioną sekcję Pytania i Odpowiedzi (Q&A)?",
    options: [
      { label: "Tak, sam dodałem pytania i odpowiedzi", score: 5 },
      { label: "Są pytania od klientów, ale nie odpowiadam na nie", score: 2 },
      { label: "Sekcja jest pusta", score: 0 },
    ],
    issueLabel: "Pusta sekcja Q&A — stracone słowa kluczowe long-tail",
    improvementLabel: "Dodaj 5–10 typowych pytań z wyczerpującymi odpowiedziami",
    quickWin: "Dodaj 5 najczęściej zadawanych pytań z odpowiedziami (45 min)",
  },
  {
    id: 9, category: "Opinie", emoji: "🌟", weight: 8, critical: false,
    question: "Czy aktywnie pozyskujesz nowe opinie od klientów?",
    options: [
      { label: "Tak, mam system: link, SMS, email lub QR kod", score: 8 },
      { label: "Proszę klientów ustnie, ale bez systemu", score: 4 },
      { label: "Nie — czekam aż klienci sami wystawiają opinie", score: 0 },
    ],
    issueLabel: "Brak systemu pozyskiwania opinii — profil nie rośnie",
    improvementLabel: "Stwórz prosty system wysyłania linku do opinii po zakupie",
    quickWin: "Wygeneruj krótki link Google Review i zacznij go udostępniać",
  },
  {
    id: 10, category: "CTA", emoji: "📞", weight: 7, critical: false,
    question: "Czy masz skonfigurowane przyciski CTA odpowiednie dla Twojej branży?",
    options: [
      { label: "Tak: rezerwacja, zamówienie lub oferta — dopasowane do branży", score: 7 },
      { label: "Tylko podstawowy przycisk telefonu", score: 3 },
      { label: "Nie skonfigurowałem żadnych CTA", score: 0 },
    ],
    issueLabel: "Brak CTA — klienci nie wiedzą jak działać z profilem",
    improvementLabel: "Skonfiguruj CTA odpowiednie dla Twojej branży",
    quickWin: "Włącz przycisk rezerwacji lub wiadomości w GBP (10 minut)",
  },
  {
    id: 11, category: "Opis", emoji: "📄", weight: 6, critical: false,
    question: "Czy masz zoptymalizowany opis firmy (750 znaków) w GBP?",
    options: [
      { label: "Tak, pełny opis z lokalnymi frazami kluczowymi", score: 6 },
      { label: "Mam opis, ale bez strategii SEO", score: 3 },
      { label: "Opis jest pusty lub bardzo ogólny", score: 0 },
    ],
    issueLabel: "Niezoptymalizowany opis — 750 znaków bezpłatnego SEO zmarnowane",
    improvementLabel: "Napisz lub przepisz opis firmy z lokalnymi frazami kluczowymi",
    quickWin: "Zaktualizuj opis firmy (750 znaków, frazy lokalne) — 30 minut",
  },
];

const CATEGORY_GROUPS = [
  { label: "Opinie & Recenzje", qIds: [1, 2, 9], max: 28 },
  { label: "Podstawy & Kategorie", qIds: [0, 7], max: 20 },
  { label: "Słowa kluczowe", qIds: [5], max: 10 },
  { label: "Aktywność (posty, zdjęcia)", qIds: [3, 4], max: 16 },
  { label: "Treść profilu", qIds: [6, 8, 11], max: 19 },
  { label: "Konwersja (CTA)", qIds: [10], max: 7 },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function computeScore(answers: Record<number, number>): number {
  return QUESTIONS.reduce((t, q) => {
    const idx = answers[q.id];
    return t + (idx !== undefined ? (q.options[idx]?.score ?? 0) : 0);
  }, 0);
}

function getLevel(score: number) {
  if (score >= 80) return { label: "Excellent", labelPL: "Doskonały", color: "#10b981", desc: "Twoja wizytówka jest świetnie zoptymalizowana!" };
  if (score >= 60) return { label: "Good", labelPL: "Dobry", color: "#3b82f6", desc: "Dobry wynik, ale wciąż tracisz część potencjału lokalnego." };
  if (score >= 40) return { label: "Average", labelPL: "Przeciętny", color: "#f59e0b", desc: "Masz podstawy, ale tracisz większość potencjału z Google Maps." };
  return { label: "Poor", labelPL: "Słaby", color: "#ef4444", desc: "Twoja wizytówka jest praktycznie niewidoczna dla potencjalnych klientów." };
}

function getLeadLoss(score: number) {
  if (score >= 80) return { monthly: "0–3", annual: "do 36" };
  if (score >= 60) return { monthly: "5–12", annual: "60–144" };
  if (score >= 40) return { monthly: "15–30", annual: "180–360" };
  return { monthly: "30–60+", annual: "360–720+" };
}

// ─── Circle Gauge ─────────────────────────────────────────────────────────────

function CircleGauge({ score, color }: { score: number; color: string }) {
  const [pct, setPct] = useState(0);
  const r = 68;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;

  useEffect(() => {
    const t = setTimeout(() => setPct(score), 150);
    return () => clearTimeout(t);
  }, [score]);

  return (
    <div className="relative w-48 h-48 mx-auto">
      <svg viewBox="0 0 160 160" className="w-full h-full -rotate-90">
        <circle cx="80" cy="80" r={r} fill="none" stroke="#f3f4f6" strokeWidth="14" />
        <circle
          cx="80" cy="80" r={r} fill="none"
          stroke={color} strokeWidth="14" strokeLinecap="round"
          strokeDasharray={`${dash} ${circ}`}
          style={{ transition: "stroke-dasharray 1.4s cubic-bezier(0.4,0,0.2,1)" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-bold text-ink">{score}</span>
        <span className="text-xs text-zinc-400 uppercase tracking-widest font-semibold">/ 100</span>
      </div>
    </div>
  );
}

// ─── Intro ────────────────────────────────────────────────────────────────────

function IntroContent({ onStart }: { onStart: () => void }) {
  const features = [
    { emoji: "📊", title: "Wynik 0–100", desc: "Konkretna liczba pokazująca jak bardzo zoptymalizowana jest Twoja wizytówka." },
    { emoji: "⚠️", title: "Krytyczne błędy", desc: "Lista problemów, które blokują Cię przed wyświetlaniem w Local Pack Google." },
    { emoji: "⚡", title: "Quick wins", desc: "Działania do wdrożenia dziś, bez kosztów, które od razu poprawiają widoczność." },
    { emoji: "📅", title: "Roadmapa 30 dni", desc: "Konkretny plan działania podzielony na tygodnie — wiesz co robić i kiedy." },
    { emoji: "📉", title: "Strata leadów", desc: "Szacowana liczba klientów, których tracisz miesięcznie przez brak optymalizacji." },
    { emoji: "🤖", title: "Rekomendacje AI", desc: "Dynamiczne wskazówki generowane na podstawie Twoich odpowiedzi." },
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <CatWatermark />
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand mb-6">Bezpłatne narzędzie AI</span>
              <h1 className="text-4xl sm:text-5xl font-bold text-ink leading-tight mb-6">
                Audyt widoczności{" "}
                <span className="text-brand">wizytówki Google.</span>
              </h1>
              <p className="text-zinc-500 text-lg leading-relaxed mb-8">
                Odpowiedz na 12 pytań i dowiedz się, ile klientów tracisz miesięcznie przez nieoptymalizowaną wizytówkę. Pełny raport z priorytetami i planem działania — bez rejestracji, bez kosztów.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={onStart}
                  className="inline-flex items-center gap-2.5 bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl transition-colors duration-200"
                >
                  Sprawdź swój wynik
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                <Link
                  href="/checklista-wizytowki-google"
                  className="inline-block border border-border text-ink hover:border-brand hover:text-brand font-semibold px-8 py-4 rounded-xl transition-colors duration-200"
                >
                  Checklista GBP
                </Link>
              </div>
            </div>
            <div className="bg-surface rounded-3xl p-8 border border-border">
              <p className="text-xs font-bold tracking-widest uppercase text-zinc-400 mb-6">Co otrzymasz po audycie</p>
              <div className="space-y-5">
                {[
                  { bold: "Wynik 0–100", rest: " — konkretna liczba pokazująca jak bardzo zoptymalizowana jest Twoja wizytówka." },
                  { bold: "Krytyczne błędy", rest: " — lista problemów blokujących Cię przed wyświetlaniem w Local Pack Google." },
                  { bold: "Quick wins na dziś", rest: " — działania do wdrożenia bez kosztów, które od razu poprawiają widoczność." },
                  { bold: "Roadmapa 30 dni", rest: " — konkretny plan działania podzielony na tygodnie." },
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

      {/* Features */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">Co otrzymasz</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug">
              Pełny raport{" "}
              <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">w 3 minuty</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-7 border border-border hover:border-brand hover:shadow-lg transition-all duration-200">
                <div className="text-2xl mb-4">{f.emoji}</div>
                <h3 className="font-bold text-ink mb-2">{f.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={onStart}
              className="inline-flex items-center gap-2.5 bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl transition-colors duration-200"
            >
              Rozpocznij audyt — to zajmie 3 minuty
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <p className="text-xs text-zinc-400 mt-3">Bez rejestracji · Bez podawania danych · 100% anonimowo</p>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Quiz ─────────────────────────────────────────────────────────────────────

function QuizContent({
  question, questionIndex, totalQuestions, selected, liveScore,
  onSelect, onNext, onBack,
}: {
  question: Question; questionIndex: number; totalQuestions: number;
  selected: number | undefined; liveScore: number;
  onSelect: (i: number) => void; onNext: () => void; onBack: () => void;
}) {
  const progress = ((questionIndex + 1) / totalQuestions) * 100;
  const isLast = questionIndex === totalQuestions - 1;

  return (
    <section className="py-16 bg-surface min-h-[calc(100vh-5rem)]">
      <div className="max-w-xl mx-auto px-6">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-2.5">
            <button onClick={onBack} className="flex items-center gap-1.5 hover:text-brand transition-colors font-medium">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Wróć
            </button>
            <span className="font-medium">Pytanie {questionIndex + 1} z {totalQuestions}</span>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="font-bold text-ink">Score: {liveScore}/100</span>
            </div>
          </div>
          <div className="h-2 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-brand rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-border p-7 sm:p-8 mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand mb-3 block">{question.category}</span>

          <div className="flex items-start gap-3 mb-5">
            <span className="text-xl mt-0.5">{question.emoji}</span>
            <h2 className="text-lg sm:text-xl font-bold text-ink leading-snug">{question.question}</h2>
          </div>

          {question.critical && (
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 mb-5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              Kluczowy czynnik rankingowy GBP
            </div>
          )}

          <div className="space-y-2.5">
            {question.options.map((opt, idx) => {
              const isSelected = selected === idx;
              return (
                <button
                  key={idx}
                  onClick={() => onSelect(idx)}
                  className={`w-full text-left flex items-center gap-3 p-4 rounded-xl border transition-all duration-150 ${
                    isSelected
                      ? "border-brand bg-brand/5 text-ink"
                      : "border-border bg-surface text-zinc-600 hover:border-brand/50 hover:bg-white"
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                    isSelected ? "border-brand bg-brand" : "border-zinc-300"
                  }`}>
                    {isSelected && (
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                    )}
                  </div>
                  <span className="text-sm font-medium">{opt.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <button
          onClick={onNext}
          disabled={selected === undefined}
          className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-200 ${
            selected !== undefined
              ? "bg-brand hover:bg-brand-dark text-white"
              : "bg-border text-zinc-400 cursor-not-allowed"
          }`}
        >
          {isLast ? "Zobacz pełny raport →" : "Następne pytanie →"}
        </button>
      </div>
    </section>
  );
}

// ─── Results ──────────────────────────────────────────────────────────────────

function ResultsContent({ answers, score }: { answers: Record<number, number>; score: number }) {
  const level = getLevel(score);
  const leadLoss = getLeadLoss(score);
  const visibilityPct = Math.round(score * 0.7 + 8);

  const criticalIssues = QUESTIONS.filter(q => {
    const idx = answers[q.id];
    return q.critical && idx !== undefined && q.options[idx].score < q.weight * 0.6;
  });
  const warnings = QUESTIONS.filter(q => {
    const idx = answers[q.id];
    return !q.critical && idx !== undefined && q.options[idx].score < q.weight * 0.5;
  });
  const successes = QUESTIONS.filter(q => {
    const idx = answers[q.id];
    return idx !== undefined && q.options[idx].score >= q.weight * 0.8;
  });
  const quickWins = QUESTIONS.filter(q => {
    const idx = answers[q.id];
    return q.quickWin && idx !== undefined && q.options[idx].score < q.weight * 0.6;
  }).slice(0, 4);

  const biggestLoss = [...QUESTIONS].sort((a, b) => {
    const aIdx = answers[a.id] ?? 0;
    const bIdx = answers[b.id] ?? 0;
    return (b.weight - (b.options[bIdx]?.score ?? 0)) - (a.weight - (a.options[aIdx]?.score ?? 0));
  })[0];
  const biggestLossAmt = biggestLoss.weight - (biggestLoss.options[answers[biggestLoss.id] ?? 0]?.score ?? 0);

  const catData = CATEGORY_GROUPS.map(g => {
    const actual = g.qIds.reduce((s, id) => {
      const q = QUESTIONS.find(q => q.id === id)!;
      const idx = answers[id];
      return s + (idx !== undefined ? q.options[idx].score : 0);
    }, 0);
    return { label: g.label, pct: Math.round((actual / g.max) * 100) };
  });

  const roadmap = [
    {
      num: "01", phase: "Tydzień 1–2", tag: "Fundament",
      items: criticalIssues.length > 0
        ? criticalIssues.slice(0, 3).map(q => q.improvementLabel)
        : ["Audyt i weryfikacja danych NAP", "Sprawdź i zaktualizuj kategorie GBP"],
    },
    {
      num: "02", phase: "Tydzień 2–3", tag: "Aktywność",
      items: warnings.length > 0
        ? warnings.slice(0, 3).map(q => q.improvementLabel)
        : ["Wdróż plan cotygodniowych postów", "Zacznij systematycznie dodawać zdjęcia"],
    },
    {
      num: "03", phase: "Tydzień 3–4", tag: "Wzrost",
      items: ["Wdróż system pozyskiwania opinii", "Zoptymalizuj opis i usługi pod frazy lokalne", "Monitoruj statystyki i iteruj strategię"],
    },
  ];

  return (
    <>
      {/* Score hero */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-brand font-bold text-sm uppercase tracking-widest mb-4">Twój wynik</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-ink leading-snug mb-12">
            Audyt widoczności{" "}
            <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">wizytówki Google</span>
          </h1>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Gauge card */}
            <div className="bg-surface rounded-2xl border border-border p-8 flex flex-col items-center text-center">
              <CircleGauge score={score} color={level.color} />
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest" style={{ color: level.color, backgroundColor: `${level.color}15`, border: `1px solid ${level.color}35` }}>
                {level.labelPL} · {level.label}
              </div>
              <p className="text-sm text-zinc-500 mt-3 leading-relaxed">{level.desc}</p>
            </div>

            {/* Metric cards */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              <div className="bg-surface rounded-2xl border border-border p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Widoczność lokalna</p>
                <p className="text-4xl font-bold text-ink mb-1">{visibilityPct}%</p>
                <p className="text-xs text-zinc-400 mb-3">szacowany zasięg organiczny</p>
                <div className="h-2 bg-border rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-1000 delay-300" style={{ width: `${visibilityPct}%`, backgroundColor: level.color }} />
                </div>
              </div>

              <div className="bg-red-50 rounded-2xl border border-red-200 p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2">Strata leadów / miesiąc</p>
                <p className="text-4xl font-bold text-red-500 mb-1">{leadLoss.monthly}</p>
                <p className="text-xs text-red-400 mb-3">szacowani utraceni klienci</p>
                <p className="text-xs text-red-300">~{leadLoss.annual} rocznie</p>
              </div>

              <div className="bg-surface rounded-2xl border border-border p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Krytyczne błędy</p>
                <p className="text-4xl font-bold mb-1" style={{ color: criticalIssues.length > 0 ? "#ef4444" : "#10b981" }}>
                  {criticalIssues.length}
                </p>
                <p className="text-xs text-zinc-400">wymagają natychmiastowej uwagi</p>
              </div>

              <div className="bg-surface rounded-2xl border border-border p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Quick wins</p>
                <p className="text-4xl font-bold text-ink mb-1">{quickWins.length}</p>
                <p className="text-xs text-zinc-400">do wdrożenia w ciągu 24h — bez kosztów</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category breakdown */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">Szczegóły</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug">
              Wynik według{" "}
              <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">kategorii</span>
            </h2>
          </div>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-border p-8 space-y-5">
            {catData.map(({ label, pct }) => {
              const barColor = pct >= 70 ? "#10b981" : pct >= 40 ? "#f59e0b" : "#ef4444";
              return (
                <div key={label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium text-zinc-600">{label}</span>
                    <span className="text-sm font-bold text-ink">{pct}%</span>
                  </div>
                  <div className="h-2.5 bg-surface rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-700 delay-200" style={{ width: `${pct}%`, backgroundColor: barColor }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Course CTA */}
      <div className="bg-white border-y border-brand/15 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row overflow-hidden rounded-2xl border-2 border-brand/25 shadow-lg">
            <div className="lg:w-72 shrink-0 relative">
              <img
                src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80&fit=crop&crop=center"
                alt="Kurs wizytówka Google Business Profile"
                className="w-full h-56 lg:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r" />
              <div className="absolute bottom-4 left-4 lg:hidden">
                <span className="inline-block text-xs font-bold uppercase tracking-widest bg-brand text-white px-2.5 py-1 rounded-md">Kurs online</span>
              </div>
            </div>
            <div className="flex-1 p-8 lg:p-10 bg-brand/3">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <span className="hidden lg:inline-block text-xs font-bold uppercase tracking-widest bg-brand text-white px-2.5 py-1 rounded-md mb-3">Kurs online</span>
                  <h3 className="text-xl lg:text-2xl font-bold text-ink leading-snug">
                    Wizytówka stoi w miejscu –<br className="hidden sm:block" /> co zrobić gdy wydaje nam się,<br className="hidden sm:block" /> że zrobiliśmy wszystko?
                  </h3>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-3xl font-black text-brand leading-none">500 zł</p>
                  <p className="text-xs text-zinc-400 mt-1">brutto · jednorazowo</p>
                </div>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed mb-5">
                Uzupełniłeś opis, masz zdjęcia, zbierasz opinie — a wizytówka <strong className="font-semibold text-ink">wciąż nie rośnie</strong>. Ten kurs pokazuje <strong className="font-semibold text-ink">dokładnie co blokuje algorytm</strong> i jak to naprawić krok po kroku. Bez domysłów, bez ogólnych porad — <strong className="font-semibold text-ink">konkretne działania na Twoją sytuację</strong>.
              </p>
              <div className="flex flex-wrap gap-3 mb-6 text-xs text-zinc-500">
                {["Dostęp na zawsze", "Materiały do pobrania", "Przykłady z realnych wizytówek", "Aktualizacje w cenie"].map(f => (
                  <div key={f} className="flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                    {f}
                  </div>
                ))}
              </div>
              <Link
                href="/kursy/wizytowka-stoi-w-miejscu"
                className="inline-flex items-center gap-2.5 bg-brand hover:bg-brand-dark text-white font-bold px-7 py-4 rounded-xl transition-colors duration-200 text-sm"
              >
                Kup kurs za 500 zł
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Critical issues */}
      {criticalIssues.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-red-500 mb-4">Pilne</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug">
                Krytyczne{" "}
                <span className="inline-block bg-red-500 text-white px-4 py-1 rounded-lg">błędy ({criticalIssues.length})</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {criticalIssues.map(q => (
                <div key={q.id} className="bg-red-50 rounded-2xl border border-red-200 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{q.emoji}</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-red-500">{q.category}</span>
                  </div>
                  <p className="font-semibold text-red-700 text-sm mb-1">{q.issueLabel}</p>
                  <p className="text-xs text-red-400">Czynnik krytyczny · maks. -{q.weight} pkt potencjału</p>
                </div>
              ))}
            </div>

            {/* Biggest loss callout */}
            {biggestLossAmt > 0 && (
              <div className="max-w-4xl mx-auto mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 text-lg">⚡</div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-1">Największa strata potencjału</p>
                  <p className="font-semibold text-amber-800 text-sm">{biggestLoss.issueLabel}</p>
                  <p className="text-xs text-amber-500 mt-1">Ten obszar kosztuje Cię -{biggestLossAmt} pkt. To Twój priorytet nr 1.</p>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Successes + Quick wins */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {successes.length > 0 && (
              <div>
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">Co robisz dobrze</span>
                <h2 className="text-2xl font-bold text-ink mb-6">
                  Twoje <span className="inline-block bg-brand text-white px-3 py-0.5 rounded-lg">mocne strony</span>
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {successes.map(q => (
                    <div key={q.id} className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                      {q.emoji} {q.category}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {quickWins.length > 0 && (
              <div>
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">Działaj teraz</span>
                <h2 className="text-2xl font-bold text-ink mb-6">
                  Quick wins —{" "}
                  <span className="inline-block bg-brand text-white px-3 py-0.5 rounded-lg">zrób to dziś</span>
                </h2>
                <div className="space-y-3">
                  {quickWins.map(q => (
                    q.quickWin && (
                      <div key={q.id} className="flex items-start gap-3 bg-white rounded-xl border border-border p-4">
                        <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center shrink-0 text-sm">{q.emoji}</div>
                        <span className="text-sm text-zinc-600 leading-relaxed">{q.quickWin}</span>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">Plan działania</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug">
              Roadmapa{" "}
              <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">30 dni</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {roadmap.map((phase, i) => {
              const colors = ["#ef4444", "#f59e0b", "#10b981"];
              const col = colors[i];
              return (
                <div key={i} className="relative bg-surface rounded-2xl p-7 border border-border hover:border-brand hover:shadow-lg transition-all duration-200">
                  <div className="absolute top-4 right-5 text-[4rem] font-bold leading-none text-brand/8 select-none pointer-events-none">{phase.num}</div>
                  <div className="w-10 h-0.5 mb-5 rounded-full" style={{ backgroundColor: col }} />
                  <p className="text-xs font-semibold text-zinc-400 mb-1">{phase.phase}</p>
                  <h3 className="text-base font-bold text-ink mb-4">{phase.tag}</h3>
                  <div className="space-y-2.5">
                    {phase.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-2 text-sm text-zinc-500">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: col }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Recommendations */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">Analiza AI</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug mb-8">
              Rekomendacje dla{" "}
              <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">Twojego profilu</span>
            </h2>
            <div className="space-y-5">
              <p className="text-zinc-500 leading-relaxed border-l-2 border-brand/20 pl-4">
                {score < 50
                  ? <>Twój profil zdobył tylko <strong className="font-semibold text-ink">{score}/100 punktów</strong>. Google prawdopodobnie nie wyświetla Cię w <strong className="font-semibold text-ink">Local Pack</strong> dla większości fraz. Priorytetem jest naprawienie <strong className="font-semibold text-ink">{criticalIssues.length} krytycznych obszarów</strong> — zanim skupisz się na czymkolwiek innym.</>
                  : score < 75
                  ? <>Wynik <strong className="font-semibold text-ink">{score}/100</strong> oznacza solidne podstawy, ale wciąż tracisz klientów szukających Twoich usług w Google Maps. Skupienie się na <strong className="font-semibold text-ink">aktywności profilu</strong> może podwoić Twoją widoczność w ciągu <strong className="font-semibold text-ink">60 dni</strong>.</>
                  : <>Dobry wynik <strong className="font-semibold text-ink">({score}/100)</strong> świadczy o świadomym podejściu do GBP. Czas na zaawansowaną optymalizację — <strong className="font-semibold text-ink">content marketing lokalny</strong> i systematyczna praca nad <strong className="font-semibold text-ink">opiniami</strong> to Twoja przewaga konkurencyjna.</>}
              </p>
              <p className="text-zinc-500 leading-relaxed border-l-2 border-brand/20 pl-4">
                {criticalIssues.length > 2
                  ? <>Masz zbyt wiele krytycznych problemów, żeby naprawiać je jednocześnie. Zacznij od <strong className="font-semibold text-ink">kategorii i strony www</strong> — bez tego fundamentu reszta i tak nie da wymiernych efektów.</>
                  : quickWins.length > 0
                  ? <>Masz <strong className="font-semibold text-ink">{quickWins.length} szybkie działania</strong> do wdrożenia bez kosztów i w ciągu <strong className="font-semibold text-ink">24 godzin</strong>. To najprostsza droga do natychmiastowego wzrostu widoczności — zacznij właśnie tam.</>
                  : <>Twój profil jest dobrze skonfigurowany w podstawowych aspektach. Kluczem teraz jest <strong className="font-semibold text-ink">systematyczność</strong> — regularność postów, zdjęć i pozyskiwania opinii utrzyma i poprawi Twoją pozycję.</>}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-ink text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">Następny krok</span>
              <h2 className="text-3xl sm:text-4xl font-bold leading-snug mb-6">
                Gotowi, żeby poprawić wynik{" "}
                <span className="text-brand">do 90+?</span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                Zajmujemy się optymalizacją wizytówek Google Business Profile dla lokalnych firm. Wiemy dokładnie, które z tych{" "}
                {criticalIssues.length > 0 ? <strong className="text-white">{criticalIssues.length} krytycznych błędów</strong> : "obszarów"}{" "}
                naprawić jako pierwsze, żeby jak najszybciej zobaczyć efekty w Google Maps.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2.5 bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl transition-colors duration-200"
                >
                  Bezpłatna konsultacja
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <Link
                  href="/pozycjonowanie-wizytowki-google"
                  className="inline-block border border-white/20 text-white hover:border-brand hover:text-brand font-semibold px-8 py-4 rounded-xl transition-colors duration-200"
                >
                  Nasza oferta
                </Link>
              </div>
              <p className="text-white/40 text-xs mt-4">Elastyczna umowa · Bez długoletnich zobowiązań · Odpowiadamy w 24h</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 flex flex-col gap-6">
              <p className="text-white/80 leading-relaxed text-sm">
                Nie masz czasu żeby samodzielnie wdrażać wszystkich zmian? Przejmiemy optymalizację Twojej wizytówki od A do Z — od kategorii, przez opinie, po regularne posty i zdjęcia.
              </p>
              <Link
                href="/pozycjonowanie-wizytowki-google"
                className="inline-flex items-center gap-2.5 bg-brand hover:bg-brand-dark text-white font-bold px-6 py-4 rounded-xl transition-colors duration-200 text-sm w-fit"
              >
                Pozycjonowanie wizytówki Google
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <p className="text-white/40 text-xs">Pierwsze efekty widać już po kilku tygodniach</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function GBPScorePage() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const liveScore = useMemo(() => computeScore(answers), [answers]);

  function handleSelect(idx: number) {
    setAnswers(prev => ({ ...prev, [QUESTIONS[currentQuestion].id]: idx }));
  }

  function goNext() {
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(q => q + 1);
    } else {
      setPhase("results");
    }
  }

  function goBack() {
    if (currentQuestion > 0) {
      setCurrentQuestion(q => q - 1);
    } else {
      setPhase("intro");
    }
  }

  return (
    <div className="pt-20">
      {phase === "intro" && <IntroContent onStart={() => setPhase("quiz")} />}
      {phase === "quiz" && (
        <QuizContent
          question={QUESTIONS[currentQuestion]}
          questionIndex={currentQuestion}
          totalQuestions={QUESTIONS.length}
          selected={answers[QUESTIONS[currentQuestion].id]}
          liveScore={liveScore}
          onSelect={handleSelect}
          onNext={goNext}
          onBack={goBack}
        />
      )}
      {phase === "results" && <ResultsContent answers={answers} score={liveScore} />}
    </div>
  );
}
