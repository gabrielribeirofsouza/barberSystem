import { FaSave } from 'react-icons/fa'
import styles from './CardNewCliente.module.css'
import { useContext, useState } from 'react'
import CLIENTES from '../../store/context/ClientesContext'
import { v4 as uuidv4 } from 'uuid'
function CardNewCliente (){
    const { cliente, setCliente, setAddClienteArea, adicionarCliente } = useContext(CLIENTES)

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cadastro, setCadastro] = useState('')
    const [telefone, setTelefone] = useState('')

    const cancelar = ()=>{
        setAddClienteArea((prev)=> !prev)
    }
    const salvar = async()=>{
        try {
            if(nome.trim() === '' || email.trim() === '' || cadastro.trim() === '' || telefone.trim() === '' ){
                throw new Error('Preencha todos os campos')
            }
         const novoCliente = {
                nome_cliente: nome,
                email_cliente: email,
                telefone_cliente: telefone,
                data_cadastro: cadastro
            };
            await adicionarCliente(novoCliente);
           
        setNome('');
        setEmail('');
        setTelefone('');
        setCadastro('');
        setAddClienteArea((prev)=> !prev)
        
        const res = await fetch("http://localhost:4000/api/clientes");
        const listaAtualizada = await res.json();
        setCliente(listaAtualizada);

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