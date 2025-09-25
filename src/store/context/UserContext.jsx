import { createContext, useState } from "react";

const USER = createContext()

export const UserProvider = ({children}) =>{
    const [user, setUser] = useState({
        nome: 'Barbeiro1',
        email: 'barbeiro1@barbearia.com',
        tel: '(11) 99999-1111',
        espec: 'Cortes Classicos'
    })
    const value = {user, setUser}
    return(
        <USER.Provider value={value}>
            {children}
        </USER.Provider>
    )
}
export default USER