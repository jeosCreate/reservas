import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, CheckCircle, AlertCircle } from "lucide-react";
import { SectionHeader } from "../SectionHeader";

const AlertsSection = () => {
  return (
    <section id="alerts" className="mb-16">
      <SectionHeader 
        title="Alerts" 
        description="Mensajes de información, éxito y error"
      />
      
      <div className="space-y-4">
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Información</AlertTitle>
          <AlertDescription>
            Este es un mensaje informativo para el usuario.
          </AlertDescription>
        </Alert>
        
        <Alert className="border-accent/50 bg-accent/5">
          <CheckCircle className="h-4 w-4 text-accent" />
          <AlertTitle className="text-accent">Éxito</AlertTitle>
          <AlertDescription>
            La operación se ha completado correctamente.
          </AlertDescription>
        </Alert>
        
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Ha ocurrido un error. Por favor, inténtalo de nuevo.
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
};

export { AlertsSection };
