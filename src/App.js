import './App.css';
import {useState} from "react";
import HomePage from "./HomePage";
import GameScreen from "./GameScreen";

function App() {
    const[gameState, setGameState] = useState(0);

    function startGame(){
        setGameState(1)
    }

    if(gameState === 0)
    {
        return <HomePage startGameMethod = {startGame}/>;
    }
    else
    {
        return <GameScreen endGameMethod = {() => setGameState(0)}/>;
    }

}

export default App;
