"use client";

import { useState } from "react";
import Link from "next/link";

interface CheckItem {
  id: number;
  task: string;
  hint: string;
  tip: string;
}

interface Section {
  title: string;
  priority: "A" | "B" | "C" | "D";
  items: CheckItem[];
}

const sections: Section[] = [
  {
    title: "Dane podstawowe",
    priority: "A",
    items: [
      { id: 1, task: "Kategoria główna wybrana prawidłowo", hint: "Sprawdź kategorie top 3 konkurencji w Mapach Google", tip: "Najważniejszy sygnał trafności w całym algorytmie. Kategoria musi opisywać Twój biznes konkretnie, nie ogólnie. Zbyt szeroka kategoria (np. 'Firma usługowa') zamiast konkretnej (np. 'Hydraulik') = niewidoczność na kluczowe frazy." },
      { id: 2, task: "Profil zweryfikowany przez Google", hint: "Weryfikacja przez SMS, wideorozmowę lub pocztówkę", tip: "Niezweryfikowana wizytówka ma mocno ograniczoną widoczność w wynikach lokalnych. Bez weryfikacji nie możesz też w pełni edytować wszystkich pól profilu." },
      { id: 3, task: "Profil wypełniony w 100%", hint: "Sprawdź Completeness Score w panelu GBP", tip: "Brakujące pola Google interpretuje jako sygnał porzuconego profilu. Uzupełnij absolutnie każde dostępne pole — opis, godziny, usługi, zdjęcia, atrybuty." },
      { id: 4, task: "Nazwa firmy zgodna z regulaminem", hint: "Oficjalna nazwa — bez dodatkowych słów kluczowych", tip: "Celowe dodawanie słów kluczowych do nazwy firmy narusza regulamin Google i może skutkować zawieszeniem profilu lub automatycznym usunięciem nazwy przez algorytm." },
      { id: 5, task: "Adres poprawny i aktualny", hint: "Identyczny z dokumentami rejestrowymi i stroną www", tip: "Adres musi być identyczny wszędzie w sieci. Nawet drobna różnica (ul. vs ulica, brak numeru lokalu) tworzy rozbieżność NAP, która dezorientuje algorytm Google." },
      { id: 6, task: "Numer telefonu aktualny", hint: "Numer lokalny, aktywny w godzinach otwarcia", tip: "Sprawdź czy numer telefonu odpowiada bezpośrednio do firmy. Numery call center lub infolinii ogólnopolskich mogą osłabiać sygnał lokalności profilu." },
      { id: 7, task: "NAP spójny w całej sieci", hint: "Audyt: strona www, Panorama Firm, Facebook, Apple Maps", tip: "Nazwa, Adres i Telefon (NAP) muszą być literalnie identyczne w każdym miejscu w internecie — włącznie z formatem numeru telefonu i kolejnością słów w nazwie. Każda rozbieżność to sygnał niespójności dla algorytmu." },
    ],
  },
  {
    title: "Recenzje",
    priority: "A",
    items: [
      { id: 8, task: "Minimum 50 recenzji zebranych", hint: "Poniżej 10 recenzji to poważny handicap rankingowy", tip: "Firmy z 50+ recenzjami statystycznie dominują w Local Pack w większości branż. Liczba recenzji to jeden z najpotężniejszych sygnałów Prominence dla algorytmu Google." },
      { id: 9, task: "Średnia ocena między 4,3 a 4,8", hint: "Poniżej 4,0 drastycznie spada CTR i pozycja", tip: "Ocena poniżej 4,0 to czerwona flaga zarówno dla algorytmu, jak i dla klientów. Zbyt wysoka ocena (5,0) przy małej liczbie opinii może wyglądać podejrzanie i jest mniej wiarygodna." },
      { id: 10, task: "Świeże recenzje w ostatnich 60 dniach", hint: "Cel: minimum 2–4 nowe recenzje miesięcznie", tip: "Google mierzy świeżość (recency) i prędkość przyrostu (velocity) recenzji jako osobne sygnały. Przerwa dłuższa niż 2 miesiące obniża pozycję niezależnie od łącznej liczby opinii." },
      { id: 11, task: "Odpowiedzi na wszystkie recenzje", hint: "Odpowiedź w 48h — personalnie, nie szablonowo", tip: "Google oficjalnie uznaje odpowiedzi właściciela na recenzje za czynnik rankingowy. Brak reakcji na negatywną opinię jest widoczny publicznie i silnie obniża CTR wizytówki." },
      { id: 12, task: "Automatyczny proces zbierania recenzji", hint: "SMS po usłudze, QR kod w lokalu, link w stopce e-mail", tip: "Jednorazowa prośba o opinie nie wystarczy. Potrzebujesz systemu, który bez Twojego zaangażowania regularnie generuje nowe recenzje po każdej zakończonej usłudze." },
    ],
  },
  {
    title: "Treść i zawartość profilu",
    priority: "B",
    items: [
      { id: 13, task: "Opis firmy wypełniony (750 znaków)", hint: "2–3 frazy kluczowe + miasto + specjalizacja w tekście", tip: "750 znaków to bezpośredni sygnał trafności dla algorytmu. Używaj pełnego limitu. Tekst musi brzmieć naturalnie — unikaj upychania fraz kluczowych." },
      { id: 14, task: "Katalog usług uzupełniony z opisami", hint: "Każda usługa = osobna fraza kluczowa; dodaj ceny", tip: "Sekcja usług i produktów to dodatkowe miejsce na słowa kluczowe. Google używa tych danych do dopasowania profilu do szczegółowych zapytań — np. 'wymiana opon Kraków' vs ogólne 'serwis samochodowy'." },
      { id: 15, task: "Godziny otwarcia kompletne i aktualne", hint: "Każdy dzień tygodnia + aktualizacja przed świętami", tip: "Błędne godziny = klienci, którzy przyjadą do zamkniętej firmy = negatywne recenzje. To podwójna kara rankingowa. Aktualizuj godziny specjalne przed każdymi świętami." },
      { id: 16, task: "Sekcja Q&A wypełniona (5–10 pytań)", hint: "Dodaj pytania jako właściciel i sam odpowiedz", tip: "Sekcja Q&A jest indeksowana przez Google. Właściciel może sam dodawać pytania i odpowiedzi — to legalna i skuteczna optymalizacja. Każda odpowiedź może zawierać naturalne słowa kluczowe." },
      { id: 17, task: "Atrybuty profilu uzupełnione", hint: "Parking, płatność kartą, dostępność dla niepełnosprawnych", tip: "Atrybuty pomagają Google dopasować profil do zapytań z filtrem. Nie zaznaczaj nieprawdziwych — klienci mogą je obalić w recenzjach, co szkodzi wiarygodności profilu." },
      { id: 18, task: "Kategorie dodatkowe dodane (max 4–5)", hint: "Sprawdź kategorie używane przez top 3 konkurencji", tip: "Każda kategoria dodatkowa rozszerza zakres fraz, na które możesz być widoczny. Więcej niż 4–5 kategorii może jednak rozmywać sygnały trafności i osłabić profil." },
    ],
  },
  {
    title: "Aktywność profilu",
    priority: "B",
    items: [
      { id: 19, task: "Posty Google publikowane co tydzień", hint: "Minimum 1–2 posty tygodniowo z CTA i zdjęciem", tip: "Regularne posty = sygnał aktywności dla Google. Posty wygasają po 7 dniach — planuj z wyprzedzeniem. Każdy powinien zawierać wezwanie do działania (zadzwoń, umów się, sprawdź ofertę)." },
      { id: 20, task: "Minimum 50 własnych zdjęć w profilu", hint: "Wnętrze, zewnętrze, zespół, realizacje — min. 720×720 px", tip: "Wizytówki z 100+ zdjęciami mają CTR wyższy o 520% niż średnia rynkowa. Zdjęcia muszą być własne i aktualne — nie stockowe. Google może pomijać zdjęcia niskiej jakości." },
      { id: 21, task: "Nowe zdjęcia dodawane co miesiąc", hint: "Cel: 5–10 nowych zdjęć miesięcznie bez przerwy", tip: "Świeżość galerii to osobny sygnał aktywności. Brak nowych zdjęć przez 3+ miesiące jest interpretowany przez algorytm jako nieaktywna wizytówka i może obniżyć pozycję." },
    ],
  },
  {
    title: "Strona internetowa",
    priority: "B",
    items: [
      { id: 22, task: "Strona www podlinkowana w profilu", hint: "Strona z NAP, lokalnymi frazami w H1 i tytule strony", tip: "Google łączy dane z GBP ze stroną www. Strona powinna zawierać adres identyczny z GBP, lokalne słowa kluczowe w tytule strony i nagłówku H1 oraz szybkie ładowanie na urządzeniach mobilnych." },
      { id: 23, task: "Schema LocalBusiness na stronie", hint: "JSON-LD z pełnym NAP i godzinami — waliduj w Rich Results Test", tip: "Dane strukturalne potwierdzają NAP dla Google bez analizy treści strony. Poprawna implementacja może generować rich snippets (oceny gwiazdkowe, godziny, adres) bezpośrednio w wynikach wyszukiwania." },
    ],
  },
  {
    title: "Cytowania lokalne",
    priority: "C",
    items: [
      { id: 24, task: "Wpis w Panorama Firm z identycznym NAP", hint: "Najważniejszy katalog lokalny w Polsce", tip: "Panorama Firm to jeden z najsilniejszych sygnałów cytowania dla polskiego local SEO. NAP musi być literalnie identyczny z profilem GBP — włącznie z formatem numeru telefonu i skrótami (ul. vs ulica)." },
      { id: 25, task: "Wpisy w minimum 5 katalogach ogólnych", hint: "Yelp, Złote Strony, GoWork, e-Mapa i inne", tip: "Każde cytowanie to kolejny głos potwierdzający istnienie firmy w danym miejscu. Jakość i wiarygodność katalogów ma znaczenie — unikaj spamowych serwisów niskiej jakości, które mogą zaszkodzić." },
      { id: 26, task: "Wpisy w katalogach branżowych", hint: "Zidentyfikuj 2–3 serwisy specyficzne dla Twojej branży", tip: "Dla medyków: Znany Lekarz. Dla prawników: e-Prawnik. Dla restauracji: TripAdvisor. Cytowanie z tematycznie powiązanego serwisu branżowego ma większą wagę niż z generycznego katalogu ogólnego." },
    ],
  },
  {
    title: "Zaawansowane",
    priority: "D",
    items: [
      { id: 27, task: "Link do profilu GBP na stronie www i w social media", hint: "Link do maps.google.com lub g.page w stopce strony", tip: "Bezpośrednie linki do Twojego profilu Google Maps wzmacniają sygnał popularności wizytówki. Umieść link w stopce strony, w opisach profili Facebook/Instagram i w mailowej sygnaturze." },
      { id: 28, task: "Monitoring recenzji i wzmianek skonfigurowany", hint: "Google Alerts na nazwę firmy + powiadomienia GBP aktywne", tip: "Szybka reakcja na recenzje (max 48h) to osobny sygnał jakości śledzony przez Google. Wzmianki o firmie w sieci — nawet bez linku — wzmacniają ogólny sygnał Prominence w oczach algorytmu." },
    ],
  },
];

const priorityConfig = {
  A: { bg: "#fee2e2", text: "#b91c1c", label: "A — Krytyczny" },
  B: { bg: "#ffedd5", text: "#c2410c", label: "B — Ważny" },
  C: { bg: "#fef9c3", text: "#a16207", label: "C — Mniej ważny" },
  D: { bg: "#dbeafe", text: "#1d4ed8", label: "D — Mały czynnik" },
} as const;

const totalItems = sections.reduce((sum, s) => sum + s.items.length, 0);

export default function ChecklistaPage() {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const checkedCount = checked.size;
  const progress = Math.round((checkedCount / totalItems) * 100);

  function toggle(id: number) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <main className="pt-20">

      {/* ── Hero ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-brand font-bold text-sm uppercase tracking-widest mb-4">Bezpłatne narzędzie</p>
          <h1 className="text-4xl md:text-5xl font-bold text-ink leading-tight mb-6">
            <span className="inline-block bg-brand text-white px-3 py-1 rounded-lg">Checklista</span>{" "}
            Pozycjonowania<br className="hidden sm:block" /> Wizytówki Google
          </h1>
          <p className="text-zinc-500 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            28 punktów kontrolnych, które decydują o pozycji Twojej firmy w Mapach Google.
            Zaznacz co już masz zrobione. Najedź na{" "}
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-zinc-200 text-zinc-600 text-xs font-bold align-middle">?</span>{" "}
            przy każdym haśle, żeby zobaczyć wskazówkę.
          </p>

          {/* Progress bar */}
          <div className="max-w-sm mx-auto">
            <div className="flex justify-between items-center text-sm font-semibold mb-2">
              <span className="text-ink">Twój postęp</span>
              <span style={{ color: "#FF6A00" }}>{checkedCount}/{totalItems} ukończone</span>
            </div>
            <div className="h-3 bg-zinc-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${progress}%`, backgroundColor: "#FF6A00" }}
              />
            </div>
            <p className="text-xs text-zinc-400 mt-1.5 text-right">{progress}% gotowe</p>
          </div>
        </div>
      </section>

      {/* ── Checklist ── */}
      <section className="py-16 bg-surface">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">

          {/* Legend */}
          <div className="flex flex-wrap gap-2.5 mb-8 justify-center">
            {(Object.keys(priorityConfig) as Array<keyof typeof priorityConfig>).map((key) => (
              <span
                key={key}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                style={{ backgroundColor: priorityConfig[key].bg, color: priorityConfig[key].text }}
              >
                {priorityConfig[key].label}
              </span>
            ))}
          </div>

          {/* Table */}
          <div className="rounded-2xl border border-zinc-200 shadow-sm bg-white">

            {/* Header */}
            <div className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_200px_72px] rounded-t-2xl overflow-hidden bg-zinc-800 text-white">
              <div className="px-5 py-3 text-sm font-semibold">Punkt kontrolny</div>
              <div className="px-5 py-3 text-sm font-semibold hidden md:block">Jak wdrożyć</div>
              <div className="px-5 py-3 text-sm font-semibold text-center">Waga</div>
            </div>

            {sections.map((section, sIdx) => (
              <div key={section.title}>

                {/* Section header */}
                <div className={`px-5 py-2.5 border-t ${sIdx === 0 ? "border-zinc-200" : "border-zinc-200"} bg-zinc-50`}>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">
                    {section.title}
                  </span>
                </div>

                {/* Items */}
                {section.items.map((item) => {
                  const isDone = checked.has(item.id);
                  return (
                    <div
                      key={item.id}
                      className={`grid grid-cols-[1fr_auto] md:grid-cols-[1fr_200px_72px] border-t border-zinc-100 transition-colors duration-150 ${isDone ? "bg-emerald-50/40" : "hover:bg-zinc-50"}`}
                    >
                      {/* Col 1: checkbox + task + tooltip */}
                      <div className="px-5 py-3.5 flex items-start gap-3">
                        <input
                          type="checkbox"
                          id={`item-${item.id}`}
                          checked={isDone}
                          onChange={() => toggle(item.id)}
                          className="mt-0.5 w-4 h-4 cursor-pointer shrink-0 accent-orange-500"
                        />
                        <div className="flex items-start gap-2 flex-1 min-w-0">
                          <label
                            htmlFor={`item-${item.id}`}
                            className={`text-sm cursor-pointer leading-snug transition-colors ${isDone ? "line-through text-zinc-400" : "text-ink font-medium"}`}
                          >
                            {item.task}
                          </label>
                          {/* Tooltip trigger */}
                          <div className="relative group/tip shrink-0 mt-0.5">
                            <button
                              type="button"
                              className="w-4 h-4 rounded-full bg-zinc-200 hover:bg-orange-500 hover:text-white text-zinc-500 text-[10px] font-bold flex items-center justify-center transition-colors cursor-help"
                              aria-label={`Wyjaśnienie: ${item.task}`}
                            >
                              ?
                            </button>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-64 bg-zinc-900 text-white text-xs rounded-xl p-3.5 shadow-2xl opacity-0 pointer-events-none group-hover/tip:opacity-100 transition-opacity duration-150 leading-relaxed">
                              {item.tip}
                              <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-zinc-900" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Col 2: hint (desktop only) */}
                      <div className="px-4 py-3.5 hidden md:flex items-center">
                        <span className="text-xs text-zinc-400 leading-relaxed">{item.hint}</span>
                      </div>

                      {/* Col 3: priority badge */}
                      <div className="px-4 py-3.5 flex items-center justify-center">
                        <span
                          className="inline-block font-bold px-2 py-0.5 rounded text-[11px]"
                          style={{
                            backgroundColor: priorityConfig[section.priority].bg,
                            color: priorityConfig[section.priority].text,
                          }}
                        >
                          {section.priority}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}

            {/* Footer row */}
            <div className="rounded-b-2xl overflow-hidden border-t border-zinc-200 bg-zinc-50 px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-sm text-zinc-500">
                Ukończono <strong className="text-ink">{checkedCount}</strong> z <strong className="text-ink">{totalItems}</strong> punktów
              </p>
              <button
                type="button"
                onClick={() => setChecked(new Set())}
                className="text-xs text-zinc-400 hover:text-zinc-600 underline transition-colors"
              >
                Resetuj postęp
              </button>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <p className="text-zinc-500 text-sm mb-2">
              Nie wiesz jak wdrożyć któryś z punktów? Chcesz żebyśmy zrobili to za Ciebie?
            </p>
            <p className="text-zinc-400 text-xs mb-6">
              Bezpłatna konsultacja — oceniamy wizytówkę i mówimy co wymaga poprawy.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2.5 bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl transition-colors duration-200"
            >
              Umów bezpłatną konsultację
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
