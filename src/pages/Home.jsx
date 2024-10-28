// import React from 'react'
import './Home.css'
import Card from "../Components/Card"

const Home = () => {
  return (
    <>

      <div className="wrapper">
        <div className="container text-white wrapper">
          <p>Trending News</p>
        </div>
        <div className="container gap-3 carddy">
          <Card className="cad" title = "POLITICS" topic="A Private Inner-City Melbourne Home That Embraces Understated Drama" desc="lorem ipsum bla bla bla" time="2 mins ago"/><br/>

          <Card className="cad1" title = "SPORTS" topic="A Private Inner-City Melbourne Home That Embraces Understated Drama" desc="lorem ipsum bla bla bla" time="2 mins ago"/><br/>

          <Card className="cad2" title = "TRAVEL" topic="A Private Inner-City Melbourne Home That Embraces Understated Drama" desc="lorem ipsum bla bla bla" time="2 mins ago"/>
        </div>
      </div>
    </>
  )
}

export default Home