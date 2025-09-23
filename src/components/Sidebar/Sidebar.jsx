import {Link} from 'react-router-dom'
 import styles from './Sidebar.module.css'
import {FaArrowAltCircleRight, FaCalendar, FaCarAlt, FaCartPlus, FaClock, FaHome, FaMotorcycle, FaProductHunt, FaRunning, FaToolbox, FaTools, FaUserCircle, FaUserFriends} from 'react-icons/fa'
function Sidebar() {
    return ( 
    <div className={styles.container}>
        <span className={styles.tituloAside}>BarberSystem</span>
        <div className={styles.navigation}>

            <ul className={styles.lista}>
                <li>
                    <Link to={'/'}>
                        <div>
                            <FaHome/>
                        </div>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/clientes">
                    <div>                       
                    <FaUserFriends />
                    </div>
                    Todos os clientes
                    </Link>
                </li>
                <li>
                    <Link to="/horarios">
                        <div>
                            <FaClock />
                        </div>
                        Horários
                    </Link>
                </li>
                <li>
                    <Link to='/agendamentos'>
                        <div>
                            <FaCalendar />
                        </div>
                        Agendamentos
                    </Link>
                </li>
                <li>
                    <Link to='/servicos'>
                        <div>
                        <FaToolbox />
                        </div>
                        Serviços
                    </Link>
                </li>
                <li>
                    <Link to='/produtos'>
                        <div>
                        <FaCartPlus/>
                        </div>
                        Produtos
                    </Link>
                </li>
                <li>
                    <Link to='/configuracoes'>
                        <div>
                        <FaTools />
                        </div>
                        Configurações
                    </Link>
                </li>
            </ul>

            <div className={styles.user}>

                <div className={styles.perfilIcon}>
                <FaUserCircle />
                </div>

                <div className={styles.info}>
                    <span>Minha conta</span>
                    <span>teste123@gmail.com</span>
                    

                    <div className={styles.btnSair}>

                        <FaArrowAltCircleRight />
                    <button>
                        Sair
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    );
}

export default Sidebar;