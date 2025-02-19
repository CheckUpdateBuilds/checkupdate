import React, { useState } from "react";
import { Outlet } from 'react-router-dom'
import Header from '../Components/Editor/Header'
import Sidebar from '../Components/Editor/sidebar'
import Dashboard from '../pages/Admin/AdminDashboard'



const AdminLayout = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

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