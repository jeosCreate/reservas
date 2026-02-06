import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SectionHeader } from "../SectionHeader";

const TypographySection = () => {
  return (
    <section id="tipografía" className="mb-16">
      <SectionHeader 
        title="Tipografía" 
        description="Escala tipográfica usando la fuente Inter"
      />
      
      <Card>
        <CardContent className="pt-6 space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">Display / Hero (text-7xl)</h1>
            <h2 className="text-3xl md:text-4xl font-bold">H2 Sección (text-4xl)</h2>
            <h3 className="text-xl md:text-2xl font-semibold">H3 Subtítulo (text-2xl)</h3>
            <p className="text-base">Body text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. (text-base)</p>
            <p className="text-sm text-muted-foreground">Small / Caption - Texto secundario o descriptivo (text-sm)</p>
            <p className="text-xs text-muted-foreground">Tiny - Para badges y labels pequeños (text-xs)</p>
          </div>
          
          <Separator />
          
          <div className="space-y-3">
            <p className="font-bold">font-bold (700) - Headlines, CTAs</p>
            <p className="font-semibold">font-semibold (600) - Subtítulos, labels importantes</p>
            <p className="font-medium">font-medium (500) - Botones, navegación</p>
            <p className="font-normal">font-normal (400) - Texto de cuerpo</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export { TypographySection };
