import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const token = localStorage.getItem('auth');
  let username = '';

  try {
    if (token) {
      const decoded = jwtDecode(token);
      username = decoded.name;
    }
  } catch (err) {
    console.error("Invalid token", err);
    setError('Invalid or expired token');
  }

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/orders/${username}`);
        setOrders(response.data.orders);
      } catch (err) {
        if (err.response) {
          setError(err.response.data.message || 'Failed to fetch orders');
        } else {
          setError('Server is not responding');
        }
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchOrders();
    } else {
      setError('User not logged in');
      setLoading(false);
    }
  }, [username]);

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className='ps-5 pe-5 pt-3 pb-5'>
      <h3>Your Order's</h3>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (

        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>Tour Name</th>
                <th>Total Passenger</th>
                <th>Total Amount</th>
                <th>Payment ID</th>
                <th>Order ID</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order._id || index} className="mb-3">
                  <td>{order.tourName}</td>
                  <td>{order.totalPassenger}</td>
                  <td>₹{order.totalamount}</td>
                  <td>{order.PaymentId}</td>
                  <td>{order.OrderId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      )}
    </div>
  );
};

export default MyOrdersPage;
