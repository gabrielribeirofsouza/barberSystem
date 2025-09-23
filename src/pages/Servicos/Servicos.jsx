import { Outlet } from 'react-router-dom'
import styles from './Servicos.module.css'
import HeaderView from '../../components/HeaderView/HeaderView'
import CardServicos from '../../components/CardServicos/CardServicos'
function Servicos(){
    return(
        <div className={styles.containerView}>
            <Outlet />
            <div className={styles.containerContent}>
                <HeaderView headerTitle={'Gerencie os serviços oferecidos em sua barbearia'} btnText={'Novo Serviço'} id={'Servico'}/>
            <CardServicos />

            </div>
        </div>
    )
}
export default Servicos