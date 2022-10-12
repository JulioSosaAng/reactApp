// Ejemplo de uso del Metodo WillUnMount
// de ciclo de vida en componente de clase y el hook de ciclo de vida
// en componente funcional

import React, { Component , useEffect} from 'react';

export class WillUnmount extends Component {

    componentWillUnmount(){
        console.log('Comportamiento del componente justo antes de desaparecer');
    }

   
    
    render() {
        return (
            <div>
                <h1>Did Will Unmount</h1>
            </div>
        );
    }
}

export const WillUnmountHook = () => {

    useEffect(() => {
        //aqui va vacio
        return () => {
            console.log('Comportamiento del componente justo antes de desaparecer');
        };
    }, []);

    return (
        <div>
            <h1>Will Unmount Hook</h1>
        </div>
    );
}