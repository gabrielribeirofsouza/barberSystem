const API_URL = 'http://localhost:4000/api/produtos';

export async function listarProdutos() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Erro ao listar produtos');
  return res.json();
}

export async function criarProduto(produto) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(produto)
  });
  if (!res.ok) throw new Error('Erro ao criar produto');
  return res.json();
}

export async function atualizarProduto(id, produto) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(produto)
  });
  if (!res.ok) throw new Error('Erro ao atualizar produto');
  return res.json();
}

export async function deletarProduto(id) {
  const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Erro ao deletar produto');
  return res.json();
}