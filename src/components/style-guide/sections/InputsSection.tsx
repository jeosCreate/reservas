import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";
import { SectionHeader } from "../SectionHeader";

const InputsSection = () => {
  return (
    <section id="inputs" className="mb-16">
      <SectionHeader 
        title="Inputs & Forms" 
        description="Campos de entrada y controles de formulario"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Text Inputs */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Text Inputs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="default">Default</Label>
              <Input id="default" placeholder="Escribe aquí..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="with-icon">Con Icono</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input id="with-icon" className="pl-10" placeholder="Buscar..." />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="disabled">Disabled</Label>
              <Input id="disabled" placeholder="No disponible" disabled />
            </div>
          </CardContent>
        </Card>
        
        {/* Checkboxes & Switches */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Checkboxes & Switches</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Acepto los términos y condiciones</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="marketing" defaultChecked />
              <Label htmlFor="marketing">Recibir notificaciones de marketing</Label>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications">Notificaciones push</Label>
              <Switch id="notifications" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="email-alerts">Alertas por email</Label>
              <Switch id="email-alerts" defaultChecked />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export { InputsSection };
