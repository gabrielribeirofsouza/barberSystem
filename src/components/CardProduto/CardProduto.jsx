import { FaEdit, FaTrash } from 'react-icons/fa'
import styles from './CardProduto.module.css'
function CardProduto(){
    return(
        <div className={styles.containerCardProduto}>
            <div className={styles.topContent}>
                <div className={styles.infoTopContent}>
                    <p>Gel</p>
                    <span className={styles.statusProduct}>Ativo</span>
                </div>
                <div className={styles.productDescriptionContainer}>
                <span className={styles.productCategory}>Barba</span>
                <p className={styles.descriptionProduct}>
                    Sem descrição
                </p>
                </div>
            </div>
            <div className={styles.bottomContent}>
                <div className={styles.infoBottomContent}>
                <p className={styles.priceProduct}>
                    R$ 9,00
                </p>
                <span className={styles.quantityProduct}>
                Estoque: 100
                </span>
                </div>
                <div className={styles.containerButton}>
                    <button className={styles.btnEdit}>
                        <span>
                            <FaEdit />
                        </span>
                        Editar
                    </button>
                    <button className={styles.btnDelet}>
                        <span>
                            <FaTrash />
                        </span>
                        Excluir
                    </button>

                </div>
            </div>
        </div>
    )
}
export default CardProduto