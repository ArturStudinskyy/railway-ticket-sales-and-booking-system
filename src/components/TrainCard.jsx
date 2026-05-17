import { Link } from "react-router-dom";

function TrainCard({ train }) {
    return (
        <div className="train-card">
            <h3 className="train-card__title">Train {train.number}</h3>
            <p>
                Route: {train.routeFrom} - {train.routeTo}
            </p>
            <p>Departure: {train.departureTime}</p>
            <p>Duration: {train.duration}</p>
            <Link className="train-card__link" to={`/booking/${train.id}`}>
                Вибрати місця
            </Link>
        </div>
    );
}

export default TrainCard;
