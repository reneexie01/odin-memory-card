export { Scoreboard }

function Scoreboard({ pokemonFound, scoreHistory }) {
    const score = pokemonFound.length;

    const bestScore = Math.max(...scoreHistory)

    return (
        <>
        <p>Score: {score}</p>
        <p>Best score: {bestScore}</p>
        </>
    )
}