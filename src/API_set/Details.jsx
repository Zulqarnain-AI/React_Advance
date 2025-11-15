function Details({ ingredient, instruction }) {
    return (
        <>

            <div>
                <button onClick={() => window.history.back()}>Back</button>
                <h1>ingredients required:</h1>
                {
                    ingredient.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
                <h1>instructions to prepared:</h1>
                {
                    instruction.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </div>

        </>
    )
}
export default Details