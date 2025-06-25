import { useState, useEffect } from "react";
import { Cards } from "./cards";
export { Api }

function Api() {
    const [count, setCount] = useState(0)
    const [pokemonFound, setPokemonFound] = useState('')

    // Updates the count useState which is a dependency for the API useEffect
    const registerClick = () => {
        let currentCount = count;
        currentCount++
        setCount(currentCount)
    }

    //TODO: onClick must register the randomNumber that was generated and add it to an array
    const handleChildData = (data) => {
        setPokemonFound(data)
    }

    useEffect(() => {
        console.log('pokemonFound', pokemonFound)
    }, [pokemonFound])


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