import React, { useState, useContext } from 'react'

/* Incializar estado vacio que se va a rellenar con los datos del padre */
const miContexto = React.createContext(null);

function Componente1() {
    
    const state = useContext(miContexto);

    return (
        <div>
            <h1>El Token es: {state.token}</h1>
            {/* Pintamos el componente 2 */}
            <Componente2></Componente2>
        </div>
    )
}


const Componente2 = () => {

    const state = useContext(miContexto)

    return (
        <div>
            <h2>La sesion es: {state.session}</h2>
        </div>
    );
}


export default function Ejemplo3() {

    const estadoInicial = {
        token: "123456789",
        session: 1
    }

    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSession() {
        setSessionData(
            {
                token: "JWT12345689",
                session: sessionData.session + 1
            }
        )
    }

    return (
        <div>
            <miContexto.Provider value={sessionData}>
                {/* Todo lo que esta aqui dentro puede leer los datos de sessionData, a demas se pueden actualizar. */}
                <Componente1></Componente1>
                <button onClick={actualizarSession}>Actualizar sesión</button>
            </miContexto.Provider>
        </div>
    )
}
