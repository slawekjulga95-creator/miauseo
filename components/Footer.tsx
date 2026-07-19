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

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Karta firmy */}
          <div className="lg:col-span-1">
            {/* Opis */}
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Pomagam <strong className="font-semibold text-white/80">małym i średnim firmom</strong> zdobywać <strong className="font-semibold text-white/80">klientów z Google</strong> — <strong className="font-semibold text-white/80">bez przepalania budżetu</strong> i <strong className="font-semibold text-white/80">na elastycznych warunkach</strong>.
            </p>

            {/* Dane kontaktowe */}
            <div className="space-y-2.5 mb-6">
              <a
                href="mailto:slawomir@miauseo.pl"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group"
              >
                <span className="w-7 h-7 rounded-lg bg-white/8 flex items-center justify-center shrink-0 group-hover:bg-brand transition-colors">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                slawomir@miauseo.pl
              </a>
              <a
                href="tel:+48455571349"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group"
              >
                <span className="w-7 h-7 rounded-lg bg-white/8 flex items-center justify-center shrink-0 group-hover:bg-brand transition-colors">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.59a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                +48 455 571 349
              </a>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <span className="w-7 h-7 rounded-lg bg-white/8 flex items-center justify-center shrink-0">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="16" rx="2"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </span>
                NIP 6070100514
              </div>
            </div>
          </div>

          {/* Usługi */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-widest text-white/30 mb-5">
              Usługi
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-white/60 hover:text-white transition-colors duration-150">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Firma */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-widest text-white/30 mb-5">
              Firma
            </h3>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-sm text-white/60 hover:text-white transition-colors duration-150">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Narzędzia + logo */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-widest text-white/30 mb-5">
              Darmowe narzędzia
            </h3>
            <ul className="space-y-3 mb-10">
              {tools.map((t) => (
                <li key={t.href}>
                  <Link href={t.href} className="text-sm text-white/60 hover:text-white transition-colors duration-150">
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="MiauSEO"
                width={120}
                height={34}
                className="h-8 w-auto brightness-0 invert opacity-30 hover:opacity-60 transition-opacity"
              />
            </Link>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} MiauSEO. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/30">
            <Link href="/polityka-prywatnosci" className="hover:text-white transition-colors duration-150">
              Polityka prywatności
            </Link>
            <span>·</span>
            <Link href="/regulamin" className="hover:text-white transition-colors duration-150">
              Regulamin
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
