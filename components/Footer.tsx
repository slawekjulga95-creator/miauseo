import Link from "next/link";
import Image from "next/image";

const services = [
  { href: "/uslugi/wizytowka-google", label: "Wizytówka Google" },
  { href: "/uslugi/pozycjonowanie-strony", label: "Pozycjonowanie strony" },
  { href: "/uslugi/google-ads", label: "Google Ads" },
];

const company = [
  { href: "/o-nas", label: "Jak działamy" },
  { href: "/referencje", label: "Referencje" },
  { href: "/blog", label: "Blog" },
  { href: "/slownik", label: "Słownik SEO/SEM" },
  { href: "/pytania", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
];

const tools = [
  { href: "/gbp-score", label: "Audyt wizytówki Google" },
  { href: "/checklista-wizytowki-google", label: "Checklista pozycjonowania" },
];

/** Nagłówek kolumny — ten sam rytm co eyebrow w ciemnych sekcjach na stronie. */
const NAGLOWEK = "text-[11px] font-bold uppercase tracking-[0.18em] text-white/40 mb-5";
const LINK = "text-sm text-white/65 hover:text-white transition-colors duration-150";

export default function Footer() {
  return (
    <footer className="bg-ink text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">

        {/* ── Pas konsultacji: domyka stronę jednym wezwaniem zamiast przycisku
              doklejonego do kolumny z linkami ── */}
        <div className="rounded-3xl bg-white/5 border border-white/10 p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center gap-7 lg:gap-12">
          <div className="flex-1">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand">
              Bezpłatna konsultacja
            </span>
            <p className="text-xl sm:text-2xl font-bold leading-snug mt-3 max-w-[36ch]">
              Sprawdzimy Twoją widoczność w Google i powiemy, co poprawić.
            </p>
          </div>

          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2.5 shrink-0 self-start lg:self-auto rounded-xl bg-brand px-7 py-4 text-sm font-bold text-white transition-colors duration-200 hover:bg-brand-dark"
          >
            Umów konsultację
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* ── Kolumny ── */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-12 gap-x-8 gap-y-12 pb-12 border-b border-white/10">

          {/* Firma */}
          <div className="sm:col-span-3 lg:col-span-4 lg:pr-8">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="MiauSEO"
                width={224}
                height={64}
                className="h-11 w-auto brightness-0 invert"
              />
            </Link>

            <p className="text-white/55 text-sm leading-relaxed mt-6 max-w-[42ch]">
              Pomagam <strong className="font-semibold text-white">małym i średnim firmom</strong> zdobywać
              klientów z Google, bez przepalania budżetu i na elastycznych warunkach.
            </p>

            <div className="mt-7 space-y-3">
              <a
                href="mailto:slawomir@miauseo.pl"
                className="flex items-center gap-3 text-sm text-white/65 hover:text-white transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-brand shrink-0" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                slawomir@miauseo.pl
              </a>

              <a
                href="tel:+48455571349"
                className="flex items-center gap-3 text-sm text-white/65 hover:text-white transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-brand shrink-0" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.59a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +48 455 571 349
              </a>

              <p className="flex items-center gap-3 text-sm text-white/45">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-white/30 shrink-0" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                NIP 6070100514
              </p>
            </div>
          </div>

          {/* Usługi */}
          <div className="lg:col-span-3">
            <h3 className={NAGLOWEK}>Usługi</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className={LINK}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Firma */}
          <div className="lg:col-span-2">
            <h3 className={NAGLOWEK}>Firma</h3>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className={LINK}>{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Darmowe narzędzia */}
          <div className="lg:col-span-3">
            <h3 className={NAGLOWEK}>Darmowe narzędzia</h3>
            <ul className="space-y-3">
              {tools.map((t) => (
                <li key={t.href}>
                  <Link href={t.href} className={LINK}>{t.label}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Pasek dolny ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-sm">
            © {new Date().getFullYear()} MiauSEO. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/35">
            <Link href="/polityka-prywatnosci" className="hover:text-white transition-colors duration-150">
              Polityka prywatności
            </Link>
            <span className="text-white/20">·</span>
            <Link href="/regulamin" className="hover:text-white transition-colors duration-150">
              Regulamin
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
