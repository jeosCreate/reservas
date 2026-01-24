import { Play, ArrowRight, Calendar, Bell, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section className="relative min-h-screen pt-20 md:pt-24 overflow-hidden gradient-hero">
      {/* Abstract shapes background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 bg-card text-center md:text-7xl">
              Transforma Citas Perdidas en{" "}
              <span className="gradient-text">Ingresos Garantizados</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Sistema inteligente de reservas que ahorra tiempo, reduce no-shows y aumenta ventas para negocios de servicios
            </p>

            {/* Dual CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <Button size="lg" className="gradient-primary border-0 text-lg px-8 py-6 gap-2">
                Comenzar Prueba Gratis 14 Días
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 gap-2">
                <Play className="w-5 h-5" />
                Ver Demo en Vivo
              </Button>
            </div>

            {/* Trust text */}
            <p className="text-sm text-muted-foreground">
              Sin tarjeta de crédito • Configuración en 5 minutos
            </p>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="relative">
            <div className="bg-card rounded-2xl shadow-2xl border border-border p-4 md:p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-semibold text-foreground">Dashboard de Reservas</h3>
                  <p className="text-sm text-muted-foreground">Hoy, 24 Enero 2026</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/50" />
                  <div className="w-3 h-3 rounded-full bg-accent/50" />
                  <div className="w-3 h-3 rounded-full bg-primary/50" />
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-4 gap-3 mb-6">
                {[{
                icon: Calendar,
                label: "Hoy",
                value: "12"
              }, {
                icon: Users,
                label: "Clientes",
                value: "847"
              }, {
                icon: Bell,
                label: "Confirmados",
                value: "98%"
              }, {
                icon: TrendingUp,
                label: "Ingresos",
                value: "$2.4k"
              }].map((stat, i) => <div key={i} className="bg-muted/50 rounded-lg p-3 text-center">
                    <stat.icon className="w-4 h-4 mx-auto mb-1 text-primary" />
                    <p className="text-lg font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>)}
              </div>

              {/* Calendar Preview */}
              <div className="bg-muted/30 rounded-lg p-4">
                <div className="grid grid-cols-7 gap-2 mb-3">
                  {["L", "M", "X", "J", "V", "S", "D"].map(day => <div key={day} className="text-center text-xs text-muted-foreground font-medium">
                      {day}
                    </div>)}
                </div>
                <div className="space-y-2">
                  {[{
                  time: "09:00",
                  client: "María García",
                  service: "Corte + Color",
                  status: "confirmed"
                }, {
                  time: "10:30",
                  client: "Carlos López",
                  service: "Masaje Relajante",
                  status: "pending"
                }, {
                  time: "12:00",
                  client: "Ana Martínez",
                  service: "Manicure",
                  status: "confirmed"
                }].map((appointment, i) => <div key={i} className={`flex items-center justify-between p-2 rounded-lg ${appointment.status === "confirmed" ? "bg-accent/10" : "bg-primary/10"}`}>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-medium text-muted-foreground">{appointment.time}</span>
                        <div>
                          <p className="text-sm font-medium text-foreground">{appointment.client}</p>
                          <p className="text-xs text-muted-foreground">{appointment.service}</p>
                        </div>
                      </div>
                      <div className={`w-2 h-2 rounded-full ${appointment.status === "confirmed" ? "bg-accent" : "bg-primary"}`} />
                    </div>)}
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-card rounded-xl shadow-lg border border-border p-3 hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <Bell className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-medium">Recordatorio enviado</p>
                  <p className="text-xs text-muted-foreground">Hace 2 min</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg border border-border p-3 hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium">+23% reservas</p>
                  <p className="text-xs text-muted-foreground">vs. mes anterior</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;