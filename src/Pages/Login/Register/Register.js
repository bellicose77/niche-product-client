import React, { useState } from 'react';
import { Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, signInWithGoogle } = useAuth();
    const location = useLocation();


    // const {
    //     authError,
    //     registerUser,
    //     signInWithGoogle,
    // } = allContexts;


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        console.log('clicked')
        signInWithGoogle(location, history)
    }


    return (
        <div className="text-center my-4">
            <h2>Please Sign Up</h2>
            <p className=" mt-2">Sign Up with Email & Password</p>

            <div style={{ maxWidth: "500px" }} className="w-100 px-3 mx-auto">
                <Form onSubmit={handleLoginSubmit}>
                    <Row>
                        <Col className="text-start">
                            <Form.Label htmlFor="name" visuallyHidden>
                                Your Name
                            </Form.Label>
                            <InputGroup className="mb-2">
                                {/* <InputGroup.Text>
                                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                </InputGroup.Text> */}
                                <FormControl
                                    required
                                    onBlur={handleOnBlur}
                                    type="text"
                                    autoComplete="current-name"
                                    name="name"
                                    id="name"
                                    placeholder="Enter your name"
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-start">
                            <Form.Label htmlFor="email" visuallyHidden>
                                Your Email Address
                            </Form.Label>
                            <InputGroup className="mb-2">
                                {/* <InputGroup.Text>
                                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                </InputGroup.Text> */}
                                <FormControl
                                    required
                                    onBlur={handleOnBlur}
                                    type="email"
                                    name="email"
                                    autoComplete="current-email"
                                    id="email"
                                    placeholder="Enter your email address"

                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col className="text-start">
                            <Form.Label htmlFor="password" visuallyHidden>
                                Your Password
                            </Form.Label>
                            <InputGroup className="mb-2">
                                {/* <InputGroup.Text>
                                    <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                                </InputGroup.Text> */}
                                <FormControl
                                    required
                                    onBlur={handleOnBlur}
                                    type="password"
                                    name="password"
                                    autoComplete="current-password"
                                    id="password"
                                    placeholder="Enter your password"
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col className="text-start">
                            <Form.Label htmlFor="password" visuallyHidden>
                                Your Password
                            </Form.Label>
                            <InputGroup className="mb-2">
                                {/* <InputGroup.Text>
                                    <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                                </InputGroup.Text> */}
                                <FormControl
                                    required
                                    onBlur={handleOnBlur}
                                    type="password"
                                    name="password2"
                                    autoComplete="current-password"
                                    id="password"
                                    placeholder="Enter your password"
                                />
                            </InputGroup>
                        </Col>
                    </Row>

                    <button type="submit" className="btn btn-primary mt-2 w-100">
                        Register
                    </button>
                </Form>
            </div>
            <p className="mt-2">
                <NavLink className="text-decoration-none" to="/login">
                    Already have an account? Please login!
                </NavLink>
            </p>


            <div>-----------------------------------------</div>
            <h5>or</h5>
            <button onClick={handleGoogleSignIn} className="btn btn-primary mt-2  fw-bold ">Register With </button>
        </div>
    );
};

export default Register;





























// import { Grid, TextField, Typography, Container, Button, Alert, CircularProgress, AlertTitle } from '@mui/material';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';

// const Register = () => {
//     const [loginData, setLogingData] = useState({});
//     const { registerUser, isLoading, autherror, user } = useAuth()

//     const handleOnBlur = e => {
//         const field = e.target.name;
//         const value = e.target.value;
//         const newlogingdata = { ...loginData };
//         newlogingdata[field] = value;
//         setLogingData(newlogingdata);
//         console.log(field, value);

//     }
//     const handleOnSubmit = e => {
//         if (loginData.password !== loginData.password2) {
//             alert("Successful form");
//             return
//         }
//         registerUser(loginData.email, loginData.password);
//         // Alert("successfully add ");
//         e.preventDefault();
//     }

//     return (
//         <Container>
//             <Grid container spacing={2}>
//                 <Grid item xs={12} md={6} >
//                     <Typography variant="body1" gutterBottom>
//                         Register
//                     </Typography>
//                     {
//                         !isLoading &&
//                         <form onSubmit={handleOnSubmit}>
//                             <TextField
//                                 sx={{ width: '75%', m: 1 }}
//                                 id="standard-basic"
//                                 label="Your Name"
//                                 name="name"
//                                 onBlur={handleOnBlur}
//                                 variant="standard"
//                             />
//                             <TextField
//                                 sx={{ width: '75%', m: 1 }}
//                                 id="standard-basic"
//                                 label="Your email"
//                                 name="email"
//                                 onBlur={handleOnBlur}
//                                 variant="standard"
//                             />


//                             <TextField
//                                 sx={{ width: '75%', m: 1 }}
//                                 id="standard-basic"
//                                 label="Password"
//                                 type="password"
//                                 name="password"
//                                 onBlur={handleOnBlur}
//                                 variant="standard"
//                             />
//                             <TextField
//                                 sx={{ width: '75%', m: 1 }}
//                                 id="standard-basic"
//                                 label="Confirm your password"
//                                 type="password"
//                                 name="password2"
//                                 onBlur={handleOnBlur}
//                                 variant="standard"
//                             />
//                             <Button type="submit" sx={{ width: '75%', m: 1 }} variant="contained">Register</Button>
//                             <Link to="/login">
//                                 <Button variant="text">Already register?Login here</Button>
//                             </Link>

//                         </form>

//                     }
//                     {isLoading && <CircularProgress color="secondary" />}
//                     {user?.email && <Alert severity="success">user create successfully</Alert>}
//                     {autherror && <Alert severity="error">
//                         <AlertTitle>Error</AlertTitle>
//                         {autherror} <strong>check it out!</strong>
//                     </Alert>}

//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                     <img style={{ width: '100%' }} src=""></img>
//                 </Grid>

//             </Grid>
//         </Container >
//     );
// };

// export default Register;