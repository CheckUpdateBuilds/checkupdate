import React, { useState } from "react";
import { Outlet } from 'react-router-dom'
import Header from '../Components/Editor/Header'
import Sidebar from '../Components/Editor/sidebar'


<<<<<<< HEAD
const AdminLayout = props => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
=======

const AdminLayout = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
>>>>>>> e6e809a18ed6f363f388748bb14f6ac238f7eb0b

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