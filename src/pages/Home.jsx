// import React from 'react'
import './Home.css'
import Card from "../Components/Card"

const Home = () => {
  return (
    <>
    
      <div className="container-fluid p-5 t-news">
        <div className="top pb-5 text-white">
          Trending News
        </div>
        <div className="row gap-4">
          <Card className="col col-4 col-sm-3" title = "Politics" topic="A Private Inner-City Melbourne Home That Embraces Understated Drama" desc="lorem ipsum bla bla bla" time="2 mins ago"/>

          <Card className="col col-4 col-sm-3" title = "Politics" topic="A Private Inner-City Melbourne Home That Embraces Understated Drama" desc="lorem ipsum bla bla bla" time="2 mins ago"/>

          <Card className="col col-4 col-sm-3" title = "Politics" topic="A Private Inner-City Melbourne Home That Embraces Understated Drama" desc="lorem ipsum bla bla bla" time="2 mins ago"/>
        </div>
        
      </div>
    
    
    </>
  )
}

export default Home