import React from 'react';
import {useEffect, useState} from 'react';  
import {useParams} from 'react-router-dom';
import ItemDetalle from '../components/ItemDetalle';
import getFirestore from '../firebase/firebase';



function ItemDetalleContainer() {

    const {itemIdParams}= useParams(); 
    
      
    const [loading, setLoading] = useState(true)
    const [productoUno, setProductUno] = useState ([])
    
    
    
    useEffect(()=>{
      const db = getFirestore();
      db.collection ('items'). doc(itemIdParams).get()
      .then(resp=> {
        setProductUno({id: resp.id, ...resp.data()} )
      })
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    },[itemIdParams])

    return (
        <div className="cards col-lg-12">
           {loading? <h1>Cargando</h1> : <ItemDetalle id={productoUno.id} name={productoUno.name} price={productoUno.price} imgUrl={productoUno.imgUrl} description={productoUno.description} categoria={productoUno.categoria} stock={productoUno.stock} />}
                               
        </div>
    )

}

export default ItemDetalleContainer;