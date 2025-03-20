import { MdOutlineArrowOutward } from "react-icons/md";
import { BiBookmark } from "react-icons/bi";
import PropTypes from "prop-types";

const Card = ({ title, description, subTitle, time, image }) => {
  return (
    <>
      <div className="flex flex-col my-6 bg-white rounded-3xl ml-[5%] w-[115%] lg:w-96">
        <div className="relative overflow-hidden text-white rounded-2xl h-auto border-1 mr-[50px] group">
          <img
            src={image} className="transition-all duration-300 ease-in-out group-hover:brightness-50 w-full"
          />
          <div className="absolute inset-0 hidden justify-center items-center space-x-2 group-hover:flex">
            <MdOutlineArrowOutward className="w-8 lg:w-10 h-auto bg-companyRed p-1 rounded-full hover:bg-red-800 " />
            <BiBookmark className="w-8 lg:w-10 h-auto bg-companyRed p-1 rounded-full hover:bg-red-800 " />
          </div>
        </div>
        <div className="p-2 mr-[50px]">
          <div className="mb-2 text-transform: uppercase px-2 text-base text-companyOrange transition-all text-left">
            {title}
          </div>
          <h6 className="mb-2 ml-1 text-black text-base font-semibold line-clamp-2">
            {subTitle}
          </h6>
          <p className="text-slate-600 ml-1 leading-normal text-sm font-light line-clamp-3">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between p-2 pt-0">
          <div className="flex items-center">
            <div className="flex flex-col ml-0 text-sm">
              <span className="text-slate-600"> {time} hours ago </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Define prop types for validation
Card.propTypes = {
  title: PropTypes.string.isRequired, // title is required and must be a string
  description: PropTypes.string.isRequired, // description is required and must be a string
  subTitle: PropTypes.string, // optional, but if provided must be a string
  time: PropTypes.number, // optional, but if provided must be a number
  image: PropTypes.string.isRequired, // required and must be a string
};

export default Card;
