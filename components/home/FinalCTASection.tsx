import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import NewsletterInline from "@/components/NewsletterInline";

export default function FinalCTASection() {
  return (
    <section className="py-24 bg-white overflow-hidden relative border-t border-border">
      {/* Separator — pomarańczowy akcent na górze */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-1.5 rounded-full bg-brand" />

      {/* Akcenty pomarańczowe */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand/10 blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-brand/10 blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <Image
            src="/logo.png"
            alt="MiauSEO"
            width={130}
            height={37}
            className="h-8 w-auto mx-auto mb-8"
          />
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-6">
            Następny krok
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mb-6 leading-tight">
            Gotowy na ruch,{" "}
            <span className="text-brand">który naprawdę coś zmienia?</span>
          </h2>
          <p className="text-zinc-500 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Powiedz nam o swoim biznesie. <strong className="font-semibold text-ink">Sprawdzimy, czy da się
            Cię skalować.</strong> <strong className="font-semibold text-ink">Bezpłatna konsultacja</strong>,
            żadnych zobowiązań.
          </p>

          {/* Ramka — newsletter */}
          <div className="max-w-xl mx-auto bg-surface border border-brand/20 rounded-2xl p-6 sm:p-8 text-left shadow-sm">
            <p className="text-ink font-bold text-lg leading-tight">Zapisz się na newsletter</p>
            <p className="text-zinc-500 text-sm mt-1 mb-5">
              Marketing dla firm lokalnych prosto na maila — pozycjonowanie, reklamy i case studies. Bez lania wody.
            </p>
            <NewsletterInline light />
          </div>

          <p className="text-zinc-500 text-sm mt-8">
            Wolisz pogadać?{" "}
            <Link href="/kontakt" className="text-brand font-semibold hover:underline">
              Umów bezpłatną konsultację
            </Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
