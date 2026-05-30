import ScrollReveal from "@/components/ui/ScrollReveal";
import YouTubeFacade from "@/components/ui/YouTubeFacade";

const points = [
  <>
    Specjalizujemy się w <strong className="font-semibold text-ink">pozycjonowaniu wizytówki Google</strong> –
    jednym z najskuteczniejszych narzędzi dla firm lokalnych. Pokażemy Ci, jak sprawić, żeby{" "}
    <strong className="font-semibold text-ink">Twoja firma pojawiała się na samej górze</strong> wyników,
    kiedy klienci szukają w Twoim mieście.
  </>,
  <>
    W naszych materiałach omawiamy <strong className="font-semibold text-ink">optymalizację profilu</strong>,
    budowanie <strong className="font-semibold text-ink">recenzji</strong>, strategię{" "}
    <strong className="font-semibold text-ink">zdjęć i postów</strong> oraz to, jak algorytm Google
    decyduje, kogo pokazać w <strong className="font-semibold text-ink">top 3 na Mapach</strong>.
  </>,
  <>
    Zero ogólników. Tylko <strong className="font-semibold text-ink">konkretna wiedza z kampanii</strong>,
    które prowadzimy dla małych i średnich firm. Obejrzyj, zastosuj i{" "}
    <strong className="font-semibold text-ink">sprawdź wyniki sam</strong>.
  </>,
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* YouTube watermark */}
      <div className="absolute top-1/2 -translate-y-1/2 left-6 pointer-events-none select-none hidden md:block">
        <svg viewBox="0 0 24 24" className="w-48 h-48 opacity-[0.15]" fill="#FF0000">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left – heading + paragraphs */}
          <ScrollReveal>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">
              Baza wiedzy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug mb-4">
              Kot nie dzieli się jedzeniem.{" "}
              <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">
                My dzielimy się wiedzą.
              </span>
            </h2>
            <p className="text-zinc-400 text-sm mb-10">
              Bezpłatne materiały wideo bez lania wody. Tylko konkretna wiedza z kampanii, które prowadzimy.
            </p>

            <div className="space-y-6">
              {points.map((pt, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                  </div>
                  <p className="text-zinc-500 leading-relaxed text-sm">{pt}</p>
                </div>
              ))}
            </div>

            <a
              href="https://www.youtube.com/@miauseo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 mt-8 bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200 text-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF6A00">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Przejdź do kanału YouTube
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            {/* Dashed arrows pointing to video */}
            <div className="hidden lg:flex flex-col items-center gap-2 mt-8">
              {[0, 1, 2].map((i) => (
                <svg key={i} width="260" height="18" viewBox="0 0 260 18">
                  <line x1={i * 20} y1="9" x2="242" y2="9" stroke="#FF6A00" strokeWidth="2" strokeDasharray="10 6" strokeLinecap="round" opacity={0.3 + i * 0.25} />
                  <polyline points="236,3 248,9 236,15" stroke="#FF6A00" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity={0.3 + i * 0.25} />
                </svg>
              ))}
            </div>
          </ScrollReveal>

          {/* Right – YouTube facade (loads iframe only on click) */}
          <ScrollReveal delay={150}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-zinc-900">
              <YouTubeFacade videoId="OLPQ3pADZ0k" title="MiauSEO – Baza wiedzy" />
            </div>
            <p className="text-xs text-zinc-400 mt-3 text-center">
              Subskrybuj i bądź na bieżąco z najnowszymi poradnikami
            </p>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
