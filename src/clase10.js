import React, {createContext, useState} from 'react'

const ChismeContext = createContext();

const ChismeProvider = ({children})=> {

    const[chisme, setChisme] = useState('no hay chisme todavia');

    const contarChisme = text => setChisme(text);

    return (<ChismeContext.Provider value={{chisme,contarChisme}}>
        {children}
    </ChismeContext.Provider>)
}

export const clase10 =() =>{
    return <ChismeProvider>
        <AbuelaContainer />
    </ChismeProvider>
}

const AbuelaContainer = ()=>{
    const {contarChisme} = useContext(ChismeContext);

    return <div>
        <button onCLick={e=> contarChisme('la abuela hizo milanesas')}>Contar chisme</button>
        <Hija/>
    </div>
}