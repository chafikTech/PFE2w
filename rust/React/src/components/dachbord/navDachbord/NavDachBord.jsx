import { IoIosContacts, IoIosNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa"; // Import the new search icon
import { IoIosSettings } from "react-icons/io";
import { FaUserPen } from "react-icons/fa6";
import { RiLogoutBoxFill } from "react-icons/ri";
import "./NavDachBord.css";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const NavDachBord = () => {
    const [open, setOpen] = useState(false);
    const [noti, setNoti] = useState(false);
    const [acc, setAcc] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };
    const handleNoti = () => {
        setNoti(!noti);
    };
    const handleAcc = () => {
        setAcc(!acc);
    };

    return (
        <>
            <nav className="nav-dachbord">
                <div className="search-box">
                    <button className="btn-search">
                        <FaSearch />
                    </button>
                    <input
                        type="text"
                        className="input-search"
                        placeholder="Type to Search..."
                    />
                </div>
                <div className="sid-dachbord">
                    <button onClick={handleAcc}>
                        <IoIosContacts size={25} />
                    </button>
                    <button onClick={handleNoti}>
                        <IoIosNotifications size={25} />
                    </button>
                    <div className="profile">
                        <button onClick={handleOpen}>
                            <img
                                src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"
                                alt="profile"
                            />
                        </button>
                    </div>
                </div>
                {open ? (
                    <ul className="drop-down">
                        <li className="drop-item">
                            <button>
                                <IoIosSettings className="icon" size={25} />
                                <Link to="http://localhost:3000/Dachbord/settings">
                                    Settings
                                </Link>
                            </button>
                        </li>
                        <li className="drop-item">
                            <button>
                                <FaUserPen className="icon" size={25} />
                                <Link to="http://localhost:3000/Dachbord/account">
                                    Account
                                </Link>
                            </button>
                        </li>
                        <li className="drop-item">
                            <button>
                                <RiLogoutBoxFill className="icon" size={30} />
                                <Link to="http://localhost:3000/">Log out</Link>
                            </button>
                        </li>
                    </ul>
                ) : null}
                {noti ? (
                    <ul className="drop-down">
                    </ul>
                ) : null}
                {acc ? (
                    <ul className="drop-down">
                    </ul>
                ) : null}
            </nav>
            <Outlet />
        </>
    );
};

export default NavDachBord;
