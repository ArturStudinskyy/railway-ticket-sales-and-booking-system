import { Link } from "react-router-dom";

function TrainCard({ train }) {
    return (
        <div>
            <h3>Train {train.number}</h3>
            <p>
                Route: {train.routeFrom} - {train.routeTo}
            </p>
            <p>Departure: {train.departureTime}</p>
            <p>Duration: {train.duration}</p>
            <Link to={`/booking/${train.id}`}>Вибрати місця</Link>
        </div>
    );
}

export default TrainCard;
