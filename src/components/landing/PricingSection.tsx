import { useState } from "react";
import { Check, Sparkles, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [reservationsPerMonth, setReservationsPerMonth] = useState(100);

  const plans = [
    {
      name: "Freemium",
      price: "Gratis",
      period: "para siempre",
      description: "Perfecto para comenzar",
      features: [
        "Hasta 50 reservas/mes",
        "Confirmaciones WhatsApp básicas",
        "App móvil para clientes",
        "Calendario básico",
        "Soporte por email",
      ],
      cta: "Comenzar Gratis",
      popular: false,
    },
    {
      name: "Profesional",
      price: isAnnual ? "$23" : "$29",
      period: "/mes",
      description: "Para negocios en crecimiento",
      features: [
        "Reservas ilimitadas",
        "Todo de Freemium +",
        "IA predictiva",
        "Métricas avanzadas",
        "Integraciones (Google, etc.)",
        "Soporte prioritario",
        "Personalización de marca",
      ],
      cta: "Probar 14 días gratis",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Personalizado",
      period: "",
      description: "Para grandes operaciones",
      features: [
        "Todo de Profesional +",
        "Múltiples sucursales",
        "API access completo",
        "Onboarding dedicado",
        "Account manager",
        "SLA garantizado",
        "Integraciones custom",
      ],
      cta: "Contactar ventas",
      popular: false,
    },
  ];

  // Simple ROI calculation
  const hoursPerReservation = 0.05; // 3 minutes per reservation
  const hoursSaved = Math.round(reservationsPerMonth * hoursPerReservation);
  const noShowRate = 0.15;
  const avgTicket = 50;
  const moneySaved = Math.round(reservationsPerMonth * noShowRate * avgTicket * 0.95);

  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planes transparentes que <span className="gradient-text">crecen contigo</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Sin costos ocultos. Cancela cuando quieras.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
              Mensual
            </span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
            <span className={`text-sm ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
              Anual
            </span>
            {isAnnual && (
              <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full font-medium">
                Ahorra 20%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {plans.map((plan, i) => (
            <Card
              key={i}
              className={`relative ${
                plan.popular
                  ? "border-primary shadow-xl scale-105 z-10"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="gradient-primary text-white text-xs font-semibold px-4 py-1 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Más Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular ? "gradient-primary border-0" : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ROI Calculator */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-primary" />
              Calculadora de Ahorro
            </CardTitle>
            <CardDescription>
              Descubre cuánto puedes ahorrar con nuestra plataforma
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <Label htmlFor="reservations">¿Cuántas reservas tienes al mes?</Label>
                <Input
                  id="reservations"
                  type="number"
                  value={reservationsPerMonth}
                  onChange={(e) => setReservationsPerMonth(Number(e.target.value))}
                  className="mt-2"
                  min={1}
                />
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <p className="text-3xl font-bold text-primary">{hoursSaved}h</p>
                  <p className="text-sm text-muted-foreground">horas ahorradas/mes</p>
                </div>
                <div className="text-center p-4 bg-accent/10 rounded-lg">
                  <p className="text-3xl font-bold text-accent">${moneySaved}</p>
                  <p className="text-sm text-muted-foreground">recuperados de no-shows</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PricingSection;
