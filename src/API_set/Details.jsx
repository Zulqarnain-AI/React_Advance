import { useEffect, useState } from "react"
import { useParams } from "react-router"

function Details() {
    const { id } = useParams()
    const [recipe, setRecipe] = useState(null)
    useEffect(() => {
        fetch(`https://dummyjson.com/recipes/${id}`)
            .then(res => res.json())
            .then(data => setRecipe(data));
    }, [id]);
    if (!recipe) return <h1>loading</h1>
    if(recipe.message===`Recipe with id '${id}' not found`) return <h1>{id} is not found</h1>
    

    return (
        <>

            <div>
                <button onClick={() => window.history.back()}>Back</button>
                <h1>ingredients required:</h1>
                {
                    recipe.ingredients.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
                <h1>instructions to prepared:</h1>
                {
                    recipe.instructions.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </div>

        </>
    )
}
export default Details