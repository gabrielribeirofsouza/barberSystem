import styles from './ContainerSection.module.css'
import { FaCalendarDay, FaCartPlus, FaClock, FaProductHunt, FaUserCheck, FaUserFriends } from 'react-icons/fa'
import CardCLiente from '../../components/CardCliente/CardCliente';
import CardHorario from '../CardHorario/CardHorario';
import CardProduto from '../CardProduto/CardProduto';
import { useContext } from 'react';
import CLIENTES from '../../store/context/ClientesContext';
function ContainerSection({titleContainer, id, description}){
    const {cliente, setCliente} = useContext(CLIENTES)

    const icon = ()=>{
           if(id === 'Clientes'){
            return <FaUserFriends />
        }
        if(id === 'Horarios'){
            return <FaClock />
        }
        if(id === 'Produtos'){
            return <FaCartPlus />
        }
    }
    const card = ()=>{
        if(id === 'Clientes'){
            return cliente.map((c, index) => (
                 <CardCLiente key={index} nome={c.nome} status={c.status} email={c.email} telefone={c.telefone} cadastro={c.cadastro}/>
                ))
        }
        if(id === 'Horarios'){
            return <CardHorario dia={'Segunda-feira'} status={'Ativo'} inicio={'09:00'} fim={'17:00'}/>
        }
        if(id === 'Produtos'){
            return <CardProduto />
        }
    }
    return (
         <div className={styles.containerContent}>

               
                <div className={styles.container}>

                    <div className={styles.topBox}>
                    <span className={styles.titleContainer}>
                        <span>
                            {icon()}
                        </span>
                        {titleContainer}
                    </span>
                    <p>{description}</p>
                    </div>
                    <div className={styles.containerCardArea}>
                        {card()}
                    </div>
                </div>
            </div>
    )
}
export default ContainerSection