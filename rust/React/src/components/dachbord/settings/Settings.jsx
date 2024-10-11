import "./Settings.css";

const Settings = () => {
    return (
        <div className="setting-container">
            <h1>Settings</h1>
            <div className="notification-cont">
                <header>
                    <h3>Notifications</h3>
                    <span>Manage the notifications</span>
                </header>
                <main>
                    <section>
                        <h3>Email</h3>
                        <div className="checkbox-group">
                            <label>
                                <input
                                    type="checkbox"
                                    name="emailProductUpdates"
                                />{" "}
                                Product updates
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="emailSecurityUpdates"
                                />{" "}
                                Security updates
                            </label>
                        </div>
                    </section>
                    <section>
                        <h3>Phone</h3>
                        <div className="checkbox-group">
                            <label>
                                <input
                                    type="checkbox"
                                    name="phoneProductUpdates"
                                />{" "}
                                Product updates
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="phoneSecurityUpdates"
                                />{" "}
                                Security updates
                            </label>
                        </div>
                    </section>
                </main>
                <button className="btn-seting">Save changes</button>
            </div>
            <div className="notification-cont">
                <header>
                    <h3>Password</h3>
                    <span>Update password</span>
                </header>
                <main>
                    <div className="password-update">
                        <input
                            type="password"
                            name="newPassword"
                            placeholder="New Password"
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                        />
                    </div>
                </main>
                <button className="btn-seting">Update</button>
            </div>
        </div>
    );
};

export default Settings;
