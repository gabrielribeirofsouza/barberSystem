const BASE_URL = import.meta.env.VITE_API_URL;
const API_URL = `${BASE_URL}/api/clientes`;


// Buscar todos os clientes
export async function listarClientes() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Erro ao buscar clientes');
  return await res.json();
}

// Criar novo cliente
export const adicionarCliente = async (cliente) => {
  const response = await fetch("http://localhost:4000/api/clientes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cliente),
  });

  if (!response.ok) {
    throw new Error("Erro ao adicionar cliente");
  }

  
  const novoCliente = await response.json();
  return novoCliente;
};
