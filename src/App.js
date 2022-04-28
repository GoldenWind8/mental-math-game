import './App.css';
import {useState} from "react";
import HomePage from "./HomePage";
import GameScreen from "./GameScreen";

async function getData()
{
    const response = await fetch('https://x-math.herokuapp.com/api/random');
    const jsonData = await response.json();
    console.log(jsonData);
}


function GameStart() {
    getData();
  return (
         <>
             <h1>THE GAME HAS BEGUN</h1>
         </>
  );
}

function App() {
    const[gameState, setGameState] = useState(0);

    function startGame(){
        setGameState(1)
    }

    if(gameState == 0)
    {
        return (
            <>
                <HomePage startGameMethod = {startGame}/>
            </>
        );
    }
    else
    {
        return(
          <>
              <GameScreen/>
          </>
        );
    }

}

export default App;
