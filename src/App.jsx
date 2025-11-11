// import BasicReactRouter from "./basicReactRouter"
// import Layout from './components/layout'
// import './App.css'
// import { useEffect, useState } from "react"
// import getdata from "./Api"
// import College from '/context_api/college.jsx';
// import data from '/context_api/contextdata.jsx';
import Navbar from './router/navbar.jsx'

function App() {
  //   const [data,setData]=useState("");
  // useEffect(()=>{
  //  getdata().then((posts)=>setData(posts));
  // },[])


  return (
    <>
      {/* <BasicReactRouter /> */}

      {/* <Layout /> */}
      {/* <h1 class="text-9xl font-bold underline ">hello</h1> */}
      {/* <h3>{response}</h3> */}
      {/* <div>

    {
      data? data.map(item=><li>{item.title}</li>) :"no data"
    }
    </div> */}
      {/* <data.Provider value={'ali hassan'}>
  <h1>hello</h1>
<College />
</data.Provider> */}
    <Navbar />
   
    </>
  )
}


export default App
