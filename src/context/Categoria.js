import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios';

//1.create context
export const Context = createContext();

//2. create provider, this is where function and state goes
const Categoria = (props) => {
    
    //create state
    const [category, setCategory] = useState([])

    //create useEffect 
    useEffect(() => {
        //invoke apiRequest function 
        apiRequest()

    }, []);

    //make Api request 
    const apiRequest = async () =>{
        const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`

        const categoria = await axios(url)
        setCategory(categoria.data.drinks)
    }

    return (
        <Context.Provider value={{category, setCategory}}>
            {props.children}
        </Context.Provider>
    )
}

export default Categoria
