
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GroupCardProps {
  id: string;
  name: string;
  description: string;
  members: number;
  category: string;
  image: string;
  location: string;
  className?: string;
}

const GroupCard = ({ 
  id, 
  name, 
  description, 
  members, 
  category, 
  image, 
  location,
  className 
}: GroupCardProps) => {
  return (
    <Card className={cn("overflow-hidden card-hover", className)}>
      <div className="relative h-48">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-white/90 rounded-full px-3 py-1 text-xs font-medium">
          {category}
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold">{name}</h3>
        </div>
        <p className="text-sm text-gray-500 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          {location}
        </p>
      </CardHeader>
      <CardContent className="text-sm text-gray-700">
        <p>{description}</p>
        <div className="mt-3 flex items-center text-sm text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          {members} miembros
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full btn-primary">Ver grupo</Button>
      </CardFooter>
    </Card>
  );
};

export default GroupCard;
