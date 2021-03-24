import React, { useContext, useState } from 'react'
import { Context } from '../context/Categoria'
import { recetasContext } from '../context/Recetas'

export const Formulario = () => {
    //utilize context 
    const { category } = useContext(Context)
    const { buscarRecetas, guardarConsultar } = useContext(recetasContext)
    //create state 
    const [busqueda, guardarBusqueda] = useState({
        name: '',
        categoria: ''
    });

    //create function that reads input fields
    const readData = e => {
        guardarBusqueda({
            ...busqueda, 
            [e.target.name]: e.target.value
        })
    }

    return (
        <form 
            className="col-12"
            onSubmit={ e =>{
                e.preventDefault()
                buscarRecetas(busqueda)
                guardarConsultar(true)
                } }>
            <fieldset className="text-center">
                <legend>Busca bebidas por categorias o ingredientes</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Buscar por Ingrediente"
                        onChange={readData}
                        />
                </div>
                <div className="col-md-4">
                    <select 
                        className="form-control"
                        name="categoria"
                        onChange={readData}
                        >
                        <option value="">--Selecciona Categoria</option>
                        {category.map(cate => (
                            <option 
                                key={cate.strCategory}
                                value={cate.strCategory}>
                                    {cate.strCategory}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                        />
                </div>
            </div>
        </form>
    )
}
