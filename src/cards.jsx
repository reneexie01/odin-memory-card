import { useState, useEffect } from "react";
export { Cards }

function Cards({ registerClick, count, onDataSend, gameStatus }) {
    const [image, setImage] = useState(null)
    const [pokemonNumber, setPokemonNumber] = useState('')

    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        setPokemonNumber(randomNumber);
    }, [count])
    
    const sendData = () => {
        onDataSend(pokemonNumber)
    }

// Once gameStatus is false click handlers are removed
    const handleClick = () => {
        if (gameStatus) {
        sendData();
        registerClick();
        } else {
            return;
        }
    }

    useEffect(() => {
        // Initial render of the setPokemonNumber useEffect will produce undefined so this needs to guard against it
        if (!pokemonNumber) { 
            return;
        }

        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            const sprite = response.sprites.front_default;
            if(!sprite) {
                setTimeout(sprite, 1000)
            }
            setImage(sprite);
        })
        .catch((error) => {
            console.error("Failed to catch Pokemon data:", error);
        })
    }, [pokemonNumber])

    return (
        <>
         <div className="card" onClick={handleClick}>
            <img src={image} alt="test" />
        </div>
        </>
    )
}