import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import "./NacBar.css";

const NavBar = () => {
  return (
    <nav className="navBar-con">
      <div className="navBar-logo">
        <img src={Logo} alt="logo" />
      </div>
      <ul className="nav-items">
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/service">
          <li>Service</li>
        </Link>
        <Link to="/menu">
          <li>Menu </li>
        </Link>
        <Link to="/Contact">
          <li>Contact </li>
        </Link>
        <Link to="/bookTable">
          <li className="item-sp">Book A Table </li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
