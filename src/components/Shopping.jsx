import React from 'react'
import { useNavigate } from "react-router-dom";
import background from '../images/healthbg.png'
import cheesePic from '../images/cheese.png'
import shoesPic from '../images/shoes.png'
import dressPic from '../images/dress.png'
import bearPic from '../images/bear.png'
import smartphonePic from '../images/smartphone.png'
import diamondPic from '../images/diamond.png'
import girlPic from '../images/girl.png'
function Shopping() {
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
        <button className='b1'><img src={cheesePic} alt="" /></button>
        <button className='b2'><img src={shoesPic} alt="" /></button>
        <button className='b3'><img src={dressPic} alt="" /></button>
      </div>
      <div className='p-content2'>
        <button className='b4'><img src={bearPic} alt="" /></button>
        <button className='b5'><img src={diamondPic} alt="" /></button>
        <button className='b6'><img src={smartphonePic} alt="" /></button>
      </div>
      <div className='p-content4'>
      <button onClick={previous} className="btn2">
          <img src={girlPic} alt="" /> 
          </button>
      </div>
    </div>
    <div><h1>This is my shopping page</h1>
          </div>
    </div>
  )
}

export default Shopping