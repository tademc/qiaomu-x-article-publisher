
import { Button } from "@/components/ui/button";
import EventCard from "./EventCard";

const UpcomingEvents = () => {
  // Datos de ejemplo para eventos próximos
  const upcomingEvents = [
    {
      id: "1",
      title: "Carrera solidaria 5K en el Retiro",
      date: new Date("2025-05-18T09:00:00"),
      location: "Parque del Retiro, Madrid",
      groupName: "Club de Runners Madrid",
      attendees: 43,
      image: "https://images.unsplash.com/photo-1533922451713-c2c7150f6f7c"
    },
    {
      id: "2",
      title: "Tarde de cine: Retrospectiva Almodóvar",
      date: new Date("2025-05-20T17:30:00"),
      location: "Cine Doré, Madrid",
      groupName: "Cinéfilos Unidos",
      attendees: 28,
      image: "https://images.unsplash.com/photo-1485095329183-d0797cdc5676"
    }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Próximos eventos</h2>
            <p className="text-lg text-gray-600 mt-2">
              Eventos cercanos en tu ciudad para conectar con la comunidad
            </p>
          </div>
          <Button variant="ghost" className="text-brand-purple mt-4 md:mt-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
              <line x1="16" x2="16" y1="2" y2="6"/>
              <line x1="8" x2="8" y1="2" y2="6"/>
              <line x1="3" x2="21" y1="10" y2="10"/>
            </svg>
            Ver calendario completo
          </Button>
        </div>
        
        <div className="space-y-6">
          {upcomingEvents.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              date={event.date}
              location={event.location}
              groupName={event.groupName}
              attendees={event.attendees}
              image={event.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
