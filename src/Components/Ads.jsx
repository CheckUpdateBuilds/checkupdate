// import React from 'react'

const Ads = () => {
  return (
    <>
      <div className="block lg:hidden bg-companyLightRed font-Nunito md:pt-[unset]">
          <div className="h-[20px] bg-companyWhite"></div>
          <div className="rounded-3xl text-3xl bg-companyWhite p-5 m-2 text-center font-bold">
              <p>Advertise Your Products and Services Here!!!</p>
          </div>
          <div className="bg-companyWhite h-[20px]"></div>
      </div>

      <div className="hidden lg:block bg-companyLightRed font-Nunito md:pt-[unset]">
          <div className="h-[40px] bg-companyWhite"></div>
          <div className="rounded-3xl text-3xl bg-companyWhite p-5 m-5 text-center font-bold">
              <p>Advertise Your Products and Services Here!!!</p>
          </div>
          <div className="bg-companyWhite h-[40px] "></div>
      </div>
    </>
  )
}

export default Ads