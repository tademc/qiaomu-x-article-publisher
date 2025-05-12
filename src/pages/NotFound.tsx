
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-brand-purple mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-6">¡Oops! Página no encontrada</p>
        <p className="text-lg text-gray-500 mb-8 max-w-md mx-auto">
          La página que estás buscando no existe o ha sido movida.
        </p>
        <Link to="/">
          <Button className="btn-primary">Volver al inicio</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
