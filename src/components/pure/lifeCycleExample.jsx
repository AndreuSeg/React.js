import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LifeCycleExample extends Component {

    constructor(props) {
        super(props)
        console.log("Instanciacion del componente")
    };

    componentDidMount() {
        console.log("El componente esta montado")
    };

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Se deberiar actualizar el componenete?")
    };

    componentDidUpdate(prevProps, prevState) {
        console.log("Se ha actualizado el componente")
    };

    componentWillUnmount() {
        console.log("Va a desaparecer el componente")
    };

    render() {
        return (
            <div>
                
            </div>
        );
    }
}


LifeCycleExample.propTypes = {

};


export default LifeCycleExample;
