import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface ColorItem {
  name: string;
  class: string;
  text: string;
}

interface ColorCardProps {
  title: string;
  colors: ColorItem[];
}

const ColorCard = ({ title, colors }: ColorCardProps) => (
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

export { ColorCard };
