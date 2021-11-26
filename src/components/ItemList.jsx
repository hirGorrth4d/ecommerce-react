import React from 'react'
import Item from './Item';

function ItemList(props) {
    return (<div className="cards">
        {props.loading ? <h1> Cargando</h1> : props.products.map(prod =><Item key={prod.id} id={prod.id} name={prod.name} imgUrl={prod.imgUrl} price={prod.price} />)}
    </div>
    )
}

export default ItemList;