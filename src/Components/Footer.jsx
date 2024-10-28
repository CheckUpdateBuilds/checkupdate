// import React from 'react'
import "./Footer.css";
import companyLogo from '../assets/logo2.svg'

const Footer = () => {
  return (
    <>
    
        <div className="footer">
          <div className="container-fluid">
          <a className="navbar-brand logo-move" href="#"><img src={companyLogo} alt="CheckUpdate Logo" style={{ width: '150px' }} /></a>
          </div>

          <div className="navback">
            <a href="#">Back to top <i className="fa fa-arrow-up" aria-hidden="true"></i></a>
          </div>

        </div>
    
    
    </>
  )
}

export default Footer