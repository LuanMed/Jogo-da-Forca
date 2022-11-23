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

  return (
    <main className="main">
      <Jogo palavras={palavras} setClassName={setClassName} setDisableButton={setDisableButton} word={word} setWord={setWord} selectedLetter={selectedLetter}/>
      <Letras className={className} disableButton={disableButton} setSelectedLetter={setSelectedLetter}/>
      <Chute />
    </main>
  );
}

export default App;
