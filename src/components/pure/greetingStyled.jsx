import React, { useState } from 'react';

// Estilos constantes

// Estilos para users loggeados
const loggedStyle = {
    color: 'blue'
}

// Estilos para users no loggeados
const unloggedStyle = {
    color: 'red',
    fontweigth: 'bold'
}

const GreetingStyled = (props) => {

    const [logged, setLogged] = useState(false);

    return (
        <div style={logged ? loggedStyle : unloggedStyle}>
            {logged ? (<h2>Hola, {props.name}</h2>) : (<h2>Porfavor logeate</h2>)}
            <button onClick={() => {
                console.log('Boton pusado')
                setLogged(!logged)
            }}>
                {logged ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default GreetingStyled;
