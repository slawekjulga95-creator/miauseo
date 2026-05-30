import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const paragraphs = [
  <>
    Wizytówka Google to <strong className="font-semibold text-ink">najszybszy sposób</strong> na pozyskanie
    lokalnych klientów. Gdy ktoś wpisuje w Google nazwę usługi i miasto, w pierwszej kolejności widzi{" "}
    <strong className="font-semibold text-ink">3 firmy z Mapy Google</strong>. Jeśli Cię tam nie ma —
    tracisz klientów na rzecz konkurencji.
  </>,
  <>
    Pozycjonowanie wizytówki to nie przypadek. To praca nad{" "}
    <strong className="font-semibold text-ink">każdym elementem profilu</strong>: kategoriami, opisem,
    zdjęciami, godzinami, postami i <strong className="font-semibold text-ink">recenzjami</strong>.
    Algorytm Google ocenia kompletność i aktywność wizytówki — i na tej podstawie decyduje, kogo pokazać.
  </>,
  <>
    Pracujemy z firmami, które mają siedzibę w małych miejscowościach i chcą docierać do klientów
    w pobliskich miastach. Pomagamy też firmom z dużych miast,{" "}
    <strong className="font-semibold text-ink">które utknęły poza top 3</strong> i nie wiedzą dlaczego
    konkurencja jest zawsze wyżej.
  </>,
  <>
    Efekty widać już po <strong className="font-semibold text-ink">kilku tygodniach</strong>. Więcej
    połączeń, więcej zapytań o trasę dojazdu, więcej klientów, którzy przyszli bo{" "}
    <strong className="font-semibold text-ink">znaleźli Cię na Mapach Google</strong> — nie przez
    polecenie i nie przez przypadek.
  </>,
];

const photos = [
  {
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?fit=crop&crop=top",
    alt: "Specjalista MiauSEO przy pracy",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop",
    alt: "Wyniki kampanii",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?fit=crop",
    alt: "Analiza danych",
    className: "col-span-1 row-span-1",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left – text */}
          <ScrollReveal>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">
              Nasza specjalizacja
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug mb-8">
              Pozycjonowanie{" "}
              <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">
                wizytówki Google
              </span>
            </h2>

            <div className="space-y-5">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-zinc-500 leading-relaxed text-sm border-l-2 border-brand/20 pl-4">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2.5 bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200 text-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l1.62-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Umów bezpłatną konsultację
              </Link>
            </div>
          </ScrollReveal>

          {/* Right – photo grid */}
          <ScrollReveal delay={150}>
            <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[420px]">
              <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative">
                <Image
                  src={photos[0].src}
                  alt={photos[0].alt}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 66vw, 33vw"
                />
              </div>
              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative">
                <Image
                  src={photos[1].src}
                  alt={photos[1].alt}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 33vw, 16vw"
                />
              </div>
              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative">
                <Image
                  src={photos[2].src}
                  alt={photos[2].alt}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 33vw, 16vw"
                />
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
