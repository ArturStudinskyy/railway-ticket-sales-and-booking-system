import { Link } from "react-router-dom";
import styles from "./TrainCard.module.css";

function TrainCard({ train }) {
    return (
        <div className={styles.trainCard}>
            <h3 className={styles.trainCardTitle}>Подяг: {train.number}</h3>
            <p>
                Маршрут: {train.routeFrom} - {train.routeTo}
            </p>
            <p>Відправлення: {train.departureTime}</p>
            <p>Тривалість: {train.duration} годин</p>
            <Link className={styles.trainCardLink} to={`/booking/${train.id}`}>
                Вибрати місця
            </Link>
        </div>
    );
}

export default TrainCard;
