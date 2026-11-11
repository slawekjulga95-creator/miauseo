import type { Metadata } from "next";

// Strona jest komponentem klienckim, więc metadane siedzą w layoucie.
// Bez nich dziedziczyła tytuł i opis strony głównej (duplikat w Google).
export const metadata: Metadata = {
  title: "Audyt widoczności wizytówki Google (GBP Score) – MiauSEO",
  description: "Sprawdź za darmo, jak mocna jest Twoja wizytówka Google. Odpowiedz na kilka pytań i zobacz wynik audytu widoczności z listą rzeczy do poprawy.",
  alternates: { canonical: "https://miauseo.pl/gbp-score" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
