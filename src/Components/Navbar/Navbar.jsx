import { FaRegBell } from "react-icons/fa";
import "./Navbar.css";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="main_navbar_top_container">
          <div className="navbar_logo_container">
            <h1>
              Auction<span>Galleary</span>
            </h1>
          </div>

          <div className="navbar_navigation_container">
            <ul>
              <li>Home</li>
              <li>Auctions</li>
              <li>Categories</li>
              <li>How to works</li>
            </ul>
          </div>

          <div className="navbar_user_profile_container">
            <span>
              <FaRegBell />
            </span>
            <span>
              <CgProfile />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;