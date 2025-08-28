import React, { useEffect, useState } from "react";
import Image from "../../../img/login_image-removebg-preview.png";
import Logo from "../../../img/logo.JPG";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import "../../../style/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [token] = useState(JSON.parse(localStorage.getItem("auth")) || "");
    const navigate = useNavigate();

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;

        if (email.length > 0 && password.length > 0) {
            const formData = {
                email,
                password,
            };
            try {
                const response = await axios.post(
                    `${import.meta.env.VITE_API_BASE_URL}/userlogin`,
                    formData
                );
                localStorage.setItem('auth', JSON.stringify(response.data.token));
                toast.success("Login successfull");
                alert("Login successfull")
                navigate("/");
            } catch (err) {
                alert("please enter valid email or password")
                console.log(err);
                toast.error(err.message);
            }
        } else {
            toast.error("Please fill all inputs");
        }
    };
    useEffect(() => {
        if (token !== "") {
            toast.success("You already logged in");
            alert("user already existing")
            navigate("/");
        }
    }, []);

    return (
        <div className="login-main">
            <div className="login-left">
                <img src={Image} alt="" />
            </div>
            <div className="login-right">
                <div className="login-right-container">
                    <div className="login-logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="login-center">
                        <h2>Welcome back!</h2>
                        <p>Please enter your details</p>
                        <form onSubmit={handleLoginSubmit}>
                            <input type="email" placeholder="Email" name="email" />
                            <div className="pass-input-div">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    name="password"
                                />
                                {showPassword ? (
                                    <FaEyeSlash
                                        onClick={() => {
                                            setShowPassword(!showPassword);
                                        }}
                                    />
                                ) : (
                                    <FaEye
                                        onClick={() => {
                                            setShowPassword(!showPassword);
                                        }}
                                    />
                                )}
                            </div>

                            <div className="d-flex justify-content-between">
                                <Link to="/register"><ul>registation</ul></Link>
                                <span><Link to="/changepass">change password</Link></span>
                            </div>

                            <div className="login-center-buttons">
                                <button className="submit" type="submit">Log In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
