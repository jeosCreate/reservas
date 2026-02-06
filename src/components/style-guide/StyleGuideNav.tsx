const navItems = [
  "Colores",
  "Tipografía", 
  "Botones",
  "Cards",
  "Badges",
  "Inputs",
  "Alerts",
  "Tabs",
  "Iconos",
  "Espaciado"
];

const StyleGuideNav = () => {
  return (
    <nav className="mb-12">
      <div className="flex flex-wrap gap-2">
        {navItems.map((item) => (
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
  );
};

export { StyleGuideNav };
