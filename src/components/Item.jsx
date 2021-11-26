import React from 'react'

function Item({id, name, imgUrl, price}) {
    return (
        <div key={id} className="cards">
            <div className="card w-75">
                <img src={imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">${price}</p>
                    <button className="btn btn-outline-primary">Inscribite</button>
                </div>
            </div>
        </div>
    )
}

export default Item;