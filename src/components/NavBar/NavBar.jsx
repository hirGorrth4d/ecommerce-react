import React from 'react'
import CartWidget from './CartWidget.jsx';
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <div className="header_navbar">
                <Link to="/" style={{textDecoration: "none", color: "primary"}}><h1>FISP</h1></Link>
                <Link to="/cart"  style={{textDecoration: "none", color: "primary", fontWeight:"bold"}}>
                    <CartWidget />
                </Link>
            </div>
            <div className="navBar">
                <Link to="/categoria/telemedicina" style={{textDecoration: "none", color: "white", fontWeight: "bold"}}><p>Telemedicina</p></Link>
                <Link to="/categoria/enfermeria" style={{textDecoration: "none", color: "white", fontWeight: "bold"}}><p>Enfermeria</p></Link>
                <Link to="/categoria/dermatologia" style={{textDecoration: "none", color: "white", fontWeight: "bold"}}><p>Dermatologia</p></Link>
            </div>
        </div>
    )
}

export default NavBar;