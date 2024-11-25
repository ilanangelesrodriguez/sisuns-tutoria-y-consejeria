import React, { createContext, useState, ReactNode, useContext } from 'react';

// Definir el tipo de datos de usuario (si los necesitas)
interface User {
  username: string;
}

// El tipo de contexto
interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

// Crear el contexto con valores predeterminados
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Crear un proveedor que envolverá nuestra aplicación
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user)); // Puedes usar localStorage para persistir el estado
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto de autenticación
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
