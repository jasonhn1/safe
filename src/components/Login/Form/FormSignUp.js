import React from 'react'
import useForm from './useForm';
import validate from '../validateUser'
import Input from '@mui/material/Input';
import './form.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const FormSignup = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
      submitForm,
      validate
    );

    return(
        <div className='form-content-right'>
        <form onSubmit={handleSubmit} className='form' noValidate>
          <div className='form-inputs'>
            <Input
              className='form-input'
              type='email'
              name='email'
              placeholder='Email Address'
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className='form-inputs'>
            <Input
              className='form-input'
              type='password'
              name='password'
              placeholder='Password'
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <Button className='form-input-btn' variant="contained" type='submit'>Log In</Button>
          <Typography style={{display:'inline',float:'right'}} variant="body2" color="text.secondary">
            New to Safe Accounts?  
            <a href="/dsds">Sign Up</a>
          </Typography>
        </form>
      </div>
    );
};


// function FormSignUp() {
//     const {handleChange,values,handleSubmit,errors} = useForm(validate); 
//     return (
//         <>
//         <form className="form" onSubmit={handleSubmit}>
//             <div className ="form-inputs">
//                 <label htmlFor='email'
//                 className='form-label'>
//                 </label>
//                 <input
//                     id = 'email'
//                     type='email'
//                     name='email'
//                     className='form-input'
//                     placeholder='Enter Email'
//                     value={values.email}
//                     onChange={handleChange}
//                     />
//                     {errors.email}
//                 {/* {errors.email && <p>{errors.email}</p>} */}
//             </div>
//             <div className ="form-inputs">
//             <label htmlFor='email'
//                 className='form-label'>
//                 </label>
            
//             </div>
//             <button className='form-input-btn'
//             type='submit'>
//                 Log In
//             </button>
//         </form>   
//         </>
//     )
// }

export default FormSignup

