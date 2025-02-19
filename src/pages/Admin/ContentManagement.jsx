import React from "react";
import Sidebar from "../../Components/Admin/sidebar";
import Header from "../../Components/Admin/Header";
import ContentTable from "../../Components/Admin/ContentTable";
import Pagination from "../../Components/Admin/Pagination";


const ContentManagement = () => {
  return (
    <div className="admin-dashboard">
     
        <div className="d-flex justify-content-between align-items-center my-3">
          <input type="text" className="form-control" placeholder="Search Article..." />
          <select className="form-control w-25">
            <option value="">Filter by Status</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
            <option value="Archived">Archived</option>
          </select>
        </div>
        <ContentTable />
        <Pagination />
      
    </div>
  );
};

export default ContentManagement;