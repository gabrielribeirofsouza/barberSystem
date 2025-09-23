import { Outlet } from 'react-router-dom'
import styles from './Produtos.module.css'
import HeaderView from '../../components/HeaderView/HeaderView'
import ContainerSection from '../../components/ContainerSection/ContainerSection'
function Produtos(){
    return(
        <div className={styles.containerView}>
        <Outlet />
            <div className={styles.containerContent}>
            <HeaderView headerTitle={'Gerencie os produtos de sua barberia'} btnText={'Novo Produto'} id={'Produtos'}/>
            <ContainerSection titleContainer={'Lista de Produtos'} description={'1 produto(s) cadastrado(s)'} id={'Produtos'}/>
            </div>
        </div>
    )
}
export default Produtos