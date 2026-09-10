import Link from "next/link";

/**
 * Blok definicyjny encji centralnej. Wstawiany przy PIERWSZYM wystąpieniu
 * encji w tekście wpisu rdzeniowego — ujednolica wszystkie warianty nazwy
 * i kieruje do huba encji /profil-firmy-w-google.
 *
 * Kanon nazewnictwa (docs/seo/STANDARD-WPISU.md):
 *   wizytówka Google        — fraza główna, potoczna
 *   Profil Firmy w Google   — oficjalna nazwa polska
 *   Google Business Profile — oficjalna nazwa angielska (GBP)
 *   Google Moja Firma       — WYŁĄCZNIE jako nazwa historyczna (do 2021)
 *
 * Warianty:
 *   <EncjaGBP />            — pełne zdanie definicyjne (domyślnie)
 *   <EncjaGBP wariant="inline" /> — sam odsyłacz w zdaniu autora
 */
export default function EncjaGBP({
  wariant = "pelny",
}: {
  wariant?: "pelny" | "inline";
}) {
  if (wariant === "inline") {
    return (
      <Link href="/profil-firmy-w-google" className="text-brand hover:underline">
        Profil Firmy w Google
      </Link>
    );
  }

  return (
    <p>
      <strong>Wizytówka Google</strong>, oficjalnie{" "}
      <Link href="/profil-firmy-w-google" className="text-brand hover:underline">
        Profil Firmy w Google
      </Link>{" "}
      (ang. <em>Google Business Profile</em>, GBP), to bezpłatny profil firmy
      wyświetlany w Wyszukiwarce i Mapach Google.
    </p>
  );
}
