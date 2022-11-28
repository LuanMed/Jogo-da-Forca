import React from "react";
import forca1 from '../assets/forca1.png';
import forca2 from '../assets/forca2.png';
import forca3 from '../assets/forca3.png';
import forca4 from '../assets/forca4.png';
import forca5 from '../assets/forca5.png';
import forca6 from '../assets/forca6.png';

export default function Letras(props) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const {
        className, setClassName, disableButton, setDisableButton, setSelectedLetter, clicked, setClicked, wordArray,
        setWordArray, ocultArray, setOcultArray, errorCounter, setErrorCounter, setColor, setCorrectAnswer, setCurrentImage
    } = props;

    function selectLetter(letter) {
        let error = 0;
        setSelectedLetter(letter);
        const newClicked = [...clicked, letter];
        setClicked(newClicked);

        for (let i = 0; i < wordArray.length; i++) {
            if (wordArray[i] === letter) {
                ocultArray[i] = letter
            }
        }

        if (!ocultArray.includes("_")) {
            setDisableButton(true);
            setClassName("letter-unselected");
            setColor('green');
            setCorrectAnswer(1);
            setWordArray([]);
            setOcultArray([]);
        }

        if (!wordArray.includes(letter)) {
            error = errorCounter + 1
            setErrorCounter(error);
            if (error == 1) {
                setCurrentImage(forca1);
            } else if (error == 2) {
                setCurrentImage(forca2);
            } else if (error == 3) {
                setCurrentImage(forca3);
            } else if (error == 4) {
                setCurrentImage(forca4);
            } else if (error == 5) {
                setCurrentImage(forca5);
            } else if (error == 6) {
                setCurrentImage(forca6);
            }
        }
        if (error === 6) {
            setDisableButton(true);
            setClassName("letter-unselected");
            setColor('red')
            setWordArray([]);
            setOcultArray([]);
        }
    }

    return (
        <div className="letters">
            {alphabet.map(letter =>
                <button
                    data-test="letter"
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