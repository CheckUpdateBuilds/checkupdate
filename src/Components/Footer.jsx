// import React from 'react'
import "./Footer.css";
import companyLogo from '../assets/logo2.svg'
// import { Link } from 'react-router-dom';

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

          {/* <div className="details">
            <div className="company">
              <p className="pcompany">Our Company</p>
              <span className="">About Us</span>
              <span className="pc02">Privacy Policy</span>

              <p  className="pt-1">
                <span className="pc01">Help & Support</span>
                <span className="pc02">Terms of service</span>
              </p>

              <p className="pc03">
                <span>Contact Us</span>
                <span className="pc02">Vacancy</span>
              </p>
            </div>


            <div className="category">
              <p className="pcompany">Category</p>
              <p>
                <span><Link to={'/'} style={{textDecoration:'none', color:'white'}}>News</Link></span>

                <span><Link to={'/education'} style={{textDecoration:'none', color:'white'}}>Education</Link></span>

                <span><Link to={'/business'} style={{textDecoration:'none', color:'white'}}>Business</Link></span>

                <span><Link to={'/earth'} style={{textDecoration:'none', color:'white'}}>Earth & Wildlife</Link></span>
              </p>
              <p className="d-flex mx-5">
                <span className="nav-link"><Link to={'/sports'} style={{textDecoration:'none', color:'white'}}>Sports</Link></span>

                <span className="nav-link"><Link to={'/lifestyle'} style={{textDecoration:'none', color:'white'}}>Lifestyle</Link></span>

                <span className="nav-link"><Link to={'/science'} style={{textDecoration:'none', color:'white'}}>Science & Tech</Link></span>

                <span className="nav-link"><Link to={'/opportunities'} style={{textDecoration:'none', color:'white'}}>Opportunities</Link></span>
              </p>

              <p className="d-flex">
                <span className="nav-link"><Link to={'/entertainment'} style={{textDecoration:'none', color:'white'}}>Entertainment</Link></span>

                <span className="nav-link"><Link to={'/politics'} style={{textDecoration:'none', color:'white'}}>Policitcs</Link></span>

                <span className="nav-link"><Link to={'/culture'} style={{textDecoration:'none', color:'white'}}>Culture & Religion</Link></span>

                <span className="nav-link"><Link to={'/awards'} style={{textDecoration:'none', color:'white'}}>CheckUpdate Awards</Link></span>
              </p>
            </div>


            <div className="socials">
              <p className="pcompany">Our Socials</p>
              <span>Connect with us on our social media platforms to enhance your experience</span>
              <div className="socials-logo">
                <i className="fas fa-twitter"></i>
                <i className="fa fa-instagram" aria-hidden="true"></i>
                <i className="fa fa-facebook" aria-hidden="true"></i>
                <i className="fa fa-linkedin" aria-hidden="true"></i>
                <i className="fa fa-youtube" aria-hidden="true"></i>
              </div>
            </div>
          </div> */}
        </div>
    
    
    </>
  )
}

export default Footer