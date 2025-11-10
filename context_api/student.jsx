import {useContext} from 'react';
import data from './contextdata.jsx';
function Student(){
    const name=useContext(data);
    return (
    <div style={{backgroundColor:"green",height:'100px',color:'white'}}>

        <h1>this is student {name}</h1>

    </div>
    )

}
export default Student;