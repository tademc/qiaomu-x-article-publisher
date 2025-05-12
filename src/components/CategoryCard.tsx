
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  className?: string;
  onClick?: () => void;
}

const CategoryCard = ({ title, icon, color, className, onClick }: CategoryCardProps) => {
  return (
    <Card className={cn("card-hover cursor-pointer", className)} onClick={onClick}>
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
  );
};

export default CategoryCard;
