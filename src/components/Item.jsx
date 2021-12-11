import React from 'react'
import {Link} from 'react-router-dom'

function Item({id, name, imgUrl, price, stock}) {
    return (
            <div key={id} className="cards">
                <div className="card w-75">
                    <img src={imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">${price}</p>
                        {/* <ItemContador stock={stock} id={id}/> */}
                    <Link to={`/item/${id}`}>
                        <button className="btn btn-outline-primary"> Detalle </button>
                    </Link>
                    </div>
                </div>
            </div>
    )
}

export default Item;