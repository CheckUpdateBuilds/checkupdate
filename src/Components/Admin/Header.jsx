import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header = () => {
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
            <span className="notifications">&#128276;</span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>New Article Submitted</Dropdown.Item>
            <Dropdown.Item>System Update Available</Dropdown.Item>
            <Dropdown.Item>Flagged Content</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        
        <div className="profile-picture">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="rounded-circle"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;