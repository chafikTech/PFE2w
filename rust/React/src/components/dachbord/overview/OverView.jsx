import { FaLongArrowAltUp } from "react-icons/fa";
import Highcharts from "highcharts";
import { GoPeople } from "react-icons/go";
import HighchartsReact from "highcharts-react-official";
import "./OverView.css";

const OverView = () => {
    const options = {
        chart: {
            type: "column",
        },
        title: {
            text: "The profit in the last month",
            align: "left",
        },
        subtitle: {
            text: 'Source: <a target="_blank" href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>',
            align: "left",
        },
        xAxis: {
            categories: ["6", "7", "8", "9", "10", "12"],
            crosshair: true,
            accessibility: {
                description: "Countries",
            },
        },
        yAxis: {
            min: 0,
            title: {
                text: "1000 metric tons (MT)",
            },
        },
        tooltip: {
            valueSuffix: " (1000 MT)",
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
            },
        },
        series: [
            {
                name: "Corn",
                data: [4062, 2600, 1070, 6830, 2750, 1450],
            },
            {
                name: "Wheat",
                data: [5108, 13600, 5500, 14100, 10710, 7700],
            },
        ],
    };
    return (
        <div className="over-container">
            <div className="card-container-over">
                <div className="card-over">
                    <span className="titile-card-over">profit</span>
                    <span className="mad-logo">MAD</span>
                    <h3>10 000</h3>
                    <div className="card-tp-dw">
                        <span className="inof-card-ov">
                            <FaLongArrowAltUp />
                            12%
                        </span>
                        <span>Since last month</span>
                    </div>
                </div>
                <div className="card-over">
                    <span className="titile-card-over">Total Customers</span>
                    <span className="mad-customer">
                        <GoPeople size={25} />
                    </span>
                    <h3>20k</h3>
                    <div className="card-tp-dw">
                        <span className="inof-card-ov">
                            <FaLongArrowAltUp />
                            7%
                        </span>
                        <span>Since last month</span>
                    </div>
                </div>
                <div className="card-over">
                    <span className="titile-card-over">TASK PROGRESS</span>
                    <span className="mad-logo">📋</span>
                    <h3>75%</h3>
                    <div className="card-tp-dw">
                        <div className="progress-bar">
                            <div className="progress"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-digram">
                <HighchartsReact highcharts={Highcharts} options={options} />;
            </div>
        </div>
    );
};

export default OverView;
