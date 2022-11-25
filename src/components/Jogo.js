export default function Jogo(props) {
    const {
        palavras, setClassName, setDisableButton, word, setWord, selectedLetter,
        errorCounter, setErrorCounter, setClicked, newArray, setNewArray,
        setSelectedLetter, wordArray, setWordArray, ocultArray, setOcultArray, color, setColor,
        correctAnswer, setCorrectAnswer, setInputWord
    } = props;

    function startGame() {
        setClassName("letter-selected");
        setDisableButton(false);
        const newWord = palavras[Math.floor(Math.random() * palavras.length)];
        console.log(newWord)
        setWord(newWord);
        setErrorCounter(0);
        setClicked([]);
        setSelectedLetter('');
        setColor('black');
        setCorrectAnswer(0);
        setInputWord('');

        for (let i = 0; i < newWord.length; i++) {
            wordArray.push(`${newWord[i]}`);
            wordArray.push(" ");
        }
        for (let i = 0; i < wordArray.length; i++) {
            if (wordArray[i] === " ") {
                ocultArray.push(" ")
            } else {
                ocultArray.push("_")
            }
        }
    }

    return (
        <>
            <div className="game">
                <img data-test="game-image" className="forca" src={`assets/forca${errorCounter}.png`} />
                <button data-test="choose-word" onClick={startGame} className="start-game">Escolher Palavra</button>
                <div data-test="word" data-answer={word} className={`word ${color}`}>{errorCounter < 6 && correctAnswer == 0 ? ocultArray : word}</div>
            </div>
        </>
    );
}