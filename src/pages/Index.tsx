import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { StatsBar } from "@/components/StatsBar";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { LogoMarquee } from "@/components/LogoMarquee";
import { GuidanceSection } from "@/components/GuidanceSection";
import { TextMarquee } from "@/components/TextMarquee";
import { SuccessStorySection } from "@/components/SuccessStorySection";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ProcessSection } from "@/components/ProcessSection";
import { CTASection } from "@/components/CTASection";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <ExpertiseSection />
        <LogoMarquee />
        <GuidanceSection />
        <TextMarquee />
        <SuccessStorySection />
        <TestimonialCard />
        <ProcessSection />
        <CTASection />
        <BlogSection />
        <TextMarquee />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
