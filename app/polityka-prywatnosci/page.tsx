import type { Metadata } from "next";
import CatWatermark from "@/components/ui/CatWatermark";

export const metadata: Metadata = {
  title: "Polityka prywatności – MiauSEO",
  description: "Polityka prywatności serwisu MiauSEO. Informacje o przetwarzaniu danych osobowych zgodnie z RODO.",
};

const sections = [
  {
    id: "administrator",
    title: "Administrator danych osobowych",
    content: [
      'Administratorem Twoich danych osobowych jest MiauSEO, prowadzące działalność gospodarczą na terytorium Rzeczypospolitej Polskiej (dalej: „Administrator" lub „MiauSEO").',
      "Kontakt z Administratorem jest możliwy pod adresem e-mail: kontakt@miauseo.pl lub telefonicznie: +48 600 000 000.",
    ],
  },
  {
    id: "dane",
    title: "Jakie dane zbieramy",
    content: [
      "W zależności od sposobu korzystania z serwisu przetwarzamy następujące kategorie danych osobowych:",
    ],
    list: [
      "Dane kontaktowe — imię, nazwisko, adres e-mail, numer telefonu podane w formularzu kontaktowym lub podczas konsultacji.",
      "Dane firmowe — nazwa firmy, NIP, adres siedziby — w celu realizacji usług i wystawiania faktur.",
      "Dane techniczne — adres IP, typ przeglądarki, system operacyjny, czas wizyty, odwiedzane podstrony — zbierane automatycznie przez pliki cookie i narzędzia analityczne.",
      "Dane z komunikacji — treść wiadomości e-mail, rozmów telefonicznych i czatów, jeśli dobrowolnie się z nami kontaktujesz.",
    ],
  },
  {
    id: "cel",
    title: "Cel i podstawa prawna przetwarzania",
    content: [
      "Przetwarzamy Twoje dane osobowe wyłącznie w określonych celach i na określonych podstawach prawnych zgodnych z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO):",
    ],
    items: [
      {
        label: "Realizacja umowy (art. 6 ust. 1 lit. b RODO)",
        desc: "Przetwarzanie danych niezbędnych do wykonania usług SEO, kampanii reklamowych i obsługi klienta.",
      },
      {
        label: "Prawnie uzasadniony interes (art. 6 ust. 1 lit. f RODO)",
        desc: "Analityka serwisu, bezpieczeństwo, marketing bezpośredni do istniejących klientów, dochodzenie roszczeń.",
      },
      {
        label: "Zgoda (art. 6 ust. 1 lit. a RODO)",
        desc: "Wysyłka newslettera, wykorzystanie plików cookie do celów marketingowych — zgoda może być w każdej chwili wycofana.",
      },
      {
        label: "Obowiązek prawny (art. 6 ust. 1 lit. c RODO)",
        desc: "Wystawianie faktur, przechowywanie dokumentacji księgowej zgodnie z przepisami podatkowymi.",
      },
    ],
  },
  {
    id: "czas",
    title: "Czas przechowywania danych",
    content: [
      "Dane przechowujemy przez okres niezbędny do realizacji celów, dla których zostały zebrane:",
    ],
    list: [
      "Dane klientów — przez czas trwania umowy oraz 3 lata po jej zakończeniu (przedawnienie roszczeń).",
      "Dokumenty księgowe — 5 lat od końca roku podatkowego, w którym wystawiono dokument.",
      "Dane z formularza kontaktowego — do 12 miesięcy od ostatniego kontaktu, jeśli nie doszło do zawarcia umowy.",
      "Dane analityczne (cookie) — zgodnie z ustawieniami poszczególnych narzędzi, max. 26 miesięcy.",
      "Newsletter — do momentu wypisania się lub wycofania zgody.",
    ],
  },
  {
    id: "prawa",
    title: "Twoje prawa",
    content: [
      "Na podstawie RODO przysługują Ci następujące prawa. Możesz z nich skorzystać, kontaktując się z nami pod adresem kontakt@miauseo.pl:",
    ],
    items: [
      {
        label: "Prawo dostępu (art. 15 RODO)",
        desc: "Możesz zażądać informacji o tym, jakie dane na Twój temat przetwarzamy i w jakim celu.",
      },
      {
        label: "Prawo do sprostowania (art. 16 RODO)",
        desc: "Możesz zażądać poprawienia nieprawidłowych lub uzupełnienia niekompletnych danych.",
      },
      {
        label: "Prawo do usunięcia (art. 17 RODO)",
        desc: "Możesz zażądać usunięcia danych, gdy nie są już potrzebne lub wycofałeś zgodę.",
      },
      {
        label: "Prawo do ograniczenia przetwarzania (art. 18 RODO)",
        desc: "Możesz zażądać ograniczenia przetwarzania w określonych sytuacjach przewidzianych przez RODO.",
      },
      {
        label: "Prawo do przenoszenia danych (art. 20 RODO)",
        desc: "Możesz otrzymać swoje dane w ustrukturyzowanym, powszechnie używanym formacie.",
      },
      {
        label: "Prawo sprzeciwu (art. 21 RODO)",
        desc: "Możesz w każdej chwili sprzeciwić się przetwarzaniu danych na potrzeby marketingu bezpośredniego.",
      },
      {
        label: "Prawo do skargi",
        desc: "Masz prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa, uodo.gov.pl).",
      },
    ],
  },
  {
    id: "cookies",
    title: "Pliki cookie",
    content: [
      "Serwis miauseo.pl korzysta z plików cookie — małych plików tekstowych zapisywanych na Twoim urządzeniu. Stosujemy następujące kategorie:",
    ],
    items: [
      {
        label: "Niezbędne",
        desc: "Pliki wymagane do prawidłowego działania serwisu. Nie wymagają zgody i nie można ich wyłączyć.",
      },
      {
        label: "Analityczne",
        desc: "Google Analytics 4 — anonimowe statystyki ruchu (liczba odwiedzin, czas na stronie, źródła ruchu). Wymagają Twojej zgody.",
      },
      {
        label: "Marketingowe",
        desc: "Google Ads, Meta Pixel — śledzenie konwersji i remarketing. Wymagają Twojej zgody.",
      },
    ],
    footer: "Preferencje dotyczące cookie możesz zmienić w każdej chwili w ustawieniach przeglądarki lub za pomocą banera cookie wyświetlanego przy pierwszej wizycie.",
  },
  {
    id: "przekazywanie",
    title: "Przekazywanie danych podmiotom trzecim",
    content: [
      "Twoje dane możemy przekazywać wyłącznie zaufanym podmiotom przetwarzającym, z którymi zawarliśmy umowy powierzenia zgodne z art. 28 RODO:",
    ],
    list: [
      "Google LLC — narzędzia analityczne (Google Analytics 4), reklamy (Google Ads), usługi e-mail (Gmail).",
      "Meta Platforms Ireland Ltd. — narzędzia reklamowe (Meta Ads, Facebook Pixel).",
      "Dostawca hostingu i serwera — przechowywanie danych serwisu.",
      "Systemy do fakturowania i księgowości — w zakresie niezbędnym do rozliczeń.",
      "Kancelaria prawna lub windykacyjna — wyłącznie w przypadku dochodzenia roszczeń.",
    ],
    footer: "Nie sprzedajemy danych osobowych. Nie przekazujemy danych do państw trzecich bez odpowiednich zabezpieczeń (standardowe klauzule umowne Komisji Europejskiej).",
  },
  {
    id: "bezpieczenstwo",
    title: "Bezpieczeństwo danych",
    content: [
      "Stosujemy odpowiednie środki techniczne i organizacyjne, by chronić Twoje dane przed nieuprawnionym dostępem, utratą lub ujawnieniem. Serwis działa w protokole HTTPS. Dostęp do danych mają wyłącznie osoby upoważnione, zobowiązane do zachowania poufności.",
    ],
  },
  {
    id: "zmiany",
    title: "Zmiany polityki prywatności",
    content: [
      "Zastrzegamy sobie prawo do aktualizacji niniejszej polityki prywatności. O istotnych zmianach poinformujemy poprzez zamieszczenie nowej wersji w serwisie lub — w przypadku klientów — drogą e-mailową. Data ostatniej aktualizacji widoczna jest w nagłówku strony.",
    ],
  },
];

export default function PolitykaPrywatnosci() {
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
                <span className="bg-brand text-white px-2 py-0.5 rounded-md">Polityka</span>{" "}
                prywatności.
              </h1>
            </div>
            <div className="lg:w-7/12 lg:border-l-2 lg:border-brand/20 lg:pl-14 pb-1">
              <p className="text-zinc-600 text-[17px] leading-relaxed">
                Ostatnia aktualizacja: <strong className="text-ink font-semibold">1 stycznia 2026 r.</strong> Dokument opisuje zasady przetwarzania danych osobowych przez MiauSEO zgodnie z RODO.
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

                <div className="pl-13 space-y-4" style={{ paddingLeft: "3.25rem" }}>
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

                  {"footer" in s && s.footer && (
                    <p className="text-[14px] text-zinc-500 leading-relaxed border-l-2 border-brand/20 pl-4 mt-4">
                      {s.footer}
                    </p>
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
              <p className="text-xs font-bold uppercase tracking-widest text-brand mb-2">Pytania dotyczące danych</p>
              <h2 className="text-xl font-bold text-ink mb-1">Skontaktuj się z nami</h2>
              <p className="text-sm text-zinc-500">
                W sprawach dotyczących ochrony danych osobowych pisz na{" "}
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
