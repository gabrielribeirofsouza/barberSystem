import {createContext, useState, useEffect } from 'react'
import { listarClientes, adicionarCliente } from '../../services/api/clientes'

const CLIENTES = createContext()

export const ClientesProvider = ({children}) =>{
const [addClienteArea, setAddClienteArea] = useState(false)
const [cliente, setCliente] = useState([])

// Buscar clientes ao carregar a página
  useEffect(() => {
    listarClientes()
      .then(setCliente)
      .catch((err) => console.error('Erro ao carregar clientes:', err));
  }, []);


  

    const value ={
    cliente, setCliente, addClienteArea, setAddClienteArea, adicionarCliente
    }
    return(
        <CLIENTES.Provider value={value}>
            {children}
        </CLIENTES.Provider>
    )
}
export default CLIENTES