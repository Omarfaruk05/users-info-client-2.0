import React, { useState } from 'react';
import "./Login.css";
import blueBannerPhoto from "../../assets/Group 2.png"
import userPhoto from "../../assets/user.png"
import passwordPhoto from "../../assets/password.png"
import eyePhoto from "../../assets/eye.png"
import closeEyePhoto from "../../assets/eye-slash.svg"
import ToastComponent from '../ToastComponet/ToastComponent';
import Spinner from 'react-bootstrap/Spinner';

const Login = () => {
    const[showPassword, setShowPassword] = useState(false);
    const [show, setShow] = useState(false);
    const[data, setData] = useState('');
    const[spinner, setSpinner] = useState('close');

    
    const toastAndError = () => {
        setShow(true)
        setData('')

    }

    
    const handleSubmit = (event) => {
        setSpinner("")

        event.preventDefault();
        const email = event.target.name.value;
        const password = event.target.password.value;
        const data = JSON.stringify({email, password});
        console.log(data)

        fetch("https://reqres.in/api/login", {
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body: data

        })
        .then(res=> res.json())
        .then(data => {
               setData(data)
               if(data.token){
                localStorage.setItem('token', data.token);
               }
               setSpinner('OpenSpinner')
        })
    };
    return (
        <div className='login-container d-md-flex justify-content-between align-items-center mx-auto text-center '>
            {
                data.token &&  <ToastComponent setShow={setShow} show={show}></ToastComponent>
            }
            <div className='login col-md-5 p-4'>
                <h1 className='fw-bold'>Welcome</h1>
                <small className='text-black-50'>Enter your Username and Passoword.</small>
                <form onSubmit={handleSubmit}>
                    <div>
                        <span><img src={userPhoto} alt="" /></span>
                        <input type="email" name='name' placeholder='Username'/>
                    </div>
                    <div>
                        <span><img src={passwordPhoto} alt="" /></span>
                        {
                            showPassword?  <span><img onClick={()=>setShowPassword(!showPassword)} id='eye' src={eyePhoto} alt="" /></span>:  <span><img onClick={()=>setShowPassword(!showPassword)} id='eye' src={closeEyePhoto} alt="" /></span>
                        }
                        <input type={(showPassword?"text": "password")} name='password' placeholder='Password' />
                    </div>
                    {
                       spinner? <small className='text-danger p-1'>{data?.error}</small>: <small className='spinner p-4'><Spinner animation="border" style={{width:"18px", height:"18px"}}/></small>

                    }
                    

                    <div >
                        <input onClick={toastAndError} type="submit" value="Login" />
                    </div>
                </form>
                <small><a className='forgot-pass' href="#forgetPass">Forgot Password?</a></small>
                <div className='footer d-none d-md-flex'>
                    <div>
                        <p>
                            <span className='me-4'>Terms of Use</span>
                            <span>Privacy Policy</span>
                        </p>
                        <small>© Punctualiti 2022. All rights reserved</small>
                    </div>
                </div>
            </div>
            <div className=" col-md-7 blue-banner d-flex justify-content-center d-none d-md-flex align-items-center text-white">
                   <div>
                    <img className='w-75' src={blueBannerPhoto} alt="" />
                        <div className='blue-banner-content'>
                            <h2>360° Solution for Asset Management</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                   </div>
            </div>
            <div className=' d-block d-md-none'>
                    <div>
                        <p>
                            <span className='me-4'>Terms of Use</span>
                            <span>Privacy Policy</span>
                        </p>
                        <small>© Punctualiti 2022. All rights reserved</small>
                    </div>
                </div>
        </div>
    );
};

export default Login;