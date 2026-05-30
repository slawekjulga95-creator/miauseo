import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import ServicesSection from "@/components/home/ServicesSection";

// Below-fold sections loaded lazily
const ProcessSection    = dynamic(() => import("@/components/home/ProcessSection"));
const WhyUsSection      = dynamic(() => import("@/components/home/WhyUsSection"));
const TestimonialsSection = dynamic(() => import("@/components/home/TestimonialsSection"));
const FAQSection        = dynamic(() => import("@/components/home/FAQSection"));
const FinalCTASection   = dynamic(() => import("@/components/home/FinalCTASection"));

export const metadata: Metadata = {
  title: "MiauSEO.pl - Agencja marketingowa | Pozycjonowanie | Kampanie leadowe",
};

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
