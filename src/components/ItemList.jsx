import React from 'react'
import Item from './Item';

function ItemList(props) {
    return (<div className="cards col-lg-12  ">
        {props.loading ? <h1> Cargando</h1> : props.products.map(prod =><Item key={prod.id} id={prod.id} name={prod.name} imgUrl={prod.imgUrl} price={prod.price} stock={prod.stock} item={prod.item} />)}
    </div>
    )
}

export default ItemList;