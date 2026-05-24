import TrainCard from "./TrainCard";
import styles from "./TrainList.module.css";

function TrainList({ trains }) {
    return (
        <div className={styles.trainList}>
            {trains.map((train) => (
                <TrainCard key={train.id} train={train} />
            ))}
        </div>
    );
}

export default TrainList;
