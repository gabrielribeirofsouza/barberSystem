import { v4 as uuidv4 } from 'uuid';
import { FaSave } from 'react-icons/fa'
import styles from './CardNewProduto.module.css'
import { useContext, useEffect, useState } from 'react'
import PRODUTOS from '../../store/context/ProdutoContext'
function CardNewProduto(){
    const {infoProduct, setInfoProduct, setShowContainer, edit, setEdit} = useContext(PRODUTOS)
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [status, setStatus] = useState(false)
    
    const searchProduct = () => {
        return infoProduct.find(item => item.id === edit.id);
    }

    const togleStatus = ()=>{
        setStatus((prev) => !prev)
    }
    const saveEdit = () => {
        if(price < 0 || quantity < 0){
            return alert('Não é permitido valores negativos')
        }
        setInfoProduct(infoProduct.map(p =>
            p.id === edit.id
            ? { name, category, description, price, quantity, status: status ? 'Ativo' : 'Inativo' }
            : p
        ));
        setEdit((prev) => !prev)
    };
    const cancelEdit = ()=>{
         setEdit({statusContainerEdit: false})
    }
    const cancelCreate = ()=>{
        setShowContainer((prev)=> !prev)
       
    }

    const salvar = ()=>{
        try {
            if(name.trim() === '' || category === '' || category === 'default' || description.trim() === '' || price.trim() === '' || quantity.trim() === ''){
                throw new Error('Preencha todos os campos')
            }

            setInfoProduct([...infoProduct, {name, category, description, price, quantity, status: status ? 'Ativo' : 'Inativo', id: uuidv4()}])
            setShowContainer((prev)=> !prev)
            
        } catch (error) {
            alert(error.message)
        }
        
        setName('')
        setCategory('')
        setDescription('')
        setPrice('')
        setQuantity('')
        setStatus(false)
    }

    const boxGridOne = ()=>{
        if(edit.statusContainerEdit === true){
            return (
                <div className={styles.boxGridOne}>

                            <label htmlFor="">Nome do Produto*</label>
                            <input type="text" placeholder='Ex: Gel Fixador' onChange={(e)=> setName(e.target.value)} required value={name}/>

                            <label htmlFor="">Categoria*</label>
                            <select name="" id="" onChange={(e)=> setCategory(e.target.value)} value={category} required>
                                <option value={category}>
                                    {category}
                                </option>
                                <option value="Barba">
                                    Barba
                                </option>
                                <option value="Cabelo">
                                    Cabelo
                                </option>
                                <option value="Cabelo e Barba">
                                    Cabelo e Barba
                                </option>
                            </select>

                        <label htmlFor="">Descrição</label>
                        <textarea name="" id="" maxLength={40} onChange={(e)=> setDescription(e.target.value)} value={description}></textarea>
                    </div>
            )
        }else{
            return(
            <div className={styles.boxGridOne}>

                            <label htmlFor="">Nome do Produto*</label>
                            <input type="text" placeholder='Ex: Gel Fixador' onChange={(e)=> setName(e.target.value)} required value={name}/>

                            <label htmlFor="">Categoria*</label>
                            <select name="" id="" onChange={(e)=> setCategory(e.target.value)} value={category} required>
                                <option value="default">
                                    Escolha uma categoria
                                </option>
                                <option value="Barba">
                                    Barba
                                </option>
                                <option value="Cabelo">
                                    Cabelo
                                </option>
                                <option value="Cabelo e Barba">
                                    Cabelo e Barba
                                </option>
                            </select>

                        <label htmlFor="">Descrição</label>
                        <textarea name="" id="" maxLength={20} onChange={(e)=> setDescription(e.target.value)} value={description}></textarea>
                        </div>
            )
        }
    }

    const boxGridTwo = ()=>{
        if(edit.statusContainerEdit === true){
            return(
                <div className={styles.boxGridTwo}>
                        <label htmlFor="">Preço*</label>
                        <input type="number" placeholder='0,00' onChange={(e)=> setPrice(e.target.value)} value={price} required/>

                        <label htmlFor="">Quantidade em Estoque*</label>
                        <input type="number" placeholder='0'onChange={(e)=> setQuantity(e.target.value)} value={quantity} required/>

                        <div className={styles.boxStatus}>
                            <input type="checkbox" onClick={togleStatus} checked={status}/>
                            <span>Produto ativo</span>
                        </div>
                    </div>
            )
        }else{
            return(
                <div className={styles.boxGridTwo}>

                            <label htmlFor="">Preço*</label>
                            <input type="number" placeholder='0,00' onChange={(e)=> setPrice(e.target.value)} value={price} required/>

                            <label htmlFor="">Quantidade em Estoque*</label>
                            <input type="number" placeholder='0'onChange={(e)=> setQuantity(e.target.value)} value={quantity} required/>

                            <div className={styles.boxStatus}>
                                <input type="checkbox" onClick={togleStatus} checked={status}/>
                                <span>Produto ativo</span>
                            </div>
                        </div>
            )
        }
    }
    const headerCard = ()=>{
        if(edit.statusContainerEdit === true){
            return (
                 <div className={styles.headerCard}>
                    <span>Editar Produto</span>
                    <button onClick={cancelEdit}>X</button>
                 </div>
            )
        }else{
            return(
                <div className={styles.headerCard}>
                    <span>Criar Produto</span>
                    <button onClick={cancelCreate}>X</button>
                 </div>
            )
        }
    }
    useEffect(()=>{
        if(edit.statusContainerEdit === true){
          const produto =  searchProduct()
                  if(produto){
            setName(produto.name);
            setCategory(produto.category);
            setDescription(produto.description);
            setPrice(produto.price);
            setQuantity(produto.quantity);
            setStatus(produto.status);
        }

        }
    }, [edit, infoProduct])
    
    return(
        <div className={styles.containerCard}>
           {headerCard()}
           <div className={styles.containerCenter}>
                <form action="">
                    
                      {boxGridOne()}
                      {boxGridTwo()}
                    
                </form>
           </div>
           
                <div className={styles.boxButton}>
                    <button className={styles.btnCancel} onClick={edit.statusContainerEdit === true ? cancelEdit : cancelCreate}>
                        Cancelar
                    </button>
                    {edit.statusContainerEdit === true ? (
                        <button className={styles.btnSave} onClick={saveEdit}>
                        <span>
                            <FaSave />
                        </span>
                        Salvar
                    </button>
                    ) : (
                        <button className={styles.btnSave} onClick={salvar}>
                        <span>
                            <FaSave />
                        </span>
                        Criar Produto
                    </button>
                    )}
    
                </div>
                
           </div>
       
    )
}
export default CardNewProduto