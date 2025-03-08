import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

const ContentTable = () => {
  const [articles, setArticles] = useState([
    { id: 1, title: "Understanding AI", author: "John Ade", submittedOn: "2025-01-05", status: "Pending" },
    { id: 2, title: "How to Build a Website", author: "Sam Olu", submittedOn: "2025-01-07", status: "Approved" },
    { id: 3, title: "CSS Grid Layout Guide", author: "Wale Johnson", submittedOn: "2025-01-08", status: "Rejected" },
  ]);

  const updateStatus = (id, newStatus) => {
    setArticles(articles.map(article => article.id === id ? { ...article, status: newStatus } : article));
  };

  const handleView = (id) => {
    // Handle view action (e.g., navigate to a details page or open a modal)
    console.log(`View article with ID: ${id}`);
    alert(`Viewing article with ID: ${id}`);
  };

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Submitted On</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map(article => (
            <tr key={article.id}>
              <td>{article.id}</td>
              <td>{article.title}</td>
              <td>{article.author}</td>
              <td>{article.submittedOn}</td>
              <td>
                <span className={`badge bg-${article.status === "Approved" ? "success" : article.status === "Rejected" ? "danger" : "warning"}`}>
                  {article.status}
                </span>
              </td>
              <td>
                {/* 3-Dot Icon with Dropdown Menu */}
                <Dropdown>
                  <Dropdown.Toggle variant="link" id="dropdown-actions" className="text-decoration-none">
                    <i className="bi bi-three-dots-vertical"></i> {/* Bootstrap Icons 3-dot icon */}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {/* View Button */}
                    <Dropdown.Item onClick={() => handleView(article.id)}>
                      View
                    </Dropdown.Item>
                    {/* Approve Button (only for Pending status) */}
                    {article.status === "Pending" && (
                      <Dropdown.Item onClick={() => updateStatus(article.id, "Approved")}>
                        Approve
                      </Dropdown.Item>
                    )}
                    {/* Reject Button (only for Pending status) */}
                    {article.status === "Pending" && (
                      <Dropdown.Item onClick={() => updateStatus(article.id, "Rejected")}>
                        Reject
                      </Dropdown.Item>
                    )}
                    {/* Archive Button */}
                    <Dropdown.Item onClick={() => updateStatus(article.id, "Archived")}>
                      Archive
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContentTable;