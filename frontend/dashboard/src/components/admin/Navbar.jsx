import '../../styles/main.css';
import { Link } from "react-router";

const Navbar = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            <img className='logo' src="https://static.vecteezy.com/system/resources/previews/041/041/511/non_2x/tour-bus-logo-icon-brand-identity-sign-symbol-vector.jpg" alt="#" />
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <span className="nav-item">
                <span className="navbar-sidebar">
                  <Link to="/" className="link text-decoration-none"><li className='router'>DashBoard</li></Link>
                  <Link to="/alltours" className="link text-decoration-none"><li className='router'>All Tours</li></Link>
                  <Link to="/addtour" className="link text-decoration-none"><li className='router'>Add Tour</li></Link>
                  <Link to="/updatetour" className="link text-decoration-none"><li className='router'>Update Tour</li></Link>
                  <Link to="/deletetour" className="link text-decoration-none"><li className='router'>Delete Tour</li></Link>
                  <Link to="/allusers" className="link text-decoration-none"><li className='router'>All Users</li></Link>
                  <Link to="/allorders" className="link text-decoration-none"><li className='router'>All orders</li></Link>
                  <Link to="/logout" className="link text-decoration-none"><li className='router'>Logout</li></Link>
                </span>

              </span>

            </ul>
            <form className="d-flex">
              <li className='nav-item me-4'>
                <Link to="/logout" className="link text-decoration-none"><button className='btn bg-danger text-white'>LogOut</button></Link>
              </li>
            </form>

          </div>


        </div>
      </nav>
    </div>
  )
}

export default Navbar
