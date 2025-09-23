import { Outlet } from 'react-router-dom'
import styles from './Configuracoes.module.css'
import HeaderView from '../../components/HeaderView/HeaderView'
import { FaEdit, FaEnvelope, FaPhone, FaTrash, FaUser } from 'react-icons/fa'
function Configuracoes(){
    return(
        <div className={styles.containerView}>
            <Outlet />
            <div className={styles.containerContent}>
                <HeaderView headerTitle={'Gerencie suas informações pessoais'} id={'Configuracoes'} />
                <div className={styles.container}>
                    <div className={styles.containerTop}>
                            <span className={styles.adminIcon}>
                            <FaUser />
                            </span>
                            <div className={styles.infoAdmin}>
                            <h1 className={styles.nome}>barbeiro1</h1>
                            <p><span><FaEnvelope /></span> barbeiro1@barbearia.com</p>
                            <p><span><FaPhone /></span>{'(11)'} 99999-1111</p>
                            </div>
                        
                    </div>
                        <div className={styles.containerCenter}>
                            <h2>Informações pessoais</h2>
                            <div className={styles.containerForm}>
                                <form action="">
                                    <label htmlFor="">Nome*</label>
                                    <input type="text" placeholder='barbeiro1' required/>
                                    <label htmlFor="">E-mail*</label>
                                    <input type="text" placeholder='barbeiro1@barbearia.com' required/>
                                    <label htmlFor="">Telefone</label>
                                    <input type="text" placeholder='(11) 99999-1111' required/>
                                    <label htmlFor="">Especialidade</label>
                                    <input type="text" placeholder='Cortes Classicos' />
                                </form>
                                <div className={styles.containerButton}>
                                    <button className={styles.btnEdit}>
                                        <span><FaEdit /></span>
                                        Editar Perfil
                                    </button>
                                    <button className={styles.btnDelet}>
                                        <span>
                                            <FaTrash />
                                        </span>
                                        Excluir Conta
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.containerBottom}>
                            <h2>Segurança</h2>
                            <div className={styles.containerSenha}>
                                <label htmlFor="">Senha</label>
                                <input type="password"  placeholder='* * * * * *'/>
                                <button>Alterar senha</button>
                            </div>
                        </div>
                </div>
        </div>
        </div>
    )
}
export default Configuracoes