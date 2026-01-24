import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "María González",
      role: "Dueña de Salón de Belleza",
      image: "https://placehold.co/100x100/3B82F6/FFFFFF?text=MG",
      quote: "Desde que implementamos ReservaApp, mis no-shows bajaron de 20% a menos del 2%. Mis clientas aman los recordatorios por WhatsApp.",
      rating: 5,
      metric: "Aumentó reservas 40%",
    },
    {
      name: "Carlos Rodríguez",
      role: "Gerente de Spa",
      image: "https://placehold.co/100x100/8B5CF6/FFFFFF?text=CR",
      quote: "La automatización nos ahorra 4 horas diarias. Ahora podemos enfocarnos en lo que realmente importa: nuestros clientes.",
      rating: 5,
      metric: "4 horas ahorradas/día",
    },
    {
      name: "Ana Martínez",
      role: "Propietaria de Restaurante",
      image: "https://placehold.co/100x100/10B981/FFFFFF?text=AM",
      quote: "La integración con redes sociales fue un game-changer. Nuestras reservas de fin de semana se duplicaron en un mes.",
      rating: 5,
      metric: "2x reservas fin de semana",
    },
    {
      name: "Diego López",
      role: "Dueño de Barbería",
      image: "https://placehold.co/100x100/F59E0B/FFFFFF?text=DL",
      quote: "La app móvil es increíble. Mis clientes reservan sus citas incluso a las 3am. Nunca perdemos una oportunidad.",
      rating: 5,
      metric: "+35% ocupación",
    },
    {
      name: "Laura Sánchez",
      role: "Directora de Centro de Estética",
      image: "https://placehold.co/100x100/EC4899/FFFFFF?text=LS",
      quote: "El soporte es excepcional. Siempre hay alguien real para ayudarme. No chatbots, personas de verdad.",
      rating: 5,
      metric: "98% satisfacción",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo que dicen nuestros <span className="gradient-text">clientes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Miles de negocios ya transformaron su gestión con ReservaApp
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, i) => (
                <div key={i} className="w-full flex-shrink-0 px-4">
                  <Card className="border-primary/10">
                    <CardContent className="p-8 text-center">
                      <Quote className="w-12 h-12 text-primary/20 mx-auto mb-6" />
                      <p className="text-lg md:text-xl text-foreground mb-6 italic">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex justify-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, j) => (
                          <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <div className="flex items-center justify-center gap-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full"
                        />
                        <div className="text-left">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <span className="inline-block bg-accent/10 text-accent text-sm font-medium px-4 py-2 rounded-full">
                          {testimonial.metric}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
