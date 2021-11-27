import React from 'react';
import ItemList from '../components/ItemList';
import { useEffect, useState } from 'react';
import Items from '../items';
import {useParams} from 'react-router-dom'

function ItemListContainer(props) {
    
      
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState ([])
    
    const {catIdParams} =useParams();
    
    useEffect(()=>{
      const getFetch = new Promise((aceptada, rechazada)=> {
        setTimeout(()=>{
          aceptada(Items)
        }, 2000)
      
      })
      if (catIdParams){
        getFetch
        .then((Items)=>{
          setProducts(Items.filter(producto=>producto.categoria === catIdParams))
        })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
      } else {
        getFetch.then((Items) => {
          setProducts(Items);
        })
        .finally(()=>{
          setLoading(false);
        })
      }
    }, [catIdParams])

    return (
        <div>
            
            <ItemList loading={loading} products={products}/>
        </div>
    )
}

export default ItemListContainer;