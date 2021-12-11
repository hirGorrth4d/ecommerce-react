import { useCartContext } from "../../context/cartContext";
import {Container, Row, Col} from 'react-bootstrap'
import getFirestore from '../../firebase/firebase';
import {useState} from 'react'
import firebase from 'firebase'
import 'firebase/firestore'


function Cart(Items){
    const [idOrder, setIdOrder]= useState('')

    const {cartList, vaciarCarrito, precioTotal} = useCartContext();



    const generarOrden = (e)=> {
        e.preventDefault();
        const orden = {}

        orden.date = firebase.firestore.Timestamp.fromDate(new Date());

        orden.buyer = {nombre: 'Martin', email: 'cm@gmail', tel: '12345689'}
        orden.total = precioTotal();

        orden.items = cartList.map(Items => {
            const id= Items.id
            const nombre= Items.nombre
            const precio= Items.precio*Items.cantidad
            return {id: id ,nombre: nombre, precio: precio}
        })

        const db = getFirestore();
        db.collection('orders').add(orden)
        .then(resp => setIdOrder(resp.id))


        const itemsToUpdate = db.collection('items').where(
            firebase.firestore.FieldPath.documentId() , 'in', cartList.map(i=> i.id)
        )
    
        const batch = db.batch();
        itemsToUpdate.get()

        .then( collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - cartList.find(item => item.id === docSnapshot.id).cantidad
                })
            })
    
            batch.commit().then(res =>{
                console.log('se actualizo')
            })
        })
    
        
          console.log('verificar cupon')
          console.log(orden)

    }

    
    return (
        <div>
            <section>
                {idOrder!== ''|| <label>El id de su orden es : {idOrder}</label>}
            </section>

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
                                                    {Items.name}
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
            {/* {`Precio total: ${precioTotal()}`} */}
            <form onSubmit={generarOrden}>
                <input type='text' name='name' placeholder='name'/>
                <input type='text' name='phone'placeholder='tel' />
                <input type='email' name='email'placeholder='email'/>
                <button className="btn btn-outline-primary">Enviar Orden</button>
            </form>

            
        </div>

    )
}

export default Cart;