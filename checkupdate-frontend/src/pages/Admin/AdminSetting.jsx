// AdminSetting.jsx
import  { useState } from "react";


function AdminSettings() {
  // State to manage form inputs
  const [siteName, setSiteName] = useState("My Website");
  const [siteDescription, setSiteDescription] = useState(
    "A brief description of the website."
  );
  const [logo, setLogo] = useState(null);
  const [favicon, setFavicon] = useState(null);
  const [keywords, setKeywords] = useState("keyword1, keyword2, keyword3");
  const [metaDescription, setMetaDescription] = useState(
    "Default meta description for SEO purposes."
  );

  const handleFileUpload = (e, setFile) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data (to backend or state management)
    const formData = {
      siteName,
      siteDescription,
      logo,
      favicon,
      keywords,
      metaDescription,
    };
    console.log("Settings Saved:", formData);
    alert("Settings saved successfully!");
  };

  return (

        <div className="container mt-4">
          <h1>Admin Settings</h1>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-3">
              <label htmlFor="siteName" className="form-label">
                Site Name
              </label>
              <input
                type="text"
                className="form-control"
                id="siteName"
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="siteDescription" className="form-label">
                Site Description
              </label>
              <textarea
                className="form-control"
                id="siteDescription"
                rows="3"
                value={siteDescription}
                onChange={(e) => setSiteDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="logo" className="form-label">
                Upload Logo
              </label>
              <input
                type="file"
                className="form-control"
                id="logo"
                onChange={(e) => handleFileUpload(e, setLogo)}
              />
              {logo && <p className="mt-2">Selected file: {logo.name}</p>}
            </div>

            <div className="mb-3">
              <label htmlFor="favicon" className="form-label">
                Upload Favicon
              </label>
              <input
                type="file"
                className="form-control"
                id="favicon"
                onChange={(e) => handleFileUpload(e, setFavicon)}
              />
              {favicon && <p className="mt-2">Selected file: {favicon.name}</p>}
            </div>

            <div className="mb-3">
              <label htmlFor="keywords" className="form-label">
                SEO Keywords (comma-separated)
              </label>
              <input
                type="text"
                className="form-control"
                id="keywords"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="metaDescription" className="form-label">
                Meta Description
              </label>
              <textarea
                className="form-control"
                id="metaDescription"
                rows="3"
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Save Settings
            </button>
          </form>
        </div>
  );
}

export default AdminSettings;
