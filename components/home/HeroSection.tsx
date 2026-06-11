import Image from "next/image";
import Link from "next/link";
import HeroForm from "@/components/home/HeroForm";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Tło: delikatny brand glow + dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 78% 38%, rgba(243,111,33,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #d4d4d8 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.08) 55%, rgba(0,0,0,0) 85%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.08) 55%, rgba(0,0,0,0) 85%)",
        }}
      />

      {/* Osoba — wycięta z tła, przyklejona do prawej krawędzi ekranu (desktop) */}
      <div
        className="absolute right-0 bottom-0 hidden lg:block pointer-events-none select-none"
        style={{ height: "min(96svh, 870px)", aspectRatio: "2 / 3" }}
        aria-hidden="true"
      >
        <Image
          src="/hero/hero-person-cutout.png"
          alt=""
          fill
          priority
          sizes="440px"
          quality={90}
          className="object-contain"
          style={{ objectPosition: "right bottom", transform: "scaleX(-1)" }}
        />
      </div>

      <div
        className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 lg:gap-6 items-center pt-36 pb-16 lg:pt-32 lg:pb-20"
        style={{ minHeight: "calc(100svh - 56px)" }}
      >
        {/* ─────────────────────────────────────────────
            LEWA KOLUMNA — treść sprzedażowa
        ───────────────────────────────────────────── */}
        <div className="max-w-[560px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6 animate-fade-up">
            <span
              style={{
                display: "block",
                width: "2rem",
                height: "2px",
                background: "var(--color-brand)",
                borderRadius: "9999px",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.17em",
                textTransform: "uppercase",
                color: "var(--color-brand)",
              }}
            >
              SEO&nbsp;·&nbsp;Wizytówki&nbsp;Google&nbsp;·&nbsp;Kampanie&nbsp;leadowe
            </span>
          </div>

          {/* H1 */}
          <h1
            className="animate-fade-up text-ink"
            style={{
              fontSize: "clamp(2.2rem, 4.6vw, 3.3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.12,
              marginBottom: "1.5rem",
              animationDelay: "100ms",
            }}
          >
            Więcej zapytań.
            <br />
            Więcej telefonów.{" "}
            <br />
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.3em",
                transform: "rotate(-1.5deg)",
                transformOrigin: "center bottom",
                background: "var(--color-brand)",
                color: "white",
                padding: "0.08em 0.42em 0.14em",
                borderRadius: "0.55rem",
                boxShadow: "0 4px 16px rgba(243,111,33,0.35), 0 1px 3px rgba(0,0,0,0.08)",
                verticalAlign: "middle",
                marginTop: "0.18em",
              }}
            >
              Więcej klientów.
              <span style={{ fontSize: "0.65em", lineHeight: 1, filter: "brightness(0) invert(1)" }} aria-hidden="true">🐾</span>
            </span>
          </h1>

          {/* Lead */}
          <p
            className="animate-fade-up"
            style={{
              fontSize: "1rem",
              color: "#71717a",
              lineHeight: 1.7,
              maxWidth: "46ch",
              marginBottom: "2.25rem",
              animationDelay: "200ms",
            }}
          >
            Twoi klienci właśnie wpisują w Google to, co sprzedajesz. Sprawiamy, że
            znajdują <strong style={{ color: "#111111", fontWeight: 700 }}>Ciebie, nie konkurencję</strong> —
            a efekty mierzymy liczbą zapytań i telefonów, nie kolorowymi raportami.
          </p>

          {/* CTA */}
          <div
            className="flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ marginBottom: "2.75rem", animationDelay: "320ms" }}
          >
            <Link
              href="/kontakt"
              className="hero-cta-primary inline-flex items-center gap-2 font-bold text-white rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "var(--color-brand)",
                fontSize: "0.95rem",
                padding: "0.95rem 1.75rem",
                boxShadow: "0 4px 20px rgba(243,111,33,0.28)",
              }}
            >
              Umów bezpłatną konsultację
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="/referencje"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-600 hover:text-brand transition-colors duration-150"
              style={{ padding: "0.95rem 0.25rem" }}
            >
              Zobacz wyniki klientów
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Dowody — liczby z wdrożeń */}
          <div
            className="animate-fade-up"
            style={{
              paddingTop: "1.5rem",
              borderTop: "1px solid var(--color-border)",
              animationDelay: "450ms",
            }}
          >
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p style={{ fontSize: "1.5rem", fontWeight: 800, color: "#111111", letterSpacing: "-0.02em" }}>
                  0&nbsp;zł
                </p>
                <p style={{ fontSize: "0.72rem", color: "#a1a1aa", lineHeight: 1.45, marginTop: "0.2rem" }}>
                  za konsultację i&nbsp;wycenę na&nbsp;start
                </p>
              </div>
              <div>
                <p style={{ fontSize: "1.5rem", fontWeight: 800, color: "#111111", letterSpacing: "-0.02em" }}>
                  154
                </p>
                <p style={{ fontSize: "0.72rem", color: "#a1a1aa", lineHeight: 1.45, marginTop: "0.2rem" }}>
                  wizyty z&nbsp;wizytówki w&nbsp;pierwszy miesiąc
                </p>
              </div>
              <div>
                <p style={{ fontSize: "1.5rem", fontWeight: 800, color: "#111111", letterSpacing: "-0.02em" }}>
                  15&nbsp;min
                </p>
                <p style={{ fontSize: "0.72rem", color: "#a1a1aa", lineHeight: 1.45, marginTop: "0.2rem" }}>
                  średni czas odpowiedzi na&nbsp;zapytanie
                </p>
              </div>
            </div>
            <p style={{ fontSize: "0.68rem", color: "#d4d4d8", marginTop: "0.9rem" }}>
              Liczby z realnych wdrożeń — opisanych w{" "}
              <Link href="/referencje" className="underline hover:text-brand transition-colors">referencjach</Link>.
            </p>
          </div>
        </div>

        {/* ─────────────────────────────────────────────
            PRAWA KOLUMNA — panel wyników (osoba za kartami,
            zakotwiczona do krawędzi ekranu na poziomie sekcji)
        ───────────────────────────────────────────── */}
        <div
          className="relative hidden lg:block self-stretch"
          style={{ animation: "fade-up 0.7s ease-out 250ms both", minHeight: "620px" }}
        >
          {/* Karta SERP — panel wizytówki */}
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
            style={{
              width: "390px",
              background: "white",
              borderRadius: "1.25rem",
              border: "1px solid #ececec",
              boxShadow: "0 24px 60px rgba(17,17,17,0.10), 0 4px 14px rgba(17,17,17,0.05)",
              padding: "1.4rem",
            }}
          >
            {/* Pasek wyszukiwania */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.7rem",
                border: "1px solid #e4e4e7",
                borderRadius: "999px",
                padding: "0.65rem 1.05rem",
                marginBottom: "1.15rem",
                boxShadow: "0 1px 6px rgba(32,33,36,0.08)",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
              </svg>
              <span style={{ fontSize: "0.85rem", color: "#3f3f46", fontWeight: 500 }}>
                skup telefonów poznań
              </span>
              <span style={{ marginLeft: "auto", width: "2px", height: "15px", background: "var(--color-brand)", borderRadius: "2px" }} className="animate-pulse" />
            </div>

            {/* Nagłówek local pack */}
            <p style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "0.65rem" }}>
              Wyniki lokalne · Google Maps
            </p>

            {/* Wynik #1 — Twoja firma */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.8rem",
                background: "#fff7f2",
                border: "1.5px solid rgba(243,111,33,0.45)",
                borderRadius: "0.9rem",
                padding: "0.8rem 0.95rem",
                marginBottom: "0.55rem",
              }}
            >
              <div
                style={{
                  width: "2.3rem", height: "2.3rem", borderRadius: "0.7rem",
                  background: "var(--color-brand)", color: "white",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 800, fontSize: "0.95rem", flexShrink: 0,
                  boxShadow: "0 4px 12px rgba(243,111,33,0.35)",
                }}
              >
                1
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#111111" }}>Twoja firma</p>
                  <span
                    style={{
                      fontSize: "0.55rem", fontWeight: 800, letterSpacing: "0.1em",
                      textTransform: "uppercase", color: "white",
                      background: "var(--color-brand)", padding: "0.16rem 0.5rem",
                      borderRadius: "999px",
                    }}
                  >
                    To Ty
                  </span>
                </div>
                <p style={{ fontSize: "0.7rem", color: "#71717a", marginTop: "0.15rem" }}>
                  <span style={{ color: "#f59e0b" }}>★★★★★</span> 4,9 (87) · Otwarte · Poznań
                </p>
              </div>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            {/* Wynik #2 i #3 — konkurencja */}
            {[
              { pos: "2", name: "Konkurent A", stars: "★★★★", rating: "4,2 (31)" },
              { pos: "3", name: "Konkurent B", stars: "★★★★", rating: "4,0 (18)" },
            ].map((c) => (
              <div
                key={c.pos}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  border: "1px solid #f0f0f0",
                  borderRadius: "0.9rem",
                  padding: "0.8rem 0.95rem",
                  marginBottom: "0.55rem",
                  background: "white",
                  opacity: 0.6,
                }}
              >
                <div
                  style={{
                    width: "2.3rem", height: "2.3rem", borderRadius: "0.7rem",
                    background: "#f4f4f5", color: "#a1a1aa",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 800, fontSize: "0.95rem", flexShrink: 0,
                  }}
                >
                  {c.pos}
                </div>
                <div>
                  <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#52525b" }}>{c.name}</p>
                  <p style={{ fontSize: "0.7rem", color: "#a1a1aa", marginTop: "0.15rem" }}>
                    <span style={{ color: "#d4d4d8" }}>{c.stars}</span> {c.rating}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Karta — wykres pozycjonowania */}
          <div
            className="absolute left-0 top-2 z-20"
            style={{
              width: "230px",
              background: "white",
              borderRadius: "1rem",
              border: "1px solid #ececec",
              boxShadow: "0 12px 32px rgba(0,0,0,0.10)",
              padding: "1rem 1.1rem",
              animation: "float-slow 3.4s ease-in-out infinite",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.55rem" }}>
              <p style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a1aa" }}>
                Pozycjonowanie
              </p>
              <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#16a34a", background: "#f0fdf4", padding: "0.15rem 0.5rem", borderRadius: "999px" }}>
                +182%
              </span>
            </div>
            <svg viewBox="0 0 200 64" style={{ width: "100%", height: "58px", display: "block" }} aria-hidden="true">
              <defs>
                <linearGradient id="hero-chart-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#16a34a" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#16a34a" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M4 54 L36 48 L68 50 L100 36 L132 28 L164 18 L196 8 L196 64 L4 64 Z" fill="url(#hero-chart-fill)" />
              <path d="M4 54 L36 48 L68 50 L100 36 L132 28 L164 18 L196 8" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="196" cy="8" r="3.5" fill="#16a34a" />
              <circle cx="196" cy="8" r="7" fill="#16a34a" opacity="0.2" />
            </svg>
            <p style={{ fontSize: "0.68rem", color: "#a1a1aa", marginTop: "0.45rem" }}>
              Ruch organiczny · 6 miesięcy
            </p>
          </div>

        </div>
      </div>

      {/* Delayed lead form */}
      <HeroForm />
    </section>
  );
}
