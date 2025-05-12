
import { useIsMobile } from "@/hooks/use-mobile";
import CategoryCard from "./CategoryCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import GroupCard from "./GroupCard";

const Categories = () => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("todas");
  
  // Las categorías con sus respectivos iconos
  const categories = [
    {
      id: "deportes",
      title: "Deportes",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dumbbell"><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/></svg>
      ),
      color: "brand-green"
    },
    {
      id: "arte",
      title: "Arte y Cultura",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>
      ),
      color: "brand-purple"
    },
    {
      id: "tecnologia",
      title: "Tecnología",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-laptop"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/></svg>
      ),
      color: "brand-green"
    },
    {
      id: "gastronomia",
      title: "Gastronomía",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-utensils"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2"/><path d="M18 15V2"/><path d="M21 15a3 3 0 1 1-6 0v-3h6v3Z"/></svg>
      ),
      color: "brand-purple"
    },
    {
      id: "naturaleza",
      title: "Naturaleza",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tree-pine"><path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2a1 1 0 0 1-.8-1.7L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"/><path d="M12 22v-3"/></svg>
      ),
      color: "brand-green"
    },
    {
      id: "literatura",
      title: "Literatura",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
      ),
      color: "brand-purple"
    }
  ];

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

  // Función para obtener todos los grupos
  const getAllGroups = () => {
    let allGroups = [];
    for (const category in groupsByCategory) {
      allGroups = [...allGroups, ...groupsByCategory[category]];
    }
    return allGroups;
  };

  return (
    <section className="py-16 bg-white" id="categorias">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explora por categorías</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra grupos que comparten tus mismos intereses y pasiones en tu ciudad
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              icon={category.icon}
              color={category.color}
              onClick={() => setActiveTab(category.id)}
              className={activeTab === category.id ? "ring-2 ring-brand-purple" : ""}
            />
          ))}
        </div>
        
        <div className="mt-12">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center mb-6 bg-transparent space-x-2">
              <TabsTrigger 
                value="todas" 
                className={`px-4 py-2 ${activeTab === "todas" ? "bg-brand-purple text-white" : "bg-gray-100 text-gray-700"}`}
              >
                Todos los grupos
              </TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className={`px-4 py-2 ${activeTab === category.id ? "bg-brand-purple text-white" : "bg-gray-100 text-gray-700"}`}
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value="todas" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {getAllGroups().map((group) => (
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
            </TabsContent>
            
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {groupsByCategory[category.id].map((group) => (
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
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Categories;
