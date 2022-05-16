import "./HomePage.css"

const GAME_STATE_LOSE = -1;
const GAME_STATE_WIN = 10;
export default function HomePage({startGameMethod, gameState})
{
    if(gameState === GAME_STATE_LOSE)
    {
        return (
            <div>
                <h1 className = "title">Speed Math</h1>
                <h2>You lost! Click Begin to try again!</h2>
                <button className = "center" onClick={startGameMethod}>Begin</button>
            </div>
        )
    }
    else if(gameState === GAME_STATE_WIN)
    {
        return (
            <div>
                <h1 className = "title">Speed Math</h1>
                <h2>You WON! Click Begin to try again!</h2>
                <button className = "center" onClick={startGameMethod}>Begin</button>
            </div>
        )
    }
    else
    {
        return (
            <div>
                <h1 className = "title">Speed Math</h1>
                <button className = "center" onClick={startGameMethod}>Begin</button>
            </div>
        )
    }

}