import { useState } from "react";
import { ArrowRight, Lock, Zap, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const FinalCTASection = () => {
  const [email, setEmail] = useState("");
  const [businessType, setBusinessType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { email, businessType });
    // TODO: Implement form submission
  };

  return (
    <section className="py-20 md:py-28 gradient-primary text-white relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Comienza a transformar tu negocio hoy
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Únete a cientos de negocios que ya optimizaron sus reservas
          </p>
        </div>

        {/* Form Card */}
        <Card className="max-w-md mx-auto">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12"
                required
              />
              <Select value={businessType} onValueChange={setBusinessType}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Tipo de negocio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="salon">Salón de Belleza</SelectItem>
                  <SelectItem value="spa">Spa & Estética</SelectItem>
                  <SelectItem value="restaurant">Restaurante</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="other">Otro</SelectItem>
                </SelectContent>
              </Select>
              <Button type="submit" size="lg" className="w-full gradient-primary border-0 h-12 text-lg">
                Comenzar Prueba Gratis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Trust Line */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/80 text-sm">
          <span className="flex items-center gap-2">
            <Lock className="w-4 h-4" />
            Sin tarjeta de crédito
          </span>
          <span className="flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Setup en 5 min
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4" />
            Soporte incluido
          </span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
