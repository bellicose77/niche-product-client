import { Button } from '@mui/material';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    console.log("hello nab");
    console.log(user.email);
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={NavLink} to="/home" activeStyle={activeStyle} >CarHut</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={NavLink} to="/home" activeStyle={activeStyle}>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/Services" activeStyle={activeStyle}>Services</Nav.Link>
                        <Nav.Link as={NavLink} to="/about" activeStyle={activeStyle}>About</Nav.
                            Link>
                        <Nav.Link as={NavLink} to="/details" activeStyle={activeStyle}>Explore</Nav.
                            Link>
                        <Nav.Link as={NavLink} to="/contact" activeStyle={activeStyle}>Contact</Nav.
                            Link>
                        {
                            user?.email ? <Button onClick={logOut} variant="contained">Logout</Button> : <Nav.Link as={NavLink} to="/login" activeStyle={activeStyle}>Login</Nav.
                                Link>
                        }



                        <Navbar.Text>
                            Signed in as: <a href="#login"></a>
                        </Navbar.Text>
                    </Navbar.Collapse>


                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;