import { Link } from "react-router-dom";

function TrainCard({ train }) {
    return (
        <div className="train-card">
            <h3 className="train-card__title">Подяг: {train.number}</h3>
            <p>
                Маршрут: {train.routeFrom} - {train.routeTo}
            </p>
            <p>Відправлення: {train.departureTime}</p>
            <p>Тривалість: {train.duration} годин</p>
            <Link className="train-card__link" to={`/booking/${train.id}`}>
                Вибрати місця
            </Link>
        </div>
    );
}

export default TrainCard;
