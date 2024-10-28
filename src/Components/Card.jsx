import React from 'react' 
import img1 from "../assets/testImg1.png"
// import img2 from "../assets/testImg2.png"
import "./Card.css"

const Card = (props) => {
    const { title, topic, desc, time} = props
  return (
    <>
        <div className="card">
          <img className="card-img-top" src={img1} alt="img" />
          <h5>{title}</h5>
          <div className="card-body">
            <h4 className="card-title">{topic}</h4>
            <p className="card-text">{desc}</p>
            <h6>{time}</h6>
          </div>
        </div>

    </>
  )
}

export default Card