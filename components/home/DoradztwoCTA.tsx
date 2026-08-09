import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

/**
 * Mostek między usługami a blogiem: klient, który nie wie, co wybrać,
 * dostaje twarz i jedno wyjście — telefon albo formularz.
 */
export default function DoradztwoCTA() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/60">
            <div aria-hidden="true" className="tekstura-ziarno absolute inset-0" />

            <div className="relative flex flex-col sm:flex-row items-center gap-6 sm:gap-8 p-7 sm:p-8">
              <Image
                src="/SlawomirJ.webp"
                alt="Sławomir, MiauSEO"
                width={200}
                height={267}
                sizes="112px"
                className="h-28 w-28 shrink-0 rounded-full object-cover object-top border-2 border-white shadow-[0_10px_24px_-14px_rgba(17,17,17,0.6)]"
              />

              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-[1.35rem] font-bold text-ink tracking-[-0.02em]">
                  Nie wiesz, które rozwiązanie wybrać?
                </h2>
                <p className="mt-2.5 text-[0.97rem] text-zinc-500 leading-relaxed" style={{ maxWidth: "62ch" }}>
                  Napisz albo zadzwoń, a powiem wprost, od czego zacząć w Twojej branży i czego
                  na Twoim etapie <strong className="font-semibold text-ink">nie warto jeszcze robić</strong>.
                  Rozmowa nic nie kosztuje i do niczego nie zobowiązuje.
                </p>
                <p className="mt-2 text-sm text-zinc-400">Sławomir, MiauSEO</p>
              </div>

              <div className="shrink-0 flex flex-col items-center gap-2">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand px-7 py-3.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-brand-dark whitespace-nowrap"
                >
                  Napisz do mnie
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href="tel:+48455571349"
                  className="text-sm font-bold text-ink hover:text-brand transition-colors whitespace-nowrap"
                >
                  +48 455 571 349
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
