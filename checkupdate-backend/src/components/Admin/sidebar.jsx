// import React from "react";
// import "./index.css"; // Optional: External CSS for Sidebar
import Link from 'next/link'; // Use Next.js Link component

const Sidebar = ({ isCollapsed }) => {
  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="container-fluid">
        <ul className="nav flex-column">
          <li className="nav-item active">
            <Link href="/">
              Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link href="UserManagement">
             User Management</Link>
          </li>
          <li className="nav-item">
            <Link href="ContentManagement">
             Content Management</Link>
          </li>
          <li className="nav-item">
            <Link href="Analytics">
             Analytics</Link>
          </li>
          <li className="nav-item">
            <Link href="Settings">
            Settings</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
