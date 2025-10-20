import { Route, Routes,Link } from "react-router"
import Contact from "./contac"
import About from './about'
import College from './college'
import Student from './student'
import Department from './department'
import Details from './details'
import style from "/src/styles/layout.module.css"
function Layout() {
    return (
        <div>
            <div className={style.container}>
                <div className={style.logo}>
                    <h1>Logo</h1>
                </div>
                <div className={style.links}>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/college'>College</Link>
                </div>
            </div>
            <Routes>
                
                <Route path="/" element={<h1>Home page</h1>} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                
                <Route path="/college" element={<College />}>
                <Route index element={<Student />}/>
                <Route path="department" element={<Department />}/>
                <Route path="details" element={<Details />}/>
                </ Route>
            </Routes>

        </div>
    )
}
export default Layout