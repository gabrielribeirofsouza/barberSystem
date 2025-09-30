import { createContext, useState } from "react";

const SERVICOS = createContext()
export const ServicosProvider = ({ children }) =>{
    const [serviceList, setServiceList] = useState([])
    const [showContainerEdit, setShowContainerEdit] = useState({
        id: '',
        status: false
    })
    const value = {
        showContainerEdit, setShowContainerEdit, serviceList, setServiceList
    }
    return(
        <SERVICOS.Provider value={value}>
            {children}
        </SERVICOS.Provider>
    )
}
export default SERVICOS