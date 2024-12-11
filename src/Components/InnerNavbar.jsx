import { Link } from "react-router-dom";

// import React from 'react'

const InnerNavbar = () => {
  return (
    <>
      <div className="font-Nunito bg-companyWhite w-full h-[50px] text-center p-10 hidden lg:block ">
        <ul className="flex text-center justify-evenly text-black font-bold">
          <li>
            <Link to={"#"} className="text-companyRed border-b-2 border-companyRed pb-2 " >SPORT NEWS</Link>
          </li>
          <li>
            <Link to={"#"}>SCORES</Link>
          </li>
          <li>
            <Link to={"#"}>LIVE MATCHES</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default InnerNavbar;
