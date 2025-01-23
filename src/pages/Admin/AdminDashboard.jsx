import React from "react";
import Sidebar from "../../Components/Admin/sidebar";
import Header from "../../Components/Admin/Header";
//import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="content">
      <Header />
        <div className="row mt-4">
          {/* Widgets */}
          {[
            {
              title: "Pending Articles",
              value: 8,
              description: "Articles Awaiting Approval",
              action: "Approve Articles",
            },
            {
              title: "Active Users",
              value: 25,
              description: "Users",
              action: "View Users",
            },
            {
              title: "Published Articles",
              value: 120,
              description: "Articles",
              action: "View Published",
            },
            {
              title: "Site Traffic",
              value: "50,000",
              description: "Visits",
              action: "View Traffic",
            },
          ].map((widget, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <div className="card">
                <div className="card-header">{widget.title}</div>
                <div className="card-body text-center">
                  <div className="widget-stat">{widget.value}</div>
                  <p>{widget.description}</p>
                </div>
                <div className="card-footer text-center">
                  <a href="#" className="card-action">
                    {widget.action}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          {/* Admin Task Actions */}
          {[
            {
              title: "Manage Editors",
              button: "Manage Users",
              action: "View Editor List",
            },
            {
              title: "Approve Content",
              button: "Approve Pending Articles",
              action: "View Pending Articles",
            },
          ].map((task, index) => (
            <div className="col-lg-6 col-md-6 mb-4" key={index}>
              <div className="card">
                <div className="card-header">{task.title}</div>
                <div className="card-body text-center">
                  <button className="btn btn-primary">{task.button}</button>
                </div>
                <div className="card-footer text-center">
                  <a href="#" className="card-action">
                    {task.action}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
