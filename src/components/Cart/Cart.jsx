import { useCartContext } from "../../context/cartContext";
import {Container, Row, Col} from 'react-bootstrap'
import {useState} from 'react'
import firebase from 'firebase'
import 'firebase/firestore'
import getFirestore from '../../firebase/firebase';
import {Link} from 'react-router-dom'


function Cart(Items){
    const [idOrder, setIdOrder]= useState('')

    const {cartList, vaciarCarrito, precioTotal, eliminarProducto} = useCartContext();

    const [nombre, setNombre] = useState ('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')

    const handleOnChangeName = (e) =>{
        setNombre(e.target.value);
    }
    const handleOnChangeTel = (e) =>{
        setTel(e.target.value);
    }

    const handleOnChangeEmail = (e) =>{
        setEmail(e.target.value);
    }


    const generarOrden = (e)=> {
        e.preventDefault();

        
        const orden = {}

        orden.date = firebase.firestore.Timestamp.fromDate(new Date());

        orden.buyer = {nombre, email, tel}
        orden.total = precioTotal();

        orden.items = cartList.map(Items => {

            return {id: Items.id, nombre: Items.name, precio: Items.price*Items.cantidad}
        })

        const db = getFirestore()
        const orders = db.collection("orders");
        orders.add(orden)
        .then(({id}) =>{
            setIdOrder(id);
        }).catch(err => console.log(err))
        .finally(()=> console.log('cargo'))

          console.log('verificar cupon')
          console.log(orden)
          vaciarCarrito()
    }

    
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
            {cartList == '' ? <Link to="/" style={{textDecoration: "none"}}><h2 style={{margin:"50px"}}>No hay items en el carrito</h2><h2>Volver al Inicio</h2></Link>
            
            
            
            : cartList.map(Items => <div key={Items.id}>
                
                                        <Container>

                                            <Row xs={4} lg={5} xl={8}>
                                                
                                                <Col>
                                                    <img src={Items.imgUrl} alt={Items.item} className="card-img-top"/>
                                                </Col>
                                                <Col  className="align-self-center">
                                                    {Items.name}
                                                </Col>
                                                <Col  className="align-self-center">
                                                    {Items.cantidad}
                                                </Col>
                                                <Col className="align-self-center">
                                                    ${Items.price}
                                                </Col>
                                                <Col className="align-self-center">
                                                    <button className="btn btn-outline-primary" onClick={()=> eliminarProducto(Items)}> X </button>
                                                </Col>
                                            </Row>
                                        </Container>
                                        
                                    </div>)}
                                    <button onClick={()=> vaciarCarrito()} className="btn btn-outline-primary">Vaciar Carrito</button>
                                        <div style={{padding:"40px", margin:"100", display:"flex", justifyContent:"center", fontWeight:"bold"}}>
                                            {`Precio total: $ ${precioTotal()}`}
                                        </div>
                                        <form onSubmit={generarOrden} style={{display:"flex", flexDirection:"column", width:"100%", alignItems:"center"}}>
                                            <input onChange={handleOnChangeName} type='text' name='name' placeholder='Name' value={nombre} style={{margin:"10px"}}/>
                                            <input onChange={handleOnChangeTel} type='text' name='phone'placeholder='Teléfono' value={tel} style={{margin:"10px"}}/>
                                            <input onChange={handleOnChangeEmail} type='email' name='email'placeholder='Email' value={email} style={{margin:"10px"}}/>
                                            <button className="btn btn-outline-primary">Enviar Orden</button>
                                        </form>

                                        {idOrder == '' ? <h2 style={{margin:"40px"}}>Todavia no generaste tu orden</h2> : <h1>Tu Id de compra es: {idOrder}</h1> }
        </div>

    )
}

export default Cart;