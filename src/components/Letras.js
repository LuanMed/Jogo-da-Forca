import React from "react";

export default function Letras(props) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const {className, disableButton, setSelectedLetter} = props;
    return (
        <div className="letters">
            {alphabet.map(l => <Letra key={l} letter={l} className={className} disableButton={disableButton} setSelectedLetter={setSelectedLetter}/>)}
        </div>
    );
}

function Letra(props) {
    const {letter, className, disableButton, setSelectedLetter} = props;

    function selectLetter(){
        setSelectedLetter(letter);
        //console.log(selectedLetter);
        //console.log(setSelectedLetter);
    }
    
    return (
        <button disabled={disableButton} onClick={() => selectLetter()} className={`each-letter ${className}`}>
            {letter.toUpperCase()}
        </button>
    )

}