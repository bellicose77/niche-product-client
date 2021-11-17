import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Explore from '../Explore/Explore';

const Explores = () => {
    const [explores, setExplores] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/details')
            .then(res => res.json())
            .then(data => setExplores(data))

    }, []);
    console.log(explores);
    return (
        <div className="container m-5">
            <h2>Our Services: </h2>
            <Row xs={1} md={3} className="g-4">
                {
                    explores.map(explore => <Explore key={explore._id} explore={explore}></Explore>)
                }

            </Row>

        </div >
    );
};

export default Explores;