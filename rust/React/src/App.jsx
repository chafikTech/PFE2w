import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/firstPage/LoginPage";
import Coloectionc from "./components/allRustPage/Coloectionc";
import Dachbord from "./components/dachbord/Dachbord";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/home" element={<Coloectionc />} />
            <Route path="/Dachbord/*" element={<Dachbord />} />
        </Routes>
    );
}

export default App;
