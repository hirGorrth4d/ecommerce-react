import { useCartContext } from "../../context/cartContext";
import {Container, Row, Col} from 'react-bootstrap'
import {useState} from 'react'
import firebase from 'firebase'
import 'firebase/firestore'
import getFirestore from '../../firebase/firebase';


function Cart(Items){
    const [idOrder, setIdOrder]= useState('')

    const {cartList, vaciarCarrito, precioTotal} = useCartContext();



    const generarOrden = (e)=> {
        e.preventDefault();
        const orden = {}

        orden.date = firebase.firestore.Timestamp.fromDate(new Date());

        orden.buyer = {nombre: "asd", email: "asd@gs", tel: "45456"}
        orden.total = precioTotal();

        orden.items = cartList.map(Items => {

            return {id: Items.id ,nombre: Items.nombre, precio: Items.precio*Items.cantidad}
        })

        const db = getFirestore()
        db.collection('orden').add(orden)
        .then(resp => setIdOrder(resp.id))

        // db.collection("ordenes").doc('orden').set(orden)
        // .then(resp=> setIdOrder(resp.id))
        // const itemsToUpdate = db.collection('items').where(
        //     firebase.firestore.FieldPath.documentId() , 'in', cartList.map(i=> i.id)
        // )
    
        // const batch = db.batch();
        // itemsToUpdate.get()

        // .then( collection=>{
        //     collection.docs.forEach(docSnapshot => {
        //         batch.update(docSnapshot.ref, {
        //             stock: docSnapshot.data().stock - cartList.find(item => item.id === docSnapshot.id).cantidad
        //         })
        //     })
    
        //     batch.commit().then(resp =>{
        //         console.log('se actualizo')
        //     })
        // })
    
        
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
                                            </Row>
                                        </Container>
                                    </div>)}
            <button onClick={()=> vaciarCarrito()} className="btn btn-outline-primary">Vaciar Carrito</button>
            {`Precio total: ${precioTotal()}`}
            <form onSubmit={generarOrden}>
                {/* <input type='text' name='name' placeholder='name' value={formData.name}/>
                <input type='text' name='phone'placeholder='tel' value={formData.tel} />
                <input type='email' name='email'placeholder='email' value={formData.email}/> */}
                <button className="btn btn-outline-primary">Enviar Orden</button>
            </form>

            
        </div>

    )
}

export default Cart;