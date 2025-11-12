import { FaCalendar, FaCartPlus, FaClock, FaHandScissors, FaRegHandScissors, FaTools, FaUser } from "react-icons/fa";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from './Home.module.css'
import CardModal from "../../components/CardModal/CardModal";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../store/context/UserContext";
function Home() {
    const {user} = useContext(UserContext)
 if (!user) {
    return <p>Carregando...</p>; 
  }
    return ( 
    <div className={styles.container}>
        <aside>
            <Sidebar />
        </aside>
        <div className={styles.containerInfo}>

            <div className={styles.modalBoasVindas}>
                <div className={styles.modalText}>
                    <h1>Bem-vindo, {user.nome}</h1>
                    <h2>Seu sistema de agendamento inteligente está pronto para uso.</h2>
                    <div className={styles.iconsModal}>
                        <div className={styles.iconBox}>
                            <Link to='/agendamentos'>
                                <div className={styles.shadowIcon}>
                                    <FaCalendar />
                                </div>
                            </Link>
                                Agendamentos
                        </div>
                        <div className={styles.iconBox}>
                            <Link to='/clientes'>
                                <div className={styles.shadowIcon}>
                                <FaUser/>
                                </div>
                            </Link>
                            Clientes
                        </div>
                        <div className={styles.iconBox}>
                            <Link to='/servicos'>
                                <div className={styles.shadowIcon}>
                                <FaTools />
                                </div>
                            </Link>
                            Serviços
                        </div>
                        <div className={styles.iconBox}>
                            <Link to='/produtos'>
                                <div className={styles.shadowIcon}>
                                <FaCartPlus />
                                </div>
                            </Link>
                            Produtos
                        </div>
                    </div>
                </div>
                <div className={styles.areaIconsApresetation}>
                    <div className={styles.calendario}>
                    <FaCalendar />
                    </div>
                    <div>
                    <FaClock className={styles.relogio}/>
                    </div>
                    <div>
                    <FaTools className={styles.ferramenta}/>
                    </div>
                </div>
            </div>

            <div className={styles.cardArea}>
                <CardModal titleCard={'Agendamentos'} descriptionCard={'Visualize os agendamentos de sua barberia'} id={'Agendamentos'}/>
                <CardModal titleCard={'Clientes'} descriptionCard={'Todos os clientes que são cadastrados em sua barbearia'} id={'Clientes'}/>
                <CardModal titleCard={'Horários'} descriptionCard={'Configure os horários de atendimento para cada dia da semana'} id={'Horarios'}/>
                <CardModal titleCard={'Perfil'} descriptionCard={'Gerencie suas informações pessoais'} id={'Perfil'}/>
            </div>
        </div>
    </div>
     );
}

export default Home;