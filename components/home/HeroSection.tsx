import Image from "next/image";
import Link from "next/link";
import HeroLeadForm from "@/components/home/HeroLeadForm";

/** Punkty krzywej „wzrostu telefonów" — ten sam motyw co wykres z panelu Google. */
const PUNKTY: [number, number][] = [
  [0, 268], [90, 250], [180, 258], [270, 224], [360, 232],
  [450, 196], [540, 205], [630, 158], [720, 170], [810, 118],
  [900, 132], [990, 74], [1080, 92], [1170, 36], [1260, 52], [1350, 10],
];

const LINIA = PUNKTY.map(([x, y]) => `${x},${y}`).join(" ");
const OBSZAR = `0,300 ${LINIA} 1350,300`;

/**
 * Iskry po lewej stronie hero. Wartości są wpisane ręcznie, a nie losowane,
 * bo losowanie przy renderze serwerowym rozjeżdża się z hydracją. Nierówne
 * czasy i zwłoki sprawiają, że rytm i tak nie układa się w pętlę.
 * `male: true` znika na telefonie, żeby nie właziło w tekst.
 */
type Iskra = {
  x: string; y: string; r: number;
  dx: string; dy: string;
  czas: string; zwloka: string; szczyt: number;
  tylkoDesktop?: boolean;
};

const ISKRY: Iskra[] = [
  { x: "5%",  y: "20%", r: 6, dx: "12px",  dy: "-30px", czas: "5.5s", zwloka: "0s",   szczyt: 1 },
  { x: "16%", y: "66%", r: 4, dx: "-9px",  dy: "-22px", czas: "4.8s", zwloka: "1.1s", szczyt: 0.9 },
  { x: "30%", y: "12%", r: 5, dx: "14px",  dy: "-18px", czas: "6.2s", zwloka: "2.3s", szczyt: 0.85, tylkoDesktop: true },
  { x: "8%",  y: "84%", r: 7, dx: "16px",  dy: "-34px", czas: "6.8s", zwloka: "3.4s", szczyt: 0.95, tylkoDesktop: true },
  { x: "41%", y: "46%", r: 4, dx: "-12px", dy: "-26px", czas: "5.2s", zwloka: "1.8s", szczyt: 0.8,  tylkoDesktop: true },
  { x: "23%", y: "34%", r: 5, dx: "10px",  dy: "-28px", czas: "6.4s", zwloka: "4.2s", szczyt: 0.9 },
  { x: "2%",  y: "52%", r: 4, dx: "15px",  dy: "-20px", czas: "5s",   zwloka: "5.1s", szczyt: 0.85, tylkoDesktop: true },
  { x: "35%", y: "76%", r: 8, dx: "-10px", dy: "-32px", czas: "7.4s", zwloka: "2.9s", szczyt: 0.75, tylkoDesktop: true },
  { x: "12%", y: "42%", r: 5, dx: "8px",   dy: "-24px", czas: "5.9s", zwloka: "6.2s", szczyt: 0.9 },
  { x: "45%", y: "88%", r: 6, dx: "-14px", dy: "-30px", czas: "6.6s", zwloka: "0.7s", szczyt: 0.8,  tylkoDesktop: true },
];

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white border-b border-border">
      {/* Tekstura: siatka + ziarno (klasy w globals.css, te same co w sekcjach) */}
      <div aria-hidden="true" className="tekstura-siatka absolute inset-0 -z-10" />
      <div aria-hidden="true" className="tekstura-ziarno absolute inset-0 -z-10" />

      {/* Znak wodny: łapa z logo */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute -z-10 pointer-events-none"
        style={{
          right: "-3rem",
          top: "4rem",
          width: "26rem",
          height: "26rem",
          backgroundImage: "url('/logo.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          opacity: 0.05,
          transform: "rotate(-12deg)",
        }}
      />

      {/* Iskry — tylko lewa część hero, warstwa czysto dekoracyjna */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 -z-10 w-[62%] lg:w-[46%]"
      >
        {ISKRY.map((iskra, i) => (
          <span
            key={i}
            className={`iskra ${iskra.tylkoDesktop ? "hidden lg:block" : ""}`}
            style={{
              left: iskra.x,
              top: iskra.y,
              width: `${iskra.r}px`,
              height: `${iskra.r}px`,
              ["--dx" as string]: iskra.dx,
              ["--dy" as string]: iskra.dy,
              ["--czas" as string]: iskra.czas,
              ["--zwloka" as string]: iskra.zwloka,
              ["--szczyt" as string]: iskra.szczyt,
            }}
          />
        ))}
      </div>

      {/* Krzywa wzrostu — rośnie w prawo, pod treścią */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1350 300"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 -z-10 w-full h-[46%] lg:h-[58%]"
      >
        <defs>
          <linearGradient id="hero-wypelnienie" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF6A00" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#FF6A00" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hero-linia" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FF6A00" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FF6A00" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <polygon points={OBSZAR} fill="url(#hero-wypelnienie)" />
        <polyline
          points={LINIA}
          fill="none"
          stroke="url(#hero-linia)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        {PUNKTY.filter((_, i) => i % 2 === 1).map(([x, y]) => (
          <circle key={x} cx={x} cy={y} r="4" fill="#ffffff" stroke="#FF6A00" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
        ))}
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-y-14 lg:gap-x-16 items-center pt-32 pb-20 lg:pt-28 lg:pb-28">
        {/* Treść sprzedażowa */}
        <div className="lg:col-span-7 animate-fade-up">
          <h1
            className="text-ink"
            style={{
              fontSize: "clamp(2.4rem, 5.2vw, 3.9rem)",
              fontWeight: 800,
              letterSpacing: "-0.035em",
              lineHeight: 1.07,
            }}
          >
            Więcej zapytań.
            <br />
            Więcej telefonów.
            <br />
            <span style={{ color: "var(--color-brand)" }}>Więcej klientów.</span>
          </h1>

          <p
            className="mt-7"
            style={{
              fontSize: "1.0625rem",
              color: "#52525b",
              lineHeight: 1.65,
              maxWidth: "48ch",
            }}
          >
            Twoi klienci właśnie wpisują w Google to, co sprzedajesz. Sprawiamy, że
            znajdują <strong className="text-ink font-bold">Ciebie, nie konkurencję</strong> —
            a efekty rozliczamy telefonami i zapytaniami, nie kolorowymi raportami.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 font-bold text-white rounded-xl bg-brand hover:bg-brand-dark transition-colors duration-200"
              style={{
                fontSize: "0.975rem",
                padding: "1rem 1.9rem",
                boxShadow: "0 10px 26px -12px rgba(255,106,0,0.85)",
              }}
            >
              Umów bezpłatną konsultację
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Dowód: prawdziwy wynik z panelu klienta */}
          <figure className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 rounded-2xl border border-border bg-white/85 backdrop-blur-sm p-4 sm:pr-7 max-w-[600px] shadow-[0_18px_40px_-30px_rgba(17,17,17,0.45)]">
            <Image
              src="/ProtetykPila.png"
              alt="Wykres połączeń telefonicznych z wizytówki Google gabinetu protetycznego"
              width={1168}
              height={449}
              sizes="(max-width: 640px) 90vw, 200px"
              className="w-full sm:w-[200px] h-auto rounded-lg border border-border shrink-0"
            />
            <figcaption>
              <p className="text-ink" style={{ fontSize: "1.05rem", fontWeight: 700, lineHeight: 1.3 }}>
                62 telefony z wizytówki w 30 dni
              </p>
              <p className="text-sm text-zinc-500 mt-1">
                Branża protetyczna.{" "}
                <Link href="/referencje" className="font-semibold text-ink underline underline-offset-4 decoration-border hover:text-brand hover:decoration-brand transition-colors">
                  Zobacz kolejne wyniki
                </Link>
              </p>
            </figcaption>
          </figure>
        </div>

        {/* Formularz */}
        <div className="lg:col-span-5 w-full max-w-[440px] mx-auto lg:mx-0 lg:ml-auto animate-fade-up">
          <HeroLeadForm />
        </div>
      </div>
    </section>
  );
}
