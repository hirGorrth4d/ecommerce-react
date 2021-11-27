import React from 'react';
import ItemContador from './ItemContador';



const ItemDetalle = ({id, name, price, imgUrl, description, stock}) => {
    

    return (
        
        <div key={id} className="cards">
                    
            <div className="card w-75">
                <img src={imgUrl} alt={name} className="card-img-top"/>
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">{description}</p>
                    <p>${price}</p>
                    <ItemContador stock={stock} id={id} />
                </div>
            </div>
        </div>
                
    )
}

export default ItemDetalle;