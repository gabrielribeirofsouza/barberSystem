import { FaSave } from 'react-icons/fa'
import styles from './CardNewServico.module.css'
import { useContext, useState } from 'react'
import SERVICOS from '../../store/context/ServicosContext'
function CardNewServico({id}){

    const { setShowContainerEdit, serviceList, setServiceList } = useContext(SERVICOS)
   
    const [nameService, setNameService] = useState('')
    const [descriptionService, setDescriptionService] = useState('')
    const [priceService, setPriceService] = useState('')
    const [durationService, setDurationService] = useState('')
    const [statusService, setStatusService] = useState(false)

    const cancelEdit = ()=>{
        setShowContainerEdit({id: '', status: false})
    }
    const title = ()=>{
        if(id === 'newService'){
            return (
                <h1>Novo Serviço</h1>
            )
        }
        if (id === 'editService'){
            return(
                <h1>Editar Serviço</h1>
            )
        }
    }
    const togleStatus = ()=>{
        setStatusService((prev)=> !prev)
    }
    const saveService = ()=>{
        try {
            if(nameService.trim() === '' ||  priceService.trim() === '' || durationService.trim() === ''){
                throw new Error('[ERROR] Preencha todos os campos obrigatorios e tente novamente')
            }
            setServiceList([...serviceList, {
                name: nameService,
                description: descriptionService,
                price: priceService,
                duration: durationService,
                status: statusService
            }])
            
        } catch (error) {
            alert(error.message

            )
        }
        setNameService('')
        setDescriptionService('')
        setPriceService('')
        setDurationService('')
        setStatusService(false)
        setShowContainerEdit({id: '', status: false})
    }
    return(
        <div className={styles.containerCard}>
            {title()}
            <div className={styles.containerContent}>
                <form action="">

                    <label htmlFor="">Nome do Serviço*</label>
                    <input type="text" placeholder='Ex: Corte Social' required onChange={(e)=> setNameService(e.target.value)}/>

                    <label htmlFor="">Descrição</label>
                    <textarea name="" onChange={(e)=> setDescriptionService(e.target.value)} id="" placeholder='Descreva o seriço oferecido' ></textarea>

                </form>
            </div>
                    <div className={styles.containerInput}>
                        <div className={styles.boxInputOne}>
                            <label htmlFor="">Preço {'(R$)'}*</label>
                            <input type="number" placeholder='0,00' onChange={(e)=> setPriceService(e.target.value)}/>
                        </div>
                        <div className={styles.boxInputTwo}>
                            <label htmlFor="">Duração {'(minutos)'}*</label>
                            <input type="number" placeholder='0' onChange={(e)=> setDurationService(e.target.value)}/>
                        </div>
                    </div>
            <div className={styles.containerStatus}>
                <div className={styles.boxStatus}>
                    <input type="checkbox" checked={statusService} onClick={togleStatus}/>
                    <span>Serviço ativo</span>
                </div>
                <span>Desmarque para este serviço temporariamente desativado</span>
            </div>
            <div className={styles.containerButton}>
                <button className={styles.btnCancel}
                onClick={cancelEdit}>
                    Cancelar
                </button>
                <button className={styles.btnSave} onClick={saveService}>
                    <span><FaSave /></span>
                    Criar Serviço
                </button>
            </div>
        </div>
    )
}
export default CardNewServico