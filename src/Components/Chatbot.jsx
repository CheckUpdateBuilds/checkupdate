import React from 'react'
import { Link } from "react-router-dom";

const Chatbot = () => {
  return (
    <div>
      <button className="fixed bottom-10 right-10 bg-companyRed text-white p-4 rounded-full shadow-lg hover:bg-red-800 transition duration-300 z-50 ">
        <Link to={"/chat"}>Have a conversation with Gemini</Link>
      </button>
    </div>
  );
}

export default Chatbot