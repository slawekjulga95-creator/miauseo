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
