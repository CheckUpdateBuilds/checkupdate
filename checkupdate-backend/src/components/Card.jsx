// import React from 'react'
import PropTypes from "prop-types";

const Card = ({ title, description, subTitle, time, image }) => {
  return (
    <>
      <a>
        <div className=" flex flex-col my-6 bg-white shadow-sm border border-slate-800 rounded-3xl ml-[13%] w-[75%] lg:w-96 ">
          <div className=" overflow-hidden text-white rounded-3xl w-fit h-auto border-1">
            <img
              src={image}
            />
          </div>
          <div className="p-2 pb-0">
            <div className="mb-2 text-transform: uppercase px-2.5 text-base text-companyOrange transition-all text-left">
              {title}
            </div>
            <h6 className="mb-2 ml-2 text-black text-base font-semibold">
              {subTitle}
            </h6>
            <p className="text-slate-600 ml-2 mb-2 leading-normal text-sm font-light">
              {description}
            </p>
          </div>

          <div className="flex items-center justify-between p-3 pt-0">
            <div className="flex items-center">
              <div className="flex flex-col ml-0 mb-3 text-sm">
                <span className="text-slate-600"> {time} hours ago </span>
              </div>
            </div>
          </div>
        </div>
      </a>
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
