import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faNewspaper, faEdit, faChartLine } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

const ChartComponent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="content-page">

        {/* Articles Table */}
        <div className="table-responsive mt-4 ">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Status</th>
                <th>Created Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 1, title: "How to Improve SEO", status: "Pending", date: "2025-01-01", color: "warning" },
                { id: 2, title: "Understanding Machine Learning", status: "Published", date: "2025-01-05", color: "success" },
                { id: 3, title: "The Future of AI", status: "Rejected", date: "2025-01-07", color: "danger" },
                { id: 4, title: "Best Practices for Web Development", status: "Draft", date: "2025-01-08", color: "secondary" }
              ].map((article) => (
                <tr key={article.id}>
                  <td>{article.id}</td>
                  <td>{article.title}</td>
                  <td className={`badge bg-${article.color}`}>{article.status}</td>
                  <td>{article.date}</td>
                  <td>
                    <a href="#" className="text-danger">Edit</a> | <a href="#" className="text-danger">Delete</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#">Previous</a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
    </div>
  );
};

export default ChartComponent;