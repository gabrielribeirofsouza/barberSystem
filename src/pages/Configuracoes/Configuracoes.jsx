import { Outlet } from 'react-router-dom'
import styles from './Configuracoes.module.css'
import HeaderView from '../../components/HeaderView/HeaderView'
import { FaEdit, FaEnvelope, FaPhone, FaTrash, FaUser, FaSave } from 'react-icons/fa'
import { useContext, useState } from 'react'
import USER from '../../store/context/UserContext'
function Configuracoes(){
    const {user, setUser} = useContext(USER)

    const [edit, setEdit] = useState(false)
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [espec, setEspec] = useState('')
    
    const clickEdit = ()=>{
        setEdit((prev)=> !prev)
    }
    const clickSave = ()=>{
        try {
             if(nome.trim() === '' || email.trim() === '' || tel.trim() === '' || espec.trim() === ''){
                throw new Error('Preencha todos os campos')
             }
        setUser({
            nome: nome,
            email: email,
            tel: tel,
            espec: espec
        })
            
        } catch (error) {
            alert(error.message)
        }
        setNome('')
        setEmail('')
        setTel('')
        setEspec('')
        setEdit((prev) => !prev)
    }
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
                            <h1 className={styles.nome}>{user.nome}</h1>
                            <p><span><FaEnvelope /></span>{user.email}</p>
                            <p><span><FaPhone /></span>{user.tel}</p>
                            </div>
                        
                    </div>
                        <div className={styles.containerCenter}>
                            <h2>Informações pessoais</h2>
                            <div className={styles.containerForm}>
                                    {edit === false ? (
                                         <form action="">
                                    <label htmlFor="">Nome*</label>
                                    <input type="text"
                                     value={user.nome}
                                     className={styles.disabled}
                                      disabled/>
                                    <label htmlFor="">E-mail*</label>
                                    <input type="email"
                                     value={user.email}
                                     disabled
                                      className={styles.disabled}
                                    />
                                    <label htmlFor="">Telefone*</label>
                                    <input type="tel"
                                     value={user.tel}
                                     disabled
                                      className={styles.disabled}
                                    />
                                    <label htmlFor="">Especialidade</label>
                                    <input type="text"
                                    value={user.espec}
                                     disabled
                                      className={styles.disabled}
                                    />
                                </form>
                                    ) :  <form action="" className={styles.editForm}>
                                    <label htmlFor="">Nome*</label>
                                    <input type="text"
                                     placeholder={'Barbeiro1'}
                                      onChange={(e)=> setNome(e.target.value)}
                                       className={styles.active}/>

                                    <label htmlFor="">E-mail*</label>
                                    <input type="text"
                                     placeholder={'barbeiro1@barbearia.com'}
                                      onChange={(e)=>setEmail(e.target.value)}
                                      className={styles.active}
                                       />
                                    <label htmlFor="">Telefone*</label>
                                    <input type="text"
                                     placeholder={'(11) 99999-1111'}
                                      onChange={(e)=> setTel(e.target.value)}
                                      className={styles.active}
                                      />
                                    <label htmlFor="">Especialidade</label>
                                    <input type="text"
                                     placeholder={'Cortes Classicos'}
                                      onChange={(e)=>
                                       setEspec(e.target.value)}
                                       className={styles.active}
                                       />
                                </form>}
                               {edit === false ? (
                                 <div className={styles.containerButton}>
                                
                                    <button className={styles.btnEdit} onClick={clickEdit}>
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

                               ) : 
                               (
                                 <div className={styles.containerButton}>
                                
                                    <button className={styles.btnEdit} onClick={clickEdit}>
                                        <span><FaEdit /></span>
                                        Cancelar
                                    </button>
                                    <button className={styles.btnSave} onClick={clickSave}>
                                        <span>
                                            <FaSave />
                                        </span>
                                        Salvar
                                    </button>
                                </div>
                               )

                               }
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