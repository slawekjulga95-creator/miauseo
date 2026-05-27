import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zakres usług – SEO, Google Ads, Meta Ads | MiauSEO",
  description:
    "Pomagamy małym i średnim firmom rosnąć w Google. Wizytówka Google, pozycjonowanie strony, Google Ads, Meta Ads i TikTok Ads – wszystko w jednym miejscu.",
};

const services = [
  {
    href: "/uslugi/wizytowka-google",
    title: "Wizytówka Google",
    tagline: "Lokalna widoczność bez budżetu reklamowego",
    description:
      "Google Business Profile to najszybszy sposób na pojawienie się w wynikach lokalnych. Optymalizujemy Twój profil, dbamy o opinie i aktualizacje, żebyś był widoczny wtedy, gdy klient szuka w pobliżu.",
    bullets: [
      "Pełna konfiguracja i weryfikacja profilu",
      "Optymalizacja pod Local Pack i mapy",
      "Strategia zdobywania opinii",
      "Regularne posty i aktualizacje",
      "Monitoring i raportowanie",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    color: "#FF6A00",
    blogLinks: [
      { href: "/blog/jak-pozycjonowac-wizytowke-google-2026", label: "Jak pozycjonować wizytówkę Google w 2026 roku?" },
      { href: "/blog/nap-wizytowka-google-co-to-jest", label: "NAP w wizytówce Google – czym jest i jak skonfigurować?" },
      { href: "/blog/zdjecia-w-wizytowce-google-ktore-dzialaja", label: "Zdjęcia w wizytówce Google – które naprawdę działają?" },
    ],
  },
  {
    href: "/uslugi/pozycjonowanie-strony",
    title: "Pozycjonowanie strony",
    tagline: "Organiczny ruch, który nie znika po wyłączeniu budżetu",
    description:
      "Budujemy widoczność Twojej strony w Google poprzez audyt techniczny, optymalizację treści i pozyskiwanie wartościowych linków. SEO to inwestycja, która procentuje miesiącami i latami.",
    bullets: [
      "Audyt techniczny i analiza słów kluczowych",
      "Optymalizacja on-page (meta tagi, nagłówki, treści)",
      "Budowa zaplecza linkowego",
      "Tworzenie treści SEO-friendly",
      "Miesięczne raporty pozycji",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    color: "#7c3aed",
    blogLinks: [
      { href: "/blog/ile-kosztuje-pozycjonowanie-strony-internetowej", label: "Ile kosztuje pozycjonowanie strony internetowej w 2026 roku?" },
      { href: "/blog/linki-do-wizytowki-google", label: "Gdzie pozyskiwać linki do wizytówki Google i po co to robić?" },
      { href: "/blog/siedziba-mala-miejscowosc-local-seo", label: "Siedziba w małej miejscowości – jak zdobyć klientów z dużego miasta?" },
    ],
  },
  {
    href: "/uslugi/google-ads",
    title: "Google Ads",
    tagline: "Reklamy widoczne dokładnie wtedy, gdy klient szuka",
    description:
      "Kampanie w sieci wyszukiwania Google trafiają do ludzi z konkretną intencją zakupu. Tworzymy i optymalizujemy kampanie tak, żebyś płacił za kliknięcia, które faktycznie zamieniają się w klientów.",
    bullets: [
      "Kampanie Search, Display i Performance Max",
      "Dobór słów kluczowych i wykluczających",
      "Pisanie skutecznych reklam (A/B testy)",
      "Optymalizacja stawek i budżetu",
      "Śledzenie konwersji i ROAS",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    color: "#0284c7",
    blogLinks: [
      { href: "/blog/reklama-kancelarii-adwokackiej-google", label: "Reklama kancelarii adwokackiej w Google – co wolno, co działa" },
      { href: "/blog/jak-promowac-warsztat-samochodowy-google", label: "Jak promować warsztat samochodowy w Google?" },
      { href: "/blog/czy-wizytowka-google-jest-platna", label: "Czy wizytówka Google jest płatna? Porównanie z reklamami" },
    ],
  },
  {
    href: "/uslugi/meta-ads",
    title: "Meta Ads",
    tagline: "Facebook i Instagram – zasięg tam, gdzie są Twoi klienci",
    description:
      "Reklamy na Facebooku i Instagramie pozwalają precyzyjnie dotrzeć do grupy docelowej po demografii, zainteresowaniach i zachowaniach. Idealnie sprawdzają się przy budowaniu świadomości marki i sprzedaży.",
    bullets: [
      "Kampanie na Facebooku i Instagramie",
      "Targetowanie niestandardowych odbiorców",
      "Retargeting i lookalike audiences",
      "Kreatywne kreacje: Reels, Stories, karuzele",
      "Optymalizacja pod leady lub sprzedaż",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    color: "#db2777",
    blogLinks: [
      { href: "/blog/salon-kosmetyczny-facebook-ads", label: "Salon kosmetyczny i Facebook Ads – jak zarabiać na reklamach Meta?" },
    ],
  },
  {
    href: "/uslugi/tiktok-ads",
    title: "TikTok Ads",
    tagline: "Nowy kanał, niższa konkurencja, młodsza grupa docelowa",
    description:
      "TikTok to najszybciej rosnąca platforma reklamowa z wciąż niedocenioną konkurencją. Tworzymy kampanie wideo skrojone pod algorytm TikToka, które generują zasięg i konwersje przy niższych kosztach niż Meta.",
    bullets: [
      "Kampanie In-Feed Ads i TopView",
      "Spark Ads – promowanie organicznych postów",
      "Tworzenie i doradztwo przy kreacjach wideo",
      "Targetowanie po zainteresowaniach i zachowaniach",
      "Testy A/B i optymalizacja kampanii",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.84 1.55V6.79a4.85 4.85 0 0 1-1.07-.1z" />
      </svg>
    ),
    color: "#111111",
    blogLinks: [],
  },
];

const whyUs = [
  {
    title: "Małe firmy to nasza specjalność",
    body: "Nie jesteśmy agencją korporacyjną obsługującą setki klientów. Skupiamy się na małych i średnich firmach lokalnych, które naprawdę potrzebują wyników — nie pięknych slajdów.",
  },
  {
    title: "Mierzalne wyniki, nie obietnice",
    body: "Każde działanie rozliczamy z efektów. Widzisz dokładnie, ile sesji, leadów i klientów przyniosły Twoje kampanie i pozycjonowanie.",
  },
  {
    title: "Bez długoterminowych umów na start",
    body: "Zaczynamy bez wielomiesięcznych zobowiązań. Zostaniesz z nami, bo będziesz zadowolony — nie dlatego, że musisz.",
  },
  {
    title: "Jeden opiekun, pełna komunikacja",
    body: "Masz jeden kontakt do opiekuna, który zna Twój biznes od podszewki. Żadnych przekierowań między działami i tłumaczenia sprawy od nowa.",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">
            {/* Left — heading */}
            <div className="lg:w-5/12 shrink-0">
              <p className="text-brand font-bold text-sm uppercase tracking-widest mb-4">Zakres usług</p>
              <h1 className="text-4xl md:text-5xl font-bold text-ink leading-tight mb-8">
                <span className="bg-brand text-white px-2 py-0.5 rounded-md">Wszystko</span>, czego<br />
                potrzebuje <span className="text-brand">Twoja firma.</span>
              </h1>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kontakt"
                  className="inline-block bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl transition-colors duration-200"
                >
                  Bezpłatna konsultacja
                </Link>
                <Link
                  href="/blog"
                  className="inline-block border border-border text-ink hover:border-brand hover:text-brand font-semibold px-8 py-4 rounded-xl transition-colors duration-200"
                >
                  Czytaj blog
                </Link>
              </div>
            </div>

            {/* Right — text */}
            <div className="lg:w-7/12 space-y-5 text-zinc-600 text-[17px] leading-relaxed border-l-0 lg:border-l-2 lg:border-brand/20 lg:pl-14">
              <p>
                Pomagamy małym i średnim firmom <strong className="text-ink font-semibold">rosnąć w Google</strong> — od wizytówki Google Business Profile po kampanie wideo na TikToku. Dobieramy narzędzia do Twoich celów i budżetu.
              </p>
              <p>
                Mamy za sobą <strong className="text-ink font-semibold">11 lat doświadczenia w marketingu lokalnym</strong>. Wiemy, co działa dla fryzjera, warsztatu, kancelarii i hotelu — i co sprawdza się tylko na papierze.
              </p>
              <p>
                Każda współpraca zaczyna się od <strong className="text-ink font-semibold">bezpłatnej konsultacji</strong>. Analizujemy, gdzie tracisz klientów i proponujemy konkretny plan — bez zbędnych obietnic i długoletnich umów.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-surface py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-8">
          {services.map((service, i) => (
            <div
              key={service.href}
              className="bg-white rounded-3xl border border-border overflow-hidden hover:border-brand hover:shadow-xl transition-all duration-300"
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                {/* Content */}
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-4 mb-5">
                    <span
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-white"
                      style={{ backgroundColor: service.color }}
                    >
                      {service.icon}
                    </span>
                    <div>
                      <h2 className="font-display text-2xl font-black text-ink">{service.title}</h2>
                      <p className="text-sm text-zinc-500 font-medium mt-0.5">{service.tagline}</p>
                    </div>
                  </div>
                  <p className="text-zinc-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2.5 mb-8">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-sm text-zinc-700">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={service.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl text-white transition-all duration-200 hover:opacity-90 hover:gap-3"
                    style={{ backgroundColor: service.color }}
                  >
                    Dowiedz się więcej
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>

                {/* Blog links / visual side */}
                <div className="bg-surface lg:bg-surface p-8 lg:p-10 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-border">
                  {service.blogLinks.length > 0 ? (
                    <>
                      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-5">
                        Powiązane artykuły
                      </p>
                      <ul className="space-y-3">
                        {service.blogLinks.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className="flex items-start gap-3 group"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 transition-transform duration-200 group-hover:scale-150"
                                style={{ backgroundColor: service.color }}
                              />
                              <span className="text-sm text-zinc-600 leading-snug group-hover:text-brand transition-colors duration-150">
                                {link.label}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/blog"
                        className="mt-8 text-sm font-semibold text-zinc-400 hover:text-brand transition-colors inline-flex items-center gap-1.5"
                      >
                        Wszystkie artykuły →
                      </Link>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <div
                        className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-4 text-white"
                        style={{ backgroundColor: service.color }}
                      >
                        {service.icon}
                      </div>
                      <p className="text-zinc-400 text-sm leading-relaxed max-w-xs mx-auto">
                        Nowy kanał, który rośnie najszybciej spośród wszystkich platform reklamowych.
                        Pierwsi mają największą przewagę.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-brand uppercase tracking-widest mb-3">Dlaczego MiauSEO</p>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-ink">
              Agencja, która rozumie{" "}
              <span className="inline-block bg-brand text-white px-3 py-1 rounded-lg">
                małe firmy
              </span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="bg-surface rounded-2xl p-7 border border-border hover:border-brand hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mb-5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-ink text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-surface py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-brand uppercase tracking-widest mb-3">Jak działamy</p>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-ink">Prosto i bez zbędnych formalności</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              { step: "01", title: "Bezpłatna rozmowa", body: "Rozmawiamy o Twojej firmie, celach i tym, co do tej pory próbowałeś. Bez sprzedaży na siłę." },
              { step: "02", title: "Audyt i propozycja", body: "Sprawdzamy Twoją obecność online i przygotowujemy konkretny plan z szacowanymi efektami." },
              { step: "03", title: "Wdrożenie", body: "Działamy — konfigurujemy, optymalizujemy, uruchamiamy kampanie. Trzymamy Cię na bieżąco." },
              { step: "04", title: "Raport i optymalizacja", body: "Co miesiąc dostajesz raport z wynikami. Stale poprawiamy to, co działa, i eliminujemy to, co nie." },
            ].map((item, i) => (
              <div key={item.step} className="relative bg-white rounded-2xl p-7 border border-border">
                <span className="block font-display text-5xl font-black text-brand/10 mb-3 leading-none">{item.step}</span>
                <h3 className="font-display font-bold text-ink text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.body}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-black text-white mb-4">
            Gotowy, żeby Twoja firma była widoczna w Google?
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Umów się na bezpłatną konsultację. Pokażemy Ci, gdzie tracisz widoczność i jak to naprawić —
            bez zobowiązań i marketingowego bełkotu.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white font-semibold rounded-xl hover:bg-brand-dark transition-colors text-lg"
            >
              Napisz do nas
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:border-white/50 hover:bg-white/5 transition-colors text-lg"
            >
              Czytaj blog
            </Link>
          </div>
          <p className="text-zinc-500 text-sm mt-8">
            Odpowiadamy w ciągu 24 godzin w dni robocze.
          </p>
        </div>
      </section>
    </main>
  );
}
