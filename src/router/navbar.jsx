import { NavLink, Outlet } from 'react-router';
import NavRouter from './nav_routes'
import '/src/App.css'
function Navbar() {
    return (
        <>
            <header className="bg-white shadow sticky top-0 z-50 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <h1 className="text-2xl font-extrabold text-gray-900">Logo</h1>
                        </div>
                        <nav className=" sm:block ">
                            <ul className="flex space-x-6">
                                <li><NavLink to="/" className="text-gray-700 hover:text-blue-600">Home</NavLink></li>
                                <li><NavLink to="/college" className="text-gray-700 hover:text-blue-600">College</NavLink></li>
                                <li><NavLink to="/about" className="text-gray-700 hover:text-blue-600">About</NavLink></li>
                                <li><NavLink to="/contact" className="text-gray-700 hover:text-blue-600">Contact</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header >
            <Outlet />
        </>
    )
}

export default Navbar;