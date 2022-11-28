import palavras from "./palavras";
import Chute from "./components/Chute";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import { useState } from "react";
import forca0 from './assets/forca0.png';

function App() {

  const [className, setClassName] = useState("letter-unselected");
  const [disableButton, setDisableButton] = useState(true);
  const [word, setWord] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("");
  const [errorCounter, setErrorCounter] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [newArray, setNewArray] = useState([]);
  const [wordArray, setWordArray] = useState([]);
  const [ocultArray, setOcultArray] = useState([]);
  const [color, setColor] = useState('');
  const [inputWord, setInputWord] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [currentImage, setCurrentImage] = useState(forca0);

  return (
    <main className="main">
      <Jogo
        palavras={palavras}
        setClassName={setClassName}
        setDisableButton={setDisableButton}
        word={word}
        setWord={setWord}
        errorCounter={errorCounter}
        setErrorCounter={setErrorCounter}
        setClicked={setClicked}
        wordArray={wordArray}
        ocultArray={ocultArray}
        setSelectedLetter={setSelectedLetter}
        color={color}
        setColor={setColor}
        correctAnswer={correctAnswer}
        setCorrectAnswer={setCorrectAnswer}
        setInputWord={setInputWord}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
      />
      <Letras
        className={className}
        setClassName={setClassName}
        setDisableButton={setDisableButton}
        disableButton={disableButton}
        setSelectedLetter={setSelectedLetter}
        clicked={clicked}
        setClicked={setClicked}
        wordArray={wordArray}
        setWordArray={setWordArray}
        ocultArray={ocultArray}
        setOcultArray={setOcultArray}
        selectedLetter={selectedLetter}
        errorCounter={errorCounter}
        setErrorCounter={setErrorCounter}
        setColor={setColor}
        setCorrectAnswer={setCorrectAnswer}
        setCurrentImage={setCurrentImage}
      />
      <Chute
        inputWord={inputWord}
        setInputWord={setInputWord}
        word={word}
        setDisableButton={setDisableButton}
        setClassName={setClassName}
        setColor={setColor}
        setErrorCounter={setErrorCounter}
        setCorrectAnswer={setCorrectAnswer}
        setWordArray={setWordArray}
        setOcultArray={setOcultArray}
        disableButton={disableButton}
        setCurrentImage={setCurrentImage}
      />
    </main>
  );
}

export default App;
