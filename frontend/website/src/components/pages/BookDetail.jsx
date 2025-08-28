import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const BookDetail = () => {
    const { state } = useLocation();
    const tour = state?.tour;
    const [passengers, setPassengers] = useState([{ name: '', age: '' }]);
    const [username, setUsername] = useState("");
    const [userEmail, setUserEmail] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("auth");
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setUsername(decoded.name);
                setUserEmail(decoded.email);
            } catch (err) {
                console.error("Invalid token:", err);
                localStorage.removeItem("auth");
            }
        }
    }, []);

    if (!tour) {
        return <div className="text-danger mt-5 text-center">Tour information not found.</div>;
    }

    const handlePassengerChange = (index, field, value) => {
        const updated = [...passengers];
        updated[index][field] = value;
        setPassengers(updated);
    };

    const addPassenger = () => {
        setPassengers([...passengers, { name: '', age: '' }]);
    };

    const totalPrice = passengers.length * tour.price;

    const handlePayment = async (e) => {
        e.preventDefault();
        try {
            // Create Razorpay order
            const { data: { order } } = await axios.post(
                `${import.meta.env.VITE_API_BASE_URL}/payment/process`,
                { amount: totalPrice }
            );

            // Get Razorpay key
            const { data: { key } } = await axios.get(
                `${import.meta.env.VITE_API_BASE_URL}/getKey`
            );

            const options = {
                key,
                amount: order.totalPrice,
                currency: "INR",
                name: "Tour Booking",
                description: `Payment for ${tour.title}`,
                image: "/logo.png",
                order_id: order.id,
                handler: async function (response) {
                    alert("Payment Successful!");

                    try {
                        await axios.post(`${import.meta.env.VITE_API_BASE_URL}/order`, {
                            tourId: tour._id,
                            tourTitle: tour.title,
                            passengers,
                            totalPassenger: passengers.length,
                            username,
                            totalPrice,
                            razorpayPaymentId: response.razorpay_payment_id,
                            razorpayOrderId: response.razorpay_order_id,
                        });

                        alert("Booking confirmed!");

                    } catch (err) {
                        console.error("Booking save error:", err);
                        alert("Payment succeeded but booking not saved.");
                    }
                },
                prefill: {
                    name: username,
                    email: userEmail,
                    contact: "8849267836",
                },
                theme: {
                    color: "#1e7299ff",
                },
            };

            const razor = new window.Razorpay(options);
            razor.open();
        } catch (error) {
            console.error("Payment failed:", error);
            alert("Something went wrong during payment.");
        }
    };

    return (
        <div className="container mt-5">
            <h2 className='pt-4'>Booking for: {tour.title}</h2>
            <p><strong>Username:</strong> {username}</p>
            <p><strong>Price per Person:</strong> ₹{tour.price}</p>
            <p><strong>Total Passengers:</strong> {passengers.length}</p>
            <p><strong>Total Price:</strong> ₹{totalPrice}</p>
            <hr />
            <form onSubmit={handlePayment}>
                <h4>Passenger Details</h4>
                {passengers.map((passenger, index) => (
                    <div key={index} className="mb-3">
                        <label>Name:</label>
                        <input
                            type="text"
                            value={passenger.name}
                            onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
                            className="form-control mb-2"
                            required
                        />
                        <label>Age:</label>
                        <input
                            type="number"
                            value={passenger.age}
                            onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
                            className="form-control"
                            required
                        />
                    </div>
                ))}
                <button
                    type="button"
                    className="btn btn-secondary mb-4"
                    onClick={addPassenger}
                >
                    Add Passenger
                </button>
                <br />
                <button type="submit" className="btn btn-success w-25">
                    Pay Now
                </button>
            </form>
        </div>
    );
};

export default BookDetail;
