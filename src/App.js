import './App.css';
import {useState, useEffect} from "react";
import HomePage from "./HomePage";
import GameScreen from "./GameScreen";

const GAME_STATE_LOSE = -1;
const GAME_STATE_WIN = 10;

function App() {
    const[gameState, setGameState] = useState(0);
    const [score,setScore] = useState(0);

    useEffect(
        () => {updateGame(score)}, [score]
    )

    function startGame(){
        setGameState(1)
    }

    function updateGame(score)
    {
        if(score > 50)
        {
            setGameState(GAME_STATE_WIN)
        }
        else if(score <= -15)
        {
            setGameState(GAME_STATE_LOSE)
        }
    }


    if(gameState === 1)
    {
        return <GameScreen endGameMethod = {setGameState} score={score} setScore={setScore} />;
    }
    else
    {
        return <HomePage startGameMethod = {startGame} gameState = {gameState} />;
    }

}

export default App;
