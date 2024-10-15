// import React from 'react'
import './LoginSignUp.css'

import companyLogo from '../Assets/logo1.svg'

const LoginSignUp = () => {
  return (
    <>


        <div className="container">
          <div className="header">
              <img src={companyLogo} alt="CheckUpdate-Logo" />
          </div>
          <h2>
            Log in or sign up to enhance your CheckUpdate experience.
          </h2>
          <a className="btn btn-custom btn-google" href="#">
            <i className="fab fa-google">
            </i> Continue with Google
          </a>
          <a className="btn btn-custom btn-facebook" href="#">
            <i className="fab fa-facebook-f">
            </i> Continue with Facebook
          </a>
          <a className="btn btn-custom btn-google" href="#">
            <i className="fab fa-twitter">
            </i> Continue with X
          </a>
          <a className="btn btn-custom btn-google" href="#">
            <i className="fab fa-apple">
            </i> Continue with Apple
          </a>

          <div className="divider">
            Or sign in with your eamil address
          </div>

          {/* Don't forget to add a function that collects this email */}
          <input className='form-control email-input' placeholder='Enter your email address' type="email" />

          <div className="terms">
            By continuing, you agree to the
            <a href="#">
            T&amp;C
            </a>
            &amp;
            <a href="#">
            Privacy Policy
            </a>
          </div>

          <button className='btn continue-btn'>Continue</button>
        </div>
    
    </>
  )
}

export default LoginSignUp