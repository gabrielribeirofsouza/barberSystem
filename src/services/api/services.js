const BASE_URL = import.meta.env.VITE_API_URL;
const API_URL = `${BASE_URL}/api/servicos`;

// GET
export async function listarServicos() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Erro ao buscar serviços');
  return res.json();
}

// POST
export async function adicionarServico(servico) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(servico),
  });

  if (!response.ok) {
    throw new Error('Erro ao adicionar serviço');
  }

  return await response.json();
}

// PUT
export async function atualizarServico(id_servico, servicoAtualizado) {
  const res = await fetch(`${API_URL}/${id_servico}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(servicoAtualizado),
  });
  if (!res.ok) throw new Error('Erro ao atualizar serviço');
  return res.json();
}

// DELETE
export async function deletarServico(id_servico) {
  const res = await fetch(`${API_URL}/${id_servico}`, { method: 'DELETE' });

  if (!res.ok) {
    const errorBody = await res.json().catch(() => ({}));
    throw new Error(errorBody.error || 'Erro ao excluir serviço');
  }

  return; 
}

