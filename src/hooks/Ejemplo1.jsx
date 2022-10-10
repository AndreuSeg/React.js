import React, { useState } from 'react';

const Ejemplo1 = () => {

    const valorInicial = 0;

    const personaInicial = {
        name: "Andreu",
        email: "as@gmail.com"
    }

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    function incrementarContador() {
        setContador(contador + 1);
    }

    function actualizarPersona() {
        setPersona(
            {
                name: "Miquel",
                email: "ms@gmail.com"
            }
        )
    }

    return (
        <div>
            <h2>Ejemplo de useState:</h2>
            <h3>Contador: { contador }</h3>
            <button onClick={incrementarContador}>Incrementar contador</button>
            <h3>Persona: { persona.name }, { persona.email }</h3>
            <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    );
}

export default Ejemplo1;
