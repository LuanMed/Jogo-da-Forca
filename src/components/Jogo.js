export default function Jogo(props) {
    const {palavras, setClassName, setDisableButton, word, setWord, selectedLetter} = props;
    let array =[];
    let ocult = [];
    let arr = []

    function startGame(){
        setClassName("letter-selected");
        setDisableButton(false);
        setWord(palavras[Math.floor(Math.random()*palavras.length)]);
    }
    for (let i = 0; i < word.length; i++){
        array.push(`${word[i]}`);
        array.push(" ");
    }

    for (let i = 0; i < array.length; i++){
        if (array[i] === " "){
            ocult.push(" ")
        }else {
            ocult.push("_")
        }
    }

    for (let i = 0; i < array.length; i++){
        if (array[i] === selectedLetter){
            ocult[i] = selectedLetter
        }
    }

    console.log(array)
    console.log(ocult)
    console.log(selectedLetter)

    return (
        <>
            <div className="game">
                <img className="forca" src="assets/forca0.png" />
                <button onClick={startGame} className="start-game">Escolher Palavra</button>
                <div className="word">{ocult}</div>
            </div>
        </>
    );
}