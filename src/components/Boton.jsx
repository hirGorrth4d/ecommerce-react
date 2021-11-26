import React from 'react'

const Boton = ({buttonText='Cargar productos'}) =>{
    console.log('Boton');
    return(
        <>
            <button>{buttonText}</button>
        </>
    )
}

export default Boton;