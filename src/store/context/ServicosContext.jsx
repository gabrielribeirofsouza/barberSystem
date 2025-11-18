import { createContext, useState, useEffect } from "react";
import {
  listarServicos,
  adicionarServico,
  atualizarServico,
  deletarServico,
} from "../../services/api/services";

const SERVICOS = createContext();

export const ServicosProvider = ({ children }) => {
  const [serviceList, setServiceList] = useState([]);
  const [showContainerEdit, setShowContainerEdit] = useState({
    status: false,
    id_servico: "",
    typeContainer: "",
  });

  useEffect(() => {
    const carregarServicos = async () => {
      try {
        const data = await listarServicos();
        const formatados = data.map(s => ({
          id_servico: s.id_servico,
          nome_servico: s.nome_servico,
          descricao_servico: s.descricao_servico,
          preco_servico: s.preco_servico,
          duracao_servico: s.duracao_servico,
          status_servico: s.status_servico,
        }));
        setServiceList(formatados);
        return formatados;
      } catch (error) {
        console.error("Erro ao carregar serviços:", error);
      }
    };

    carregarServicos();
  }, []);

  const criarServico = async (servico) => {

  try {
    const novo = await adicionarServico(servico);
    console.log("Resposta do backend:", novo);
    const formatado = {
      id_servico: novo.id_servico,
      nome_servico: novo.nome_servico,
      descricao_servico: novo.descricao_servico,
      preco_servico: novo.preco_servico,
      duracao_servico: novo.duracao_servico,
      status_servico: novo.status_servico,
    };
    setServiceList((prev) => [...prev, formatado]);
    return formatado;
  } catch (error) {
    console.error("Erro ao adicionar serviço:", error);
  }
};

const editarServico = async (id_servico, servicoAtualizado) => {
  try {
    await atualizarServico(id_servico, servicoAtualizado);
  
    setServiceList((prev) =>
      prev.map((s) => s.id_servico === id_servico ? servicoAtualizado : s)
    );
    
  } catch (error) {
    console.error("Erro ao atualizar serviço:", error);
    throw error;
  }
};

  const excluirServico = async (id_servico) => {
    try {
      await deletarServico(id_servico);
      console.log(serviceList)
      setServiceList((prev) => prev.filter((s) => s.id_servico !== id_servico));
      console.log(serviceList)
      
    } catch (error) {
      console.error("Erro ao excluir serviço:", error);
    }
  };

  const value = {
    showContainerEdit,
    setShowContainerEdit,
    serviceList,
    setServiceList,
    criarServico,
    editarServico,
    excluirServico,
  };

  return (
    <SERVICOS.Provider value={value}>{children}</SERVICOS.Provider>
  );
};

export default SERVICOS;