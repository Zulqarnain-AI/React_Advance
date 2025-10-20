import {  NavLink,Outlet } from "react-router"
import style from '/src/styles/layout.module.css'
function College(){
    return(
        <>
        <div className={style.college}>
            <h1>College page</h1>
            <div className={style.link}>
            <NavLink to=''>Student</NavLink>
            <NavLink to='department'>Departments</NavLink>
            <NavLink to='details'>Details</NavLink>
            </div>
        </div>
        <Outlet />
        </>
    )
}
export default College