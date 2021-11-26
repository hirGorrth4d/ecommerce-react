import React from 'react';
import ItemList from '../components/ItemList';
import { useEffect, useState } from 'react';
import Items from '../items';








function ItemListContainer(props) {
    const getFetch = new Promise((aceptada, rechazada)=> {
        setTimeout(()=>{
          aceptada(Items)
        }, 2000)
      
      })
      
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState ([])
    
    
    
    useEffect(()=>{
      getFetch
      .then(data => {
          console.log(Items)
          setProducts(data)
          console.log(data)
        })
      .catch(err => console.log(err))
      // .then(resp => console.log(resp))
      .finally(()=> setLoading(false))
      return () => {
        console.log ('clean')
      }
    }, [])

    return (
        <div>
            <h1>{props.greeting}</h1>
            <ItemList loading={loading} products={products}/>
        </div>
    )
}

export default ItemListContainer;