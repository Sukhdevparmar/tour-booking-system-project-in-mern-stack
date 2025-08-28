import { Routes, Route } from 'react-router-dom';
import Home from '../components/pages/Home';
import Tour from '../components/pages/Tour';
import Contact from '../components/pages/Contact';
import About from '../components/pages/About';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Login from '../components/pages/auth/Login';
import Logout from '../components/pages/auth/Logout';
import Register from '../components/pages/auth/Register';
import ChangePassword from '../components/pages/auth/ChangePassword';
import TourDetail from '../components/pages/TourDetail';
import BookDetail from '../components/pages/BookDetail';
import Allorders from '../components/pages/MyOrdersPage';

const UserLayout = () => {
    return (
        <div>
            <Navbar />
            <div style={{ marginTop: '80px' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tour" element={<Tour />} />
                    <Route path="/tour/:title" element={<TourDetail />} />
                    <Route path="/book" element={<BookDetail />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/allorders" element={<Allorders />} />

                </Routes>
            </div>
            <Footer />
        </div>
    )
}

const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="changepass" element={<ChangePassword />} />
                <Route path='/logout' element={<Logout />} />
                <Route path="/*" element={<UserLayout />} />
            </Routes>
        </>
    );
};

export default Router;
