import Link from "next/link";

// import React from 'react'

const InnerNavbar = () => {
  return (
    <>
      <div className="font-Nunito bg-companyWhite w-full h-[50px] text-center p-10 hidden ">
        <ul className="flex text-center justify-evenly text-black font-bold">
          <li>
            <Link href="#" className="text-companyRed border-b-2 border-companyRed pb-2 " >SPORT NEWS</Link>
          </li>
          <li>
            <Link href="#">SCORES</Link>
          </li>
          <li>
            <Link href="#">LIVE MATCHES</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default InnerNavbar;
