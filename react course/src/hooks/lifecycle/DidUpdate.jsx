// Ejemplo de uso del Metodo DidUpdate
// de ciclo de vida en componente de clase y el hook de ciclo de vida
// en componente funcional

import React, { Component , useEffect } from 'react';

export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log('Comportamiento cuando el componente recibe nuevas props o cambio en su estado privado');
    }

    render() {
        return (
            <div>
                <h1>Did Update</h1>
            </div>
        );
    }
}



export const DidUpdateHook = () => {

useEffect(() => {
    console.log('Comportamiento cuando el componente recibe nuevas props o cambio en su estado privado');
});


    return (
        <div>
            <h1>Did Update Hook</h1>
        </div>
    );
}





