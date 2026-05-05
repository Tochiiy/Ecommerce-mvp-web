
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext"; 

const NavBar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Brand Logo */}
        <Link to={"/"} className="navbar-brand">HUBSHUB</Link>
        
        {/* Navigation Links */}
        <div className="navbar-links">
          <Link to={"/"} className="navbar-link">Home</Link>
          <Link to={"/checkout"} className="navbar-link">Cart</Link>
        </div>
        
        {/* Authentication Section */}
        <div className="navbar-auth">
          {!user ? (
            <div className="navbar-auth-links">
              <Link to={"/auth"} className="btn btn-secondary">Login</Link>
              <Link to={"/auth"} className="btn btn-primary">Sign up</Link>
            </div>
          ) : (
            <div className="navbar-user"> {/* <-- Updated to match CSS */}
              <span className="navbar-greeting">Hello, {user.email}</span>
              <button className="btn btn-secondary btn-small" onClick={logout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;