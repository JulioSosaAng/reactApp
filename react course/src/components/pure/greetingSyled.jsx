import React, { useState } from 'react';

//usuario logueado
const loggedStyle = {
    color: 'cyan',
    fontWeight: 'bold'
}

//usuario no logueado
const unloggedStyle = {
    color: 'crimson',
    fontWeight: 'bold'
}

const GreetingSyled = (props) => {

    //generamos un estado para el componente y asi controlar
    //si el usuario esta o no logueado

    const [logged, setLogged] = useState(false);

    const greetingUser = () => (<p>Hola, { props.name }</p>);
    const pleaseLogin = () => (<p>Please Login</p>);

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
        { logged ? greetingUser() : pleaseLogin() }
            
            <button onClick={() => {
                console.log('Boton pulsado');
                setLogged(!logged);
            }}>
                { logged ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default GreetingSyled;
