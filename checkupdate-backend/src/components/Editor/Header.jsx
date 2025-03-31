import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaBars } from "react-icons/fa";  // Import the menu icon
import { FaBell } from 'react-icons/fa';

const Header = ({ toggleSidebar }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="header">
      <h1>CheckUpdate Dashboard</h1>
      <div className="header-right">

        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-notifications">
            <span className="notifications" ><FaBell style={{ color: '#C43737' }} /></span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>New Article Submitted</Dropdown.Item>
            <Dropdown.Item>System Update Available</Dropdown.Item>
            <Dropdown.Item>Flagged Content</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div className="profile-picture">
          <img
            src="/assets/img.png"
            alt="Profile"
            className="rounded-circle"
          />
        </div>
        
        {/* menu Icon */}
        <button className="menu-btn" onClick={toggleSidebar}>
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default Header;
