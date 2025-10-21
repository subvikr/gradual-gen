import { LoadingAnimation } from "@/components/LoadingAnimation";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CapabilitiesPreview } from "@/components/CapabilitiesPreview";
import { ProcessOverview } from "@/components/ProcessOverview";
import { ProductsPreview } from "@/components/ProductsPreview";
import { Certifications } from "@/components/Certifications";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <LoadingAnimation />
      <Navigation />
      <div className="bg-black">
        <HeroSection />
        <AboutSection />
        <CapabilitiesPreview />
        <ProcessOverview />
        <ProductsPreview />
        <Certifications />
        <Testimonials />
        <FAQ />
        <CTASection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
