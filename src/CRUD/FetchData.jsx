import { useEffect, useState } from "react"





function FetchData() {
    const [response, setResponse] = useState(null)
    useEffect(() => {
        let url = "https://691c637c3aaeed735c90a3a2.mockapi.io/Students"
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setResponse(res)
            })
    }, []);

    if (!response) return <h1>please wait! Loading...</h1>
    console.log(response)
    return (
        <>
<button onClick={()=>window.history.back()} > &lt; back</button>
            <h1>list of students:</h1><br />
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'space-between' }}>

                {
                    response.map((item) => (
                        <div key={item.id} style={{ backgroundColor: '#87c9a8ff', borderRadius: '10px', padding: '1px' }}>
                            <h3 style={{ padding: '0', margin: '5px' }} >name: {item.name}</h3>
                            <p style={{ padding: '0', margin: '5px' }} >address: {item.Address} </p>
                            <p style={{ padding: '0', margin: '5px' }} >ID : {item.id} </p>

                        </div>
                    ))
                }
            </div>

        </>
    )

}
export default FetchData