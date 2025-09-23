import { FaPlus, FaUserCheck } from 'react-icons/fa'
import styles from './HeaderView.module.css'
import { useEffect, useState } from 'react'
function HeaderView({ headerTitle, btnText, id}){
    const [btnAtivo, setBtnStatus] = useState(true)
    const icon = ()=>{
        if(id === 'Cliente'){
            return <FaUserCheck />
        }
        if(id === 'Produto' || id === 'Agendamento' || id === 'Servico'){
            return <FaPlus />
        }

        return null
    }
 
    return(
          <div className={styles.topBox}>
                            <p>
                            {headerTitle}
                            </p>
                    {id !== 'Horario' && id !== 'Configuracoes' && (
                        <button>
                            <span>{icon()}</span>
                            {btnText}
                        </button>
                    )}
            </div>
    )
}
export default HeaderView