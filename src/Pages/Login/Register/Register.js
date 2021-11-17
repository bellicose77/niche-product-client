import { Grid, TextField, Typography, Container, Button, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [loginData, setLogingData] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newlogingdata = { ...loginData };
        newlogingdata[field] = value;
        setLogingData(newlogingdata);
        console.log(field, value);

    }
    const handleOnSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Successful form");
            return
        }
        Alert("successfully add ");
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} >
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    {


                        <form onSubmit={handleOnSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your email"
                                name="email"
                                onBlur={handleOnBlur}
                                variant="standard"
                            />


                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Confirm your password"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                variant="standard"
                            />
                            <Button type="submit" sx={{ width: '75%', m: 1 }} variant="contained">Register</Button>
                            <Link to="/login">
                                <Button variant="text">Already register?Login here</Button>
                            </Link>

                        </form>
                    }

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src=""></img>
                </Grid>

            </Grid>
        </Container >
    );
};

export default Register;