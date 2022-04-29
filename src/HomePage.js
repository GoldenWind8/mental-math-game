import "./HomePage.css"
export default function HomePage({startGameMethod})
{
    return (
        <div>
            <h1 className = "title">Speed Math</h1>
            <button className = "center" onClick={startGameMethod}>Begin</button>
        </div>
    )

}