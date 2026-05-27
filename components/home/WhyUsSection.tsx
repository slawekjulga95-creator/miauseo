import ScrollReveal from "@/components/ui/ScrollReveal";

function PawPrint({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 70" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <ellipse cx="30" cy="48" rx="16" ry="13" fill="#FF6A00" />
      <ellipse cx="12" cy="30" rx="7" ry="9" fill="#FF6A00" />
      <ellipse cx="25" cy="23" rx="7" ry="9" fill="#FF6A00" />
      <ellipse cx="39" cy="23" rx="7" ry="9" fill="#FF6A00" />
      <ellipse cx="51" cy="30" rx="7" ry="9" fill="#FF6A00" />
    </svg>
  );
}

const points = [
  {
    number: "01",
    title: "Nie sprzedajemy kliknięć.\nSprzedajemy klientów.",
    body: (
      <>
        Metryki, które mają znaczenie: <strong className="font-semibold text-ink">leady, sprzedaż, zwrot z inwestycji</strong>.
        Zasięgi i wyświetlenia zostawiamy tym, którzy nie mają nic{" "}
        <strong className="font-semibold text-ink">konkretnego</strong> do pokazania.
      </>
    ),
  },
  {
    number: "02",
    title: "Działamy na danych,\nnie na przeczuciach.",
    body: (
      <>
        Każda decyzja jest poparta <strong className="font-semibold text-ink">twardymi danymi</strong> z kampanii.
        Optymalizujemy <strong className="font-semibold text-ink">co tydzień</strong>, raportujemy co miesiąc.{" "}
        <strong className="font-semibold text-ink">Zero domysłów.</strong>
      </>
    ),
  },
  {
    number: "03",
    title: "Zero ogólników.\nTylko konkrety.",
    body: (
      <>
        Wiesz dokładnie <strong className="font-semibold text-ink">za co płacisz</strong>, co robimy i jakie{" "}
        <strong className="font-semibold text-ink">wyniki osiągamy</strong>. Transparentność nie jest u nas
        wartością – jest <strong className="font-semibold text-ink">standardem</strong>.
      </>
    ),
  },
];

export default function WhyUsSection() {
  return (
    <section className="relative py-24 bg-surface overflow-hidden">

      {/* 3 paw prints – right side */}
      <div className="absolute right-6 lg:right-14 top-1/2 -translate-y-1/2 flex flex-col gap-5 pointer-events-none select-none hidden md:flex">
        <PawPrint className="w-20 h-20 opacity-50 rotate-15" />
        <PawPrint className="w-16 h-16 opacity-35 -rotate-6 ml-4" />
        <PawPrint className="w-18 h-18 opacity-45 rotate-8 ml-1" />
      </div>


      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">
            Dlaczego my
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink max-w-lg leading-snug">
            Mówimy jak jest.{" "}
            <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg mt-1">
              Pokazujemy efekty.
            </span>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {points.map((pt, i) => (
            <ScrollReveal key={pt.number} delay={i * 120}>
              <div className="relative pl-8 border-l-2 border-brand h-full py-2">
                <div className="text-xs font-bold text-brand/50 mb-3 tracking-widest">
                  {pt.number}
                </div>
                <h3 className="text-xl font-bold text-ink mb-4 whitespace-pre-line leading-snug">
                  {pt.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed text-sm">{pt.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
