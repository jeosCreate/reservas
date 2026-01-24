import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import SocialProofBar from "@/components/landing/SocialProofBar";
import ProblemSolutionSection from "@/components/landing/ProblemSolutionSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import WhyUsSection from "@/components/landing/WhyUsSection";
import IndustriesSection from "@/components/landing/IndustriesSection";
import DemoVideoSection from "@/components/landing/DemoVideoSection";
import PricingSection from "@/components/landing/PricingSection";
import SalesChannelsSection from "@/components/landing/SalesChannelsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import TrustBuildersSection from "@/components/landing/TrustBuildersSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";
import ChatWidget from "@/components/landing/ChatWidget";
import MobileStickyCTA from "@/components/landing/MobileStickyCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofBar />
        <ProblemSolutionSection />
        <FeaturesSection />
        <WhyUsSection />
        <IndustriesSection />
        <DemoVideoSection />
        <PricingSection />
        <SalesChannelsSection />
        <TestimonialsSection />
        <FAQSection />
        <TrustBuildersSection />
        <FinalCTASection />
      </main>
      <Footer />
      <ChatWidget />
      <MobileStickyCTA />
    </div>
  );
};

export default Index;
