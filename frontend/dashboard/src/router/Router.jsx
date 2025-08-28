import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Navbar from "../components/admin/Navbar";
import Sidebar from "../components/admin/Sidebar";
import Alltour from "../pages/Alltour";
import Logout from "../pages/auth/Logout";
import Addtour from "../pages/forms/Addtour";
import Updatetour from "../pages/forms/Updatetour";
import Deletetour from "../pages/forms/Deletetour";
import Allusers from "../pages/Allusers";
import Allorders from "../pages/Allorders";
import Login from "../pages/auth/Login";
import ChangePassword from '../pages/auth/ChangePassword';

const AdminLayout = () => {
    return (
        <div className="bg-light">
            <Navbar />
            <div className="d-flex mt-3">
                <Sidebar />
                <div className="bg-light mt-4 roots w-100 px-4">
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/alltours" element={<Alltour />} />
                        <Route path="/addtour" element={<Addtour />} />
                        <Route path="/updatetour" element={<Updatetour />} />
                        <Route path="/deletetour" element={<Deletetour />} />
                        <Route path="/allusers" element={<Allusers />} />
                        <Route path="/allorders" element={<Allorders />} />
                        <Route path="/logout" element={<Logout />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="changepass" element={<ChangePassword />} />
                <Route path="/*" element={<AdminLayout />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
