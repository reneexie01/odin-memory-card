export { Scoreboard }

function Scoreboard({ pokemonFound, scoreHistory }) {
    const score = pokemonFound.length;

    const bestScore = Math.max(...scoreHistory)

    return (
        <>
        <p>Find all 100 unique pokemon!</p>
        <p>Score: {score}</p>
        <p>Best score: {bestScore}</p>
        </>
    )
}