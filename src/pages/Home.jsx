// import React from 'react'
// import Card from "../Components/Card";
import Card2 from "../Components/Card2";
import Ads from "../Components/Ads";
import Subscribe from "../Components/Subscribe";
import NewsCardOne from "../Components/NewsCardOne";
import VideoCard from "../Components/VideoCard";
import { trendingNewData } from "../trendingNewsData";
import { VideoNewsData } from "../VideoNewsData";
import Carousel from "../Components/Carousel";
import { Link } from "react-router-dom";
// import LoginSignUp from "../Components/LoginSignUp/LoginSignUp";


const Home = () => {
  return (
    <>
      <Ads />
      <div className="bg-companyRed font-Nunito p-1 lg:p-10 ">
        <div className="pt-10 lg:p-3 pl-5 lg:px-[175px] font-bold text-[24px] lg:text-[30px]  text-white">
          <p className="">Trending News</p>
        </div>
        <div className="bg-companyRed -mt-[80px] lg:mt-0 ">
          <Carousel />
        </div>
      </div>

      <div className="bg-companyWhite font-Nunito lg:p-10">
        <section className="lg:w-fit lg:flex lg:justify-between lg:space-x-12 " >
          <div className="" >
            <div className="p-2 my-2 text-3xl">
              <p>Top Stories</p>
            </div>
            <div className="grid grid-cols-2 lg:p-10 lg:px-0 lg:gap-5">
              {trendingNewData.map((newsData, index) => (
                <Card2
                  key={index}
                  image={newsData.image}
                  title={newsData.title}add
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
           <div className="text-xl text-center font-bold font-Nunito ml-5 pt-3">
              <p>Most Watched This Week</p>
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

        <section className="lg:w-fit lg:flex justify-between " >

          <div className="block lg:hidden" >
              <div className="text-xl text-center font-bold font-Nunito ml-5 pt-3">
                <p>Recommended For You</p>
              </div>
              <div className="p-3 bg-companyLightRed rounded-3xl mt-10 ">
                {VideoNewsData.slice(0, 4).map((VidData, index) => (
                  <NewsCardOne
                    key={index}
                    image={VidData.image}
                    title={VidData.title}
                    description={VidData.description}
                    time={VidData.time}
                  />
                ))}
              </div>
            <Ads />
          </div>

          <div className="" >
            <div className="p-2 my-2 text-3xl">
              <p>Latest Stories</p>
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
          </div>

          <div className="hidden lg:block lg:w-1/2 lg:ml-[46px] lg:-mt-[0px] " >
            <div className="text-xl font-bold font-Nunito ml-5 w-1/2 ">
              <p>Recommended For You</p>
            </div>
            <div className="p-3 bg-companyLightRed rounded-3xl mt-10 ">
              {VideoNewsData.slice(0, 4).map((VidData, index) => (
                <NewsCardOne
                  key={index}
                  image={VidData.image}
                  title={VidData.title}
                  description={VidData.description}
                  time={VidData.time}
                />
              ))}
            </div>
            <div>
              <Ads />
            </div>
            <div className="rounded-3xl" >
              <Subscribe />
            </div>
          </div>



        </section>
        
          <div className="lg:hidden" >
            <Subscribe />
          </div>
      </div>
    </>
  );
};

export default Home;
