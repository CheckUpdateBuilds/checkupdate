// import React from "react";
//import "./index.css"; // Optional: External CSS for Sidebar
import { Link } from "react-router-dom";

const Sidebar = ({ isCollapsed }) => {
  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="container-fluid">
        <ul className="nav flex-column">
          <li className="nav-item active">
            <Link to={''}>
              <i className="fas fa-tachometer-alt icon"></i>Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to={'UserManagement'}>
              <i className="fas fa-users icon"></i>User Management
            </Link>
          </li>
          <li className="nav-item">
            <Link to={'ContentManagement'}>
              <i className="fas fa-newspaper icon"></i>Content Management
            </Link>
          </li>
          <li className="nav-item">
            <Link to={'Analytics'}>
              <i className="fas fa-chart-line icon"></i>Analytics
            </Link>
          </li>
          <li className="nav-item">
            <Link to={'Settings'}>
              <i className="fas fa-cogs icon"></i>Settings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;