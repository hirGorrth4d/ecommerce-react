import React from 'react';
import ShoppingCart from '../img/shopping-cart.png';


function CartWidget() {
    return (
        <div>
            <div>
                <img src={ShoppingCart} alt="imagen de carrito" className="carrito_logo"/>Tu Carrito
                
            </div>
        </div>
    )
}
export default CartWidget;