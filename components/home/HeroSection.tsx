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

      <div
        className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 lg:gap-10 items-center pt-36 pb-16 lg:pt-32 lg:pb-20"
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
                  TOP&nbsp;3
                </p>
                <p style={{ fontSize: "0.72rem", color: "#a1a1aa", lineHeight: 1.45, marginTop: "0.2rem" }}>
                  w Google Maps w&nbsp;60 dni od startu
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
            PRAWA KOLUMNA — mockup wyników Google
        ───────────────────────────────────────────── */}
        <div className="relative hidden lg:block" style={{ animation: "fade-up 0.7s ease-out 250ms both" }}>
          {/* Karta SERP */}
          <div
            className="relative mx-auto"
            style={{
              maxWidth: "440px",
              background: "white",
              borderRadius: "1.25rem",
              border: "1px solid #ececec",
              boxShadow: "0 24px 60px rgba(17,17,17,0.10), 0 4px 14px rgba(17,17,17,0.05)",
              padding: "1.5rem",
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
                padding: "0.7rem 1.1rem",
                marginBottom: "1.25rem",
                boxShadow: "0 1px 6px rgba(32,33,36,0.08)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
              </svg>
              <span style={{ fontSize: "0.875rem", color: "#3f3f46", fontWeight: 500 }}>
                hydraulik poznań
              </span>
              <span style={{ marginLeft: "auto", width: "2px", height: "16px", background: "var(--color-brand)", borderRadius: "2px" }} className="animate-pulse" />
            </div>

            {/* Nagłówek local pack */}
            <p style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "0.7rem" }}>
              Wyniki lokalne · Google Maps
            </p>

            {/* Wynik #1 — Twoja firma */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.85rem",
                background: "#fff7f2",
                border: "1.5px solid rgba(243,111,33,0.45)",
                borderRadius: "0.9rem",
                padding: "0.85rem 1rem",
                marginBottom: "0.6rem",
              }}
            >
              <div
                style={{
                  width: "2.4rem", height: "2.4rem", borderRadius: "0.7rem",
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
                  <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#111111" }}>Twoja firma</p>
                  <span
                    style={{
                      fontSize: "0.55rem", fontWeight: 800, letterSpacing: "0.1em",
                      textTransform: "uppercase", color: "white",
                      background: "var(--color-brand)", padding: "0.18rem 0.5rem",
                      borderRadius: "999px",
                    }}
                  >
                    To Ty
                  </span>
                </div>
                <p style={{ fontSize: "0.72rem", color: "#71717a", marginTop: "0.15rem" }}>
                  <span style={{ color: "#f59e0b" }}>★★★★★</span> 4,9 (87) · Otwarte · Poznań
                </p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
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
                  gap: "0.85rem",
                  border: "1px solid #f0f0f0",
                  borderRadius: "0.9rem",
                  padding: "0.85rem 1rem",
                  marginBottom: "0.6rem",
                  opacity: 0.55,
                }}
              >
                <div
                  style={{
                    width: "2.4rem", height: "2.4rem", borderRadius: "0.7rem",
                    background: "#f4f4f5", color: "#a1a1aa",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 800, fontSize: "0.95rem", flexShrink: 0,
                  }}
                >
                  {c.pos}
                </div>
                <div>
                  <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#52525b" }}>{c.name}</p>
                  <p style={{ fontSize: "0.72rem", color: "#a1a1aa", marginTop: "0.15rem" }}>
                    <span style={{ color: "#d4d4d8" }}>{c.stars}</span> {c.rating}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pływająca karta — wzrost wizyt */}
          <div
            className="absolute -top-7 -right-2 xl:right-6"
            style={{
              background: "white",
              borderRadius: "1rem",
              border: "1px solid #ececec",
              boxShadow: "0 12px 32px rgba(0,0,0,0.10)",
              padding: "0.9rem 1.15rem",
              animation: "float-slow 3.4s ease-in-out infinite",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <div
                style={{
                  width: "2rem", height: "2rem", borderRadius: "0.6rem",
                  background: "#f0fdf4", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
                </svg>
              </div>
              <div>
                <p style={{ fontSize: "0.95rem", fontWeight: 800, color: "#111111", lineHeight: 1 }}>+154 wizyty</p>
                <p style={{ fontSize: "0.65rem", color: "#a1a1aa", marginTop: "0.2rem" }}>z wizytówki · 30 dni</p>
              </div>
            </div>
          </div>

          {/* Pływająca karta — telefony */}
          <div
            className="absolute -bottom-7 -left-2 xl:left-4"
            style={{
              background: "var(--color-brand)",
              borderRadius: "1rem",
              boxShadow: "0 10px 28px rgba(243,111,33,0.38)",
              padding: "0.9rem 1.15rem",
              animation: "float-medium 2.9s ease-in-out infinite 0.6s",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <div
                style={{
                  width: "2rem", height: "2rem", borderRadius: "0.6rem",
                  background: "rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <p style={{ fontSize: "0.95rem", fontWeight: 800, color: "white", lineHeight: 1 }}>+26% telefonów</p>
                <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.65)", marginTop: "0.2rem" }}>rok do roku</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delayed lead form */}
      <HeroForm />
    </section>
  );
}
