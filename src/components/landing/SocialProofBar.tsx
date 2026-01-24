import { Scissors, Sparkles, UtensilsCrossed, ShoppingBag, Calendar, TrendingDown, Clock } from "lucide-react";

const SocialProofBar = () => {
  const industries = [
    { icon: Scissors, label: "Salones" },
    { icon: Sparkles, label: "Spas" },
    { icon: UtensilsCrossed, label: "Restaurantes" },
    { icon: ShoppingBag, label: "Retail" },
  ];

  const metrics = [
    { icon: Calendar, value: "10,000+", label: "reservas gestionadas" },
    { icon: TrendingDown, value: "98%", label: "reducción en no-shows" },
    { icon: Clock, value: "5 horas", label: "ahorradas/semana" },
  ];

  return (
    <section className="py-12 bg-muted/50 border-y border-border">
      <div className="container mx-auto px-4">
        {/* Industries */}
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground mb-4">Confiado por negocios como el tuyo</p>
          <div className="flex justify-center gap-8 flex-wrap">
            {industries.map((industry, i) => (
              <div key={i} className="flex items-center gap-2 text-muted-foreground">
                <industry.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{industry.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {metrics.map((metric, i) => (
            <div key={i} className="flex items-center justify-center gap-3 text-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <metric.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
