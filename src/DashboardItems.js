import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DashboardItems = () => {
    const {id} = useParams()
    const [todos,setTodos] = useState([])

    useEffect(() => {
        fetch(`https://https://jsonplaceholder.typicode.com/users/${id}/todos`)
        .then((response)=>response.json())
        .then((data)=>setTodos(data))
        .catch((error)=>console.error("Error Fetching todos",error))
    },[id])

return(
    <div>
        <h2>User Todos</h2>
        <ul>
            {todos.map((todo)=>{
                <li key={todo.id}>
                    <h3>{todo.title}</h3>
                    <p>Status:{todo.completed?"Completed":"Pending"}</p>
                </li>
            })}
        </ul>
    </div>
)
}




export default DashboardItems
