import { useState } from "react";
import "./BookTable.css";
import FormTable from "./FormTable";
import Modal from "./Modal";

const BookTable = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleFormSubmit = () => {
    setModalMessage("Table was booked successfully!");
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <div className="container-bookTa">
      <h1>Book Table</h1>
      <div className="bookTable">
        <div className="form-container-table">
          <FormTable onFormSubmit={handleFormSubmit} />
        </div>
        <div className="table-img">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20230817/pngtree-tables-set-at-a-restaurant-image_13032060.jpg"
            alt="dd"
          />
          <img
            src="https://png.pngtree.com/thumb_back/fw800/background/20230811/pngtree-the-restaurant-is-being-decorated-image_13028896.jpg"
            alt="dd"
          />
          <img
            src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MTY2MTU3Ny13aWtpbWVkaWEtaW1hZ2Uta293YXBlZWouanBn.jpg"
            alt="dd"
          />
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20210908/pngtree-neat-table-at-night-restaurant-outdoor-without-photography-map-image_825174.jpg"
            alt="dd"
          />
        </div>
      </div>
      <Modal
        isVisible={isModalVisible}
        message={modalMessage}
        onClose={closeModal}
      />
    </div>
  );
};

export default BookTable;
