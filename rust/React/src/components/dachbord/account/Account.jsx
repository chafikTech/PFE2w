import "./Account.css";

const Account = () => {
    return (
        <div className="account-container">
            <div className="account-card">
                <img
                    src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"
                    alt="img"
                />
                <h3>Mohamed Chafik</h3>
                <span>CEO OF THE MODERN</span>
                <input className="custom-file-input" type="file" />
            </div>
            <div className="edit-con">
                <header>Profile</header>
                <form action="#">
                    <div className="form">
                        <div className="details personal">
                            <span className="title">Personal Details</span>
                            <div className="fields">
                                <div className="input-field">
                                    <label>First Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your first name"
                                        required
                                    />
                                </div>
                                <div className="input-field">
                                    <label>Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your last name"
                                        required
                                    />
                                </div>
                                <div className="input-field">
                                    <label>Phone Number</label>
                                    <input
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        required
                                    />
                                </div>
                                <div className="input-field">
                                    <label>Country</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your country"
                                        required
                                    />
                                </div>
                                <div className="input-field">
                                    <label>City</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your city"
                                        required
                                    />
                                </div>
                                <div className="input-field">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                            </div>
                            <button className="submitBtn">
                                <span className="btnText">Submit</span>
                                <i className="uil uil-navigator"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Account;
