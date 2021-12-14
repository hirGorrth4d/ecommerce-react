import React from 'react';
import {useState} from 'react';


export default function ItemContador({ onAdd, sumar, restar, count}) {

    // const [count, setCount] =useState(0);


    // const sumarContador = () => {
    //     if (count < stock){
    //         setCount(count + 1);

    //     } else {
    //         alert ('Ya te inscribiste a este curso');
    //     }
    // }

    // const restarContador = () => {
    //     if (count > 1){
    //         setCount(count -1)
    //     } else {
    //         alert('Eliminar el producto?');
    //         setCount(0);

    //     }
    // }

    

    return (
        <div style={
            {display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            }
        }>
            <button onClick={sumar} className="btn btn-outline-primary">+</button>
            <p>{count}</p>
            <button onClick={restar} className="btn btn-outline-primary">-</button>
            
        </div>
    )

}