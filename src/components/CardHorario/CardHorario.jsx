import { FaClock, FaEdit, FaSave } from "react-icons/fa";
import styles from './CardHorario.module.css'
import {useState } from "react";

function CardHorario ({dia}){

    const [inicio, setInicio] = useState('09:00')
    const [fim, setFim] = useState ('18:00')
    const [status, setStatus] = useState(true)
    const [statusMsg, setStatusMsg] = useState('Ativo')
    const [showContainerEdit, setShowContainerEdit] = useState(false)

  const handleStatus = ()=>{
    setStatus((prev) => {
    let newState = !prev;
    setStatusMsg(newState === true ? 'Ativo' : 'Inativo')
    return newState
    })

  }

  const click = ()=>{
    setShowContainerEdit((prev) => !prev)
  }

    return (
        <div className={styles.containerCardHorario}>
            <div className={styles.dateContainer}>
                <p>{dia}</p>
                {status ? <span className={styles.active}>{statusMsg}</span> : <span className={styles.off}>{statusMsg}</span> }
               
            </div>
            {
                showContainerEdit ? (
                <div className={styles.areaEditContainer}>
                    <div className={styles.inputEditArea}>
                        <form action="">
                                <label htmlFor="">Hora inicio*</label>
                                <input type="time" value={inicio} onChange={(e)=> setInicio(e.target.value)}/>
                                <label htmlFor="">Hora fim*</label>
                                <input type="time" value={fim} onChange={(e)=> setFim(e.target.value)}/>
                        </form>

                        <div className={styles.statusBox}>
                            <input type="checkbox" checked={status} onClick={handleStatus}/>
                            <span>Horário ativo</span>
                        </div>
                    </div>
                    <div className={styles.btnAreaEdit}>
                        <button onClick={click}>
                            Cancelar
                        </button>
                        <button className={styles.btnSave} onClick={click}>
                            <span>
                                <FaSave />
                            </span>
                                Salvar
                        </button>
                    </div>
                </div>
                ) : 
                (
                <div className={styles.hoursContainer}>
                    <p>
                        <span><FaClock /></span>
                        {inicio} - {fim}
                    </p>
                    <button className={styles.btnEditarHours} onClick={click}><span>
                            <FaEdit />
                        </span>
                        Editar
                    </button>
                </div>
            )}
            
            </div>
    
    )
}
export default CardHorario