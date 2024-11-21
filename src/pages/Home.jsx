// import React from 'react'
import Card from "../Components/Card";
import Ads from "../Components/Ads";
import VideoCard from "../Components/VideoCard";
import { trendingNewData } from "../trendingNewsData";
import { VideoNewsData } from "../VideoNewsData";

const Home = () => {
  return (
    <>
      <div className="bg-companyRed font-Nunito ">
        <div className="p-7 text-3xl text-white">
          <p className="">Trending News</p>
        </div>
        <div className="p-10 gap-3 bg-companyRed block md:flex ">
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
      </div>

      <div className="bg-companyWhite font-Nunito">
        <div className="p-7 text-3xl">
          <p>Top Stories</p>
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
        <Ads />
        <div className="text-3xl font-Nunito ml-5">
          <p>Most Watched This Week</p>
        </div>
        {VideoNewsData.map((VidData, index) => (
          <VideoCard
            key={index}
            image={VidData.image}
            title={VidData.title}
            description={VidData.description}
            time={VidData.time}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
