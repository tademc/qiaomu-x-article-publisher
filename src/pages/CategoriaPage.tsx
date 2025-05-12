
import { useParams } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GroupCard from "@/components/GroupCard";
import { useEffect } from 'react';

const CategoriaPage = () => {
  const { categoria } = useParams();
  
  // Grupos de ejemplo organizados por categoría
  const groupsByCategory = {
    deportes: [
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
        id: "4",
        name: "Baloncesto Urbano",
        description: "Partidos semanales de baloncesto en diferentes canchas de la ciudad. Todos los niveles bienvenidos.",
        members: 54,
        category: "Deportes",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc",
        location: "Barcelona"
      },
      {
        id: "5",
        name: "Club de Ciclismo",
        description: "Salidas en bicicleta por la ciudad y alrededores. Rutas para todos los niveles.",
        members: 87,
        category: "Deportes",
        image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182",
        location: "Valencia"
      }
    ],
    arte: [
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
        id: "6",
        name: "Club de Teatro Experimental",
        description: "Exploramos nuevas formas de expresión teatral. Talleres, ensayos y representaciones mensuales.",
        members: 42,
        category: "Arte y Cultura",
        image: "https://images.unsplash.com/photo-1503095396549-807759245b35",
        location: "Madrid"
      }
    ],
    tecnologia: [
      {
        id: "7",
        name: "Programadores Web",
        description: "Compartimos conocimientos sobre desarrollo web. Organizamos hackathons y talleres prácticos.",
        members: 117,
        category: "Tecnología",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
        location: "Madrid"
      },
      {
        id: "8",
        name: "IA Entusiastas",
        description: "Charlas y workshops sobre inteligencia artificial, machine learning y sus aplicaciones.",
        members: 78,
        category: "Tecnología",
        image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613",
        location: "Barcelona"
      }
    ],
    gastronomia: [
      {
        id: "9",
        name: "Club de Cocina Creativa",
        description: "Experimentamos con nuevos sabores y técnicas culinarias. Reuniones semanales para cocinar juntos.",
        members: 63,
        category: "Gastronomía",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d",
        location: "Sevilla"
      },
      {
        id: "10",
        name: "Amantes del Vino",
        description: "Catas de vino, visitas a bodegas y charlas sobre enología.",
        members: 45,
        category: "Gastronomía",
        image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb",
        location: "La Rioja"
      }
    ],
    naturaleza: [
      {
        id: "11",
        name: "Senderismo Urbano",
        description: "Descubrimos rutas de senderismo cercanas a la ciudad. Salidas semanales para todos los niveles.",
        members: 91,
        category: "Naturaleza",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306",
        location: "Madrid"
      },
      {
        id: "12",
        name: "Amigos de las Plantas",
        description: "Compartimos consejos sobre jardinería y plantas de interior. Intercambio de semillas y esquejes.",
        members: 67,
        category: "Naturaleza",
        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
        location: "Barcelona"
      }
    ],
    literatura: [
      {
        id: "3",
        name: "Club de Lectura Contemporánea",
        description: "Leemos y debatimos sobre literatura contemporánea. Una novela diferente cada mes.",
        members: 53,
        category: "Literatura",
        image: "https://images.unsplash.com/photo-1513001900722-370f803f498d",
        location: "Madrid"
      },
      {
        id: "13",
        name: "Escritores Nocturnos",
        description: "Grupo de escritura creativa. Compartimos nuestros textos y nos damos feedback constructivo.",
        members: 38,
        category: "Literatura",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a",
        location: "Valencia"
      }
    ]
  };

  // Map de categorías a títulos para mostrar
  const categoryNames = {
    deportes: "Deportes",
    arte: "Arte y Cultura",
    tecnologia: "Tecnología",
    gastronomia: "Gastronomía",
    naturaleza: "Naturaleza",
    literatura: "Literatura"
  };

  // Obtenemos los grupos para la categoría actual
  const groups = categoria ? groupsByCategory[categoria as keyof typeof groupsByCategory] || [] : [];
  const categoryName = categoria ? categoryNames[categoria as keyof typeof categoryNames] || categoria : '';
  
  // Efecto para scroll al top cuando cambia la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoria]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {categoryName}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Encuentra grupos de {categoryName.toLowerCase()} que comparten tus mismos intereses y pasiones
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {groups.map((group) => (
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
            
            {groups.length === 0 && (
              <div className="text-center py-10">
                <p className="text-xl text-gray-600">No hay grupos disponibles para esta categoría.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CategoriaPage;
