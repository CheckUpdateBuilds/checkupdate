import React from 'react'

const Card = (props) => {
    const { title, topic, desc, time} = props
  return (
    <>
        <div className="card">
          <img className="card-img-top" src="holder.js/100px180/" alt="img" style={{width: "18rem"}}/>
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