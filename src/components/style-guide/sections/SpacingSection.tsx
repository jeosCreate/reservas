import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "../SectionHeader";

const SpacingSection = () => {
  return (
    <section id="espaciado" className="mb-16">
      <SectionHeader 
        title="Espaciado" 
        description="Referencia de espaciado y márgenes"
      />
      
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium mb-3">Secciones</h4>
              <code className="text-sm bg-muted px-2 py-1 rounded">py-16 md:py-20</code> o <code className="text-sm bg-muted px-2 py-1 rounded">py-20 md:py-28</code>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-3">Container</h4>
              <code className="text-sm bg-muted px-2 py-1 rounded">container mx-auto px-4</code>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-3">Gaps en Grids</h4>
              <code className="text-sm bg-muted px-2 py-1 rounded">gap-4</code>, <code className="text-sm bg-muted px-2 py-1 rounded">gap-6</code>, <code className="text-sm bg-muted px-2 py-1 rounded">gap-8</code>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-3">Margins</h4>
              <code className="text-sm bg-muted px-2 py-1 rounded">mb-4</code>, <code className="text-sm bg-muted px-2 py-1 rounded">mb-6</code>, <code className="text-sm bg-muted px-2 py-1 rounded">mb-8</code>, <code className="text-sm bg-muted px-2 py-1 rounded">mb-12</code>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export { SpacingSection };
