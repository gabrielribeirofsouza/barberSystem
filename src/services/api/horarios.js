const API_URL = 'http://localhost:4000/api/horarios';

export async function getHorarios(id_barbeiro) {
  const res = await fetch(`${API_URL}/${id_barbeiro}`);
  if (!res.ok) throw new Error('Erro ao buscar horários');
  return res.json();
}

export async function updateHorario(id_agenda, data) {
  const res = await fetch(`${API_URL}/${id_agenda}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error('Erro ao atualizar horário');
  return res.json();
}