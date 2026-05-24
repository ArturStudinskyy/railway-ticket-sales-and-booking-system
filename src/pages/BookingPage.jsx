import { useState } from "react";
import { toast } from "react-toastify";

import BookingForm from "../components/BookingForm";
import SeatMap from "../components/SeatMap";
import WagonSelector from "../components/WagonSelector";
import { BookingService } from "../services/BookingService";
import styles from "./BookingPage.module.css";

const SEAT_COUNT = 24;
const FORM_STORAGE_KEY = "bookingFormData";

const createSeats = (bookedSeatIds) =>
    Array.from({ length: SEAT_COUNT }, (_, index) => {
        const id = index + 1;
        return {
            id,
            status: bookedSeatIds.includes(id) ? "booked" : "free",
        };
    });

function BookingPage() {
    const wagons = [1, 2, 3];
    const [activeWagon, setActiveWagon] = useState(wagons[0]);
    const [seats, setSeats] = useState(() =>
        createSeats(BookingService.getBookedSeats())
    );
    const [selectedSeatIds, setSelectedSeatIds] = useState([]);

    const handleSeatClick = (nextSelected) => {
        setSelectedSeatIds(nextSelected);
    };

    const handleSubmit = (formData) => {
        localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formData));

        setSeats((prevSeats) => {
            const nextSeats = prevSeats.map((seat) =>
                selectedSeatIds.includes(seat.id)
                    ? { ...seat, status: "booked" }
                    : seat
            );
            const bookedSeatIds = nextSeats
                .filter((seat) => seat.status === "booked")
                .map((seat) => seat.id);

            BookingService.saveBookedSeats(bookedSeatIds);
            return nextSeats;
        });

        setSelectedSeatIds([]);
        toast.success("Бронювання успішно оформлено!");

        return true;
    };

    return (
        <div className={styles.bookingPage}>
            <div className={styles.bookingPageHeader}>
                <h3>Сторінка бронювання</h3>
                <p>Оберіть вагон і потрібні місця, а потім підтвердіть бронювання.</p>
            </div>
            <section className={styles.bookingCard}>
                <h4>Вибір вагона</h4>
                <WagonSelector
                    wagons={wagons}
                    activeWagon={activeWagon}
                    onSelectWagon={setActiveWagon}
                />
            </section>
            <section className={styles.bookingCard}>
                <h4>Схема місць (вагон {activeWagon})</h4>
                <SeatMap
                    seats={seats}
                    selectedSeatIds={selectedSeatIds}
                    onSeatClick={handleSeatClick}
                />
            </section>
            <section className={styles.bookingCard}>
                <h4>Дані пасажира</h4>
                <BookingForm onSubmit={handleSubmit} />
            </section>
        </div>
    );
}

export default BookingPage;
