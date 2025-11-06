import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CapabilitiesPreview } from "@/components/CapabilitiesPreview";
import { ProcessOverview } from "@/components/ProcessOverview";
import { ProductsPreview } from "@/components/ProductsPreview";
import { Clients } from "@/components/Clients";
import { Certifications } from "@/components/Certifications";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navigation />
      <div className="bg-black">
        <HeroSection />
        <AboutSection />
        <CapabilitiesPreview />
        <ProcessOverview />
        <ProductsPreview />
        <Clients />
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
