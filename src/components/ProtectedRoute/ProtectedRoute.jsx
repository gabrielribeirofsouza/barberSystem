import { Navigate } from 'react-router-dom';
import { useUser } from '../store/context/UserContext.jsx';

export default function ProtectedRoute({ children }) {
  const { user } = useUser();

  // Se não estiver logado, redireciona para '/'
  if (!user) return <Navigate to="/" replace />;

  // Se estiver logado, renderiza o conteúdo protegido
  return children;
}