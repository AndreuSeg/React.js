import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Referencia con useRef() para asociar una variable con un elemento del DOM
    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1 + 1)
    }

    function incrementar2() {
        setContador2(contador2 + 1)
    }

    // Caso 1: Ejecutar siempre un snnipet de codigo
    // useEfect
    // useEffect(() => {
    //     console.log("Cambio en el estado del componente");
    //     console.log("Mostrando la Referencia a elemnto del DOM"),
    //     console.log(miRef);
    // })
    

    // Caso 2: Ejecutar solo cuando cambio contador 1 o contador 2
    // useEfect
    useEffect(() => {
        console.log("Cambio en el estado del componente");
        console.log("Mostrando la Referencia a elemnto del DOM");
        console.log(miRef);
    }, [contador1, contador2]);

    return (
        <div>
            <h2>Ejemplo de useState, useRef y useEfect</h2>
            <h3>Contador 1: { contador1 }</h3>
            <h3>Contador 2: { contador2 }</h3>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
            <button onClick={incrementar1}>Incrementar contador 1</button>
            <button onClick={incrementar2}>Incrementar contador 2</button>
        </div>
    );
}

export default Ejemplo2;
