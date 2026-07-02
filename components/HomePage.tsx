import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { BackgroundGrid } from "@/components/layout/BackgroundGrid";
import { Footer } from "@/components/layout/Footer";
import { HomeMotion } from "@/components/layout/HomeMotion";
import { ScrollSceneCanvas } from "@/components/layout/ScrollSceneCanvas";
import { SiteNav } from "@/components/layout/SiteNav";
import { ComplianceSection } from "@/components/sections/ComplianceSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImagineSection } from "@/components/sections/ImagineSection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { PatientExperienceSection } from "@/components/sections/PatientExperienceSection";
import { PlatformSection } from "@/components/sections/PlatformSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ProductDemoSection } from "@/components/sections/ProductDemoSection";
import { RealitySection } from "@/components/sections/RealitySection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { SpecialtyShowcaseSection } from "@/components/sections/SpecialtyShowcaseSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { StoriesSection } from "@/components/sections/StoriesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrustedByStrip } from "@/components/sections/TrustedByStrip";
import { WhyDoctorsSection } from "@/components/sections/WhyDoctorsSection";

export function HomePage() {
  return (
    <>
      <BackgroundGrid />
      <ScrollSceneCanvas />
      <AnnouncementBar />
      <SiteNav />
      <HomeMotion />
      <div className="relative z-[3]">
        <HeroSection />
        <TrustedByStrip />
        <RealitySection />
        <ImagineSection />
        <PlatformSection />
        <ProductDemoSection />
        <WhyDoctorsSection />
        <SpecialtyShowcaseSection />
        <IntegrationsSection />
        <PatientExperienceSection />
        <SecuritySection />
        <ComplianceSection />
        <StatsSection />
        <TestimonialsSection />
        <StoriesSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </div>
      <Footer />
    </>
  );
}
