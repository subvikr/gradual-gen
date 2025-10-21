import { LoadingAnimation } from "@/components/LoadingAnimation";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";

const Index = () => {
  return (
    <>
      <LoadingAnimation />
      <Navigation />
      <div className="bg-black min-h-screen">
        <HeroSection />
        <AboutSection />
        
        {/* Placeholder for additional sections - will be added next */}
        <div className="h-screen flex items-center justify-center">
          <p className="text-secondary text-xl">More sections coming...</p>
        </div>
      </div>
    </>
  );
};

export default Index;
