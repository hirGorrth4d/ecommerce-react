import React from 'react';
import ItemContador from './ItemContador';
import { useCartContext } from '../context/cartContext';
import { useState } from 'react';
import {Link} from 'react-router-dom'







const ItemDetalle = ({id, name, price, imgUrl, description, stock}) => {
    const [count, setCount] = useState(0);

    const {cartList, agregarProducto} = useCartContext();

    const InputCount= ()=> {

        return <button className="btn btn-outline-primary">Ir al carrito</button>
    }
    console.log(cartList)
    
    
    
    const ButtonCount= ()=> {
        return <button className="btn btn-outline-success" onClick={onAdd}  >Agregar Al carrito</button>
    
    }
    
   


    function onAdd(){
        setCount(count)
        agregarProducto({id, name, price, imgUrl, cantidad: count})
        setInputType("cart")

    }

    const [inputType, setInputType ] = useState('button')

    

    return (
        
        <div key={id} className="cards">
                    
            <div className="card w-50" style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
                <img src={imgUrl} alt={name} className="card-img-top" style={{display:"flex", height:"80%", width:"80%"}}/>
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">{description}</p>
                    <p>${price}</p>
                    {/* <button onClick={()=>onAdd(3)} className="btn btn-outline-primary">Agregar al carrito</button> */}
                    <ItemContador stock={stock} id={id} restar={()=> setCount(count -1)} sumar={()=> setCount(count+1)} count={count} />
                    {
                        inputType === 'button' ? 
                            <ButtonCount  />
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