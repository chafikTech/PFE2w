import Logo from "../../assets/Logo.png";
import "./CardRus.css";

const CardRus = ({ location }) => {
    const submitHandler = () => {
        window.location.href = "./Dachbord";
    };
    return (
        <section className="card">
            <div className="product-image">
                <img src={Logo} alt="OFF-white Red Edition" draggable="false" />
            </div>
            <div className="product-info">
                <h2>{location}</h2>
            </div>
            <div className="btn">
                <button onClick={submitHandler} className="buy-btn">
                    Manage Now
                </button>
            </div>
        </section>
    );
};

export default CardRus;
