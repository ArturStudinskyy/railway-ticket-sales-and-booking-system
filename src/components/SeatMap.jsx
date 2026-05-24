import { useState } from "react";

const SeatMap = ({ seats, onSeatClick }) => {
    const [selectedSeatIds, setSelectedSeatIds] = useState([]);

    const handleSeatClick = (seat) => {
        if (seat.status === "booked") {
            return;
        }

        const nextSelected = selectedSeatIds.includes(seat.id)
            ? selectedSeatIds.filter((id) => id !== seat.id)
            : [...selectedSeatIds, seat.id];

        setSelectedSeatIds(nextSelected);

        if (onSeatClick) {
            onSeatClick(nextSelected, seat);
        }
    };

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(48px, 1fr))",
                gap: "8px",
            }}
        >
            {seats.map((seat) => {
                const isBooked = seat.status === "booked";
                const isSelected = selectedSeatIds.includes(seat.id);

                return (
                    <button
                        key={seat.id}
                        type="button"
                        onClick={() => handleSeatClick(seat)}
                        disabled={isBooked}
                        aria-pressed={isSelected}
                        style={{
                            padding: "8px",
                            border: "1px solid #ccc",
                            borderRadius: "6px",
                            backgroundColor: isBooked
                                ? "#f2f2f2"
                                : isSelected
                                    ? "#cfe9ff"
                                    : "#ffffff",
                            cursor: isBooked ? "not-allowed" : "pointer",
                        }}
                    >
                        {seat.id}
                    </button>
                );
            })}
        </div>
    );
};

export default SeatMap;
