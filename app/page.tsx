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
};

export default function Home() {
  return (
    <>
      {/* Preload hero image with high priority — Next.js/Turbopack doesn't add fetchpriority to preload link */}
      {/* @ts-expect-error fetchpriority is valid HTML but not in React types yet */}
      <link
        rel="preload"
        as="image"
        imageSrcSet="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1560250097-0b93528c311a%3Ffit%3Dcrop%26crop%3Dtop&w=828&q=85 828w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1560250097-0b93528c311a%3Ffit%3Dcrop%26crop%3Dtop&w=1200&q=85 1200w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1560250097-0b93528c311a%3Ffit%3Dcrop%26crop%3Dtop&w=1920&q=85 1920w"
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
