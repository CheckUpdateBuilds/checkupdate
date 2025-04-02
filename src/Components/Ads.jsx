// import React from 'react'
import { useLocation } from 'react-router-dom'


const Ads = () => {
  const location = useLocation();
      if (location.pathname === '/chat') {
          return null; // Don't render the footer on these pages
      }
  return (
    <>
      <div className="block lg:hidden bg-companyLightRed font-Nunito md:pt-[unset]">
          <div className="h-[20px] bg-companyWhite"></div>
          <div className="rounded-3xl text-l bg-companyWhite p-5 m-2 text-center font-bold">
            <p>Advertise Your Products and Services Here!!!</p>
          </div>
          <div className="bg-companyWhite h-[20px]"></div>
      </div>

      <div className="hidden lg:block bg-companyLightRed font-Nunito rounded-3xl mt-2 p-1">
        <div className="rounded-3xl text-3xl bg-companyWhite p-3 m-5 text-center font-bold relative">
          <p>Advertise Your Products and Services Here!!!</p>
        </div>
      </div>
      <div className="bg-companyWhite h-[10px]"></div>
    </>
  )
}

export default Ads