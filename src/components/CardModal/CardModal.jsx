import { FaCalendar, FaClock, FaUser, FaUserFriends } from 'react-icons/fa';
import styles from './CardModal.module.css'
import {} from 'react-icons'
import { useNavigate } from "react-router-dom";
function CardModal({titleCard, descriptionCard, id}) {
    const navigate = useNavigate()
    const clickNavigate = () =>{
        if(id === 'Agendamentos'){
          navigate('/agendamentos')
        }
        if(id === 'Clientes'){
            navigate('/clientes')
        }
        if(id === 'Perfil'){
            navigate('/configuracoes')
        }
        if(id === 'Horarios'){
           navigate('/horarios')
        }
    }
    const icon = ()=>{
        if(id === 'Agendamentos'){
            return <FaCalendar />
        }
        if(id === 'Clientes'){
            return <FaUserFriends />
        }
        if(id === 'Perfil'){
            return <FaUser />
        }
        if(id === 'Horarios'){
            return <FaClock />
        }
    }
    return ( 
        <div className={styles.containerCard}>
            <div className={styles.iconArea}>
               {icon()}
            </div>
            <div className={styles.infoArea}>
            <span className={styles.titleCard}>{titleCard}</span>
            <span className={styles.subTitleCard}>{descriptionCard}</span>
            <button onClick={clickNavigate}>Acessar</button>
            </div>
        </div>
     );
}

export default CardModal;