import { useEffect, useState } from "react"
import { Link } from "react-router";





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
    const handleDelete = (id) => {
        let url = "https://691c637c3aaeed735c90a3a2.mockapi.io/Students"
        fetch(url + '/' + id,{
            method:'Delete'
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                alert(res+" deleted successfully...")
            })
    }

    
    if (!response) return <h1>please wait! Loading...</h1>

    return (
        <>
            <button onClick={() => window.history.back()} > &lt; back</button>
            <h1>list of students:</h1><br />
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <table border={'5px'}>
                    <thead>

                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            response.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.Address}</td>
                                    <td><button onClick={() => { handleDelete(item.id) }}>Delete</button></td>
                                    <td><Link to={'/edit/'+item.id} style={{border:"1px solid grey",textDecoration:'none',color:'black'}}>Edit</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </>
    )

}
export default FetchData