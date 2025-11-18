import { Link } from "react-router"

export default function Home(){
    return (
        <>
        <div style={{display:'flex', gap:'20px', justifyContent:'right',backgroundColor:'#e0eadaff',boxShadow:'0px 2px 0px black',height:'50px',alignItems:'center',borderRadius:'0 0 5px 5px',margin:'0px'}}>
            <Link to='/' style={{textDecoration:'None',fontSize:'20px',fontWeight:'bold'}} >Home</Link>
            <Link to='/fetchdata' style={{textDecoration:'None',fontSize:'20px',fontWeight:'bold'}} >Fetch data</Link>
            <Link to='/adddata' style={{textDecoration:'None',fontSize:'20px',fontWeight:'bold'}} >Add data</Link>
        </div>
        <h1>This is the home page!</h1>
        </>
    )
}