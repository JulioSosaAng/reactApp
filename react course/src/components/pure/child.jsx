import React from 'react';

const Child = ({ name }) => {

    function pressButton(){
        alert("Default text")
    }

    function pressButtonParams(text) {
        alert(`Text: ${text}`)
    }

    return (
        <div>
            <p onMouseOver={() => console.log("On Mouse Over")}>Child Component</p>
            <button onClick={ () => console.log('Button 1 pressed')}>
                Button 1
            </button>
            <button onClick={pressButton}>
                Button 2
            </button>
            {/* la funcion anonima previene que el evento se dispare al cargar la pagina */}
            <button onClick={ () => pressButtonParams("Hello") }>
                Button 3
            </button>
            <input placeholder='insert a text' 
            onFocus={() => console.log('input focused')}
            onChange={(e) => console.log('input changed:',e.target.value)}
            onCopy={() => console.log('copied text from input')}
            ></input>
        </div>
    );
}

export default Child;
