import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
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
      email: "kontakt@miauseo.pl",
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
      {/* Preload hero image with high priority — Next.js/Turbopack doesn't add fetchpriority to preload link */}
      <link
        rel="preload"
        as="image"
        imageSrcSet="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1497366216548-37526070297c%3Ffit%3Dcrop%26crop%3Dcenter&w=828&q=85 828w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1497366216548-37526070297c%3Ffit%3Dcrop%26crop%3Dcenter&w=1200&q=85 1200w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1497366216548-37526070297c%3Ffit%3Dcrop%26crop%3Dcenter&w=1920&q=85 1920w"
        imageSizes="58vw"
        fetchPriority="high"
      />
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <ProcessSection />
      <WhyUsSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
