"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Strona główna" },
];

const serviceGroups = [
  {
    heading: "Rynek lokalny",
    items: [
      {
        href: "/uslugi/wizytowka-google",
        label: "Wizytówka Google",
        desc: "Pozycjonowanie GBP w Mapach",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        ),
      },
      {
        href: "/uslugi/pozycjonowanie-strony",
        label: "Pozycjonowanie strony",
        desc: "SEO organiczne w Google",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        ),
      },
    ],
  },
  {
    heading: "Pozyskiwanie leadów",
    items: [
      {
        href: "/uslugi/google-ads",
        label: "Google Ads",
        desc: "Kampanie w wyszukiwarce Google",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
          </svg>
        ),
      },
    ],
  },
  {
    heading: "Darmowe narzędzia",
    items: [
      {
        href: "/gbp-score",
        label: "Audyt wizytówki Google",
        desc: "Sprawdź wynik optymalizacji GBP",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"/>
            <line x1="12" y1="20" x2="12" y2="4"/>
            <line x1="6" y1="20" x2="6" y2="14"/>
            <line x1="2" y1="20" x2="22" y2="20"/>
          </svg>
        ),
      },
      {
        href: "/checklista-wizytowki-google",
        label: "Checklista pozycjonowania",
        desc: "28 punktów kontrolnych GBP",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
          </svg>
        ),
      },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 20);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => { setDropdownOpen(false); }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };
  const isServicesActive = pathname.startsWith("/uslugi");

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-white ${scrolled ? "shadow-md" : "shadow-sm"}`}>
        <div className="absolute top-0 left-0 h-[2px] bg-brand transition-[width] duration-150 ease-out z-10" style={{ width: `${progress}%` }} />

        <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center h-20 gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image src="/logo.png" alt="MiauSEO logo" width={224} height={64} className="h-16 w-auto" sizes="224px" />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-3.5 py-2 text-[15px] font-semibold rounded-md transition-colors duration-150 ${
                    isActive(link.href) ? "text-brand" : "text-zinc-800 hover:text-brand hover:bg-surface"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/o-nas"
                className={`px-3.5 py-2 text-[15px] font-semibold rounded-md transition-colors duration-150 ${
                  isActive("/o-nas") ? "text-brand" : "text-zinc-800 hover:text-brand hover:bg-surface"
                }`}
              >
                O nas
              </Link>
            </li>

            {/* Zakres usług dropdown */}
            <li
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                href="/uslugi"
                className={`flex items-center gap-1 px-3.5 py-2 text-[15px] font-semibold rounded-md transition-colors duration-150 ${
                  isServicesActive ? "text-brand" : "text-zinc-800 hover:text-brand hover:bg-surface"
                }`}
              >
                Zakres usług
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </Link>

              {/* Mega menu */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white rounded-2xl shadow-2xl border border-border z-50 transition-all duration-200 origin-top ${
                dropdownOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
              }`} style={{ width: "640px" }}>
                <div className="grid grid-cols-3 divide-x divide-border">
                  {serviceGroups.map((group) => (
                    <div key={group.heading} className="py-5 px-5">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-3 px-1">{group.heading}</p>
                      <div className="space-y-0.5">
                        {group.items.map((sl) => (
                          <Link
                            key={sl.href}
                            href={sl.href}
                            onClick={() => setDropdownOpen(false)}
                            className={`flex items-start gap-3 px-2 py-2.5 rounded-xl transition-colors duration-100 group ${
                              pathname === sl.href ? "bg-brand/5" : "hover:bg-surface"
                            }`}
                          >
                            <span className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                              pathname === sl.href ? "bg-brand text-white" : "bg-brand/10 text-brand"
                            }`}>
                              {sl.icon}
                            </span>
                            <span>
                              <span className={`block text-sm font-semibold leading-tight ${pathname === sl.href ? "text-brand" : "text-zinc-800 group-hover:text-brand"}`}>
                                {sl.label}
                              </span>
                              <span className="block text-xs text-zinc-400 mt-0.5 leading-tight">{sl.desc}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </li>

            <li>
              <Link
                href="/pytania"
                className={`px-3.5 py-2 text-[15px] font-semibold rounded-md transition-colors duration-150 ${
                  isActive("/pytania") ? "text-brand" : "text-zinc-800 hover:text-brand hover:bg-surface"
                }`}
              >
                FAQ
              </Link>
            </li>

            <li>
              <Link
                href="/referencje"
                className={`px-3.5 py-2 text-[15px] font-semibold rounded-md transition-colors duration-150 ${
                  isActive("/referencje") ? "text-brand" : "text-zinc-800 hover:text-brand hover:bg-surface"
                }`}
              >
                Referencje
              </Link>
            </li>

            <li>
              <Link
                href="/blog"
                className={`px-3.5 py-2 text-[15px] font-semibold rounded-md transition-colors duration-150 ${
                  isActive("/blog") ? "text-brand" : "text-zinc-800 hover:text-brand hover:bg-surface"
                }`}
              >
                Blog
              </Link>
            </li>
          </ul>

          {/* CTA + socials + hamburger */}
          <div className="flex items-center gap-3 ml-auto justify-end">
            <Link
              href="/kontakt"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-brand text-white text-sm font-semibold rounded-xl hover:bg-brand-dark transition-colors duration-150"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Kontakt
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-md hover:bg-surface transition-colors"
              aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            >
              <span className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 bg-white flex flex-col transition-all duration-300 lg:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="h-20" />
        <nav className="flex-1 flex flex-col justify-center px-8 gap-1 overflow-y-auto py-6">
          {navLinks.map((link, i) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
              className={`text-2xl font-semibold py-3 border-b border-border transition-colors duration-150 ${isActive(link.href) ? "text-brand" : "text-ink hover:text-brand"}`}
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}>
              {link.label}
            </Link>
          ))}

          <Link href="/o-nas" onClick={() => setOpen(false)}
            className={`text-2xl font-semibold py-3 border-b border-border transition-colors duration-150 ${isActive("/o-nas") ? "text-brand" : "text-ink hover:text-brand"}`}>
            O nas
          </Link>

          {/* Mobile services accordion */}
          <div className="border-b border-border">
            <button
              onClick={() => setMobileDropdownOpen((v) => !v)}
              className={`w-full flex items-center justify-between text-2xl font-semibold py-3 transition-colors ${isServicesActive ? "text-brand" : "text-ink"}`}
            >
              Zakres usług
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                className={`transition-transform duration-200 ${mobileDropdownOpen ? "rotate-180" : ""}`}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {mobileDropdownOpen && (
              <div className="pb-3 pl-1 space-y-3">
                {serviceGroups.map((group) => (
                  <div key={group.heading}>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-1 mb-1 mt-2">{group.heading}</p>
                    {group.items.map((sl) => (
                      <Link key={sl.href} href={sl.href} onClick={() => setOpen(false)}
                        className="flex items-center gap-3 py-2 text-lg text-zinc-500 hover:text-brand transition-colors">
                        <span className="w-7 h-7 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                          {sl.icon}
                        </span>
                        {sl.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link href="/pytania" onClick={() => setOpen(false)}
            className={`text-2xl font-semibold py-3 border-b border-border transition-colors duration-150 ${isActive("/pytania") ? "text-brand" : "text-ink hover:text-brand"}`}>
            FAQ
          </Link>

          <Link href="/referencje" onClick={() => setOpen(false)}
            className={`text-2xl font-semibold py-3 border-b border-border transition-colors duration-150 ${isActive("/referencje") ? "text-brand" : "text-ink hover:text-brand"}`}>
            Referencje
          </Link>

          <Link href="/blog" onClick={() => setOpen(false)}
            className={`text-2xl font-semibold py-3 border-b border-border transition-colors duration-150 ${isActive("/blog") ? "text-brand" : "text-ink hover:text-brand"}`}>
            Blog
          </Link>

          <Link href="/kontakt" onClick={() => setOpen(false)}
            className="mt-3 text-center px-6 py-4 bg-brand text-white font-semibold rounded-xl text-lg hover:bg-brand-dark transition-colors">
            Kontakt
          </Link>
        </nav>
      </div>
    </>
  );
}
