import { Outlet } from 'react-router-dom'
import styles from './Produtos.module.css'
import HeaderView from '../../components/HeaderView/HeaderView'
import ContainerSection from '../../components/ContainerSection/ContainerSection'
import { useContext, useState } from 'react'
import CardNewCliente from '../../components/CardNewCliente/CardNewCliente'
import PRODUTOS from '../../store/context/ProdutoContext'
import CardNewProduto from '../../components/CardNewProduto/CardNewProduto'
function Produtos(){ 
    const {showContainer, infoProduct, edit} = useContext(PRODUTOS)
    
    return(
        <div className={styles.containerView}>
        <Outlet />
            <div className={styles.containerContent}>
            <HeaderView headerTitle={'Gerencie os produtos de sua barberia'} btnText={'Novo Produto'} id={'Produto'} />
            {edit.statusContainerEdit === true && <CardNewProduto id={edit.id}/>}
            {showContainer && <CardNewProduto/>}
            <ContainerSection titleContainer={'Lista de Produtos'} description={ `${infoProduct?.length || 0} produto(s) cadastrado(s)`} id={'Produtos'}/>
            </div>
        </div>
    )
}
export default Produtos