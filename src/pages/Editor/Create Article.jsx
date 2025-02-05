import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CreateArticle = () => {
  useEffect(() => {
    ClassicEditor.create(document.querySelector("#article-body")).catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="sidebar bg-danger text-white vh-100 p-4">
        <ul className="nav flex-column">
          <li className="nav-item active">
            <a href="#" className="text-white d-flex align-items-center">
              <i className="fas fa-tachometer-alt me-2"></i> Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="text-white d-flex align-items-center">
              <i className="fas fa-newspaper me-2"></i> My Articles
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="text-white d-flex align-items-center">
              <i className="fas fa-edit me-2"></i> Create Article
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="text-white d-flex align-items-center">
              <i className="fas fa-chart-line me-2"></i> Article Performance
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="content p-4 flex-grow-1">
        <div className="header bg-white p-3 shadow-sm d-flex justify-content-between align-items-center">
          <h1 className="text-danger">Create New Article</h1>
          <span className="notifications" data-bs-toggle="dropdown">
            &#128276;
          </span>
          <div className="dropdown-menu dropdown-menu-end">
            <a className="dropdown-item" href="#">Article Approved</a>
            <a className="dropdown-item" href="#">Article Rejected</a>
            <a className="dropdown-item" href="#">Feedback on Article</a>
          </div>
        </div>

        {/* Create Article Form */}
        <form>
          <div className="form-group mt-4">
            <label htmlFor="article-title">Article Title</label>
            <input type="text" className="form-control" id="article-title" placeholder="Enter article title" required />
          </div>

          <div className="form-group mt-4">
            <label htmlFor="article-body">Article Body</label>
            <textarea className="form-control" id="article-body" placeholder="Enter article content" required></textarea>
          </div>

          <div className="form-group mt-4">
            <label htmlFor="categories">Categories</label>
            <select className="form-control" id="categories" required>
              <option value="" disabled selected>Select a category</option>
              <option value="Technology">Technology</option>
              <option value="Science">Science</option>
              <option value="Health">Health</option>
              <option value="Business">Business</option>
            </select>
          </div>

          <div className="form-group mt-4">
            <label htmlFor="tags">Tags (comma-separated)</label>
            <input type="text" className="form-control" id="tags" placeholder="Enter article tags" />
          </div>

          <div className="form-group mt-4">
            <label htmlFor="media">Upload Image/Video</label>
            <input type="file" className="form-control" id="media" accept="image/*,video/*" />
          </div>

          <div className="form-group mt-4">
            <button type="submit" className="btn btn-danger me-2">Submit for Approval</button>
            <button type="button" className="btn btn-secondary">Save as Draft</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateArticle;