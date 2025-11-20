import { useReducer } from "react"

const Studentdata={
    name:'',
    email:'',
    address:'',
    password:''
}
const reducer=(data,action)=>{
    return {...data,[action.type]:action.val}
    
}

export default function UseReducerHook(){
    const [state,dispatch]=useReducer(reducer,Studentdata)
    return(
        <>
        <form action="">
            <label htmlFor="name">name </label>
            <input type="text" id="name" onChange={(e)=>dispatch({val:e.target.value,type:'name'})}/>
            <br /><br />
            <label htmlFor="email">email </label>
            <input type="email" id="email" onChange={(e)=>dispatch({val:e.target.value,type:'email'})} />
            <br /><br />
            <label htmlFor="address">address </label>
            <input type="text" id="address" onChange={(e)=>dispatch({val:e.target.value,type:'address'})} />
            <br /><br />
            <label htmlFor="password">password </label>
            <input type="password" id="password" onChange={(e)=>dispatch({val:e.target.value,type:'password'})} />
            <br /><br />
        </form>

        <ul>
            <li>name: {state.name}</li>
            <li>email: {state.email}</li>
            <li>address: {state.address}</li>
            <li>password: {state.password}</li>
        </ul>
        </>
    )
}