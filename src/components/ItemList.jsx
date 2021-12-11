import React from 'react'
import Item from './Item';
import {Container, Row} from 'react-bootstrap'

function ItemList(props) {
    return (
    <div className="cards col-lg-12  ">
        <Container  className="row">
            <Row xs={2} lg={4} className="justify-content-lg-center">
                {props.loading ? <h1> Cargando</h1> : props.products.map(prod =><Item key={prod.id} id={prod.id} name={prod.name} imgUrl={prod.imgUrl} price={prod.price} stock={prod.stock} item={prod.item}/>)}
            </Row>
        </Container>
    </div>
    )
}

export default ItemList;