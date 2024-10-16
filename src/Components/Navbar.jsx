// import React from 'react'
import './Navbar.css'
import companyLogo from '../assets/logo2.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsProgress, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navigate">
        <div className="container-fluid">
          <a className="navbar-brand logo-move" href="#"><img src={companyLogo} alt="CheckUpdate Logo" style={{ width: '150px' }} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            {/* <span className="navbar-toggler-icon"></span> */}
            <FontAwesomeIcon icon={faBarsProgress} style={{ color: 'white' }} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex ms-auto">
              <div className="input-group search-bar">
                <span className="input-group-text rounded-start-pill border-right-0 search-see"><FontAwesomeIcon icon={faSearch} style={{ color: 'white' }} /></span>
                <input className="form-control border-left-0 rounded-end-pill search-input" type="search" placeholder="Search" aria-label="Search" />
              </div>
            </form>

            <button className="btn btn-light rounded-pill ms-2 signin-btn">Sign in</button>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navigate">
        <div className="container-fluid">
          <a className="navbar-brand me-auto" href="#"></a>
          <button className="navbar-toggler button-loc" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="ms-auto">
              <ul className="navbar-nav flex-grow-1 justify-content-end">
                <li className="nav-item">
                  <span className="nav-link active" aria-current="page"><Link to={'/'} style={{textDecoration:'none', color:'white'}}>News</Link></span>
                </li>
                <li className="nav-item">
                  <span className="nav-link"><Link to={'/sports'} style={{textDecoration:'none', color:'white'}}>Sports</Link></span>
                </li>
                <li className="nav-item">
                  <span className="nav-link"><Link to={'/entertainment'} style={{textDecoration:'none', color:'white'}}>Entertainment</Link></span>
                </li>
                <li className="nav-item">
                  <span className="nav-link"><Link to={'/education'} style={{textDecoration:'none', color:'white'}}>Education</Link></span>
                </li>
                <li className="nav-item">
                  <span className="nav-link"><Link to={'/lifestyle'} style={{textDecoration:'none', color:'white'}}>Lifestyle</Link></span>
                </li>
                <li className="nav-item">
                  <span className="nav-link"><Link to={'/politics'} style={{textDecoration:'none', color:'white'}}>Politics</Link></span>
                </li>
                <li className="nav-item">
                  <span className="nav-link"><Link to={'/business'} style={{textDecoration:'none', color:'white'}}>Business</Link></span>
                </li>
                <li className="nav-item">
                  <span className="nav-link"><Link to={'/science'} style={{textDecoration:'none', color:'white'}}>Science & Tech</Link></span>
                </li>
                <li className="nav-item">
                  <span className="nav-link"><Link to={'/culture'} style={{textDecoration:'none', color:'white'}}>Culture & Religion</Link></span>
                </li>
                <li className="nav-item">
                  <span className="nav-link"><Link to={'/earth'} style={{textDecoration:'none', color:'white'}}>Earth & Wildlife</Link></span>
                </li>
                <li className="nav-item">
                  <span className="nav-link"><Link to={'/opportunities'} style={{textDecoration:'none', color:'white'}}>Opportunities</Link></span>
                </li>
                <li className="nav-item">
                  <span className="nav-link"><Link to={'/awards'} style={{textDecoration:'none', color:'white'}}>CheckUpdate Awards</Link></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar