// import React from 'react'
import "./Card.css"
import PropTypes from "prop-types";


const Card = ({ title, description, subTitle, time, image }) => {
  return (
    <>
        <div className="card">
          <img className="card-img-top" src={image} alt="img" />
          <h5>{title}</h5>
          <div className="card-body">
            <h4 className="card-title">{description}</h4>
            <p className="card-text">{subTitle}</p>
            <h6>{time} pm</h6>
          </div>
        </div>


    </>
  )
}

// / Define prop types for validation
Card.propTypes = {
  title: PropTypes.string.isRequired, // title is required and must be a string
  description: PropTypes.string.isRequired, // description is required and must be a string
  subTitle: PropTypes.string, // optional, but if provided must be a string
  time: PropTypes.number, // optional, but if provided must be a string
  image: PropTypes.string.isRequired, // required and must be a string
};

export default Card