import React, { useEffect, useState } from "react";
import { useListordersMutation } from "../stores/api";

const Allorders = () => {
  const [fetchOrders, { isLoading, isError }] = useListordersMutation();
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    fetchOrders().then((response) => {
      if (response?.data) {
        setOrderList(response.data);
      }
    });
  }, [fetchOrders]);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>All Orders List</h2>
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
              <th>UserName</th>
              <th>TourName</th>
              <th>Total passengers</th>
              <th>Total amount</th>
              <th>Payment Id</th>
              <th>Order Id</th>
            </tr>
          </thead>
          <tbody>
            {orderList.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center">
                  No users found.
                </td>
              </tr>
            ) : (
              orderList.map((order, index) => (
                <tr key={order._id || index}>
                  <td>{index + 1}</td>
                  <td>{order.username}</td>
                  <td>{order.tourName}</td>
                  <td>{order.totalPassenger}</td>
                  <td>{order.totalamount}</td>
                  <td>{order.PaymentId}</td>
                  <td>{order.OrderId}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Allorders;
