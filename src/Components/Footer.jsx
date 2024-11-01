// import React from 'react'
import "./Footer.css";
import companyLogo from '../assets/logo2.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    
        <div className="footer">
          <div className="container-fluid">
          <a className="navbar-brand logo-move" href="#"><img src={companyLogo} alt="CheckUpdate Logo" style={{ width: '100px' }} /></a>
          </div>

          <div className="navback">
            <a href="#">Back to top <i className="fa fa-arrow-up" aria-hidden="true"></i></a>
          </div>

          <section>
            <div className="first">
              <p className="pT pt1">Our Company</p>

              <div className="com1">
                <span className=""><a href="#">About Us</a></span>
                <span className="hs"><a href="#">Privacy Policy</a></span>
              </div>
              
              <div className="com2">
                <span className=""><a href="#">Help & Support</a></span>
                <span className="hs"><a href="#">Terms of Service</a></span>
              </div>

              <div className="com3">
                <span className=""><a href="#">Contact Us</a></span> <span className="hs"><a href="#">Vacancy</a></span>
              </div>
            
            </div>

            <div className="second">
              <div className="pT">Category</div>

              <div className="cat1">
                <span className="">
                  <Link to={'/'} style={{textDecoration:'none', color:'white'}}>News</Link>
                </span>
                <span className="edu">
                  <Link to={'/education'} style={{textDecoration:'none', color:'white'}}>Education</Link>
                </span>
                <span className="edu">
                  <Link to={'/bubsiness'} style={{textDecoration:'none', color:'white'}}>Business</Link>
                </span>
                <span className="edu">
                  <Link to={'/earth'} style={{textDecoration:'none', color:'white'}}>Earth & Wildlife</Link>
                </span>
              </div>

              <div className="cat2">
                <span className="">
                  <Link to={'/sports'} style={{textDecoration:'none', color:'white'}}>Sports</Link>
                </span>
                <span className="edu">
                  <Link to={'/lifestyle'} style={{textDecoration:'none', color:'white'}}>Lifestyle</Link>
                </span>
                <span className="edu">
                  <Link to={'/science'} style={{textDecoration:'none', color:'white'}}>Science & Tech</Link>
                </span>
                <span className="edu">
                  <Link to={'/opportunities'} style={{textDecoration:'none', color:'white'}}>Opportunities</Link>
                </span>
              </div>
              
              <div className="cat3">
                <span>
                  <Link to={'/entertainment'} style={{textDecoration:'none', color:'white'}}>Entertainment</Link>
                </span>
                <span className="edu">
                  <Link to={'/politics'} style={{textDecoration:'none', color:'white'}}>Politics</Link>
                </span>
                <span className="edu">
                  <Link to={'/culture'} style={{textDecoration:'none', color:'white'}}>Culture & Religion</Link>
                </span>
                <span className="edu">
                  <Link to={'/awards'} style={{textDecoration:'none', color:'white'}}>CheckUpdate Awards</Link>
                </span>
              </div>
            </div>

            <div className="third">
              <div className="pT">Our Socials</div>
              <div className="socialWords">Connect with us on our social media platforms to enhance your performance.</div>
              <div className="social-logos d-flex">
                <div>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <i className="fa fa-youtube" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>

          
        </div>
    
    
    </>
  )
}

export default Footer