import './App.css';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './container/ItemListContainer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Boton from './components/Boton';
import Form from './components/Form';
import Items from './components/Item';





function App() {


  
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Hola, Bienvenidos a mi tienda" />

    </div>
  );
}

export default App;
