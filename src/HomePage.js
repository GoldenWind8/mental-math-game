import "./HomePage.css"
export default function HomePage({startGameMethod})
{
    return (
        <div class = "homePageDiv">
            <h1 class = "title">Speed Math</h1>
            <button class = "center" onClick={startGameMethod}>Begin</button>
        </div>
    )

}