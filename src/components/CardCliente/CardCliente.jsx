import { FaTrash } from "react-icons/fa";
import styles from './CardCliente.module.css'
function CardCLiente ({nome, status, email, telefone, cadastro}){
 
    return(
        <div className={styles.containerCard}>

            <div className={styles.infoUserCard}>
            <p>{nome}</p>
            <span>{status}</span>
            </div>

            <div className={styles.dataUser}>
            <span>Email: {email}</span>
            <span>Telefone: {telefone}</span>
            <span>Cadastrado em: {cadastro}</span>
            </div>
            <button>
                <span><FaTrash /></span>
                Excluir
            </button>
        </div>
    )
}
export default CardCLiente;