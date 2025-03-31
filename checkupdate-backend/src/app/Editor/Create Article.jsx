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
    <div className="content-page">
        
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
  );
};

export default CreateArticle;