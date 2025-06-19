export { Cards }

function Cards({image, registerClick}) {
    return (
        <>
         <div className="card" onClick={registerClick}>
            <img src={image} alt="test" />
        </div>
        </>
    )
}