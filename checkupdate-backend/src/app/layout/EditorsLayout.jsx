import React, { useState } from "react";
import { Outlet } from 'react-router-dom'
import Header from '../Components/Editor/Header'
import Sidebar from '../Components/Editor/sidebar'



const AdminLayout = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    return (
        <div className="editors-settings">
            <Sidebar isCollapsed={isSidebarCollapsed} />
            <div className="content">
            <Header toggleSidebar={toggleSidebar} />
                <div>
                    <Outlet />
                </div>
            </div> 
  </div>
    )
}

export default AdminLayout