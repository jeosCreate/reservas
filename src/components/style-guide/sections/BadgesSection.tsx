import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "../SectionHeader";

const BadgesSection = () => {
  return (
    <section id="badges" className="mb-16">
      <SectionHeader 
        title="Badges" 
        description="Etiquetas para estados y categorías"
      />
      
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-6">
            {/* Variants */}
            <div>
              <h4 className="text-sm font-medium mb-3">Variantes Base</h4>
              <div className="flex flex-wrap gap-3">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </div>
            
            {/* Custom Colors */}
            <div>
              <h4 className="text-sm font-medium mb-3">Colores Personalizados</h4>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-primary/10 text-primary border-0">Primary</Badge>
                <Badge className="bg-secondary/10 text-secondary border-0">Secondary</Badge>
                <Badge className="bg-accent/10 text-accent border-0">Success</Badge>
                <Badge className="bg-destructive/10 text-destructive border-0">Error</Badge>
              </div>
            </div>
            
            {/* Status Badges */}
            <div>
              <h4 className="text-sm font-medium mb-3">Estados de Reserva</h4>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-accent/10 text-accent border-0">
                  <span className="w-2 h-2 rounded-full bg-accent mr-2" />
                  Confirmada
                </Badge>
                <Badge className="bg-primary/10 text-primary border-0">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2" />
                  Pendiente
                </Badge>
                <Badge className="bg-destructive/10 text-destructive border-0">
                  <span className="w-2 h-2 rounded-full bg-destructive mr-2" />
                  Cancelada
                </Badge>
                <Badge className="bg-muted text-muted-foreground border-0">
                  <span className="w-2 h-2 rounded-full bg-muted-foreground mr-2" />
                  Completada
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export { BadgesSection };
