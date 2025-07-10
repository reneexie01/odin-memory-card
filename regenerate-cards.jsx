
export { RegenerateCards }

function RegenerateCards({ registerClick }) {


    return (
        <>
        <button className="shuffle-button" onClick={registerClick}>Shuffle</button>
        </>
    )
}

//TODO: Fix this button to reshuffle cards