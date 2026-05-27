import JakDodacFirmeDoGoogle from "./jak-dodac-firme-do-google";
import WizytowkaGoogleMojaFirmaJakZalozyc from "./wizytowka-google-moja-firma-jak-zalozyc";
import JakZglosicFirmeDoGoogleMaps from "./jak-zglosic-firme-do-google-maps";
import GoogleMyBusinessCoToJest from "./google-my-business-co-to-jest";
import JakEdytowacWizytowkeGoogle from "./jak-edytowac-wizytowke-google";
import ProfilFirmyWGoogleJakSkonfigurowac from "./profil-firmy-w-google-jak-skonfigurowac";
import GoogleBusinessProfileWeryfikacjaFirmy from "./google-business-profile-weryfikacja-firmy";
import JakZweryfikowacFirmeWGooglePoczta from "./jak-zweryfikowac-firme-w-google-poczta";
import WizytowkaGoogleDarmowaczyPlatna from "./wizytowka-google-darmowa-czy-platna";
import JakUsunacWizytowkeGoogle from "./jak-usunac-wizytowke-google";
import JakWypozycjonowacWizytowkeGoogle from "./jak-wypozycjonowac-wizytowke-google";
import PozycjonowanieLokalneGoogleMaps from "./pozycjonowanie-lokalne-google-maps";
import LocalSeoJakZaczac from "./local-seo-jak-zaczac";
import JakPojawicSieWLocalPackGoogle from "./jak-pojawic-sie-w-local-pack-google";
import JakWypascWyzejWGoogleMaps from "./jak-wypasc-wyzej-w-google-maps";
import CzynnikiRankinguWizytowkiGoogle from "./czynniki-rankingu-wizytowki-google";
import WizytowkaGoogleAPozycjaWWyszukiwarce from "./wizytowka-google-a-pozycja-w-wyszukiwarce";
import NapConsistencyCoToJest from "./nap-consistency-co-to-jest";
import CytowaniaLokalneSeoJakBudowac from "./cytowania-lokalne-seo-jak-budowac";
import JakZwiekszycZasiegWizytowkiGoogle from "./jak-zwiekszyc-zasieg-wizytowki-google";
import WizytowkaGoogleAWynikiOrganiczneRoznica from "./wizytowka-google-a-wyniki-organiczne-roznica";
import EEATWizytowkaGoogle from "./e-e-a-t-wizytowka-google";
import JakZdobycWiecejOpiniiGoogle from "./jak-zdobyc-wiecej-opinii-google";
import JakOdpowiadacNaOpinieWGoogle from "./jak-odpowiadac-na-opinie-w-google";
import JakUsunacNegatywnaOpinieGoogle from "./jak-usunac-negatywna-opinie-google";
import OpinieGoogleWplywNaPozycjonowanie from "./opinie-google-wplyw-na-pozycjonowanie";
import JakProsicKlientowOOpinieGoogle from "./jak-prosic-klientow-o-opinie-google";
import LinkDoWystawieniaOpinieGoogleJakWygenerowac from "./link-do-wystawienia-opinii-google-jak-wygenerowac";
import KupowanieOpiniiGoogleRyzyko from "./kupowanie-opinii-google-ryzyko";
import MinimalnaLiczbaOpiniiZebyWidacGwiazdkiWGoogle from "./minimalna-liczba-opinii-zeby-widac-gwiazdki-w-google";
import JakUzupelnicWizytowkeGoogleZebyBylaSku from "./jak-uzupelnic-wizytowke-google-zeby-byla-skuteczna";
import OpisFirmyWWizytowceGoogleJakNapisac from "./opis-firmy-w-wizytowce-google-jak-napisac";
import KategoriaFirmyGoogleJakWybrac from "./kategoria-firmy-google-jak-wybrac";
import ZdjeciaWWizytowceGoogleJakiWplywNaPozycje from "./zdjecia-w-wizytowce-google-jaki-wplyw-na-pozycje";
import PostyGoogleMyBusinessJakDzialaja from "./posty-google-my-business-jak-dzialaja";
import ProduktyIUsllugiWWizytowceGoogleJakDodac from "./produkty-i-uslugi-w-wizytowce-google-jak-dodac";
import SlowaKluczowrWWizytowceGoogleGdzieUmieszczac from "./slowa-kluczowe-w-wizytowce-google-gdzie-umieszczac";
import GodzinyOtwarciWizytowkaGoogleJakUstawic from "./godziny-otwarcia-wizytowka-google-jak-ustawic";
import QaWizytowkaGoogleJakZarzadzac from "./qa-wizytowka-google-jak-zarzadzac";
import AtrybytFirmyGoogleCoWybrac from "./atrybut-firmy-google-co-wybrac";
import WizytowkaGoogleZawieszonaJakOdblokowac from "./wizytowka-google-zawieszona-jak-odblokowac";
import DuplikatyWizytowekGoogleJakUsunac from "./duplikaty-wizytowek-google-jak-usunac";
import WizytowkaGoogleZgloszonaJakoZamknietaCoRobic from "./wizytowka-google-zgloszona-jako-zamknieta-co-robic";
import JakPrzenieścWlasnoscWizytowkiGoogle from "./jak-przeniesc-wlasnosc-wizytowki-google";
import WizytowkaGoogleWMapachNieWyswietlaSie from "./wizytowka-google-w-mapach-nie-wyswietla-sie";
import GoogleMapsPinBlednaLokalizacjaJakPoprawic from "./google-maps-pin-bledna-lokalizacja-jak-poprawic";
import KilkaLokalizacjiFirmyGoogleJakZarzadzac from "./kilka-lokalizacji-firmy-google-jak-zarzadzac";
import WizytowkaGoogleAObszarObslugiJakUstawic from "./wizytowka-google-a-obszar-obslugi-jak-ustawic";
import JakSprawdzicStatystykiWizytowkiGoogle from "./jak-sprawdzic-statystyki-wizytowki-google";
import CzyWizytowkaGooglePomagaBezStronyInternetowej from "./czy-wizytowka-google-pomaga-bez-strony-internetowej";

// Rejestr treści pytań — docelowo zastąpić fetchem z CMS (Sanity / Contentful / Payload)
// Aby dodać nowy artykuł: import komponent i dodaj wpis do mapy
export const contentMap: Record<string, () => React.JSX.Element> = {
  // Ogólne (1–10)
  "jak-dodac-firme-do-google": JakDodacFirmeDoGoogle,
  "wizytowka-google-moja-firma-jak-zalozyc": WizytowkaGoogleMojaFirmaJakZalozyc,
  "jak-zglosic-firme-do-google-maps": JakZglosicFirmeDoGoogleMaps,
  "google-my-business-co-to-jest": GoogleMyBusinessCoToJest,
  "jak-edytowac-wizytowke-google": JakEdytowacWizytowkeGoogle,
  "profil-firmy-w-google-jak-skonfigurowac": ProfilFirmyWGoogleJakSkonfigurowac,
  "google-business-profile-weryfikacja-firmy": GoogleBusinessProfileWeryfikacjaFirmy,
  "jak-zweryfikowac-firme-w-google-poczta": JakZweryfikowacFirmeWGooglePoczta,
  "wizytowka-google-darmowa-czy-platna": WizytowkaGoogleDarmowaczyPlatna,
  "jak-usunac-wizytowke-google": JakUsunacWizytowkeGoogle,
  // SEO (11–22)
  "jak-wypozycjonowac-wizytowke-google": JakWypozycjonowacWizytowkeGoogle,
  "pozycjonowanie-lokalne-google-maps": PozycjonowanieLokalneGoogleMaps,
  "local-seo-jak-zaczac": LocalSeoJakZaczac,
  "jak-pojawic-sie-w-local-pack-google": JakPojawicSieWLocalPackGoogle,
  "jak-wypasc-wyzej-w-google-maps": JakWypascWyzejWGoogleMaps,
  "czynniki-rankingu-wizytowki-google": CzynnikiRankinguWizytowkiGoogle,
  "wizytowka-google-a-pozycja-w-wyszukiwarce": WizytowkaGoogleAPozycjaWWyszukiwarce,
  "nap-consistency-co-to-jest": NapConsistencyCoToJest,
  "cytowania-lokalne-seo-jak-budowac": CytowaniaLokalneSeoJakBudowac,
  "jak-zwiekszyc-zasieg-wizytowki-google": JakZwiekszycZasiegWizytowkiGoogle,
  "wizytowka-google-a-wyniki-organiczne-roznica": WizytowkaGoogleAWynikiOrganiczneRoznica,
  "e-e-a-t-wizytowka-google": EEATWizytowkaGoogle,
  // Opinie (23–30)
  "jak-zdobyc-wiecej-opinii-google": JakZdobycWiecejOpiniiGoogle,
  "jak-odpowiadac-na-opinie-w-google": JakOdpowiadacNaOpinieWGoogle,
  "jak-usunac-negatywna-opinie-google": JakUsunacNegatywnaOpinieGoogle,
  "opinie-google-wplyw-na-pozycjonowanie": OpinieGoogleWplywNaPozycjonowanie,
  "jak-prosic-klientow-o-opinie-google": JakProsicKlientowOOpinieGoogle,
  "link-do-wystawienia-opinii-google-jak-wygenerowac": LinkDoWystawieniaOpinieGoogleJakWygenerowac,
  "kupowanie-opinii-google-ryzyko": KupowanieOpiniiGoogleRyzyko,
  "minimalna-liczba-opinii-zeby-widac-gwiazdki-w-google": MinimalnaLiczbaOpiniiZebyWidacGwiazdkiWGoogle,
  // Optymalizacja (31–40)
  "jak-uzupelnic-wizytowke-google-zeby-byla-skuteczna": JakUzupelnicWizytowkeGoogleZebyBylaSku,
  "opis-firmy-w-wizytowce-google-jak-napisac": OpisFirmyWWizytowceGoogleJakNapisac,
  "kategoria-firmy-google-jak-wybrac": KategoriaFirmyGoogleJakWybrac,
  "zdjecia-w-wizytowce-google-jaki-wplyw-na-pozycje": ZdjeciaWWizytowceGoogleJakiWplywNaPozycje,
  "posty-google-my-business-jak-dzialaja": PostyGoogleMyBusinessJakDzialaja,
  "produkty-i-uslugi-w-wizytowce-google-jak-dodac": ProduktyIUsllugiWWizytowceGoogleJakDodac,
  "slowa-kluczowe-w-wizytowce-google-gdzie-umieszczac": SlowaKluczowrWWizytowceGoogleGdzieUmieszczac,
  "godziny-otwarcia-wizytowka-google-jak-ustawic": GodzinyOtwarciWizytowkaGoogleJakUstawic,
  "qa-wizytowka-google-jak-zarzadzac": QaWizytowkaGoogleJakZarzadzac,
  "atrybut-firmy-google-co-wybrac": AtrybytFirmyGoogleCoWybrac,
  // Tech (41–50)
  "wizytowka-google-zawieszona-jak-odblokowac": WizytowkaGoogleZawieszonaJakOdblokowac,
  "duplikaty-wizytowek-google-jak-usunac": DuplikatyWizytowekGoogleJakUsunac,
  "wizytowka-google-zgloszona-jako-zamknieta-co-robic": WizytowkaGoogleZgloszonaJakoZamknietaCoRobic,
  "jak-przeniesc-wlasnosc-wizytowki-google": JakPrzenieścWlasnoscWizytowkiGoogle,
  "wizytowka-google-w-mapach-nie-wyswietla-sie": WizytowkaGoogleWMapachNieWyswietlaSie,
  "google-maps-pin-bledna-lokalizacja-jak-poprawic": GoogleMapsPinBlednaLokalizacjaJakPoprawic,
  "kilka-lokalizacji-firmy-google-jak-zarzadzac": KilkaLokalizacjiFirmyGoogleJakZarzadzac,
  "wizytowka-google-a-obszar-obslugi-jak-ustawic": WizytowkaGoogleAObszarObslugiJakUstawic,
  "jak-sprawdzic-statystyki-wizytowki-google": JakSprawdzicStatystykiWizytowkiGoogle,
  "czy-wizytowka-google-pomaga-bez-strony-internetowej": CzyWizytowkaGooglePomagaBezStronyInternetowej,
};
