import { createContext, useState, useEffect } from "react";
import { listarProdutos, criarProduto, atualizarProduto, deletarProduto } from "../../services/api/produto";
const PRODUTOS = createContext()
export const ProdutosProvider = ({children})=>{
    const [showContainer, setShowContainer] = useState(false)
    const [infoProduct, setInfoProduct] = useState([])
    const [edit, setEdit] = useState({
        id: '',
        statusContainerEdit: false
    })


    //  Carrega produtos do banco ao montar
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await listarProdutos();
        setInfoProduct(data);
      } catch (err) {
        console.error("Erro ao carregar produtos:", err);
      }
    }
    fetchData();
  }, []);

 async function adicionarProduto(produto) {
    const novo = await criarProduto(produto);
    setInfoProduct((prev) => [...prev, novo]);
  }

  async function editarProduto(id, produtoAtualizado) {
    await atualizarProduto(id, produtoAtualizado);
    setInfoProduct((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...produtoAtualizado } : p))
    );
  }

  async function removerProduto(id) {
    await deletarProduto(id);
    setInfoProduct((prev) => prev.filter((p) => p.id !== id));
  }
    const value = {
        showContainer, setShowContainer, infoProduct, setInfoProduct, edit, setEdit, adicionarProduto, editarProduto, removerProduto
    }
    return(
        <PRODUTOS.Provider value={value}>
            {children}
        </PRODUTOS.Provider>
    )
}
export default PRODUTOS