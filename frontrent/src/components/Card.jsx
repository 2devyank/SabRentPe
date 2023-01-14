import React from 'react'
import image from "../assets/black-bicycle.jpg"
import "../styles/Card.css"

function Card() {
  return (
    <div className="card">
        <img src={image} alt="" className="img" />
        <button className='imbut'>add</button>
        <span>Name</span>
        <hr />
        <span>mrent/mo</span>
    </div>
  )
}

export default Card