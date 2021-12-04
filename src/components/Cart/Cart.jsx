import { useCartContext } from "../../context/cartContext";
import Items from "../../items";
import {Container, Row, Col} from 'react-bootstrap'

function Cart(Items){
    const {cartList, vaciarCarrito} = useCartContext();
    console.log(cartList);

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
                </Row>
            </Container>   
            {cartList.map(Items => <div key={Items.id}>
                                        <Container>

                                            <Row xs={4} lg={4} xl={8}>
                                                
                                                <Col>
                                                    <img src={Items.foto} alt={Items.item} className="card-img-top"/>
                                                </Col>
                                                <Col  className="align-self-center">
                                                    {Items.item}
                                                </Col>
                                                <Col  className="align-self-center">
                                                    {Items.cantidad}
                                                </Col>
                                                <Col className="align-self-center">
                                                    ${Items.precio}
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>)}
            <button onClick={()=> vaciarCarrito()} className="btn btn-outline-primary">Vaciar Carrito</button>
            
        </div>

    )
}

export default Cart;