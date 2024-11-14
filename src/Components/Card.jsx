// import React from 'react'
import "./Card.css"

const Card = (props) => {
    const { title, topic, desc, time, img} = props
  return (
    <>
        <div className="card">
          <img className="card-img-top" src={img} alt="img" />
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