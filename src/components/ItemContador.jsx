import React from 'react';
import {useState} from 'react';




export default function ItemContador(props) {

    const [count, setCount] =useState(0);

    const sumarContador = () => {
        if (count < props.stock){
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
            <button onClick={agregarCarrito} className="btn btn-outline-primary">Reservá</button>
        </div>
    )

}