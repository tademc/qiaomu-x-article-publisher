
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-brand-purple text-white p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <span className="text-xl font-heading font-bold text-gray-900">EncuentrosAmigos</span>
        </Link>
        
        {isMobile ? (
          <div>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu">
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
            
            {isMenuOpen && (
              <div className="fixed inset-0 top-16 bg-white z-40 p-4 animate-fade-in">
                <nav className="flex flex-col gap-4">
                  <Link to="/explore" className="px-4 py-3 text-lg font-medium text-gray-700 hover:bg-muted rounded-md">
                    Explorar grupos
                  </Link>
                  <Link to="/events" className="px-4 py-3 text-lg font-medium text-gray-700 hover:bg-muted rounded-md">
                    Eventos cercanos
                  </Link>
                  <Link to="/create" className="px-4 py-3 text-lg font-medium text-gray-700 hover:bg-muted rounded-md">
                    Crear grupo
                  </Link>
                  <Link to="/messages" className="px-4 py-3 text-lg font-medium text-gray-700 hover:bg-muted rounded-md">
                    Mensajes
                  </Link>
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
              <Link to="/explore" className="text-gray-700 hover:text-brand-purple font-medium">
                Explorar grupos
              </Link>
              <Link to="/events" className="text-gray-700 hover:text-brand-purple font-medium">
                Eventos cercanos
              </Link>
              <Link to="/create" className="text-gray-700 hover:text-brand-purple font-medium">
                Crear grupo
              </Link>
              <Link to="/messages" className="text-gray-700 hover:text-brand-purple font-medium">
                Mensajes
              </Link>
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
