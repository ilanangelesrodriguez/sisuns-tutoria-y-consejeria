import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/authContext';

interface AuthenticatedRouteProps {
  children: React.ReactNode;
}

const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Navigate to="/dashboard" /> : <>{children}</>;
};

export default AuthenticatedRoute;