import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Admin/Header'
import Sidebar from '../Components/Admin/sidebar'


const AdminLayout = props => {
    return (
        <div className="editors-settings">
            <Sidebar />
            <div className="content">
                <Header />
                <div>
                    <Outlet />
                </div>
            </div> 
  </div>
    )
}



export default AdminLayout