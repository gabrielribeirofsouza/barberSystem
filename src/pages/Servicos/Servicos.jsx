import { Outlet } from 'react-router-dom'
import styles from './Servicos.module.css'
import HeaderView from '../../components/HeaderView/HeaderView'
import CardServicos from '../../components/CardServicos/CardServicos'
import { useContext, useState } from 'react'
import SERVICOS from '../../store/context/ServicosContext'
import CardNewServico from '../../components/CardNewServico/CardNewServico'
import { v4 as uuidv4 } from 'uuid';

function Servicos(){
    const {showContainerEdit, serviceList} = useContext(SERVICOS)
    
    return(
        <div className={styles.containerView}>
            <Outlet />
            <div className={styles.containerContent}>
                <HeaderView headerTitle={'Gerencie os serviços oferecidos em sua barbearia'} btnText={'Novo Serviço'} id={'Servico'}/>
                {showContainerEdit.status === false ? serviceList.map((i)=>{
                    return <CardServicos key={i.id_servico} nome_servico={i.nome_servico} descricao_servico={i.descricao_servico} preco_servico={i.preco_servico} duracao_servico={i.duracao_servico} status_servico={i.status_servico} id_servico={i.id_servico} />
                }) : <CardNewServico />}
           

            </div>
        </div>
    )
}
export default Servicos