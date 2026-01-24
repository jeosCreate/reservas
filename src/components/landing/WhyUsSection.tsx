import { Brain, MessageCircle, Store, Headphones, Check, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const WhyUsSection = () => {
  const differentiators = [
    {
      icon: Brain,
      title: "Inteligencia Artificial integrada",
      description: "IA que aprende de tu negocio y optimiza automáticamente tus operaciones",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp nativo, no add-ons",
      description: "Integración directa con WhatsApp Business, sin herramientas externas",
    },
    {
      icon: Store,
      title: "Marketplace integrado",
      description: "Vende productos y servicios adicionales directamente a tus clientes",
    },
    {
      icon: Headphones,
      title: "Atención personalizada",
      description: "Soporte humano real incluido en todos los planes, sin chatbots",
    },
  ];

  const comparisonRows = [
    { feature: "Tiempo de gestión diaria", traditional: "2-3 horas", us: "15 minutos" },
    { feature: "Tasa de no-shows", traditional: "15-25%", us: "< 2%" },
    { feature: "Experiencia del cliente", traditional: "Inconsistente", us: "Premium automatizada" },
    { feature: "Costo mensual", traditional: "$50-200 en herramientas", us: "Desde $0" },
    { feature: "Escalabilidad", traditional: "Limitada", us: "Ilimitada" },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            La diferencia que <span className="gradient-text">importa</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            No somos solo otra herramienta de reservas. Somos tu socio para el crecimiento.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {differentiators.map((item, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow border-primary/10">
              <CardContent className="p-6 flex gap-4">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Table Accordion */}
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          <AccordionItem value="comparison" className="border rounded-xl px-6">
            <AccordionTrigger className="text-lg font-semibold">
              Ver comparación: Métodos tradicionales vs Nuestra plataforma
            </AccordionTrigger>
            <AccordionContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold">Característica</th>
                      <th className="text-center py-3 px-4 font-semibold text-muted-foreground">
                        Tradicional
                      </th>
                      <th className="text-center py-3 px-4 font-semibold text-primary">
                        ReservaApp
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr key={i} className="border-b last:border-0">
                        <td className="py-3 px-4 text-foreground">{row.feature}</td>
                        <td className="py-3 px-4 text-center">
                          <span className="inline-flex items-center gap-2 text-destructive">
                            <X className="w-4 h-4" />
                            {row.traditional}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="inline-flex items-center gap-2 text-accent">
                            <Check className="w-4 h-4" />
                            {row.us}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default WhyUsSection;
