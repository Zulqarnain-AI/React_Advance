import {  Link, Routes, Route} from "react-router";
import style from './styles/nav.module.css';
import College from './college'
import Department from './Department'
import Details from './Details'
import Courses from './Courses'
function BasicReactRouter() {

    return (
        <>
            <div className={style.header}>

                <div className={style.logo}>
                    <h2>logo</h2>
                </div>

                <div className={style['nav-links']}>
                    <Link to='/'><h3>Home</h3></Link>
                    <Link to='/about'><h3>About</h3></Link>
                    <Link to='/contact'><h3>Contact</h3></Link>
                    <Link to='/college'><h3>College</h3></Link>

                </div>

            </div>
            <Routes>
                <Route path="/" element={<h1>home</h1>} />
                <Route path='/about' element={<h1>about</h1>} />
                <Route path='/contact' element={<h1>contact</h1>} />
                <Route path='/college' element={<College />} >
                <Route path='courses' element={<Courses />} />
                <Route path='department' element={<Department />} />
                <Route path='details' element={<Details />} />
                </Route>
                
            </Routes>
        </>
       
    )
}
export default BasicReactRouter;