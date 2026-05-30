import Image from "next/image";
import Link from "next/link";
import HeroForm from "@/components/home/HeroForm";

const lines = [
  { left: "2%",  top: "18%", h: 90,  rot: 30,   opacity: 0.18, anim: "float-slow 6s ease-in-out infinite" },
  { left: "6%",  top: "38%", h: 60,  rot: -15,  opacity: 0.12, anim: "float-medium 4.5s ease-in-out infinite 0.8s" },
  { left: "3%",  top: "62%", h: 80,  rot: 45,   opacity: 0.20, anim: "float-fast 5s ease-in-out infinite 1.5s" },
  { left: "9%",  top: "25%", h: 45,  rot: -30,  opacity: 0.10, anim: "float-slow 7s ease-in-out infinite 2s" },
  { left: "7%",  top: "72%", h: 55,  rot: 20,   opacity: 0.16, anim: "float-medium 5.5s ease-in-out infinite 1s" },
  { left: "11%", top: "50%", h: 70,  rot: -40,  opacity: 0.11, anim: "float-slow 6.5s ease-in-out infinite 0.4s" },
  { left: "4%",  top: "84%", h: 65,  rot: 55,   opacity: 0.14, anim: "float-fast 4.8s ease-in-out infinite 1.8s" },
];

const dots = [
  { left: "1%",  top: "48%", anim: "float-slow 4s ease-in-out infinite 0.5s" },
  { left: "10%", top: "55%", anim: "float-medium 3.5s ease-in-out infinite 0.3s" },
  { left: "8%",  top: "30%", anim: "float-fast 5s ease-in-out infinite 1.2s" },
];

const advantages = [
  {
    id: "response",
    animation: "float-slow 3.4s ease-in-out infinite",
    card: (
      <div className="bg-white rounded-2xl shadow-2xl border border-white/80 p-5 w-64">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div>
            <p className="text-[11px] font-semibold text-green-600 uppercase tracking-wider">Nasza zasada</p>
            <p className="text-xs text-zinc-400">od pierwszego dnia</p>
          </div>
        </div>
        <p className="text-xl font-bold text-ink leading-snug">Marketing bez pustych obietnic.</p>
      </div>
    ),
    position: "top-24 right-8",
  },
  {
    id: "reports",
    animation: "float-medium 2.9s ease-in-out infinite 0.6s",
    card: (
      <div className="bg-brand rounded-2xl shadow-2xl p-5 w-56">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <p className="text-xs font-semibold text-white/80">Nasza wartość</p>
        </div>
        <p className="text-white font-bold text-lg leading-snug">Transparentność.</p>
        <p className="text-white/60 text-xs mt-1">zero ukrytych kosztów</p>
      </div>
    ),
    position: "bottom-48 right-6",
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #d4d4d4 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
          opacity: 0.45,
        }}
      />

      {/* Floating orange decorative lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
        {lines.map((l, i) => (
          <div key={i} style={{ position: "absolute", left: l.left, top: l.top, animation: l.anim }}>
            <div style={{ width: "2px", height: `${l.h}px`, background: "#FF6A00", opacity: l.opacity, transform: `rotate(${l.rot}deg)`, transformOrigin: "center" }} />
          </div>
        ))}
        {dots.map((d, i) => (
          <div key={i} style={{ position: "absolute", left: d.left, top: d.top, width: "6px", height: "6px", background: "#FF6A00", opacity: 0.22, borderRadius: "50%", animation: d.anim }} />
        ))}
      </div>

      {/* Photo – right side */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%] hidden lg:block">
        <Image
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?fit=crop&crop=top"
          alt="Specjalista MiauSEO"
          fill
          className="object-cover object-top"
          priority
          sizes="58vw"
          quality={85}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, white 10%, rgba(255,255,255,0.55) 30%, rgba(255,255,255,0) 56%)" }} />
        {advantages.map((adv) => (
          <div key={adv.id} className={`absolute ${adv.position}`} style={{ animation: adv.animation }}>
            {adv.card}
          </div>
        ))}
      </div>


      {/* Content – left side */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 min-h-screen flex items-center">
        <div className="w-full lg:max-w-[500px] py-28">

          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-6 animate-fade-up">
            Pozycjonowanie lokalne | Kampanie Leadowe
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-ink leading-[1.15] mb-6 animate-fade-up [animation-delay:100ms]">
            Każdy{" "}
            <span className="inline-flex items-center gap-2 bg-brand text-white px-3 py-0.5 rounded-lg">
              miał
              <svg viewBox="0 0 60 70" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 opacity-80" aria-hidden="true">
                <ellipse cx="30" cy="48" rx="16" ry="13" fill="white" />
                <ellipse cx="12" cy="30" rx="7" ry="9" fill="white" />
                <ellipse cx="25" cy="23" rx="7" ry="9" fill="white" />
                <ellipse cx="39" cy="23" rx="7" ry="9" fill="white" />
                <ellipse cx="51" cy="30" rx="7" ry="9" fill="white" />
              </svg>
            </span>
            {" "}agencję.
            <br />
            <span className="text-brand">Nie każdy efekty.</span>
          </h1>

          <p className="text-lg text-zinc-500 leading-relaxed mb-8 animate-fade-up [animation-delay:200ms]">
            <strong className="font-semibold text-ink">Zaufanie kota zdobywa się latami. Traci w sekundę.</strong>
            <br />
            Tak samo z klientami.
            <br />
            Nie obiecujemy. Pokazujemy. Konkretne działania, realne wyniki, <strong className="font-semibold text-ink">zero ściemy.</strong>
          </p>

          <Link
            href="#sekret"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-7 py-4 rounded-xl transition-colors duration-200 animate-fade-up [animation-delay:300ms] mb-4"
          >
            Poznaj problemy
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </Link>

          {/* Trust items */}
          <div className="flex flex-wrap gap-5 mt-4 pt-5 border-t border-border animate-fade-up [animation-delay:420ms]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l1.62-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 23 16.92z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-ink">Bezpłatna konsultacja</p>
                <p className="text-xs text-zinc-400 mt-0.5">Krótka rozmowa. Zero zobowiązań.</p>
              </div>
            </div>

            <div className="w-px bg-border hidden sm:block" />

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-ink">Elastyczna umowa</p>
                <p className="text-xs text-zinc-400 mt-0.5">Specjalne warianty.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in [animation-delay:1200ms]">
        <Link href="#sekret" className="flex flex-col items-center gap-2 text-zinc-400 hover:text-brand transition-colors">
          <span className="text-xs font-medium tracking-widest uppercase">Przewiń</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </Link>
      </div>

      {/* Delayed lead form */}
      <HeroForm />
    </section>
  );
}
