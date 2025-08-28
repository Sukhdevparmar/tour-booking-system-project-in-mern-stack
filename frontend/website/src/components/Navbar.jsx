import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../img/logo-removebg-preview.png';
import '../style/main.css';
import { jwtDecode } from 'jwt-decode';

const Navbar = () => {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("auth");
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setUsername(decoded.name);
            } catch {
                console.error("Invalid token");
                localStorage.removeItem("auth");
            }
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("auth");
        setUsername("");
        navigate("/");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light w-100 bg-light fixed-top">
            <div className="container-fluid">
                <img src={logo} className="logo mt-3" alt="Logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse ms-5" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/tour" className="nav-link">All Tour</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">AboutUs</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/allorders" className='nav-link'>All orders</Link>
                        </li>
                    </ul>
                    <span className="navbar-text me-5 d-flex align-items-center gap-2">
                        {username ? (
                            <>
                                <span className="text-success fw-bold">Hi, {username}</span>
                                <button onClick={handleLogout} className='btn bg-danger text-white'>Logout</button>
                            </>
                        ) : (
                            <Link to="/login" className="nav-link">
                                <button className="btn bg-success text-white login-btn">Login</button>
                            </Link>
                        )}
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
