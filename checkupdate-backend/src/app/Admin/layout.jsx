'use client';
import { useState } from 'react';
import Sidebar from '../../components/Admin/sidebar';
import Header from '../../components/Admin/Header';

//import './adminLayout.css'; // 

export default function AdminLayout({ children}) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
   
      <body>
        <div className="admin-settings">
          {/* Sidebar */}
          <Sidebar isCollapsed={isSidebarCollapsed} />

          <div className="content">
            {/* Header */}
            <Header toggleSidebar={toggleSidebar} />

            {/* Child pages rendered here */}
            <div className="main-content">
              {children}
            </div>
          </div>
        </div>
      </body>
    
  );
}
