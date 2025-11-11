import {Routes,Route} from 'react-router';
import Home from './Home.jsx';
import About from './about.jsx';
import Contact from './contact.jsx';
import PageNotFound from './PnotF.jsx';
import College from './college.jsx';
function NavRouter(){
    return(
        <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element ={<About />} />
            <Route path='/contact' element = {<Contact />} />
            <Route path='/college/*' element ={<College />} >
            <Route path='student' element ={<div><h1 className='text-3xl font-bold underline text-center'>Student Page</h1></div>} />
            <Route path='department' element ={<div><h1 className='text-3xl font-bold underline text-center'>Department Page</h1></div>} />
            <Route path='faculty' element ={<div><h1 className='text-3xl font-bold underline text-center'>Faculty Page</h1></div>} />
            <Route path='courses' element ={<div><h1 className='text-3xl font-bold underline text-center'>Courses Page</h1></div>} />
            </Route>
            <Route path='*' element ={<PageNotFound />} />
        </Routes>
        </>
    )
}

export default NavRouter;