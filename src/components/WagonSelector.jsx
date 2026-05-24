import styles from "./WagonSelector.module.css";

const WagonSelector = ({ wagons, activeWagon, onSelectWagon }) => {
    return (
        <div className={styles.wagonSelector}>
            {wagons.map((wagon) => (
                <button
                    key={wagon}
                    type="button"
                    onClick={() => onSelectWagon(wagon)}
                    aria-pressed={wagon === activeWagon}
                    className={styles.wagonButton}
                >
                    {`Вагон ${wagon}`}
                </button>
            ))}
        </div>
    );
};

export default WagonSelector;
