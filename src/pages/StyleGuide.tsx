import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { 
  Calendar, 
  CheckCircle, 
  AlertCircle, 
  Info, 
  Star, 
  ArrowRight,
  Bell,
  Settings,
  User,
  Search
} from "lucide-react";

const StyleGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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

      <main className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="mb-12">
          <div className="flex flex-wrap gap-2">
            {["Colores", "Tipografía", "Botones", "Cards", "Badges", "Inputs", "Alerts", "Tabs", "Iconos"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 text-sm font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        {/* Colors Section */}
        <section id="colores" className="mb-16">
          <SectionHeader 
            title="Paleta de Colores" 
            description="Todos los colores están definidos en HSL y se usan a través de tokens semánticos"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Primary Colors */}
            <ColorCard 
              title="Primary (Azul)"
              colors={[
                { name: "primary", class: "bg-primary", text: "text-primary-foreground" },
                { name: "primary/80", class: "bg-primary/80", text: "text-primary-foreground" },
                { name: "primary/50", class: "bg-primary/50", text: "text-primary-foreground" },
                { name: "primary/20", class: "bg-primary/20", text: "text-primary" },
                { name: "primary/10", class: "bg-primary/10", text: "text-primary" },
              ]}
            />
            
            {/* Secondary Colors */}
            <ColorCard 
              title="Secondary (Morado)"
              colors={[
                { name: "secondary", class: "bg-secondary", text: "text-secondary-foreground" },
                { name: "secondary/80", class: "bg-secondary/80", text: "text-secondary-foreground" },
                { name: "secondary/50", class: "bg-secondary/50", text: "text-secondary-foreground" },
                { name: "secondary/20", class: "bg-secondary/20", text: "text-secondary" },
                { name: "secondary/10", class: "bg-secondary/10", text: "text-secondary" },
              ]}
            />
            
            {/* Accent Colors */}
            <ColorCard 
              title="Accent (Verde Menta)"
              colors={[
                { name: "accent", class: "bg-accent", text: "text-accent-foreground" },
                { name: "accent/80", class: "bg-accent/80", text: "text-accent-foreground" },
                { name: "accent/50", class: "bg-accent/50", text: "text-accent-foreground" },
                { name: "accent/20", class: "bg-accent/20", text: "text-accent" },
                { name: "accent/10", class: "bg-accent/10", text: "text-accent" },
              ]}
            />
            
            {/* Neutral Colors */}
            <ColorCard 
              title="Neutrales"
              colors={[
                { name: "background", class: "bg-background border", text: "text-foreground" },
                { name: "foreground", class: "bg-foreground", text: "text-background" },
                { name: "muted", class: "bg-muted", text: "text-muted-foreground" },
                { name: "card", class: "bg-card border", text: "text-card-foreground" },
                { name: "border", class: "bg-border", text: "text-foreground" },
              ]}
            />
            
            {/* Destructive */}
            <ColorCard 
              title="Destructive (Errores)"
              colors={[
                { name: "destructive", class: "bg-destructive", text: "text-destructive-foreground" },
                { name: "destructive/80", class: "bg-destructive/80", text: "text-destructive-foreground" },
                { name: "destructive/20", class: "bg-destructive/20", text: "text-destructive" },
                { name: "destructive/10", class: "bg-destructive/10", text: "text-destructive" },
              ]}
            />
            
            {/* Gradients */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Gradientes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="h-12 rounded-lg gradient-primary flex items-center justify-center">
                  <span className="text-white text-sm font-medium">gradient-primary</span>
                </div>
                <div className="h-12 rounded-lg gradient-accent flex items-center justify-center">
                  <span className="text-white text-sm font-medium">gradient-accent</span>
                </div>
                <div className="h-12 rounded-lg gradient-hero border flex items-center justify-center">
                  <span className="text-foreground text-sm font-medium">gradient-hero</span>
                </div>
                <p className="gradient-text text-xl font-bold text-center">gradient-text</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Typography Section */}
        <section id="tipografía" className="mb-16">
          <SectionHeader 
            title="Tipografía" 
            description="Escala tipográfica usando la fuente Inter"
          />
          
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">Display / Hero (text-7xl)</h1>
                <h2 className="text-3xl md:text-4xl font-bold">H2 Sección (text-4xl)</h2>
                <h3 className="text-xl md:text-2xl font-semibold">H3 Subtítulo (text-2xl)</h3>
                <p className="text-base">Body text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. (text-base)</p>
                <p className="text-sm text-muted-foreground">Small / Caption - Texto secundario o descriptivo (text-sm)</p>
                <p className="text-xs text-muted-foreground">Tiny - Para badges y labels pequeños (text-xs)</p>
              </div>
              
              <Separator />
              
              <div className="space-y-3">
                <p className="font-bold">font-bold (700) - Headlines, CTAs</p>
                <p className="font-semibold">font-semibold (600) - Subtítulos, labels importantes</p>
                <p className="font-medium">font-medium (500) - Botones, navegación</p>
                <p className="font-normal">font-normal (400) - Texto de cuerpo</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Buttons Section */}
        <section id="botones" className="mb-16">
          <SectionHeader 
            title="Botones" 
            description="Variantes y tamaños de botones disponibles"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Variants */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Variantes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-3 items-center">
                  <Button>Default</Button>
                  <MagneticButton>
                    <button className="gradient-primary hover:opacity-90 transition-opacity px-10 text-lg text-white py-4 rounded-full font-medium">
                      Gradient Primary
                    </button>
                  </MagneticButton>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Sizes */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tamaños</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon"><Star className="w-4 h-4" /></Button>
                </div>
              </CardContent>
            </Card>
            
            {/* With Icons */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Con Iconos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button><Calendar className="mr-2 h-4 w-4" /> Reservar</Button>
                  <Button variant="outline">Continuar <ArrowRight className="ml-2 h-4 w-4" /></Button>
                  <Button className="gradient-primary border-0"><CheckCircle className="mr-2 h-4 w-4" /> Confirmar</Button>
                </div>
              </CardContent>
            </Card>
            
            {/* States */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Estados</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button>Normal</Button>
                  <Button disabled>Disabled</Button>
                  <Button className="opacity-50 pointer-events-none">Loading...</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cards Section */}
        <section id="cards" className="mb-16">
          <SectionHeader 
            title="Cards" 
            description="Componentes de tarjeta para contenido agrupado"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Basic Card */}
            <Card>
              <CardHeader>
                <CardTitle>Card Básica</CardTitle>
                <CardDescription>Descripción de la tarjeta con texto secundario</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Contenido de la tarjeta. Puede incluir texto, imágenes u otros componentes.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Acción</Button>
              </CardFooter>
            </Card>
            
            {/* Hover Card */}
            <Card className="hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer">
              <CardHeader>
                <CardTitle>Card con Hover</CardTitle>
                <CardDescription>Interactiva con efectos de hover</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Esta tarjeta tiene efectos de hover para indicar interactividad.</p>
              </CardContent>
            </Card>
            
            {/* Highlighted Card */}
            <Card className="border-primary bg-primary/5">
              <CardHeader>
                <CardTitle>Card Destacada</CardTitle>
                <CardDescription>Con borde y fondo de color primario</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Útil para destacar contenido importante o seleccionado.</p>
              </CardContent>
            </Card>
            
            {/* Feature Card */}
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Card de Feature</CardTitle>
                <CardDescription>Con icono destacado</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Ideal para mostrar características o servicios del producto.</p>
              </CardContent>
            </Card>
            
            {/* Stats Card */}
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Reservas Hoy</CardDescription>
                <CardTitle className="text-3xl font-bold">24</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-accent flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  +12% vs ayer
                </p>
              </CardContent>
            </Card>
            
            {/* Pricing Card */}
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0">
                <Badge className="rounded-none rounded-bl-lg">Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle>Plan Pro</CardTitle>
                <CardDescription>Para negocios en crecimiento</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Feature 1</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Feature 2</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Feature 3</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full gradient-primary border-0">Elegir Plan</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Badges Section */}
        <section id="badges" className="mb-16">
          <SectionHeader 
            title="Badges" 
            description="Etiquetas para estados y categorías"
          />
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                {/* Variants */}
                <div>
                  <h4 className="text-sm font-medium mb-3">Variantes Base</h4>
                  <div className="flex flex-wrap gap-3">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                  </div>
                </div>
                
                {/* Custom Colors */}
                <div>
                  <h4 className="text-sm font-medium mb-3">Colores Personalizados</h4>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-primary/10 text-primary border-0">Primary</Badge>
                    <Badge className="bg-secondary/10 text-secondary border-0">Secondary</Badge>
                    <Badge className="bg-accent/10 text-accent border-0">Success</Badge>
                    <Badge className="bg-destructive/10 text-destructive border-0">Error</Badge>
                  </div>
                </div>
                
                {/* Status Badges */}
                <div>
                  <h4 className="text-sm font-medium mb-3">Estados de Reserva</h4>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-accent/10 text-accent border-0">
                      <span className="w-2 h-2 rounded-full bg-accent mr-2" />
                      Confirmada
                    </Badge>
                    <Badge className="bg-primary/10 text-primary border-0">
                      <span className="w-2 h-2 rounded-full bg-primary mr-2" />
                      Pendiente
                    </Badge>
                    <Badge className="bg-destructive/10 text-destructive border-0">
                      <span className="w-2 h-2 rounded-full bg-destructive mr-2" />
                      Cancelada
                    </Badge>
                    <Badge className="bg-muted text-muted-foreground border-0">
                      <span className="w-2 h-2 rounded-full bg-muted-foreground mr-2" />
                      Completada
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Inputs Section */}
        <section id="inputs" className="mb-16">
          <SectionHeader 
            title="Inputs & Forms" 
            description="Campos de entrada y controles de formulario"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Text Inputs */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Text Inputs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="default">Default</Label>
                  <Input id="default" placeholder="Escribe aquí..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="with-icon">Con Icono</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="with-icon" className="pl-10" placeholder="Buscar..." />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="disabled">Disabled</Label>
                  <Input id="disabled" placeholder="No disponible" disabled />
                </div>
              </CardContent>
            </Card>
            
            {/* Checkboxes & Switches */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Checkboxes & Switches</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Acepto los términos y condiciones</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="marketing" defaultChecked />
                  <Label htmlFor="marketing">Recibir notificaciones de marketing</Label>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <Label htmlFor="notifications">Notificaciones push</Label>
                  <Switch id="notifications" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-alerts">Alertas por email</Label>
                  <Switch id="email-alerts" defaultChecked />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Alerts Section */}
        <section id="alerts" className="mb-16">
          <SectionHeader 
            title="Alerts" 
            description="Mensajes de información, éxito y error"
          />
          
          <div className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Información</AlertTitle>
              <AlertDescription>
                Este es un mensaje informativo para el usuario.
              </AlertDescription>
            </Alert>
            
            <Alert className="border-accent/50 bg-accent/5">
              <CheckCircle className="h-4 w-4 text-accent" />
              <AlertTitle className="text-accent">Éxito</AlertTitle>
              <AlertDescription>
                La operación se ha completado correctamente.
              </AlertDescription>
            </Alert>
            
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Ha ocurrido un error. Por favor, inténtalo de nuevo.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Tabs Section */}
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

        {/* Icons Section */}
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

        {/* Spacing Reference */}
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
      </main>
    </div>
  );
};

// Helper Components
const SectionHeader = ({ title, description }: { title: string; description: string }) => (
  <div className="mb-8">
    <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

interface ColorItem {
  name: string;
  class: string;
  text: string;
}

const ColorCard = ({ title, colors }: { title: string; colors: ColorItem[] }) => (
  <Card>
    <CardHeader>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-2">
      {colors.map((color) => (
        <div 
          key={color.name}
          className={`h-10 rounded-lg ${color.class} ${color.text} flex items-center justify-center text-sm font-medium`}
        >
          {color.name}
        </div>
      ))}
    </CardContent>
  </Card>
);

export default StyleGuide;
