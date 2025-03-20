// components/UserTable.js
import React from "react";

const UserTable = ({ users, onEditUser, onDeleteUser }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <span
                  className={`badge bg-${
                    user.status === "Active" ? "success" : "danger"
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td>
                <button
                  className="btn btn-warning btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#editUserModal"
                  onClick={() => onEditUser(user)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDeleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;