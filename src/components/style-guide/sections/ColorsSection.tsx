import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "../SectionHeader";
import { ColorCard } from "../ColorCard";

const ColorsSection = () => {
  return (
    <section id="colores" className="mb-16">
      <SectionHeader 
        title="Paleta de Colores" 
        description="Todos los colores están definidos en HSL y se usan a través de tokens semánticos"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Primary Colors */}
        <ColorCard 
          title="Primary (Azul)"
          colors={[
            { name: "primary", class: "bg-primary", text: "text-primary-foreground" },
            { name: "primary/80", class: "bg-primary/80", text: "text-primary-foreground" },
            { name: "primary/50", class: "bg-primary/50", text: "text-primary-foreground" },
            { name: "primary/20", class: "bg-primary/20", text: "text-primary" },
            { name: "primary/10", class: "bg-primary/10", text: "text-primary" },
          ]}
        />
        
        {/* Secondary Colors */}
        <ColorCard 
          title="Secondary (Morado)"
          colors={[
            { name: "secondary", class: "bg-secondary", text: "text-secondary-foreground" },
            { name: "secondary/80", class: "bg-secondary/80", text: "text-secondary-foreground" },
            { name: "secondary/50", class: "bg-secondary/50", text: "text-secondary-foreground" },
            { name: "secondary/20", class: "bg-secondary/20", text: "text-secondary" },
            { name: "secondary/10", class: "bg-secondary/10", text: "text-secondary" },
          ]}
        />
        
        {/* Accent Colors */}
        <ColorCard 
          title="Accent (Verde Menta)"
          colors={[
            { name: "accent", class: "bg-accent", text: "text-accent-foreground" },
            { name: "accent/80", class: "bg-accent/80", text: "text-accent-foreground" },
            { name: "accent/50", class: "bg-accent/50", text: "text-accent-foreground" },
            { name: "accent/20", class: "bg-accent/20", text: "text-accent" },
            { name: "accent/10", class: "bg-accent/10", text: "text-accent" },
          ]}
        />
        
        {/* Neutral Colors */}
        <ColorCard 
          title="Neutrales"
          colors={[
            { name: "background", class: "bg-background border", text: "text-foreground" },
            { name: "foreground", class: "bg-foreground", text: "text-background" },
            { name: "muted", class: "bg-muted", text: "text-muted-foreground" },
            { name: "card", class: "bg-card border", text: "text-card-foreground" },
            { name: "border", class: "bg-border", text: "text-foreground" },
          ]}
        />
        
        {/* Destructive */}
        <ColorCard 
          title="Destructive (Errores)"
          colors={[
            { name: "destructive", class: "bg-destructive", text: "text-destructive-foreground" },
            { name: "destructive/80", class: "bg-destructive/80", text: "text-destructive-foreground" },
            { name: "destructive/20", class: "bg-destructive/20", text: "text-destructive" },
            { name: "destructive/10", class: "bg-destructive/10", text: "text-destructive" },
          ]}
        />
        
        {/* Gradients */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Gradientes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="h-12 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-white text-sm font-medium">gradient-primary</span>
            </div>
            <div className="h-12 rounded-lg gradient-accent flex items-center justify-center">
              <span className="text-white text-sm font-medium">gradient-accent</span>
            </div>
            <div className="h-12 rounded-lg gradient-hero border flex items-center justify-center">
              <span className="text-foreground text-sm font-medium">gradient-hero</span>
            </div>
            <p className="gradient-text text-xl font-bold text-center">gradient-text</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export { ColorsSection };
