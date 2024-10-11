import { useState } from "react";
import "./Orders.css";

const Orders = () => {
    const [order, setOrders] = useState(true);
    const [deleverd, setDeleverd] = useState(false);
    const orderHandler = () => {
        setOrders(!order);
        setDeleverd(!deleverd);
    };
    const deleverdHandler = () => {
        setOrders(!order);
        setDeleverd(!deleverd);
    };
    return (
        <div className="orders-container">
            <div className="container-btns">
                <button onClick={orderHandler}>Orders</button>
                <button onClick={deleverdHandler}>Deleverd </button>
            </div>
            {order && (
                <div className="order-con">
                    <ul className="responsive-table">
                        <li className="table-header">
                            <div className="col col-1">Name</div>
                            <div className="col col-2">Location</div>
                            <div className="col col-3">Price</div>
                            <div className="col col-4">Commende</div>
                        </li>
                        <li className="table-row">
                            <div className="col col-1" data-label="Job Id">
                                Mohamed Chafik
                            </div>
                            <div
                                className="col col-2"
                                data-label="Customer Name"
                            >
                                Souk sebt Heay Nahda
                            </div>
                            <div className="col col-3" data-label="Amount">
                                35 MAD
                            </div>
                            <div
                                className="col col-4"
                                data-label="Payment Status"
                            >
                                <img
                                    src="https://www.crousti-tacos.fr/data/uploads/2022/02/origine-tacos.jpg"
                                    alt="imd"
                                />
                            </div>
                        </li>
                        <li className="table-row">
                            <div className="col col-1" data-label="Job Id">
                                Mohamed Chafik
                            </div>
                            <div
                                className="col col-2"
                                data-label="Customer Name"
                            >
                                Souk sebt Heay Nahda
                            </div>
                            <div className="col col-3" data-label="Amount">
                                25 MAD
                            </div>
                            <div
                                className="col col-4"
                                data-label="Payment Status"
                            >
                                <img
                                    src="https://www.moulinex-me.com/medias/?context=bWFzdGVyfHJvb3R8MTQzNTExfGltYWdlL2pwZWd8aGNlL2hmZC8xNTk2ODYyNTc4NjkxMC5qcGd8MmYwYzQ4YTg0MTgzNmVjYTZkMWZkZWZmMDdlMWFlMjRhOGIxMTQ2MTZkNDk4ZDU3ZjlkNDk2MzMzNDA5OWY3OA"
                                    alt="imd"
                                />
                            </div>
                        </li>
                        <li className="table-row">
                            <div className="col col-1" data-label="Job Id">
                                Mohamed Chafik
                            </div>
                            <div
                                className="col col-2"
                                data-label="Customer Name"
                            >
                                Souk sebt Heay Nahda
                            </div>
                            <div className="col col-3" data-label="Amount">
                                40 MAD
                            </div>
                            <div
                                className="col col-4"
                                data-label="Payment Status"
                            >
                                <img
                                    src="https://larderlove.com/wp-content/uploads/2016/09/pastitsio-feature-larderlove.com_.jpg"
                                    alt="imd"
                                />
                            </div>
                        </li>
                    </ul>
                </div>
            )}
            {deleverd && (
                <div className="deleverd-container">
                    <ul className="responsive-table">
                        <li
                            className="table-header"
                            style={{
                                backgroundColor: "#863a4a",
                                color: "white",
                            }}
                        >
                            <div className="col col-1">Commende</div>
                            <div className="col col-2">Date</div>
                            <div className="col col-3">Price</div>
                            <div className="col col-4">Status</div>
                        </li>
                        <li className="table-row">
                            <div
                                className="col col-4"
                                data-label="Payment Status"
                            >
                                <img
                                    src="https://www.crousti-tacos.fr/data/uploads/2022/02/origine-tacos.jpg"
                                    alt="imd"
                                />
                            </div>
                            <div className="col col-1" data-label="Job Id">
                                2024-06-27
                            </div>
                            <div
                                className="col col-2"
                                data-label="Customer Name"
                            >
                                35 MAD
                            </div>
                            <div className="col col-3 img-3" data-label="Amount">
                                ✅
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Orders;
