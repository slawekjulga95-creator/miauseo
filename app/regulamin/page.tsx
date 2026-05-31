import type { Metadata } from "next";
import CatWatermark from "@/components/ui/CatWatermark";

export const metadata: Metadata = {
  title: "Regulamin – MiauSEO",
  description: "Regulamin świadczenia usług przez agencję MiauSEO. Zasady korzystania z serwisu, warunki umów i zakres odpowiedzialności.",
};

const sections = [
  {
    id: "postanowienia",
    title: "Postanowienia ogólne",
    content: [
      'Niniejszy regulamin określa zasady korzystania z serwisu internetowego dostępnego pod adresem miauseo.pl oraz zasady świadczenia usług przez MiauSEO, prowadzące działalność gospodarczą na terytorium Rzeczypospolitej Polskiej (dalej: „Usługodawca" lub „MiauSEO").',
      "Kontakt z Usługodawcą możliwy jest pod adresem e-mail: kontakt@miauseo.pl. Korzystanie z serwisu oznacza akceptację niniejszego regulaminu.",
    ],
  },
  {
    id: "definicje",
    title: "Definicje",
    content: [
      "Na potrzeby niniejszego regulaminu przyjmuje się następujące znaczenie pojęć:",
    ],
    items: [
      { label: "Serwis", desc: "Strona internetowa dostępna pod adresem miauseo.pl wraz z wszystkimi podstronami i zasobami cyfrowymi." },
      { label: "Użytkownik", desc: "Osoba fizyczna, prawna lub jednostka organizacyjna nieposiadająca osobowości prawnej, korzystająca z serwisu." },
      { label: "Usługi", desc: "Świadczone przez MiauSEO usługi marketingowe, w tym pozycjonowanie SEO, kampanie Google Ads, Meta Ads, TikTok Ads, local SEO oraz kursy online." },
      { label: "Umowa", desc: "Umowa o świadczenie usług zawarta między MiauSEO a Klientem na warunkach określonych w indywidualnej ofercie i niniejszym regulaminie." },
    ],
  },
  {
    id: "korzystanie",
    title: "Zasady korzystania z serwisu",
    content: [
      "Użytkownik zobowiązuje się do korzystania z serwisu zgodnie z obowiązującymi przepisami prawa, niniejszym regulaminem oraz dobrymi obyczajami.",
    ],
    list: [
      "Zabronione jest przesyłanie treści o charakterze bezprawnym, obraźliwym lub naruszającym prawa osób trzecich.",
      "Zabronione jest podejmowanie działań mogących zakłócić prawidłowe funkcjonowanie serwisu, w szczególności ataków DDoS, scrapingu masowego i inżynierii wstecznej.",
      "Zabronione jest wykorzystywanie serwisu do rozsyłania spamu lub niezamówionej korespondencji handlowej.",
      "Wszelkie treści zamieszczone w serwisie podlegają ochronie prawa autorskiego i nie mogą być powielane bez zgody MiauSEO.",
    ],
  },
  {
    id: "uslugi",
    title: "Warunki świadczenia usług",
    content: [
      "Świadczenie usług odbywa się na podstawie indywidualnie zawartej umowy, której warunki określone są w ofercie przesłanej Klientowi drogą elektroniczną.",
    ],
    items: [
      {
        label: "Zawarcie umowy",
        desc: "Umowa zostaje zawarta z chwilą pisemnej (lub e-mailowej) akceptacji oferty przez Klienta oraz uregulowania wymaganej zaliczki lub pierwszej płatności.",
      },
      {
        label: "Czas trwania",
        desc: "Usługi świadczone są przez okres określony w umowie. Standardowy okres rozliczeniowy wynosi jeden miesiąc kalendarzowy, o ile strony nie uzgodniły inaczej.",
      },
      {
        label: "Rozwiązanie umowy",
        desc: "Każda ze stron może wypowiedzieć umowę z zachowaniem okresu wypowiedzenia wskazanego w indywidualnych warunkach. MiauSEO może rozwiązać umowę ze skutkiem natychmiastowym w przypadku naruszenia jej postanowień przez Klienta.",
      },
      {
        label: "Reklamacje",
        desc: "Reklamacje dotyczące świadczonych usług należy kierować na adres kontakt@miauseo.pl. Rozpatrzenie reklamacji następuje w terminie do 14 dni roboczych od jej otrzymania.",
      },
    ],
  },
  {
    id: "platnosci",
    title: "Płatności i faktury",
    content: [
      "Wynagrodzenie za usługi ustalane jest indywidualnie i określone w ofercie lub umowie. MiauSEO wystawia faktury VAT zgodnie z obowiązującymi przepisami podatkowymi.",
    ],
    list: [
      "Faktury wystawiane są na początku każdego okresu rozliczeniowego lub zgodnie z harmonogramem płatności wskazanym w umowie.",
      "Termin płatności wynosi 7 dni od daty wystawienia faktury, o ile umowa nie stanowi inaczej.",
      "W przypadku opóźnienia w płatności MiauSEO ma prawo do naliczania ustawowych odsetek za zwłokę oraz zawieszenia świadczenia usług.",
      "Wszystkie ceny podawane są w złotych polskich (PLN) i są cenami netto — do kwoty netto doliczany jest podatek VAT według stawki obowiązującej w dniu wystawienia faktury.",
    ],
  },
  {
    id: "odpowiedzialnosc",
    title: "Ograniczenie odpowiedzialności",
    content: [
      "MiauSEO dołoży wszelkich starań, aby świadczone usługi były wykonywane rzetelnie i z najwyższą dbałością o interesy Klienta. Jednocześnie:",
    ],
    items: [
      {
        label: "Wyniki SEO i kampanii",
        desc: "MiauSEO nie gwarantuje osiągnięcia konkretnych pozycji w wynikach wyszukiwania ani określonego ROAS, ponieważ są one uzależnione od czynników zewnętrznych (algorytm Google, działania konkurencji, budżet). Zobowiązujemy się do profesjonalnego i starannego działania.",
      },
      {
        label: "Dostępność serwisu",
        desc: "MiauSEO nie ponosi odpowiedzialności za przerwy w dostępności serwisu wynikające z prac serwisowych, awarii infrastruktury zewnętrznej lub działania siły wyższej.",
      },
      {
        label: "Treści zewnętrzne",
        desc: "Serwis może zawierać linki do zewnętrznych stron internetowych. MiauSEO nie ponosi odpowiedzialności za treści zamieszczone na stronach osób trzecich.",
      },
    ],
  },
  {
    id: "kursy",
    title: "Kursy online",
    content: [
      "MiauSEO oferuje kursy online dostępne po dokonaniu jednorazowej płatności lub wykupieniu subskrypcji. Warunki szczegółowe kursów:",
    ],
    list: [
      "Dostęp do kursu jest przyznawany po zaksięgowaniu płatności i powiązaniu z kontem użytkownika.",
      "Kurs przeznaczony jest wyłącznie do użytku osobistego — zabrania się odsprzedaży, udostępniania danych dostępowych osobom trzecim oraz kopiowania materiałów.",
      "Zgodnie z art. 38 pkt 13 ustawy o prawach konsumenta, prawo odstąpienia od umowy nie przysługuje po rozpoczęciu odtwarzania treści cyfrowych — zakup wiąże się z natychmiastowym dostępem i utratą prawa do odstąpienia.",
      "W przypadku kursów stacjonarnych lub webinarów, rezygnacja w terminie krótszym niż 48 godzin przed rozpoczęciem nie uprawnia do zwrotu opłaty.",
    ],
  },
  {
    id: "prawa-autorskie",
    title: "Prawa własności intelektualnej",
    content: [
      "Wszelkie treści zamieszczone w serwisie — teksty, grafiki, logotypy, filmy, opisy usług, materiały kursów — są własnością MiauSEO lub podmiotów, które udzieliły MiauSEO licencji na ich wykorzystanie.",
      "Jakiekolwiek kopiowanie, modyfikowanie, dystrybucja lub publiczne odtwarzanie tych treści bez uprzedniej pisemnej zgody MiauSEO jest zabronione i stanowi naruszenie praw autorskich.",
    ],
  },
  {
    id: "zmiany",
    title: "Zmiany regulaminu",
    content: [
      "MiauSEO zastrzega sobie prawo do zmiany niniejszego regulaminu w dowolnym czasie. Zmiany wchodzą w życie z chwilą opublikowania nowej wersji w serwisie. W przypadku Klientów będących stronami aktywnych umów, istotne zmiany będą komunikowane drogą e-mailową z co najmniej 14-dniowym wyprzedzeniem.",
      "Data ostatniej aktualizacji regulaminu widoczna jest w nagłówku strony.",
    ],
  },
  {
    id: "postanowienia-koncowe",
    title: "Postanowienia końcowe",
    content: [
      "W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy Kodeksu cywilnego, ustawy o świadczeniu usług drogą elektroniczną oraz innych właściwych przepisów prawa polskiego.",
      "Wszelkie spory wynikające z korzystania z serwisu lub realizacji usług strony będą rozwiązywać polubownie. W przypadku braku porozumienia, właściwym do rozstrzygnięcia sporu jest sąd powszechny właściwy dla siedziby MiauSEO.",
    ],
  },
];

export default function Regulamin() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-20 px-6">
        <CatWatermark />
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20">
            <div className="lg:w-5/12 shrink-0">
              <p className="text-brand font-bold text-sm uppercase tracking-widest mb-4">Dokumenty prawne</p>
              <h1 className="text-4xl md:text-5xl font-bold text-ink leading-tight">
                <span className="bg-brand text-white px-2 py-0.5 rounded-md">Regulamin</span>{" "}
                serwisu.
              </h1>
            </div>
            <div className="lg:w-7/12 lg:border-l-2 lg:border-brand/20 lg:pl-14 pb-1">
              <p className="text-zinc-600 text-[17px] leading-relaxed">
                Ostatnia aktualizacja: <strong className="text-ink font-semibold">1 stycznia 2026 r.</strong> Dokument określa zasady korzystania z serwisu miauseo.pl oraz warunki świadczenia usług przez MiauSEO.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spis treści */}
      <section className="bg-surface py-12 px-6 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Spis treści</p>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-sm text-zinc-500 hover:text-brand transition-colors duration-150 flex items-start gap-2"
                >
                  <span className="text-brand font-bold shrink-0">{String(i + 1).padStart(2, "0")}.</span>
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Treść */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-14">
            {sections.map((s, i) => (
              <div key={s.id} id={s.id} className="scroll-mt-28">
                <div className="flex items-start gap-4 mb-5">
                  <span className="shrink-0 w-9 h-9 rounded-xl bg-brand/10 text-brand text-xs font-bold flex items-center justify-center">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-xl font-bold text-ink leading-snug pt-1.5">{s.title}</h2>
                </div>

                <div className="space-y-4" style={{ paddingLeft: "3.25rem" }}>
                  {s.content.map((p, j) => (
                    <p key={j} className="text-zinc-600 leading-relaxed text-[15px]">{p}</p>
                  ))}

                  {"list" in s && s.list && (
                    <ul className="space-y-2 mt-3">
                      {s.list.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-[15px] text-zinc-600">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {"items" in s && s.items && (
                    <div className="space-y-3 mt-3">
                      {s.items.map((item, j) => (
                        <div key={j} className="rounded-xl border border-border bg-surface p-4">
                          <p className="text-sm font-semibold text-ink mb-1">{item.label}</p>
                          <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA kontakt */}
      <section className="py-16 px-6 bg-surface border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-border bg-white p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center gap-6 justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand mb-2">Pytania dotyczące regulaminu</p>
              <h2 className="text-xl font-bold text-ink mb-1">Skontaktuj się z nami</h2>
              <p className="text-sm text-zinc-500">
                W sprawach dotyczących regulaminu lub warunków świadczenia usług pisz na{" "}
                <a href="mailto:kontakt@miauseo.pl" className="text-brand font-semibold hover:underline">
                  kontakt@miauseo.pl
                </a>
                . Odpowiadamy w ciągu 72 godzin.
              </p>
            </div>
            <a
              href="mailto:kontakt@miauseo.pl"
              className="shrink-0 inline-flex items-center gap-2.5 bg-brand hover:bg-brand-dark text-white font-bold px-6 py-3.5 rounded-xl transition-colors duration-200 text-sm"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Napisz do nas
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
