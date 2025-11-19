import { useState } from "react";


export default function AddData() {
    const [address, setaddress] = useState('')
    const [name, setName] = useState('')

    const handleClick = async () => {
        let data = {
            name: name,
            Address: address
        }
        await fetch("https://691c637c3aaeed735c90a3a2.mockapi.io/Students", {
            method: 'Post',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then((res) => { return res.json() })
            .then((res) => { alert('new student is added successfully...') })


    }
    return (
        <>
            <h1>add data page</h1>
            <label htmlFor="name">name:</label>
            <input type="text" id="name" value={name} onChange={(e) => { setName(e.target.value) }} /><br /><br />

            <label htmlFor="Address">Address:</label>
            <input type="text" id="Address" value={address} onChange={(e) => { setaddress(e.target.value) }} /><br /><br />

            <button onClick={handleClick}>Add studen</button>

        </>
    )
}