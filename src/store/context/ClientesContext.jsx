import {createContext, useState } from 'react'
const CLIENTES = createContext()

export const ClientesProvider = ({children}) =>{
const [addClienteArea, setAddClienteArea] = useState(false)
const [cliente, setCliente] = useState([
   
])
    const value ={
    cliente, setCliente, addClienteArea, setAddClienteArea
    }
    return(
        <CLIENTES.Provider value={value}>
            {children}
        </CLIENTES.Provider>
    )
}
export default CLIENTES