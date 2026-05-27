import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FinalCTASection() {
  return (
    <section className="py-24 bg-ink overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand/10 blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-brand/5 blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-6">
            Następny krok
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Gotowy na ruch,{" "}
            <span className="text-brand">który naprawdę coś zmienia?</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Powiedz nam o swoim biznesie. Sprawdzimy, czy da się Cię skalować.
            Bezpłatna konsultacja, żadnych zobowiązań.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/kontakt" size="lg">
              Zacznijmy współpracę
            </Button>
            <Button href="/uslugi" variant="ghost" size="lg" className="border-white text-white hover:bg-white hover:text-ink">
              Zobacz usługi
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
