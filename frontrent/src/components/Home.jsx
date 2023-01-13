import React from 'react'
import Causel from './Causel'
import "../styles/home.css"
import air from "../assets/air-conditioning.png"
import lamp from "../assets/desk-lamp.png"
import headphone from "../assets/headphone.png"
import treadmill from "../assets/treadmill.png"

function Home() {
  return (
    <div>
      <div>
      <Causel/>
      </div>

    <div className='box1'>
      <div className='innerbox'>
        <img src={lamp} alt="" style={{height:"100px",width:"100px"}}/>
        <p>
          furniture
          </p>
      </div>
      <div className='innerbox'>
        <img src={air} alt="" style={{height:"100px",width:"100px"}} />
        <p>
          appliances
          </p>
      </div>
      <div className='innerbox'>
        <img src={headphone} alt="" style={{height:"100px",width:"100px"}}/>
        <p>
          Gadgets
          </p>
      </div>
      <div className='innerbox'>
        <img src={treadmill} alt=""  style={{height:"100px",width:"100px"}}/>
        <p>
          GYM Equipments
          </p>
      </div>
    </div>
    



    </div>
  )
}

export default Home