"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

type Field = {
  name: string;
  phone: string;
  company: string;
  email: string;
  message: string;
  consent: boolean;
};

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [form, setForm] = useState<Field>({
    name: "", phone: "", company: "", email: "", message: "", consent: false,
  });

  const set =
    (key: keyof Field) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const inp = "w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-ink placeholder:text-zinc-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!executeRecaptcha) return;
    setLoading(true);
    setError(false);
    try {
      const token = await executeRecaptcha("contact_form");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "kontakt", recaptchaToken: token, ...form }),
      });
      if (!res.ok) throw new Error();
      setSent(true);
      router.push("/dziekujemy");
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Imię *</label>
          <input type="text" required placeholder="Jan Kowalski" value={form.name} onChange={set("name")} className={inp} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Telefon *</label>
          <input type="tel" required placeholder="+48 500 000 000" value={form.phone} onChange={set("phone")} className={inp} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Nazwa firmy</label>
          <input type="text" placeholder="Kowalski Serwis" value={form.company} onChange={set("company")} className={inp} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-zinc-500 mb-1.5">E-mail *</label>
          <input type="email" required placeholder="jan@firma.pl" value={form.email} onChange={set("email")} className={inp} />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Jak możemy pomóc? *</label>
        <textarea
          required
          placeholder="Opisz swoją sytuację — im więcej napiszesz, tym lepiej możemy się przygotować..."
          rows={5} value={form.message} onChange={set("message")}
          className={`${inp} resize-none`}
        />
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" required checked={form.consent}
          onChange={(e) => setForm((prev) => ({ ...prev, consent: e.target.checked }))}
          className="mt-0.5 accent-brand shrink-0" />
        <span className="text-[11px] text-zinc-400 leading-relaxed">
          Wyrażam zgodę na przetwarzanie moich danych osobowych przez MiauSEO w celu udzielenia odpowiedzi na przesłane zapytanie, zgodnie z{" "}
          <a href="/polityka-prywatnosci" className="underline hover:text-brand">Polityką prywatności</a>.
          Podanie danych jest dobrowolne. Mam prawo dostępu do danych, ich sprostowania i usunięcia.
        </span>
      </label>

      {error && (
        <p className="text-red-500 text-sm text-center">Coś poszło nie tak. Napisz na slawomir@miauseo.pl</p>
      )}

      <button type="submit" disabled={loading}
        className="w-full bg-brand hover:bg-brand-dark disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-colors duration-200 text-sm flex items-center justify-center gap-2">
        {loading ? (
          <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" strokeOpacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10" /></svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        )}
        {loading ? "Wysyłanie..." : "Wyślij wiadomość"}
      </button>
      <p className="text-center text-xs text-zinc-400">Odpowiadam zazwyczaj w ciągu kilku godzin roboczych. Zero spamu.</p>
    </form>
  );
}
