import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom'
import { useCartContext } from '../context/cartContext';




export default function ItemContador({id, name, price, imgUrl, description, stock}) {

    const [count, setCount] =useState(0);


    const sumarContador = () => {
        if (count < stock){
            setCount(count + 1);

        } else {
            alert ('Ya te inscribiste a este curso');
        }
    }

    const restarContador = () => {
        if (count > 1){
            setCount(count -1)
        } else {
            alert('Eliminar el producto?');
            setCount(0);

        }
    }

    const agregarCarrito = () =>{

    }


    return (
        <div style={
            {display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            }
        }>
            <button onClick={sumarContador} className="btn btn-outline-primary">+</button>
            <p>{count}</p>
            <button onClick={restarContador} className="btn btn-outline-primary">-</button>
            
        </div>
    )

}