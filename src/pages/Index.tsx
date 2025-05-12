
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import PopularGroups from "@/components/PopularGroups";
import UpcomingEvents from "@/components/UpcomingEvents";
import CreateGroupBanner from "@/components/CreateGroupBanner";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Añadimos un efecto de movimiento al desplazamiento
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.scroll-animate');
      
      elements.forEach((element) => {
        const elementTop = (element as HTMLElement).offsetTop;
        const elementHeight = (element as HTMLElement).offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Calcula si el elemento está en el viewport
        if (scrollY > elementTop - windowHeight + elementHeight / 2) {
          element.classList.add('animate-fade-in');
        }
      });
    };
    
    // Inicializar la animación
    handleScroll();
    
    // Añadir evento de scroll
    window.addEventListener('scroll', handleScroll);
    
    // Limpieza
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <div id="categorias" className="scroll-animate opacity-0">
          <Categories />
        </div>
        <div id="grupos" className="scroll-animate opacity-0">
          <PopularGroups />
        </div>
        <div id="eventos" className="scroll-animate opacity-0">
          <UpcomingEvents />
        </div>
        <div id="crear-grupo" className="scroll-animate opacity-0">
          <CreateGroupBanner />
        </div>
        <div id="mensajes" className="scroll-animate opacity-0">
          {/* Aquí se podría agregar una sección de mensajes en el futuro */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
