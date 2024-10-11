import { useState } from "react";
import Logo from "../../assets/Logo.png";
import axios from "axios";
import "./LoginPage.css";

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // axios
        //     .post("http://localhost:8000/api/register", formData)
        //     .then((response) => {
        //         // Handle success (e.g., show a success message)
        //         console.log(response.data);
        //     })
        //     .catch((error) => {
        //         // Handle error (e.g., display validation errors)
        //         if (error.response && error.response.data) {
        //             setErrors(error.response.data.errors);
        //         }
        //     });
        window.location.href = "/home";
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="logo-con">
                    <img src={Logo} alt="" />
                </div>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <span>{errors.name[0]}</span>}
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span>{errors.email[0]}</span>}
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <span>{errors.password[0]}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
