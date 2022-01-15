import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

function CartListContainer(nombre, tel, email){
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
        </div>
    )
}

export default CartListContainer