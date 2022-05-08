import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Login = () => {
    const {user,isLoading,authError,loginUser,signInWithGoogle}=useAuth();
    const [loginData,setLoginData]=useState({});

    const location=useLocation();
    const history=useHistory();

    const handleOnChange=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit=e=>{
        loginUser(loginData.email,loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn=()=>{
        signInWithGoogle(location,history)
    }
    return (
        <Container>
            <Grid container spacing={2}>
            <Grid item xs={12} sx={{mt:8}} md={6}>
                <Typography variant="body1" gutterBottom> Login</Typography>
                <form onSubmit={handleLoginSubmit}>
                    <TextField sx={{width:"75%",m:1}} id="standard-basic" label="Your Email" variant="standard" name="email" onChange={handleOnChange}/>
                    <TextField sx={{width:"75%",m:1}} id="standard-basic" type="password" label="Your Password" variant="standard" name="password" onChange={handleOnChange}/>
                    <Button sx={{width:"75%",m:1}} type="submit" variant='contained'>Login</Button>
                {isLoading && <CircularProgress />}
                {user?.email && <Alert severity="success">Login successfully!</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
                <NavLink to="/register" style={{textDecoration:"none"}}>
                    <Button variant="text">New User? Please Register</Button>
                </NavLink>
                </form>
                <p>-----------------------</p>
                <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{width:"100%"}} src={login} alt="" />
            </Grid>
            </Grid>
        </Container>
    );
};

export default Login;