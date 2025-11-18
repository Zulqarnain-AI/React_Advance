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
// import Details from './API_set/Details.jsx'
// import FatchData from "./API_set/fatchdata"
// import { useState } from "react"
import Home from "./CRUD/home"
import FetchData from "./CRUD/FetchData"
import AddData from './CRUD/AddData'

function App() {
  // const [items, setItems] = useState([])

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
{/* 
      <Routes>
        <Route path='/' element={<FatchData items={items} setItems={setItems} />} />
        <Route path='/:id' element={<Details />} />

      </Routes> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fetchdata' element= {<FetchData />} />
        <Route path='/adddata' element= {<AddData />} />
        <Route />
      </Routes>
     
    </>
  )
}


export default App
