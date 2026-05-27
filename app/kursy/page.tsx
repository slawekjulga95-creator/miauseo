import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kursy online – MiauSEO",
  description: "Kursy online o local SEO i pozycjonowaniu wizytówki Google Business Profile. Konkretna wiedza, gotowy plan działania.",
};

const courses = [
  {
    href: "/kursy/wizytowka-stoi-w-miejscu",
    badge: "Kurs online",
    title: "Wizytówka stoi w miejscu – napraw to raz na zawsze.",
    desc: (
      <>
        <strong className="font-semibold text-ink">8 lekcji wideo (140 minut)</strong> o tym, jak diagnozować i naprawić wizytówkę Google Business Profile, która{" "}
        <strong className="font-semibold text-ink">nie rośnie w wynikach map</strong>. Wychodzisz z{" "}
        <strong className="font-semibold text-ink">gotowym planem działania</strong> — nie kolejnymi pytaniami.
      </>
    ),
    photo: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80&fit=crop&crop=center",
    includes: [
      "8 lekcji wideo · 140 minut",
      "Dostęp nielimitowany",
      "Lista kontrolna + plan naprawczy",
      "Aktualizacje bez dodatkowych opłat",
    ],
    price: "500",
    priceNote: "brutto · jednorazowo",
  },
];

export default function KursyPage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20">
            <div className="lg:w-5/12 shrink-0">
              <p className="text-brand font-bold text-sm uppercase tracking-widest mb-4">Kursy online</p>
              <h1 className="text-4xl md:text-5xl font-bold text-ink leading-tight">
                <span className="bg-brand text-white px-2 py-0.5 rounded-md">Wiedza</span>{" "}
                która działa.
              </h1>
            </div>
            <div className="lg:w-7/12 lg:border-l-2 lg:border-brand/20 lg:pl-14 pb-1">
              <p className="text-zinc-600 text-[17px] leading-relaxed">
                Nie teoria, nie ogólniki. Kursy MiauSEO to{" "}
                <strong className="text-ink font-semibold">konkretne działania i gotowe plany</strong> — tak żebyś wychodził z lekcji wiedząc{" "}
                <strong className="text-ink font-semibold">co zrobić następnego dnia</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Siatka kursów */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.href}
                className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden flex flex-col hover:shadow-lg hover:border-brand/30 transition-all duration-200"
              >
                {/* Zdjęcie */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={course.photo}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest bg-brand text-white px-2.5 py-1 rounded-md">
                      {course.badge}
                    </span>
                  </div>
                </div>

                {/* Treść */}
                <div className="p-7 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-ink leading-snug mb-3">
                    {course.title}
                  </h2>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-5">
                    {course.desc}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {course.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-zinc-600">
                        <div className="w-4 h-4 rounded-full bg-brand/15 flex items-center justify-center shrink-0">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Cena + CTA */}
                  <div className="mt-auto pt-5 border-t border-border flex items-center justify-between gap-4">
                    <div>
                      <div className="flex items-end gap-1 leading-none">
                        <span className="text-4xl font-black text-ink">{course.price}</span>
                        <span className="text-xl font-bold text-ink mb-0.5">zł</span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-1">{course.priceNote}</p>
                    </div>
                    <Link
                      href={course.href}
                      className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-5 py-3 rounded-xl transition-colors duration-200 text-sm shrink-0"
                    >
                      Kup kurs
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
