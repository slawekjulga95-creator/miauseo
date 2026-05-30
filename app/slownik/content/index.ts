import AbTesting from "./ab-testing";
import Adrank from "./adrank";
import AiOverviews from "./ai-overviews";
import AlgorytmGoogle from "./algorytm-google";
import Amp from "./amp";
import AnchorText from "./anchor-text";
import AtrybytAlt from "./atrybut-alt";
import AutorytetDomeny from "./autorytet-domeny";
import Backlink from "./backlink";
import BlackHatSeo from "./black-hat-seo";
import BounceRate from "./bounce-rate";
import BrandBidding from "./brand-bidding";
import Breadcrumbs from "./breadcrumbs";
import BroadMatch from "./broad-match";

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
  // B
  "backlink": Backlink,
  "black-hat-seo": BlackHatSeo,
  "bounce-rate": BounceRate,
  "brand-bidding": BrandBidding,
  "breadcrumbs": Breadcrumbs,
  "broad-match": BroadMatch,
};
