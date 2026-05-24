import { useState } from "react";

import WagonSelector from "../components/WagonSelector";

function BookingPage() {
    const wagons = [1, 2, 3];
    const [activeWagon, setActiveWagon] = useState(wagons[0]);

    return (
        <div>
            <h3>Booking Page</h3>
            <WagonSelector
                wagons={wagons}
                activeWagon={activeWagon}
                onSelectWagon={setActiveWagon}
            />
        </div>
    );
}

export default BookingPage;
