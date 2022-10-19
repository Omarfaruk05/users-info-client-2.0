import React, { useState } from 'react';
import "./Login.css";
import blueBannerPhoto from "../../assets/Group 2.png"
import userPhoto from "../../assets/user.png"
import passwordPhoto from "../../assets/password.png"
import eyePhoto from "../../assets/eye.png"
import closeEyePhoto from "../../assets/eye-slash.svg"

const Login = () => {
    const[showPassword, setShowPassword] = useState(false);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const userName = event.target.name.value;
        const password = event.target.password.value;
        console.log(userName, password)
    }
    return (
        <div className='login-container d-flex justify-content-between align-items-center mx-auto text-center '>
            <div className='login p-4'>
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
                            showPassword?  <span><img onClick={()=>setShowPassword(!showPassword)} id='eye' src={closeEyePhoto} alt="" /></span>:  <span><img onClick={()=>setShowPassword(!showPassword)} id='eye' src={eyePhoto} alt="" /></span>
                        }
                        <input type={(showPassword?"password": "text")} name='password' placeholder='Password' />
                    </div>
                    <div>
                        <input type="submit" value="Login" />
                    </div>
                </form>
                <small className='text-black-50'>Forgot Password?</small>
                <div className='footer'>
                    <div>
                        <p>
                            <span className='me-4'>Terms of Use</span>
                            <span>Privacy Policy</span>
                        </p>
                        <small>© Punctualiti 2022. All rights reserved</small>
                    </div>
                </div>
            </div>
            <div className="blue-banner d-flex justify-content-center align-items-center text-white">
                   <div>
                    <img className='w-75' src={blueBannerPhoto} alt="" />
                        <div className='blue-banner-content'>
                            <h2>360° Solution for Asset Management</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                   </div>
            </div>
        </div>
    );
};

export default Login;