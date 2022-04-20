function Score({score})
{
    return (<h1>Score: {score}</h1>);
}

function UserInput()
{
    return (
        <>
            <input placeholder={"Enter text here!"}/>
        </>
    );
}

function SubmitButton()
{
    return (
        <button> Press me!</button>
    );
}



export default function GameScreen()
{
    return (
        <>
            <Score score = "10"/>
            <UserInput/>
            <SubmitButton/>
        </>
    );
}