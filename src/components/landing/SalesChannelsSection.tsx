import { Instagram, Facebook, Share2, Users, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SalesChannelsSection = () => {
  const channels = [
    { icon: Instagram, name: "Instagram", color: "bg-pink-500" },
    { icon: Facebook, name: "Facebook", color: "bg-blue-600" },
    { icon: Share2, name: "TikTok", color: "bg-foreground" },
    { icon: Users, name: "Influencers", color: "bg-purple-500" },
  ];

  const benefits = [
    {
      title: "Acepta pre-ventas desde redes sociales",
      description: "Tus seguidores pueden reservar directamente desde tus posts y stories",
    },
    {
      title: "Colabora con influencers directamente",
      description: "Crea códigos de descuento y trackea resultados de campañas",
    },
    {
      title: "Paid ads que convierten en reservas",
      description: "Conecta tus anuncios con booking directo, sin fricción",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            No solo gestiones. <span className="gradient-text">Vende más.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conecta todos tus canales de venta en un solo lugar
          </p>
        </div>

        {/* Integration Visual */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative flex items-center justify-center py-12">
            {/* Center Logo */}
            <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center shadow-lg z-10">
              <span className="text-white font-bold text-2xl">R</span>
            </div>

            {/* Connecting Lines and Channels */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 border-2 border-dashed border-primary/30 rounded-full" />
            </div>

            {/* Channel Icons */}
            {channels.map((channel, i) => {
              const angle = (i * 90 - 45) * (Math.PI / 180);
              const radius = 120;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={i}
                  className={`absolute w-12 h-12 rounded-xl ${channel.color} flex items-center justify-center shadow-lg transform transition-transform hover:scale-110`}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  <channel.icon className="w-6 h-6 text-white" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center mb-4">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesChannelsSection;
