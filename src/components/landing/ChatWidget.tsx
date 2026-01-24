import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Bubble */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-card rounded-xl shadow-2xl border border-border overflow-hidden mb-4">
          <div className="gradient-primary p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold">¿Necesitas ayuda?</h4>
                <p className="text-sm text-white/80">Estamos aquí para ti</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-muted rounded-lg p-3 mb-4">
              <p className="text-sm text-foreground">
                👋 ¡Hola! Soy el asistente de ReservaApp. ¿En qué puedo ayudarte?
              </p>
            </div>
            <a
              href="https://wa.me/1234567890?text=Hola, me interesa ReservaApp"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full gradient-primary border-0 gap-2">
                <MessageCircle className="w-4 h-4" />
                Chatear por WhatsApp
              </Button>
            </a>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Badge */}
      {!isOpen && (
        <span className="absolute -top-2 -left-2 bg-accent text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">
          ¿Ayuda?
        </span>
      )}
    </div>
  );
};

export default ChatWidget;
