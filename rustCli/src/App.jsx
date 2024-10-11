import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Home from "./components/Home/Home";
import Footer from "./components/Home/Carousel/Footer";
import About from "./components/About/About";
import Service from "./components/service/Service";
import Menu from "./components/menu/Menu";
import Contact from "./components/contact/Contact";
import BookTable from "./components/bookTable/BookTable";
import Payment from "./components/pymant/Pyament";
import { SelectedItemsProvider } from "./components/menu/SelectedItemsContext";
// import { InfinitySpin } from "react-loader-spinner";

function App() {
  return (
    <SelectedItemsProvider>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookTable" element={<BookTable />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer />
      </div>
    </SelectedItemsProvider>
  );
}

export default App;

