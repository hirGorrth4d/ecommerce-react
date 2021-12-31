import React from 'react';
import ShoppingCart from '../img/shopping-cart.png';
import {Badge} from 'react-bootstrap'
import { useCartContext } from "../../context/cartContext";

function CartWidget(Items) {

    const {cartList, cantidadItem} = useCartContext();

    return (
        <div>
            <div style={{display:"flex", alignItems:"center"}} >
                <img src={ShoppingCart} alt="imagen de carrito" className="carrito_logo" style={{margin:"5px"}}/>Tu Carrito
                {cartList  == ''? <Badge bg="danger" style={{margin:"5px", display:"none"}} ></Badge> : <Badge bg="danger" style={{margin:"5px"}} >{cantidadItem()}</Badge>}
            </div>
        </div>
    )
}
export default CartWidget;