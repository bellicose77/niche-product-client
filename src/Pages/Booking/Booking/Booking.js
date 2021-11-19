import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

const Booking = () => {
    const { serviceId } = useParams();
    const [booking, setBooking] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/details/${serviceId}`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, []);

    return (

        <div className="container m-5">

            <Row xs={1} md={1} className="g-4">

                <Col>
                    <Card>
                        <Card.Img variant="top" src={booking.img} />
                        <Card.Body>
                            <Card.Title>{booking.name}</Card.Title>
                            <Card.Text>
                                <p className="text-danger">{booking.description}</p>
                                <p className="text-danger" >{booking.price}</p>

                            </Card.Text>
                            <NavLink to={`/products/${serviceId}`} className="w-100 btn btn-primary">
                                Purchase
                            </NavLink>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Booking;