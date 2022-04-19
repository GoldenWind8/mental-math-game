import './App.css';
import {useState} from "react";

async function getData()
{
    const response = await fetch('https://x-math.herokuapp.com/api/random');
    const jsonData = await response.json();
    console.log(jsonData);
}


function MyButton({name, onClick, count}) {
    getData();
  return (
         <button onClick={onClick}>{name} : {count}</button>
  );
}

function App() {
    const[count, setCount] = useState(0);
    function handleClick(){
        setCount(count + 1)
    }

    return (
        <div>
            <MyButton name = "Button 1" onClick = {handleClick} count = {count}/>
        </div>
    );
}

export default App;
