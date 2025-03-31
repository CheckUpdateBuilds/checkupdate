'use client'
import React, { useState } from "react";
import { Modal, Button, Dropdown } from "react-bootstrap";  // Importing the necessary components

const ContentTable = () => {
  const [articles, setArticles] = useState([
    { id: 1, title: "Understanding AI", author: "John Ade", submittedOn: "2025-01-05", status: "Pending" },
    { id: 2, title: "How to Build a Website", author: "Sam Olu", submittedOn: "2025-01-07", status: "Approved" },
    { id: 3, title: "CSS Grid Layout Guide", author: "Wale Johnson", submittedOn: "2025-01-08", status: "Rejected" },
  ]);

  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const updateStatus = (id, newStatus) => {
    setArticles(articles.map(article => article.id === id ? { ...article, status: newStatus } : article));
  };

  const handleView = (article) => {
    setSelectedArticle(article);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedArticle(null);
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
                {/* Dot Icon for Actions */}
                <Dropdown align="end">
                  <Dropdown.Toggle variant="link" className="btn-sm" id={`dropdown-${article.id}`}>
                    ⋮
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {/* View Button */}
                    <Dropdown.Item onClick={() => handleView(article)}>
                      View
                    </Dropdown.Item>
                    {article.status === "Pending" && (
                      <>
                        <Dropdown.Item onClick={() => updateStatus(article.id, "Approved")}>
                          Approve
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => updateStatus(article.id, "Rejected")}>
                          Reject
                        </Dropdown.Item>
                      </>
                    )}
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

      {/* Modal for Viewing Article Details */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedArticle?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Author:</strong> {selectedArticle?.author}</p>
          <p><strong>Submitted On:</strong> {selectedArticle?.submittedOn}</p>
          <p><strong>Status:</strong> {selectedArticle?.status}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ContentTable;
