import { FaPlus, FaUserCheck } from 'react-icons/fa'
import styles from './HeaderView.module.css'
import { useContext, useEffect, useState } from 'react'
import CLIENTES from '../../store/context/ClientesContext'
function HeaderView({ headerTitle, btnText, id}){
   const {setAddClienteArea} = useContext(CLIENTES)
    const icon = ()=>{
        if(id === 'Cliente'){
            return <FaUserCheck />
        }
        if(id === 'Produto' || id === 'Agendamento' || id === 'Servico'){
            return <FaPlus />
        }

        return null
    }
    const click = ()=>{
        if(id === 'Cliente'){
            setAddClienteArea(prev => !prev)
        }
    }
    return(
          <div className={styles.topBox}>
                            <p>
                            {headerTitle}
                            </p>
                    {id !== 'Horario' && id !== 'Configuracoes' && (
                        <button onClick={click}>
                            <span>{icon()}</span>
                            {btnText}
                        </button>
                    )}
            </div>
    )
}
export default HeaderView