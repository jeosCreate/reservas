import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, CheckCircle } from "lucide-react";
import { SectionHeader } from "../SectionHeader";

const CardsSection = () => {
  return (
    <section id="cards" className="mb-16">
      <SectionHeader 
        title="Cards" 
        description="Componentes de tarjeta para contenido agrupado"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Basic Card */}
        <Card>
          <CardHeader>
            <CardTitle>Card Básica</CardTitle>
            <CardDescription>Descripción de la tarjeta con texto secundario</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Contenido de la tarjeta. Puede incluir texto, imágenes u otros componentes.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Acción</Button>
          </CardFooter>
        </Card>
        
        {/* Hover Card */}
        <Card className="hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer">
          <CardHeader>
            <CardTitle>Card con Hover</CardTitle>
            <CardDescription>Interactiva con efectos de hover</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Esta tarjeta tiene efectos de hover para indicar interactividad.</p>
          </CardContent>
        </Card>
        
        {/* Highlighted Card */}
        <Card className="border-primary bg-primary/5">
          <CardHeader>
            <CardTitle>Card Destacada</CardTitle>
            <CardDescription>Con borde y fondo de color primario</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Útil para destacar contenido importante o seleccionado.</p>
          </CardContent>
        </Card>
        
        {/* Feature Card */}
        <Card>
          <CardHeader>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Card de Feature</CardTitle>
            <CardDescription>Con icono destacado</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Ideal para mostrar características o servicios del producto.</p>
          </CardContent>
        </Card>
        
        {/* Stats Card */}
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Reservas Hoy</CardDescription>
            <CardTitle className="text-3xl font-bold">24</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-accent flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              +12% vs ayer
            </p>
          </CardContent>
        </Card>
        
        {/* Pricing Card */}
        <Card className="relative overflow-hidden">
          <div className="absolute top-0 right-0">
            <Badge className="rounded-none rounded-bl-lg">Popular</Badge>
          </div>
          <CardHeader>
            <CardTitle>Plan Pro</CardTitle>
            <CardDescription>Para negocios en crecimiento</CardDescription>
            <div className="pt-4">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-muted-foreground">/mes</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Feature 1</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Feature 2</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Feature 3</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full gradient-primary border-0">Elegir Plan</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export { CardsSection };
