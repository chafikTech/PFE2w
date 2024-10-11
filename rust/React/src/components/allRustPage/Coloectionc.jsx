import CardRus from "./CardRus";
import "./Coloectionc.css";
import { data } from "./rustColl";

const Coloectionc = () => {
    return (
        <div className="container-card-res">
            {data.map((card) => {
                return <CardRus key={card.id} location={card.location} />;
            })}
        </div>
    );
};

export default Coloectionc;
