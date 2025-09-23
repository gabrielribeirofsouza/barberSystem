import styles from './CardServicos.module.css'
import { FaEdit, FaEye, FaEyeSlash, FaTrash } from 'react-icons/fa'
function CardServicos (){
    return(
        <div className={styles.containerCardServico}>
            <div className={styles.containerButton}>
                <button className={styles.eyeStatus}>
                    <FaEye />
               </button>
               <button className={styles.btnEdit}>
                <span> <FaEdit /> </span>
                Editar
               </button>
                <button className={styles.btnDelet}>
                    <span>
                        <FaTrash />
                    </span>
                Excluir
                </button>
            </div>
            <div className={styles.containerInfoServico}>
                <div className={styles.topInfo}>
                    <span>Corte de cabelo</span>
                    <p>Cortes de cabelo masculino</p>
                </div>
                <div className={styles.bottomInfo}>
                    <p>
                    <span className={styles.value}>
                        R$ 15,00
                    </span>
                    <span className={styles.min}>
                    10min
                    </span>
                    </p>
                        <div className={styles.infoDate}>
                            <span className={styles.date}>
                                Criado em: XX/XX/XXXX
                            </span>
                            <span className={styles.status}>
                            Status
                            </span>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default CardServicos