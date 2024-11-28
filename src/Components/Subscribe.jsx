// import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

const Subscribe = () => {
  return (
    <>
        <div className="text-center bg-companyLightRed">
            <div className="h-[40px] bg-companyWhite"></div>
                <div className="mt-5 font-bold text-3xl">Subscribe To Our Newsletter!</div>
                <div className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, dicta!</div>
            <div className="p-5 m-5 text-center rounded-3xl bg-companyWhite">
                <input className="block w-full border-0 ring-1 h-[50px] rounded-full text-black bg-companyWhite ring-inset ring-black sm:text-sm/6 hover:shadow-md px-7" type="text" placeholder="@example.com" />
                <button className="bg-companyRed hover:bg-red-700 text-center w-[150px] h-[67px] mt-6 text-white rounded-full hover:text-black">
                  Subscribe <MdOutlineArrowOutward className="inline-block h-6 w-6 mr-2" />
                </button>
                {/*  */}
            </div>
            <div className="bg-companyWhite h-[40px]"></div>
        </div>
    </>
  )
}

export default Subscribe