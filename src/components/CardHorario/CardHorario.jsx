import { FaClock, FaEdit } from "react-icons/fa";
import styles from './CardHorario.module.css'
function CardHorario ({dia, inicio, fim, status}){
    return (
        <div className={styles.containerCardHorario}>
            <div className={styles.dateContainer}>
                <p>{dia}</p>
                <span>{status}</span>
            </div>
            <div className={styles.hoursContainer}>
            <p>
                <span><FaClock /></span>
                {inicio} - {fim}
            </p>
            <button className={styles.btnEditarHours}>
                <span>
                    <FaEdit />
                </span>
                Editar
            </button>
            </div>
        </div>
    )
}
export default CardHorario