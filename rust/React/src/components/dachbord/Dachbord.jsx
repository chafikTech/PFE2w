import { Navigate, Route, Routes } from "react-router-dom";
import NavDachBord from "./navDachbord/NavDachBord";
import MenuBar from "./menubar/MenuBar";
import OverView from "./overview/OverView";
import "./Dachbord.css"; // Optional, for styling
import Workers from "./workers/Workers";
import Orders from "./orders/Orders";
import Reviews from "./reviews/Reviews";
import Account from "./account/Account";
import Settings from "./settings/Settings";

const Dachbord = () => {
    return (
        <div className="dashboard">
            <NavDachBord />
            <MenuBar />
            <div className="content">
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/dachbord/overview" />}
                    />
                    <Route path="/overview" element={<OverView />} />
                    <Route path="/workers" element={<Workers />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
        </div>
    );
};

export default Dachbord;
