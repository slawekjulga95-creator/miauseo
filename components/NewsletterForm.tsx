"use client";

import { useState } from "react";
import Image from "next/image";

const socials = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@miauseo",
    icon: (
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12z" />
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    icon: (
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.84 1.55V6.79a4.85 4.85 0 0 1-1.07-.1z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
    ),
  },
];

export default function NewsletterForm({ logo = false }: { logo?: boolean } = {}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMsg(data.error ?? "Błąd zapisu.");
        setStatus("error");
      } else {
        setStatus("success");
        setEmail("");
      }
    } catch {
      setMsg("Błąd połączenia. Spróbuj ponownie.");
      setStatus("error");
    }
  }

  return (
    <div className="bg-ink rounded-2xl overflow-hidden">
      {logo ? (
        /* Logo MiauSEO + okrągłe zdjęcie autora */
        <div className="flex flex-col items-center text-center px-6 pt-7 pb-1 border-b border-white/10 bg-white/[0.03]">
          <Image
            src="/logo.png"
            alt="MiauSEO"
            width={150}
            height={43}
            className="h-8 w-auto brightness-0 invert mb-6"
            priority
          />
          <div className="w-48 h-48 rounded-full overflow-hidden ring-2 ring-white/15 shadow-xl mb-4">
            <Image
              src="/slawomir.png"
              alt="Sławomir"
              width={400}
              height={400}
              sizes="192px"
              className="w-full h-full object-cover object-top"
              priority
            />
          </div>
          <p className="text-white font-bold text-base leading-tight">Sławomir</p>
          <p className="text-white/50 text-xs mt-0.5 mb-3">Konsultant SEO · MiauSEO</p>
          <div className="flex items-center justify-center gap-2 mb-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-brand hover:text-white transition-colors duration-150"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      ) : (
        /* Zdjęcie — pełne, bez przycinania */
        <Image
          src="/slawomir.png"
          alt="Sławomir"
          width={896}
          height={1200}
          sizes="256px"
          className="w-full h-auto block"
          priority
        />
      )}

      {/* Treść */}
      <div className="px-5 pb-5 pt-4">
        {!logo && (
          <>
            <p className="text-white font-bold text-base leading-tight">Sławomir</p>
            <p className="text-white/50 text-xs mt-0.5 mb-4">Konsultant SEO · MiauSEO</p>
          </>
        )}

        {status === "success" ? (
          <div className="bg-white/10 rounded-xl p-4 text-center">
            <p className="text-white font-bold text-sm mb-1">Jesteś na liście!</p>
            <p className="text-white/60 text-xs leading-relaxed">Wysyłamy tylko wartościowe rzeczy — zero spamu.</p>
          </div>
        ) : (
          <>
            {logo ? (
              <p className="text-zinc-300 text-xs leading-relaxed mb-4">
                Co tydzień wysyłamy <strong className="font-semibold text-white">praktyczną wiedzę o marketingu
                dla firm lokalnych</strong> — pozycjonowanie, Google Ads, reklamy w social mediach i zmiany
                w algorytmach. Sprawdzone wskazówki krok po kroku oraz{" "}
                <strong className="font-semibold text-white">realne case studies</strong> z kampanii, które
                prowadzimy dla małych i średnich firm. <strong className="font-semibold text-white">Zero spamu,
                zero lania wody</strong> — same konkrety, które wdrożysz od ręki. Dołącz i bądź zawsze o krok
                przed konkurencją.
              </p>
            ) : (
              <p className="text-zinc-300 text-xs leading-relaxed mb-4">
                Zmiany w Google, praktyczne wskazówki SEO i case studies — prosto na Twoją skrzynkę. Bez lania wody.
              </p>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Twój adres e-mail"
                required
                className="w-full px-3 py-2.5 text-sm rounded-xl border border-white/15 bg-white/10 text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand/50 transition-colors"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-brand hover:bg-brand-dark disabled:opacity-60 text-white font-bold py-2.5 rounded-xl transition-colors duration-200 text-sm"
              >
                {status === "loading" ? "Zapisuję..." : "Dołącz do newslettera"}
              </button>
              {status === "error" && (
                <p className="text-xs text-red-400">{msg}</p>
              )}
            </form>
            <p className="text-[10px] text-white/30 mt-2 text-center">
              Możesz wypisać się w każdej chwili.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
