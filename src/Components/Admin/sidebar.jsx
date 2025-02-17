import React from "react";
//import "./index.css"; // Optional: External CSS for Sidebar

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="container-fluid">
        <ul className="nav flex-column">
          <li className="nav-item active">
            <a href="Dashboard">
              <i className="fas fa-tachometer-alt icon"></i>Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a href="UserManagement">
              <i className="fas fa-users icon"></i>User Management
            </a>
          </li>
          <li className="nav-item">
            <a href="ContentManagement">
              <i className="fas fa-newspaper icon"></i>Content Management
            </a>
          </li>
          <li className="nav-item">
            <a href="Analytics">
              <i className="fas fa-chart-line icon"></i>Analytics
            </a>
          </li>
          <li className="nav-item">
            <a href="Settings">
              <i className="fas fa-cogs icon"></i>Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;