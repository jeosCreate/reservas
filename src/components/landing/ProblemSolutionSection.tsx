import { CalendarX, MessageSquareX, Clock, AlertTriangle, Calendar, MessageSquare, Zap, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProblemSolutionSection = () => {
  const problems = [
    {
      icon: CalendarX,
      title: "Agenda desorganizada y caótica",
      description: "Papeles perdidos, reservas olvidadas y clientes insatisfechos",
    },
    {
      icon: MessageSquareX,
      title: "Clientes frustrados",
      description: "Malas comunicaciones y falta de confirmaciones claras",
    },
    {
      icon: Clock,
      title: "Pérdida de tiempo",
      description: "Horas malgastadas en confirmaciones manuales por teléfono",
    },
    {
      icon: AlertTriangle,
      title: "Reservas perdidas",
      description: "Citas duplicadas, cancelaciones de último momento y no-shows",
    },
  ];

  const solutions = [
    {
      icon: Calendar,
      title: "Calendario inteligente",
      description: "Todo organizado en un solo lugar, accesible desde cualquier dispositivo",
    },
    {
      icon: MessageSquare,
      title: "Comunicación automatizada",
      description: "Confirmaciones y recordatorios por WhatsApp sin esfuerzo",
    },
    {
      icon: Zap,
      title: "Ahorro de tiempo",
      description: "Automatiza tareas repetitivas y enfócate en tu negocio",
    },
    {
      icon: CheckCircle,
      title: "Cero no-shows",
      description: "Sistema de confirmación que reduce cancelaciones al mínimo",
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Problems */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Te suena familiar?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estos son los problemas que enfrentan miles de negocios de servicios cada día
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((problem, i) => (
            <Card key={i} className="border-destructive/20 bg-destructive/5 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{problem.title}</h3>
                <p className="text-sm text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Visual Divider */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-px bg-border flex-1" />
          <div className="px-6">
            <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="h-px bg-border flex-1" />
        </div>

        {/* Solutions */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tu solución <span className="gradient-text">todo-en-uno</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una plataforma completa que transforma cómo gestionas tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, i) => (
            <Card key={i} className="border-accent/20 bg-accent/5 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <solution.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{solution.title}</h3>
                <p className="text-sm text-muted-foreground">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
