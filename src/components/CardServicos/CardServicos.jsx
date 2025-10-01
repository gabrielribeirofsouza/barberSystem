import { useContext } from 'react'
import styles from './CardServicos.module.css'
import { FaEdit, FaEye, FaEyeSlash, FaTrash } from 'react-icons/fa'
import SERVICOS from '../../store/context/ServicosContext'
function CardServicos ({name, description, price, duration, status, id}){
    const { setShowContainerEdit } = useContext(SERVICOS)
    const clickShowContainerEdit = ()=>{
        setShowContainerEdit({typeContainer: 'editService', status: true, id})
    }
    const classe = ()=>{
        if(status === true){
            return styles.statusActive
        }else{
            return styles.statusOff
        }
    }
    return(
        <div className={styles.containerCardServico}>
            <div className={styles.containerButton}>
                <button className={styles.eyeStatus}>
                    <FaEye />
               </button>
               <button className={styles.btnEdit}
               onClick={clickShowContainerEdit}>
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
                    <span>{name}</span>
                    <p>{description}</p>
                </div>
                <div className={styles.bottomInfo}>
                    <p>
                    <span className={styles.value}>
                        R$ {price}
                    </span>
                    <span className={styles.min}>
                    {duration}min
                    </span>
                    </p>
                        <div className={styles.infoDate}>
                            <span className={styles.date}>
                                Criado em: XX/XX/XXXX
                            </span>
                            <span className={classe()}>
                            {status ? 'Ativo' : 'Inativo'}
                            </span>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default CardServicos