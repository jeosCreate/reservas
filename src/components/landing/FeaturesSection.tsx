import { useState } from "react";
import { Calendar, MessageCircle, BarChart3, Package, Smartphone, Brain, Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FeaturesSection = () => {
  const features = [
    {
      id: "reservas",
      icon: Calendar,
      title: "Gestión de Reservas",
      description: "Calendario visual intuitivo con gestión en tiempo real",
      bullets: [
        "Calendario visual drag & drop",
        "Alertas de disponibilidad automáticas",
        "Sincronización con Google Calendar",
        "Gestión de múltiples servicios",
      ],
      image: "https://placehold.co/600x400/3B82F6/FFFFFF?text=Calendario+de+Reservas",
    },
    {
      id: "whatsapp",
      icon: MessageCircle,
      title: "WhatsApp Automatizado",
      description: "Confirmaciones y recordatorios sin esfuerzo",
      bullets: [
        "Confirmaciones automáticas instantáneas",
        "Recordatorios 24h y 1h antes",
        "Mensajes personalizables",
        "Respuestas automáticas inteligentes",
      ],
      image: "https://placehold.co/600x400/25D366/FFFFFF?text=WhatsApp+Automation",
    },
    {
      id: "metricas",
      icon: BarChart3,
      title: "Panel de Métricas",
      description: "KPIs en tiempo real para tomar mejores decisiones",
      bullets: [
        "Dashboard con métricas clave",
        "Reportes personalizables",
        "Predicciones con IA",
        "Exportación de datos",
      ],
      image: "https://placehold.co/600x400/8B5CF6/FFFFFF?text=Analytics+Dashboard",
    },
    {
      id: "inventario",
      icon: Package,
      title: "Gestión de Inventario",
      description: "Control total de productos y servicios",
      bullets: [
        "Control de stock en tiempo real",
        "Alertas de inventario bajo",
        "Gestión de proveedores",
        "Historial de movimientos",
      ],
      image: "https://placehold.co/600x400/10B981/FFFFFF?text=Inventario",
    },
    {
      id: "app",
      icon: Smartphone,
      title: "App Móvil",
      description: "Tus clientes reservan desde cualquier lugar",
      bullets: [
        "Reserva en 3 clics",
        "Modificar y cancelar citas",
        "Notificaciones push",
        "Historial de servicios",
      ],
      image: "https://placehold.co/600x400/EC4899/FFFFFF?text=App+Móvil",
    },
    {
      id: "ia",
      icon: Brain,
      title: "IA Predictiva",
      description: "Inteligencia artificial que optimiza tu negocio",
      bullets: [
        "Predicción de demanda",
        "Sugerencias de horarios óptimos",
        "Recomendaciones personalizadas",
        "Optimización de precios",
      ],
      image: "https://placehold.co/600x400/F59E0B/FFFFFF?text=IA+Predictiva",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Todo lo que necesitas en <span className="gradient-text">un solo lugar</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una suite completa de herramientas diseñadas para hacer crecer tu negocio
          </p>
        </div>

        <Tabs defaultValue="reservas" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 h-auto bg-transparent mb-8">
            {features.map((feature) => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
                className="flex items-center gap-2 px-4 py-3 rounded-lg data-[state=active]:gradient-primary data-[state=active]:text-white"
              >
                <feature.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{feature.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {features.map((feature) => (
            <TabsContent key={feature.id} value={feature.id}>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-accent" />
                        </div>
                        <span className="text-foreground">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturesSection;
