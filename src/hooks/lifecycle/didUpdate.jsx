import React, { Component, useEffect } from 'react'

export class didUpdate extends Component {

    componentDidUpdate() {
        console.log("Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado.")
    }

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        )
    }
}

export const DidUpdateHook = () => {

    useEffect(() => {
        console.log("Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado.")
    }); // Sin corchetes se ejecuta todas las veces

    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}