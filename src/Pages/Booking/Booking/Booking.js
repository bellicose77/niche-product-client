import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [booking, setBooking] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/details/${serviceId}`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, []);

    return (
        <div>
            <h2>this is booking page: {serviceId}</h2>
            <h2>{booking.name}</h2>
            <p className="text-danger">{booking.description}</p>
            <p className="text-danger">{booking.price}</p>
        </div>
    );
};

export default Booking;