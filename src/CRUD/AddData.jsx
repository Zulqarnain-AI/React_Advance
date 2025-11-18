import { useState } from "react";


export default function AddData() {
const [address,setaddress] = useState([])
const [name,setName] = useState([])

const handleClick=()=>{
    let data={
        name:'ali',
        Address:'h-9 islamabad'
    }

    
}
    return (
        <>
            <h1>add data page</h1>
            <label htmlFor="name">name:</label>
            <input type="text" id="name" value={name} onChange={(e)=>{setName(e.target.value)}} /><br /><br />

            <label htmlFor="Address">Address:</label>
            <input type="text" id="Address" value={address} onChange={(e)=>{setaddress(e.target.value)}}/><br /><br />

            <button onClick={handleClick}>Add studen</button>

        </>
    )
}