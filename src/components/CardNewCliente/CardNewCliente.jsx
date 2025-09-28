import { FaSave } from 'react-icons/fa'
import styles from './CardNewCliente.module.css'
import { useContext, useState } from 'react'
import CLIENTES from '../../store/context/ClientesContext'
function CardNewCliente (){
    const { cliente, setCliente, setAddClienteArea } = useContext(CLIENTES)

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cadastro, setCadastro] = useState('')
    const [telefone, setTelefone] = useState('')

    const cancelar = ()=>{
        setAddClienteArea((prev)=> !prev)
    }
    const salvar = ()=>{
        try {
            if(nome.trim() === '' || email.trim() === '' || cadastro.trim() === '' || telefone.trim() === '' ){
                throw new Error('Preencha todos os campos')
            }
        setCliente([...cliente, {nome: nome, email: email, cadastro: cadastro, telefone: telefone}])
        setNome('');
        setEmail('');
        setTelefone('');
        setCadastro('');
            
        } catch (error) {
            alert(error.message)
        }

    }
    return(
            <div className={styles.container}>
                <h2>Adicionar novo cliente</h2>
                <form action="">
                    <div className={styles.contentLeftForm}>
                        <label htmlFor="">Nome*</label>
                        <input type="text" onChange={(e)=>setNome(e.target.value)} value={nome}/>
                        <label htmlFor="">E-mail*</label>
                        <input type="text" onChange={(e)=> setEmail(e.target.value)} value={email}/>
                    </div>

                    <div className={styles.contentRightForm}>
                        <label htmlFor="">Telefone*</label>
                        <input type="text" onChange={(e)=>setTelefone(e.target.value)} value={telefone}/>
                        <label htmlFor="">Cadastro*</label>
                        <input type="date" placeholder='00/00/0000' onChange={(e)=> setCadastro(e.target.value)} value={cadastro}/>
                    </div>
                </form>
                <div className={styles.btnArea}>
                    <button className={styles.btnCancel} onClick={cancelar}>
                        Cancelar
                    </button>
                    <button className={styles.btnSalv} onClick={salvar}>
                        <span>
                            <FaSave />
                        </span>
                        Salvar
                    </button>
                </div>
            </div>
    )
}
export default CardNewCliente