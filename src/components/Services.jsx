import React from 'react'
import { useNavigate } from "react-router-dom";
import background from '../images/healthbg.png'
import cleanerPic from '../images/cleaner.png'
import veterinarianPic from '../images/veterinarian.png'
import engineerPic from '../images/engineer.png'
import realestatePic from '../images/realestate.png'
import automobilePic from '../images/automobile.png'
import chargingPic from '../images/charging.png'
import girlPic from '../images/girl.png'
function Services() {
  const navigate = useNavigate();
  function previous() {
    navigate('/personal')
  }
  return (
    <div className='personal' style={{ backgroundImage: `url(${background})` }}>
    <div className="personal-buttons">  
    </div>
    <div className='personal-content'>
      <div className='p-content1'>
        <button className='b1'><img src={cleanerPic} alt="" /></button>
        <button className='b2'><img src={veterinarianPic} alt="" /></button>
        <button className='b3'><img src={engineerPic} alt="" /></button>
      </div>
      <div className='p-content2'>
        <button className='b4'><img src={realestatePic} alt="" /></button>
        <button className='b5'><img src={automobilePic} alt="" /></button>
        <button className='b6'><img src={chargingPic} alt="" /></button>
      </div>
      <div className='p-content4'>
      <button onClick={previous} className="btn2">
          <img src={girlPic} alt="" /> 
          </button>
      </div>
    </div>
    <div><h1>This is my services page</h1>
          </div>
    </div>
  )
}

export default Services