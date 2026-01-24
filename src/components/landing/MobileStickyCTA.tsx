import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileStickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border p-4 md:hidden">
      <Button className="w-full gradient-primary border-0 h-12 text-base gap-2">
        Prueba Gratis 14 Días
        <ArrowRight className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default MobileStickyCTA;
