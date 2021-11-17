import { Grid, TextField, Typography, Container, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} >
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    {


                        <form>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Name"

                                name="name"
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your email"

                                name="email"
                                variant="standard"
                            />


                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Password"
                                type="password"
                                name="password"

                                variant="standard"
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Confirm your password"
                                type="password"
                                name="password2"
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