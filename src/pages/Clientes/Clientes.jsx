
import styles from './Clientes.module.css'
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import ContainerSection from '../../components/ContainerSection/ContainerSection';
import HeaderView from '../../components/HeaderView/HeaderView';
import CardNewCliente from '../../components/CardNewCliente/CardNewCliente';
import { useContext } from 'react';
import CLIENTES from '../../store/context/ClientesContext';
function Clientes() {
   const {addClienteArea} = useContext(CLIENTES)
    return ( 
        <div className={styles.containerView}>
           <Outlet />
           <div className={styles.containerContent}>
           <HeaderView headerTitle='Visualize e gerencie os agendamentos de sua barberia' btnText='Adicionar Cliente' id='Cliente'/>
         {
           addClienteArea && <CardNewCliente/> 
         }
         <ContainerSection titleContainer='Lista de Clientes' id='Clientes' description='Todos os clientes que são cadastrados em sua barbearia'/>
            
           </div>
        </div>
     );
}

export default Clientes;