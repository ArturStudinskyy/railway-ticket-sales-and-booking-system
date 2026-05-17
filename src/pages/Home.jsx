import { useState } from "react";

import TrainList from "../components/TrainList";
import { trains } from "../data/trains";

function Home() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <input type="text" value={searchTerm} onChange={handleSearchChange} />
            <TrainList trains={trains} />
        </div>
    );
}

export default Home;
