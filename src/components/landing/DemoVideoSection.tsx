import { Play, Calendar, MessageCircle, Bell, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const DemoVideoSection = () => {
  const steps = [
    { icon: Calendar, title: "Cliente reserva", description: "En menos de 1 minuto" },
    { icon: MessageCircle, title: "Auto-confirmación", description: "WhatsApp instantáneo" },
    { icon: Bell, title: "Recordatorios", description: "24h y 1h antes" },
    { icon: CheckCircle, title: "Check-in", description: "Sin esperas" },
  ];

  return (
    <section className="py-20 md:py-28 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mira cómo funciona en <span className="text-primary">90 segundos</span>
          </h2>
          <p className="text-background/70 max-w-2xl mx-auto">
            Descubre por qué miles de negocios ya confían en nuestra plataforma
          </p>
        </div>

        {/* Video Player */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative aspect-video bg-background/10 rounded-2xl overflow-hidden border border-background/20">
            <img
              src="https://placehold.co/1280x720/1F2937/FFFFFF?text=Video+Demo"
              alt="Video Demo"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                size="lg"
                className="w-20 h-20 rounded-full gradient-primary border-0 hover:scale-110 transition-transform"
              >
                <Play className="w-8 h-8 ml-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="flex items-center justify-center mb-3">
                {i > 0 && (
                  <div className="hidden md:block w-full h-px bg-background/20 absolute -left-1/2" />
                )}
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center relative">
                  <step.icon className="w-6 h-6 text-primary" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full gradient-primary text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
              </div>
              <h4 className="font-semibold mb-1">{step.title}</h4>
              <p className="text-sm text-background/60">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoVideoSection;
