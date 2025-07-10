import { useState, useEffect } from "react";
import { Cards } from "./cards";
import { Scoreboard } from "./scoreboard";
import { StartNewGame } from "../reset";
import { RegenerateCards } from "../regenerate-cards";
export { Api }

function Api() {
    const [count, setCount] = useState(0);
    const [pokemonFound, setPokemonFound] = useState([]);
    const [lastPokemonClicked, setLastPokemonClicked] = useState('');
    const [gameStatus, setGameStatus] = useState(true)
    const [scoreHistory, setScoreHistory] = useState([0]);

    // Updates the score history so we can retrieve the best score in the scoreboard.jsx file
    const updateScoreHistory = () => {
        const score = pokemonFound.length;
        setScoreHistory((prev) => [...prev, score]);
    }
    
    // Updates the count useState which is a dependency for the API useEffect using the functional form
    const registerClick = () => {
        setCount(prev => prev + 1)
    }

    // Resets the game when startGame is clicked (TODO: separate this into a distinct function)
    const childDataGameStatus = (data) => {
        setGameStatus(data);
        setCount(0);
        setPokemonFound([]);
        setLastPokemonClicked('');
    }

    // Register the randomNumber that was clicked and add it to an array (but check if the number exists in the pokemonFound array first)
    const childDataPokemonNumber = (data) => {
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
        <StartNewGame 
            gameStatus={gameStatus}
            childDataGameStatus={childDataGameStatus}
        />
        <Scoreboard 
            pokemonFound={pokemonFound}
            gameStatus={gameStatus}
            scoreHistory={scoreHistory}
        />
        <RegenerateCards 
           registerClick={registerClick}
        />
        <div className="card-container">
            <Cards
                registerClick={registerClick}
                count={count}
                childDataPokemonNumber={childDataPokemonNumber}
                gameStatus={gameStatus}
            />
            <Cards
                registerClick={registerClick}
                count={count}
                childDataPokemonNumber={childDataPokemonNumber}
                gameStatus={gameStatus}
            />
            <Cards
                registerClick={registerClick}
                count={count}
                childDataPokemonNumber={childDataPokemonNumber}
                gameStatus={gameStatus}
            />
            <Cards
                registerClick={registerClick}
                count={count}
                childDataPokemonNumber={childDataPokemonNumber}
                gameStatus={gameStatus}
            />
            <Cards
                registerClick={registerClick}
                count={count}
                childDataPokemonNumber={childDataPokemonNumber}
                gameStatus={gameStatus}
            />
            <Cards
                registerClick={registerClick}
                count={count}
                childDataPokemonNumber={childDataPokemonNumber}
                gameStatus={gameStatus}
            />
            <Cards
                registerClick={registerClick}
                count={count}
                childDataPokemonNumber={childDataPokemonNumber}
                gameStatus={gameStatus}
            />
            <Cards
                registerClick={registerClick}
                count={count}
                childDataPokemonNumber={childDataPokemonNumber}
                gameStatus={gameStatus}
            />
            <Cards
                registerClick={registerClick}
                count={count}
                childDataPokemonNumber={childDataPokemonNumber}
                gameStatus={gameStatus}
            />
            <Cards
                registerClick={registerClick}
                count={count}
                childDataPokemonNumber={childDataPokemonNumber}
                gameStatus={gameStatus}
            />
            <Cards
                registerClick={registerClick}
                count={count}
                childDataPokemonNumber={childDataPokemonNumber}
                gameStatus={gameStatus}
            />
            <Cards
                registerClick={registerClick}
                count={count}
                childDataPokemonNumber={childDataPokemonNumber}
                gameStatus={gameStatus}
            />
        </div>
        </>
    )
}