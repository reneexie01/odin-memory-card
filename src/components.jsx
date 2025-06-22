import { useState } from "react";
import { Cards } from "./cards";
export { Api }

function Api() {
    const [count, setCount] = useState(0)

    // Updates the count useState which is a dependency for the API useEffect
    const registerClick = () => {
        let currentCount = count;
        currentCount++
        setCount(currentCount)
    }
    
    return (
        <>
        <Cards
            registerClick={registerClick}
            count={count}
        />
         <Cards
            registerClick={registerClick}
            count={count}
        />
        </>
    )
}