import React from 'react'
import {useState, createContext, useContext} from 'react'

const CartContext = createContext([]);

export const useCartContext =()=> useContext(CartContext)

function CartContextProvider ({children}) {
    const [cartList, setCartList] = useState([])
    const agregarProducto = (Items) => {
        const index = cartList.findIndex(i => i.id === Items.id)
        console.log(index)
        console.log(cartList)
        if (index > -1){
            const oldQy = cartList[index].cantidad;

            cartList.splice(index, 1)
            setCartList([...cartList, {...Items, cantidad: Items.cantidad + oldQy}])
        }else {
            setCartList ([...cartList, Items])

        }
    }
    
    const precioTotal = ()=> {
        return cartList.reduce((acum, valor)=>(acum+ (valor.cantidad*valor.price)),0)
    }
    const cantidadItem = ()=>{
        return cartList.reduce ((acum, Items) => acum = acum + Items.cantidad, 0)
    }
    const vaciarCarrito =()=> {
        setCartList([])
    }
    return (
        <CartContext.Provider value={{
            cartList,
            agregarProducto,
            vaciarCarrito,
            precioTotal,
            cantidadItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;