export default function Jogo(props) {
    const {
        palavras, setClassName, setDisableButton, word, setWord, selectedLetter,
        errorCounter, setErrorCounter, setClicked, newArray, setNewArray,
        setSelectedLetter, wordArray, setWordArray, ocultArray, setOcultArray, color, setColor
    } = props;
    console.log(word)

    function startGame() {
        setClassName("letter-selected");
        setDisableButton(false);
        const newWord = palavras[Math.floor(Math.random() * palavras.length)]
        setWord(newWord);
        setErrorCounter(0);
        setClicked([]);
        setSelectedLetter('');
        setColor('black');

        for (let i = 0; i < newWord.length; i++) {
            wordArray.push(`${newWord[i]}`);
            wordArray.push(" ");
            //console.log(wordArray)
        }
        for (let i = 0; i < wordArray.length; i++) {
            if (wordArray[i] === " ") {
                ocultArray.push(" ")
            } else {
                ocultArray.push("_")
            }
        }
    }

    

    //console.log(wordArray)
    // console.log(ocultArray)
    // console.log(selectedLetter)

    return (
        <>
            <div className="game">
                <img className="forca" src={`assets/forca${errorCounter}.png`} />
                <button onClick={startGame} className="start-game">Escolher Palavra</button>
                <div className={`word ${color}`}>{errorCounter < 6 ? ocultArray : word}</div>
            </div>
        </>
    );
}