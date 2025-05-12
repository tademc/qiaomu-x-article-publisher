
import GroupCard from "./GroupCard";

const PopularGroups = () => {
  // Datos de ejemplo para los grupos populares
  const popularGroups = [
    {
      id: "1",
      name: "Club de Runners Madrid",
      description: "Grupo para corredores de todos los niveles. Organizamos quedadas semanales y participamos en carreras populares.",
      members: 128,
      category: "Deportes",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5",
      location: "Madrid"
    },
    {
      id: "2",
      name: "Cinéfilos Unidos",
      description: "Para amantes del cine. Debates, visionados conjuntos y eventos en festivales cinematográficos locales.",
      members: 94,
      category: "Arte y Cultura",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1",
      location: "Barcelona"
    },
    {
      id: "3",
      name: "Grupo de Fotografía Urbana",
      description: "Salidas fotográficas por la ciudad, talleres técnicos y exposiciones colaborativas.",
      members: 67,
      category: "Arte y Cultura",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e",
      location: "Valencia"
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Grupos populares</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre las comunidades más activas y únete a las conversaciones
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {popularGroups.map((group) => (
            <GroupCard
              key={group.id}
              id={group.id}
              name={group.name}
              description={group.description}
              members={group.members}
              category={group.category}
              image={group.image}
              location={group.location}
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button className="btn-primary">Ver todos los grupos</Button>
        </div>
      </div>
    </section>
  );
};

export default PopularGroups;
