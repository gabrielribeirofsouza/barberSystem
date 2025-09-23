import { Outlet } from 'react-router-dom'
import styles from './Horarios.module.css'
import ContainerSection from '../../components/ContainerSection/ContainerSection'
import HeaderView from '../../components/HeaderView/HeaderView'
function Horarios (){
    return(
        <div className={styles.containerView}>
            <Outlet />
                <div className={styles.containerContent}>
                <HeaderView headerTitle={'Gerencie os seus horarios de atendimento'} id={'Horario'}/>
                <ContainerSection titleContainer='Horários da Semana' id='Horarios' description='Configure os horários de atendimento para cada dia da semana'/>
                </div>
        </div>
       
    )
}
export default Horarios