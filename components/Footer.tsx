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
  { href: "/o-nas/zespol", label: "Zespół" },
  { href: "/referencje", label: "Referencje" },
  { href: "/blog", label: "Blog" },
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
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    href: "https://tiktok.com",
    label: "TikTok",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.84 1.55V6.79a4.85 4.85 0 0 1-1.07-.1z" />
      </svg>
    ),
  },
  {
    href: "https://youtube.com",
    label: "YouTube",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col items-center text-center lg:items-start lg:text-left">
            <Link href="/" className="inline-flex items-center mb-5">
              <Image src="/logo.png" alt="MiauSEO logo" width={180} height={52} className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Agencja local SEO i kampanii reklamowych dla małych i średnich firm. Specjalizujemy się w pozycjonowaniu wizytówki Google Business Profile.
            </p>
            <div className="flex gap-3 mt-6 justify-center lg:justify-start">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-brand transition-colors duration-150"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Usługi */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-xs uppercase tracking-widest text-white/40 mb-5">
              Usługi
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-150"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Firma */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-xs uppercase tracking-widest text-white/40 mb-5">
              Firma
            </h3>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-150"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Narzędzia */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-xs uppercase tracking-widest text-white/40 mb-5">
              Darmowe narzędzia
            </h3>
            <ul className="space-y-3">
              {tools.map((t) => (
                <li key={t.href}>
                  <Link
                    href={t.href}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-150"
                  >
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} MiauSEO. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/40">
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
