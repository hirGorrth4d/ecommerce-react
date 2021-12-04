import React from 'react';
import {useEffect, useState} from 'react';  
import {useParams} from 'react-router-dom';
import ItemDetalle from '../components/ItemDetalle';
import Items from '../items';
import {Container, Row, Col} from 'react-bootstrap'


function ItemDetalleContainer() {

    const {itemIdParams}= useParams(); 
    
      
    const [loading, setLoading] = useState(true)
    const [productoUno, setProductUno] = useState ([])
    
    
    
    useEffect(()=>{
      const getFetchUno = new Promise((aceptada, rechazada)=> {
        setTimeout(()=>{
          aceptada(Items.find(producto => producto.id ===Number(itemIdParams)))
        }, 3000)
      
      })
      getFetchUno
      .then(data => {
          console.log(Items)
          setProductUno(data)
          console.log(data)
        })
      .catch(err => console.log(err))
      // .then(resp => console.log(resp))
      .finally(()=> setLoading(false))
      return () => {
        console.log ('clean')
      }
    }, [itemIdParams])

    return (
        <div className="cards col-lg-12">
           {loading? <h1>Cargando</h1> : <ItemDetalle id={productoUno.id} name={productoUno.name} price={productoUno.price} imgUrl={productoUno.imgUrl} description={productoUno.description} categoria={productoUno.categoria} stock={productoUno.stock} />}
                               
        </div>
    )

}

export default ItemDetalleContainer;