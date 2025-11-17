// import BasicReactRouter from "./basicReactRouter"
// import Layout from './components/layout'
// import './App.css'
// import { useEffect, useState } from "react"
// import getdata from "./Api"
// import College from '/context_api/college.jsx';
// import data from '/context_api/contextdata.jsx';
// import List from './router/list.jsx'
// import NavRouter from './router/nav_routes.jsx'
// import Navbar from './router/navbar.jsx'
import { Routes, Route } from 'react-router'
import Details from './API_set/Details.jsx'
import { useState } from "react"
import FatchData from "./API_set/fatchdata"

function App() {
  const [items, setItems] = useState([])

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
      {/* <NavRouter /> */}

      <Routes>
        <Route path='/' element={<FatchData items={items} setItems={setItems} />} />
        <Route path='/:id' element={<Details />} />

      </Routes>
    </>
  )
}


export default App
