import { Button } from "@/components/ui/button";

const StyleGuideHeader = () => {
  return (
    <header className="border-b bg-card sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <div>
              <h1 className="font-bold text-xl">Style Guide</h1>
              <p className="text-sm text-muted-foreground">ReservaApp Design System</p>
            </div>
          </div>
          <Button variant="outline" asChild>
            <a href="/">← Volver al inicio</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export { StyleGuideHeader };
