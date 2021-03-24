import React, { createContext,useEffect, useState }  from 'react'
import axios from 'axios'

export const recetasContext = createContext(); 

const Recetas = (props) => {
    //create state 
    const [recetas, guardarRecetas] = useState([]);
    const [busqueda, buscarRecetas] = useState({
        name: '', 
        categoria: ''
    })

    const [consultar, guardarConsultar] = useState(false)

    //get ingredient and category from state 
    const {name, categoria} = busqueda

    //get ingredients and category from api
    useEffect(() => {
        //invoke API function
        if(consultar){
            Api();
        } 
        
        
    }, [busqueda]);

    //create function to connect to the api
    const Api = async() =>{
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${categoria}`
        const recetas = await axios(url)
        guardarRecetas(recetas.data.drinks)
        
    }

    return (
        <recetasContext.Provider value={{
            recetas,
            buscarRecetas,
            guardarConsultar
        }}>
            {props.children}
        </recetasContext.Provider>
    )
}

export default Recetas
