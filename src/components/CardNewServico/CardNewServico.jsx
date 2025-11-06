import { FaSave } from 'react-icons/fa'
import styles from './CardNewServico.module.css'
import { useContext,  useEffect,  useState } from 'react'
import SERVICOS from '../../store/context/ServicosContext'
import { v4 as uuidv4 } from 'uuid';
function CardNewServico(){

    const { showContainerEdit, setShowContainerEdit, serviceList, criarServico, editarServico} = useContext(SERVICOS)
   
    const [nameService, setNameService] = useState('')
    const [descriptionService, setDescriptionService] = useState('')
    const [priceService, setPriceService] = useState('')
    const [durationService, setDurationService] = useState('')
    const [statusService, setStatusService] = useState(true)
   

    const cancelEdit = ()=>{

        setShowContainerEdit({
        status: false,
        id_servico: '',
        typeContainer: ''
        })
    }
    const title = ()=>{
        if(showContainerEdit.typeContainer=== 'newService'){
            return (
                <h1>Novo Serviço</h1>
            )
        }
        if (showContainerEdit.typeContainer === 'editService'){
            return(
                <h1>Editar Serviço</h1>
            )
        }
    }
    const togleStatus = ()=>{
        setStatusService((prev)=> !prev)
    }
    const saveService  = async ()=>{
          try {
    if (
      nameService.trim() === '' ||
      priceService.trim() === '' ||
      durationService.trim() === ''
    ) {
      throw new Error('[ERROR] Preencha todos os campos obrigatórios e tente novamente');
    }

    const novoServico = {
      nome_servico: nameService,
      descricao_servico: descriptionService,
      preco_servico: priceService,
      duracao_servico: durationService,
      status_servico: statusService,
    };

    await criarServico(novoServico); 
    setNameService('');
    setDescriptionService('');
    setPriceService('');
    setDurationService('');
    setStatusService(true);
    setShowContainerEdit({typeContainer: '', id_servico: '', status: false})
  } catch (error) {
    console.error(error);
  }
        setNameService('')
        setDescriptionService('')
        setPriceService('')
        setDurationService('')
        setStatusService(true)
        setShowContainerEdit({typeContainer: '', id_servico: '', status: false})
    };
  
const editService = async () => {
  try {
    if (
      nameService.trim() === '' ||
      durationService.trim() === ''
    ) {
      throw new Error('[ERROR] Preencha todos os campos obrigatórios e tente novamente');
    }

    const updatedData = {
      nome_servico: nameService,
      descricao_servico: descriptionService,
      preco_servico: priceService,
      duracao_servico: durationService,
      status_servico: statusService,
    };

    await editarServico(showContainerEdit.id_servico, updatedData); 

    setShowContainerEdit({ status: false, id_servico: '', typeContainer: '' });

    setNameService('');
    setDescriptionService('');
    setPriceService('');
    setDurationService('');
    setStatusService(true);
  } catch (error) {
    console.error(error);
    alert('Falha ao editar o serviço, tente novamente.');
  }
};

    const renderButton = ()=>{
        if (!showContainerEdit?.typeContainer) return null;
        
        if (showContainerEdit?.typeContainer === 'newService') {
            return (
            <button className={styles.btnSave} onClick={saveService}>
                <span><FaSave /></span>
                Criar Serviço
            </button>
            );
        }

        if (showContainerEdit?.typeContainer === 'editService') {
            return (
            <button className={styles.btnSave} onClick={editService}>
                <span><FaSave /></span>
                Editar Serviço
            </button>
            );
        }

        return null;
      
    }
    const inputForm = ()=>{
        if( showContainerEdit.typeContainer === 'editService'){
            return(
                    <form action="">

                    <label htmlFor="">Nome do Serviço*</label>
                    <input type="text" placeholder='Ex: Corte Social' required onChange={(e)=> setNameService(e.target.value)} value={nameService}/>

                    <label htmlFor="">Descrição</label>
                    <textarea name="" onChange={(e)=> setDescriptionService(e.target.value)} id="" placeholder='Descreva o seriço oferecido' value={ descriptionService}></textarea>

                </form>
            )
        }
        if(showContainerEdit.typeContainer === 'newService'){
            return(
                <form action="">

                    <label htmlFor="">Nome do Serviço*</label>
                    <input type="text" placeholder='Ex: Corte Social' required onChange={(e)=> setNameService(e.target.value)}/>

                    <label htmlFor="">Descrição</label>
                    <textarea name="" onChange={(e)=> setDescriptionService(e.target.value)} id="" placeholder='Descreva o seriço oferecido' ></textarea>

                </form>
            )
        }
     
    }
    const inputFormTwo = ()=>{
        if( showContainerEdit.typeContainer === 'editService'){
            return(
                  <div className={styles.containerInput}>
                        <div className={styles.boxInputOne}>
                            <label htmlFor="">Preço {'(R$)'}*</label>
                            <input type="number" placeholder='0,00' onChange={(e)=> setPriceService(e.target.value)}
                            value={ priceService}/>
                        </div>
                        <div className={styles.boxInputTwo}>
                            <label htmlFor="">Duração {'(minutos)'}*</label>
                            <input type="number" placeholder='0' onChange={(e)=> setDurationService(e.target.value)} value={durationService}/>
                        </div>
                </div>
            )
        }
         if(showContainerEdit.typeContainer === 'newService'){
            return(
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
            )
         }
    }
    const boxStatus = ()=>{
        if( showContainerEdit.typeContainer === 'editService'){
            return(
                <div className={styles.boxStatus}>
                    <input type="checkbox" checked={statusService} onClick={togleStatus}/>
                    <span>Serviço ativo</span>
                </div>
            )
        }
        if(showContainerEdit.typeContainer === 'newService'){
            return(
                <div className={styles.boxStatus}>
                    <input type="checkbox" checked={statusService} onClick={togleStatus}/>
                    <span>Serviço ativo</span>
                </div>
            )
        }
    }
    useEffect(() => {
  if (showContainerEdit.typeContainer === 'editService') {
    const valueCardEdit = serviceList.find(i => i.id_servico === showContainerEdit.id_servico);
    if (valueCardEdit) {
      setNameService(valueCardEdit.nome_servico);
    setDescriptionService(valueCardEdit.descricao_servico);
    setPriceService(valueCardEdit.preco_servico);
    setDurationService(valueCardEdit.duracao_servico);
    setStatusService(valueCardEdit.status_servico);
    }
  }
}, [showContainerEdit, serviceList]);
    return(
        <div className={styles.containerCard}>
            {title()}
            <div className={styles.containerContent}>
                {inputForm()}
            </div>
                {inputFormTwo()}
            <div className={styles.containerStatus}>
                {boxStatus()}
                <span>Desmarque para este serviço temporariamente desativado</span>
            </div>
            <div className={styles.containerButton}>
                <button className={styles.btnCancel}
                onClick={cancelEdit}>
                    Cancelar
                </button>
            {renderButton()}
               
            </div>
        </div>
    )}

export default CardNewServico