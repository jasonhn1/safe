import React from 'react';
import './login.css';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { LoginCard,SignUpButton} from './loginElements.js';
import FormSignUp from './Form/FormSignUp';
import Checkbox from '@mui/material/Checkbox';
import logo from '../../img/bitmap.png';


const Login = () =>{
    return(
        <>
        <img src={logo}/>
        <div className="container">
        <LoginCard className ="item">
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                Log In
                </Typography>
                <Typography variant="h6" display="block" gutterBottom>
                "You are an essential ingredient in our ongoing effort to reduce Security Risk."
                </Typography>
                <Typography style={{paddingLeft:'20px'}} variant="body2" display="block">- Kirsten Manthorne</Typography>
                <FormSignUp/>
            </CardContent>
        </LoginCard>
        </div>
        </>
    );
};

export default Login;