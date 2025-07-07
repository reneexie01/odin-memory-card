
export { StartNewGame }

function StartNewGame({ gameStatus, childDataGameStatus }) {

    let visibility; 
    if (gameStatus) {
        visibility="hidden"
    }

    const sendData = () => {
        gameStatus = true;
        childDataGameStatus(gameStatus)
    }
    //TODO: Set up the button so that user can start a new game

    return (
            <>
            <button className={visibility} onClick={sendData}>Start Again</button>
            </>
        )
}