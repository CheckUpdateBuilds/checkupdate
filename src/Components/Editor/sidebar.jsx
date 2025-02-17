import React from 'react';
import { FaTachometerAlt, FaNewspaper, FaEdit, FaChartLine } from 'react-icons/fa';

const Sidebar = ({ isCollapsed }) => {
    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="container-fluid">
                <ul className="nav flex-column">
                    <li className="nav-item active">
                        <a href="Dashboard"><FaTachometerAlt className="icon" /> Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a href="Articles"><FaNewspaper className="icon" /> My Articles</a>
                    </li>
                    <li className="nav-item">
                        <a href="CreateArticle"><FaEdit className="icon" /> Create Article</a>
                    </li>
                    <li className="nav-item">
                        <a href="ArticlePerformance"><FaChartLine className="icon" /> Article Performance</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
