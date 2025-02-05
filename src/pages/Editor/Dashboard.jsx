import React, { useState } from "react";
import { FaTachometerAlt, FaNewspaper, FaEdit, FaChartLine, FaBars, FaBell } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const EditorDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="">
      {/* Main Content */}
    

        {/* Dashboard Widgets */}
        <div className="row mt-4">
          {[
            { title: "Pending Articles", count: 3, action: "View Pending Articles" },
            { title: "Published Articles", count: 15, action: "View Published" },
            { title: "Draft Articles", count: 5, action: "Edit Drafts" },
            { title: "Rejected Articles", count: 2, action: "View Rejected" },
          ].map((widget, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <div className="card">
                <div className="card-header">{widget.title}</div>
                <div className="card-body text-center">
                  <div className="widget-stat">{widget.count}</div>
                  <p>{widget.title.split(" ")[0]} Articles</p>
                </div>
                <div className="card-footer text-center">
                  <a href="#" className="card-action">{widget.action}</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Editor Tasks */}
        <div className="row mt-5">
          {[
            { title: "Create New Article", buttonText: "Create Article", action: "Start Writing" },
            { title: "Article Performance", stat: 500, action: "View Performance" },
          ].map((task, index) => (
            <div key={index} className="col-lg-6 col-md-6 mb-4">
              <div className="card">
                <div className="card-header">{task.title}</div>
                <div className="card-body text-center">
                  {task.buttonText ? <button className="btn btn-primary">{task.buttonText}</button> : <div className="widget-stat">{task.stat}</div>}
                  <p>{task.buttonText ? "" : "Views"}</p>
                </div>
                <div className="card-footer text-center">
                  <a href="#" className="card-action">{task.action}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      
    </div>
  );
};

export default EditorDashboard;