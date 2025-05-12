
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    
    if (window.location.pathname !== '/') {
      navigate('/');
      // Damos tiempo para que la navegación se complete
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-brand-purple text-white p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <span className="text-xl font-heading font-bold text-gray-900">Quórum</span>
        </Link>
        
        {isMobile ? (
          <div>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu">
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
            
            {isMenuOpen && (
              <div className="fixed inset-0 top-16 bg-white z-40 p-4 animate-fade-in">
                <nav className="flex flex-col gap-4">
                  <button 
                    onClick={() => scrollToSection('categorias')} 
                    className="px-4 py-3 text-lg font-medium text-gray-700 hover:bg-muted rounded-md text-left"
                  >
                    Explorar
                  </button>
                  <button 
                    onClick={() => scrollToSection('eventos')} 
                    className="px-4 py-3 text-lg font-medium text-gray-700 hover:bg-muted rounded-md text-left"
                  >
                    Eventos
                  </button>
                  <button 
                    onClick={() => scrollToSection('crear-grupo')} 
                    className="px-4 py-3 text-lg font-medium text-gray-700 hover:bg-muted rounded-md text-left"
                  >
                    Crear
                  </button>
                  <button 
                    onClick={() => scrollToSection('mensajes')} 
                    className="px-4 py-3 text-lg font-medium text-gray-700 hover:bg-muted rounded-md text-left"
                  >
                    Mensajes
                  </button>
                  <hr className="my-2" />
                  <Button className="btn-primary w-full">Iniciar sesión</Button>
                  <Button variant="outline" className="w-full">Registrarse</Button>
                </nav>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-6">
              <button 
                onClick={() => scrollToSection('categorias')} 
                className="text-gray-700 hover:text-brand-purple font-medium"
              >
                Explorar
              </button>
              <button 
                onClick={() => scrollToSection('eventos')} 
                className="text-gray-700 hover:text-brand-purple font-medium"
              >
                Eventos
              </button>
              <button 
                onClick={() => scrollToSection('crear-grupo')} 
                className="text-gray-700 hover:text-brand-purple font-medium"
              >
                Crear
              </button>
              <button 
                onClick={() => scrollToSection('mensajes')} 
                className="text-gray-700 hover:text-brand-purple font-medium"
              >
                Mensajes
              </button>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="ghost">Iniciar sesión</Button>
              <Button className="btn-primary">Registrarse</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
