import "./GameScreen.css"
import {useState} from "react";

function getData()
{
    //TODO switch to using API however API is not working
    //const response = await fetch('https://x-math.herokuapp.com/api/random');
    //const jsonData = await response.json();
    let jsonData= {
        expression: "10+10",
        answer: "20"
    }
    return jsonData;
}

function Score({score})
{
    return (
        <div className ="score-div">
            <h1>Score: {score}</h1>
        </div>);
}

function UserInput({onSubmitClick})
{
    const [userInput, setUserInput] = useState("");
    return (
        <>
            <input placeholder={"Enter answer here: "} value = {userInput} onChange={e => setUserInput(e.target.value)} />

            <button onClick={() => onSubmitClick(userInput)}> Submit!</button>
        </>
    );
}

function LoadQuestion({question})
{
    return(
        <div>
            <h1>Question is: {question.expression}</h1>
        </div>
    );
}




export default function GameScreen({endGameMethod})
{
    const [score,setScore] = useState(10);
    let jsonQuestion = getData();

    function changeScore(answer)
    {
        if (answer === jsonQuestion.answer)
        {
            setScore(score + 10);
        }
        else
        {
            setScore(score - 5);
            if(score < -19)
            {
                console.log("Game should end");
                endGameMethod();
            }
        }
    }

    return (
        <div className={"center"}>
            <Score score = {score}/>
            <LoadQuestion question={jsonQuestion}/>
            <UserInput onSubmitClick={changeScore} />
        </div>
    );
}