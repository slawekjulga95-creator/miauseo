import Link from "next/link";
import Image from "next/image";

const services = [
  { href: "/uslugi/wizytowka-google", label: "Wizytówka Google" },
  { href: "/uslugi/pozycjonowanie-strony", label: "Pozycjonowanie strony" },
  { href: "/uslugi/google-ads", label: "Google Ads" },
  { href: "/uslugi/meta-ads", label: "Facebook / Meta Ads" },
  { href: "/uslugi/tiktok-ads", label: "TikTok Ads" },
];

const company = [
  { href: "/o-nas", label: "O nas" },
  { href: "/referencje", label: "Referencje" },
  { href: "/blog", label: "Blog" },
  { href: "/slownik", label: "Słownik SEO/SEM" },
  { href: "/pytania", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
];

const tools = [
  { href: "/gbp-score", label: "Audyt wizytówki Google" },
  { href: "/checklista-wizytowki-google", label: "Checklista pozycjonowania" },
  { href: "/kursy", label: "Kursy online" },
];

const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    href: "https://tiktok.com",
    label: "TikTok",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.84 1.55V6.79a4.85 4.85 0 0 1-1.07-.1z" />
      </svg>
    ),
  },
  {
    href: "https://youtube.com",
    label: "YouTube",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Karta osoby */}
          <div className="lg:col-span-1">
            {/* Zdjęcie + imię + rola */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative shrink-0">
                <div className="w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-brand/40">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop&crop=face"
                    alt="Sławek Julga – Założyciel MiauSEO"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-ink" />
              </div>
              <div>
                <p className="font-bold text-white text-[15px] leading-tight">Sławek Julga</p>
                <p className="text-white/50 text-xs mt-0.5">Założyciel MiauSEO</p>
              </div>
            </div>

            {/* Opis */}
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Pomagam małym firmom zdobywać klientów z Google — bez przepalania budżetu i bez umów na rok.
            </p>

            {/* Dane kontaktowe */}
            <div className="space-y-2.5 mb-6">
              <a
                href="mailto:kontakt@miauseo.pl"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group"
              >
                <span className="w-7 h-7 rounded-lg bg-white/8 flex items-center justify-center shrink-0 group-hover:bg-brand transition-colors">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                kontakt@miauseo.pl
              </a>
              <a
                href="tel:+48XXXXXXXXX"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group"
              >
                <span className="w-7 h-7 rounded-lg bg-white/8 flex items-center justify-center shrink-0 group-hover:bg-brand transition-colors">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.59a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                +48 XXX XXX XXX
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center text-white/50 hover:bg-brand hover:text-white transition-colors duration-150"
                >
                  {s.icon}
                </a>
              ))}
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
