import React from 'react';
import ItemContador from './ItemContador';
import { useCartContext } from '../context/cartContext';
import { useState } from 'react';
import {Link} from 'react-router-dom'







const ItemDetalle = ({id, name, price, imgUrl, description, stock}) => {
    const [count, setCount] = useState(1);

    const {cartList, agregarProducto} = useCartContext();

    const InputCount= ()=> {

        return <button className="btn btn-outline-primary" onClick={()=>onAdd(3)}>Ir al carrito</button>
    }
    console.log(cartList)
    
    
    
    const ButtonCount= ({handleClick})=> {
        return <button className="btn btn-outline-success" onClick={handleClick}  >Agregar Al carrito</button>
    
    }
    
   


    function onAdd(cant){
        setCount(cant)
        agregarProducto({...agregarProducto, cantidad: cant})

    }
    function handleClick (){
        onAdd(count)
    }
    const [inputType, setInputType ] = useState('button')

    

    return (
        
        <div key={id} className="cards">
                    
            <div className="card w-75">
                <img src={imgUrl} alt={name} className="card-img-top"/>
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">{description}</p>
                    <p>${price}</p>
                    {/* <button onClick={()=>onAdd(3)} className="btn btn-outline-primary">Agregar al carrito</button> */}
                    <ItemContador stock={stock} id={id} />
                    {
                        inputType === 'button' ? 
                            <ButtonCount handleClick={handleClick} />
                        : 
                        <Link to="/cart"  style={{textDecoration: "none", color: "primary", fontWeight:"bold"}}>
                            <InputCount />
                        </Link>
                            
                    }
                </div>
            </div>
        </div>
                
    )
}

export default ItemDetalle;