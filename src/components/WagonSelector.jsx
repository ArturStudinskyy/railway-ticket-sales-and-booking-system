const WagonSelector = ({ wagons, activeWagon, onSelectWagon }) => {
    return (
        <div>
            {wagons.map((wagon) => (
                <button
                    key={wagon}
                    type="button"
                    onClick={() => onSelectWagon(wagon)}
                    aria-pressed={wagon === activeWagon}
                >
                    {`Вагон ${wagon}`}
                </button>
            ))}
        </div>
    );
};

export default WagonSelector;
