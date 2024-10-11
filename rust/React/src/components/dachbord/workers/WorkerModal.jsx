import "./Modal.css";

const WorkerModal = ({ isVisible, worker, onClose }) => {
    if (!isVisible || !worker) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>{`${worker.firstName} ${worker.lastName}`}</h2>
                    <button className="modal-close" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className="modal-body">
                    <img
                        src={worker.profileImg}
                        alt={`${worker.firstName} ${worker.lastName}`}
                    />
                    <div className="inf-modal">
                        <p>
                            <strong>Name:</strong>{" "}
                            {`${worker.firstName} ${worker.lastName}`}
                        </p>
                        <p>
                            <strong>Salary:</strong> {worker.salary}
                        </p>
                        <p>
                            <strong>Specialization:</strong>{" "}
                            {worker.specialization}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkerModal;
