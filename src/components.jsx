import { useState, useEffect } from "react";
import { Cards } from "./cards";
export { Api }

function Api() {
    const [image, setImage] = useState(null)
    const [count, setCount] = useState(0)

    const randomNumber = Math.floor(Math.random() * 100) + 1;

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`)
        .then(function(response) {
            console.log(response)
            console.log('Random number', randomNumber)
            return response.json();
        })
        .then(function(response) {
            console.log(response)
            const sprite = response.sprites.other.dream_world.front_default;
            setImage(sprite);
        })
    }, [count])

    const registerClick = () => {
        let currentCount = count;
        currentCount++
        setCount(currentCount)
    }
    
    return (
        <>
        <Cards
            image={image}
            registerClick={registerClick}
        />
        </>
    )
}