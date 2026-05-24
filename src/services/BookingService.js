const BOOKED_SEATS_KEY = "bookedSeatsByTrain";

const getSeatStore = () => {
    const raw = localStorage.getItem(BOOKED_SEATS_KEY);

    if (!raw) {
        return {};
    }

    try {
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === "object" ? parsed : {};
    } catch (error) {
        return {};
    }
};

const saveSeatStore = (store) => {
    localStorage.setItem(BOOKED_SEATS_KEY, JSON.stringify(store));
};

const BookingService = {
    saveBookedSeats(trainId, wagon, seatIds) {
        const store = getSeatStore();
        const trainKey = String(trainId ?? "");
        const wagonKey = String(wagon ?? "");

        if (!store[trainKey]) {
            store[trainKey] = {};
        }

        store[trainKey][wagonKey] = Array.isArray(seatIds) ? seatIds : [];
        saveSeatStore(store);
    },
    getBookedSeats(trainId, wagon) {
        const store = getSeatStore();
        const trainKey = String(trainId ?? "");
        const wagonKey = String(wagon ?? "");
        const seats = store?.[trainKey]?.[wagonKey];

        return Array.isArray(seats) ? seats : [];
    },
};

export { BookingService };
