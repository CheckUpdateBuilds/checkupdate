'use client'
import React, { useState } from "react";
import Link from 'next/link';
import Header from '../../components/Editor/Header'
import Sidebar from '../../components/Editor/sidebar'



const AdminLayout = ({children}) => {
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
                {children}
                </div>
            </div> 
  </div>
    )
}

export default AdminLayout  