import React from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  return (
    <div className='loginsingup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-input">
          <input type="text" placeholder='username'/>
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password'/>
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>I agree to follow the terms and conditions provided.</p>
        </div>
        <button>Continue</button>
        <div className='loginsignup-login'>
        <p >Already have an account <span>Login</span></p>
        </div>

      </div>
    </div>
  )
}

export default LoginSignup;
