import { FaTrash } from "react-icons/fa";
import styles from './CardCliente.module.css'
function CardCLiente (){
    return(
        <div className={styles.containerCard}>

            <div className={styles.infoUserCard}>
            <p>Usuario1234</p>
            <span>Ativo</span>
            </div>

            <div className={styles.dataUser}>
            <span>Email: teste123@gmail.com</span>
            <span>Telefone: +190 98822-0029</span>
            <span>Cadastrado em: 00/00/00</span>
            </div>
            <button>
                <span><FaTrash /></span>
                Excluir
            </button>
        </div>
    )
}
export default CardCLiente;