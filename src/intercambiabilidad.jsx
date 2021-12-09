import { useState } from "react";
import {Link} from 'react-router-dom'
import CartWidget from "./components/NavBar/CartWidget";


const InputCount= ()=> {

    return <button className="btn btn-outline-primary" onClick={()=>console.log('ir a cart') } >Ir al carrito</button>
}



const ButtonCount= ({handleInter})=> {
    return <button className="btn btn-outline-success" onClick={handleInter}>Agregar Al carrito</button>

}

const Intercambiabilidad = () => {

    const [inputType, setInputType ] = useState('button')

    const handleInter=()=>{
        setInputType('input')
    }
    
    return (
        <div>
            {
                inputType === 'button' ? 
                    <ButtonCount handleInter={handleInter} />
                : 
                <Link to="/cart"  style={{textDecoration: "none", color: "primary", fontWeight:"bold"}}>

                    <InputCount />
                </Link>
                    
            }
             {/* <Count onConfirm={addToCart} maxQuantity={itemMax} />  */}
        </div>
    )
}

export default Intercambiabilidad
