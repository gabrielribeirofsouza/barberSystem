import { useContext } from 'react'
import styles from './CardServicos.module.css'
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa'
import SERVICOS from '../../store/context/ServicosContext'

function CardServicos ({nome_servico, descricao_servico, preco_servico, duracao_servico, status_servico, id_servico}) {
    const { setShowContainerEdit, serviceList, setServiceList, excluirServico, editarServico } = useContext(SERVICOS)

    const clickShowContainerEdit = () => {
        setShowContainerEdit({typeContainer: 'editService', status: true, id_servico})
    }

    const classe = status_servico ? styles.statusActive : styles.statusOff

    const excluir = async () => {
        const confirmar = window.confirm(`Deseja realmente excluir o serviço "${name}"?`);
        if (!confirmar) return;

        try {
            await excluirServico(id_servico); 
            alert("Serviço excluído com sucesso!");
        } catch (error) {
            console.error("Erro ao excluir serviço:", error);
            alert("Erro ao excluir o serviço. Tente novamente.");
        }
    };
    

    // MINIMA ALTERAÇÃO: função toggleStatus atualiza a lista imediatamente
    const toggleStatus = () => {
        setServiceList(prev => prev.map(s => {
            if (s.id_servico === id_servico) {
                return { ...s, status_servico: !s.status_servico }
            }
            return s
        }))
    }

    return (
        <div className={styles.containerCardServico}>
            <div className={styles.containerButton}>
                <button
                    className={status_servico ? styles.eyeStatusActive : styles.eyeStatusOff}
                    onClick={toggleStatus}
                >
                    <FaEye />
                </button>
                <button className={styles.btnEdit} onClick={clickShowContainerEdit}>
                    <span><FaEdit /></span> Editar
                </button>
                <button className={styles.btnDelet} onClick={excluir}>
                    <span><FaTrash /></span> Excluir
                </button>
            </div>
            <div className={styles.containerInfoServico}>
                <div className={styles.topInfo}>
                    <span>{nome_servico}</span>
                    <p>{descricao_servico}</p>
                </div>
                <div className={styles.bottomInfo}>
                    <p>
                        <span className={styles.value}>R$ {preco_servico}</span>
                        <span className={styles.min}>{duracao_servico}min</span>
                    </p>
                    <div className={styles.infoDate}>
                        <span className={styles.date}>Criado em: XX/XX/XXXX</span>
                        <span className={classe}>
                            {status_servico ? 'Ativo' : 'Inativo'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardServicos