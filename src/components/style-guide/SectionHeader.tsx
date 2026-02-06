interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => (
  <div className="mb-8">
    <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export { SectionHeader };
