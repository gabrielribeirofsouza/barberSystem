import { Link, useNavigate } from 'react-router-dom';
import { FaArrowAltCircleRight, FaCalendar, FaCartPlus, FaClock, FaHome, FaToolbox, FaTools, FaUserCircle, FaUserFriends } from 'react-icons/fa';
import { useUser } from '../../store/context/UserContext.jsx';
import styles from './Sidebar.module.css';

function Sidebar() {
  const navigate = useNavigate();
  const { user, logout } = useUser();

  if (!user) return null; 

  const sair = () => {
    if (window.confirm('Você realmente deseja sair?')) {
      logout();
      navigate('/');
    }
  };

  
  const rotas = {
    barbeiro: [
      { nome: 'Home', path: '/home', icon: <FaHome /> },
      { nome: 'Horários', path: '/horarios', icon: <FaClock /> },
      { nome: 'Agendamentos', path: '/agendamentos', icon: <FaCalendar /> },
      { nome: 'Configurações', path: '/configuracoes', icon: <FaTools /> }
    ],
    admin: [
      { nome: 'Home', path: '/home', icon: <FaHome /> },
      { nome: 'Serviços', path: '/servicos', icon: <FaToolbox /> },
      { nome: 'Produtos', path: '/produtos', icon: <FaCartPlus /> },
      { nome: 'Clientes', path: '/clientes', icon: <FaUserFriends /> },
      { nome: 'Configurações', path: '/configuracoes', icon: <FaTools /> }
    ],
    coringa: [
      { nome: 'Home', path: '/home', icon: <FaHome /> },
      { nome: 'Clientes', path: '/clientes', icon: <FaUserFriends /> },
      { nome: 'Horários', path: '/horarios', icon: <FaClock /> },
      { nome: 'Agendamentos', path: '/agendamentos', icon: <FaCalendar /> },
      { nome: 'Serviços', path: '/servicos', icon: <FaToolbox /> },
      { nome: 'Produtos', path: '/produtos', icon: <FaCartPlus /> },
      { nome: 'Configurações', path: '/configuracoes', icon: <FaTools /> }
    ]
  };

  const menu = rotas[user.tipo] || [];

  return (
    <div className={styles.container}>
      <span className={styles.tituloAside}>BarberSystem</span>
      <div className={styles.navigation}>
        <ul className={styles.lista}>
          {menu.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>
                <div>{item.icon}</div>
                {item.nome}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.user}>
          <div className={styles.perfilIcon}><FaUserCircle /></div>
          <div className={styles.info}>
            <span>{user.nome}</span>
            <span>{user.email}</span>
            <div className={styles.btnSair}>
              <FaArrowAltCircleRight onClick={sair} />
              <button onClick={sair}>Sair</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;