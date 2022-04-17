import './App.css';
import {useState} from "react";

function MyButton({name, onClick, count}) {


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
            <MyButton name = "Fuka uu" onClick = {handleClick} count = {count}/>
        </div>
    );
}

export default App;
