import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './container/ItemListContainer.jsx';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetalleContainer from './container/ItemDetalleContainer';
import CartContextProvider from './context/cartContext';
import Cart from './components/Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {


  
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          
            <NavBar />
            <Routes>
              <Route exact path="/" element={<ItemListContainer />} />
              <Route path="categoria/:catIdParams" element={<ItemListContainer />}/>
              <Route path="/item/:itemIdParams" element={<ItemDetalleContainer />}/>
              <Route path="/cart" element={<Cart />} />
            </Routes>
        
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
