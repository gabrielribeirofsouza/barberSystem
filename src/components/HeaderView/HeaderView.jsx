import { FaPlus, FaUserCheck } from 'react-icons/fa'
import styles from './HeaderView.module.css'
import { useContext, useEffect, useState } from 'react'
import CLIENTES from '../../store/context/ClientesContext'
import PRODUTOS from '../../store/context/ProdutoContext'
import SERVICOS from '../../store/context/ServicosContext'
function HeaderView({ headerTitle, btnText, id}){
   
    const { setShowContainerEdit } = useContext(SERVICOS)
    const {setAddClienteArea} = useContext(CLIENTES)
    const {setShowContainer} = useContext(PRODUTOS)
    const icon = ()=>{
        if(id === 'Cliente'){
            return <FaUserCheck />
        }
        if(id === 'Produto' || id === 'Agendamento' || id === 'Servico'){
            return <FaPlus />
        }

        return null
    }
    
    const button = () => {
        switch (id) {
            case "Cliente":
            return (
                <button onClick={clickCliente}>
                <span>{icon()}</span>
                {btnText}
                </button>
            );

            case "Produto":
            return (
                <button onClick={clickProduto}>
                <span>{icon()}</span>
                {btnText}
                </button>
            );
            case "Servico":
                return(
                    <button onClick={clickServico} >
                        <span>{icon()}</span>
                        {btnText}
                    </button>
                )
            default:
            return null;
        }
     };

    const clickProduto = ()=>{
        setShowContainer((prev) => !prev)
    }
    const clickCliente = ()=>{
            setAddClienteArea(prev => !prev)
    }
    const clickServico = ()=>{
        setShowContainerEdit({id: 'newService', status: true})
    }
    return(
          <div className={styles.topBox}>
                            <p>
                            {headerTitle}
                            </p>
                    {button()}

            </div>
    )
}
export default HeaderView