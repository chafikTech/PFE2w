import Logo from "../../../assets/Logo.png";
import { MdPreview } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import { FaBorderAll } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { FaDigitalOcean } from "react-icons/fa6";
import "./MenuBar.css";
import { NavLink, Outlet } from "react-router-dom";

const MenuBar = () => {
    return (
        <>
            <div className="menu-bar-container">
                <div className="menu-logo">
                    <img src={Logo} alt="logo" />
                </div>
                <ul>
                    <li>
                        <NavLink
                            to="/Dachbord/overview"
                            className={({ isActive }) => {
                                if (isActive) return "active-link";
                            }}
                        >
                            <FaDigitalOcean size={22} />
                            Overview
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Dachbord/workers"
                            className={({ isActive }) => {
                                if (isActive) return "active-link";
                            }}
                        >
                            <SiCodechef size={22} />
                            Workers
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Dachbord/orders"
                            className={({ isActive }) => {
                                if (isActive) return "active-link";
                            }}
                        >
                            <FaBorderAll size={22} />
                            Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Dachbord/reviews"
                            className={({ isActive }) => {
                                if (isActive) return "active-link";
                            }}
                        >
                            <MdPreview size={22} />
                            Reviews
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Dachbord/account"
                            className={({ isActive }) => {
                                if (isActive) return "active-link";
                            }}
                        >
                            <MdManageAccounts size={22} />
                            Account
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Dachbord/settings"
                            className={({ isActive }) => {
                                if (isActive) return "active-link";
                            }}
                        >
                            <IoMdSettings size={22} />
                            Settings
                        </NavLink>
                    </li>
                </ul>
            </div>
            <Outlet />
        </>
    );
};

export default MenuBar;
