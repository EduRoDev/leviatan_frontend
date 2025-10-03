import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export function RootRedirect() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/subject" replace />;
  }

  return <Navigate to="/landing" replace />;
}
