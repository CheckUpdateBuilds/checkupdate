import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'
import Header from '../Components/Admin/Header'
import Sidebar from '../Components/Admin/sidebar'


const AdminLayout = props => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
    
    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };
    
    return (
        <div className="admin-settings">
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