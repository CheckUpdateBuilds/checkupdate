import React from 'react'
import './LoginSignUp.css'

import companyLogo from '../Assets/logo1.svg'

const LoginSignUp = () => {
  return (
    <>
      <div className="container-fluid p-0 m-0">
        <div className="header">
          <div className="row">
            <div className="col-md-12">
              <img src={companyLogo} alt="Company Logo" />
            </div>
          </div>
        </div>

        <div className="container pt-5">
          <h2>
            Log in or sign up to enhance your CheckUpdate experience.
          </h2>
          <a className="btn btn-custom btn-google mt-5" href="#">
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
            Or sign in with your email address
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
      </div>
    </>
  )
}

export default LoginSignUp