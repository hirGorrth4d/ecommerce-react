import React from 'react'
import ItemContador from './ItemContador'
import {Link} from 'react-router-dom'

function Item({id, name, imgUrl, price, stock}) {
    return (
        <div key={id} className="cards">
            <div className="card w-75">
                <Link to={`/item/${id}`}>
                    <img src={imgUrl} className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">${price}</p>
                    <ItemContador stock={stock} id={id}/>
                </div>
            </div>
        </div>
    )
}

export default Item;