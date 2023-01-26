import React from 'react'
import { useNavigate } from "react-router-dom";
import background from '../images/healthbg.png'
import fitnessPic from '../images/fitness.png'
import runningPic from '../images/running.png'
import bicyclePic from '../images/bicycle.png'
import athletePic from '../images/athlete.png'
import tennisPic from '../images/tennis.png'
import basketballPic from '../images/basketball.png'
import windsurfingPic from '../images/windsurfing.png'
import surfingPic from '../images/surfing.png'
import waterpoloPic from '../images/waterpolo.png'
import girlPic from '../images/girl.png'
function Sport() {
  const navigate = useNavigate();
  function previous() {
    navigate('/personal')
  }
  function fitnessHandler() {
    navigate('/fitness')
  }
  return (
    <div className='personal' style={{ backgroundImage: `url(${background})` }}>
    <div className="personal-buttons">  
    </div>
    <div className='personal-content'>
      <div className='p-content1'>
        <button onClick={fitnessHandler} className='b1'><img src={fitnessPic} alt="" /></button>
        <button className='b2'><img src={runningPic} alt="" /></button>
        <button className='b3'><img src={bicyclePic} alt="" /></button>
      </div>
      <div className='p-content2'>
        <button className='b4'><img src={athletePic} alt="" /></button>
        <button className='b5'><img src={tennisPic} alt="" /></button>
        <button className='b6'><img src={basketballPic} alt="" /></button>
      </div>
      <div className='p-content3'>
        <button className='b7'><img src={windsurfingPic} alt="" /></button>
        <button className='b8'><img src={surfingPic} alt="" /></button>
        <button className='b9'><img src={waterpoloPic} alt="" /></button>
      </div>
      <div className='p-content4'>
      <button onClick={previous} className="btn2">
          <img src={girlPic} alt="" /> 
          </button>
      </div>
      
    </div>
    <div><h1>This is my sport page</h1>
          </div>
    </div>
  )
}

export default Sport