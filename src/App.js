import palavras from "./palavras";
import Chute from "./components/Chute";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import { useState } from "react";

function App() {

  const [className, setClassName] = useState("letter-unselected");
  const [disableButton, setDisableButton] = useState(true);
  const [word, setWord] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("");
  const [errorCounter, setErrorCounter] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [newArray, setNewArray] = useState([]);
  const [wordArray, setWordArray]  = useState([]);
  const [ocultArray, setOcultArray]  = useState([]);
  const [color, setColor] = useState('')

  return (
    <main className="main">
      <Jogo
        palavras={palavras}
        setClassName={setClassName}
        setDisableButton={setDisableButton}
        word={word} setWord={setWord}
        selectedLetter={selectedLetter}
        errorCounter={errorCounter}
        setErrorCounter={setErrorCounter}
        setClicked={setClicked}
        newArray={newArray}
        setNewArray={setNewArray}
        wordArray={wordArray}
        setWordArray={setWordArray}
        ocultArray={ocultArray}
        setOcultArray={setOcultArray}
        clicked={clicked}
        setSelectedLetter={setSelectedLetter}
        color={color}
        setColor={setColor}
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
        word={word}
      />
      <Chute />
    </main>
  );
}

export default App;
