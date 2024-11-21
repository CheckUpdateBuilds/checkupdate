import PropTypes from "prop-types";
// import React from 'react'

const VideoCard = ({ title, description, time, image }) => {
  return (
    <>
      <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="">
          <img
            className="w-full h-48 object-cover"
            src={image}
            alt="Video Thumbnail"
          />
          <div className="hidden items-center justify-center">
            <button className="bg-white rounded-full p-2">
              <svg
                className="w-8 h-8 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="p-4">
          <span className="text-sm text-gray-600"> {title} </span>
          <h2 className="mt-2 text-lg font-semibold text-gray-800">
            {description}
          </h2>
          <p className="mt-2 text-sm text-gray-600"> {time} days ago</p>
          <div className="mt-4 flex items-center justify-between">
            <button className="text-gray-600 hover:text-gray-800">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 17l5-5-5-5v10z"></path>
              </svg>
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 21H5V3h14v18zm-2-2V5H7v14h10z"></path>
              </svg>
            </button>
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
