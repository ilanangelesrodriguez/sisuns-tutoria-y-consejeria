import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as loginService, updateEstudiante as updateEstudianteService } from '@/services/authService';
import Estudiante from '@/models/estudiante';

interface AuthContextType {
  estudiante: Estudiante | null;
  isAuthenticated: boolean;
  login: (correo: string, clave: string) => Promise<void>;
  logout: () => void;
  updateEstudiante: (estudianteData: Partial<Estudiante>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [estudiante, setEstudiante] = useState<Estudiante | null>(() => {
    const storedEstudiante = localStorage.getItem('estudiante');
    return storedEstudiante ? JSON.parse(storedEstudiante) : null;
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (estudiante) {
      localStorage.setItem('estudiante', JSON.stringify(estudiante));
    } else {
      localStorage.removeItem('estudiante');
    }
  }, [estudiante]);

  const login = async (correo: string, clave: string) => {
    const estudiante = await loginService(correo, clave);
    setEstudiante(estudiante);
  };

  const logout = () => {
    setEstudiante(null);
    navigate('/login');
  };

  const updateEstudiante = async (estudianteData: Partial<Estudiante>) => {
    if (estudiante) {
      const updatedEstudiante = await updateEstudianteService(estudiante.estudiante_id, estudianteData);
      setEstudiante(updatedEstudiante);
    }
  };

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