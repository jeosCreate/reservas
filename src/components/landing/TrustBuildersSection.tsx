import { Shield, Lock, Server, CreditCard, Cloud, MessageCircle } from "lucide-react";

const TrustBuildersSection = () => {
  const badges = [
    { icon: Lock, label: "SSL Secured", description: "Encriptación 256-bit" },
    { icon: Shield, label: "GDPR Compliant", description: "Datos protegidos" },
    { icon: Server, label: "99.9% Uptime", description: "Alta disponibilidad" },
  ];

  const poweredBy = [
    { icon: CreditCard, name: "Stripe" },
    { icon: MessageCircle, name: "Twilio" },
    { icon: Cloud, name: "AWS" },
  ];

  return (
    <section className="py-16 border-y border-border">
      <div className="container mx-auto px-4">
        {/* Security Badges */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {badges.map((badge, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <badge.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{badge.label}</p>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Powered By */}
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground mb-4">Powered by</p>
          <div className="flex justify-center gap-8">
            {poweredBy.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-muted-foreground">
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee */}
        <div className="text-center">
          <p className="text-foreground font-medium">
            🛡️ Garantía de satisfacción: 14 días prueba gratis, cancela cuando quieras
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustBuildersSection;
