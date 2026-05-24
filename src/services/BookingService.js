const BOOKED_SEATS_KEY = "bookedSeats";

const BookingService = {
    saveBookedSeats(seatIds) {
        localStorage.setItem(BOOKED_SEATS_KEY, JSON.stringify(seatIds));
    },
    getBookedSeats() {
        const raw = localStorage.getItem(BOOKED_SEATS_KEY);

        if (!raw) {
            return [];
        }

        try {
            const parsed = JSON.parse(raw);
            return Array.isArray(parsed) ? parsed : [];
        } catch (error) {
            return [];
        }
    },
};

export { BookingService };
