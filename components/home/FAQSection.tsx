import ScrollReveal from "@/components/ui/ScrollReveal";

const faqs = [
  {
    q: "Jak długo trwa pozycjonowanie wizytówki Google?",
    a: "Pierwsze efekty widać zazwyczaj po 2–4 tygodniach — więcej wyświetleń, połączeń i zapytań o trasę. Pełna widoczność w top 3 lokalnych wyników to kwestia 2–3 miesięcy, zależnie od konkurencji w Twojej branży i mieście. Pozycjonowanie wizytówki to proces ciągły — algorytm Google nagradza aktywność i regularność.",
  },
  {
    q: "Ile kosztuje pozycjonowanie wizytówki Google?",
    a: "Usługa wyceniana jest indywidualnie — zależy od lokalizacji, branży i liczby fraz, na które chcemy być widoczni. Ceny zaczynają się od 500 zł netto miesięcznie. Pracujemy w modelu miesięcznym bez długoterminowych zobowiązań. Na bezpłatnej konsultacji omówimy Twoją sytuację i podamy konkretną kwotę.",
  },
  {
    q: "Czy pozycjonowanie wizytówki działa dla małych miejscowości?",
    a: "Tak — i często jest to nawet łatwiejsze, bo konkurencja jest mniejsza. Pomagamy firmom z mniejszych miast pojawiać się w wynikach lokalnych dla okolicznych miejscowości, co znacznie rozszerza zasięg bez konieczności otwierania kolejnych oddziałów.",
  },
  {
    q: "Czym różni się pozycjonowanie wizytówki od zwykłego SEO strony?",
    a: "SEO strony wpływa na organiczne wyniki wyszukiwania (tzw. niebieskie linki). Pozycjonowanie wizytówki Google to wyniki w Mapach Google — tzw. 3-pak, który pojawia się nad organicznymi wynikami i generuje bezpośrednie połączenia telefoniczne, zapytania o trasę i kliknięcia na stronę. Dla firm lokalnych jest zwykle skuteczniejsze i szybsze w efektach.",
  },
  {
    q: "Co dokładnie robicie w ramach pozycjonowania wizytówki?",
    a: "Optymalizujemy każdy element profilu Google Business: kategorie, opis, atrybuty, godziny, zdjęcia, posty i sekcję Q&A. Budujemy strategię pozyskiwania recenzji, monitorujemy pozycje i co tydzień raportujemy wyniki. Dbamy też o spójność danych NAP (Nazwa, Adres, Telefon) w całym internecie, co ma bezpośredni wpływ na pozycję.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug">
            Najczęstsze{" "}
            <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">
              pytania
            </span>
          </h2>
          <p className="text-zinc-500 mt-4 max-w-lg mx-auto text-sm">
            Odpowiadamy na to, co pytają nas klienci zanim zdecydują się na współpracę.
          </p>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <details className="group bg-white rounded-2xl border border-border overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-7 py-5 cursor-pointer list-none">
                  <span className="font-semibold text-ink text-base leading-snug">{faq.q}</span>
                  <div className="shrink-0 w-7 h-7 rounded-full bg-brand/10 text-brand flex items-center justify-center group-open:bg-brand group-open:text-white transition-colors duration-200">
                    <svg
                      width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      className="transition-transform duration-300 group-open:rotate-45"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </summary>
                <p className="px-7 pb-6 text-zinc-500 leading-relaxed text-sm border-t border-border pt-4">
                  {faq.a}
                </p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
