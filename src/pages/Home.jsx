// import React from 'react'
import Card from "../Components/Card";
import Ads from "../Components/Ads";
import VideoCard from "../Components/VideoCard";
import { trendingNewData } from "../trendingNewsData";
import { VideoNewsData } from "../VideoNewsData";
import img1 from '../assets/Image 1.png';
import img2 from '../assets/Image 2.png';
import img3 from '../assets/Image 3.png';

const Home = () => {
  return (
    <>
      <div className="bg-companyRed font-Nunito p-2  ">
        <div className="p-7 text-3xl text-white">
          <p className="">Trending News</p>
        </div>
        <div className=" p-10 gap-3 bg-companyRed block md:flex ">
          {trendingNewData.slice(0, 3).map((newsData, index) => (
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

        <div className="carousel w-full hidden">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src={img1}
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src={img2}
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src={img1}
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src={img3}
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-companyWhite font-Nunito">
        <div className="p-7 text-3xl">
          <p>Top Stories</p>
        </div>
        

        <Ads />

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

        <div className="text-xl font-bold font-Nunito ml-5">
          <p>Recommended For You</p>
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

        <div className="text-xl font-bold font-Nunito ml-5">
          <p>Latest Stories</p>
        </div>

        <div className="grid grid-cols-2 gap-3 px-1 ">
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
    </>
  );
};

export default Home;
