import React from 'react'

import './App.css';
import './bootstrap.min.css'
import { Header } from './components/Header';
import { Formulario } from './components/Formulario';
import { ListaReceta } from './components/ListaReceta';

import Categoria from './context/Categoria'
import Recetas from './context/Recetas'
import Modal from './context/Modal'

function App() {
  return (
    <Categoria>
      <Recetas>
        <Modal>
          <Header /> 

          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>

            <ListaReceta />
            
          </div> 
        </Modal>
      </Recetas>
    </Categoria>
  );
}

export default App;
