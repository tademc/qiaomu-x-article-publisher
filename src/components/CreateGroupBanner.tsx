
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const CreateGroupBanner = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 md:py-20 bg-brand-purple text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="md:w-2/3 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              ¿No encuentras el grupo perfecto?
            </h2>
            <p className="text-lg opacity-90">
              Crea tu propio grupo y conecta con personas que comparten tus mismos intereses. 
              Es fácil y gratis empezar tu comunidad.
            </p>
            
            <div className="flex items-center gap-2 text-sm mt-6">
              <div className="bg-white/20 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <path d="m9 11 3 3L22 4"/>
                </svg>
              </div>
              <span>Encuentra personas con intereses similares</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <div className="bg-white/20 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <path d="m9 11 3 3L22 4"/>
                </svg>
              </div>
              <span>Organiza eventos y actividades</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <div className="bg-white/20 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <path d="m9 11 3 3L22 4"/>
                </svg>
              </div>
              <span>Crea una comunidad vibrante</span>
            </div>
          </div>
          
          <div className="md:w-1/3 flex justify-center">
            <Button className="bg-white text-brand-purple hover:bg-white/90 text-lg py-6 px-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M12 5v14"/>
                <path d="M5 12h14"/>
              </svg>
              Crear un grupo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateGroupBanner;
