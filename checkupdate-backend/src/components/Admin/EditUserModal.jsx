'use client'
// ../components/Admin/EditUserModal.js

import PropTypes from "prop-types";
import React, { useState } from "react";

const EditUserModal = ({ user, onSave }) => {
  const [userName, setUserName] = useState(user?.name || "");
  const [userEmail, setUserEmail] = useState(user?.email || "");
  const [userRole, setUserRole] = useState(user?.role || "Editor");
  const [userStatus, setUserStatus] = useState(user?.status || "Active");

  const handleSave = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...user,
      name: userName,
      email: userEmail,
      role: userRole,
      status: userStatus,
    };
    onSave(updatedUser);
  };

  return (
    <div
      className="modal fade"
      id="editUserModal"
      tabIndex="-1"
      aria-labelledby="editUserModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="editUserModalLabel">
              Edit User
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSave}>
              <div className="mb-3">
                <label htmlFor="editUserName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editUserName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="editUserEmail" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="editUserEmail"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="editUserRole" className="form-label">
                  Role
                </label>
                <select
                  className="form-control"
                  id="editUserRole"
                  value={userRole}
                  onChange={(e) => setUserRole(e.target.value)}
                  required
                >
                  <option value="Editor">Editor</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="editUserStatus" className="form-label">
                  Status
                </label>
                <select
                  className="form-control"
                  id="editUserStatus"
                  value={userStatus}
                  onChange={(e) => setUserStatus(e.target.value)}
                  required
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

EditUserModal.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
    status: PropTypes.string,
  }),
  onSave: PropTypes.func.isRequired,
};

export default EditUserModal;