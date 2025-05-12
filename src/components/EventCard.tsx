
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface EventCardProps {
  id: string;
  title: string;
  date: Date;
  location: string;
  groupName: string;
  attendees: number;
  image: string;
  className?: string;
}

const EventCard = ({ 
  id, 
  title, 
  date, 
  location, 
  groupName,
  attendees,
  image,
  className 
}: EventCardProps) => {
  // Formatear fecha en español
  const formattedDate = format(date, "EEEE d 'de' MMMM, HH:mm", { locale: es });
  
  return (
    <Card className={cn("flex flex-col md:flex-row overflow-hidden card-hover", className)}>
      <div className="md:w-1/3 h-48 md:h-auto">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="flex-1 p-4 md:p-6">
        <div className="mb-2">
          <p className="text-brand-purple font-medium">
            {formattedDate}
          </p>
          <h3 className="text-xl font-bold mt-1">{title}</h3>
          <p className="text-gray-500 text-sm mt-1">Organizado por {groupName}</p>
        </div>
        
        <div className="flex items-start gap-2 mt-3 text-sm text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>{location}</span>
        </div>
        
        <div className="flex items-start gap-2 mt-1 text-sm text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          <span>{attendees} asistentes</span>
        </div>
        
        <div className="mt-4 flex gap-3">
          <Button className="btn-primary flex-1 sm:flex-none">Asistir</Button>
          <Button variant="outline">Más detalles</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
