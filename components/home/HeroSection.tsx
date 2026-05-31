import Image from "next/image";
import Link from "next/link";
import HeroForm from "@/components/home/HeroForm";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-white"
      style={{ minHeight: "100svh" }}
    >
      {/* ─────────────────────────────────────────────────
          RIGHT COLUMN — zdjęcie
          Mobile: relative block (zdjęcie nad treścią)
          Desktop: absolute, pokrywa prawą połowę
      ───────────────────────────────────────────────── */}
      <div className="hidden lg:block lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[52%] overflow-hidden">

        {/* TODO: zdjęcie */}
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?fit=crop&crop=center"
          alt="Biuro MiauSEO"
          fill
          className="object-cover object-top"
          priority
          sizes="(max-width: 1024px) 100vw, 52vw"
          quality={85}
        />

        {/* Gradient lewa krawędź: białe tło → przezroczysty, wtapia foto w treść */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(to right, white 0%, white 6%, rgba(255,255,255,0.65) 26%, rgba(255,255,255,0.15) 52%, transparent 70%)",
          }}
        />
        {/* Na mobile gradient na dole foto */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            background: "linear-gradient(to bottom, transparent 50%, white 100%)",
          }}
        />

        {/* ── Pływające karty (tylko desktop) ─────────── */}

        {/* Karta 1 — góra-prawo: biała z zielonym checkmarkiem */}
        <div
          className="absolute top-20 right-8 w-64 hidden lg:block"
          style={{
            background: "white",
            borderRadius: "1rem",
            border: "1px solid rgba(255,255,255,0.8)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0.06)",
            padding: "1.25rem",
            animation: "float-slow 3.4s ease-in-out infinite",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <div
              style={{
                width: "2.25rem", height: "2.25rem",
                borderRadius: "0.625rem",
                background: "#f0fdf4",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div>
              <p style={{ fontSize: "0.625rem", fontWeight: 700, color: "#16a34a", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Nasza zasada
              </p>
              <p style={{ fontSize: "0.7rem", color: "#a1a1aa" }}>od pierwszego dnia</p>
            </div>
          </div>
          <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "#111111", lineHeight: 1.3 }}>
            Marketing bez pustych obietnic.
          </p>
        </div>

        {/* Karta 2 — dół-prawo: pełna pomarańczowa */}
        <div
          className="absolute bottom-32 right-8 w-56 hidden lg:block"
          style={{
            background: "var(--color-brand)",
            borderRadius: "1rem",
            boxShadow: "0 8px 28px rgba(243,111,33,0.38)",
            padding: "1.25rem",
            animation: "float-medium 2.9s ease-in-out infinite 0.6s",
          }}
        >
          <p style={{ fontSize: "0.6rem", fontWeight: 700, color: "rgba(255,255,255,0.55)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.25rem" }}>
            Nasza wartość
          </p>
          <p style={{ fontSize: "1.15rem", fontWeight: 700, color: "white", lineHeight: 1.25, marginBottom: "0.25rem" }}>
            Transparentność.
          </p>
          <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.6)" }}>
            Zero ukrytych kosztów.
          </p>
        </div>

        {/* Kapsułka "PRZEWIŃ ↓" — dół środek, tylko desktop */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1.5"
          style={{ animation: "fade-in 0.5s ease-out 1.1s both" }}
        >
          <Link
            href="#sekret"
            className="group flex flex-col items-center gap-1 text-zinc-400 hover:text-brand transition-colors"
          >
            <span
              style={{
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                background: "rgba(255,255,255,0.85)",
                border: "1px solid #e5e5e5",
                padding: "0.3rem 0.8rem",
                borderRadius: "999px",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              Przewiń ↓
            </span>
            <svg
              width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="animate-bounce"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </Link>
        </div>

      </div>

      {/* ─────────────────────────────────────────────────
          LEFT COLUMN — treść
      ───────────────────────────────────────────────── */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex items-center" style={{ minHeight: "100svh" }}>
        <div className="w-full lg:max-w-[540px] pt-44 pb-16 lg:py-28">

          {/* Dot pattern — widoczny tylko po lewej stronie */}
          <div
            className="absolute inset-0 pointer-events-none -z-10"
            style={{
              backgroundImage: "radial-gradient(circle, #c8c8c8 1.1px, transparent 1.1px)",
              backgroundSize: "26px 26px",
              maskImage: "linear-gradient(to right, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0) 90%)",
              WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0) 90%)",
            }}
          />

          {/* Eyebrow z pomarańczową kreską */}
          <div
            className="flex items-center gap-3 mb-7 animate-fade-up"
          >
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
              Pozycjonowanie&nbsp;lokalne&nbsp;·&nbsp;Kampanie&nbsp;Leadowe
            </span>
          </div>

          {/* H1 */}
          <h1
            className="animate-fade-up text-ink"
            style={{
              fontSize: "clamp(2.3rem, 4.8vw, 3.4rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "1.75rem",
              animationDelay: "100ms",
            }}
          >
            Każdy miał{" "}
            {/* "agencję" — pill -2deg z łapką i cieniem */}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.3em",
                transform: "rotate(-2deg)",
                transformOrigin: "center bottom",
                background: "var(--color-brand)",
                color: "white",
                padding: "0.08em 0.42em 0.14em",
                borderRadius: "0.55rem",
                boxShadow: "0 4px 16px rgba(243,111,33,0.35), 0 1px 3px rgba(0,0,0,0.08)",
                verticalAlign: "middle",
              }}
            >
              agencję{" "}
              <span style={{ fontSize: "0.72em", lineHeight: 1 }} aria-hidden="true">🐾</span>
            </span>
            <br />
            <span style={{ color: "var(--color-brand)" }}>Nie każdy efekty.</span>
          </h1>

          {/* Lead — dwa poziomy hierarchii */}
          <div
            className="animate-fade-up"
            style={{ marginBottom: "2.25rem", animationDelay: "200ms" }}
          >
            <p style={{ fontSize: "0.9375rem", color: "#71717a", lineHeight: 1.7, maxWidth: "42ch" }}>
              Łączymy zwinność, spryt i sprawdzone strategie SEO, żeby Twój biznes był widoczny tam, gdzie szukają go klienci.
            </p>
          </div>

          {/* CTA */}
          <div
            className="flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ marginBottom: "2.5rem", animationDelay: "320ms" }}
          >
            {/* Główny przycisk */}
            <Link
              href="/kontakt"
              className="hero-cta-primary inline-flex items-center gap-2 font-bold text-white rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "var(--color-brand)",
                fontSize: "0.9rem",
                padding: "0.85rem 1.6rem",
                boxShadow: "0 4px 20px rgba(243,111,33,0.28)",
              }}
            >
              Umów bezpłatną konsultację
              <span aria-hidden="true">→</span>
            </Link>

            {/* Drugorzędny link */}
            <Link
              href="#sekret"
              className="text-sm font-semibold text-zinc-500 hover:text-brand transition-colors duration-150"
            >
              Poznaj problemy&nbsp;↓
            </Link>
          </div>

          {/* Features pod kreską */}
          <div
            className="animate-fade-up"
            style={{
              paddingTop: "1.25rem",
              borderTop: "1px solid var(--color-border)",
              animationDelay: "450ms",
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">

              {/* Feature 1 */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", minWidth: 0 }}>
                <span style={{ fontSize: "1.15rem", marginTop: "0.1rem", flexShrink: 0 }} aria-hidden="true">📞</span>
                <div>
                  <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#111111", lineHeight: 1.3 }}>
                    Bezpłatna konsultacja
                  </p>
                  <p style={{ fontSize: "0.72rem", color: "#a1a1aa", marginTop: "0.15rem" }}>
                    Krótka rozmowa. Zero zobowiązań.
                  </p>
                </div>
              </div>

              {/* Separator pionowy */}
              <div
                className="hidden sm:block"
                style={{ width: "1px", background: "var(--color-border)", alignSelf: "stretch", flexShrink: 0 }}
              />

              {/* Feature 2 */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", minWidth: 0 }}>
                <span style={{ fontSize: "1.15rem", marginTop: "0.1rem", flexShrink: 0 }} aria-hidden="true">📄</span>
                <div>
                  <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#111111", lineHeight: 1.3 }}>
                    Elastyczna umowa
                  </p>
                  <p style={{ fontSize: "0.72rem", color: "#a1a1aa", marginTop: "0.15rem" }}>
                    Specjalne warianty.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator na mobile */}
      <div className="lg:hidden absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <Link href="#sekret" className="flex flex-col items-center gap-1 text-zinc-400 hover:text-brand transition-colors">
          <span
            style={{
              fontSize: "0.6rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              background: "rgba(255,255,255,0.9)",
              border: "1px solid #e5e5e5",
              padding: "0.3rem 0.75rem",
              borderRadius: "999px",
            }}
          >
            Przewiń ↓
          </span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </Link>
      </div>

      {/* Delayed lead form */}
      <HeroForm />
    </section>
  );
}
