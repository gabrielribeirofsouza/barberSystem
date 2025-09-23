import { Outlet } from 'react-router-dom'
import styles from './Agendamentos.module.css'
import HeaderView from '../../components/HeaderView/HeaderView'
import { FaFilter } from 'react-icons/fa'
import CardAgendamentos from '../../components/CardAgendamentos/CardAgendamentos'
function Agendamentos(){
    return(
        <div className={styles.containerView}>
            <Outlet />
            <div className={styles.containerContent}>
                <HeaderView headerTitle={'Visualize os agendamentos de sua barberia'} btnText={'Novo Agendamento'} id={'Agendamento'}/>
                <div className={styles.areaCards}> 

                    <div className={styles.searchCardContainer}>
                        <p className={styles.titleSearch}>
                            <span className={styles.iconSearch}><FaFilter /></span>
                            Filtrar por: 
                        </p>
                        <div className={styles.buttonArea}>
                            <button>Todos</button>
                            <button>Hoje</button>
                            <button>Futuros</button>
                            <button>Passados</button>
                            </div>
                    </div>
                    
                    <CardAgendamentos />
                </div>
            </div>
        </div>
    )
}
export default Agendamentos