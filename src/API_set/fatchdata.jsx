import { Link, Outlet } from 'react-router'
import { useEffect } from "react"
function FatchData({ items,setItems }) {

    const getData = async () => {
        let url = "https://dummyjson.com/recipes";
        let data = await fetch(url);
        data = await data.json()
        setItems(data.recipes)
    }
    console.log(items)


    useEffect(() => {
        getData()
    }, [])



    return (
        <>
<h1 style={{textAlign:"center",textDecoration:"underline"}}>List of available recipes</h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                {
                    items.map((recipe) => (
                        <div key={recipe.id} style={{ width: "150px", backgroundColor: "#f0d1be", margin: "5px", display: "flex", flexDirection: "column", justifyContent: "space-between", borderRadius:"5px"}} >
                            <img src={recipe.image} alt="image is loading" style={{ width: "150px", height: "150px", borderRadius:"5px 5px 0 0" }} />
                            <h3 >{recipe.name}</h3>
                            <Link to={"/" + recipe.id} style={{textDecoration:"none",backgroundColor:'blue',color:"white", textAlign:"center"}}>Details</Link>

                        </div>
                    ))
                }
            </div>




        </>
    )
}

export default FatchData