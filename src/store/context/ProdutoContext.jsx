import { createContext, useState } from "react";

const PRODUTOS = createContext()
export const ProdutosProvider = ({children})=>{
    const [showContainer, setShowContainer] = useState(false)
    const [infoProduct, setInfoProduct] = useState([])
    const [edit, setEdit] = useState({
        id: '',
        statusContainerEdit: false
    })
    const value = {
        showContainer, setShowContainer, infoProduct, setInfoProduct, edit, setEdit
    }
    return(
        <PRODUTOS.Provider value={value}>
            {children}
        </PRODUTOS.Provider>
    )
}
export default PRODUTOS