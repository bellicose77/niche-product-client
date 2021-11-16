import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';



const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/QXDPyjr/Slider-4.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>Sports Car</h2>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/cxn4Hrt/Slider-3.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2>Sedan Car</h2>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/brNPr33/Slider-1.jpg
                        "
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2>Super Car</h2>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;