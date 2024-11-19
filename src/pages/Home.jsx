// import React from 'react'
import Card from "../Components/Card";
// import img1 from "../assets/Image 1.png";
// import img2 from "../assets/Image 2.png";
// import img3 from "../assets/Image 3.png";
import { trendingNewData } from "../trendingNewsData";

const Home = () => {
  return (
    <>
      <div className="bg-companyRed font-Nunito ">
        <div className="p-7 text-3xl text-white">
          <p className="" >Trending News</p>
        </div>
        <div className="p-10 gap-3 bg-companyRed block md:flex ">
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
          <br />

          {/* <Card className="cad1" img={img2} title = "SPORTS" topic="A Private Inner-City Melbourne Home That Embraces Understated Drama" desc="lorem ipsum bla bla bla" time="2 mins ago"/><br/>

          <Card className="cad2" img={img3} title = "TRAVEL" topic="A Private Inner-City Melbourne Home That Embraces Understated Drama" desc="lorem ipsum bla bla bla" time="2 mins ago"/> */}
        </div>
      </div>
    </>
  );
};

export default Home;
