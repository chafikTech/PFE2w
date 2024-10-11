import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { menuItems } from "./food";
import { SelectedItemsContext } from "./SelectedItemsContext";
import "./Menu.css";

const Menu = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState({ title: "", image: "", description: "", price: "" });
    const { selectedItems, addItem, removeItem } = useContext(SelectedItemsContext);

    const showModal = (title, image, description, price) => {
        setModalContent({ title, image, description, price });
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const toggleSelectItem = (item) => {
        const isSelected = selectedItems.find((i) => i.title === item.title);
        if (isSelected) {
            removeItem(item.title);
        } else {
            addItem(item);
        }
    };

    return (
        <div className="menu-con">
            <h1 className="hh">Our Menu</h1>
            <div className="menu-items">
                {menuItems.map((item, index) => (
                    <div key={index} className="card" onClick={() => showModal(item.title, item.image, item.description, item.price)}>
                        <div className="card__image">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className="card__info">
                            <div className="card__info--title">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                            <div className="card__info--price">
                                <p>{item.price}</p>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {modalVisible && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>{modalContent.title}</h2>
                            <button className="modal-close" onClick={closeModal}>&times;</button>
                        </div>
                        <img className="modal-image" src={modalContent.image} alt={modalContent.title} />
                        <p>{modalContent.description}</p>
                        <p>{modalContent.price}</p>
                        <div className="add-panel">
                            <input
                                type="checkbox"
                                checked={selectedItems.some((item) => item.title === modalContent.title)}
                                onChange={() => toggleSelectItem(modalContent)}
                            />
                            <label>Add To the card</label>
                        </div>
                        <Link to="/payment">
                            <button className="payment-button">Go to Payment</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Menu;

