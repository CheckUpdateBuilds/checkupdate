// import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const Card = ({ title, description, subTitle, time, image }) => {
  return (
    <>
      <Link to={'/'} >
        <div className=" flex flex-col my-6 bg-white rounded-3xl w-[190px] lg:w-96 ">
          <div className=" overflow-hidden text-white rounded-3xl h-auto border-1">
            <img
              src={image}
            />
          </div>
          <div className="p-4">
            <div className="mb-4 text-transform: uppercase px-2.5 text-xs text-companyOrange transition-all text-left">
              {title}
            </div>
            <h6 className="mb-2 text-black text-base font-semibold line-clamp-2 ">
              {subTitle}
            </h6>
            <p className="text-slate-600 leading-normal text-sm font-light line-clamp-3 ">
              {description}
            </p>
          </div>

          <div className="flex items-center justify-between p-4 pt-0.5">
            <div className="flex items-center">
              <div className="flex flex-col ml-3 text-sm">
                <span className="text-slate-600"> {time} hours ago </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

// / Define prop types for validation
Card.propTypes = {
  title: PropTypes.string.isRequired, // title is required and must be a string
  description: PropTypes.string.isRequired, // description is required and must be a string
  subTitle: PropTypes.string, // optional, but if provided must be a string
  time: PropTypes.number, // optional, but if provided must be a string
  image: PropTypes.string.isRequired, // required and must be a string
};

export default Card;
