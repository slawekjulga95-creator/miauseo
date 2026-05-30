import AbTesting from "./ab-testing";
import Adrank from "./adrank";
import AiOverviews from "./ai-overviews";
import AlgorytmGoogle from "./algorytm-google";
import Amp from "./amp";
import AnchorText from "./anchor-text";
import AtrybytAlt from "./atrybut-alt";
import AutorytetDomeny from "./autorytet-domeny";

// Rejestr treści pojęć słownika — docelowo zastąpić fetchem z CMS
// Aby dodać nowy artykuł: import komponent i dodaj wpis do mapy
export const termContentMap: Record<string, () => React.JSX.Element> = {
  // A
  "ab-testing": AbTesting,
  "adrank": Adrank,
  "ai-overviews": AiOverviews,
  "algorytm-google": AlgorytmGoogle,
  "amp": Amp,
  "anchor-text": AnchorText,
  "atrybut-alt": AtrybytAlt,
  "autorytet-domeny": AutorytetDomeny,
};
