import React from 'react'
import CartWidget from './CartWidget.jsx';

function NavBar() {
    return (
        <div>
            <div className="header_navbar">
                <h1>FISP</h1>
                <CartWidget />
            </div>
            <div className="navBar">
                <p>Cursos de Telemedicina</p>
                <p>Cursos de Enfermeria</p>
                <p>Cursos de Criocirugia</p>
            </div>
        </div>
    )
}

export default NavBar;