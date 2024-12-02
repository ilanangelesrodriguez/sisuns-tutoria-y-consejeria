import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as loginService, updateEstudiante as updateEstudianteService } from '@/services/authService';
import Estudiante from '@/models/estudiante';

interface AuthContextType {
  estudiante: Estudiante | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateEstudiante: (estudianteData: Partial<Estudiante>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [estudiante, setEstudiante] = useState<Estudiante | null>(() => {
    const storedEstudiante = localStorage.getItem('estudiante');
    return storedEstudiante ? JSON.parse(storedEstudiante) : null;
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        if (estudiante) {
          const refreshedEstudiante = await updateEstudianteService(estudiante.estudiante_id, {});
          setEstudiante(refreshedEstudiante);
        }
      } catch (error) {
        console.error('Error al inicializar la sesión:', error);
        setEstudiante(null);
      } finally {
        setLoading(false);
      }
    };
    initializeAuth();
  }, []);

  useEffect(() => {
    if (estudiante) {
      localStorage.setItem('estudiante', JSON.stringify(estudiante));
    } else {
      localStorage.removeItem('estudiante');
    }
  }, [estudiante]);

  const login = async (correo: string, clave: string) => {
    try {
      await loginService(correo, clave);
      //...->DELETE setEstudiante(estudiante);
      // const estudiante = await loginService(correo, clave);
      // setEstudiante(estudiante);
      
      navigate('/dashboard'); // Cambia la ruta según sea necesario
    } catch (error) {
      console.error('Error durante el login:', error);
      throw new Error('Credenciales inválidas o error del servidor.');
    }
  };

  const logout = () => {
    setEstudiante(null);
    navigate('/login');
  };

  const updateEstudiante = async (estudianteData: Partial<Estudiante>) => {
    try {
      if (estudiante) {
        const updatedEstudiante = await updateEstudianteService(estudiante.estudiante_id, estudianteData);
        setEstudiante(updatedEstudiante);
      }
    } catch (error) {
      console.error('Error actualizando al estudiante:', error);
      throw new Error('No se pudo actualizar la información del estudiante.');
    }
  };

  if (loading) {
    return <div>Cargando...</div>; // Componente de carga inicial
  }

  return (
    <AuthContext.Provider value={{ estudiante, isAuthenticated: !!estudiante, login, logout, updateEstudiante }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};