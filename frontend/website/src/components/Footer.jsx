import React from 'react'
import logo from '../img/logo-removebg-preview.png'
import { Link } from 'react-router'
const Footer = () => {
    return (
        <div className='mt-5 pt-5 pb-5 footer justify-content-evenly'>

            <div className='footer1'>
                <h5>Contact</h5>
                <li>Mo: +91 8849267836</li>
                <li>Tel no:000000000011</li>
                <li>dalvadisukhdev8516@gmail.com</li>
            </div>
            <div className='footerpages footer1'>
                <h5>Pages</h5>
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

            </div>
            <div className='footer1'>
                <img src={logo} alt="" />
            </div>
        </div>
    )
}

export default Footer
