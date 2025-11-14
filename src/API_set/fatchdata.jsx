import { useEffect, useState } from "react"

function FatchData() {
    const [items, setItems] = useState([])

    const getData = async () => {
        let url = "https://dummyjson.com/recipes";
        let data = await fetch(url);
        data = await data.json()
        data.recipes.map((item) => {
            setItems(data.recipes)
        })
    }
    console.log(items)


    useEffect(() => {
        getData()
    }, [])

    return (
        <>

                <h2>hello</h2>
            <div>
                {
                    items.map((recipe) => (
                        <h2 key={recipe.id}>{recipe.name}</h2>
                    ))
                }
            </div>



        </>
    )
}

export default FatchData