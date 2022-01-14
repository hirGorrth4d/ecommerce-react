import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import CartList from './CartList'

function CartListContainer(nombre, tel, email, generarOrden, handleOnChangeEmail, handleOnChangeName, handleOnChangeTel, idOrder){
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h4>Imagen</h4>
                    </Col>
                    <Col>
                        <h4>Descripción</h4>
                    </Col>
                    <Col>
                        <h4>Cantidad</h4>
                    </Col>
                    <Col>
                        <h4>Precio</h4>
                    </Col>
                    <Col>
                        
                    </Col>
                </Row>
            </Container> 
            <CartList generarOrden={generarOrden} handleOnChangeName={handleOnChangeName} nombre={nombre} handleOnChangeTel={handleOnChangeTel} tel={tel} handleOnChangeEmail={handleOnChangeEmail} email={email} idOrder={idOrder} idOrder={idOrder}/>
        </div>
    )
}

export default CartListContainer