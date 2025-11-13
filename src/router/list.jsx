import { NavLink, Outlet } from "react-router";
function List(){
    const users=[{
        id:1,name:"John"

    },
    {
        id:2,name:"Doe"
    },
    {
        id:3,name:"Smith"
    },
    {
        id:4,name:"Jane"
    }
    ];
    return <>
    
    <h1 className="text-3xl font-bold underline mt-6 text-center">User List</h1>
    <ul className="mt-8 space-y-4 text-lg font-medium bg-gray-100 p-6 rounded-lg shadow-md">
        {users.map((user, index)=>(
            <li key={index}><NavLink to={"user/" + user.id } >{user.name}</NavLink></li>
        ))}
    </ul>
    <Outlet />
    
    </>
}
export default List;