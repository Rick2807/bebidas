import React, { useContext } from 'react'
import {recetasContext} from '../context/Recetas'
import { Receta } from './Receta';



export const ListaReceta = () => {

    const {recetas} = useContext(recetasContext);
    
    return (
        <div className="row mt-5">
            {recetas.map(receta =>(
                <Receta key={receta.idDrink} receta={receta}/>
            ))}
        </div>
    )
}
