import "./Modal.css";

const Modal = ({ isVisible, message, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay-boo">
      <div className="modal-content-boo">
        <div className="modal-header-boo">
          <h2>Booking Confirmation</h2>
          <button className="modal-close-boo" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body-boo">
          <p>{message}</p>
          <button className="modal-button-boo" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

