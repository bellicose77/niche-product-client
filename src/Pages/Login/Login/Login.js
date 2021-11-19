import React, { useState } from 'react';
// import { BsGoogle } from "react-icons/bs";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import {
//     faEnvelope,
//     faLock
// } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';


const Login = () => {

    const [loginData, setLoginData] = useState({});
    // const { allContexts } = useAuth();

    // const {
    //     // authError,
    //     loginUser,
    //     signInWithGoogle } = allContexts;
    const { user, loginUser } = useAuth();


    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        console.log(newLoginData)
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    // const handleGoogleSignIn = () => {
    //     console.log('clicked')
    //     signInWithGoogle(location, history)
    // }





    return (
        <div className="text-center my-4">
            <h2>Please Login</h2>
            <p className=" mt-2">Sign In with Email & Password</p>
            {/* <p className="text-danger text-center">{authError}</p> */}
            <div style={{ maxWidth: "500px" }} className="w-100 px-3 mx-auto">
                <Form onSubmit={handleLoginSubmit}>
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
                                    onBlur={handleOnChange}
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
                                    onBlur={handleOnChange}
                                    type="password"
                                    name="password"
                                    autoComplete="current-password"
                                    id="password"
                                    placeholder="Enter your password"
                                />
                            </InputGroup>
                        </Col>
                    </Row>

                    {/* <Row>
						<Col className="text-start">
							<Form.Label htmlFor="name" visuallyHidden>
								Your Profile photo URL
							</Form.Label>
							<InputGroup className="mb-2">
								<InputGroup.Text>
									<FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
								</InputGroup.Text>
								<FormControl
									required
									onBlur={getPhoto}
									type="text"
									autoComplete="current-text"
									id="photo"
									placeholder="Enter valid photo url"
								/>
							</InputGroup>
						</Col>
					</Row> */}
                    <button type="submit" className="btn btn-primary mt-2 w-100 fw-bold ">
                        Login
                    </button>
                </Form>
            </div>
            <p className="mt-2">
                <NavLink className="text-decoration-none" to="/register">
                    Don't have an account?Register Account!
                </NavLink>
            </p>


            <div>-----------------------------------------</div>
            <h5>or</h5>
            {/* <button onClick={handleGoogleSignIn} className="btn btn-primary mt-2  fw-bold ">Google Sign In </button> */}
        </div>
    );
};

export default Login;

























// import { Grid, Typography, Container, TextField, Button, Alert, CircularProgress, AlertTitle } from '@mui/material';

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';

// const Login = () => {
//     const [loginData, setLoginData] = useState({});
//     const { user, loginUser, autherror, isLoading } = useAuth()
//     const handleOnchange = e => {
//         const field = e.target.name;
//         const value = e.target.value;
//         const newlogingdata = { ...loginData }
//         newlogingdata[field] = value;
//         setLoginData(newlogingdata);
//         // console.log(loginData);

//     }
//     const handleOnSubmit = e => {
//         loginUser(loginData.email, loginData.password);
//         console.log(loginUser);
//         Alert("hellow");
//         e.preventDefault();

//     }
//     return (
//         <Container>
//             <Grid container spacing={2}>
//                 <Grid item xs={12} md={6} >
//                     <Typography variant="body1" gutterBottom>
//                         Login
//                     </Typography>
//                     <form onSubmit={handleOnSubmit}>
//                         <TextField
//                             sx={{ width: '75%', m: 1 }}
//                             id="standard-basic"
//                             label="Your email"
//                             name="email"
//                             onChange={handleOnchange}
//                             variant="standard"
//                         />


//                         <TextField
//                             sx={{ width: '75%', m: 1 }}
//                             id="standard-basic"
//                             label="Password"
//                             type="password"
//                             name="password"
//                             onChange={handleOnchange}
//                             variant="standard"
//                         />
//                         <Button type="submit" sx={{ width: '75%', m: 1 }} variant="contained">Sign In</Button>
//                         <Link to="/register">
//                             <Button variant="text">News user?Register here</Button>
//                         </Link>
//                     </form>
//                     {isLoading && <CircularProgress color="secondary" />}
//                     {user?.email && <Alert severity="success">user create successfully</Alert>}
//                     {autherror && <Alert severity="error">
//                         <AlertTitle>Error</AlertTitle>
//                         {autherror} <strong>check it out!</strong>
//                     </Alert>}

//                     <h4>Or</h4>
//                     <p>------------------------</p>
//                     <Button sx={{ width: '75%', m: 1 }} variant="contained">Google Sign In</Button>


//                 </Grid>

//             </Grid>
//         </Container >
//     );
// };

// export default Login;