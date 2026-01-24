import { useState } from "react";
import { Scissors, Sparkles, UtensilsCrossed, ShoppingBag, Check, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const IndustriesSection = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const industries = [
    {
      id: "salon",
      icon: Scissors,
      title: "Salones de Belleza",
      subtitle: "Peluquerías, barberías y estilistas",
      image: "https://placehold.co/400x200/3B82F6/FFFFFF?text=Salón+de+Belleza",
      benefits: [
        "Gestión de múltiples estilistas y sillas",
        "Servicios combinados (corte + color)",
        "Recordatorios automáticos por WhatsApp",
        "Control de productos de belleza",
        "Programas de fidelización",
      ],
      testimonial: "Redujimos los no-shows en un 95% desde que usamos ReservaApp",
    },
    {
      id: "spa",
      icon: Sparkles,
      title: "Spas & Estética",
      subtitle: "Centros de bienestar y belleza",
      image: "https://placehold.co/400x200/8B5CF6/FFFFFF?text=Spa+%26+Estética",
      benefits: [
        "Reservas de tratamientos largos",
        "Gestión de cabinas y terapeutas",
        "Paquetes y promociones especiales",
        "Historial de tratamientos por cliente",
        "Venta de productos complementarios",
      ],
      testimonial: "Nuestros clientes aman poder reservar su spa day en 3 clics",
    },
    {
      id: "restaurant",
      icon: UtensilsCrossed,
      title: "Restaurantes",
      subtitle: "Cafeterías, bares y food service",
      image: "https://placehold.co/400x200/10B981/FFFFFF?text=Restaurante",
      benefits: [
        "Gestión de mesas y aforo",
        "Reservas para eventos especiales",
        "Menús del día y promociones",
        "Preferencias dietéticas de clientes",
        "Integración con delivery",
      ],
      testimonial: "Duplicamos las reservas de fin de semana con la automatización",
    },
    {
      id: "retail",
      icon: ShoppingBag,
      title: "Retail & Boutiques",
      subtitle: "Tiendas con servicios personalizados",
      image: "https://placehold.co/400x200/EC4899/FFFFFF?text=Retail",
      benefits: [
        "Citas para personal shopping",
        "Pruebas de productos exclusivos",
        "Eventos y lanzamientos VIP",
        "Gestión de inventario integrada",
        "Programa de clientes frecuentes",
      ],
      testimonial: "Las citas VIP aumentaron nuestro ticket promedio en 40%",
    },
  ];

  return (
    <section id="industries" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Diseñado para <span className="gradient-text">tu negocio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluciones específicas para cada industria con funcionalidades personalizadas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {industries.map((industry) => (
            <Card
              key={industry.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                expandedCard === industry.id ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setExpandedCard(expandedCard === industry.id ? null : industry.id)}
            >
              <CardContent className="p-0">
                {/* Header */}
                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center">
                      <industry.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{industry.title}</h3>
                      <p className="text-sm text-muted-foreground">{industry.subtitle}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      expandedCard === industry.id ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Expanded Content */}
                {expandedCard === industry.id && (
                  <div className="border-t border-border">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="font-semibold mb-4">Beneficios específicos:</h4>
                      <ul className="space-y-2 mb-6">
                        {industry.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                              <Check className="w-3 h-3 text-accent" />
                            </div>
                            <span className="text-sm text-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                        "{industry.testimonial}"
                      </blockquote>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
