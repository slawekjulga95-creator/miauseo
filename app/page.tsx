import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";

export const metadata: Metadata = {
  title: "MiauSEO.pl - Agencja marketingowa | Pozycjonowanie | Kampanie leadowe",
};
import ProblemSection from "@/components/home/ProblemSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import FinalCTASection from "@/components/home/FinalCTASection";

export default function Home() {
  return (
    <>
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
