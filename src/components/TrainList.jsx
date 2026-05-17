import TrainCard from "./TrainCard";

function TrainList({ trains }) {
    return (
        <div className="train-list">
            {trains.map((train) => (
                <TrainCard key={train.id} train={train} />
            ))}
        </div>
    );
}

export default TrainList;
