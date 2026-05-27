import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import CatWatermark from "@/components/ui/CatWatermark";

export const metadata: Metadata = {
  title: "Kontakt – MiauSEO | Bezpłatna konsultacja",
  description:
    "Skontaktuj się z MiauSEO. Bezpłatna konsultacja dotycząca pozycjonowania wizytówki Google, SEO strony, Google Ads i Meta Ads. Odpowiadamy w ciągu kilku godzin.",
};

const steps = [
  {
    num: "01",
    title: "Wypełniasz formularz",
    desc: "Kilka słów o firmie i sytuacji – im więcej napiszesz, tym lepiej przygotuję się do rozmowy.",
  },
  {
    num: "02",
    title: "Oddzwaniam lub piszę",
    desc: "W ciągu kilku godzin roboczych kontaktuję się z Tobą i umawiamy dogodny termin rozmowy.",
  },
  {
    num: "03",
    title: "Konsultacja 30–45 min",
    desc: "Analizujemy razem Twoją sytuację. Zero sprzedawania na siłę – tylko konkretna diagnoza i plan.",
  },
];

const contactItems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.06 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
      </svg>
    ),
    label: "Telefon",
    value: "+48 XXX XXX XXX",
    href: "tel:+48XXXXXXXXX",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "kontakt@miauseo.pl",
    href: "mailto:kontakt@miauseo.pl",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Czas odpowiedzi",
    value: "Kilka godzin roboczych",
    href: null,
  },
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.16 8.16 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function KontaktPage() {
  return (
    <main className="pt-24">

      {/* ── Hero ── */}
      <section className="bg-ink py-20 px-6 relative overflow-hidden">
        <CatWatermark />
        {/* decorative circles */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-brand/5 pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-64 h-64 rounded-full bg-brand/5 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative">
          <p className="text-brand font-bold text-sm uppercase tracking-widest mb-4">Kontakt</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-2xl">
            Porozmawiajmy<br />
            <span className="text-brand">o Twojej firmie.</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
            Bezpłatna konsultacja — bez zobowiązań, bez sprzedawania na siłę. Sprawdzamy razem, czy i jak możemy Ci pomóc.
          </p>
        </div>
      </section>

      {/* ── Main: form + info ── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left — form */}
          <div className="w-full lg:w-7/12 bg-surface rounded-3xl p-8 md:p-10 border border-border">
            <h2 className="text-2xl font-bold text-ink mb-2">Napisz do mnie</h2>
            <p className="text-zinc-500 text-sm mb-8">Odpowiem w ciągu kilku godzin roboczych.</p>
            <ContactForm />
          </div>

          {/* Right — info */}
          <div className="w-full lg:w-5/12 space-y-8">

            {/* Contact data */}
            <div>
              <h2 className="text-lg font-bold text-ink mb-5">Dane kontaktowe</h2>
              <ul className="space-y-4">
                {contactItems.map((item) => (
                  <li key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[11px] text-zinc-400 font-semibold uppercase tracking-wide">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-semibold text-ink hover:text-brand transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-ink">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="h-px bg-border" />

            {/* Socials */}
            <div>
              <p className="text-[11px] text-zinc-400 font-semibold uppercase tracking-widest mb-4">Znajdziesz mnie też na</p>
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-zinc-500 hover:text-brand hover:border-brand/30 hover:bg-orange-50 transition-all duration-150"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border" />

            {/* Steps */}
            <div>
              <p className="text-[11px] text-zinc-400 font-semibold uppercase tracking-widest mb-5">Jak wygląda współpraca?</p>
              <ul className="space-y-5">
                {steps.map((step) => (
                  <li key={step.num} className="flex gap-4">
                    <span className="text-[1.75rem] font-bold text-brand/20 leading-none shrink-0 tabular-nums">{step.num}</span>
                    <div>
                      <p className="font-bold text-ink text-sm mb-0.5">{step.title}</p>
                      <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-surface border-t border-border py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-ink mb-10">Zanim napiszesz – może tu znajdziesz odpowiedź</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "Czy konsultacja jest naprawdę bezpłatna?",
                a: "Tak, bez żadnych warunków. Nie musisz podjąć decyzji o współpracy. Rozmowa to po prostu wspólne spojrzenie na Twoją sytuację.",
              },
              {
                q: "Jak szybko oddzwonisz?",
                a: "Zazwyczaj w ciągu kilku godzin roboczych. W weekendy czas może być dłuższy — wtedy odpisuję w poniedziałek rano.",
              },
              {
                q: "Czy pracujesz z każdą branżą?",
                a: "Specjalizuję się w firmach lokalnych — usługi, handel, rzemiosło. Jeśli Twoja branża jest inna, powiem Ci szczerze czy mogę pomóc.",
              },
              {
                q: "Od czego zależy cena współpracy?",
                a: "Od zakresu działań, konkurencji w Twojej branży i lokalizacji. Na konsultacji omówimy to konkretnie — bez ogólnikowych cenników.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl border border-border p-6">
                <p className="font-bold text-ink mb-2 text-sm">{faq.q}</p>
                <p className="text-zinc-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom strip ── */}
      <section className="bg-brand py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-bold text-lg text-center sm:text-left">
            Wolisz zadzwonić? Numer czeka.
          </p>
          <a
            href="tel:+48XXXXXXXXX"
            className="shrink-0 bg-white text-brand font-bold px-8 py-3.5 rounded-xl hover:bg-orange-50 transition-colors duration-200 text-sm"
          >
            +48 XXX XXX XXX
          </a>
        </div>
      </section>

    </main>
  );
}
