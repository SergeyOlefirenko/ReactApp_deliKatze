import React from 'react'
import { useNavigate } from "react-router-dom";
import background from '../images/healthbg.png'
import emergencycallPic from '../images/emergencycall.png'
import ambulancePic from '../images/ambulance.png'
import policePic from '../images/police.png'
import waterPic from '../images/water.png'
import firePic from '../images/fire.png'
import gasPic from '../images/gas.png'
import girlPic from '../images/girl.png'
function Emergency() {
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
        <button className='b1'><img src={emergencycallPic} alt="" /></button>
        <button className='b2'><img src={ambulancePic} alt="" /></button>
        <button className='b3'><img src={policePic} alt="" /></button>
      </div>
      <div className='p-content2'>
        <button className='b3'><img src={waterPic} alt="" /></button>
        <button className='b5'><img src={firePic} alt="" /></button>
        <button className='b6'><img src={gasPic} alt="" /></button>
      </div>
      <div className='p-content4'>
      <button onClick={previous} className="btn2">
          <img src={girlPic} alt="" /> 
          </button>
      </div>
    </div>
    <div><h1>This is my emergency page</h1>
          </div>
    </div>
  )
}

export default Emergency