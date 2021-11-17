import { Grid, Typography, Container, TextField, Button } from '@mui/material';

import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} >
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form>
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