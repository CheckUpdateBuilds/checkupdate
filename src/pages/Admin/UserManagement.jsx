// pages/UserManagement.js
import React, { useState } from "react";
import Sidebar from "../../Components/Admin/sidebar";
import Header from "../../Components/Admin/Header";
import UserTable from "../../Components/Admin/UserTable";
import AddUserModal from "../../Components/Admin/AddUserModal";
import EditUserModal from "../../Components/Admin/EditUserModal";


const UserManagement = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      role: "Editor",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      role: "Admin",
      status: "Inactive",
    },
  ]);

  const [editingUser, setEditingUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: users.length + 1 }]);
  };

  const editUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Header title="User Management" />
        <div className="user-actions">
          <button
            className="btn"
            data-bs-toggle="modal"
            data-bs-target="#addUserModal"
          >
            Add User
          </button>
          <input
            type="text"
            className="form-control"
            placeholder="Search User..."
          />
        </div>
        <UserTable
          users={users}
          onEditUser={(user) => setEditingUser(user)}
          onDeleteUser={deleteUser}
        />
        <AddUserModal onAddUser={addUser} />
        <EditUserModal user={editingUser} onEditUser={editUser} />
      </div>
    </div>
  );
};

export default UserManagement;