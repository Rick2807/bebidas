import React,{ createContext,useEffect, useState } from 'react'
import axios from 'axios'
export const ModalContext = createContext()

 const Modal = (props) => {
    //create state for idreceta
    const [idReceta, guardarIdReceta] = useState(null)
    const [informacion, guardarReceta] = useState({})
    
    useEffect(()=>{
        //if there's nothing inside state do not execute the code 
        if(!idReceta) return; 
        
        recipeApi();

    },[idReceta])

    //conect to the Api function    
    const recipeApi = async() =>{
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`
        const result = await axios.get(url)
        console.log(result)

        guardarReceta(result.data.drinks[0])
        

    }

    return (
        <ModalContext.Provider
            value={{
                guardarIdReceta,
                guardarReceta,
                informacion
            
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default Modal