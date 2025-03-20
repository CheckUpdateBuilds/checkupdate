import PropTypes from "prop-types";
// import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import { BiBookmark } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const VideoCard = ({ title, description, time, image }) => {
  return (
    <>
      <div className="flex flex-row  mt-3.5 rounded-3xl bg-white text-surface shadow-secondary-1 md:max-w-xl md:flex-row border">
        
        <div className=" flex-shrink-0 relative ">
          <img
            className=" w-36 h-[175px] lg:w- lg:h- rounded-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={image}
            alt="img here"
          />
          <FaPlay className="absolute inset-0 m-auto text-black p-[10px] w-[55px] h-auto bg-white rounded-full flex items-center justify-center" />
        </div>

        <div className="p-6">
          <div className="flex justify-between">
            <Link to={'/sports'} ><h5 className="mb-2 text-xs font-medium uppercase text-companyOrange">{title}</h5></Link>
            <p className="text-xs">{time} hours ago</p>
          </div>
          <p className=" mb-4 text-xs md:mb-4 md:text-base ">
            {description}
          </p>
          <div className="flex justify-end space-x-10">
            <MdOutlineArrowOutward className="w-8 h-auto bg-slate-100 p-1 rounded-full hover:bg-slate-200 " />
            <BiBookmark className="w-8 h-auto bg-slate-100 p-1 rounded-full hover:bg-slate-200" />
          </div>
        </div>
      </div>
    </>
  );
};

VideoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.number,
  image: PropTypes.string.isRequired,
};

export default VideoCard;
