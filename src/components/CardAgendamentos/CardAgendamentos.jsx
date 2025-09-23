import { FaCalendar, FaClock, FaUser } from 'react-icons/fa'
import styles from './CardAgendamentos.module.css'
function CardAgendamentos (){
    return(
        <div className={styles.containerCardAgendamento}>
            <div className={styles.containerTopContent}>
                <p><span><FaUser /></span> USUÁRIO LTDA- 333</p>
                <div className={styles.containerInfoDate}>
                <span><FaCalendar /> XX/XX/XXXX</span>
                <span><FaClock /> XX:XX</span>
                </div>
                <div className={styles.infoHoursAndValue}>
                        <span className={styles.duration}>60 min</span>
                         <span className={styles.value}>R$ 60,00</span>
                </div>
            </div>
            <div className={styles.containerBottomContent}>
            <p>Criado em 19:23:48 XX/XX/XXXX</p>
                <div className={styles.containerButton}>
                    <button className={styles.btnConfirmar}>
                    Confirmar
                    </button>
                    <button className={styles.btnAgendar}>
                    Agendado
                    </button>
                    <button className={styles.btnCancelar}>
                    Cancelar
                    </button>
                </div>
            </div>
        </div>
    )
}
export default CardAgendamentos