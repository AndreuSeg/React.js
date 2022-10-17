// Ejemplo de uso de ciclo de vida del metodo en clase de didMount()

import React, { Component, useEffect } from 'react'

export class didMount extends Component {

    // Componente de clase se usa DidMount
    componentDidMount() {
        console.log("Comportamiento antes de que se renderize")
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        )
    }
}


export const DidMountHook = () => {

    // Componente de funcion se usa useEffect, deando corchetes vacios.
    useEffect(() => {
        console.log("Comportamiento antes de que se renderize");
    }, []) // Con corchetes vacios se ejecuta una vez.

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}