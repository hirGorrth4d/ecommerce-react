import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './container/ItemListContainer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetalleContainer from './container/ItemDetalleContainer';





function App() {


  
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route path="categoria/:catIdParams" element={<ItemListContainer />}/>
          <Route path="/item/:itemIdParams" element={<ItemDetalleContainer />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
