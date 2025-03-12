// import React from 'react'
import Card2 from "../Components/Card2";
import Ads from "../Components/Ads";
import Subscribe from "../Components/Subscribe";
// import NewsCardOne from "../Components/NewsCardOne";
import VideoCard from "../Components/VideoCard";
import { trendingNewData } from "../trendingNewsData";
import { VideoNewsData } from "../VideoNewsData";
import Chatbot from "../Components/Chatbot";


import InnerNavbar from "../Components/InnerNavbar"

const CultureReligion = () => {
  return (
    <>
    
      <InnerNavbar />

      <div className="pt-10 lg:p-10">

      <section className="lg:w-fit lg:flex lg:justify-between lg:space-x-10" >
          <div className="" >
            <div className="p-2 my-2 text-3xl">
              <p>Top News</p>
            </div>
            <div className="grid grid-cols-2 lg:p-10 lg:px-0 lg:gap-5">
              {trendingNewData.map((newsData, index) => (
                <Card2
                  key={index}
                  image={newsData.image}
                  title={newsData.title}
                  description={newsData.description}
                  subTitle={newsData.subTitle}
                  time={newsData.time}
                />
              ))}
            </div>
            <div className="block lg:hidden" >
              <Ads />
            </div>
          </div>
          

          <div className=" lg:w-1/2 lg:ml-[16px] lg:mt-[120px] " >
           <div className="text-xl font-bold font-Nunito ">
              <p>Hot Stories This Week</p>
            </div>
            <div className="p-3 bg-companyLightRed rounded-3xl mt-10 ">
              {VideoNewsData.slice(0, 4).map((VidData, index) => (
                <VideoCard
                  key={index}
                  image={VidData.image}
                  title={VidData.title}
                  description={VidData.description}
                  time={VidData.time}
                />
              ))}
            </div>
            <div className="" >
              <Ads />
            </div>
          </div>
      </section>

      <section className="lg:w-fit lg:flex lg:justify-between lg:space-x-10" >
          <div className="" >
            <div className="p-2 my-2 text-3xl">
              <p>Latest News</p>
            </div>
            <div className="grid grid-cols-2 lg:p-10 lg:px-0 lg:gap-5">
              {trendingNewData.map((newsData, index) => (
                <Card2
                  key={index}
                  image={newsData.image}
                  title={newsData.title}
                  description={newsData.description}
                  subTitle={newsData.subTitle}
                  time={newsData.time}
                />
              ))}
            </div>
            <div className="block lg:hidden" >
              <Ads />
            </div>
          </div>
          

            <div className=" lg:w-1/2 lg:ml-[16px] lg:-mt-[10px]">
           <div className="text-xl px-10 pt-1 font-bold font-Nunito ">
              <p>Latest Videos</p>
            </div>
            <div className="p-3 bg-companyLightRed rounded-3xl mt-10 ">
              {VideoNewsData.slice(0, 4).map((VidData, index) => (
                <VideoCard
                  key={index}
                  image={VidData.image}
                  title={VidData.title}
                  description={VidData.description}
                  time={VidData.time}
                />
              ))}
            </div>
            <div className="" >
              <Ads />
            </div>
          </div>

      </section>

      <section className="lg:w-fit lg:flex lg:justify-between lg:space-x-10" >
          <div className="" >
            <div className="p-2 my-2 text-3xl">
              <p>Foreign News</p>
            </div>
            <div className="grid grid-cols-2 lg:p-10 lg:px-0 lg:gap-5">
              {trendingNewData.map((newsData, index) => (
                <Card2
                  key={index}
                  image={newsData.image}
                  title={newsData.title}
                  description={newsData.description}
                  subTitle={newsData.subTitle}
                  time={newsData.time}
                />
              ))}
            </div>
            <div className="block lg:hidden" >
              <Ads />
            </div>
          </div>
          

          <div className=" lg:w-1/2 lg:ml-[16px] lg:-mt-[70px]">
           <div className="text-xl px-10 pt-1 font-bold font-Nunito ">
              <p>Most Viewed This Week</p>
            </div>
            <div className="p-3 bg-companyLightRed rounded-3xl mt-10 ">
              {VideoNewsData.slice(0, 4).map((VidData, index) => (
                <VideoCard
                  key={index}
                  image={VidData.image}
                  title={VidData.title}
                  description={VidData.description}
                  time={VidData.time}
                />
              ))}
            </div>
            <div className="rounded-3xl" >
              <Subscribe />
            </div>
          </div>

      </section>

      <Chatbot />


        
          
      </div>
    
    
    </>
  )
}

export default CultureReligion