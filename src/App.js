import './App.css';
import {useState} from "react";
import HomePage from "./HomePage";

async function getData()
{
    const response = await fetch('https://x-math.herokuapp.com/api/random');
    const jsonData = await response.json();
    console.log(jsonData);
}


function MyButton({name, onClick, count}) {
    getData();
  return (
         <>
             <h1>THE GAME HAS BEGUN</h1>
             <button onClick={onClick}>{name} : {count}</button>

         </>
  );
}

function App() {
    const[count, setCount] = useState(0);
    const[gameState, setGameState] = useState(0);

    function handleClick(){
        setCount(count + 1)
    }

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
              <MyButton name = "Button 1" onClick = {handleClick} count = {count}/>
          </>
        );
    }

}

export default App;
