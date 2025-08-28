import { Link } from 'react-router-dom';
import '../../styles/main.css';

const Sidebar = () => {
    return (
        <div className='sidebar me-3 ps-5 pe-5 bg-white mt-2'>

            <Link to="/" className="link text-decoration-none"><li className='router'><i className="fa-solid fa-gauge"></i> DashBoard</li></Link>
            <Link to="/alltours" className="link text-decoration-none"><li className='router'><i className="fa-solid fa-bus-side"></i>All Tours</li></Link>
            <Link to="/addtour" className="link text-decoration-none"><li className='router'><i className="fa-solid fa-bus"></i>Add Tour</li></Link>
            <Link to="/updatetour" className="link text-decoration-none"><li className='router'><i className="fa-solid fa-wrench"></i>Update Tour</li></Link>
            <Link to="/deletetour" className="link text-decoration-none"><li className='router'><i className="fa-solid fa-trash"></i>Delete Tour</li></Link>
            <Link to="/allusers" className="link text-decoration-none"><li className='router'><i className="fa-solid fa-users"></i>All Users</li></Link>
            <Link to="/allorders" className="link text-decoration-none"><li className='router'><i className="fa-brands fa-first-order-alt"></i>All orders</li></Link>
            <Link to="/logout" className="link text-decoration-none"><li className='router'><i className="fa-solid fa-right-from-bracket"></i>Logout</li></Link>
        </div>
    )
}

export default Sidebar
