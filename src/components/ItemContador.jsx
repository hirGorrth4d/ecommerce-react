import React from 'react';

export default function ItemContador({ onAdd, sumar, restar, count}) {

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