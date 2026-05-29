"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Field = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  consent: boolean;
};

const services = [
  "Pozycjonowanie wizytówki Google",
  "Pozycjonowanie strony internetowej",
  "Google Ads",
  "Meta Ads",
  "Nie wiem jeszcze – chcę porozmawiać",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const router = useRouter();
  const [form, setForm] = useState<Field>({
    name: "", company: "", email: "", phone: "", service: "", message: "", consent: false,
  });

  const set =
    (key: keyof Field) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value =
        e.target instanceof HTMLInputElement && e.target.type === "checkbox"
          ? e.target.checked
          : e.target.value;
      setForm((prev) => ({ ...prev, [key]: value }));
    };

  if (sent) {
    return (
      <div className="flex flex-col items-center text-center py-16 px-8">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-ink mb-2">Gotowe – odezwę się wkrótce!</h3>
        <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
          Zazwyczaj odpowiadam w ciągu kilku godzin roboczych. Do zobaczenia po drugiej stronie.
        </p>
      </div>
    );
  }

  const input =
    "w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-ink placeholder:text-zinc-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition";

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); router.push("/dziekujemy"); }} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Imię i nazwisko *</label>
          <input type="text" required placeholder="Jan Kowalski" value={form.name} onChange={set("name")} className={input} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Nazwa firmy</label>
          <input type="text" placeholder="Kowalski Serwis" value={form.company} onChange={set("company")} className={input} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Email *</label>
          <input type="email" required placeholder="jan@firma.pl" value={form.email} onChange={set("email")} className={input} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Telefon *</label>
          <input type="tel" required placeholder="+48 500 000 000" value={form.phone} onChange={set("phone")} className={input} />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Czego szukasz?</label>
        <select value={form.service} onChange={set("service")} className={`${input} cursor-pointer`}>
          <option value="">Wybierz temat rozmowy...</option>
          {services.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Opisz swoją sytuację</label>
        <textarea
          placeholder="Mam wizytówkę Google od roku, ale nie pojawiam się w mapach mimo że konkurencja jest widoczna..."
          rows={5} value={form.message} onChange={set("message")}
          className={`${input} resize-none`}
        />
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox" required checked={form.consent}
          onChange={(e) => setForm((prev) => ({ ...prev, consent: e.target.checked }))}
          className="mt-0.5 accent-brand shrink-0"
        />
        <span className="text-[11px] text-zinc-400 leading-relaxed">
          Wyrażam zgodę na przetwarzanie moich danych osobowych przez MiauSEO w celu odpowiedzi na zapytanie, zgodnie z{" "}
          <a href="/polityka-prywatnosci" className="underline hover:text-brand">Polityką prywatności</a>.
          Dane nie będą udostępniane osobom trzecim.
        </span>
      </label>

      <button
        type="submit"
        className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-4 rounded-xl transition-colors duration-200 text-sm flex items-center justify-center gap-2"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
        Wyślij wiadomość
      </button>
      <p className="text-center text-xs text-zinc-400">Odpowiadam zazwyczaj w ciągu kilku godzin roboczych. Zero spamu.</p>
    </form>
  );
}
