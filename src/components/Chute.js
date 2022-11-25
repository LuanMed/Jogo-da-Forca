export default function Chute(props) {
    const { inputWord, setInputWord, word, setDisableButton, setClassName,
        setColor, setErrorCounter, setCorrectAnswer, setWordArray, setOcultArray
    } = props;

    function tryWord() {
        console.log("palavra digitada " + inputWord)
        if (inputWord == word) {
            setDisableButton(true);
            setClassName("letter-unselected");
            setColor('green');
            setCorrectAnswer(1);
            setWordArray([]);
            setOcultArray([]);
        } else {
            setDisableButton(true);
            setClassName("letter-unselected");
            setColor('red');
            setErrorCounter(6);
            setWordArray([]);
            setOcultArray([]);
        }
        setInputWord('');
    }

    return (
        <div className="answer-field">
            <p>Já sei a palavra!</p>
            <input
                value={inputWord}
                onChange={(e) => setInputWord(e.target.value)}
            />
            <button onClick={tryWord}>Chutar</button>
        </div>
    );
}