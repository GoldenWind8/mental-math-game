import "./GameScreen.css"
import {useState} from "react";

function getData()
{
    //TODO switch to using API however API is not working
    //const response = await fetch('https://x-math.herokuapp.com/api/random');
    //const jsonData = await response.json();
    let numA = Math.round(Math.random()*1000);
    let numB = Math.round(Math.random()*1000);

    let ans = numA + numB;

    let jsonData= {
        expression: numA + " + " + numB,
        answer: "" + ans
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

function UserInput({updateScoreWithUserInput})
{
    const [userInput, setUserInput] = useState("");

    function onSubmitClick(ans)
    {
        updateScoreWithUserInput(ans);
        setUserInput("");
    }

    return (
        <>
            <input placeholder={"Enter answer here: "} value = {userInput} onChange={e => setUserInput(e.target.value)} type="number" />

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




export default function GameScreen({score, setScore})
{

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
        }
    }

    return (
        <div className={"center"}>
            <Score score = {score}/>
            <LoadQuestion question={jsonQuestion}/>
            <UserInput updateScoreWithUserInput={changeScore} />
        </div>
    );
}