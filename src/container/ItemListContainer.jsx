import React from 'react';
import ItemList from '../components/ItemList';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import getFirestore from '../firebase/firebase';



function ItemListContainer(props) {
    
      
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState ([])
    
    const {catIdParams} =useParams();

    
    
    useEffect(()=>{
      const dbQuery = getFirestore();

      if (catIdParams){
        dbQuery.collection('items').where('categoria', '==', catIdParams).get()
        .then(data => setProducts(data.docs.map(item => ({"id": item.id, ...item.data()} ) ) ) )
        .catch(err=> console.log(err))
        .finally (()=> setLoading(false)  )

      } else {
        dbQuery.collection('items').get()
        .then(data => setProducts(data.docs.map(item =>({id: item.id, ...item.data()} )) ))
        .catch(err=> console.log(err))
        .finally(()=> setLoading (false))
      }
    }, [catIdParams])

    return (
        <div>
            
            <ItemList loading={loading} products={products}/>
        </div>
    )
}

export default ItemListContainer;