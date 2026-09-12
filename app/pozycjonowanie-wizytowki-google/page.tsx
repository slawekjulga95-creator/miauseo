import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pozycjonowanie wizytówki Google – cennik, Mapy i efekty | MiauSEO",
  description:
    "Pozycjonowanie wizytówki Google Moja Firma i Google Maps. Cennik w modelu abonamentowym, zakres prac krok po kroku i prawdziwe zrzuty statystyk klientów. Bezpłatna wycena.",
  alternates: { canonical: "https://miauseo.pl/pozycjonowanie-wizytowki-google" },
  openGraph: {
    title: "Pozycjonowanie wizytówki Google – cennik, Mapy i efekty | MiauSEO",
    description:
      "Wizytówka Google, która dzwoni. Zakres prac, cennik abonamentowy i zrzuty statystyk klientów z panelu Profilu Firmy.",
    images: [{ url: "https://miauseo.pl/uslugi/wizytowka-google.jpg", width: 1200, height: 630 }],
  },
};

export default function PozycjonowanieWizytowkiGooglePage() {
  return (
    <main className="pt-20">

      <section className="bg-white pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-brand">
            Lokalne SEO · Profil Firmy w Google
          </span>

          <h1 className="mt-5 max-w-4xl text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-ink leading-[1.08] tracking-tight">
            Pozycjonowanie wizytówki Google —{" "}
            <span className="text-brand">profil, który dzwoni</span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg sm:text-xl text-ink leading-relaxed font-medium">
            Klient szukający hydraulika, protetyka czy skupu aut nie przewija dziesięciu wyników. Wybiera jedną
            z trzech firm, które Google pokazuje mu w ramce z mapą, i dzwoni. Cała gra toczy się o to, żeby w tej
            ramce stała Twoja firma.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-x-12 gap-y-5 max-w-4xl">
            <p className="text-zinc-600 leading-relaxed">
              Zajmujemy się wyłącznie widocznością lokalną: Profil Firmy w Google, Mapy, opinie i zaplecze, które
              to wszystko podtrzymuje. Nie sprzedajemy pakietów „wszystko dla firmy" — jeśli Twój problem leży
              gdzie indziej, powiemy to na konsultacji zamiast wystawiać fakturę.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              Niżej masz komplet: zakres prac, prawdziwe zrzuty statystyk z paneli klientów, cennik z wyjaśnieniem,
              dlaczego ta usługa działa w abonamencie, oraz różnicę między{" "}
              <strong className="font-semibold text-ink">Google Moja Firma</strong> a widocznością
              w <strong className="font-semibold text-ink">Mapach Google</strong>.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/kontakt" className="inline-block bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl transition-colors">
              Zamów bezpłatną wycenę
            </Link>
          </div>

          <p className="mt-5 text-sm text-zinc-500">
            Wolisz najpierw sprawdzić sam?{" "}
            <Link href="/gbp-score" className="text-brand font-semibold hover:underline">Darmowy test wizytówki</Link>{" "}
            albo{" "}
            <Link href="/checklista-wizytowki-google" className="text-brand font-semibold hover:underline">checklista optymalizacji</Link>.
          </p>
        </div>
      </section>

    </main>
  );
}
