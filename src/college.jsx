
import { Outlet, NavLink,  } from 'react-router'


function College() {
    return (
        <>
        <div style={{textAlign:'center'}}>

            <h1>College</h1>
            <NavLink to='courses' style={{margin:'10px',fontSize:'20px', textDecoration:'none'}}>Course</NavLink>
            <NavLink to='department' style={{margin:'10px',fontSize:'20px', textDecoration:'none'}}>Department</NavLink>
            <NavLink to='details' style={{margin:'10px',fontSize:'20px', textDecoration:'none'}}>Details</NavLink>
            <Outlet />
        </div>
            

        </>
    )
}
export default College