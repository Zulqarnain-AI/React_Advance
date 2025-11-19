import { useState } from "react"
import { useNavigate, useParams } from "react-router"
export default function EditData() {
    const [address, setaddress] = useState('')
    const [name, setName] = useState('')
    const {id} = useParams()
    const navigate=useNavigate()
    const handleClick=async()=>{
        let data ={
            name:name,
            Address:address
        }
let url = "https://691c637c3aaeed735c90a3a2.mockapi.io/Students"
await fetch(url+"/"+id,{
    method:'Put',
    headers: {
        'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
})
.then(async(res)=>{return await res.json()})
.then(res=>{
    alert('Studet detail is updated successfully...')
    navigate('/')
})
    }
    return (
        <>
            <h1>edit page</h1>
            <div style={{textAlign:'center'}}>

            <label htmlFor="name">new name:</label>
            <input type="text" id="name" value={name} onChange={(e) => { setName(e.target.value) }} /><br /><br />

            <label htmlFor="Address">new Address:</label>
            <input type="text" id="Address" value={address} onChange={(e) => { setaddress(e.target.value) }} /><br /><br />

            <button onClick={handleClick}>edit student</button>
            </div>
        </>
    )
}