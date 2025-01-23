import React from "react";
//import "./Header.css"; // External CSS for the header

const Header = () => {
  return (
    <header className="admin-header">
      <div className="header-left">
        <h1>CheckUpdate Dashboard</h1>
      </div>
      <div className="header-right">
        {/* Notifications */}
        <span className="notifications" data-bs-toggle="dropdown">
          <i className="fas fa-bell"></i>
        </span>
        <div className="dropdown-menu dropdown-menu-end">
          <a className="dropdown-item" href="#">
            New Article Submitted
          </a>
          <a className="dropdown-item" href="#">
            System Update Available
          </a>
          <a className="dropdown-item" href="#">
            Flagged Content
          </a>
        </div>

        {/* Profile Picture */}
        <a href="/profile-settings" className="profile-link">
          <img
            src="/assets/profile.jpg"
            alt="Profile"
            className="profile-picture"
          />
        </a>
        <span className="menu-toggle" onClick={toggleSidebar}>
            <i className="fas fa-bars"></i>
        </span>
      </div>
    </header>
  );
  function toggleSidebar() {
    document.querySelector(".sidebar").classList.toggle("open");
    document.querySelector(".content").classList.toggle("shifted");
  }
};

export default Header;