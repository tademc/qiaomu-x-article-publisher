
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="relative bg-gradient-to-br from-brand-purple-light to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Encuentra tu <span className="text-brand-purple">comunidad</span> local
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Conecta con personas que comparten tus pasiones, únete a grupos 
              existentes o crea el tuyo propio y comienza a vivir experiencias reales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                className="btn-primary text-lg py-6 px-8"
                onClick={() => scrollToSection('categorias')}
              >
                Explorar grupos
              </Button>
              <Button 
                variant="outline" 
                className="text-lg py-6 px-8"
                onClick={() => scrollToSection('crear-grupo')}
              >
                Crear un grupo
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
              alt="Personas reunidas en un evento social" 
              className="rounded-xl shadow-lg w-full object-cover"
              style={{ height: isMobile ? '300px' : '450px' }}
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
