// import React from 'react'
// import Card from "../Components/Card";
import Card2 from "../../components/Card2";
import Ads from "../../components/Ads";
import Subscribe from "../../components/Subscribe";
import NewsCardOne from "../../components/NewsCardOne";
import VideoCard from "../../components/VideoCard";
import { trendingNewData } from "../trendingNewsData";
import { VideoNewsData } from "../VideoNewsData";
import Carousel from "../../components/Carousel";
// import { Link } from "react-router-dom";
// import LoginSignUp from "../Components/LoginSignUp/LoginSignUp";


const Home = () => {
  return (
    <>
      <Ads />
      <div className="bg-companyRed font-Nunito p-1 lg:p-10 ">
        <div className="pt-10 lg:p-3 pl-5 lg:px-[175px] font-bold text-[24px] lg:text-[30px]  text-white">
          <p className="">Trending News</p>
        </div>
        <div className="bg-companyRed -mt-[80px] md:mt-0 ">
          <Carousel />
        </div>
      </div>

      <div className="bg-companyWhite font-Nunito md:p-10">
        <section className="md:w-fit lg:flex md:justify-between md:space-x-12 " >
          <div className="" >
            <div className="p-2 my-2 text-3xl">
              <p>Top Stories</p>
            </div>
            <div className="grid grid-cols-2 md:p-10 md:px-0 md:gap-5">
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
            <div className="block md:hidden" >
              <Ads />
            </div>
          </div>
          

          <div className=" lg:w-1/2 md:ml-[16px] md:mt-[120px] " >
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

        <section className="md:w-fit lg:flex md:justify-between md:space-x-12 " >

          <div className="block md:ml-[16px] lg:hidden" >
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
            <div className="grid grid-cols-2 md:p-10 md:px-0 md:-ml-10 lg:-ml-0 md:gap-5">
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
