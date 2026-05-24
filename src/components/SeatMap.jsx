import { useState } from "react";

import styles from "./SeatMap.module.css";

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
        <div className={styles.seatMap}>
            {seats.map((seat) => {
                const isBooked = seat.status === "booked";
                const isSelected = selectedSeatIds.includes(seat.id);
                const statusClass = isSelected
                    ? styles.seatSelected
                    : isBooked
                        ? styles.seatBooked
                        : styles.seatFree;
                const seatClasses = [styles.seat, statusClass].join(" ");

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
