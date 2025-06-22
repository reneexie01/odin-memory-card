import { useState, useEffect } from "react";
export { Cards }

function Cards({registerClick, count}) {
    const [image, setImage] = useState(null)
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

    return (
        <>
         <div className="card" onClick={registerClick}>
            <img src={image} alt="test" />
        </div>
        </>
    )
}