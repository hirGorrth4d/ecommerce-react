import './App.css';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './container/ItemListContainer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Boton from './container/Boton';
import Form from './container/Form';
import Items from './container/Item';





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
      {/* {loading ? <h1> Cargando</h1> : Items.map(prod =><div key={prod.id} className="cards">
                                                          <div className="card w-25">
                                                            <img src={prod.imgUrl} className="card-img-top" alt="..." />
                                                            <div className="card-body">
                                                              <h5 className="card-title">{prod.name}</h5>
                                                              <p className="card-text">{prod.price}</p>
                                                              
                                                            </div>
                                                          </div>  
                                                        </div>
      )}

       */}

      {/* <Form boton={Boton} /> */}
      {count}
      {}
      <button onClick={handlerClick}> Sumar productos</button>
      <button onClick={()=> setBool (!bool)}>click</button>
        
        
    </div>
  );
}

export default App;
