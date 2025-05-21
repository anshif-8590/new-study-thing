import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Dashboard  = () => {
  const [users,setUsers] = useState([])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => setUsers(data))
    .catch((error) => console.error("Error Fetching users"+error))
  },[])
console.log(users);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {/* {console.log(users)} */}
        {users.map((user)=>{
          <li key={user.id}>
            
            <Link to={`/dashboard/${user.id}`}>
            {/* {console.log(user.id)} */}
            <h1>{user.name}</h1>
            <h2>{user}</h2>
            {/* {console.log(user.name)} */}
            </Link>
          </li>
        })}
      </ul>
    </div>
  )
}


 


export default Dashboard
