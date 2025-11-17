import {Link, useNavigate} from 'react-router-dom'
import { useContext, useState } from 'react';
import styles from './Login.module.css'
import UserContext from '../../store/context/UserContext';
function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(UserContext)

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const res = await fetch('https://back-end-systembarber-production-9e00.up.railway.app/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, senha })
});


const text = await res.text();


let data = {};
try {
  data = JSON.parse(text);
} catch {
  console.warn('Resposta não era JSON válido');
}

if (!res.ok) throw new Error(data.error || 'Erro ao fazer login');

      // salva o usuário (id, nome, tipo_usuario etc.)
      login(data.user);
      navigate('/home');
    } catch (err) {
      setErro(err.message);
    }
  };
  

    return(
        <div className={styles.container}>
            <h1>systemBarber</h1>
            <div className={styles.containerForm}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Digite o seu email</label>
                   <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="">Digite a sua senha</label>
                     <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                      {erro && <p style={{ color: 'red' }}>{erro}</p>}
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>
    )
}
export default Login