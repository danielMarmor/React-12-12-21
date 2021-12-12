import './login.css'
import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

const Login =() => {
    const [userName, setUserName] = useState('');
    const handleSubmit = (e)=> {
        console.log('Submited!');
        setUserName('Daniel');
        e.preventDefault();
    }
    return (
        <form className="login" onSubmit={handleSubmit}>
            <TextField
               label="Enter Your Email" variant="filled" 
            />
            <TextField
                label="Enter Your Password" variant="filled" 
                />
            <Button        
            color="primary"
            variant="contained"
            type="submit">       
            
            Submit  
            </Button>
            <h2>{userName == '' ? '' : `Hellow ${userName} are you logged in?`}</h2>         
        </form>
    );
}

export default Login;