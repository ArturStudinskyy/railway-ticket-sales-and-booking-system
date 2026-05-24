const WagonSelector = ({ wagons, activeWagon, onSelectWagon }) => {
    return (
        <div className="wagon-selector">
            {wagons.map((wagon) => (
                <button
                    key={wagon}
                    type="button"
                    onClick={() => onSelectWagon(wagon)}
                    aria-pressed={wagon === activeWagon}
                    className="wagon-button"
                >
                    {`Вагон ${wagon}`}
                </button>
            ))}
        </div>
    );
};

export default WagonSelector;
