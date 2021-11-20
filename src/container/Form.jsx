import React from 'react'


function Form ({title, children, boton}){
    return (
        <>
            <h2>{title}</h2>
            {children}
            {boton ({buttonText:'boton'})}
        </>
    )
}

export default Form