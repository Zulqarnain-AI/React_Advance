import { NavLink, Outlet } from "react-router";
function College() {
    return (
        <>
            <div className="text-center text-3xl font-bold underline mt-6">
                <h1>welcome to college page</h1>
                <h3 className="bg-blue-100 p-2 rounded "><a href="/">Go to Home</a></h3>
                <button onClick={() => {window.history.back()}}>back</button>
            </div>
            <div className="flex flex-col space-y-4 mt-8 text-left text-lg font-medium bg-gray-100 p-6 rounded-lg shadow-md">
                <NavLink to="">Student</NavLink>
                <NavLink to='department' >Department</NavLink>
                <NavLink to='faculty'>Faculty</NavLink>
                <NavLink to="courses">Courses</NavLink>
                <Outlet />
            </div>
            
        </>
    )
}

export default College;