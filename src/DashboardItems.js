import React from 'react'
import { useParams } from 'react-router-dom'

const DashboardItems = () => {
    const {id} = useParams()

return(
    <div>
        <h2>Dashboarditems {id}</h2>
    </div>
)
}




export default DashboardItems
