import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionHeader } from "../SectionHeader";

const TabsSection = () => {
  return (
    <section id="tabs" className="mb-16">
      <SectionHeader 
        title="Tabs" 
        description="Navegación por pestañas"
      />
      
      <Card>
        <CardContent className="pt-6">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
              <TabsTrigger value="security">Seguridad</TabsTrigger>
            </TabsList>
            <TabsContent value="general" className="mt-4">
              <p className="text-muted-foreground">Contenido de la pestaña General.</p>
            </TabsContent>
            <TabsContent value="notifications" className="mt-4">
              <p className="text-muted-foreground">Contenido de la pestaña Notificaciones.</p>
            </TabsContent>
            <TabsContent value="security" className="mt-4">
              <p className="text-muted-foreground">Contenido de la pestaña Seguridad.</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  );
};

export { TabsSection };
