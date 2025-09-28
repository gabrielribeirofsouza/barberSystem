import { FaEdit, FaTrash } from 'react-icons/fa'
import styles from './CardProduto.module.css'
import { useContext } from 'react'

import PRODUTOS from '../../store/context/ProdutoContext'
function CardProduto({name, description, category, price, quantity, status, id}){
    const {edit, setEdit} = useContext(PRODUTOS)
    const editar = ()=>{
        setEdit({id, statusContainerEdit: true})
    }
   
    return(
        <div className={styles.containerCardProduto}>
            <div className={styles.topContent}>
                <div className={styles.infoTopContent}>
                    <p>{name}</p>
                    <span className={styles.statusProduct}>{status}</span>
                </div>
                <div className={styles.productDescriptionContainer}>
                    <span className={styles.productCategory}>{category}</span>
                    <p className={styles.descriptionProduct}>
                        {description}
                    </p>
                </div>
            </div>
            <div className={styles.bottomContent}>
                <div className={styles.infoBottomContent}>
                    <p className={styles.priceProduct}>
                        {Number(price).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' })}
                    </p>
                    <span className={styles.quantityProduct}>
                    Estoque: {quantity}
                    </span>
                </div>
                <div className={styles.containerButton}>
                    <button
                        className={edit.statusContainerEdit === true ? styles.btnEditDisable : styles.btnEdit}
                        onClick={edit.statusContainerEdit === true ? undefined : editar}>
                        <span>
                            <FaEdit />
                        </span>
                         Editar
                    </button>
                    <button
                        className={edit.statusContainerEdit === true ? styles.btnDeletDisable : styles.btnDelet}>
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