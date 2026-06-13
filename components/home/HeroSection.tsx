import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Postać w tle — bardziej widoczna na całej wysokości, twarz z przodu */}
      <div
        className="absolute top-0 hidden lg:block pointer-events-none select-none h-full z-5"
        style={{ aspectRatio: "2 / 3", opacity: 0.4, right: "-80px" }}
        aria-hidden="true"
      >
        <Image
          src="/SlawomirJ.webp"
          alt=""
          fill
          priority
          sizes="440px"
          quality={90}
          className="object-contain"
          style={{ objectPosition: "right center" }}
        />
      </div>

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
        className="relative max-w-7xl mx-auto px-6 lg:px-8 flex items-center pt-36 pb-16 lg:pt-32 lg:pb-20"
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
      </div>
    </section>
  );
}
