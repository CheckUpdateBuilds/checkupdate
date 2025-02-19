<<<<<<< HEAD
import React, { useState } from 'react';
=======
>>>>>>> e6e809a18ed6f363f388748bb14f6ac238f7eb0b
import { Outlet } from 'react-router-dom'
import Header from '../Components/Admin/Header'
import Sidebar from '../Components/Admin/sidebar'
import Dashboard from '../pages/Admin/AdminDashboard'


<<<<<<< HEAD
const AdminLayout = props => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
    
    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };
    
=======
const AdminLayout = () => {
>>>>>>> e6e809a18ed6f363f388748bb14f6ac238f7eb0b
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