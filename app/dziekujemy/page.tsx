import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dziękujemy za zapytanie – MiauSEO",
  robots: { index: false, follow: false },
};

export default function DziekujemyPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 py-24">
      <div className="max-w-lg w-full text-center">

        {/* Icon */}
        <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-8">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-ink mb-4">
          Dziękujemy za zapytanie!
        </h1>
        <p className="text-zinc-500 text-lg leading-relaxed mb-8">
          Zazwyczaj odpowiadamy <strong className="text-ink font-semibold">w ciągu kilku minut</strong> w godzinach roboczych. Sprawdź skrzynkę — wkrótce się odezwiemy.
        </p>

        {/* Info boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { label: "Czas odpowiedzi", value: "Do 15 minut" },
            { label: "Preferowany kontakt", value: "Email lub telefon" },
            { label: "Pierwszy krok", value: "Bezpłatna konsultacja" },
          ].map((item) => (
            <div key={item.label} className="bg-surface rounded-2xl p-4 border border-border">
              <p className="text-xs text-zinc-400 font-semibold uppercase tracking-widest mb-1">{item.label}</p>
              <p className="text-sm font-bold text-ink">{item.value}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-block bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl transition-colors duration-200"
          >
            Wróć na stronę główną
          </Link>
          <Link
            href="/blog"
            className="inline-block border border-border text-ink hover:border-brand hover:text-brand font-semibold px-8 py-4 rounded-xl transition-colors duration-200"
          >
            Poczytaj blog
          </Link>
        </div>

      </div>
    </main>
  );
}
