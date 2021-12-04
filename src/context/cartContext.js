import React from 'react'
import {useState, createContext, useContext} from 'react'
import ItemListContainer from '../container/ItemListContainer'
import Item from '../components/Item'

const CartContext = createContext([]);

export const useCartContext =()=> useContext(CartContext)

function CartContextProvider ({children}) {
    const [cartList, setCartList] = useState([])
    const agregarProducto = (item) => {
        setCartList ([...cartList, item])
    }
    const vaciarCarrito =()=> {
        setCartList([])
    }
    return (
        <CartContext.Provider value={{
            cartList,
            agregarProducto,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;