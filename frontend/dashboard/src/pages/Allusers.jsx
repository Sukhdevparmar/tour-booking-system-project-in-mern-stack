import React, { useEffect, useState } from "react";
import { useListusersMutation } from "../stores/api";

const AllUsers = () => {
  const [fetchUsers, { isLoading, isError }] = useListusersMutation();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetchUsers().then((response) => {
      if (response?.data) {
        setUserList(response.data);
      }
    });
  }, [fetchUsers]);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>All Users List</h2>
      </div>

      {isLoading ? (
        <div className="text-center my-4">
          <div className="spinner-border text-primary" role="status"></div>
          <p>Loading users...</p>
        </div>
      ) : isError ? (
        <div className="alert alert-danger text-center" role="alert">
          Failed to load users. Please try again.
        </div>
      ) : (
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {userList.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center">
                  No users found.
                </td>
              </tr>
            ) : (
              userList.map((user, index) => (
                <tr key={user._id || index}>
                  <td>{index + 1}</td>
                  <td>{user.name || "N/A"}</td>
                  <td>{user.email || "N/A"}</td>
                  <td>{user.password}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllUsers;
