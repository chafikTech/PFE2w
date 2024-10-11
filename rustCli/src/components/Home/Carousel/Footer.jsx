import logo from "../../../assets/Logo.png";
import "./Footer.css"; // Assuming the CSS is in a file named Footer.css
import { IonIcon } from "@ionic/react"; // Assuming you are using @ionic/react for IonIcons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <img src={logo} alt="l" style={{ width: "200px" }} />
      <ul className="social-icon">
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <IonIcon name="logo-facebook" />
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <IonIcon name="logo-twitter" />
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <IonIcon name="logo-linkedin" />
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <IonIcon name="logo-instagram" />
          </a>
        </li>
      </ul>
      <ul className="menu">
        <li className="menu__item">
          <a className="menu__link" href="#" style={{ color: "white" }}>
            Home
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#"style={{ color: "white" }}>
            About
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#"style={{ color: "white" }}>
            Services
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#"style={{ color: "white" }}>
            Team
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#"style={{ color: "white" }}>
            Contact
          </a>
        </li>
      </ul>
      <p>&copy;2024 Mohamed chafik | Mohamed Nezhi</p>
    </footer>
  );
};

export default Footer;
