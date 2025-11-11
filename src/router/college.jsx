import { NavLink, Outlet } from "react-router";
import NavRouter from "./nav_routes.jsx";
function College() {
    return (
        <>
            <div>
                <h1 className="text-2xl font-bold underline text-center">College Page</h1>
            </div>
            <div className="flex flex-col space-y-4 mt-8 text-left text-lg font-medium bg-gray-100 p-6 rounded-lg shadow-md">
                <NavLink
                    to="student"
                    className={({ isActive }) =>
                        `px-4 py-2 rounded transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                            isActive ? "bg-blue-600 text-white" : "text-blue-700 hover:bg-blue-100"
                        }`
                    }
                >
                    Student
                </NavLink>

                <NavLink
                    to="department"
                    className={({ isActive }) =>
                        `px-4 py-2 rounded transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                            isActive ? "bg-blue-600 text-white" : "text-blue-700 hover:bg-blue-100"
                        }`
                    }
                >
                    Department
                </NavLink>

                <NavLink
                    to="faculty"
                    className={({ isActive }) =>
                        `px-4 py-2 rounded transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                            isActive ? "bg-blue-600 text-white" : "text-blue-700 hover:bg-blue-100"
                        }`
                    }
                >
                    Faculty
                </NavLink>

                <NavLink
                    to="courses"
                    className={({ isActive }) =>
                        `px-4 py-2 rounded transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                            isActive ? "bg-blue-600 text-white" : "text-blue-700 hover:bg-blue-100"
                        }`
                    }
                >
                    Courses
                </NavLink>
                <Outlet />
            </div>
            <NavRouter />
        </>
    )
}

export default College;