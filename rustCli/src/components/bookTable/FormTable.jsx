import "./FormTable.css";
const FormTable = ({ onFormSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit();
  };

  return (
    <div className="container-form-t">
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <label>Full Name</label>
          <input type="text" required />
        </div>
        <div className="input-box">
          <label>Phone Number</label>
          <input type="text" required />
        </div>
        <div className="input-box">
          <label>City</label>
          <input type="text" required />
        </div>
        <div className="input-box">
          <label>Time</label>
          <input type="text" required />
        </div>
        <div className="input-box">
          <label>Type of the Table</label>
          <input type="text" required />
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default FormTable;
