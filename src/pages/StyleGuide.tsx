import {
  StyleGuideHeader,
  StyleGuideNav,
  ColorsSection,
  TypographySection,
  ButtonsSection,
  CardsSection,
  BadgesSection,
  InputsSection,
  AlertsSection,
  TabsSection,
  IconsSection,
  SpacingSection,
} from "@/components/style-guide";

const StyleGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <StyleGuideHeader />

      <main className="container mx-auto px-4 py-8">
        <StyleGuideNav />
        
        <ColorsSection />
        <TypographySection />
        <ButtonsSection />
        <CardsSection />
        <BadgesSection />
        <InputsSection />
        <AlertsSection />
        <TabsSection />
        <IconsSection />
        <SpacingSection />
      </main>
    </div>
  );
};

export default StyleGuide;
