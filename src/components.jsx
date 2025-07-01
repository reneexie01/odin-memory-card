import { useState, useEffect } from "react";
import { Cards } from "./cards";
export { Api }

function Api() {
    const [count, setCount] = useState(0);
    const [pokemonFound, setPokemonFound] = useState([]);
    const [lastPokemonClicked, setLastPokemonClicked] = useState('');

    // Updates the count useState which is a dependency for the API useEffect
    const registerClick = () => {
        let currentCount = count;
        currentCount++
        setCount(currentCount)
    }

    // Register the randomNumber that was clicked and add it to an array (but check if the number exists in the pokemonFound array first)
    const handleChildData = (data) => {
        const existingPokemonInDatabase = pokemonFound.includes(data);

        if (existingPokemonInDatabase) {
            console.log('game over')
            return;
        } else {
            setLastPokemonClicked(data)
            const newPokemonArray = [...pokemonFound, data]
            console.log(newPokemonArray)
            setPokemonFound(newPokemonArray);
        }
    }

    // Logger to see what numbers have been clicked
    useEffect(() => {
        console.log(
            'pokemonFound', pokemonFound,
            'lastPokemonClicked', lastPokemonClicked
        )
    }, [pokemonFound, lastPokemonClicked])


    return (
        <>
        <Cards
            registerClick={registerClick}
            count={count}
            onDataSend={handleChildData}
        />
         <Cards
            registerClick={registerClick}
            count={count}
            onDataSend={handleChildData}
        />
         <Cards
            registerClick={registerClick}
            count={count}
            onDataSend={handleChildData}
        />
         <Cards
            registerClick={registerClick}
            count={count}
            onDataSend={handleChildData}
        />
        </>
    )
}