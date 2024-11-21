import { Link } from "react-router-dom";

// import React from 'react'

const InnerNavbar = () => {
  return (
    <>
      <div className="font-Nunito bg-companyWhite w-full h-[50px] text-center ">
        <ul className="flex text-center justify-evenly text-companyOrange underline">
          <li>
            <Link to={"#"}>News</Link>
          </li>
          <li>
            <Link to={"#"}>Sports</Link>
          </li>
          <li>
            <Link to={"#"}>Live</Link>
          </li>
        </ul>
      </div>
      <hr className="border-2 mb-10" />
    </>
  );
};

export default InnerNavbar;
