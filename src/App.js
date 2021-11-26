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

  const [bool, setBool] = useState(true)

  const [count, setCount] = useState(0);
  const [lastClickAt, setLastClickAt] = useState(null);


  const handlerClick =()=>{
    setCount(count + 1);
    setLastClickAt(new Date().toISOString());
  }
  console.log(lastClickAt);
  
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Hola, Bienvenidos a mi tienda" />
      {/* <Form boton={Boton} /> */}
      {count}
      {}
      <button onClick={handlerClick}> Sumar productos</button>
      <button onClick={()=> setBool (!bool)}>click</button>
        
        
    </div>
  );
}

export default App;
