import React from 'react'
import { Link } from "react-router-dom";
import { IoChatbubbleOutline } from "react-icons/io5";

const Chatbot = () => {
  return (
    <div>
      <button className="fixed bottom-10 right-10 bg-companyRed text-white p-4 rounded-3xl w-20 shadow-lg hover:bg-red-800 transition duration-300 z-50 ">
        <Link to={"/chat"} className="flex justify-center items-center">
          <IoChatbubbleOutline />
        </Link>
      </button>
    </div>
  );
}

export default Chatbot