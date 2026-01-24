import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Necesito conocimientos técnicos para usar la plataforma?",
      answer: "No, para nada. ReservaApp está diseñado para ser intuitivo y fácil de usar. Si sabes usar WhatsApp, puedes usar nuestra plataforma. Además, ofrecemos onboarding guiado y tutoriales paso a paso para que comiences en minutos. Nuestro equipo de soporte está siempre disponible si tienes alguna duda.",
    },
    {
      question: "¿Cómo migro mis reservas actuales?",
      answer: "Ofrecemos varias opciones para migrar tus datos. Puedes importar desde Excel, Google Sheets, o desde otras plataformas populares. Nuestro equipo te ayuda con la migración sin costo adicional en planes Profesional y Enterprise. El proceso típico toma menos de 24 horas.",
    },
    {
      question: "¿La integración con WhatsApp es complicada?",
      answer: "Es muy sencillo. Conectas tu número de WhatsApp Business en 3 clics y listo. No necesitas conocimientos técnicos ni configuraciones complicadas. La conexión es directa con la API oficial de WhatsApp, lo que garantiza que tus mensajes siempre lleguen. Además, cumplimos con todas las políticas de WhatsApp para evitar bloqueos.",
    },
    {
      question: "¿Puedo probar antes de pagar?",
      answer: "¡Por supuesto! Ofrecemos un plan Freemium gratuito para siempre con hasta 50 reservas mensuales. Además, el plan Profesional incluye 14 días de prueba gratis sin necesidad de tarjeta de crédito. Queremos que pruebes todas las funcionalidades antes de comprometerte.",
    },
    {
      question: "¿Funciona para múltiples sucursales?",
      answer: "Sí, nuestro plan Enterprise está específicamente diseñado para negocios con múltiples ubicaciones. Puedes gestionar todas tus sucursales desde un solo dashboard, con reportes consolidados y permisos por ubicación. Cada sucursal puede tener su propia configuración mientras mantienes control centralizado.",
    },
    {
      question: "¿Mis datos están seguros?",
      answer: "La seguridad es nuestra prioridad número uno. Usamos encriptación SSL de 256 bits, cumplimos con GDPR, y realizamos backups diarios. Tus datos están alojados en servidores certificados con 99.9% de uptime garantizado. Nunca compartimos información con terceros y puedes exportar o eliminar tus datos en cualquier momento.",
    },
    {
      question: "¿Qué tipo de soporte ofrecen?",
      answer: "Ofrecemos soporte por email en el plan Freemium con respuesta en 24h. El plan Profesional incluye soporte prioritario por chat con respuesta en 2h. El plan Enterprise cuenta con un account manager dedicado y soporte telefónico 24/7. Además, todos los planes tienen acceso a nuestra base de conocimientos y tutoriales en video.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Preguntas <span className="gradient-text">Frecuentes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas saber sobre ReservaApp
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border rounded-xl px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
