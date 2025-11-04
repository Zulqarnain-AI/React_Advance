// import BasicReactRouter from "./basicReactRouter"
// import Layout from './components/layout'
// import './App.css'
import { useEffect, useState } from "react"
import getdata from "./Api"
function App() {
  const [data,setData]=useState("");
useEffect(()=>{
 getdata().then((posts)=>setData(posts));
},[])
  return (
    <>
    {/* <BasicReactRouter /> */}

    {/* <Layout /> */}
    {/* <h1 class="text-9xl font-bold underline ">hello</h1> */}
    {/* <h3>{response}</h3> */}
    <div>

    {
      data? data.map(item=><li>{item.title}</li>) :"no data"
    }
    </div>
    </>
  )
}

export default App
