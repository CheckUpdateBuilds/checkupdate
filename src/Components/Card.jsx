// import React from 'react'
import PropTypes from "prop-types";


const Card = ({ title, description, subTitle, time, image }) => {
  return (
    <>
        <div className="bg-companyWhite rounded-3xl h-96 mt-4 ">
          <img className="" src={image} alt="img" />
          <h5 className="p-2 font-bold" >{title}</h5>
          <div className="pl-4">
            <h4 className="">{description}</h4>
            <p className=" font-semibold">{subTitle}</p>
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