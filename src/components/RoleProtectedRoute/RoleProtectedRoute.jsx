import { Navigate } from 'react-router-dom';

import { useContext } from 'react';
import UserContext from '../../store/context/UserContext.jsx';

export default function RoleProtectedRoute({ children, allowed = [] }) {
  const { user } = useContext(UserContext);

  // não autenticado → login
  if (!user) return <Navigate to="/" replace />;

  // se allowed vazio significa "qualquer usuário autenticado"
  if (allowed.length === 0) return children;

  // coringa pode acessar tudo
  if (user.tipo === 'coringa') return children;

  // verifica se o tipo do usuário está nas roles permitidas
  if (allowed.includes(user.tipo)) return children;

  // caso não autorizado  direciona para home ou página de "Não autorizado"
  return <Navigate to="/home" replace />;
}