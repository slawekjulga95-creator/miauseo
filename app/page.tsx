import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ToolsBar from "@/components/home/ToolsBar";
import ProblemSection from "@/components/home/ProblemSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import FinalCTASection from "@/components/home/FinalCTASection";

export const metadata: Metadata = {
  title: "MiauSEO.pl - Agencja marketingowa | Pozycjonowanie | Kampanie leadowe",
  alternates: {
    canonical: "https://miauseo.pl",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://miauseo.pl/#organization",
      name: "MiauSEO",
      url: "https://miauseo.pl",
      logo: {
        "@type": "ImageObject",
        url: "https://miauseo.pl/logo.png",
        width: 224,
        height: 64,
      },
      image: "https://miauseo.pl/logo.png",
      description:
        "MiauSEO to agencja performance marketingowa specjalizująca się w pozycjonowaniu lokalnym, Google Ads, Meta Ads i TikTok Ads. Zmieniamy kliknięcia w klientów.",
      email: "slawomir@miauseo.pl",
      vatID: "PL6070100514",
      taxID: "6070100514",
      address: {
        "@type": "PostalAddress",
        addressCountry: "PL",
      },
      areaServed: "PL",
      priceRange: "$$",
      sameAs: [
        "https://facebook.com",
        "https://tiktok.com",
        "https://youtube.com",
        "https://linkedin.com",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://miauseo.pl/#website",
      url: "https://miauseo.pl",
      name: "MiauSEO",
      publisher: { "@id": "https://miauseo.pl/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: "https://miauseo.pl/slownik/{search_term_string}" },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <HeroSection />
      <ToolsBar />
      <ProblemSection />
      <ServicesSection />
      <ProcessSection />
      <WhyUsSection />
      <FinalCTASection />
    </>
  );
}
