import { useContext, useState } from "react";
import { SelectedItemsContext } from "../menu/SelectedItemsContext";
import "./Pyament.css";


const Payment = () => {
    const { selectedItems, removeItem } = useContext(SelectedItemsContext);
    const [isModalVisible, setModalVisible] = useState(false);

    const totalPrice = selectedItems.reduce(
        (total, item) => total + parseFloat(item.price.replace("$", "")),
        0
    );

    const handleConfirmPayment = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <div className="payment-con">
            <h1 className="hh">Payment</h1>
            <div className="payment-items">
                {selectedItems.map((item, index) => (
                    <div key={index} className="payment-item">
                        <img src={item.image} alt={item.title} className="payment-item-image" />
                        <div className="payment-item-details">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                            <button className="delete-button" onClick={() => removeItem(item.title)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="total-price">
                <h2>Total: {totalPrice.toFixed(2)}  MAD</h2>
            </div>
            <button className="confirm-button" onClick={handleConfirmPayment}>Confirm Payment</button>

            {isModalVisible && (
                <div className="modal-overlay-py">
                    <div className="modal-content-py">
                        <div className="modal-header-py">
                            <h2>Enter Payment Information</h2>
                            <button className="modal-close-py" onClick={closeModal}>&times;</button>
                        </div>
                        <div className="modal-body-py">
                            <form>
                                <div className="form-group-py">
                                    <label htmlFor="cardNumber">Card Number:</label>
                                    <input type="text" id="cardNumber" name="cardNumber" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cardName">Cardholder Name:</label>
                                    <input type="text" id="cardName" name="cardName" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="expiryDate">Expiry Date:</label>
                                    <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cvv">CVV:</label>
                                    <input type="text" id="cvv" name="cvv" required />
                                </div>
                                <button type="submit" className="payment-submit-button">Submit Payment</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Payment;

