import { FaTrash } from "react-icons/fa";
import styles from './CardCliente.module.css'
import { useContext } from "react";
import CLIENTES from "../../store/context/ClientesContext";
function CardCLiente ({nome, status, email, telefone, cadastro, id}){
   
    const {cliente, setCliente} = useContext(CLIENTES)

    const excluir = async () => {
  const confirmar = window.confirm(`Deseja realmente excluir o cliente "${nome}"?`);
  if (!confirmar) return;

  try {
    console.log(`🛰️ Enviando requisição DELETE para: http://localhost:4000/api/clientes/${id}`);
   const response = await fetch(`http://localhost:4000/api/clientes/${id}`, {
  method: "DELETE",
});

    if (response.ok) {
        const res = await fetch("http://localhost:4000/api/clientes");
        const listaAtualizada = await res.json();
         setCliente(listaAtualizada);
      alert("Cliente excluído com sucesso!");
    } else if (response.status === 404) {
      alert("Cliente não encontrado!");
    } else {
      alert("Erro ao excluir cliente.");
    }
  } catch (error) {
    console.error("Erro ao excluir cliente:", error);
    alert("Erro de conexão com o servidor.");
  }
};
    return(
        <div className={styles.containerCard}>

            <div className={styles.infoUserCard}>
            <p>{nome}</p>
            <span>{status}</span>
            </div>

            <div className={styles.dataUser}>
            <span>Email: {email}</span>
            <span>Telefone: {telefone}</span>
            <span>Cadastrado em: {cadastro}</span>
            </div>
            <button onClick={excluir}>
                <span><FaTrash /></span>
                Excluir
            </button>
        </div>
    )
}
export default CardCLiente;