import React from 'react';
import PropTypes from 'prop-types';
import { FaTachometerAlt, FaNewspaper, FaEdit, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Sidebar = ({ isCollapsed }) => {
    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="container-fluid">
                <ul className="nav flex-column">
                    <li className="nav-item active">
                        <Link to={"Dashboard"}><FaTachometerAlt className="icon" /> Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"Articles"}><FaNewspaper className="icon" /> My Articles</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"CreateArticle"}><FaEdit className="icon" /> Create Article</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"ArticlePerformance"}><FaChartLine className="icon" /> Article Performance</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
Sidebar.propTypes = {
    isCollapsed: PropTypes.bool.isRequired,
};

export default Sidebar;