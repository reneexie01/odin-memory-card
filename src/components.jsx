import { useState, useEffect } from "react";
import { Cards } from "./cards";
import { Scoreboard } from "./scoreboard";
export { Api }

function Api() {
    const [count, setCount] = useState(0);
    const [pokemonFound, setPokemonFound] = useState([]);
    const [lastPokemonClicked, setLastPokemonClicked] = useState('');
    const [gameStatus, setGameStatus] = useState(true)
    const [scoreHistory, setScoreHistory] = useState([1,1,2]);

    const updateScoreHistory = () => {
        const score = pokemonFound.length;
        setScoreHistory((prev) => [...prev, score]);
    } // TODO: Fix this infinite loop
    
    // Updates the count useState which is a dependency for the API useEffect using the functional form
    const registerClick = () => {
        setCount(prev => prev + 1)
    }

    // Register the randomNumber that was clicked and add it to an array (but check if the number exists in the pokemonFound array first)
    const handleChildData = (data) => {
        const existingPokemonInDatabase = pokemonFound.includes(data);

        if (existingPokemonInDatabase) {
            setGameStatus(false)
            updateScoreHistory()
            return;
        } else {
            setLastPokemonClicked(data)
            setPokemonFound(prev => {
                 const newArray = [...prev, data];
                 console.log(newArray);
                 return newArray;
            });
        }
    }

    // Logger to see what numbers have been clicked
    useEffect(() => {
        console.log(
            'pokemonFound', pokemonFound,
            'lastPokemonClicked', lastPokemonClicked,
            'scoreHistory', scoreHistory,
            'gameStatus', gameStatus
        )
    }, [pokemonFound, lastPokemonClicked, scoreHistory, gameStatus])

    return (
        <>
        <Scoreboard 
            pokemonFound={pokemonFound}
            gameStatus={gameStatus}
            scoreHistory={scoreHistory}
        />
        <Cards
            registerClick={registerClick}
            count={count}
            onDataSend={handleChildData}
            gameStatus={gameStatus}
        />
         <Cards
            registerClick={registerClick}
            count={count}
            onDataSend={handleChildData}
            gameStatus={gameStatus}
        />
         <Cards
            registerClick={registerClick}
            count={count}
            onDataSend={handleChildData}
            gameStatus={gameStatus}
        />
         <Cards
            registerClick={registerClick}
            count={count}
            onDataSend={handleChildData}
            gameStatus={gameStatus}
        />
        </>
    )
}