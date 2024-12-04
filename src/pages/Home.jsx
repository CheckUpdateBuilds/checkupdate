// import React from 'react'
import Card from "../Components/Card";
import Ads from "../Components/Ads";
import Subscribe from "../Components/Subscribe"
import VideoCard from "../Components/VideoCard";
import { trendingNewData } from "../trendingNewsData";
import { VideoNewsData } from "../VideoNewsData";
import Carousel from "../Components/Carousel";

const Home = () => {
  return (
    <>
      <div className="bg-companyRed font-Nunito p-2  ">
        <div className="p-7 text-3xl text-white">
          <p className="">Trending News</p>
        </div>
        <div className="bg-companyRed">
          <Carousel />
        </div>
      </div>

      <div className="bg-companyWhite font-Nunito">
        <section className="lg:w-fit lg:flex" >
          <div className="" >
            <div className="p-10 text-3xl">
              <p>Top Stories</p>
            </div>
            <div className="grid grid-cols-2 gap-5 p-10">
              {trendingNewData.map((newsData, index) => (
                <Card
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


          <div className="lg:w-fit" >
            <div className="" >
              <Ads />
            </div>
            <div className="text-xl font-bold font-Nunito ml-5">
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
          </div>
        </section>

        <section className="lg:w-fit lg:flex" >
          <div className="" >
            <div className="p-10 text-3xl">
              <p>Latest Stories</p>
            </div>
            <div className="grid grid-cols-2 gap-5 p-10">
              {trendingNewData.map((newsData, index) => (
                <Card
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


          <div className="lg:w-fit" >
            <div className="" >
              <Subscribe />
            </div>
            <div className="text-xl font-bold font-Nunito ml-5">
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
          <Ads />
          </div>
        </section>
        
      </div>
    </>
  );
};

export default Home;
