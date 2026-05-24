import { useState } from "react";

const SeatMap = ({ seats, onSeatClick, selectedSeatIds: controlledSelected }) => {
    const [internalSelected, setInternalSelected] = useState([]);
    const selectedSeatIds = controlledSelected ?? internalSelected;

    const handleSeatClick = (seat) => {
        if (seat.status === "booked") {
            return;
        }

        const nextSelected = selectedSeatIds.includes(seat.id)
            ? selectedSeatIds.filter((id) => id !== seat.id)
            : [...selectedSeatIds, seat.id];

        if (controlledSelected === undefined) {
            setInternalSelected(nextSelected);
        }

        if (onSeatClick) {
            onSeatClick(nextSelected, seat);
        }
    };

    return (
        <div className="seat-map">
            {seats.map((seat) => {
                const isBooked = seat.status === "booked";
                const isSelected = selectedSeatIds.includes(seat.id);
                const seatClasses = [
                    "seat",
                    `seat--${seat.status}`,
                    isSelected ? "seat--selected" : "",
                ]
                    .filter(Boolean)
                    .join(" ");

                return (
                    <button
                        key={seat.id}
                        type="button"
                        onClick={() => handleSeatClick(seat)}
                        disabled={isBooked}
                        aria-pressed={isSelected}
                        className={seatClasses}
                    >
                        {seat.id}
                    </button>
                );
            })}
        </div>
    );
};

export default SeatMap;
