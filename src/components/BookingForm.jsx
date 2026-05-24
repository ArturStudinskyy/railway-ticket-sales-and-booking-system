import { useState } from "react";

import styles from "./BookingForm.module.css";

const initialValues = {
    name: "",
    phone: "",
    email: "",
};

const BookingForm = ({ onSubmit }) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const nextErrors = {};

        if (!values.name.trim()) {
            nextErrors.name = "Вкажіть ім'я";
        }

        if (!values.phone.trim()) {
            nextErrors.phone = "Вкажіть телефон";
        } else if (!/^[0-9]+$/.test(values.phone)) {
            nextErrors.phone = "Телефон має містити лише цифри";
        }

        if (!values.email.trim()) {
            nextErrors.email = "Вкажіть email";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
            nextErrors.email = "Некоректний формат email";
        }

        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validate()) {
            return;
        }

        const result = onSubmit ? onSubmit(values) : true;

        if (result !== false) {
            setValues(initialValues);
            setErrors({});
        }
    };

    return (
        <form className={styles.bookingForm} onSubmit={handleSubmit}>
            <div className={styles.formField}>
                <label htmlFor="booking-name">Ім'я</label>
                <input
                    id="booking-name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                />
                {errors.name && (
                    <div className={styles.formError} role="alert">
                        {errors.name}
                    </div>
                )}
            </div>
            <div className={styles.formField}>
                <label htmlFor="booking-phone">Телефон</label>
                <input
                    id="booking-phone"
                    name="phone"
                    type="text"
                    value={values.phone}
                    onChange={handleChange}
                />
                {errors.phone && (
                    <div className={styles.formError} role="alert">
                        {errors.phone}
                    </div>
                )}
            </div>
            <div className={styles.formField}>
                <label htmlFor="booking-email">Email</label>
                <input
                    id="booking-email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                />
                {errors.email && (
                    <div className={styles.formError} role="alert">
                        {errors.email}
                    </div>
                )}
            </div>
            <button className={styles.submitButton} type="submit">
                Підтвердити бронювання
            </button>
        </form>
    );
};

export default BookingForm;
