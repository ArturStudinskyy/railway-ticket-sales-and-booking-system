import { useState } from "react";

import TrainList from "../components/TrainList";
import { trains } from "../data/trains";

function Home() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const normalizedSearchTerm = searchTerm.toLowerCase();
    const filteredTrains = trains.filter((train) => {
        return (
            train.number.toLowerCase().includes(normalizedSearchTerm) ||
            train.routeFrom.toLowerCase().includes(normalizedSearchTerm) ||
            train.routeTo.toLowerCase().includes(normalizedSearchTerm)
        );
    });

    return (
        <div>
            <input type="text" value={searchTerm} onChange={handleSearchChange} />
            {filteredTrains.length === 0 ? (
                <p>Рейсів не знайдено</p>
            ) : (
                <TrainList trains={filteredTrains} />
            )}
        </div>
    );
}

export default Home;
