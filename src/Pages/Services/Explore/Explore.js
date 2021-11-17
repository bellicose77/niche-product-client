import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Explore = (props) => {
    const { _id, name, img, description, price } = props.explore;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className="img-container" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <p className="text-danger">{description}</p>
                            <div >
                                <p className="text-danger">${price}</p>

                            </div>
                        </Card.Text>
                        <div className="button-dis">
                            <Link to={`/booking/${_id}`}>
                                <button className="btn btn-warning">Purchase Now</button>
                            </Link>


                            {/* <Link to={`/services/update/${_id}`}>
                                <button className="btn btn-danger m-3">Update</button>
                            </Link> */}
                        </div>


                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Explore;