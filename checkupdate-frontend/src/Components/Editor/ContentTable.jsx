import React, { useState } from "react";

const ContentTable = () => {
  const [articles, setArticles] = useState([
    { id: 1, title: "Understanding AI", author: "John Ade", submittedOn: "2025-01-05", status: "Pending" },
    { id: 2, title: "How to Build a Website", author: "Sam Olu", submittedOn: "2025-01-07", status: "Approved" },
    { id: 3, title: "CSS Grid Layout Guide", author: "Wale Johnson", submittedOn: "2025-01-08", status: "Rejected" },
  ]);

  const updateStatus = (id, newStatus) => {
    setArticles(articles.map(article => article.id === id ? { ...article, status: newStatus } : article));
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
              <td className="actions-btns">
                {article.status === "Pending" && (
                  <>
                    <button className="btn btn-success btn-sm" onClick={() => updateStatus(article.id, "Approved")}>
                      Approve
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={() => updateStatus(article.id, "Rejected")}>
                      Reject
                    </button>
                  </>
                )}
                <button className="btn btn-secondary btn-sm" onClick={() => updateStatus(article.id, "Archived")}>
                  Archive
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContentTable;