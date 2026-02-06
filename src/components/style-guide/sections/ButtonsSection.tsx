import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Calendar, ArrowRight, CheckCircle, Star } from "lucide-react";
import { SectionHeader } from "../SectionHeader";

const ButtonsSection = () => {
  return (
    <section id="botones" className="mb-16">
      <SectionHeader 
        title="Botones" 
        description="Variantes y tamaños de botones disponibles"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Variants */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Variantes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-3 items-center">
              <Button>Default</Button>
              <MagneticButton>
                <button className="gradient-primary hover:opacity-90 transition-opacity px-10 text-lg text-white py-4 rounded-full font-medium">
                  Gradient Primary
                </button>
              </MagneticButton>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Sizes */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Tamaños</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon"><Star className="w-4 h-4" /></Button>
            </div>
          </CardContent>
        </Card>
        
        {/* With Icons */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Con Iconos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Button><Calendar className="mr-2 h-4 w-4" /> Reservar</Button>
              <Button variant="outline">Continuar <ArrowRight className="ml-2 h-4 w-4" /></Button>
              <Button className="gradient-primary border-0"><CheckCircle className="mr-2 h-4 w-4" /> Confirmar</Button>
            </div>
          </CardContent>
        </Card>
        
        {/* States */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Estados</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Button>Normal</Button>
              <Button disabled>Disabled</Button>
              <Button className="opacity-50 pointer-events-none">Loading...</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export { ButtonsSection };
