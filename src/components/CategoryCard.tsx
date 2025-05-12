
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  className?: string;
  to: string; // Cambiado onClick por to para usar con Link
}

const CategoryCard = ({ title, icon, color, className, to }: CategoryCardProps) => {
  return (
    <Link to={to} className="block">
      <Card className={cn("card-hover cursor-pointer", className)}>
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div 
            className={cn(
              "w-16 h-16 rounded-full flex items-center justify-center mb-4",
              `bg-${color}/20 text-${color}`
            )}
          >
            {icon}
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
