// Ejemplo de componente de tipo clase que dispone de los 
// metodos de ciclo de vida

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifeCycleExample extends Component {
    constructor (props) {
        super (props)
        console.log('CONSTRUCTOR: cuando se instancia el componente')
    }

    componentWillMount() {
        console.log('WILLMOUNT: Antes del montaje del componente')
    }

    componentDidMount(){
        console.log('DIDMOUNT: Justo al montaje del componente, antes de renderizarlo')
    }

    componentWillReceiveProps(nextProps) {
        console.log('WILLRECIEVEPROPS: Si el componente va a recibir nuevas props')
    }

    shouldComponentUpdate(nextProps, nextState) {
            // Controla si el componente debe o no actualizarse, 
            // debe ser booleano
    }

    componentWillUpdate(){
        console.log('WILLUPDATE: Justo antes de actualizarse')
    }

    componentDidUpdate(){
        console.log('DIDUPDATE: Justo despues de actualizarse')
    }

    componentWillUnmount(){
        console.log('WILLUNMOUNT: Justo antes de desaparecer');
    }


}

