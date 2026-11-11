import type { Metadata } from "next";

// Strona jest komponentem klienckim, więc metadane siedzą w layoucie.
// Bez nich dziedziczyła tytuł i opis strony głównej (duplikat w Google).
export const metadata: Metadata = {
  title: "Checklista pozycjonowania wizytówki Google: 28 punktów – MiauSEO",
  description: "28 punktów kontrolnych pozycjonowania wizytówki Google. Odhaczaj kolejne elementy profilu i sprawdź, czego brakuje do lepszej widoczności w Mapach.",
  alternates: { canonical: "https://miauseo.pl/checklista-wizytowki-google" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
