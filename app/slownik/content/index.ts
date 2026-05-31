import AbTesting from "./ab-testing";
import Adrank from "./adrank";
import AiOverviews from "./ai-overviews";
import AlgorytmGoogle from "./algorytm-google";
import Amp from "./amp";
import AnchorText from "./anchor-text";
import AtrybytAlt from "./atrybut-alt";
import AutorytetDomeny from "./autorytet-domeny";
import Geotargeting from "./geotargeting";
import GoogleAds from "./google-ads";
import GoogleAnalytics from "./google-analytics";
import GoogleBusinessProfile from "./google-business-profile";
import GoogleDiscover from "./google-discover";
import GoogleSearchConsole from "./google-search-console";
import GoogleTagManager from "./google-tag-manager";
import Googlebot from "./googlebot";
import GrayHatSeo from "./gray-hat-seo";
import HeadingTags from "./heading-tags";
import Hreflang from "./hreflang";
import Https from "./https";
import Hyperlink from "./hyperlink";
import Impressions from "./impressions";
import InboundLink from "./inbound-link";
import Indeksowanie from "./indeksowanie";
import IntencjaWyszukiwania from "./intencja-wyszukiwania";
import InternalLinking from "./internal-linking";
import JavascriptSeo from "./javascript-seo";
import JsonLd from "./json-ld";
import Keyword from "./keyword";
import KeywordDensity from "./keyword-density";
import KeywordResearch from "./keyword-research";
import KeywordStuffing from "./keyword-stuffing";
import KnowledgeGraph from "./knowledge-graph";
import KnowledgePanel from "./knowledge-panel";
import Kpi from "./kpi";
import DeepLinking from "./deep-linking";
import Disavow from "./disavow";
import DisplayAds from "./display-ads";
import Dofollow from "./dofollow";
import DomainAuthority from "./domain-authority";
import DomainRating from "./domain-rating";
import DuplicateContent from "./duplicate-content";
import EEat from "./e-e-a-t";
import EngagementRate from "./engagement-rate";
import ExactMatch from "./exact-match";
import ExternalLink from "./external-link";
import FeaturedSnippet from "./featured-snippet";
import Frequency from "./frequency";
import Funnel from "./funnel";
import CanonicalUrl from "./canonical-url";
import Cloaking from "./cloaking";
import ContentMarketing from "./content-marketing";
import ConversionRate from "./conversion-rate";
import CoreWebVitals from "./core-web-vitals";
import Cpa from "./cpa";
import Cpc from "./cpc";
import Cpm from "./cpm";
import Crawlowanie from "./crawlowanie";
import Ctr from "./ctr";
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
  // D
  "deep-linking": DeepLinking,
  "disavow": Disavow,
  "display-ads": DisplayAds,
  "dofollow": Dofollow,
  "domain-authority": DomainAuthority,
  "domain-rating": DomainRating,
  "duplicate-content": DuplicateContent,
  // E
  "e-e-a-t": EEat,
  "engagement-rate": EngagementRate,
  "exact-match": ExactMatch,
  "external-link": ExternalLink,
  // F
  "featured-snippet": FeaturedSnippet,
  "frequency": Frequency,
  "funnel": Funnel,
  // C
  "canonical-url": CanonicalUrl,
  "cloaking": Cloaking,
  "content-marketing": ContentMarketing,
  "conversion-rate": ConversionRate,
  "core-web-vitals": CoreWebVitals,
  "cpa": Cpa,
  "cpc": Cpc,
  "cpm": Cpm,
  "crawlowanie": Crawlowanie,
  "ctr": Ctr,
  // B
  "backlink": Backlink,
  "black-hat-seo": BlackHatSeo,
  "bounce-rate": BounceRate,
  "brand-bidding": BrandBidding,
  "breadcrumbs": Breadcrumbs,
  "broad-match": BroadMatch,
};
