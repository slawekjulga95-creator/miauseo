import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meta Ads – reklamy Facebook i Instagram | MiauSEO",
  description: "Kampanie reklamowe na Facebooku i Instagramie. Docieramy do dokładnie tych osób, które powinny znać Twoją firmę — zanim zaczną szukać konkurencji.",
};

const platforms = [
  {
    name: "Facebook",
    color: "bg-blue-50 border-blue-100",
    accent: "text-blue-700",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#1877F2">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    strengths: [
      "Szeroka grupa wiekowa 25–55 lat",
      "Doskonały do remarketing i budowania lejka",
      "Formaty: wideo, karuzele, lead ads, events",
      "Najlepszy do ofert B2C z dłuższym procesem decyzyjnym",
    ],
  },
  {
    name: "Instagram",
    color: "bg-pink-50 border-pink-100",
    accent: "text-pink-700",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
    strengths: [
      "Młodsza demografika 18–40 lat",
      "Silny wpływ wizualny — idealny dla produktów i usług lifestyle",
      "Formaty: Reels, Stories, Shopping",
      "Świetny do budowania rozpoznawalności marki lokalnej",
    ],
  },
];

const process = [
  {
    title: "Analiza grupy docelowej",
    desc: "Definiujemy kto jest Twoim idealnym klientem. Wiek, lokalizacja, zainteresowania, zachowania zakupowe — Meta daje dostęp do danych, których żadne inne medium nie ma.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: "Strategia lejka sprzedażowego",
    desc: "Zimny ruch → zaangażowanie → konwersja → retencja. Budujesz relację z potencjalnym klientem zanim pojawi się u Ciebie z portfelem. To działa inaczej niż Google Ads i wymaga innego podejścia.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
      </svg>
    ),
  },
  {
    title: "Produkcja kreacji",
    desc: "Piszemy copy dostosowane do platformy i etapu lejka. Doradzamy co do formatu wideo, grafik i CTA. Nie wymagamy gotowych materiałów — pomagamy je zaplanować.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    title: "Testy A/B i optymalizacja",
    desc: "Testujemy różne nagłówki, obrazy i grupy docelowe. Wygrywający wariant dostaje więcej budżetu. Przegrywający jest wyłączany. Bez sentymentów, tylko dane.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
  {
    title: "Raportowanie i rekomendacje",
    desc: "Co miesiąc dostajesz raport z wynikami i konkretnymi rekomendacjami na kolejny miesiąc. Nie tylko liczby — interpretacja i plan.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
];

const usecases = [
  { title: "Salon fryzjerski / kosmetyczny", desc: "Reklamy lokalne na kobiety 20–45 lat w promieniu 10 km. Promocje sezonowe, Stories z efektami przed/po." },
  { title: "Restauracja / kawiarnia", desc: "Budowanie społeczności, event ads na specjalne okazje, retargeting do osób które oglądały menu." },
  { title: "Gabinet medyczny / fizjoterapia", desc: "Lead ads zbierające dane kontaktowe zainteresowanych, targetowanie po symptomach i zainteresowaniach zdrowiem." },
  { title: "Sklep e-commerce", desc: "Dynamic Product Ads — automatyczne reklamy z katalogu produktów. Remarketing porzuconych koszyków." },
  { title: "Usługi B2B", desc: "LinkedIn to nie jedyna opcja. Facebook Ads do właścicieli firm, menadżerów i decydentów jest często tańszy i skuteczniejszy." },
  { title: "Edukacja i kursy online", desc: "Lejek webinarowy lub lead magnet: zimny ruch → zapis na darmowe szkolenie → oferta płatna. Sprawdzony model." },
];

export default function MetaAdsPage() {
  return (
    <main className="pt-20">

      {/* ── Hero ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand mb-6">Meta Ads</span>
              <h1 className="text-4xl sm:text-5xl font-bold text-ink leading-tight mb-6">
                Twoi klienci są na Facebooku i Instagramie.{" "}
                <span className="text-brand">Czy Twoje reklamy też?</span>
              </h1>
              <p className="text-zinc-500 text-lg leading-relaxed mb-8">
                Meta Ads to nie wrzucanie postów z przyciskiem "Promuj". To precyzyjne docieranie do konkretnych osób w konkretnym momencie ich życia — gdy są gotowi na Twoją ofertę.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/kontakt" className="inline-block bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl transition-colors duration-200">
                  Bezpłatna konsultacja
                </Link>
                <Link href="#platformy" className="inline-block border border-border text-ink hover:border-brand hover:text-brand font-semibold px-8 py-4 rounded-xl transition-colors duration-200">
                  Facebook vs Instagram
                </Link>
              </div>
            </div>
            <div className="bg-surface rounded-3xl p-8 border border-border">
              <p className="text-xs font-bold tracking-widest uppercase text-zinc-400 mb-6">Dlaczego Meta Ads, nie tylko Google?</p>
              <div className="space-y-5">
                {[
                  { bold: "Aktywne docieranie,", rest: " nie czekanie aż klient sam zaszkuka. Budujesz świadomość zanim pojawi się potrzeba." },
                  { bold: "Targetowanie demograficzne", rest: " — wiek, lokalizacja, zainteresowania, stan cywilny, zachowania zakupowe. Precyzja nieosiągalna w żadnym innym medium offline." },
                  { bold: "Koszty kontaktu", rest: " często 5–10x niższe niż w Google Ads dla brandowych zapytań." },
                  { bold: "Remarketing wizualny", rest: " — wracasz do osób które już Cię widziały, z innym przekazem, aż do decyzji zakupowej." },
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

      {/* ── Platformy ── */}
      <section id="platformy" className="py-20 px-6 bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand mb-4">Platformy</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink">Facebook i Instagram — dwa narzędzia, jedna strategia.</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {platforms.map((p) => (
              <div key={p.name} className={`border rounded-3xl p-8 ${p.color}`}>
                <div className="flex items-center gap-3 mb-6">
                  {p.icon}
                  <h3 className={`text-xl font-bold ${p.accent}`}>{p.name}</h3>
                </div>
                <ul className="space-y-3">
                  {p.strengths.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-sm text-zinc-600">
                      <span className="shrink-0 mt-1 w-4 h-4 rounded-full bg-white flex items-center justify-center">
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proces ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand mb-4">Jak pracujemy</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug">Proces, który daje przewidywalne wyniki.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, i) => (
              <div key={i} className="flex flex-col gap-4 border border-border rounded-2xl p-6 hover:border-brand/30 hover:shadow-sm transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-bold text-ink">{item.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed flex-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case uses ── */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand mb-4">Dla jakich branż</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug">Kto zyskuje najwięcej na Meta Ads.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {usecases.map((item) => (
              <div key={item.title} className="bg-white border border-border rounded-2xl p-5 hover:border-brand/30 transition-colors duration-200">
                <h3 className="font-bold text-ink mb-2 text-sm">{item.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-ink">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug mb-4">
              Chcesz wiedzieć czy Meta Ads ma sens dla Twojego biznesu?
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              Nie każda firma powinna wydawać na Facebooka. Powiem Ci wprost czy Twój produkt i grupę docelową warto tam testować — zanim zaproponuję współpracę.
            </p>
          </div>
          <div className="shrink-0">
            <Link href="/kontakt" className="inline-block bg-brand hover:bg-brand-dark text-white font-bold px-10 py-5 rounded-xl transition-colors duration-200 text-lg">
              Porozmawiajmy
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
