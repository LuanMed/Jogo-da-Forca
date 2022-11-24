import React from "react";

export default function Letras(props) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const { className, setClassName, disableButton, setDisableButton, setSelectedLetter,
        clicked, setClicked, wordArray, setWordArray, ocultArray, setOcultArray,
        selectedLetter, errorCounter, setErrorCounter, setColor, word
    } = props;

    function selectLetter(letter) {
        let error = 0;
        setSelectedLetter(letter);
        const newClicked = [...clicked, letter];
        setClicked(newClicked);
        console.log("newclicked:" + newClicked)
        //console.log(selectedLetter);
        //console.log(setSelectedLetter);

        for (let i = 0; i < wordArray.length; i++) {
            if (wordArray[i] === letter) {
                ocultArray[i] = letter
                let novoArray = [...ocultArray];
            }
        }
        if (!wordArray.includes(letter)) {
            error = errorCounter + 1
            setErrorCounter(error);
            console.log(error);
        }
        if (error === 6) {
            setDisableButton(true);
            setClassName("letter-unselected");
            setColor('red')
        }
    }

    return (
        <div className="letters">
            {alphabet.map(letter =>
                <button
                    key={letter}
                    disabled={clicked.includes(letter) ? true : disableButton}
                    onClick={() => selectLetter(letter)}
                    className={`each-letter ${className} ${clicked.includes(letter) ? "selected" : ""}`}
                >
                    {letter.toUpperCase()}
                </button>
            )}
        </div>
    );
}