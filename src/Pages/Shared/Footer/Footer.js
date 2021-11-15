import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <div className="footer-container fluid">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h4>Contact us</h4>
                        <p>House #16, Road # 2, Dhanmondi R/A, Dhaka-1205,

                            Bangladesh,</p>
                        <p>Phone: 01620652420</p>
                        <p>Email: dbellicose77@gmail.com</p>
                    </div>
                    <div className="col-md-4">
                        <h4 className="">Important Links</h4>
                        <div className="footer-continer-menu">
                            <ul className="menu">
                                <a href="#">
                                    <li>Sports Car</li>
                                </a>
                                <a href="#">
                                    <li>Sedan</li>
                                </a>
                                <a href="#">
                                    <li>MiniVan</li>
                                </a>
                                <a href="#">
                                    <li>Super Car</li>
                                </a>

                            </ul>
                        </div>

                    </div>
                    <div className="col-md-3">
                        <h4>QuickLinks</h4>
                        <div className="footer-container-menu">
                            <ul className="menu">
                                <NavLink to="/home" activeStyle={activeStyle} className="footer-item"><li >Home</li></NavLink>
                                <NavLink to="/about" className="footer-item" activeStyle={activeStyle}><li >About</li></NavLink>
                                <NavLink to="/service" className="footer-item" activeStyle={activeStyle}><li >Services</li></NavLink>
                                <NavLink to="/contact" className="footer-item" activeStyle={activeStyle}><li >Contact</li></NavLink>


                            </ul>
                        </div>
                    </div>
                </div>
                <p className="text-center">&copy;DulalHalder</p>
            </div>


        </div >
    );
};

export default Footer;