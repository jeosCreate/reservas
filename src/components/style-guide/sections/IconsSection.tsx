import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  Star, 
  User, 
  Bell, 
  Settings, 
  CheckCircle, 
  AlertCircle 
} from "lucide-react";
import { SectionHeader } from "../SectionHeader";

const IconsSection = () => {
  return (
    <section id="iconos" className="mb-16">
      <SectionHeader 
        title="Iconos" 
        description="Usando Lucide React - tamaños y colores"
      />
      
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-6">
            {/* Sizes */}
            <div>
              <h4 className="text-sm font-medium mb-3">Tamaños</h4>
              <div className="flex items-end gap-4">
                <div className="text-center">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs text-muted-foreground block mt-1">w-4</span>
                </div>
                <div className="text-center">
                  <Calendar className="w-5 h-5" />
                  <span className="text-xs text-muted-foreground block mt-1">w-5</span>
                </div>
                <div className="text-center">
                  <Calendar className="w-6 h-6" />
                  <span className="text-xs text-muted-foreground block mt-1">w-6</span>
                </div>
                <div className="text-center">
                  <Calendar className="w-8 h-8" />
                  <span className="text-xs text-muted-foreground block mt-1">w-8</span>
                </div>
              </div>
            </div>
            
            {/* Colors */}
            <div>
              <h4 className="text-sm font-medium mb-3">Colores</h4>
              <div className="flex gap-4">
                <Star className="w-6 h-6 text-primary" />
                <Star className="w-6 h-6 text-secondary" />
                <Star className="w-6 h-6 text-accent" />
                <Star className="w-6 h-6 text-destructive" />
                <Star className="w-6 h-6 text-muted-foreground" />
              </div>
            </div>
            
            {/* Common Icons */}
            <div>
              <h4 className="text-sm font-medium mb-3">Iconos Comunes</h4>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-muted-foreground">Calendar</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <User className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-muted-foreground">User</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <Bell className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-muted-foreground">Bell</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <Settings className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-muted-foreground">Settings</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-muted-foreground">CheckCircle</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-muted-foreground">AlertCircle</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export { IconsSection };
