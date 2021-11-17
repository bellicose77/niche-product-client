import { Grid, Typography, Container, TextField, Button, Alert } from '@mui/material';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newlogingdata = { ...loginData }
        newlogingdata[field] = value;
        setLoginData(newlogingdata);
        // console.log(loginData);

    }
    const handleOnsubmit = e => {
        Alert("hellow");
        e.preventDefault();

    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} >
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleOnsubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your email"
                            name="email"
                            onChange={handleOnchange}
                            variant="standard"
                        />


                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Password"
                            type="password"
                            name="password"
                            onChange={handleOnchange}
                            variant="standard"
                        />
                        <Button type="submit" sx={{ width: '75%', m: 1 }} variant="contained">Sign In</Button>
                        <Link to="/register">
                            <Button variant="text">News user?Register here</Button>
                        </Link>
                    </form>
                    <h4>Or</h4>
                    <p>------------------------</p>
                    <Button sx={{ width: '75%', m: 1 }} variant="contained">Google Sign In</Button>


                </Grid>

            </Grid>
        </Container >
    );
};

export default Login;