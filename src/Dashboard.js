import React from 'react'
import { Link } from 'react-router-dom'

const DashboardItems =[
  {id:1,title:"My Name",},
  {id:2,title:"My Money",},
  {id:3,title:"My House",}
]

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {DashboardItems.map((item)=>(
          <li key={item.id}>
            <Link to={`/dashboard/${item.id}`}>
            <h2>{item.id}</h2>
            </Link>


          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dashboard
